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

### Analysis

See [Morf](#morf). Used currently in Yupik, the `Analysis` attribute conveys the kind of
information that other treebanks store in the `Morf` attribute.
**The two names should be merged across treebanks and languages!**

### Bridge

Used in conjunction with [Entity](#Entity) to indicate bridging anaphora, by creating a pointing relation between two coreference GRP identifiers:

```CoNLL-U
# sent_id = GUM_bio_gordon-32
1	An	a	DET	DT	Definite=Ind|PronType=Art	6	det	_	Entity=(abstract-142
2	incomplete	incomplete	ADJ	JJ	Degree=Pos|Polarity=Neg	6	amod	_	_
3	and	and	CCONJ	CC	_	4	cc	_	_
4	faulty	faulty	ADJ	JJ	Degree=Pos	2	conj	_	_
5	German	German	ADJ	JJ	Degree=Pos	6	amod	_	_
6	translation	translation	NOUN	NN	Number=Sing	21	nsubj:pass	_	SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	_
8	edited	edit	VERB	VBN	Tense=Past|VerbForm=Part	6	acl	_	_
9	by	by	ADP	IN	_	10	case	_	_
10	Dr	Dr	PROPN	NNP	Number=Sing	8	obl	_	Entity=(person-143
11	Moritz	Moritz	PROPN	NNP	Number=Sing	10	flat	_	_
12	Posselt	Posselt	PROPN	NNP	Number=Sing	10	flat	_	Entity=142)143)
13	(	(	PUNCT	-LRB-	_	18	punct	_	SpaceAfter=No
14	Tagebuch	Tagebuch	X	FW	_	18	compound	_	Entity=(abstract-142
15	des	des	X	FW	_	18	compound	_	_
16	Generals	Generals	X	FW	_	18	compound	_	_
17	Patrick	Patrick	PROPN	NNP	Number=Sing	18	compound	_	_
18	Gordon	Gordon	PROPN	NNP	Number=Sing	6	appos	_	Entity=142)|SpaceAfter=No
19	)	)	PUNCT	-RRB-	_	18	punct	_	_
20	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	21	aux:pass	_	_
21	published	publish	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
22	,	,	PUNCT	,	_	25	punct	_	_
23	the	the	DET	DT	Definite=Def|PronType=Art	25	det	_	Entity=(abstract-144|Bridge=142<144
24	first	first	ADJ	JJ	Degree=Pos|NumType=Ord	25	amod	_	_
25	volume	volume	NOUN	NN	Number=Sing	21	parataxis	_	Entity=144)
26	at	at	ADP	IN	_	27	case	_	_
27	Moscow	Moscow	PROPN	NNP	Number=Sing	25	orphan	_	Entity=(place-95)
28	in	in	ADP	IN	_	29	case	_	_
29	1849	1849	NUM	CD	NumType=Card	25	orphan	_	Entity=(time-145)|SpaceAfter=No
30	,	,	PUNCT	,	_	32	punct	_	_
31	the	the	DET	DT	Definite=Def|PronType=Art	32	det	_	Entity=(abstract-146|Bridge=142<146
32	second	second	ADJ	JJ	Degree=Pos|NumType=Ord	25	conj	_	Entity=146)
33	at	at	ADP	IN	_	34	case	_	_
34	St	St	PROPN	NNP	Number=Sing	32	orphan	_	Entity=(place-147
35	Petersburg	Petersburg	PROPN	NNP	Number=Sing	34	flat	_	Entity=147)
```

Here "the first" (entity number 144) and "the second" (entity number 146) are volumes of a "translation" (entity number 142), hence we have `Bridge=142<144` and `Bridge=142<146`, indicating that the identity of 144 and 146 is resolvable by reference to entity 142. See more information in the [Entity](#Entity) notation section and the documentation from the [Universal Anaphora format specifications](https://github.com/UniversalAnaphora/UniversalAnaphora/blob/main/documents/UA_CONLL_U_proposal_compact.md)

### Correct{FEATURE}

For instance: `CorrectCase`, `CorrectDegree`, `CorrectGender`, `CorrectMood`, `CorrectNumber`,
`CorrectPerson`, `CorrectTense`, `CorrectVerbForm`…

See also [CorrectForm](#correctform) and [CorrectSpaceAfter](#correctspaceafter).

Shows the value of a morphological feature that would correspond to the correct form if
a typo in the underlying text is fixed (while the actual value of the feature in FEATS
should correspond to the actual form that appears in the text, as described in the
[guidelines for typos](u/overview/typos.html)).

    # text = The cars is produced in Detroit.
    1   The        the       DET     _   Definite=Def|PronType=Art                               2   det     _   _
    2   cars       car       NOUN    _   Number=Plur                                             4   nsubj   _   _
    3   is         be        AUX     _   Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin   4   aux     _   CorrectForm=are|CorrectNumber=Plur
    4   produced   produce   VERB    _   Tense=Past|VerbForm=Part                                0   root    _   _
    5   in         in        ADP     _   _                                                       6   case    _   _
    6   Detroit    Detroit   PROPN   _   Number=Sing                                             4   obl     _   SpaceAfter=No
    7   .          .         PUNCT   _   _                                                       4   punct   _   _

### CorrectForm

See also [Correct{FEATURE}](#correctfeature), [CorrectSpaceAfter](#correctspaceafter) and [ModernForm](#modernform).

Shows the expected correct word form when there is a typo in the underlying text.
The FORM column contains the form from the text including the error, and the FEATS
column contains `Typo=Yes`, as described in the [guidelines for typos](u/overview/typos.html).

    # text = I have two kats.
    1	I	I	PRON	_	_	2	nsubj	_	_
    2	have	have	VERB	_	_	0	root	_	_
    3	two	two	NUM	_	_	4	nummod	_	_
    4	kats	cat	NOUN	_	Typo=Yes	2	obj	_	CorrectForm=cats|SpaceAfter=No
    5	.	.	PUNCT	_	_	2	punct	_	_

### CorrectSpaceAfter

See also [CorrectForm](#correctform), [Correct{FEATURE}](#correctfeature) and [SpaceAfter](#spaceafter).

`CorrectSpaceAfter=Yes` indicates that a space between two tokens is missing by error
(hence it accompanies a `SpaceAfter=No`).
`CorrectSpaceAfter=No` indicates that a space should not be there (e.g., before a period;
it cannot occur together with `SpaceAfter=No`).
More details are discussed in the [guidelines for typos](u/overview/typos.html).

    # text = This spellingis wrong .
    1	This	this	DET	_	_	2	det	_	_
    2	spelling	spelling	NOUN	_	Number=Sing	4	nsubj	_	SpaceAfter=No|CorrectSpaceAfter=Yes
    3	is	be	AUX	_	_	4	cop	_	_
    4	wrong	wrong	ADJ	_	_	0	root	_	CorrectSpaceAfter=No
    5	.	.	PUNCT	_	_	4	punct	_	_

### Discourse

This annotation is used to indicate discourse relations between discourse units, which may or may not span whole sentences. At the beginning of each elementary discourse unit (EDU), the annotation `Discourse` gives the discourse function of the unit beginning with that token, followed by a colon, the ID of the current unit, and an arrow pointing to the ID of the parent unit in the discourse parse. 

For instance, Discourse=purpose:105->104:0 at token 21 in the example below means that this token begins discourse unit 105, which functions as a purpose to unit 104, which begins at token 1 in this sentence ("Padalecki partnered with co-star Jensen Ackles --purpose-> to release a shirt..."). In relations derived from hierarchical discourse trees, as in UD_English-GUM, we also have an added number after a colon - the final :0 indicates that the attachment has a depth of 0, without an intervening span in the original RST constituent tree (this information allows deterministic reconstruction of the RST constituent discourse tree from the conllu file). 

```CoNLL-U
1	For	for	ADP	IN	_	4	case	4:case	Discourse=sequence_m:104->98:2
2	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	_
3	second	second	ADJ	JJ	Degree=Pos|NumType=Ord	4	amod	4:amod	_
4	campaign	campaign	NOUN	NN	Number=Sing	16	obl	16:obl:for	_
5	in	in	ADP	IN	_	10	case	10:case	_
6	the	the	DET	DT	Definite=Def|PronType=Art	10	det	10:det	_
7	Always	Always	ADV	NNP	Number=Sing	8	advmod	8:advmod	_
8	Keep	Keep	PROPN	NNP	Number=Sing	10	compound	10:compound	_
9	Fighting	Fighting	PROPN	NNP	Number=Sing	8	xcomp	8:xcomp	_
10	series	series	NOUN	NN	Number=Sing	4	nmod	4:nmod:in	_
11	in	in	ADP	IN	_	12	case	12:case	_
12	April	April	PROPN	NNP	Number=Sing	4	nmod	4:nmod:in	_
13	2015	2015	NUM	CD	NumForm=Digit|NumType=Card	12	nmod:tmod	12:nmod:tmod	SpaceAfter=No
14	,	,	PUNCT	,	_	4	punct	4:punct	_
15	Padalecki	Padalecki	PROPN	NNP	Number=Sing	16	nsubj	16:nsubj	_
16	partnered	partner	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
17	with	with	ADP	IN	_	18	case	18:case	_
18	co-star	co-star	NOUN	NN	Number=Sing	16	obl	16:obl:with	_
19	Jensen	Jensen	PROPN	NNP	Number=Sing	18	appos	18:appos	_
20	Ackles	Ackles	PROPN	NNP	Number=Sing	19	flat	19:flat	_
21	to	to	PART	TO	_	22	mark	22:mark	Discourse=purpose:105->104:0
22	release	release	VERB	VB	VerbForm=Inf	16	advcl	16:advcl:to	_
23	a	a	DET	DT	Definite=Ind|PronType=Art	24	det	24:det	_
24	shirt	shirt	NOUN	NN	Number=Sing	22	obj	22:obj	_
25	featuring	feature	VERB	VBG	VerbForm=Ger	24	acl	24:acl	Discourse=elaboration:106->105:0
26	both	both	DET	DT	_	25	obj	25:obj	_
27	of	of	ADP	IN	_	29	case	29:case	_
28	their	their	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	29	nmod:poss	29:nmod:poss	_
29	faces	face	NOUN	NNS	Number=Plur	26	nmod	26:nmod:of	SpaceAfter=No
```

The unique ROOT node of the discourse tree has no arrow notation, e.g. `Discourse=ROOT:2:0` means that this token begins unit 2, which is the Central Discourse Unit (or discourse root) of the current document. 

### Entity

This annotation is used to encode entity types and, if available, entity linking, coreference information, and other information about entities as well. The span of tokens encompassed by each entity mention is indicated by a pair of `Entity` annotations in the MISC field, which begin and end the entity span using opening and closing round brackets (or both, for single token entities). The values of each entity annotation, in cases where multiple pieces of information are given for each entity, are separated by `-`, and the key names for these annotations are specified once in a `# Global.Entity` comment at the beginning of the document, in the order in which they appear for each entity. A basic example can look like this, with three keys declared - the entity type `entity`, a coreference group ID `GRP` and an entity linking identifier `identity`:

```CoNLL-U
# newdoc id = GUM_voyage_tulsa
# global.Entity = entity-GRP-identity
1	Tulsa	_	_	_	_	_	_	_	Entity=(place-1-Tulsa)
2	Tulsa	_	_	_	_	_	_	_	Entity=(place-1-Tulsa)
3	is	_	_	_	_	_	_	_	_
4	in	_	_	_	_	_	_	_	_
5	the	_	_	_	_	_	_	_	Entity=(place-2-Green_Country
6	Green	_	_	_	_	_	_	_	_
7	Country	_	_	_	_	_	_	_	_
8	region	_	_	_	_	_	_	_	_
9	of	_	_	_	_	_	_	_	_
10	Oklahoma	_	_	_	_	_	_	_	Entity=(place-3-Oklahoma)2)
11	.	_	_	_	_	_	_	_	_
12	It	_	_	_	_	_	_	_	Entity=(place-1-Tulsa)
13	is	_	_	_	_	_	_	_	_
14	also	_	_	_	_	_	_	_	_
15	called	_	_	_	_	_	_	_	_
16	“	_	_	_	_	_	_	_	_
17	T-town	_	_	_	_	_	_	_	Entity=(place-1-Tulsa)
18	”	_	_	_	_	_	_	_	_
```

Note that key-value annotations aside from the group ID are not repeated at closing brackets, and that multiple entities can open or close at the same line (see token 10 in the example). A more complex example indicating actual usage in the GUM corpus is as follows:

```CoNLL-U
# global.Entity = entity-GRP-infstat-MIN-coref_type-identity
...
# text = He is said to have had a bad relationship with his father.
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	3:nsubj:pass|6:nsubj:xsubj	Entity=(person-1-giv:act-1-ana-Daniel_Bernoulli)
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	3:aux:pass	_
3	said	say	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	to	to	PART	TO	_	6	mark	6:mark	_
5	have	have	AUX	VB	VerbForm=Inf	6	aux	6:aux	_
6	had	have	VERB	VBN	Tense=Past|VerbForm=Part	3	xcomp	3:xcomp	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	Entity=(abstract-54-new-3-sgl
8	bad	bad	ADJ	JJ	Degree=Pos	9	amod	9:amod	_
9	relationship	relationship	NOUN	NN	Number=Sing	6	obj	6:obj	_
10	with	with	ADP	IN	_	12	case	12:case	_
11	his	his	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	12	nmod:poss	12:nmod:poss	Entity=(person-45-giv:inact-2-coref-Johann_Bernoulli(person-1-giv:act-1-ana-Daniel_Bernoulli)
12	father	father	NOUN	NN	Number=Sing	9	nmod	9:nmod:with	Entity=45)54)|SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	3:punct	_
```

In this example, each Entity annotation again contains possibly multiple opening or closing entities (see token 11, which begins both "his" and "his father", i.e. we have [[his] father] as a nested entity). There are six segments to each opening bracket, separated by hyphen, including entity, GRP and identity as before, but also infstat (information status), MIN (the minimal span for fuzzy entity matching, indicating running token numbers inside the entity span) and coref_type, for example 'ana' for pronominal anaphora. 

For more details and use case of the `Entity` annotation, see the [Universal Anaphora documentation](https://github.com/UniversalAnaphora/UniversalAnaphora/blob/main/documents/UA_CONLL_U_proposal_compact.md)

### Gloss

See also [Translit](#translit), [MGloss](#mgloss) and [LGloss](#lgloss).

Approximate translation of the word form or the lemma to another language (typically English,
although for some treebanks the glosses are only available in other languages, such as
Spanish or Russian). If the translation consists of multiple words, they are connected using a hyphen.

While English glosses would be helpful in any non-English treebank, they are typically available
for lesser-known languages where the example sentences are taken from linguistic literature or
directly from fieldwork.

    # sent_id = 1.104a
    # text = Ngarrkangku karnta nyangu.
    # gloss = man-ERG woman saw
    # text_en = The man saw the woman.
    1   Ngarrkangku   ngarrka   NOUN    _   Case=Erg     3   nsubj   _   Gloss=man|MSeg=ngarrka-ngku|MGloss=man-ERG
    2   karnta        karnta    NOUN    _   Case=Abs     3   obj     _   Gloss=woman
    3   nyangu        nyangu    VERB    _   Mood=Ind|…   0   root    _   Gloss=saw|SpaceAfter=No
    4   .             .         PUNCT   _   _            3   punct   _   Gloss=.

### Lang

See also [OrigLang](#origlang).

Language of the current token, if different from the main language of the file (code switching).
The value is the ISO 639 language code, as registered for the language in UD (either two letters
from ISO 639-1, or three letters from ISO 639-3, lowercased!) The validation script will take
this attribute into account when validating language-specific annotation guidelines (hence it
is one of the very few MISC attributes that are considered during
[validation](https://universaldependencies.org/release_checklist.html#validation)).
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

See also [LId](#lid), [LGloss](#lgloss), [LNumValue](#lnumvalue) and [Root](#root).

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

See also [MSeg](#mseg), [Morf](#morf) and [Gloss](#gloss).

Glossing of individual morphemes as commonly used in interlinear glossed text in linguistic
literature. Hypens and equals-to symbols delimit morphemes as in `MSeg`, and there should be
the same number of morphemes as in `MSeg` (if `MSeg` is missing, a single morpheme is assumed).
A gloss is either a lexical meaning in English, or a grammatical tag; if multiple words/tags
are needed in the gloss of one morpheme, they are joined by a period (“.”). There are no
guidelines for the tags
([Leipzig glossing rules](https://www.eva.mpg.de/lingua/resources/glossing-rules.php) are
a source of tags that are commonly used). However, most of the tags should probably have
a corresponding feature in the FEATS column, and there it must follow the UD guidelines.

This attribute is used e.g. in the Tagalog and Warlpiri treebanks.

    # sent_id = 1.104a
    # text = Ngarrkangku karnta nyangu.
    # gloss = man-ERG woman saw
    # text_en = The man saw the woman.
    1   Ngarrkangku   ngarrka   NOUN    _   Case=Erg     3   nsubj   _   Gloss=man|MSeg=ngarrka-ngku|MGloss=man-ERG
    2   karnta        karnta    NOUN    _   Case=Abs     3   obj     _   Gloss=woman
    3   nyangu        nyangu    VERB    _   Mood=Ind|…   0   root    _   Gloss=saw|SpaceAfter=No
    4   .             .         PUNCT   _   _            3   punct   _   Gloss=.

### ModernForm

See also [CorrectForm](#correctform).

Shows the modern spelling for words in old texts, as described in the [guidelines for spelling
deviations](u/overview/typos.html). For instance, German _sein_ “to be” used to be spelled _seyn_.
In a text from the 18th century it is not a typo because this form was correct
in the time the text was produced. Thus in the FEATS column, we may use [Style]()`=Arch` to mark
that this is an archaic form. In the MISC column, we can add `ModernForm=sein` (an analogy to
`CorrectForm=sein`, which we would use if we wanted to mark it as a typo).

    # sent_id = bluethenstaub-f4-s1
    # text = Akademie sollte ein durchaus philosophisches Institut seyn
    1    Akademie           Akademie         NOUN    _    _    6    nsubj     _    _
    2    sollte             sollen           AUX     _    _    6    aux       _    _
    3    ein                ein              DET     _    _    6    det       _    _
    4    durchaus           durchaus         ADV     _    _    5    advmod    _    _
    5    philosophisches    philosophisch    ADJ     _    _    6    amod      _    _
    6    Institut           Institut         NOUN    _    _    0    root      _    _
    7    seyn               sein             AUX     _    _    6    cop       _    ModernForm=sein

### Morf

See also [MGloss](#mgloss), [MSeg](#mseg) and [Analysis](#analysis).

Morphological analysis as output by a treebank-specific tool or resource. In contrast to `MSeg`,
the syntax of the value may be different in various languages where this attribute is used,
and it may be a mix of glosses, lexical strings and tags. Most of the time the information is
redundant as it should be converted and distributed to other places on this token line, but
preserving the original analysis may help later identify and fix conversion errors.

In Bambara, it is a comma-separated sequence of French glosses and morphological features, as
in `Morf=enfant,PL` (for the word _denw_).

In Buryat and Uyghur, only `Morf=Unknown` is preserved to signal words that could not be analyzed by the
morphological analyzer (while for other words the analysis was converted to UD annotation and
then discarded).

In Indonesian GSD, the attribute (called `MorphInd` until UD release 2.9) contains the output
of the [MorphInd](http://septinalarasati.com/morphind/) morphological analyzer, as in
`Morf=^peN+huni<v>_NSD+dia<p>_PS3$` (for the word _penghuninya_).

In Yupik, this attribute seems to be called `Analysis`; **the two names should be merged across
treebanks and languages!** Example: `Analysis=pagunghagh*(N)^[Abl_Mod.Sg]` (for the word _pagunghaghmeng_).

### MSeg

See also [MGloss](#mgloss), [Morf](#morf) and [Root](#root).

Morphemic segmentation as commonly used in interlinear glossed text in linguistic literature:
a hyphen (“-”) denotes boundary between morphemes,
“=” is placed between a clitic and its host word.
This attribute should be accompanied by the `MGloss` attribute, which provides interpretation
of the morphemes.

This attribute is used e.g. in the Tagalog and Warlpiri treebanks.
The Coptic attribute `Morphs` seems to do the same thing; if so, then
**the two names should be merged across treebanks and languages!**

    # sent_id = 1.104a
    # text = Ngarrkangku karnta nyangu.
    # gloss = man-ERG woman saw
    # text_en = The man saw the woman.
    1   Ngarrkangku   ngarrka   NOUN    _   Case=Erg     3   nsubj   _   Gloss=man|MSeg=ngarrka-ngku|MGloss=man-ERG
    2   karnta        karnta    NOUN    _   Case=Abs     3   obj     _   Gloss=woman
    3   nyangu        nyangu    VERB    _   Mood=Ind|…   0   root    _   Gloss=saw|SpaceAfter=No
    4   .             .         PUNCT   _   _            3   punct   _   Gloss=.

### MWE

See also [MWEPOS](#mwepos), [NamedEntity](#namedentity), [Proper](#proper) and [Entity](#entity).

Multi-word expression. The value serves to preserve a multi-word expression from the source corpus.
This attribute is typically used at places where in the source corpus the MWE was treated as one
token (possibly with underscores instead of spaces). Various types of MWEs can be annotated this
way, ranging from fixed functional expressions, such as multi-word prepositions, to multi-word
named entities. (Note however that this attribute is not sufficient for named entity annotation,
as it cannot handle nested entities.)

Besides preserving the information that there is a multi-word expression, the attribute may also
serve as a warning that the annotation conversion was difficult and may have to be checked by
a human here (the annotation of the individual words probably had to be guessed during conversion).
It is typically placed either at the first word of the MWE, or at the head word.

It is attested in Catalan AnCora, Portuguese Bosque (as _MWE), Spanish AnCora.

    # sent_id = 3LB-CAT-06010100-1-s1
    # text = El Tribunal Suprem (TS) ha confirmat la condemna
    1	El          el          DET     _   _   2    det     _   _
    2	Tribunal    tribunal    NOUN    _   _   8    nsubj   _   MWE=Tribunal_Suprem|MWEPOS=PROPN|ClusterId=3LB-CAT-06010100-1-s1.sn.2|ClusterType=Spec.organization|MentionSpan=1-6
    3	Suprem      suprem      ADJ     _   _   2    amod    _   _
    4	(           (           PUNCT   _   _   5    punct   _   SpaceAfter=No
    5	TS          TS          PROPN   _   _   2    appos   _   SpaceAfter=No|ClusterId=3LB-CAT-06010100-1-s1.sn.7|ClusterType=Spec.organization|MentionSpan=4-6
    6	)           )           PUNCT   _   _   5    punct   _   _
    7	ha          haver       AUX     _   _   8    aux     _   _
    8	confirmat   confirmar   VERB    _   _   0    root    _   _
    9	la          el          DET     _   _   10   det     _   _
    10	condemna    condemna    NOUN    _   _   8    obj     _   _

### MWEPOS

See also [MWE](#mwe), [NamedEntity](#namedentity), [Proper](#proper) and [Entity](#entity).

The part of speech of a multi-word expression. The value is taken from the set of [universal
part-of-speech tags (UPOS)](u/overview/pos-index.html) but it is not necessarily identical
to the UPOS annotation of the current token, as the whole expression may function as a different
part of speech than the individual words. For instance, a MWE may function as an [adposition](u/pos/ADP.html)
but its member words may be nouns or adverbs. Or an expression consists of determiners, prepositions,
common nouns and adjectives, but together it is a multi-word named entity, hence it acts as a [PROPN]().

It typically occurs together with the `MWE` attribute, either at the first word of the MWE,
or at the head word.

It is attested in Catalan AnCora, Indonesian CSUI, Indonesian GSD, Indonesian PUD, Ligurian GLT,
Portuguese Bosque (as POSMWE), Portuguese GSD, Spanish AnCora. It first appeared at around UD v1.3;
it is briefly mentioned in [issue #664](https://github.com/UniversalDependencies/docs/issues/664).

Note: Some treebanks later introduced the attribute `ExtPos` (possibly under the influence of SUD?),
which seems to serve a similar purpose.
It appears in Beja NSC, various French treebanks, and Naija NSC, as well as in issues
[#608](https://github.com/UniversalDependencies/docs/issues/608),
[#664](https://github.com/UniversalDependencies/docs/issues/664),
[#678](https://github.com/UniversalDependencies/docs/issues/678),
[#777](https://github.com/UniversalDependencies/docs/issues/777) and
[#807](https://github.com/UniversalDependencies/docs/issues/807).
**Ideally, these two attribute names should be merged into one!**

    # sent_id = 3LB-CAT-06010100-1-s1
    # text = El Tribunal Suprem (TS) ha confirmat la condemna
    1	El          el          DET     _   _   2    det     _   _
    2	Tribunal    tribunal    NOUN    _   _   8    nsubj   _   MWE=Tribunal_Suprem|MWEPOS=PROPN|ClusterId=3LB-CAT-06010100-1-s1.sn.2|ClusterType=Spec.organization|MentionSpan=1-6
    3	Suprem      suprem      ADJ     _   _   2    amod    _   _
    4	(           (           PUNCT   _   _   5    punct   _   SpaceAfter=No
    5	TS          TS          PROPN   _   _   2    appos   _   SpaceAfter=No|ClusterId=3LB-CAT-06010100-1-s1.sn.7|ClusterType=Spec.organization|MentionSpan=4-6
    6	)           )           PUNCT   _   _   5    punct   _   _
    7	ha          haver       AUX     _   _   8    aux     _   _
    8	confirmat   confirmar   VERB    _   _   0    root    _   _
    9	la          el          DET     _   _   10   det     _   _
    10	condemna    condemna    NOUN    _   _   8    obj     _   _

### NamedEntity

See also [MWE](#mwe), [MWEPOS](#mwepos), [Proper](#proper) and [Entity](#entity).

`NamedEntity=Yes` preserves the information that the word was tagged `PROPN` when it was first
imported to UD. Typically of Google-annotated data (GSD and PUD), all words in multi-word named entities are
tagged `PROPN`, which is [wrong in UD](u/pos/PROPN.html). Determiners, numerals, adjectives,
common nouns and other words should get their usual UPOS tags even inside titles of books or
movies, names of organizations etc. However, as we fix the UPOS tag, we may want to still preserve
the information that a sequence of words were tagged `PROPN` because we could later convert it
to genuine annotation of named entities.

Attested in German GSD and Irish IDT.

    # sent_id = train-s203
    # text = Unser Erlebnis auf dem Leuchtturm Roter Sand war einmalig
    1   Unser        unser        DET    _   _   2   det     _   _
    2   Erlebnis     Erlebnis     NOUN   _   _   9   nsubj   _   _
    3   auf          auf          ADP    _   _   5   case    _   _
    4   dem          der          DET    _   _   5   det     _   _
    5   Leuchtturm   Leuchtturm   NOUN   _   _   2   nmod    _   _
    6   Roter        rot          ADJ    _   _   7   amod    _   NamedEntity=Yes
    7   Sand         Sand         NOUN   _   _   5   appos   _   NamedEntity=Yes
    8   war          sein         AUX    _   _   9   cop     _   _
    9   einmalig     einmalig     ADJ    _   _   0   root    _   _

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

### OrigLang

See also [Lang](#lang).

Original language of the current token, if different from the main language of the file.
Similarly to the `Lang` attribute, the value is the (lowercase) ISO 639 language code
(ISO 639-1 if it exists, ISO 639-3 otherwise). However, unlike the `Lang` attribute,
`OrigLang` does not switch the validator to the other language, i.e., the token must still
adhere to the guidelines specific for the main language of the file.

See also [issue #776](https://github.com/UniversalDependencies/docs/issues/776).

Attested e.g. in Coptic or Komi Zyrian.

    # sent_id = shenoute_fox-XH204-216_s0003
    # text = ⲁⲗⲗⲁ ⲉⲕϯⲟⲩⲃⲉⲓⲏⲥⲟⲩⲥ ⲉⲧⲟⲩⲏϩ ϩⲛⲛⲉⲭⲣⲉⲓⲥⲧⲓⲁⲛⲟⲥ .
    1	ⲁⲗⲗⲁ	ⲁⲗⲗⲁ	CCONJ	_	Foreign=Yes	4	cc	_	OrigLang=grc
    2-6	ⲉⲕϯⲟⲩⲃⲉⲓⲏⲥⲟⲩⲥ	_	_	_	_	_	_	_	_
    2	ⲉ	ⲉⲣⲉ	PART	_	_	4	mark	_	_
    3	ⲕ	ⲛⲧⲟⲕ	PRON	_	Definite=Def|…	4	nsubj	_	_
    4	ϯ	ϯ	VERB	_	VerbForm=Fin	0	root	_	_
    5	ⲟⲩⲃⲉ	ⲟⲩⲃⲉ	ADP	_	_	6	case	_	_
    6	ⲓⲏⲥⲟⲩⲥ	ⲓⲏⲥⲟⲩⲥ	PROPN	_	Foreign=Yes	4	obl	_	Entity=(person-Jesus|Orig=ⲓ︤ⲥ︥|OrigLang=he
    7-8	ⲉⲧⲟⲩⲏϩ	_	_	_	_	_	_	_	_
    7	ⲉⲧ	ⲉⲧⲉⲣⲉ	SCONJ	_	_	8	mark	_	_
    8	ⲟⲩⲏϩ	ⲟⲩⲱϩ	VERB	_	VerbForm=Fin	6	acl	_	_
    9-11	ϩⲛⲛⲉⲭⲣⲉⲓⲥⲧⲓⲁⲛⲟⲥ	_	_	_	_	_	_	_	_
    9	ϩⲛ	ϩⲛ	ADP	_	_	11	case	_	Orig=ϩ︤ⲛ︥
    10	ⲛⲉ	ⲡ	DET	_	Definite=Def|…	11	det	_	Entity=(person
    11	ⲭⲣⲉⲓⲥⲧⲓⲁⲛⲟⲥ	ⲭⲣⲉⲓⲥⲧⲓⲁⲛⲟⲥ	NOUN	_	Foreign=Yes	8	obl	_	Entity=person)person-Jesus)|Orig=ⲭⲣⲉⲓⲥⲧⲓⲁⲛⲟⲥ⳿|OrigLang=grc
    12	.	.	PUNCT	_	_	4	punct	_	_

### Proper

See also [MWE](#mwe), [MWEPOS](#mwepos), [NamedEntity](#namedentity) and [Entity](#entity).

`Proper=True` preserves a same-named feature from the original Google annotation in the PUD
treebanks, but only for words that could not be tagged `PROPN` in UD (e.g., adjectives).
Typically of Google-annotated data (GSD and PUD), all words in multi-word named entities are
labeled as proper, which is [wrong in UD](u/pos/PROPN.html). Determiners, numerals, adjectives,
common nouns and other words should get their usual UPOS tags even inside titles of books or
movies, names of organizations etc.

The information that a non-proper-noun was annotated as `Proper` could be later converted
to genuine annotation of multi-word named entities.

Attested in the following PUD treebanks: Arabic, English, French, German, Hindi, Chinese,
Italian, Korean, Portuguese, Russian, Spanish, Thai, Turkish.

    # sent_id = n01035013
    # text = Полиция в Британской Колумбии сказала,
    # english_text = Police in B.C. said
    1   Полиция      полиция      NOUN    _   _   5    nsubj   _   _
    2   в            в            ADP     _   _   4    case    _   _
    3   Британской   британский   ADJ     _   _   4    amod    _   Proper=True
    4   Колумбии     Колумбия     PROPN   _   _   1    nmod    _   _
    5   сказала      сказать      VERB    _   _   0    root    _   SpaceAfter=No
    6   ,            ,            PUNCT   _   _   15   punct   _   _

### Ref

Some standardized reference to the source text as used in classical studies. For example,
annotated texts from the Bible have the uppercase abbreviation of the book, followed by
an underscore and a decimal reference to the verse. It is a token-level reference (rather
than sentence-level) because one sentence may contain parts with different source ids.
On the other hand, the same source id may cover multiple sentences or their parts.

Used e.g. in Ancient Greek PROIEL, Latin PROIEL, Gothic PROIEL, Old Church Slavonic PROIEL,
Old East Slavic TOROT, Romanian Nonstandard, Yoruba YTB.

    # source = Bibeli Mimọ, Jẹ́nẹ́sísì, Chapter 1
    # newdoc id = GEN_1
    # sent_id = GEN_1.1
    # text = Ní ìbẹ̀rẹ̀ ohun gbogbo Ọlọ́run dá àwọn ọ̀run àti ayé.
    # text_en = In the beginning God created the heaven and the earth.
    1    Ní       ní       ADP     _   _   2    case    _   Gloss=in|Ref=GEN_1.1
    2    ìbẹ̀rẹ̀    ìbẹ̀rẹ̀    NOUN    _   _   6    obl     _   Gloss=beginning|Ref=GEN_1.1
    3    ohun     ohun     NOUN    _   _   5    nmod    _   Gloss=things|Ref=GEN_1.1
    4    gbogbo   gbogbo   DET     _   _   5    det     _   Gloss=all|Ref=GEN_1.1
    5    Ọlọ́run   ọlọ́run   NOUN    _   _   6    nsubj   _   Gloss=god|Ref=GEN_1.1
    6    dá       dá       VERB    _   _   0    root    _   Gloss=made|Ref=GEN_1.1
    7    àwọn     àwọn     DET     _   _   8    det     _   Gloss=the|Ref=GEN_1.1
    8    ọ̀run     ọ̀run     NOUN    _   _   6    obj     _   Gloss=heaven|Ref=GEN_1.1
    9    àti      àti      CCONJ   _   _   10   cc      _   Gloss=and|Ref=GEN_1.1
    10   ayé      ayé      NOUN    _   _   8    conj    _   Gloss=earth|Ref=GEN_1.1|SpaceAfter=No
    11   .        .        PUNCT   _   _   6    punct   _   Gloss=.|Ref=GEN_1.1

### Root

See also [MSeg](#mseg) and [LDeriv](#lderiv).

The consonant root of the words in Semitic languages (typically three consonants).
For example, the Arabic verb _rafaḍ_ “reject” has `Root=r_f_.d`.
Used e.g. in Arabic PADT and Assyrian AS.

    # sent_id = afp.20000715.0075:p1u1
    # text = برلين ترفض حصول شركة اميركية على رخصة تصنيع دبابة "ليوبارد" الالمانية
    1	برلين	بَرلِين	X	_	_	2	nsubj	_	Vform=بَرلِين|Gloss=Berlin|Root=barlIn|Translit=barlīn|LTranslit=barlīn
    2	ترفض	رَفَض	VERB	_	_	0	root	_	Vform=تَرفُضُ|Gloss=reject,refuse|Root=r_f_.d|Translit=tarfuḍu|LTranslit=rafaḍ
    3	حصول	حُصُول	NOUN	_	_	2	obj	_	Vform=حُصُولَ|Gloss=acquisition,obtaining,occurrence,happening|Root=.h_.s_l|Translit=ḥuṣūla|LTranslit=ḥuṣūl
    4	شركة	شَرِكَة	NOUN	_	_	3	nmod	_	Vform=شَرِكَةٍ|Gloss=company,corporation|Root=^s_r_k|Translit=šarikatin|LTranslit=šarikat
    5	اميركية	أَمِيرِكِيّ	ADJ	_	_	4	amod	_	Vform=أَمِيرِكِيَّةٍ|Gloss=American|Root='amIrik|Translit=ʾamīrikīyatin|LTranslit=ʾamīrikīy
    6	على	عَلَى	ADP	_	_	7	case	_	Vform=عَلَى|Gloss=on,above|Root=`_l_w|Translit=ʿalā|LTranslit=ʿalā
    7	رخصة	رُخصَة	NOUN	_	_	3	obl:arg	_	Vform=رُخصَةِ|Gloss=license,permit|Root=r__h_.s|Translit=ruḫṣati|LTranslit=ruḫṣat
    8	تصنيع	تَصنِيع	NOUN	_	_	7	nmod	_	Vform=تَصنِيعِ|Gloss=fabrication,industrialization,processing|Root=.s_n_`|Translit=taṣnīʿi|LTranslit=taṣnīʿ
    9	دبابة	دَبَّابَة	NOUN	_	_	8	nmod	_	Vform=دَبَّابَةِ|Gloss=tank|Root=d_b_b|Translit=dabbābati|LTranslit=dabbābat
    10	"	"	PUNCT	_	_	11	punct	_	SpaceAfter=No|Vform="|Translit="
    11	ليوبارد	لِيُوبَارد	X	_	_	9	nmod	_	SpaceAfter=No|Vform=لِيُوبَارد|Gloss=Leopard|Root=liyUbArd|Translit=liyūbārd|LTranslit=liyūbārd
    12	"	"	PUNCT	_	_	11	punct	_	Vform="|Translit="
    13	الالمانية	أَلمَانِيّ	ADJ	_	_	9	amod	_	Vform=اَلأَلمَانِيَّةِ|Gloss=German|Root='almAn|Translit=al-ʾalmānīyati|LTranslit=ʾalmānīy

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

See also [SpaceAfter](#spaceafter), [SpacesBefore](#spacesbefore), [CorrectSpaceAfter](#correctspaceafter) and [NewPar](#newpar).

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

### Split

Used in conjunction with [Entity](#Entity) to indicate split antecedent anaphora, by creating a pointing relation between multiple entity GRP identifiers and the ID of an anaphor pointing back to them:

```CoNLL-U
15	Padalecki	Padalecki	PROPN	NNP	Number=Sing	16	nsubj	16:nsubj	Entity=(person-1-giv:act-1-coref-Jared_Padalecki)
16	partnered	partner	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
17	with	with	ADP	IN	_	18	case	18:case	_
18	co-star	co-star	NOUN	NN	Number=Sing	16	obl	16:obl:with	Entity=(person-97-giv:inact-1,3-coref-Jensen_Ackles
19	Jensen	Jensen	PROPN	NNP	Number=Sing	18	appos	18:appos	XML=<ref target:::"https://en.wikipedia.org/wiki/Jensen_Ackles">
20	Ackles	Ackles	PROPN	NNP	Number=Sing	19	flat	19:flat	Entity=97)|XML=</ref>
21	to	to	PART	TO	_	22	mark	22:mark	Discourse=purpose:105->104:0
22	release	release	VERB	VB	VerbForm=Inf	16	advcl	16:advcl:to	_
23	a	a	DET	DT	Definite=Ind|PronType=Art	24	det	24:det	Entity=(object-190-new-2-coref
24	shirt	shirt	NOUN	NN	Number=Sing	22	obj	22:obj	Entity=190)
25	featuring	feature	VERB	VBG	VerbForm=Ger	24	acl	24:acl	Discourse=elaboration:106->105:0
26	both	both	DET	DT	_	25	obj	25:obj	Entity=(object-191-new-1-sgl
27	of	of	ADP	IN	_	29	case	29:case	_
28	their	their	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	29	nmod:poss	29:nmod:poss	Entity=(person-192-acc:aggr-1-coref)|Split=1<192,97<192
29	faces	face	NOUN	NNS	Number=Plur	26	nmod	26:nmod:of	Entity=191)|SpaceAfter=No
```

Here "their" (entity number 192) refers to both Padalecki (entity number 1) and Jensen Ackles (entity number 97). We therefore have `Split=1<192,97<192`, indicating that the identity of 192 is resolvable by joint reference to entities 1 and 97. See more information in the [Entity](#Entity) notation section and the documentation from the [Universal Anaphora format specifications](https://github.com/UniversalAnaphora/UniversalAnaphora/blob/main/documents/UA_CONLL_U_proposal_compact.md)

### Stype

Sentence type (modality). It is annotated at the head of the sentence or the clause. The following
values are recognized: `Stype=declarative`, `Stype=imperative`, `Stype=interrogative`,
`Stype=interjective`. The attribute overlaps with the morphological feature [Mood]() of verbs
but it is not exactly the same information.

Used in Hindi HDTB and Urdu UDTB.

    # sent_id = train-s2
    # text = इसे नवाब शाहजेहन ने बनवाया था ।
    1	इसे	यह	PRON    _   _   5   obj        _   Vib=को|Tam=ko|ChunkId=NP|ChunkType=head|Translit=ise
    2	नवाब	नवाब	NOUN    _   _   3   compound   _   Vib=0|Tam=0|ChunkId=NP2|ChunkType=child|Translit=navāba
    3	शाहजेहन	शाहजेहन	PROPN   _   _   5   nsubj      _   Vib=0_ने|Tam=0|ChunkId=NP2|ChunkType=head|Translit=śāhajehana
    4	ने	ने	ADP     _   _   3   case       _   ChunkId=NP2|ChunkType=child|Translit=ne
    5	बनवाया	बनवा	VERB    _   _   0   root       _   Vib=या_था|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=banavāyā
    6	था	था	AUX     _   _   5   aux        _   Vib=था|Tam=WA|ChunkId=VGF|ChunkType=child|Translit=thā
    7	।	।	PUNCT   _   _   5   punct      _   ChunkId=BLK|ChunkType=head|Translit=.

### Tam

See also [Vib](#vib).

In Indian corpora, `Tam` encodes tense, aspect and modality.
Unlike the [Tense](), [Aspect]() and [Mood]() features in FEATS, the `Tam` value is just a
language-specific string such as the form of the suffix or the auxiliary verb.

Used in Hindi HDTB and Urdu UDTB.

    # sent_id = train-s2
    # text = इसे नवाब शाहजेहन ने बनवाया था ।
    1	इसे	यह	PRON    _   _   5   obj        _   Vib=को|Tam=ko|ChunkId=NP|ChunkType=head|Translit=ise
    2	नवाब	नवाब	NOUN    _   _   3   compound   _   Vib=0|Tam=0|ChunkId=NP2|ChunkType=child|Translit=navāba
    3	शाहजेहन	शाहजेहन	PROPN   _   _   5   nsubj      _   Vib=0_ने|Tam=0|ChunkId=NP2|ChunkType=head|Translit=śāhajehana
    4	ने	ने	ADP     _   _   3   case       _   ChunkId=NP2|ChunkType=child|Translit=ne
    5	बनवाया	बनवा	VERB    _   _   0   root       _   Vib=या_था|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=banavāyā
    6	था	था	AUX     _   _   5   aux        _   Vib=था|Tam=WA|ChunkId=VGF|ChunkType=child|Translit=thā
    7	।	।	PUNCT   _   _   5   punct      _   ChunkId=BLK|ChunkType=head|Translit=.

### Translit

See also [LTranslit](#ltranslit), [Gloss](#gloss) and [Vform](#vform).

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

### Vform

See also [Translit](#translit).

This attribute shows the fully vocalized (diacriticized) version of an Arabic word, which
typically appears without short vowel diacritics in the surface text.

Used e.g. in Arabic PADT.

    # sent_id = afp.20000715.0075:p1u1
    # text = برلين ترفض حصول شركة اميركية على رخصة تصنيع دبابة "ليوبارد" الالمانية
    1	برلين	بَرلِين	X	_	_	2	nsubj	_	Vform=بَرلِين|Gloss=Berlin|Root=barlIn|Translit=barlīn|LTranslit=barlīn
    2	ترفض	رَفَض	VERB	_	_	0	root	_	Vform=تَرفُضُ|Gloss=reject,refuse|Root=r_f_.d|Translit=tarfuḍu|LTranslit=rafaḍ
    3	حصول	حُصُول	NOUN	_	_	2	obj	_	Vform=حُصُولَ|Gloss=acquisition,obtaining,occurrence,happening|Root=.h_.s_l|Translit=ḥuṣūla|LTranslit=ḥuṣūl
    4	شركة	شَرِكَة	NOUN	_	_	3	nmod	_	Vform=شَرِكَةٍ|Gloss=company,corporation|Root=^s_r_k|Translit=šarikatin|LTranslit=šarikat
    5	اميركية	أَمِيرِكِيّ	ADJ	_	_	4	amod	_	Vform=أَمِيرِكِيَّةٍ|Gloss=American|Root='amIrik|Translit=ʾamīrikīyatin|LTranslit=ʾamīrikīy
    6	على	عَلَى	ADP	_	_	7	case	_	Vform=عَلَى|Gloss=on,above|Root=`_l_w|Translit=ʿalā|LTranslit=ʿalā
    7	رخصة	رُخصَة	NOUN	_	_	3	obl:arg	_	Vform=رُخصَةِ|Gloss=license,permit|Root=r__h_.s|Translit=ruḫṣati|LTranslit=ruḫṣat
    8	تصنيع	تَصنِيع	NOUN	_	_	7	nmod	_	Vform=تَصنِيعِ|Gloss=fabrication,industrialization,processing|Root=.s_n_`|Translit=taṣnīʿi|LTranslit=taṣnīʿ
    9	دبابة	دَبَّابَة	NOUN	_	_	8	nmod	_	Vform=دَبَّابَةِ|Gloss=tank|Root=d_b_b|Translit=dabbābati|LTranslit=dabbābat
    10	"	"	PUNCT	_	_	11	punct	_	SpaceAfter=No|Vform="|Translit="
    11	ليوبارد	لِيُوبَارد	X	_	_	9	nmod	_	SpaceAfter=No|Vform=لِيُوبَارد|Gloss=Leopard|Root=liyUbArd|Translit=liyūbārd|LTranslit=liyūbārd
    12	"	"	PUNCT	_	_	11	punct	_	Vform="|Translit="
    13	الالمانية	أَلمَانِيّ	ADJ	_	_	9	amod	_	Vform=اَلأَلمَانِيَّةِ|Gloss=German|Root='almAn|Translit=al-ʾalmānīyati|LTranslit=ʾalmānīy

### Vib

See also [Tam](#tam).

In Indian corpora, `Vib` encodes the vibhakti, which is typically a case suffix, a postposition,
or a combination of both. Unlike the `Case` feature in FEATS, the vibhakti value is just a
language-specific string such as the form of the suffix or the postposition; however, sometimes
it is not a copy of a part of the current or neighboring token. For example, the Hindi
postposition marking direct or indirect object is को _(ko)_ but some pronouns do not use the
postposition and instead inflect irregularly. So the pronoun इसे _(ise)_ is the object form of
यह _(yah)_, its morphological features will say `Case=Acc,Dat` but its vibhakti in MISC will be
`Vib=को`.

Used in Hindi HDTB and Urdu UDTB.

    # sent_id = train-s2
    # text = इसे नवाब शाहजेहन ने बनवाया था ।
    1	इसे	यह	PRON    _   _   5   obj        _   Vib=को|Tam=ko|ChunkId=NP|ChunkType=head|Translit=ise
    2	नवाब	नवाब	NOUN    _   _   3   compound   _   Vib=0|Tam=0|ChunkId=NP2|ChunkType=child|Translit=navāba
    3	शाहजेहन	शाहजेहन	PROPN   _   _   5   nsubj      _   Vib=0_ने|Tam=0|ChunkId=NP2|ChunkType=head|Translit=śāhajehana
    4	ने	ने	ADP     _   _   3   case       _   ChunkId=NP2|ChunkType=child|Translit=ne
    5	बनवाया	बनवा	VERB    _   _   0   root       _   Vib=या_था|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=banavāyā
    6	था	था	AUX     _   _   5   aux        _   Vib=था|Tam=WA|ChunkId=VGF|ChunkType=child|Translit=thā
    7	।	।	PUNCT   _   _   5   punct      _   ChunkId=BLK|ChunkType=head|Translit=.

### XML

The annotation `XML` is used to encode opening and closing XML/HTML tags in source documents, which are not part of the text that appears in the actual word forms and do not correspond to some other, already existing MISC annotation. For example, because paragraphs are representable in `# newpar` or `NewPar` annotations, there is no need to represent XML elements such as `<p>`. However, some tags represent features other than block elements, and may also have attributes. These are used, for example, in the English GUM corpus:

```CoNLL-U
1	Antonín	Antonín	PROPN	NNP	Number=Sing	31	nsubj	31:nsubj	XML=<hi rend:::"bold">
2	Leopold	Leopold	PROPN	NNP	Number=Sing	1	flat	1:flat	_
3	Dvořák	Dvořák	PROPN	NNP	Number=Sing	1	flat	1:flat	XML=</hi>
4	(	(	PUNCT	-LRB-	_	6	punct	6:punct	SpaceAfter=No
5	/	/	PUNCT	SYM	_	6	punct	6:punct	_
6	d(ə)ˈvɔːrʒɑːk	d(ə)ˈvɔːrʒɑːk	PROPN	NNP	Number=Sing	1	appos	1:appos	XML=<ref target:::"https://en.wikipedia.org/wiki/Help:IPA/English"></ref>
7	,	,	PUNCT	,	_	8	punct	8:punct	_
8	-ʒæk	-ʒæk	PROPN	NNP	Number=Sing	6	conj	1:appos|6:conj	XML=<ref target:::"https://en.wikipedia.org/wiki/Help:IPA/English"></ref>
9	/	/	PUNCT	SYM	_	10	punct	10:punct	_
10	d(ə)-VOR-zha(h)k	d(ə)-VOR-zha(h)k	PROPN	NNP	Number=Sing	1	appos	1:appos	SpaceAfter=No|XML=<hi rend:::"italic"><ref target:::"https://en.wikipedia.org/wiki/Help:IPA/English"></ref></hi>
11	;	;	PUNCT	:	_	12	punct	12:punct	_
12	Czech	Czech	PROPN	NNP	Number=Sing	15	dep	15:dep	SpaceAfter=No
13	:	:	PUNCT	:	_	12	punct	12:punct	_
14	[	[	PUNCT	-LRB-	_	15	punct	15:punct	SpaceAfter=No
15	ˈantoɲiːn	ˈantoɲiːn	PROPN	NNP	Number=Sing	1	parataxis	1:parataxis	XML=<ref target:::"https://en.wikipedia.org/wiki/Help:IPA/Czech">
16	ˈlɛopolt	ˈlɛopolt	PROPN	NNP	Number=Sing	15	flat	15:flat	_
17	ˈdvor̝aːk	ˈdvor̝aːk	PROPN	NNP	Number=Sing	15	flat	15:flat	SpaceAfter=No|XML=</ref>
18	]	]	PUNCT	-RRB-	_	15	punct	15:punct	SpaceAfter=No
19	;	;	PUNCT	:	_	20	punct	20:punct	_
20	8	8	NUM	CD	NumForm=Digit|NumType=Card	15	nmod:tmod	15:nmod:tmod	XML=<date when:::"1841-09-08">
21	September	September	PROPN	NNP	Number=Sing	20	compound	20:compound	_
22	1841	1841	NUM	CD	NumForm=Digit|NumType=Card	20	nmod:tmod	20:nmod:tmod	XML=</date>
23	–	-	SYM	SYM	_	24	case	24:case	_
24	1	1	NUM	CD	NumForm=Digit|NumType=Card	20	nmod	20:nmod:to	XML=<date when:::"1904-05-01">
25	May	May	PROPN	NNP	Number=Sing	24	compound	24:compound	_
26	1904	1904	NUM	CD	NumForm=Digit|NumType=Card	24	nmod:tmod	24:nmod:tmod	SpaceAfter=No|XML=</date>
27	)	)	PUNCT	-RRB-	_	15	punct	15:punct	_
28	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	31	cop	31:cop	_
29	a	a	DET	DT	Definite=Ind|PronType=Art	31	det	31:det	_
30	Czech	Czech	ADJ	JJ	Degree=Pos	31	amod	31:amod	XML=<ref target:::"https://en.wikipedia.org/wiki/Czechs"></ref>
31	composer	composer	NOUN	NN	Number=Sing	0	root	0:root	SpaceAfter=No
32	.	.	PUNCT	.	_	31	punct	31:punct	_
```

This example illustrates several types of tags found in the source data for this document: hyperlinks, resolved date annotations, and rendering markup, such as bold font weight. The convention for the XML annotations is to indicate all opening tags opening before a token on its line's MISC field, in oreder of opening, and all closing tags on the line of the token after which the tag closes (in the reverse order). As a result, XML markup around a single token will have both the opening and closing elements on the same line (see token 30 in the example, a single-token hyperlink). The XML elements are represented canonically including their attributes, except that the equals sign is escaped as `:::`, to avoid confusion with the MISC field's own `=` sign. If pipes occur in the value, they must also be escaped using an XML escape (e.g. `&#124;`).

