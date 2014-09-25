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
        return function(s) {
            if (logElement === undefined) {
                console.log(s);
            } else {
                logElement.val(logElement.val() + s + '\n');
            }
        };
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
            var length = text.length;
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
            sentence_text += text + ' ';
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

    var hasSpace = function(s) {
        return !!s.match(/\s/);
    };

    // represents CoNLL-U sentence
    var ConllUSentence = function(sentenceId, elements, comments) {
        this.id = sentenceId;
        this.elements = elements;
        this.comments = comments;
        this.baseOffset = 0;
    };

    // set offset of first character in sentence (for standoff
    // generation)
    ConllUSentence.prototype.setBaseOffset = function(baseOffset) {
        this.baseOffset = baseOffset;
    }

    ConllUSentence.prototype.dependencies = function() {
        var dependencies = [];

        for (var i=0; i<this.elements.length; i++) {
            var element = this.elements[i];
            dependencies = dependencies.concat(element.dependencies());
        }

        return dependencies;
    };

    ConllUSentence.prototype.words = function() {
        return this.elements.filter(function(e) { 
            return e.isWord();
        });
    };

    ConllUSentence.prototype.multiwords = function() {
        return this.elements.filter(function(e) {
            return e.isMultiword();
        });
    };

    ConllUSentence.prototype.tokens = function() {
        // extract token sequence by omitting word IDs that are
        // included in a multiword token range.
        var multiwords = this.multiwords();
        var inRange = {};
        for (var i=0; i<multiwords.length; i++) {
            var mw = multiwords[i];
            for (var j=mw.rangeFrom(); j<=mw.rangeTo(); j++) {
                inRange[j] = true;
            }
        }
        return this.elements.filter(function(e) {
            return e.isToken(inRange);
        });
    };

    // return the text of the sentence for visualization with brat
    ConllUSentence.prototype.bratText = function() {
        var words = this.words();
        var tokens = this.tokens();

        var wordText = words.map(function(w) { return w.form }).join(' ');
        var tokenText = tokens.map(function(w) { return w.form }).join(' ');

        var combinedText = wordText;
        if (wordText != tokenText) {
            combinedText += '\n' + tokenText;
        }

        return combinedText;
    };

    // return the annotated text spans of the sentence for visualization
    // with brat.
    ConllUSentence.prototype.bratSpans = function() {
        var spans = [],
            offset = this.baseOffset;

        // create an annotation for each word
        var words = this.words();
        for (var i=0; i<words.length; i++) {
            var length = words[i].form.length;
            spans.push([this.id+'-T'+words[i].id, words[i].cpostag, 
                        [[offset, offset+length]]]);
            offset += length + 1;
        }

        return spans;
    }

    // return attributes of sentence annotations for visualization
    // with brat.
    ConllUSentence.prototype.bratAttributes = function() {
        var words = this.words();

        // create attributes for word features
        var attributes = [],
            aidseq = 1;
        for (var i=0; i<words.length; i++) {
            var word = words[i],
                tid = this.id+'-T'+word.id;
            var nameVals = word.features();
            for (var j=0; j<nameVals.length; j++) {
                var name = nameVals[j][0], 
                    value = nameVals[j][1];
                attributes.push([this.id+'-A'+aidseq++, name, tid, value]);
            }
        }

        return attributes;
    };

    // return relations for sentence dependencies for visualization
    // with brat.
    ConllUSentence.prototype.bratRelations = function() {
        var dependencies = this.dependencies();
        var relations = [];

        for (var i=0; i<dependencies.length; i++) {
            var dep = dependencies[i];
            relations.push([this.id+'-R'+i, dep[2], 
                            [ [ 'arg1', this.id+'-T'+dep[1] ],
                              [ 'arg2', this.id+'-T'+dep[0] ] ] ]);
        }

        return relations;
    };

    // return comments (notes) on sentence annotations for
    // visualization with brat.
    ConllUSentence.prototype.bratComments = function() {
        var words = this.words();

        // TODO: better visualization for LEMMA, POSTAG, and MISC.
        var comments = [];
        for (var i=0; i<words.length; i++) {
            var word = words[i],
                tid = this.id+'-T'+word.id,
                label = 'AnnotatorNotes';
            comments.push([tid, label, 'Lemma: ' + word.lemma]);
            if (word.postag !== '_') {
                comments.push([tid, label, 'Postag: ' + word.postag]);
            }
            if (word.misc !== '_') {
                comments.push([tid, label, 'Misc: ' + word.misc]);
            }
        }

        return comments;
    };

    // return representation of sentence in brat embedded format (see
    // http://brat.nlplab.org/embed.html)
    ConllUSentence.prototype.toBrat = function() {
        var text = this.bratText();
        var spans = this.bratSpans();
        var attributes = this.bratAttributes();
        var relations = this.bratRelations();
        var comments = this.bratComments();

        return {
            'text': text,
            'entities': spans,
            'attributes': attributes,
            'relations': relations,
            'comments': comments
        };
    };

    ConllUSentence.prototype.elementById = function() {
        var elementById = {};

        for (var i=0; i<this.elements.length; i++) {
            elementById[this.elements[i].id] = this.elements[i];
        }

        return elementById;
    };

    ConllUSentence.prototype.addError = function(issue, element, issues) {
        issues.push('line '+(element.lineidx+1)+': '+issue+' ("'+element.line+'")');
    }

    // Check validity of the sentence. Return list of strings
    // representing issues found in validation (empty list if none).
    ConllUSentence.prototype.validate = function() {
        var issues = [];

        this.validateUniqueIds(issues);
        this.validateWordSequence(issues);
        this.validateMultiwordSequence(issues);
        this.validateReferences(issues);

        return issues;
    };

    // Check for presence of ID duplicates
    ConllUSentence.prototype.validateUniqueIds = function(issues) {
        issues = (issues !== undefined ? issues : []);

        var initialIssueCount = issues.length;
        var elementById = {};

        for (var i=0; i<this.elements.length; i++) {
            var element = this.elements[i];
            if (elementById[element.id] !== undefined) {
                this.addError('non-unique ID "'+element.id+'"',
                              element, issues);
            }
            elementById[element.id] = element;
        }

        return issues.length === initialIssueCount;
    };

    // Check validity of word ID sequence (should be 1,2,3,...)
    ConllUSentence.prototype.validateWordSequence = function(issues) {
        issues = (issues !== undefined ? issues : []);

        var initialIssueCount = issues.length;
        var expectedId = 1;

        for (var i=0; i<this.elements.length; i++) {
            var element = this.elements[i];

            if (element.isMultiword()) {
                continue; // only check simple word sequence here
            }
            
            if (parseInt(element.id, 10) !== expectedId) {
                this.addError('word IDs should be 1,2,3,..., ' +
                              'expected '+expectedId+', got '+element.id,
                              element, issues);
            }
            expectedId = parseInt(element.id, 10) + 1;
        }

        return issues.length === initialIssueCount;
    };

    // Check that multiword token ranges are valid
    ConllUSentence.prototype.validateMultiwordSequence = function(issues) {
        issues = (issues !== undefined ? issues : []);

        var initialIssueCount = issues.length;
        var expectedId = 1;

        for (var i=0; i<this.elements.length; i++) {
            var element = this.elements[i];

            if (element.isMultiword() && element.rangeFrom() !== expectedId) {
                this.addError('multiword tokens must appear before '+
                              'first word in their range',
                              element, issues);
            } else {
                expectedId = parseInt(element.id, 10) + 1;
            }
        }

        return issues.length === initialIssueCount;
    };

    // Check validity of ID references in HEAD and DEPS.
    ConllUSentence.prototype.validateReferences = function(issues) {
        issues = (issues !== undefined ? issues : []);
        
        var initialIssueCount = issues.length;
        var elementById = this.elementById();

        for (var i=0; i<this.elements.length; i++) {
            var element = this.elements[i];

            // validate HEAD
            if (!element.validHeadReference(elementById)) {
                this.addError('HEAD is not valid ID: "'+element.head+'"',
                              element, issues);
            }
            
            // validate DEPS
            var elemDeps = element.dependencies(true);
            for (var j=0; j<elemDeps.length; j++) {
                var head = elemDeps[j][1];
                if (head !== '0' && elementById[head] === undefined) {
                    this.addError('invalid ID "'+head+'" in DEPS',
                                  element, issues);
                }
            }
        }

        return issues.length === initialIssueCount;
    };

    ConllUSentence.prototype.repair = function(log) {
        log = (log !== undefined ? log : makeLogger());

        if (!this.validateUniqueIds()) {
            this.repairUniqueIds(log);
        }

        if (!this.validateWordSequence()) {
            this.repairWordSequence(log);
        }

        if (!this.validateMultiwordSequence()) {
            this.repairMultiwordSequence(log);
        }

        if (!this.validateReferences()) {
            this.repairReferences(log);
        }

        var issues = this.validate();
        return issues.length === 0;
    };

    ConllUSentence.prototype.repairUniqueIds = function(log) {
        log = (log !== undefined ? log : makeLogger());

        var elementById = {},
            filtered = [];

        for (var i=0; i<this.elements.length; i++) {
            var element = this.elements[i];
            if (elementById[element.id] === undefined) {
                elementById[element.id] = element;
                filtered.push(element);
            } else {
                log('repair: remove element with duplicate ID "'+element.id);
            }
        }
        this.elements = filtered;
    
        return true;
    };

    ConllUSentence.prototype.repairWordSequence = function(log) {
        log('TODO: implement ConllUSentence.repairWordSequence()');
        return true;
    };

    ConllUSentence.prototype.repairMultiwordSequence = function(log) {
        log('TODO: implement ConllUSentence.repairMultiwordSequence()');
        return true;
    };

    ConllUSentence.prototype.repairReferences = function(log) {
        log = (log !== undefined ? log : makeLogger());

        var elementById = this.elementById();

        for (var i=0; i<this.elements.length; i++) {
            var element = this.elements[i];

            // repair HEAD if not valid
            if (!element.validHeadReference(elementById)) {
                log('repair: blanking invalid HEAD');
                element.head = null;
            }

            // repair DEPS if not valid
            if (element.deps === '_') {
                continue;
            }
            var deparr = element.deps.split('|'),
                filtered = [];
            for (var j=0; j<deparr.length; j++) {
                var dep = deparr[j];
                var m = dep.match(ConllUDepRegex);
                if (m) {
                    var head = m[1], deprel = m[2];
                    if (head === '0' || elementById[head] !== undefined) {
                        filtered.push(dep);
                    } else {
                        log('repair: removing invalid ID from DEPS');
                        error = true;
                    }
                } else {
                    console.log('internal error: repairReferences(): ' +
                                'invalid DEPS');
                }
            }
            if (filtered.length === 0) {
                element.deps = '_';
            } else {
                element.deps = filtered.join('|');
            }
        }
        return true;
    };

    // represents CoNLL-U token or word
    var ConllUElement = function(fields, lineidx, line) {
        this.id = fields[0];
        this.form = fields[1];
        this.lemma = fields[2];
        this.cpostag = fields[3];
        this.postag = fields[4];
        this.feats = fields[5];
        this.head = fields[6];
        this.deprel = fields[7];
        this.deps = fields[8];
        this.misc = fields[9];
        this.lineidx = lineidx;
        this.line = line;
    };

    // for regex specification, see
    // https://github.com/UniversalDependencies/docs/issues/33
    var ConllUFeatRegex = /^([A-Z0-9][a-zA-Z0-9]*)=([A-Z0-9][a-zA-Z0-9]*(?:,[A-Z0-9][a-zA-Z0-9]*)*)$/;
    var ConllUFeatValueRegex = /^[A-Z0-9][a-zA-Z0-9]*$/;
    var ConllUDepRegex = /^(\d+):(.*)$/;

    // constraints that hold for all fields
    ConllUElement.prototype.validateField = function(field, name, issues) {
        name = (name !== undefined ? name : 'field');
        issues = (issues !== undefined ? issues : []);
        
        if (field === undefined) {
            issues.push('invalid '+name);
            return false;
        } else if (field.length === 0) {
            issues.push(name+' must not be empty: "'+field+'"');
            return false;
        } else if (hasSpace(field)) {
            issues.push(name+' must not contain space: "'+field+'"');
            return false;
        } else {
            return true;
        }
    };

    ConllUElement.prototype.validateId = function(id, issues) {
        issues = (issues !== undefined ? issues : []);
        
        if (!this.validateField(id, 'ID', issues)) {
            return false;
        } else if (id.match(/^\d+$/)) {
            if (id === '0') {
                issues.push('ID indices must start from 1: "'+id+'"');
                return false;
            } else {
                return true;
            }
        } else if (id.match(/^(\d+)-(\d+)$/)) {
            m = id.match(/^(\d+)-(\d+)$/);
            if (!m) {
                console.log('internal error');
                return false;
            }
            var start = parseInt(m[1], 10), 
                end = parseInt(m[2], 10);
            if (end < start) {
                issues.push('ID ranges must have start <= end: "'+id+'"');
                return false;
            } else {
                return true;
            }
        } else {
            issues.push('ID must be integer or range: "'+id+'"');
            return false;
        }
    };

    ConllUElement.prototype.validateForm = function(form, issues) {
        issues = (issues !== undefined ? issues : []);
        
        if (!this.validateField(form, 'FORM', issues)) {
            return false;
        } else {
            return true;
        }
    };

    ConllUElement.prototype.validateLemma = function(lemma, issues) {
        issues = (issues !== undefined ? issues : []);
        
        if (!this.validateField(lemma, 'LEMMA', issues)) {
            return false;
        } else {
            return true;
        }
    };
    
    ConllUElement.prototype.validateCpostag = function(cpostag, issues) {
        issues = (issues !== undefined ? issues : []);
        
        if (!this.validateField(cpostag, 'CPOSTAG', issues)) {
            return false;
        } else {
            return true;
        }
    };

    ConllUElement.prototype.validatePostag = function(postag, issues) {
        issues = (issues !== undefined ? issues : []);
        
        if (!this.validateField(postag, 'POSTAG', issues)) {
            return false;
        } else {
            return true;
        }
    };

    ConllUElement.prototype.validateFeats = function(feats, issues) {
        issues = (issues !== undefined ? issues : []);
        
        if (!this.validateField(feats, 'FEATS', issues)) {
            return false;
        } else if (feats === '_') {
            return true;
        }
        var initialIssueCount = issues.length;
        var featarr = feats.split('|');
        var featmap = {};
        var prevName = null;
        for (var i=0; i<featarr.length; i++) {
            var feat = featarr[i];
            var m = feat.match(ConllUFeatRegex);
            if (!m) {
                // TODO more descriptive issue
                issues.push('invalid FEATS entry: "'+feat+'"');
                continue;
            }
            var name = m[1], valuestr = m[2];
            if (prevName !== null && 
                name.toLowerCase() < prevName.toLowerCase()) {
                issues.push('features must be ordered alphabetically ' +
                            '(case-insensitive): "'+name+'" < "'+prevName+'"');
                noIssue = false;
            }
            prevName = name;
            var values = valuestr.split(',');
            var valuemap = {}, validValues = [];
            for (var j=0; j<values.length; j++) {
                var value = values[j];
                var m = value.match(ConllUFeatValueRegex);
                if (!m) {
                    issues.push('invalid FEATS value: "'+value+'"');
                    continue;
                }
                if (valuemap[value] !== undefined) {
                    issues.push('duplicate feature value: "'+value+'"');
                    continue;
                }
                valuemap[value] = true;
                validValues.push(value);
            }
            if (featmap[name] !== undefined) {
                issues.push('duplicate feature name: "'+name+'"');
                continue;
            }
            if (validValues.length !== 0) {
                featmap[name] = validValues;
            }
        }
        return issues.length === initialIssueCount;
    };

    ConllUElement.prototype.validateHead = function(head, issues) {
        issues = (issues !== undefined ? issues : []);

        // TODO: consider checking that DEPREL is "root" iff HEAD is 0.
        
        if (head === null) {
            return true; // exceptional case for ConllUElement.repair()
        } else if (!this.validateField(head, 'HEAD', issues)) {
            return false;
        } else if (!head.match(/^\d+$/)) {
            issues.push('HEAD must be an ID or zero: "'+head+'"');
            return false;
        } else {
            return true;
        }
    };

    ConllUElement.prototype.validateDeprel = function(deprel, issues) {
        issues = (issues !== undefined ? issues : []);

        if (!this.validateField(deprel, 'DEPREL', issues)) {
            return false;
        } else {
            return true;
        }
    };

    ConllUElement.prototype.validateDeps = function(deps, issues) {
        issues = (issues !== undefined ? issues : []);

        // TODO: consider checking that deprel is "root" iff head is 0.

        if (!this.validateField(deps, 'DEPS', issues)) {
            return false;
        } else if (deps === '_') {
            return true;
        }
        var deparr = deps.split('|');
        var prevHead = null;
        // TODO: don't short-circuit on first error
        for (var i=0; i<deparr.length; i++) {
            var dep = deparr[i];
            m = dep.match(/^(\d+):(\S+)$/);
            if (!m) {
                // TODO more descriptive issue
                issues.push('invalid DEPS: "'+deps+'"');
                return false;
            }
            var head = m[1], deprel = m[2];
            if (prevHead !== null &&
                parseInt(head, 10) < parseInt(prevHead, 10)) {
                issues.push('DEPS must be ordered by head index');
                return false;
            }
            prevHead = head;
        }
        return true;
    };

    ConllUElement.prototype.validateMisc = function(misc, issues) {
        issues = (issues !== undefined ? issues : []);

        if (!this.validateField(misc, 'MISC', issues)) {
            return false;
        } else {
            return true;
        }
    };

    ConllUElement.prototype.validHeadReference = function(elementById) {
        return (this.head === '_' || this.head === null || this.head === '0' ||
                elementById[this.head] !== undefined);
    };

    ConllUElement.prototype.isWord = function() {
        // word iff ID is an integer
        return !!this.id.match(/^\d+$/);
    };

    ConllUElement.prototype.isMultiword = function() {
        return !!this.id.match(/^\d+-\d+$/);
    };

    ConllUElement.prototype.rangeFrom = function() {
        return parseInt(this.id.match(/^(\d+)-\d+$/)[1], 10);
    };

    ConllUElement.prototype.rangeTo = function() {
        return parseInt(this.id.match(/^\d+-(\d+)$/)[1], 10);
    };

    ConllUElement.prototype.isToken = function(inRange) {
        // token iff multiword or not included in a multiword range
        return this.isMultiword() || !inRange[this.id];
    };

    // return list of (DEPENDENT, HEAD, DEPREL) lists
    ConllUElement.prototype.dependencies = function(skipHead) {
        skipHead = (skipHead !== undefined ? skipHead : false);

        var elemDeps = [];
        if (!skipHead && this.head !== '_' && this.head !== null) {
            elemDeps.push([this.id, this.head, this.deprel]);
        }
        if (this.deps != '_') {
            var deparr = this.deps.split('|');
            for (var i=0; i<deparr.length; i++) {
                var dep = deparr[i];
                m = dep.match(ConllUDepRegex);
                if (m) {
                    elemDeps.push([this.id, m[1], m[2]]);
                } else {
                    console.log('internal error: dependencies(): invalid DEPS');
                }
            }
        }
        return elemDeps;
    }

    // return list of (name, value) pairs
    ConllUElement.prototype.features = function() {
        var nameVals = [];
        if (this.feats === '_') {
            return [];
        }
        var featarr = this.feats.split('|');
        for (var i=0; i<featarr.length; i++) {
            var feat = featarr[i];
            var m = feat.match(ConllUFeatRegex);
            if (!m) {
                continue;
            }
            var name = m[1], valuestr = m[2];
            var values = valuestr.split(',');
            for (var j=0; j<values.length; j++) {
                var value = values[j];
                var m = value.match(ConllUFeatValueRegex);
                if (!m) {
                    continue;
                }
                nameVals.push([name, value]);
            }
        }
        return nameVals;
    };

    // Check validity of the element. Return list of strings
    // representing issues found in validation (empty list if none).
    ConllUElement.prototype.validate = function() {
        var issues = [];

        this.validateId(this.id, issues);
        this.validateForm(this.form, issues);
        
        // multiword tokens (elements with range IDs) are (locally) valid
        // iff all remaining fields (3-10) contain just an underscore.
        if (this.isMultiword()) {
            if (this.lemma != '_' || 
                this.cpostag != '_' ||
                this.postag != '_' ||
                this.feats != '_' ||
                this.head != '_' ||
                this.deprel != '_' ||
                this.deps != '_' ||
                this.misc != '_') {
                issues.push('non-underscore field for multiword token');
            }
            return issues;
        }
        // if we're here, not a multiword token.

        this.validateLemma(this.lemma, issues);
        this.validateCpostag(this.cpostag, issues);
        this.validatePostag(this.postag, issues);
        this.validateFeats(this.feats, issues);
        this.validateHead(this.head, issues);
        this.validateDeprel(this.deprel, issues);
        this.validateDeps(this.deps, issues);
        this.validateMisc(this.misc, issues);

        return issues;
    };

    // Attempt to repair a non-valid element. Return true iff the
    // element is valid following repair, false otherwise.
    ConllUElement.prototype.repair = function(log) {
        log = (log !== undefined ? log : makeLogger());

        if (!this.validateId(this.id)) {
            return false; // can't be helped
        } 

        if (!this.validateForm(this.form)) {
            log('repair: blanking invalid FORM');
            this.form = '<ERROR>';
        }

        if (this.isMultiword()) {
            // valid as long as everything is blank
            this.lemma = '_'; 
            this.cpostag = '_';
            this.postag = '_';
            this.feats = '_';
            this.head = '_';
            this.deprel = '_';
            this.deps = '_';
            this.misc = '_';
            return true;
        }
        // if we're here, not a multiword token.

        if(!this.validateLemma(this.lemma)) {
            log('repair: blanking invalid LEMMA');
            this.lemma = '<ERROR>';
        }

        if(!this.validateCpostag(this.cpostag)) {
            log('repair: blanking invalid CPOSTAG');
            this.cpostag = '_'; // TODO: not valid
        }

        if(!this.validatePostag(this.postag)) {
            log('repair: blanking invalid POSTAG');
            this.postag = '_';
        }

        if(!this.validateFeats(this.feats)) {
            log('repair: blanking invalid FEATS');
            this.feats = '_';
        }

        if(!this.validateHead(this.head)) {
            log('repair: blanking invalid HEAD');
            this.head = null; // note: exceptional case
        }

        if(!this.validateDeprel(this.deprel)) {
            log('repair: blanking invalid DEPREL');
            this.deprel = '_'; // TODO: not valid
        }

        if(!this.validateDeps(this.deps)) {
            log('repair: blanking invalid DEPS');
            this.deps = '_';
        }

        if(!this.validateMisc(this.misc)) {
            log('repair: blanking invalid MISC');
            this.misc = '_';
        }

        var issues = this.validate();
        return issues.length === 0;
    };

    var repairConllUFields = function(fields, log) {
        if (log === undefined) {
            log = makeLogger();
        }
        if (fields.length > 10) {
            log('repair: discarding fields > 10');
            fields = fields.slice(0, 10);
        } else {
            log('repair: filling in empty ("_") for missing fields');
            for (var m=0; m<10-fields.length; m++) {
                fields.push('_');
            }
        }
    };

    var strictConllUSplitter = function(line) {
        // strict CoNLL format parsing: only split on TAB, no extra space.
        if (line.length === 0) {
            return [];
        } else {
            return line.split('\t');
        }
    }

    var looseConllUSplitter = function(line) {
        // loose CoNLL format parsing: split on any space sequence, trim
        // surrounding space.    
        line = line.trim();
        if (line.length === 0) {
            return [];
        } else {
            return line.split(/\s+/);
        }
    }

    var selectConllUSplitter = function(conll, log, strict) {
        // return function to use for dividing lines into fields.

        if (strict) {
            return strictConllUSplitter;
        }
        // very simple heuristic: any TABs in the input trigger
        // strict parsing, loose only if none present.
        if (conll.indexOf('\t') !== -1) {
            log('note: TAB found, parsing CoNLL-U in strict mode.')
            return strictConllUSplitter;
        } else {
            log('note: no TAB found, parsing CoNLL-U in loose mode.')
            return looseConllUSplitter;
        }
    };

    var isConllUComment = function(line) {
        return line.length !== 0 && line[0] === '#';
    };

    // parse CoNLL-U format, return brat document data format
    // (see http://universaldependencies.github.io/docs/format.html)
    //
    // CoNLL-U files contain three types of lines:
    // 1.  Word lines
    // 2.  Blank lines marking sentence boundaries
    // 3.  Comment lines starting with a hash ("#")        
    //
    // Each word line has the following format
    // 1.  ID: Word index, integer starting at 1 for each new sentence; 
    //     may be a range for tokens with multiple words.
    // 2.  FORM: Word form or punctuation symbol.
    // 3.  LEMMA: Lemma or stem of word form.
    // 4.  CPOSTAG: Google universal part-of-speech tag from the 
    //     Universal POS tag set.
    // 5.  POSTAG: Language-specific part-of-speech tag; underscore 
    //     if not available.
    // 6.  FEATS: List of morphological features from the Universal 
    //     feature inventory or from a defined language-specific extension;
    //      underscore if not available.
    // 7.  HEAD: Head of the current token, which is either a value of ID
    //     or zero (0).
    // 8.  DEPREL: Universal Stanford dependency relation to the HEAD
    //     (root iff HEAD = 0) or a defined language-specific subtype
    //     of one.
    // 9.  DEPS: List of secondary dependencies (head-deprel pairs).
    // 10. MISC: Any other annotation.
    var parseConllU = function(conll, log, strict) {
        if (log === undefined) {
            log = makeLogger();
        }
        if (strict === undefined) {
            strict = false;
        }

        var error = false;
        var logError = function(message) {
            log('error: ' + message);
            error = true;
        };

        // TODO: handle other newline formats
        var lines = conll.split('\n');

        // select splitter to use for dividing the lines into fields.
        var splitter = selectConllUSplitter(conll, log, strict);

        var sentences = [],
            elements = [],            
            comments = [],
            beforeSentence = true;
        for (var idx=0; idx<lines.length; idx++) {
            var line = lines[idx];

            var logLineError = function(message) {
                log('error: line '+(idx+1)+': '+message+' ("'+line+'")');
                error = true;
            }

            if (isConllUComment(line)) {
                if (beforeSentence) {
                    comments.push(line);
                } else {
                    logLineError('comments must precede sentence, ignoring');
                }
                continue;
            }

            // non-comment, assume inside sentence until terminated by
            // blank line
            beforeSentence = false;

            var fields = splitter(line);

            if (fields.length === 0) {
                // empty line, terminates sentence
                if (elements.length !== 0) {
                    var sId = 'S' + (sentences.length+1);
                    sentences.push(new ConllUSentence(sId, elements, comments));
                } else {
                    logLineError('empty sentence, ignoring');
                }
                // reset
                elements = [];
                comments = [];
                beforeSentence = true;
                continue;
            }

            if (fields.length !== 10) {
                logLineError('expected 10 fields, got '+fields.length);
                repairConllUFields(fields, log);
            }

            var element = new ConllUElement(fields, idx, line);

            var issues = element.validate();
            for (var j=0; j<issues.length; j++) {
                logLineError(issues[j]);
            }
            if (issues.length !== 0) {
                if (!element.repair(log)) {
                    logLineError('repair failed, discarding line');
                    continue; // failed, ignore line
                }
            }

            elements.push(element);
        }

        // If elements is non-empty, last sentence ended without its
        // expected terminating empty line. Process, but warn if strict.
        if (elements.length !== 0) {
            if (strict) {
                logError('missing blank line after last sentence');
            }
            var sId = 'S' + (sentences.length+1);
            sentences.push(new ConllUSentence(sId, elements, comments));
        }

        // If comments is non-empty, there were comments after the
        // terminating empty line. Warn and discard.
        if (comments.length !== 0) {
            logError('comments may not occur after last sentence, ignoring');
        }


        // merge brat data over all sentences
        var mergedBratData = {},
            textOffset = 0;
        var categories = [
            'entities',
            'attributes',
            'relations',
            'comments'
        ];
        for (var i=0; i<categories.length; i++) {
            mergedBratData[categories[i]] = [];
        }
        mergedBratData['text'] = '';
        for (var i=0; i<sentences.length; i++) {
            var sentence = sentences[i];

            var issues = sentence.validate();
            for (var j=0; j<issues.length; j++) {
                logError(issues[j]);
            }
            if (issues.length !== 0) {
                if (!sentence.repair(log)) {
                    logError('repair failed, discarding sentence');
                    continue;
                }
            }
            sentence.setBaseOffset(textOffset !== 0 ? textOffset + 1 : 0);
            bratData = sentence.toBrat();
            
            // merge
            if (mergedBratData['text'].length !== 0) {
                mergedBratData['text'] += '\n';
                textOffset += 1;
            }
            mergedBratData['text'] += bratData['text'];
            textOffset += bratData['text'].length;
            for (var j=0; j<categories.length; j++) {
                var c = categories[j];
                mergedBratData[c] = mergedBratData[c].concat(bratData[c]);
            }
        }

        // to avoid brat breakage on error, don't send empty text
        if (mergedBratData['text'].length === 0) {
            mergedBratData['text'] = '<EMPTY>';
        }

        mergedBratData['error'] = error;

        return mergedBratData;
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

    // determine space to allot for sentence labels.
    var sentenceLabelWidth = function(sentenceLabels) {
        var maxWidth = 20; // no less than this

        if (!sentenceLabels || sentenceLabels.length === 0 ||
            sentenceLabels.filter(function(x) { return !!x }).length === 0) {
            return width;
        }
        for (var i=0; i<sentenceLabels.length; i++) {
            var label = sentenceLabels[i];
            var width = 10 * label.length; // char width guesstimate
            maxWidth = width > maxWidth ? width : maxWidth;
        }
        return maxWidth;
    };

    var embeddedIdSeq = 1;

    var embedAnnotation = function(elem, parse, cdata, data, options) {
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

        // store sequence number for reference resolution
        elem.attr('embeddedSequenceNum', embeddedIdSeq);

        var eId = 'embedded-' + embeddedIdSeq++,
            inputTabId = eId + '-2',
            bratTabId = eId + '-3',
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
        var bratArea = $('<textarea id="'+eId+'-brat" disabled="disabled" ' +
                         'class="embedded-brat-data"></textarea>');
        var logArea = $('<textarea id="'+eId+'-log" disabled="disabled" ' +
                        'class="embedded-brat-data"></textarea>');

        // initialize parse function, falling back to SD as default
        // TODO: reconsider default
        if (parse === undefined) {
            parse = parseSd;
        }

        // default collection data to empty dictionary
        if (cdata === undefined) {
            cdata = {};
        }

        // initialize data, defaulting to original element text
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
        // data = normalizeSpace(data);    // TODO isn't this harmful for .ann?
        var parsed = parse(data, makeLogger(logArea));
        parsed = reviseIds(parsed, eId + '-');
        inputArea.text(data);
        bratArea.text(objectToString(parsed));

        if (parsed.error) {
            inputArea.css({'border': '2px solid red'});
            visDiv.addClass('haserror');
        }

        // initialize options, falling back to attributes as defaults
        if (options === undefined) {
            options = {};
        }
        $.each(elem[0].attributes, function(idx) {
            var name = this.name;
            var value = this.value;
            // ignore standard attributes and options provided by caller
            var standardAttr = ['id', 'class', 'embeddedsequencenum'];
            if ($.inArray(name.toLowerCase(), standardAttr) === -1 &&
                options[name] === undefined) {
                options[name] = value;
            }
        });
        
        // build top-level structure
        elem.empty();
        // tab headers (li+a)
        tabDiv.append([
                       '<div id="'+eId+'">',
                       '  <ul>',
                       '    <li><a href="#'+inputTabId+'">input</a></li>',
                       '    <li><a href="#'+bratTabId+'">brat</a></li>',
                       '    <li><a href="#'+infoTabId+'">info</a></li>',
                       '  </ul>',
                       '</div>'
                       ].join('\n'));
        // tab content (divs)
        var inputTab   = $('<div id="'+inputTabId+'"></div>'),
        bratTab = $('<div id="'+bratTabId+'"></div>'),
        logTab  = $('<div id="'+infoTabId+'"></div>');
        inputTab.append(inputArea);
        bratTab.append(bratArea);
        logTab.append(logArea);

        // add content to top-level element, turn into jQuery-ui tabs
        tabDiv.append(inputTab, bratTab, logTab);
        elem.append(shDiv, tabDiv, visDiv);
        tabDiv.tabs();
        var shVisible = 0;
        var setShToggleText = function() {
            $('span', showHideButton).text(shVisible ? 'hide' : 'edit');
        }
        tabDiv.hide(); // TODO make optional (control e.g. using class)
        showHideButton.button().click(function(ev) {
            tabDiv.toggle('blind');
            shVisible = !shVisible;
            setShToggleText();
        });
        setShToggleText();

        // only show tabs / tab visibility control if set in options
        // or there is an error in the input
        if (options && !options.tabs && !parsed.error) {
            showHideButton.hide();
            tabDiv.hide();
        }

        // we need to create a Dispatcher in advance of embed() to bind
        // typesLoaded callback before it is triggered.
        // (TODO: do we really need a separate Dispatcher for each
        // embedded visualization?)
        var dispatcher = new Dispatcher();
        dispatcher.on('spanAndAttributeTypesLoaded', typesLoaded);

        // visualization configuration
        var visualizerOptions = {
            'sentNumMargin': sentenceLabelWidth(parsed.sentlabels),
        };

        // initialize brat visualization
        Util.embed(eId+'-vis', $.extend({'collection': null}, cdata),
                   $.extend({}, parsed), webFontURLs, dispatcher,
                   visualizerOptions);

        // hook up the rest
        var renderError = function() {
            bratArea.css({'border': '2px solid red'});
            visDiv.addClass('haserror');
        };
        dispatcher.on('renderError: Fatal', renderError);
        dispatcher.on('displaySpanComment', displaySpanInformation);
        dispatcher.on('displayArcComment', displayArcInformation);
        dispatcher.on('hideComment', hideInformation);
        dispatcher.on('mousemove', onMouseMove);

        // sentence label display
        if (parsed.sentlabels && parsed.sentlabels.length !== 0 &&
            parsed.sentlabels.filter(function(x) { return !!x }).length !== 0) {
            var sentenceLabels = parsed.sentlabels.slice(0);
            dispatcher.on('doneRendering', function() {
                var elements = visDiv.find('.sentnum text');
                for (var i=0; i<elements.length; i++) {
                    if (sentenceLabels[i]) {
                        $(elements[i]).text(sentenceLabels[i]);
                        $(elements[i]).show();
                    }
                }
                // Show separating lines for all numbers (including hidden)
                visDiv.find('.sentnum path').show();
            });
        }

        var inputHandler = function() {
            var parsed, parse_error = false;

            logArea.val(''); // clear log

            try {
                parsed = parse(inputArea.val(), makeLogger(logArea));
                parsed = reviseIds(parsed, embeddedIdSeq + '-');
                parse_error = parsed.error;
            } catch (e) {
                console.log(e);
                parse_error = true;
            }

            // console.log(parse_error);

            if (!parse_error) {
                inputArea.css({'border': '2px inset'});
                visDiv.removeClass('haserror');
            } else {
                inputArea.css({'border': '2px solid red'});
                visDiv.addClass('haserror');
                return;
            }
    
            bratArea.text(objectToString(parsed));

            try {
                dispatcher.post('requestRenderData', [$.extend({}, parsed)]);
                bratArea.css({'border': '2px inset'});
                visDiv.removeClass('haserror');
            } catch(e) {
                console.log('requestRenderData error:', e);
                logArea.append('requestRenderData error: '+e);
                bratArea.css({'border': '2px solid red'});
                visDiv.addClass('haserror');
            }
        };
        inputArea.bind('propertychange keyup input paste', inputHandler);
    };

    var resolveEmbeddedReference = function(elem, data) {
        var refId = elem.attr('href'),
	    refElem = $(refId);
        
        if (refElem === undefined) {
            console.log('Failed to resolve reference to', refId, 'for', elem);
            return;
        }
        
        var refSeq = refElem.attr('embeddedSequenceNum');
        if (refSeq === undefined) {
            console.log('no embeddedSequenceNum for', refElem);
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

    // createDocumentationLink cache
    var collDocByName = {};

    // createDocumentationLink helper
    var findMatchingTitle = function(s, collection, documents, matchCase) {
        if (documents instanceof Array !== true) {
            return null;
        }
        if (matchCase == undefined) {
            matchCase = true;
        }
        // attempt match against document and collection/document forms
        for (i=0; i<documents.length; i++) {
            var coll_doc = collection+'/'+documents[i].title;
            if (documents[i].title == s || coll_doc == s) {
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

    // createDocumentationLink helper
    var findBestDocumentMatch = function(s, collections) {
        var currentColl = collections._current;
        var currentDocs = collections[currentColl];
        var d;

        // first try everything with case-sensitive matching, then repeat
        // with case-insensitive matching.
        for (var ci=0; ci<2; ci++) {
            var matchCase = !ci;

            // prioritize match in the current collection
            if ((d = findMatchingTitle(s, currentColl, currentDocs, matchCase))
                !== null) {
                return [currentColl, d];
            }

            // if none, find matches in any collection
            var matches = [];
            $.each(collections, function(coll, docs) {
                if ((d = findMatchingTitle(s, coll, docs, matchCase))
                    !== null) {
                    matches.push([coll, d]);
                }
            });
            // TODO: sort matches in some reasonable way
            if (matches.length != 0) {
                return matches[0];
            }
        }
        // TODO: consider attempting also URL matches.

        // failed to match anything
        return null;
    };
    
    var createDocumentationLink = function(e, collections) {
        var s = e.text();

        if (collDocByName[s] === undefined) {
            collDocByName[s] = findBestDocumentMatch(s, collections);
        }

        if (collDocByName[s] !== null) {
            var coll = collDocByName[s][0],
                doc  = collDocByName[s][1];
            e.attr('href', doc.url);
            e.addClass('doclink');
            // add title if not aready present
            if (e.attr('title') === undefined) {
                e.attr('title', coll+' '+doc.title)
            }
            // turn e.g. "entity/person" into "person" in doc link text
            if ((m = e.text().match(/^.+\/(.+)$/)) !== null) {
                e.text(m[1]);
            }
        } else {
            // failed to link, mark. TODO: use class instead of css
            e.css('color', 'red');
            if (e.attr('title') === undefined) {
                e.attr('title', 'failed to link to entry in any collection')
            }
        }
    };

    var createDocumentationLinks = function(collections) {
        // find anchors with empty or missing href and lacking id,
        // and turn these into links into the documentation.
        $('a:not([href]):not([id]), a[href=""]:not([id])').each(function(idx) {
            createDocumentationLink($(this), collections);
        });
    };

    // class attribute values that trigger parsing using parseSd
    var parseSdClasses = [
        '.sdparse',
        '.language-sdparse',
        '.sd-parse', // deprecated, avoid using
    ];

    // class attribute values that trigger parsing using parseConllX
    var parseConllXClasses = [
        '.conllx-parse',
        '.language-conllx',
    ];

    // class attribute values that trigger parsing using parseConllU
    var parseConllUClasses = [
        '.conllu-parse',
        '.language-conllu',
    ];

    // class attribute values that trigger parsing using parseAnn
    var parseAnnClasses = [
        '.ann-annotation',
        '.language-ann',
    ];

    // top-level function to call to embed visualizations,
    // create documentation links, etc.
    var activate = function(collectionData, documentCollections) {
        // generate embedded visualizations: call embedAnnotation
        // for elements with "sd-parse" class (or variant).
        $(parseSdClasses.join(',')).each(function(idx) {
            embedAnnotation($(this), parseSd, collectionData);
        });

        // repeat for elements with "conllx-parse" class (or variant), etc.
        $(parseConllXClasses.join(',')).each(function(idx) {
            embedAnnotation($(this), parseConllX, collectionData);
        });

        $(parseConllUClasses.join(',')).each(function(idx) {
            embedAnnotation($(this), parseConllU, collectionData);
        });

        $(parseAnnClasses.join(',')).each(function(idx) {
            embedAnnotation($(this), parseAnn, collectionData);
        });

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
