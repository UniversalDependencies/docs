// -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*-
// vim:set ft=javascript ts=4 sw=4 sts=4 cindent:

/*
Annotation documentation support.

Author: Sampo Pyysalo
License: MIT (http://opensource.org/licenses/MIT)
*/

var Annodoc = (function($, window, undefined) {

    var normalizeSpace = function(s) {
        s = s.replace(/^\s+/, '');
        s = s.replace(/\s+$/, '');
        s = s.replace(/\s\s+/g, ' ');
        return s;
    };

    var normalizeData = function(s) {
        s = s.replace(/^\s+/, '');
        s = s.replace(/\s+$/, '');
        s = s.replace(/[ \t]+/g, ' ');
        return s;
    };

    // return true iff given string only contains characters from a
    // right-to-left Unicode block and is not empty.
    var isRtl = function(s) {
        // range from http://stackoverflow.com/a/14824756
        return !!s.match(/^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]+$/);
    };

    // return true iff given string only contains characters from the
    // Hebrew Unicode block (U+0590-U+05FF) and is not empty.
    var isHebrew = function(s) {
        return !!s.match(/^[\u0590-\u05FF]+$/);
    };

    // return given token with possible modifications to accommodate
    // issues in brat rendering of right-to-left text
    // (https://github.com/UniversalDependencies/docs/issues/52)
    var rtlFix = function(s) {
        if (isRtl(s)) {
            var wrap = '\u02D1';
            s = wrap + s + wrap;
        }
        return s;
    };

    var compactJSON = function(s) {
        // remove (some) space from JSON string, giving a visually
        // more compact (but equivalent and still pretty-printed)
        // version.

        if (s === undefined) {
            return s;
        }

        // replace any space with ' ' in non-nested curly brackets
        s = s.replace(/(\{[^\{\}\[\]]*\})/g,
                      function(a, b) { return b.replace(/\s+/g, ' '); });
        // replace any space with ' ' in [] up to nesting depth 1
//        s = s.replace(/(\[(?:[^\[\]\{\}]|\[[^\[\]\{\}]*\])*\])/g,
//         		      function(a, b) { return b.replace(/\s+/g, ' '); });
        // actually, up to nesting depth 2
        s = s.replace(/(\[(?:[^\[\]\{\}]|\[(?:[^\[\]\{\}]|\[[^\[\]\{\}]*\])*\])*\])/g,
                      function(a, b) { return b.replace(/\s+/g, ' '); });
        return s;
    };

    var objectToString = function(data) {
        return compactJSON(JSON.stringify(data, undefined, '    '));
    };

    var parseSdToken = function(token) {
        // return [text, POS, features] for token encoded as
        // "text/POS[Feat1=Val1|...]", or [text, POS, ""] if no
        // features are included, or [text, "token", ""] if no POS
        // (/-separated string) is included.
        var text, POS_features;

        m = token.match(/^((?:[^\\]|\\.)+)\/(.+)$/);
        if (!m) {
            text = token, POS_features = 'token';
        } else {
            text = m[1], POS_features = m[2];
        }

        var POS, features;
        m = POS_features.match(/^(.*?)\[(.+)\]$/)
        if (!m) {
            POS = POS_features, features = '';
        } else {
            POS = m[1], features = m[2];
        }

        // apply defined backslash escape sequences
        text = text.replace(/((?:[^\\]+|\\.)*?)\\n/g, '$1\n');

        // unescape backslash escapes in text and tag
        text = text.replace(/([^\\]*)\\(.)/g, '$1$2');
        POS = POS.replace(/([^\\]*)\\(.)/g, '$1$2');

        return [text, POS, features];
    };

    // helper for *parse functions
    var makeLogger = function(logElement) {
        if (logElement === undefined) {
            return function(s) {
                console.log(s);
            };
        } else {
            return function(s) {
                logElement.val(logElement.val() + s + '\n');
            };
        }
    };

    // parse .ann format textbound line (helper for parseAnn)
    var parseAnnTextbound = function(line, log) {
        // NOTE: space matched more liberally than in primary format
        m = line.match(/^(\S+)\s+(\S+)\s+(\d+\s+\d+(?:;\d+\s+\d+)*)\s+(.*)$/);

        if (!m) {
            log('failed to parse textbound: "'+line+'"');
            return null;
        }

        var id = m[1],
            type = m[2],
            spanstr = m[3],
            text = m[4];

        // multiple (start, end) spans separated by semicolons
        var spanarr = normalizeSpace(spanstr).split(';'),
            spans = [];
        for (var i=0; i<spanarr.length; i++) {
            m = spanarr[i].match(/^(\d+)\s+(\d+)$/);
            if (!m) {
                log('error parsing offsets: "'+line+'"');
                return null;
            }
            var start = m[1], end = m[2];
            start = parseInt(start, 10);
            end = parseInt(end, 10);
            if (isNaN(start) || isNaN(end) || end < start) {
                log('failed to parse offsets: "'+line+'"');
                return null;
            }
            spans.push([start, end]);
        }

        // TODO verify text

        return [id, type, spans];
    };

    // parse .ann format relation line (helper for parseAnn)
    var parseAnnRelation = function(line, log) {
        // NOTE: space matched more liberally than in primary format
        m = line.match(/^(\S+)\s+(\S+)\s+(\S+):(\S+)\s+(\S+):(\S+)\s*$/);

        if (!m) {
            log('failed to parse relation: "'+line+'"');
            return null;
        }

        var id = m[1],
            type = m[2],
            a1l = m[3],
            a1i = m[4],
            a2l = m[5],
            a2i = m[6];

        return [id, type, [ [a1l, a1i], [a2l, a2i] ] ];
    };

    // parse .ann format equiv line (helper for parseAnn)
    var parseAnnEquiv = function(line, log) {
        // NOTE: space matched more liberally than in primary format
        m = line.match(/^(\S+)\s+(\S+)\s+(.+?)\s*$/);

        if (!m) {
            log('failed to parse equiv: "'+line+'"');
            return null;
        }

        var id = m[1],
            type = m[2],
            argstr = m[3];

        var args = normalizeSpace(argstr).split(' ');

        return [id, type].concat(args);
    };

    // parse .ann format event line (helper for parseAnn)
    var parseAnnEvent = function(line, log) {
        // NOTE: space matched more liberally than in primary format
        m = line.match(/^(\S+)\s+(\S+):(\S+)(.*)$/);

        if (!m) {
            log('failed to parse event: "'+line+'"');
            return null;
        }

        var id = m[1],
            type = m[2],
            trigger = m[3],
            argstr = m[4];

        var args = [];
        if (!argstr.match(/^\s*$/)) {
            var argarr = normalizeSpace(argstr).split(' ');
            for (var i=0; i<argarr.length; i++) {
                m = argarr[i].match(/^(\S+):(\S+)$/);
                if (!m) {
                    log('failed to parse event args: "'+line+'"');
                    return null;
                }
                args.push([m[1], m[2]]);
            }
        }

        return [id, trigger, args];
    };

    // parse .ann format modifier line (helper for parseAnn)
    var parseAnnModifier = function(line, log) {
        // NOTE: space matched more liberally than in primary format
        m = line.match(/^(\S+)\s+(\S+)\s+(\S+)\s*$/);

        if (!m) {
            log('failed to parse modifier: "'+line+'"');
            return null;
        }

        var id = m[1],
            type = m[2],
            target = m[3];

        return [id, type, target];
    };

    // parse .ann format attribute line (helper for parseAnn)
    var parseAnnAttribute = function(line, log) {
        // NOTE: space matched more liberally than in primary format
        m = line.match(/^(\S+)\s+(\S+)\s+(\S+)(.*)$/);

        if (!m) {
            log('failed to parse attribute: "'+line+'"');
            return null;
        }

        var id = m[1],
            type = m[2],
            target = m[3],
            value = m[4];

        // support also older ("modifier") format w/o value
        if (value.match(/^\s*$/)) {
            value = true;
        }

        return [id, type, target, value];
    };

    // parse .ann format normalization line (helper for parseAnn)
    var parseAnnNormalization = function(line, log) {
        // TODO: implement parsing for normalization annotations
        log('normalization annotation parsing not implemented: "'+line+'"');
        return null;
    };

    // parse .ann format comment line (helper for parseAnn)
    var parseAnnComment = function(line, log) {
        // TODO: implement parsing for comment annotations
        log('comment annotation parsing not implemented: "'+line+'"');
        return null;
    };

    // parse .ann format, return brat document data format
    var parseAnn = function(ann, log) {
        if (log === undefined) {
            log = makeLogger();
        }
        var lines = ann.split('\n');

        // first line is assumed to be the document text
        var document_text = lines[0];

        // parse lines after the first as .ann-formatted lines
        // (see e.g. http://brat.nlplab.org/standoff.html)
        var textbounds = [],
            relations = [],
            events = [],
            equivs = [],
            attributes = [],
            normalizations = [],
            comments = [],
            error = false;
        for (var i=1; i<lines.length; i++) {
            var line = lines[i];

            if (line.match(/^\s*$/)) {
                continue; // ignore empties
            }

            // annotation type determined by first character on line
            switch (line[0]) {
                case 'T':
                    textbounds.push(parseAnnTextbound(line, log));
                    break;
                case 'R':
                    relations.push(parseAnnRelation(line, log));
                    break;
                case 'E':
                    events.push(parseAnnEvent(line, log));
                    break;
                case 'M':
                    attributes.push(parseAnnModifier(line, log));
                    break;
                case 'A':
                    attributes.push(parseAnnAttribute(line, log));
                    break;
                case 'N':
                    normalizations.push(parseAnnNormalization(line, log));
                    break;
                case '*':
                    equivs.push(parseAnnEquiv(line, log));
                    break;
                case '#':
                    comments.push(parseAnnComment(line, log));
                    break;
                default:
                    log('failed to parse line: "'+line+'"');
                    error = true;
            }
        }

        // filter annotation lists for nulls or empties (marking parse failure),
        // setting error if found.
        var validAnnotation = function(ann) {
            if (ann !== null && ann.length != 0) {
                return true;
            } else {
                error = true; // NOTE: side-effect
                return false;
            }
        };
        textbounds = textbounds.filter(validAnnotation);
        relations = relations.filter(validAnnotation);
        events = events.filter(validAnnotation);
        equivs = equivs.filter(validAnnotation);
        attributes = attributes.filter(validAnnotation);
        normalizations = normalizations.filter(validAnnotation);
        comments = comments.filter(validAnnotation);

        log('.ann parse done, error = '+error);

        // split textbounds into entities and triggers, where any textbound
        // referenced from an event is a trigger, and everything else is an
        // entity.
        var entities = [],
            triggers = [],
            isTrigger = {};
        for (var i=0; i<events.length; i++) {
            var triggerId = events[i][1];
            isTrigger[triggerId] = true;
        }
        for (var i=0; i<textbounds.length; i++) {
            var textboundId = textbounds[i][0];
            if (isTrigger[textboundId]) {
                 triggers.push(textbounds[i]);
            } else {
                 entities.push(textbounds[i]);
            }
        }

        return {
            'text': document_text,
            'entities': entities,
            'triggers': triggers,
            'relations': relations,
            'events': events,
            'equivs': equivs,
            'attributes': attributes,
            'normalizations': normalizations,
            'comments': comments,
            'error': error
        };
    };

    // parse SD format, return brat document data format
    var parseSd = function(sd, log) {
        if (log === undefined) {
            log = makeLogger();
        }

        sd = normalizeData(sd);

        var lines = sd.split('\n');

        // first line is assumed to be sentence text
        var sentence_text = lines[0];
        sentence_text = normalizeSpace(sentence_text);

        // determine token offsets and construct spans ("entities") and
        // features ("attributes")
        var tokens = sentence_text.split(' '),
            spans = [],
            attributes = [],
            aidseq = 1,
            offset = 0,
            error = false;
        sentence_text = '';
        for (var i=0; i<tokens.length; i++) {
            var text_POS_features = parseSdToken(tokens[i]);
            var text = text_POS_features[0],
                POS = text_POS_features[1],
                features = text_POS_features[2];
            //; special case hack for RTL languages, see
            //; https://github.com/UniversalDependencies/docs/issues/52
            var fixedText = rtlFix(text);
            var length = fixedText.length;
            if (!text.match(/^\s*$/)) { // skip space-only (e.g. newline)
                spans.push(['T'+(i+1), POS, [[offset, offset+length]]]);
                tokens[i] = text;
                if (features) {
                    features = features.split('|');
                    for (var j=0; j<features.length; j++) {
                        var m = features[j].match(/^(.*)=(.*)$/);
                        if (!m) {
                            // TODO better error reporting
                            console.log('failed to parse feature', features[j]);
                            continue;
                        }
                        attributes.push(['A'+aidseq++, m[1], 'T'+(i+1), m[2]]);
                    }
                }
            }
            offset += length + 1;
            sentence_text += fixedText + ' ';
        }

        var tokenIndex = function(t) {
            // accept two formats: indexed ('dog-1') and simple ('dog')
            // TODO: consider case-insensitive implementation

            // indexed match
            var m = t.match(/^\s*(.*)-(\d+)\s*$/)
            if (m) {
                var text = m[1], idx = m[2];
                // confirm match (SD indices are 1-based)
                idx = parseInt(idx, 10) - 1;
                if (tokens[idx] === text) {
                    return idx;
                } else {
                    // TODO consider skipping output, not necessarily an error
                    log('token text mismatch: "'+text+'" vs. "'+
                        tokens[idx]+'"');
                }
                // fall through to allow simple match for e.g. 'il-2'
            }

            // simple match
            var firstIdx = $.inArray(t, tokens);
            if (firstIdx === -1) {
                return null;
            } else {
                if ($.inArray(t, tokens, firstIdx+1) !== -1) {
                    log('warning: multiple occurrences of "'+t+'"');
                }
                return firstIdx;
            }
        };

        // parse lines after the first as dependencies, construct relations
        var relations = [];
        for (var i=1; i<lines.length; i++) {
            var line = lines[i];
            line = normalizeSpace(line);

            if (line.match(/^\s*$/)) {
                continue; // ignore empties
            }

            var m = line.match(/^(\S+)\s*\(\s*(\S+?)\s*,\s*(\S+)\s*\)$/);
            if (!m) {
                log('failed to parse: "'+line+'"');
                error = true;
                continue;
            }
            var type = m[1], from = m[2], to = m[3];

            // ignore root dependency (if any) for visualization
            // TODO: consider showing root when defined?
            if (type == 'root' && from.match(/-0$/)) {
                log('note: skipping "root": "'+line+'"');
                continue;
            }

            // determine which tokens are referred to
            var fromIdx = tokenIndex(from), toIdx = tokenIndex(to);
            if (fromIdx === null || toIdx === null) {
                log('failed to find token: "'+line+'"');
                error = true;
                continue;
            }

            relations.push([ 'R'+i, type, [ [ 'arg1', 'T'+(fromIdx+1) ],
                                            [ 'arg2', 'T'+(toIdx+1)   ] ] ]);
        }

        log('SD parse done: '+spans.length+' tokens, '+
            relations.length+' dependencies.');

        return {
            'text': sentence_text,
            'entities' : spans,
            'relations' : relations,
            'attributes': attributes,
            'error' : error
        };
    };

    var parseConllU = function(conll, log, strict) {
        var doc = new ConllU.Document();
        includeEmpty = true;    // assume empty nodes are always shown
        return doc.parse(conll, log, strict).toBrat(log, includeEmpty);
    }

    // parse CoNLL-X format, return brat document data format
    var parseConllX = function(conll, log) {
        if (log === undefined) {
            log = makeLogger();
        }

        conll = normalizeData(conll);

        var lines = conll.split('\n');

        // each line has the following format
        // (see http://ilk.uvt.nl/conll/#dataformat):
        //
        // 1.  ID: token counter, starting at 1 for each new sentence
        // 2.  FORM: word form or punctuation symbol
        // 3.  LEMMA: lemma or stem of word form
        // 4.  CPOSTAG: coarse-grained part-of-speech tag
        // 5.  POSTAG: fine-grained part-of-speech tag
        // 6.  FEATS: set of syntactic and/or morphological features
        // 7.  HEAD: head ID of the current token
        // 8.  DEPREL: dependency relation to the HEAD
        // 9.  PHEAD:	projective head ID of current token
        // 10. PDEPREL:	dependency relation to the PHEAD
        //
        // (here, we will use ID, FORM, CPOSTAG, HEAD and DEPREL)
        // TODO: use also at least PHEAD, PDEPREL
        var ids = [],
            forms = [],
            postags = [],
            heads = [],
            deprels = [],
            error = false;
        for (var i=0; i<lines.length; i++) {
            var line = lines[i];
            line = line.replace(/\s$/, '');
            var fields = line.split(/\s+/);
            // TODO: do we want this flexibility on field number?
            if (fields.length >= 8 && fields.length <= 10) {
                ids.push(fields[0]);
                forms.push(fields[1]);
                postags.push(fields[4]);
                heads.push(fields[6]);
                deprels.push(fields[7]);
            } else {
                // TODO: better error handling
                log('expected 8-10 fields, got '+fields.length+': "'+line+'"');
                error = true;
                continue;
            }
        }

        var spans = [],
            relations = [],
            offset = 0;
        for (i=0; i<ids.length; i++) {
            var length = forms[i].length;
            spans.push(['T'+ids[i], postags[i], [[offset, offset+length]]]);
            offset += length + 1;
            // TODO: handle root
            if (heads[0] === 0) {
                continue;
            }
            relations.push(['R'+ids[i], deprels[i],
                            [ [ 'arg1', 'T'+heads[i] ],
                              [ 'arg2', 'T'+ids[i] ] ] ]);
        }

        var text = forms.join(' ');

        return {
            'text': text,
            'entities' : spans,
            'relations' : relations,
            'error' : error
        };
    };

    // from http://stackoverflow.com/a/2117523
    var random_guid = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
                                                              function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    };

    // add prefix and suffix to all IDs in data, modifying data. If
    // neither a prefix nor suffix is provided, add a random GUID
    // prefix.
    var reviseIds = function(data, prefix, suffix) {
        if (prefix === undefined) {
            prefix = '';
        }
        if (suffix === undefined) {
            suffix = '';
        }
        if (prefix === '' && suffix == '') {
            // no prefix or suffix defined: generate random GUID prefix
            prefix = random_guid() + '-';
        }

        // entities: entity ID only
        var entities = data['entities'] || [];
        for (var i=0; i<entities.length; i++) {
            entities[i][0] = prefix + entities[i][0] + suffix;
        }

        // triggers: trigger ID only
        var triggers = data['triggers'] || [];
        for (var i=0; i<triggers.length; i++) {
            triggers[i][0] = prefix + triggers[i][0] + suffix;
        }

        // relations: relation ID and argument IDs
        var relations = data['relations'] || [];
        for (var i=0; i<relations.length; i++) {
            relations[i][0] = prefix + relations[i][0] + suffix;
            var args = relations[i][2];
            for (var j=0; j<args.length; j++) {
                args[j][1] = prefix + args[j][1] + suffix;
            }
        }

        // events: event ID, trigger ID, and argument IDs
        var events = data['events'] || [];
        for (var i=0; i<events.length; i++) {
            events[i][0] = prefix + events[i][0] + suffix;
            events[i][1] = prefix + events[i][1] + suffix;
            var args = events[i][2];
            for (var j=0; j<args.length; j++) {
                args[j][1] = prefix + args[j][1] + suffix;
            }
        }

        // equivs: argument IDs only
        var equivs = data['equivs'] || [];
        for (var i=0; i<equivs.length; i++) {
            for (var j=2; j<equivs[i].length; j++) {
                equivs[i][j] = prefix + equivs[i][j] + suffix;
            }
        }

        // attributes: attribute ID and target ID
        var attributes = data['attributes'] || [];
        for (var i=0; i<attributes.length; i++) {
            attributes[i][0] = prefix + attributes[i][0] + suffix;
            attributes[i][2] = prefix + attributes[i][2] + suffix;
        }

        // normalizations: normalization ID and target ID
        var normalizations = data['normalizations'] || [];
        for (var i=0; i<normalizations.length; i++) {
            normalizations[i][0] = prefix + normalizations[i][0] + suffix;
            normalizations[i][2] = prefix + normalizations[i][2] + suffix;
        }

        // comments: target ID only(!)
        var comments = data['comments'] || [];
        for (var i=0; i<comments.length; i++) {
            comments[i][0] = prefix + comments[i][0] + suffix;
        }

        // styles (extension): target ID or IDs
        var styles = data['styles'] || [];
        for (var i=0; i<styles.length; i++) {
            if (styles[i][0] instanceof Array) {
                styles[i][0][0] = prefix + styles[i][0][0] + suffix;
                styles[i][0][1] = prefix + styles[i][0][1] + suffix;
            } else {
                styles[i][0] = prefix + styles[i][0] + suffix;
            }
        }

        return data;
    };

    // START copied from brat visualizer_ui.js
    var adjustToCursor = function(evt, element, offset, top, right) {
        // get the real width, without wrapping
        element.css({ left: 0, top: 0 });
        var screenHeight = $(window).height();
        var screenWidth = $(window).width();
        // FIXME where are these 22s coming from?!?
        var elementHeight = element.height() + 22;
        var elementWidth = element.width() + 22;
        var x, y;
        offset = offset || 0;
        if (top) {
            y = evt.clientY - elementHeight - offset;
            if (y < 0) top = false;
        }
        if (!top) {
            y = evt.clientY + offset;
        }
        if (right) {
            x = evt.clientX + offset;
            if (x >= screenWidth - elementWidth) right = false;
        }
        if (!right) {
            x = evt.clientX - elementWidth - offset;
        }
        if (y < 0) y = 0;
        if (x < 0) x = 0;
        element.css({ top: y, left: x });
    };

    var commentPopup = $('<div id="commentpopup"/>').appendTo('body');

    var commentDisplayed = false;

    var displayCommentTimer = null;
    var displayComment = function(evt, target, comment, commentText) {
        if (commentText) {
            comment += Util.escapeHTMLwithNewlines(commentText);
        }
        commentPopup.html(comment);
        adjustToCursor(evt, commentPopup, 10, true, true);
        clearTimeout(displayCommentTimer);
        /* slight "tooltip" delay to allow highlights to be seen
           before the popup obstructs them. */
        var delay = 250; // ms
        displayCommentTimer = setTimeout(function() {
            commentPopup.stop(true, true).fadeIn();
            commentDisplayed = true;
        }, delay);
    };

    // TODO: these should be visualization-specific. Globals prevent
    // mixing multiple configs in a single page.
    var spanTypes = null;
    var relationTypesHash = null;
    var typesLoaded = function(_spanTypes, _entityAttributeTypes,
                               _eventAttributeTypes, _relationTypesHash) {
        spanTypes = _spanTypes;
        relationTypesHash = _relationTypesHash;
    };

    // invoked by brat dispatcher to display additional information related
    // to a particular span ("text-bound") annotation.
    var displaySpanInformation = function(evt, target, spanId, spanType,
                                          mods, spanText, commentText) {

        // in part following brat/visualizer_ui.js:displaySpanComment()
        var spanLabel = Util.spanDisplayForm(spanTypes, spanType)
        var comment = '';
        comment += '<div>';
        comment += ('<div class="comment_text">"' +
                    Util.escapeHTML(spanText) +
                    '"</div>');
        comment += ((spanLabel.match(/^\s*$/) ? '' :
                     '<span class="comment_type_id_wrapper">' +
                     '<span class="comment_type">' +
                     Util.escapeHTML(spanLabel) +
                     '</span></span>'));
        if (mods.length) {
            comment += '<div>' + Util.escapeHTML(mods.join(', ')) + '</div>';
        }
        comment += '</div>';
        displayComment(evt, target, comment, commentText);
    };

    // invoked by brat dispatcher to display additional information related
    // to a particular arc (relation) annotation.
    var displayArcInformation = function(evt, target, symmetric, arcId,
                                         originSpanId, originSpanType, role,
                                         targetSpanId, targetSpanType,
                                         commentText) {
        var arcRole = target.attr('data-arc-role');
        // &#8594 == Unicode right arrow
        var arrowStr = '&#8594;';
        var arcDisplayForm = Util.arcDisplayForm(spanTypes, null,
                                                 arcRole, relationTypesHash);
        var comment = "";
        // "VBP -> nsubj -> NNS" - type comment formatting
//         var originType = Util.spanDisplayForm(spanTypes, originSpanType);
//         var targetType = Util.spanDisplayForm(spanTypes, targetSpanType);
//         comment += '<span class="comment_type_id_wrapper">' +
//                    '<span class="comment_type">' +
//                    Util.escapeHTML(originType)     + ' ' + arrowStr + ' ' +
//                    Util.escapeHTML(arcDisplayForm) + ' ' + arrowStr + ' ' +
//                    Util.escapeHTML(targetType) +
//                    '</span></span>';
        comment += '<span class="comment_type_id_wrapper">' +
                   '<span class="comment_type">' +
                   Util.escapeHTML(arcDisplayForm) +
                   '</span></span>';
        displayComment(evt, target, comment, commentText);
    };

    // invoked by brat dispatcher to hide additional information
    // (see displaySpanInformation and displayArcInformation)
    var hideInformation = function() {
        clearTimeout(displayCommentTimer);
        if (commentDisplayed) {
            commentPopup.stop(true, true).fadeOut(function() {
                commentDisplayed = false;
            });
        }
    };

    var onMouseMove = function(evt) {
        if (commentDisplayed) {
            adjustToCursor(evt, commentPopup, 10, true, true);
        }
    };
    // END copied from brat visualizer_ui.js

    // Return callback triggered on changes to visualization input.
    var makeInputHandler = function(eId, defaultLabel, parse,
                                    dispatcher, visualization,
                                    inputArea, parsedArea, logArea) {

        var inputHandler = function() {
            var parsed, parse_error = false;

            logArea.val(''); // clear log

            try {
                parsed = parse(inputArea.val(), makeLogger(logArea));
                parsed = reviseIds(parsed, eId + '-');
                parsed = setSentenceLabels(parsed, defaultLabel);
                parse_error = parsed.error;
            } catch (e) {
                console.log(e);
                parse_error = true;
            }

            // console.log(parse_error);

            if (!parse_error) {
                inputArea.css({'border': '2px inset'});
                visualization.removeClass('haserror');
            } else {
                inputArea.css({'border': '2px solid red'});
                visualization.addClass('haserror');
                return;
            }

            parsedArea.text(objectToString(parsed));

            try {
                dispatcher.post('requestRenderData', [$.extend({}, parsed)]);
                parsedArea.css({'border': '2px inset'});
                visualization.removeClass('haserror');
            } catch(e) {
                console.log('requestRenderData error:', e);
                logArea.append('requestRenderData error: '+e);
                parsedArea.css({'border': '2px solid red'});
                visualization.addClass('haserror');
            }
        };

        return inputHandler;
    };

    // Return embedding options for element.
    var embeddingOptions = function(elem, options) {
        // initialize options, falling back to element attributes as
        // defaults
        if (options === undefined) {
            options = {};
        }
        $.each(elem[0].attributes, function(idx) {
            var name = this.name;
            var value = this.value;
            // ignore standard attributes and options provided by caller
            var standardAttr = ['id', 'class', 'data-embednum'];
            if ($.inArray(name.toLowerCase(), standardAttr) === -1 &&
                options[name] === undefined) {
                options[name] = value;
            }
        });
        return options;
    };

    // Return embedding data, defaulting to element text.
    var embeddingData = function(elem, data) {
        if (data === undefined) {
            data = elem.text();
            // trim one initial and/or terminal newline to accommodate
            // source formatting (e.g. "<div ...>\nDATA\n</div>")
            if (data.length !== 0 && data[0] === '\n') {
                data = data.slice(1);
            }
            if (data.length !== 0 && data.slice(-1) === '\n') {
                data = data.slice(0, -1);
            }
        }
        return data;
    };

    var setEmbeddingStyles = function(elem) {
        // special case for supporting simple "~~~ sdparse [...] ~~~"
        // syntax: if elem has a <pre> parent, add "embedding" class
        // to the <pre>, otherwise add the "embedding" class to the
        // element itself, so we can control margins etc. on the
        // top-level element.
        if (elem.parent('pre').length !== 0) {
            elem.parent('pre').addClass('embedding');
        } else {
            elem.addClass('embedding');
        }

        // add a class to the element itself.
        elem.addClass('embedded-wrapper');
    };

    // Set sentence labels in parsed data
    var setSentenceLabels = function(parsed, defaultLabel) {
        // if there are no labels or the label of the first sentence
        // is empty, use default as label for first sentence.
        if (parsed.sentlabels === undefined || parsed.sentlabels.length === 0) {
            parsed.sentlabels = [defaultLabel];
        } else if (parsed.sentlabels[0] === null) {
            parsed.sentlabels[0] = defaultLabel;
        }
        return parsed;
    };

    // Determine space to allot for sentence labels.
    var sentenceLabelWidth = function(sentenceLabels) {
        var maxWidth = 20; // no less than this

        if (!sentenceLabels || sentenceLabels.length === 0 ||
            sentenceLabels.filter(function(x) { return !!x }).length === 0) {
            return width;
        }
        for (var i=0; i<sentenceLabels.length; i++) {
            var label = sentenceLabels[i];
            if (label !== undefined && label !== null) {
                var width = 10 * label.length; // char width guesstimate
                maxWidth = width > maxWidth ? width : maxWidth;
            }
        }
        return maxWidth;
    };

    // Display sentence labels in parsed data in given visualization.
    var displaySentenceLabels = function(parsed, dispatcher, visualization) {
        if (parsed.sentlabels && parsed.sentlabels.length !== 0 &&
            parsed.sentlabels.filter(function(x) { return !!x }).length !== 0) {
            var sentenceLabels = parsed.sentlabels.slice(0);
            dispatcher.on('doneRendering', function() {
                var elements = visualization.find('.sentnum text');
                for (var i=0; i<elements.length; i++) {
                    if (sentenceLabels[i]) {
                        $(elements[i]).text(sentenceLabels[i]);
                        $(elements[i]).show();
                    }
                }
                // Show separating lines for all numbers (including hidden)
                visualization.find('.sentnum path').show();
            });
        }
    };

    // Return elements for pre-build embedding interface based on
    // element attributes, or null if not available.
    var embeddingElements = function(elem) {
        var visId = elem.attr('data-visid'),
            inputId = elem.attr('data-inputid'),
            parsedId = elem.attr('data-parsedid'),
            logId = elem.attr('data-logid');

        if (visId === undefined || inputId === undefined ||
            parsedId === undefined || logId === undefined) {
            // console.log('embeddingElements: ids not defined');
            return null;
        }

        var visualization = $('#'+visId),
            inputArea = $('#'+inputId),
            parsedArea = $('#'+parsedId),
            logArea = $('#'+logId);

        if (visualization === undefined || inputArea === undefined ||
            parsedArea === undefined || logArea === undefined) {
            console.log('embeddingElements: elements not found');
            return null;
        }

        // remove possible initial data on element triggering embedding.
        elem.empty();

        return {
            'visualization': visualization,
            'inputArea': inputArea,
            'parsedArea': parsedArea,
            'logArea': logArea,
        };
    };

    // Create elements for tab-based embedding interface
    var buildEmbedding = function(elem, eId, options) {
        var inputTabId = eId + '-2',
            parsedTabId = eId + '-3',
            infoTabId = eId + '-4';

        // visualization and related data elements
        var visDiv = $('<div id="'+eId+'-vis"></div>');
        var tabDiv = $('<div id="'+eId+'-tabs"></div>');
        var shDiv  = $('<div id="'+eId+'-sh" class="show-hide-div"></div>');
        var showHideButton = $('<button id="'+eId+'-toggle" '+
                               'class="show-hide-toggle">hide</button>');
        shDiv.append(showHideButton);

        var inputArea = $('<textarea id="'+eId+'-in" ' +
                          'class="embedded-brat-data"></textarea>');
        var parsedArea = $('<textarea id="'+eId+'-brat" disabled="disabled" ' +
                           'class="embedded-brat-data"></textarea>');
        var logArea = $('<textarea id="'+eId+'-log" disabled="disabled" ' +
                        'class="embedded-brat-data"></textarea>');

        // build top-level structure
        // tab headers (li+a)
        tabDiv.append([
                       '<div id="'+eId+'">',
                       '  <ul>',
                       '    <li><a href="#'+inputTabId+'">input</a></li>',
                       '    <li><a href="#'+parsedTabId+'">brat</a></li>',
                       '    <li><a href="#'+infoTabId+'">info</a></li>',
                       '  </ul>',
                       '</div>'
                       ].join('\n'));
        // tab content (divs)
        var inputTab   = $('<div id="'+inputTabId+'"></div>'),
            parsedTab = $('<div id="'+parsedTabId+'"></div>'),
            logTab  = $('<div id="'+infoTabId+'"></div>');
        inputTab.append(inputArea);
        parsedTab.append(parsedArea);
        logTab.append(logArea);

        // add content to top-level element, turn into jQuery-ui tabs
        tabDiv.append(inputTab, parsedTab, logTab);
        tabDiv.tabs();
        var shVisible = 0;
        var setShToggleText = function() {
            $('span', showHideButton).text(shVisible ? 'hide' : 'edit');
        }
        tabDiv.hide(); // TODO make optional (control e.g. using class)

        // wire up button to toggle tab visibility
        showHideButton.button().click(function(ev) {
            tabDiv.toggle('blind');
            shVisible = !shVisible;
            setShToggleText();
        });
        setShToggleText();

        // hide button controlling tab visibility unless set in
        // options
        if (!(options && options.tabs)) {
            showHideButton.hide();
        }

        // attach top-level elements
        elem.empty().append(shDiv, tabDiv, visDiv);

        return {
            'visualization': visDiv,
            'inputArea': inputArea,
            'parsedArea': parsedArea,
            'logArea': logArea,
            'debugControls': showHideButton,
        };
    };

    // Set up dispatcher bindings for embedAnnotation.
    var setupDispatcher = function(dispatcher, visualization, parsedArea) {
        var renderError = function() {
            parsedArea.css({'border': '2px solid red'});
            visualization.addClass('haserror');
        };
        dispatcher.on('renderError: Fatal', renderError);
        dispatcher.on('displaySpanComment', displaySpanInformation);
        dispatcher.on('displayArcComment', displayArcInformation);
        dispatcher.on('hideComment', hideInformation);
        dispatcher.on('mousemove', onMouseMove);
    };

    var embeddedIdSeq = 1;

    var embedAnnotation = function(elem, parse, cdata, data, options) {
        // argument defaults
        parse = (parse !== undefined) ? parse : parseAnn;
        cdata = (cdata !== undefined) ? cdata : {};
        data = embeddingData(elem, data);
        options = embeddingOptions(elem, options);

        setEmbeddingStyles(elem);

        var myIdSeq = embeddedIdSeq++;
        var eId = 'embedded-' + myIdSeq;

        // store sequence number for reference resolution
        elem.attr('data-embednum', myIdSeq);

        // attempt to find elements for visualization etc. via
        // attributes on elem, falling back to dynamically building a
        // tab-based UI if none are found.
        var eElements = embeddingElements(elem);
        if (eElements === null) {
            var eElements = buildEmbedding(elem, eId, options);
        }
        var visualization = eElements.visualization,
            inputArea = eElements.inputArea,
            parsedArea = eElements.parsedArea,
            logArea = eElements.logArea,
            debugControls = eElements.debugControls;

        // set UI content from data and derivatives
        inputArea.text(data);

        var parsed = parse(data, makeLogger(logArea));
        parsed = reviseIds(parsed, eId + '-');
        parsed = setSentenceLabels(parsed, ''+myIdSeq);

        parsedArea.text(objectToString(parsed));

        if (parsed.error) {
            inputArea.css({'border': '2px solid red'});
            visualization.addClass('haserror');
            // show debug (tab) controls on error to help debugging
            if (debugControls !== undefined) {
                debugControls.show();
            }
        }

        // we need to create a Dispatcher in advance of embed() to bind
        // typesLoaded callback before it is triggered. This in turn
        // is needed to capture the parsed type info for popups.
        // (TODO: do we really need a separate Dispatcher for each
        // embedded visualization?)
        var dispatcher = new Dispatcher();
        dispatcher.on('spanAndAttributeTypesLoaded', typesLoaded);

        // visualization configuration
        var visualizerOptions = {
            'sentNumMargin': sentenceLabelWidth(parsed.sentlabels),
        };

        // initialize brat visualization
        var visId = visualization.attr('id');
        Util.embed(visId, $.extend({'collection': null}, cdata),
                   $.extend({}, parsed), webFontURLs, dispatcher,
                   visualizerOptions);

        setupDispatcher(dispatcher, visualization, parsedArea);

        displaySentenceLabels(parsed, dispatcher, visualization);

        var inputHandler = makeInputHandler(eId, ''+myIdSeq, parse,
                                            dispatcher, visualization,
                                            inputArea, parsedArea, logArea);

        inputArea.bind('propertychange keyup input paste', inputHandler);

        // show as late as possible to minimize "jumping"
        // (https://github.com/spyysalo/annodoc/issues/11)
        elem.show();
    };

    var resolveEmbeddedReference = function(elem, data) {
        var refId = elem.attr('href'),
	    refElem = $(refId);

        if (refElem === undefined) {
            console.log('Failed to resolve reference to', refId, 'for', elem);
            return;
        }

        var refSeq = refElem.attr('data-embednum');
        if (refSeq === undefined) {
            console.log('no data-embednum for', refElem);
            return;
        }

        var origText = elem.text();
        var resolvedText = origText.replace(/\#/, refSeq);
        if (origText === resolvedText) {
            console.log('failed replace in text', origText, 'for', elem);
            return;
        }

        elem.text(resolvedText);
    };

    // createDocumentationLink caches
    var collDocByName = {};
    var destByCollDoc = {};

    // createDocumentationLink helper
    var findMatchingTitle = function(s, collection, documents, matchCase) {
        if (documents instanceof Array !== true) {
            return null;
        }
        if (matchCase == undefined) {
            matchCase = true;
        }
        // attempt match against document, collection/document, and
        // collection/<subdirs>/document forms
        var subdirRe = new RegExp('.*?\/'+collection+'\/(.*)\/.*');
        for (i=0; i<documents.length; i++) {
            var subdirs = documents[i].url.replace(subdirRe, '$1');
            var coll_doc = collection+'/'+documents[i].title;
            var coll_sd_doc = collection+'/'+subdirs+'/'+documents[i].title;
            if (documents[i].title == s || coll_doc == s || coll_sd_doc == s) {
                return documents[i];
            }
        }
        if (matchCase) {
            return null;
        }
        for (i=0; i<documents.length; i++) {
            var coll_doc = (collection+'/'+documents[i].title).toLowerCase();
            if (documents[i].title.toLowerCase() == s.toLowerCase() ||
                coll_doc == s.toLowerCase()) {
                return documents[i];
            }
        }
        return null;
    };

    var cmp = function(a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    }

    // createDocumentationLink helper
    var findBestDocumentMatch = function(s, collections) {
        var currentColl = collections._current;
        var currentDocs = collections[currentColl];
        var d;

        // first try everything with case-sensitive matching, then repeat
        // with case-insensitive matching.
        for (var ci=0; ci<2; ci++) {
            var matchCase = !ci;

            // prioritize match in the current collection (language code)
            if ((d = findMatchingTitle(s, currentColl, currentDocs, matchCase))
                !== null) {
                return [currentColl, d];
            }

            // if none, find matches in one of the universal collections
            if ((d = findMatchingTitle(s, "u-pos", collections["u-pos"], matchCase)) != null)
            {
                return ["u-pos", d];
            }
            if ((d = findMatchingTitle(s, "u-feat", collections["u-feat"], matchCase)) != null)
            {
                return ["u-feat", d];
            }
            if ((d = findMatchingTitle(s, "u-dep", collections["u-dep"], matchCase)) != null)
            {
                return ["u-dep", d];
            }

            // if none, find matches in any collection
            var matches = [];
            $.each(collections, function(coll, docs) {
                if ((d = findMatchingTitle(s, coll, docs, matchCase))
                    !== null) {
                    matches.push([coll, d]);
                }
            });

            // sort multiple matches by length of shared prefix with
            // current collection, so that e.g. "fi-dep" is preferred
            // over "en-pos" if current is "fi-pos".
            var prefixLength = {};
            for (var i=0; i<matches.length; i++) {
                var coll = matches[i][0],
                    maxn = Math.max(currentColl.length, coll.length),
                    n = 0;
                for (; n<maxn && coll[n] == currentColl[n]; n++);
                prefixLength[coll] = n;
            }
            matches.sort(function(a, b) {
                return -cmp(prefixLength[a[0]], prefixLength[b[0]]);
            });
            if (matches.length != 0) {
                return matches[0];
            }
        }
        // TODO: consider attempting also URL matches.

        // failed to match anything
        return null;
    };

    var createDocumentationLink = function(e, collections) {
        var s, linkedByText;

        // Determine linked page by element href attribute value by
        // default, falling back on element text if not given.
        if (e.attr('href')) {
            s = e.attr('href');
            linkedByText = false;
        } else {
            s = e.text();
            linkedByText = true;
        }

        // workaround for UD docs issue #504: replace references to
        // "old-style" collection structure (e.g. zh-dep/) with
        // equivalends in "new-style" structure (e.g. zh/dep/)
        s = s.replace(/^([a-z]{2,3})-(pos|dep|feat)/, '$1/$2');

        if (collDocByName[s] === undefined) {
            collDocByName[s] = findBestDocumentMatch(s, collections);
        }

        if (collDocByName[s] !== null) {
            var coll = collDocByName[s][0],
                doc  = collDocByName[s][1],
                url = doc.url;

            // allow in-document auto-linking destination anchors to
            // pre-empt links to other documents, and use the "al-doc"
            // class to block this functionality.
            var inDocAnchor = destByCollDoc[coll + '/' + doc.title];
            if (inDocAnchor !== undefined && !e.hasClass('al-doc')) {
                url = '#' + inDocAnchor.id;
            }

            e.attr('href', url);
            e.addClass('doclink');
            // add title if not aready present
            if (e.attr('title') === undefined) {
                e.attr('title', coll+' '+doc.title)
            }
            // if the link was set by the element text content, mark
            // with additional class and turn e.g. "entity/person"
            // into "person" in link text
            if (linkedByText) {
                e.addClass('doclabel');
                if ((m = e.text().match(/^.+\/(.+)$/)) !== null) {
                    e.text(m[1]);
                }
            }
        } else {
            // failed to link, mark. TODO: use class instead of css
            e.css('color', 'red');
            if (e.attr('title') === undefined) {
                e.attr('title', 'failed to link "'+s+'" to any entry in any collection')
            }
        }
    };

    // <a> href attribute values that trigger auto-linking
    var docLinkRegex = /^((?:[a-zA-Z_-]+\/)*)([a-zA-Z0-9_-]+(?:\:[a-zA-Z0-9_-]+)?)$/;

    var createDocumentationLinks = function(collections) {
        // first, find anchors that are auto-linkable and anchors that
        // are auto-linking destinations within the document

        // auto-linkable anchors either 1) have empty or missing href,
        // id and name attributes, or 2) have a href that matches
        // docLinkRegex.
        var autoLinkable = function(e) {
            // e.href gives page URL even if attribute is empty
            var href = $(e).attr('href');
            if (!href && !e.id && !e.name) {
                return true;
            } else if (typeof href === 'string' && href.match(docLinkRegex)) {
                return true;
            }
            return false;
        };

        // target destination anchors have a specific class and an id.
        var linkDestination = function(e) {
            if (!!e.id && $(e).hasClass('al-dest')) {
                return true;
            } else {
                return false;
            }
        };

        // store linkables and destinations
        var linkables = [],
            destinations = {};

        var linkDestination = function(e) {
            if (e.id && e.id.match(/^al-./) && $(e).hasClass('al-dest')) {
                return true;
            } else {
                return false;
            }
        };

        // store linkables and destinations
        var linkables = [],
            destinations = {};

        $('a').each(function(idx) {
            if (autoLinkable(this)) {
                linkables.push(this);
            } else if(linkDestination(this)) {
                // strip initial "al-" from ID
                var m = this.id.match(/^al-(.*)/);
                if (!m) {
                    console.log('internal error: not al-dest: ' + this.id);
                } else{
                    destinations[m[1]] = this;
                }
            }
        });

        // store in-document destinations for auto-linking, and turn
        // linkable anchors into links.

        destByCollDoc = destinations;

        for (var i=0; i<linkables.length; i++) {
            createDocumentationLink($(linkables[i]), collections);
        }
    };

    // mapping between class attribute values and functions that
    // should be used to parse the content of elements with those
    // classes.
    var parseFunctionMap = {
        // Stanford dependencies
        '.sdparse' : parseSd,
        '.language-sdparse' : parseSd,
        '.sd-parse' : parseSd, // deprecated, avoid using

        // CoNLL-X
        '.conllx-parse' : parseConllX,
        '.language-conllx' : parseConllX,

        // CoNLL-U
        '.conllu': parseConllU,
        '.conllu-parse' : parseConllU,
        '.language-conllu' : parseConllU,

        // .ann standoff
        '.ann-annotation' : parseAnn,
        '.language-ann' : parseAnn,
    };

    // helper for activate()
    var findParseFunction = function(element) {
        var classes = element.className.split(' '),
            parseFunction;
        for (var i=0; i<classes.length; i++) {
            var dotClass = '.' + classes[i];
            if (parseFunctionMap[dotClass] !== undefined) {
                parseFunction = parseFunctionMap[dotClass];
                break;
            }
        }
        if (parseFunction === undefined) {
            console.log('internal error: missing parse function');
        }
        return parseFunction;
    };

    // list of [element, parseFunction, collectionData] triplets
    // specifying elements that are to be replaced by embedded
    // visualizations but have not been processed yet.
    var pendingEmbeddings = [];

    // trigger the first of pendingEmbeddings
    var embedFirstPending = function() {
        if (pendingEmbeddings.length === 0) {
            return false;
        }

        var pending = pendingEmbeddings.shift();
        var element = pending[0],
            parseFunction = pending[1],
            collectionData = pending[2];
        embedAnnotation(element, parseFunction, collectionData);

        return true;
    };

    // set jQuery waypoint for first of pendingEmbeddings to trigger
    // callback when reached.
    var waypointFirstPending = function(callback, offset) {
        if (callback === undefined) {
            callback = embedFirstPending;
        }
        if (offset === undefined) {
            offset = '100%'; // bottom of screen
        }
        if (pendingEmbeddings.length === 0) {
            return false;
        }
        var pending = pendingEmbeddings[0];
        var element = pending[0];

        var wpOptions = {
            'offset' : offset,
            'triggerOnce': true,
        };

        element.waypoint(callback, wpOptions);
    };

    // embed first of pendingEmbeddings and set waypoint on the next
    // to call this same function back ("recurse") when triggered.
    var embedAndWaypointPending = function() {
        embedFirstPending();

        // delay recursion to allow render
        setTimeout(function() {
            // refresh required due to height changes from embedding
            $.waypoints('refresh');
            waypointFirstPending(embedAndWaypointPending, '200%');
        }, 10);
    };

    // trigger all pendingEmbeddings
    var embedAllPending = function() {
        while (pendingEmbeddings.length !== 0) {
            embedFirstPending();
        }
    };

    // generate embedded visualizations
    var createEmbeddedVisualizations = function(collectionData) {
        // to avoid slowdown with many embedded visualizations, don't
        // trigger full embedding for everything immediately, but
        // only store required data
        var embedClasses = Object.keys(parseFunctionMap);
        $(embedClasses.join(',')).each(function(idx) {
            // (see http://stackoverflow.com/a/122704 for extend())
            var element = $(this),
                parseFunction = findParseFunction(this),
                cdataCopy = jQuery.extend(true, {}, collectionData);
            // hide to minimize "jumping" on draw
            // (https://github.com/spyysalo/annodoc/issues/11)
            element.hide();
            pendingEmbeddings.push([element, parseFunction, cdataCopy]);
        });

        // to simply embed everything immediately instead of
        // attempting to space things out, just uncomment the
        // following line.
//         embedAllPending();

        // embed first of pending embeddings and set waypoint to
        // trigger embedding for the next and recurse.
        embedAndWaypointPending();
    };

    // top-level function to call to embed visualizations,
    // create documentation links, etc.
    var activate = function(collectionData, documentCollections) {
        // generate embedded visualization for each element with
        // an appropriate class
        createEmbeddedVisualizations(collectionData);

        // fill in "href" attribute for <a> elements intended to
        // refer to documentation
        createDocumentationLinks(documentCollections);

        // resolve references (e.g. "Figure #" -> "Figure 1"): call
        // resolveEmbeddedReference for elements with "embed-ref" class.
        $('.embed-ref').each(function(idx) {
            resolveEmbeddedReference($(this));
        });
    };

    return {
        activate: activate,
    };
})(jQuery, window);
