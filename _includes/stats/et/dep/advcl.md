

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

689 nodes (2%) are attached to their parents as `advcl`.

528 instances of `advcl` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.51814223512337.

The following 27 pairs of parts of speech are connected with `advcl`: [et-pos/VERB]()-[et-pos/VERB]() (465; 67% instances), [et-pos/VERB]()-[et-pos/NOUN]() (64; 9% instances), [et-pos/ADJ]()-[et-pos/VERB]() (36; 5% instances), [et-pos/VERB]()-[et-pos/ADJ]() (25; 4% instances), [et-pos/ADV]()-[et-pos/VERB]() (18; 3% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (14; 2% instances), [et-pos/NOUN]()-[et-pos/VERB]() (12; 2% instances), [et-pos/VERB]()-[et-pos/ADV]() (11; 2% instances), [et-pos/VERB]()-[et-pos/PRON]() (10; 1% instances), [et-pos/PRON]()-[et-pos/VERB]() (4; 1% instances), [et-pos/ADJ]()-[et-pos/ADV]() (3; 0% instances), [et-pos/ADV]()-[et-pos/NOUN]() (3; 0% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (3; 0% instances), [et-pos/PROPN]()-[et-pos/VERB]() (3; 0% instances), [et-pos/ADJ]()-[et-pos/PRON]() (2; 0% instances), [et-pos/ADV]()-[et-pos/ADJ]() (2; 0% instances), [et-pos/ADV]()-[et-pos/ADV]() (2; 0% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (2; 0% instances), [et-pos/VERB]()-[et-pos/PROPN]() (2; 0% instances), [et-pos/ADV]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/AUX]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/AUX]()-[et-pos/VERB]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/NUM]()-[et-pos/VERB]() (1; 0% instances), [et-pos/PRON]()-[et-pos/ADV]() (1; 0% instances), [et-pos/PRON]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/PRON]()-[et-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 14 advcl	color:blue
1	"	"	PUNCT	Z	_	3	punct	_	SpaceAfter=No
2	Ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	usun	uskuma	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	7	punct	_	_
5	et	et	SCONJ	J	_	7	mark	_	_
6	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
7	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	_
8	kohe-kohe	kohe-kohe	ADV	D	_	7	advmod	_	_
9	ärkamas	ärkama	VERB	V	Case=Ine|VerbForm=Sup|Voice=Act	7	xcomp	_	SpaceAfter=No
10	,	,	PUNCT	Z	_	14	punct	_	_
11	kui	kui	SCONJ	J	_	14	mark	_	_
12	mitte	mitte	ADV	D	Polarity=Neg	14	advmod	_	_
13	juba	juba	ADV	D	_	14	advmod	_	_
14	ärganud	ärkama	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	7	advcl	_	SpaceAfter=No
15	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 advcl	color:blue
1	Tema	tema	PRON	P	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
2	ees	ees	ADP	K	AdpType=Post	1	case	_	_
3	seisis	seisma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	kääbus	kääbus	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	8	punct	_	_
6	seljas	selg	NOUN	S	Case=Ine|Number=Sing	3	advcl	_	_
7	tilluke	tilluke	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	8	amod	_	_
8	raudrüü	raud_rüü	NOUN	S	Case=Nom|Number=Sing	6	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 advcl	color:blue
1	See	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	3	nsubj:cop	_	_
2	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
3	kummaline	kummaline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	_	_
5	sest	sest	SCONJ	J	_	8	mark	_	_
6	kõik	kõik	PRON	P	Case=Nom|Number=Sing|PronType=Tot	8	nsubj	_	_
7	muu	muu	ADJ	P	Case=Nom|Number=Sing|PronType=Ind	6	amod	_	_
8	paistis	paistma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	advcl	_	_
9	vägagi	väga	ADV	D	_	10	advmod	_	_
10	selgelt	selgelt	ADV	D	_	8	advmod	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	3	punct	_	_

~~~


