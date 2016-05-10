

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:cop]().

17147 nodes (7%) are attached to their parents as `nsubj`.

10519 instances of `nsubj` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27981571120313.

The following 27 pairs of parts of speech are connected with `nsubj`: [et-pos/VERB]()-[et-pos/NOUN]() (9614; 56% instances), [et-pos/VERB]()-[et-pos/PRON]() (4539; 26% instances), [et-pos/VERB]()-[et-pos/PROPN]() (2668; 16% instances), [et-pos/VERB]()-[et-pos/ADJ]() (116; 1% instances), [et-pos/VERB]()-[et-pos/NUM]() (80; 0% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (29; 0% instances), [et-pos/AUX]()-[et-pos/NOUN]() (23; 0% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (21; 0% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (10; 0% instances), [et-pos/VERB]()-[et-pos/SYM]() (9; 0% instances), [et-pos/AUX]()-[et-pos/PROPN]() (5; 0% instances), [et-pos/PRON]()-[et-pos/NOUN]() (5; 0% instances), [et-pos/VERB]()-[et-pos/ADV]() (5; 0% instances), [et-pos/ADV]()-[et-pos/NOUN]() (3; 0% instances), [et-pos/NOUN]()-[et-pos/PRON]() (3; 0% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (3; 0% instances), [et-pos/ADJ]()-[et-pos/PROPN]() (2; 0% instances), [et-pos/AUX]()-[et-pos/PRON]() (2; 0% instances), [et-pos/VERB]()-[et-pos/X]() (2; 0% instances), [et-pos/ADJ]()-[et-pos/PRON]() (1; 0% instances), [et-pos/ADV]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/SYM]() (1; 0% instances), [et-pos/NUM]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/NUM]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/VERB]()-[et-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj	color:blue
1	Tema	tema	PRON	P	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	nmod	_	_
2	ees	ees	ADP	K	AdpType=Post	1	case	_	_
3	seisis	seisma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	kääbus	kääbus	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	_
5	,	,	PUNCT	Z	_	8	punct	_	_
6	seljas	selg	NOUN	S	Case=Ine|Number=Sing	8	nmod	_	_
7	tilluke	tilluke	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	8	amod	_	_
8	raudrüü	raud_rüü	NOUN	S	Case=Nom|Number=Sing	3	advcl	_	_
9	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	"	"	PUNCT	Z	_	3	punct	_	_
2	Ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	usun	uskuma	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	,	,	PUNCT	Z	_	7	punct	_	_
5	et	et	SCONJ	J	_	7	mark	_	_
6	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
7	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	_
8	kohe-kohe	kohe-kohe	ADV	D	_	7	advmod	_	_
9	ärkamas	ärkama	VERB	V	Case=Ine|VerbForm=Sup|Voice=Act	7	xcomp	_	_
10	,	,	PUNCT	Z	_	14	punct	_	_
11	kui	kui	SCONJ	J	_	14	mark	_	_
12	mitte	mitte	ADV	D	Negative=Neg	14	advmod	_	_
13	juba	juba	ADV	D	_	14	advmod	_	_
14	ärganud	ärkama	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	7	advcl	_	_
15	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Ernesaks	Ernesaks	PROPN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	libistas	libistama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	pilgu	pilk	NOUN	S	Case=Gen|Number=Sing	2	dobj	_	_
4	üle	üle	ADP	K	AdpType=Post	5	case	_	_
5	toa	tuba	NOUN	S	Case=Gen|Number=Sing	2	nmod	_	_
6	.	.	PUNCT	Z	_	2	punct	_	_

~~~


