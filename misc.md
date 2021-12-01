---
layout: base
title:  'MISC attributes'
udver: '2'
---

# MISC attributes in CoNLL-U

The tenth column in the [CoNLL-U format](format.html#miscellaneous) is labeled MISC,
standing for “miscellaneous”. It is intended for any additional annotation that data
providers want to store at the token level. With very few exceptions, its contents is
optional from the UD perspective. Nevertheless, certain types of annotation are used
in multiple UD treebanks, and it is desirable that they are annotated in the same
fashion as much as possible. This page serves as a notice board to raise awareness
about MISC attributes that already exist, their form and purpose. If other treebanks
add annotations of a kind described here, it is recommended that they use the same
attribute names and values.

## Basic format

A single underscore (“_”) in MISC signals that there is no extra annotation. The column
cannot be empty and it cannot contain certain characters (TAB, CR, LF, other control
characters). It can contain spaces (“ ”) but it cannot start or end with a space.

The vertical bar (“|”) is interpreted as separator of individual MISC annotations where
applicable, so it is not recommended to use it unescaped in an annotation. Nevertheless,
a CoNLL-U file is not considered invalid if it contains e.g. multiple consecutive
vertical bars (“|||”), a leading or trailing “|” in MISC etc.

It is recommended that individual annotations separated by vertical bars are
Attribute=Value pairs, similar to the FEATS column of CoNLL-U. Attribute names normally
consist of English letters, starting with uppercase and followed by “CamelCase”, that
is, uppercase signals new word or segment, lowercase is used otherwise. However, it is not
forbidden to have a “|”-delimited annotation that does not start with an attribute
name, does not contain “=”, or even is empty
(as long as the whole MISC is not empty). Unlike in FEATS, attributes do not have to be
sorted alphabetically and it is allowed to have the same attribute multiple times (with
the same or with different values) if it makes sense (but it rarely does). Note that
tools processing CoNLL-U data may process some MISC annotations and leave others intact;
however, it may not be obvious what “leaving intact” means if you have unnamed attributes,
or multiple instances of the same attribute where the order of the instances is significant
for you. It is thus safer to avoid such practices.

## Known attributes

MISC attributes already attested in UD treebanks are listed here in alphabetical order
together with brief documentation (and possibly with links to additional information).

### CorrectForm

Shows the expected correct word form when there is a typo in the underlying text.
The FORM column contains the form from the text including the error, and the FEATS
column contains `Typo=Yes`, as described in the [guidelines for typos](u/overview/typos.html).

    # text = I have two kats.
    1	I	I	PRON	_	_	2	nsubj	_	_
    2	have	have	VERB	_	_	0	root	_	_
    3	two	two	NUM	_	_	4	nummod	_	_
    4	kats	cat	NOUN	_	Typo=Yes	2	obj	_	CorrectForm=cats|SpaceAfter=No
    5	.	.	PUNCT	_	_	2	punct	_	_

### Gloss

See also [Translit](#translit), [MGloss](#mgloss) and [LGloss](#lgloss).

Approximate translation of the word form or the lemma to another language (typically English,
although for some treebanks the glosses are only available in other languages, such as
Spanish or Russian). If the translation consists of multiple words, they are connected using a hyphen.

While English glosses would be helpful in any non-English treebank, they are typically available
for lesser-known languages where the example sentences are taken from linguistic literature or
directly from fieldwork.

### Lang

Language of the current token, if different from the main language of the file (code switching).
The value is the ISO 639 language code, as registered for the language in UD (either two letters
from ISO 639-1, or three letters from ISO 639-3, lowercased!) The validation script will take
this attribute into account when validating language-specific annotation guidelines (hence it
is one of the very few MISC attributes that are considered during
[validation](https://universaldependencies.org/release_checklist.html#validation).
Note that annotation following the foreign language rules is optional. The alternative is that
the annotators tag the foreign words with UPOS [X]() and `Foreign=Yes`, and they connect them
using the [flat]()`:foreign` relation. In such cases, no `Lang` attribute is placed in MISC.
See also [issue #776](https://github.com/UniversalDependencies/docs/issues/776).

    # sent_id = de.01
    # text = Sein erfolgreichstes Album ist „It's me!“
    1    Sein              sein          DET     _   _   3   det     _   _
    2    erfolgreichstes   erfolgreich   ADJ     _   _   3   amod    _   _
    3    Album             Album         NOUN    _   _   0   root    _   _
    4    ist               sein          VERB    _   _   3   cop     _   _
    5    „                 „             PUNCT   _   _   8   punct   _   SpaceAfter=No
    6    It                it            PRON    _   _   8   nsubj   _   SpaceAfter=No|Lang=en
    7    's                be            VERB    _   _   8   cop     _   Lang=en
    8    me                I             PRON    _   _   3   csubj   _   SpaceAfter=No|Lang=en
    9    !                 !             PUNCT   _   _   8   punct   _   SpaceAfter=No|Lang=en
    10   “                 “             PUNCT   _   _   8   punct   _   _

Note that the exclamation mark in the above example would not need the `Lang` attribute
as it could occur in German as well; but we mark it as a part of the quoted English phrase
(while the surrounding quotation marks are genuinely German). Also note that the validator
will now allow the lemma _be_ as a copula (because it is listed for English), while otherwise
it would only allow the German copula _sein_.

### LDeriv

See also [LId](#lid), [LGloss](#lgloss) and [LNumValue](#lnumvalue).

The lemma from which the lemma of the current token is morphologically derived (just the
source word form, not a value of `LId`).
In the Czech dependency treebanks, the
value of `LDeriv` is directly embedded in the derived lemma and it has to be separated in UD where
the [LEMMA column](u/overview/morphology.html#lemmas) is supposed to contain just the citation
form of the current lexeme.

In the example below, the adverb _ročně_ “yearly” is derived from the adjective _roční_
(which, in turn, is derived from the noun _rok_ “year”, but it is not visible on this line;
it would be visible on a line where the adjective occurs in the corpus).

    # sent_id = 1
    # text = Tato politika stojí český stát miliardu ročně.
    1   Tato       tento      DET     _   _   2   det      _   _
    2   politika   politika   NOUN    _   _   3   nsubj    _   LGloss=(věda)
    3   stojí      stát       VERB    _   _   0   root     _   LId=stát-4|LGloss=(něco_stojí_peníze)
    4   český      český      ADJ     _   _   5   amod     _   _
    5   stát       stát       NOUN    _   _   3   iobj     _   LId=stát-1|LGloss=(státní_útvar)
    6   miliardu   miliarda   NOUN    _   _   3   obj      _   LNumValue=1000000000
    7   ročně      ročně      ADV     _   _   3   advmod   _   SpaceAfter=No|LDeriv=roční
    8   .          .          PUNCT   _   _   3   punct    _   _

### LGloss

See also [LId](#lid), [Gloss](#gloss), [LNumValue](#lnumvalue) and [LDeriv](#lderiv).

An explanation of the meaning of the lemma/lexeme. This is particularly useful in connection
with the `LId` attribute, although it can also appear alone as in the example below. While
the `Gloss` attribute could arguably be used to convey this information, the origin and the
purpose of the two attributes is slightly different. In the Czech dependency treebanks, the
value of `LGloss` is directly embedded in the lemma and it has to be separated in UD where
the [LEMMA column](u/overview/morphology.html#lemmas) is supposed to contain just the citation
form of the lexeme. Consequently, the value of `LGloss` is still in Czech (rather than
a translation to English or another language), and it typically uses a longer phrase to
describe or illustrate the usage of the word.

    # sent_id = 1
    # text = Tato politika stojí český stát miliardu ročně.
    1   Tato       tento      DET     _   _   2   det      _   _
    2   politika   politika   NOUN    _   _   3   nsubj    _   LGloss=(věda)
    3   stojí      stát       VERB    _   _   0   root     _   LId=stát-4|LGloss=(něco_stojí_peníze)
    4   český      český      ADJ     _   _   5   amod     _   _
    5   stát       stát       NOUN    _   _   3   iobj     _   LId=stát-1|LGloss=(státní_útvar)
    6   miliardu   miliarda   NOUN    _   _   3   obj      _   LNumValue=1000000000
    7   ročně      ročně      ADV     _   _   3   advmod   _   SpaceAfter=No|LDeriv=roční
    8   .          .          PUNCT   _   _   3   punct    _   _

### LId

See also [LGloss](#lgloss), [LNumValue](#lnumvalue) and [LDeriv](#lderiv).

Some non-UD corpora use numeric indices in lemmas to distinguish different lexemes with otherwise
homonymous lemmas. In UD, the [LEMMA column](u/overview/morphology.html#lemmas) is supposed to
contain just the citation form of the
lexeme: it should be a valid surface form, hence it should not contain any disambiguating indices.

In order to preserve the disambiguated lexeme identifier, it can be stored as a `LId` attribute
in MISC. Attested e.g. in Czech or Ancient Greek.

    # sent_id = 1
    # text = Tato politika stojí český stát miliardu ročně.
    1   Tato       tento      DET     _   _   2   det      _   _
    2   politika   politika   NOUN    _   _   3   nsubj    _   LGloss=(věda)
    3   stojí      stát       VERB    _   _   0   root     _   LId=stát-4|LGloss=(něco_stojí_peníze)
    4   český      český      ADJ     _   _   5   amod     _   _
    5   stát       stát       NOUN    _   _   3   iobj     _   LId=stát-1|LGloss=(státní_útvar)
    6   miliardu   miliarda   NOUN    _   _   3   obj      _   LNumValue=1000000000
    7   ročně      ročně      ADV     _   _   3   advmod   _   SpaceAfter=No|LDeriv=roční
    8   .          .          PUNCT   _   _   3   punct    _   _

### LNumValue

See also [LId](#lid), [LGloss](#lgloss) and [LDeriv](#lderiv).

The numeric value of lexemes whose meaning relates to a number, expressed in Arabic digits.
In the Czech dependency treebanks, the
value of `LNumValue` is directly embedded in the lemma and it has to be separated in UD where
the [LEMMA column](u/overview/morphology.html#lemmas) is supposed to contain just the citation
form of the lexeme.

    # sent_id = 1
    # text = Tato politika stojí český stát miliardu ročně.
    1   Tato       tento      DET     _   _   2   det      _   _
    2   politika   politika   NOUN    _   _   3   nsubj    _   LGloss=(věda)
    3   stojí      stát       VERB    _   _   0   root     _   LId=stát-4|LGloss=(něco_stojí_peníze)
    4   český      český      ADJ     _   _   5   amod     _   _
    5   stát       stát       NOUN    _   _   3   iobj     _   LId=stát-1|LGloss=(státní_útvar)
    6   miliardu   miliarda   NOUN    _   _   3   obj      _   LNumValue=1000000000
    7   ročně      ročně      ADV     _   _   3   advmod   _   SpaceAfter=No|LDeriv=roční
    8   .          .          PUNCT   _   _   3   punct    _   _

### LTranslit

See also [Translit](#translit) and [Gloss](#gloss).

Analogy of `Translit` but used for lemmas instead of word forms.
Transliteration or transcription of the lemma to another writing system. Typically this
attribute is used in languages that do not write using the Latin script, and the attribute
provides some standard romanization.

This attribute could be used in all UD treebanks with non-Latin writing systems. It is used
e.g. in Ukrainian, Armenian, Sanskrit, Telugu, and Tamil.

    # sent_id = panc0.s4
    # text = तत् यथानुश्रूयते।
    # translit = tat yathānuśrūyate.
    # text_fr = Voilà ce qui nous est parvenu par la tradition orale.
    # text_en = This is what is heard.
    1     तत्	तद्	DET     _   Case=Nom|…|PronType=Dem   3   nsubj    _   Translit=tat|LTranslit=tad|Gloss=it
    2-3   यथानुश्रूयते	_	_       _   _                         _   _        _   SpaceAfter=No
    2     यथा	यथा	ADV     _   PronType=Rel              3   advmod   _   Translit=yathā|LTranslit=yathā|Gloss=how
    3     अनुश्रूयते   अनु-श्रु	VERB    _   Mood=Ind|…|Voice=Pass     0   root     _   Translit=anuśrūyate|LTranslit=anu-śru|Gloss=it-is-heard
    4     ।      	।	PUNCT   _   _                         3   punct    _   Translit=.|LTranslit=.|Gloss=.

### MGloss

See also [MSeg](#mseg) and [Gloss](#gloss).

Glossing of individual morphemes as commonly used in interlinear glossed text in linguistic
literature. Hypens and equals-to symbols delimit morphemes as in `MSeg`, and there should be
the same number of morphemes as in `MSeg` (if `MSeg` is missing, a single morpheme is assumed).
A gloss is either a lexical meaning in English, or a grammatical tag; if multiple words/tags
are needed in the gloss of one morpheme, they are joined by a period (“.”). There are no
guidelines for the tags
([Leipzig glossing rules](https://www.eva.mpg.de/lingua/resources/glossing-rules.php) are
a source of tags that are commonly used). However, most of the tags should probably have
a corresponding feature in the FEATS column, and there it must follow the UD guidelines.

This attribute is used e.g. in the Warlpiri treebank:

    # sent_id = 1.104a
    # text = Ngarrkangku karnta nyangu.
    # gloss = man-ERG woman saw
    # text_en = The man saw the woman.
    1   Ngarrkangku   ngarrka   NOUN    _   Case=Erg     3   nsubj   _   Gloss=man|MSeg=ngarrka-ngku|MGloss=man-ERG
    2   karnta        karnta    NOUN    _   Case=Abs     3   obj     _   Gloss=woman
    3   nyangu        nyangu    VERB    _   Mood=Ind|…   0   root    _   Gloss=saw|SpaceAfter=No
    4   .             .         PUNCT   _   _            3   punct   _   Gloss=.

### MSeg

See also [MGloss](#mgloss).

Morphemic segmentation as commonly used in interlinear glossed text in linguistic literature:
a hyphen (“-”) denotes boundary between morphemes,
“=” is placed between a clitic and its host word.
This attribute should be accompanied by the `MGloss` attribute, which provides interpretation
of the morphemes.

This attribute is used e.g. in the Warlpiri treebank:

    # sent_id = 1.104a
    # text = Ngarrkangku karnta nyangu.
    # gloss = man-ERG woman saw
    # text_en = The man saw the woman.
    1   Ngarrkangku   ngarrka   NOUN    _   Case=Erg     3   nsubj   _   Gloss=man|MSeg=ngarrka-ngku|MGloss=man-ERG
    2   karnta        karnta    NOUN    _   Case=Abs     3   obj     _   Gloss=woman
    3   nyangu        nyangu    VERB    _   Mood=Ind|…   0   root    _   Gloss=saw|SpaceAfter=No
    4   .             .         PUNCT   _   _            3   punct   _   Gloss=.

### NewPar

See also [SpacesAfter](#spacesafter).

Most of the time, a paragraph consists of one or more sentences, and the paragraph boundary
is optionally [annotated using the sentence-level attribute newpar](format.html#paragraph-and-document-boundaries).
However, in rare cases a syntactically coherent sentence is split into multiple paragraphs
(for example, when it contains a list of items). Then the first token of the new
sentence-internal paragraph has `NewPar=Yes`. The attribute can be taken into account by
tools that generate plain text from CoNLL-U files, such as
[conllu_to_text.pl](https://github.com/UniversalDependencies/tools/blob/master/conllu_to_text.pl).

This attribute was proposed in [issue #412](https://github.com/UniversalDependencies/docs/issues/412)
and is attested in Swedish and Ukrainian.

    # sent_id = sv-ud-train-477
    # text = På högstadiet skall varje elev välja ett av fyra tillvalsämnen: * språk (franska eller tyska) * ekonomi * teknik * konst
    1    På              på             ADP     _   _   2    case     _   _
    2    högstadiet      högstadium     NOUN    _   _   6    obl      _   _
    3    skall           skola          AUX     _   _   6    aux      _   _
    4    varje           varje          DET     _   _   5    det      _   _
    5    elev            elev           NOUN    _   _   6    nsubj    _   _
    6    välja           välja          VERB    _   _   0    root     _   _
    7    ett             en             NUM     _   _   6    obj      _   _
    8    av              av             ADP     _   _   10   case     _   _
    9    fyra            fyra           NUM     _   _   10   nummod   _   _
    10   tillvalsämnen   tillvalsämne   NOUN    _   _   7    nmod     _   SpaceAfter=No
    11   :               :              PUNCT   _   _   10   punct    _   _
    12   *               *              PUNCT   _   _   13   punct    _   NewPar=Yes
    13   språk           språk          NOUN    _   _   10   appos    _   _
    14   (               (              PUNCT   _   _   13   punct    _   SpaceAfter=No
    15   franska         fransk         NOUN    _   _   13   appos    _   _
    16   eller           eller          CCONJ   _   _   17   cc       _   _
    17   tyska           tysk           NOUN    _   _   15   conj     _   SpaceAfter=No
    18   )               )              PUNCT   _   _   13   punct    _   _
    19   *               *              PUNCT   _   _   20   punct    _   NewPar=Yes
    20   ekonomi         ekonomi        NOUN    _   _   13   conj     _   _
    21   *               *              PUNCT   _   _   22   punct    _   NewPar=Yes
    22   teknik          teknik         NOUN    _   _   13   conj     _   _
    23   *               *              PUNCT   _   _   24   punct    _   NewPar=Yes
    24   konst           konst          NOUN    _   _   13   conj     _   _

### SpaceAfter

See also [SpacesAfter](#spacesafter) and [SpacesBefore](#spacesbefore).

`SpaceAfter=No` signals that in the underlying untokenized text, there is no space between
the current and the next token. Unlike most MISC attributes, this one is even checked by
the official UD validator. Its presence must correspond to the spaces in the sentence-level
`text` attribute. For multi-word tokens this attribute is placed in MISC of the MWT line
and not at the last word of the token. `SpaceAfter=No` may occur also at the end of
sentence, but not at the end of paragraph or document (if paragraph or document boundaries
are annotated in the file).

    # sent_id = 1
    # text = I have no clue.
    1   I       I       PRON    _   _   2   nsubj   _   _
    2   have    have    VERB    _   _   0   root    _   _
    3   no      no      DET     _   _   4   det     _   _
    4   clue    clue    NOUN    _   _   2   obj     _   SpaceAfter=No
    5   .       .       PUNCT   _   _   2   punct   _   _

### SpacesAfter

See also [SpaceAfter](#spaceafter), [SpacesBefore](#spacesbefore) and [NewPar](#newpar).

The mandatory attribute `SpaceAfter=No` only specifies whether there was at least one space
between two tokens of a sentence. It cannot truly preserve the untokenized text if there
were two spaces between two tokens, or a line break. This can be optionally preserved using
the `SpacesAfter` attribute; in the value, the following C-like escape sequences are used:
`\s` (space), `\t` (TAB), `\r` (CR), `\n` (LF), `\p` (pipe), `\\` (backslash).
Note that `SpacesAfter` should not occur together with `SpaceAfter=No` on the same line.

This attribute was proposed in [issue #332](https://github.com/UniversalDependencies/docs/issues/332).
It is generated by the [UDPipe](https://ufal.mff.cuni.cz/udpipe) software and occurs in some
UD treebanks, e.g., Belarusian HSE, Bhojpuri BHTB or Classical Chinese Kyoto.

### SpacesBefore

See also [SpaceAfter](#spaceafter) and [SpacesAfter](#spacesafter).

This attribute is used similarly to `SpacesAfter`, with the same values and escaping, but
it encodes characters before the first token of the sentence. Therefore, it should only occur
at the first token line. Spaces that occur later should preferably be encoded using
`SpacesAfter`. Spaces between two sentences may be encoded either by `SpacesAfter` of the
last token of the first sentence, or by `SpacesBefore` of the first token of the second
sentence; however, even if `SpacesAfter` gets absolute priority, we still may need `SpacesBefore`
for the first sentence of the document.

In the value, the following C-like escape sequences are used:
`\s` (space), `\t` (TAB), `\r` (CR), `\n` (LF), `\p` (pipe), `\\` (backslash).

This attribute was proposed in [issue #332](https://github.com/UniversalDependencies/docs/issues/332).
It is generated by the [UDPipe](https://ufal.mff.cuni.cz/udpipe) software and occurs in some
UD treebanks, e.g., Belarusian HSE.

### Translit

See also [LTranslit](#ltranslit) and [Gloss](#gloss).

Transliteration or transcription of the word form to another writing system. Typically this
attribute is used in languages that do not write using the Latin script, and the attribute
provides some standard romanization.

This attribute could be used in all UD treebanks with non-Latin writing systems. It is used
e.g. in Ukrainian, Armenian, Sanskrit, Telugu, and Tamil.

    # sent_id = panc0.s4
    # text = तत् यथानुश्रूयते।
    # translit = tat yathānuśrūyate.
    # text_fr = Voilà ce qui nous est parvenu par la tradition orale.
    # text_en = This is what is heard.
    1     तत्	तद्	DET     _   Case=Nom|…|PronType=Dem   3   nsubj    _   Translit=tat|LTranslit=tad|Gloss=it
    2-3   यथानुश्रूयते	_	_       _   _                         _   _        _   SpaceAfter=No
    2     यथा	यथा	ADV     _   PronType=Rel              3   advmod   _   Translit=yathā|LTranslit=yathā|Gloss=how
    3     अनुश्रूयते   अनु-श्रु	VERB    _   Mood=Ind|…|Voice=Pass     0   root     _   Translit=anuśrūyate|LTranslit=anu-śru|Gloss=it-is-heard
    4     ।      	।	PUNCT   _   _                         3   punct    _   Translit=.|LTranslit=.|Gloss=.

things for typos and the like: CorrectForm, CorrectLemma, CorrectSpaceAfter, CorrectCase, CorrectDegree, CorrectGender, CorrectMood, CorrectNumber, CorrectPerson, CorrectTense, CorrectVerbForm, CorrectionType (Latvian LVTB), ModernForm
Arabic PADT: Root, Vform
Ref for Bible and other classical texts (but the treebanks currently use "ref"; should we change it?)

MWEPOS, ExtPos
MWE, MWEPOS: Catalan AnCora, Indonesian CSUI, Indonesian GSD (taky jednou MEPOS!), Indonesian PUD, perhaps Portuguese Bosque (but in different form: _MWE, POSMWE), Portuguese GSD, Spanish AnCora
ExtPos: Beja NSC, various French treebanks, Naija NSC
Proper: Arabic PUD, English PUD, French PUD, German PUD, Hindi PUD, Chinese PUD, Italian PUD, Korean PUD, Portuguese PUD, Russian PUD, Spanish PUD, Thai PUD, Turkish PUD
NamedEntity: German GSD, Irish IDT
OrigForm: English PUD, Galician CTG, Hindi PUD, Italian PUD, Korean PUD, Portuguese PUD, Russian PUD, Spanish PUD, Thai PUD
MorphInd: Indonesian GSD

??? Morf in Bambara or Buryat or Uyghur
??? Analysis in Yupik
??? Morphs in Coptic
Orig OrigLang in Coptic
Hindi HDTB, Urdu UDTB: AltTag, ChunkId, ChunkType, Stype, Tam, Vib

entity, coreference
