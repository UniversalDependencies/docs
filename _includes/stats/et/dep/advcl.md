

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

3130 nodes (1%) are attached to their parents as `advcl`.

1960 instances of `advcl` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.28051118210863.

The following 36 pairs of parts of speech are connected with `advcl`: [et-pos/VERB]()-[et-pos/VERB]() (1952; 62% instances), [et-pos/VERB]()-[et-pos/NOUN]() (288; 9% instances), [et-pos/ADJ]()-[et-pos/VERB]() (217; 7% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (97; 3% instances), [et-pos/NOUN]()-[et-pos/VERB]() (92; 3% instances), [et-pos/VERB]()-[et-pos/ADV]() (86; 3% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (73; 2% instances), [et-pos/ADV]()-[et-pos/NOUN]() (63; 2% instances), [et-pos/VERB]()-[et-pos/PROPN]() (42; 1% instances), [et-pos/ADV]()-[et-pos/VERB]() (35; 1% instances), [et-pos/PRON]()-[et-pos/VERB]() (17; 1% instances), [et-pos/VERB]()-[et-pos/ADJ]() (16; 1% instances), [et-pos/ADJ]()-[et-pos/ADV]() (13; 0% instances), [et-pos/ADV]()-[et-pos/ADJ]() (13; 0% instances), [et-pos/ADJ]()-[et-pos/PRON]() (12; 0% instances), [et-pos/ADJ]()-[et-pos/PROPN]() (12; 0% instances), [et-pos/VERB]()-[et-pos/PRON]() (12; 0% instances), [et-pos/ADV]()-[et-pos/ADV]() (11; 0% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (11; 0% instances), [et-pos/NOUN]()-[et-pos/ADV]() (8; 0% instances), [et-pos/NUM]()-[et-pos/VERB]() (8; 0% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (7; 0% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (7; 0% instances), [et-pos/ADV]()-[et-pos/PRON]() (5; 0% instances), [et-pos/ADV]()-[et-pos/PROPN]() (5; 0% instances), [et-pos/PRON]()-[et-pos/NOUN]() (5; 0% instances), [et-pos/NOUN]()-[et-pos/PRON]() (4; 0% instances), [et-pos/PROPN]()-[et-pos/VERB]() (4; 0% instances), [et-pos/ADP]()-[et-pos/VERB]() (3; 0% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (3; 0% instances), [et-pos/PRON]()-[et-pos/PRON]() (3; 0% instances), [et-pos/VERB]()-[et-pos/X]() (2; 0% instances), [et-pos/AUX]()-[et-pos/ADV]() (1; 0% instances), [et-pos/AUX]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/PRON]()-[et-pos/ADV]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 14 advcl	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 advcl	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Aga	aga	CONJ	J	_	2	cc	_	_
2	parem	parem	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	_
3	oleks	olema	VERB	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
4	,	,	PUNCT	Z	_	6	punct	_	_
5	kui	kui	SCONJ	J	_	6	mark	_	_
6	oleksid	olema	VERB	V	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	advcl	_	_
7	hoopis	hoopis	ADV	D	_	6	advmod	_	_
8	pirukad	pirukas	NOUN	S	Case=Nom|Number=Plur	6	nsubj	_	_
9	.	.	PUNCT	Z	_	2	punct	_	_

~~~


