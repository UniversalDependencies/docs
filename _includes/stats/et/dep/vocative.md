

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

91 nodes (0%) are attached to their parents as `vocative`.

47 instances of `vocative` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.34065934065934.

The following 10 pairs of parts of speech are connected with `vocative`: [et-pos/VERB]()-[et-pos/NOUN]() (47; 52% instances), [et-pos/VERB]()-[et-pos/PROPN]() (22; 24% instances), [et-pos/PRON]()-[et-pos/NOUN]() (6; 7% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (5; 5% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (4; 4% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (3; 3% instances), [et-pos/ADJ]()-[et-pos/PROPN]() (1; 1% instances), [et-pos/PRON]()-[et-pos/PROPN]() (1; 1% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (1; 1% instances), [et-pos/VERB]()-[et-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 vocative	color:blue
1	(	(	PUNCT	Z	_	3	punct	_	_
2	"	"	PUNCT	Z	_	3	punct	_	_
3	Palun	paluma	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	,	,	PUNCT	Z	_	5	punct	_	_
5	maestro	maestro	NOUN	S	Case=Nom|Number=Sing	3	vocative	_	_
6	,	,	PUNCT	Z	_	3	punct	_	_
7	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
8	jätsin	jätma	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	_
9	maiuse	maius	NOUN	S	Case=Gen|Number=Sing	8	dobj	_	_
10	teile	sina	PRON	P	Case=All|Number=Plur|Person=2|PronType=Prs	8	nmod	_	_
11	!	!	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 vocative	color:blue
1	Ram	Ram	PROPN	S	Case=Nom|Number=Sing	5	vocative	_	_
2	,	,	PUNCT	Z	_	5	punct	_	_
3	kas	kas	ADV	D	_	5	advmod	_	_
4	sa	sina	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
5	näed	nägema	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	,	,	PUNCT	Z	_	5	punct	_	_
7	Leemet	Leemet	PROPN	S	Case=Nom|Number=Sing	8	nsubj	_	_
8	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
9	tagasi	tagasi	ADV	D	_	8	advmod	_	_
10	!	!	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 vocative	color:blue
1	"	"	PUNCT	Z	_	2	punct	_	_
2	Saa	saama	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ometi	ometi	ADV	D	_	2	advmod	_	_
4	aru	aru	NOUN	S	Case=Par|Number=Sing	2	dobj	_	_
5	,	,	PUNCT	Z	_	6	punct	_	_
6	sa	sina	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	_
7	igavene	igavene	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	8	amod	_	_
8	oinas	oinas	NOUN	S	Case=Nom|Number=Sing	6	vocative	_	_
9	,	,	PUNCT	Z	_	2	punct	_	_
10	"	"	PUNCT	Z	_	2	punct	_	_
11	seletasid	seletama	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	_	_
12	talle	tema	PRON	P	Case=All|Number=Sing|Person=3|PronType=Prs	11	nmod	_	_
13	peatoimetaja	pea_toimetaja	NOUN	S	Case=Nom|Number=Sing	11	advcl	_	_
14	ja	ja	CONJ	J	_	13	cc	_	_
15	majandusdirektor	majandus_direktor	NOUN	S	Case=Nom|Number=Sing	13	conj	_	_
16	.	.	PUNCT	Z	_	2	punct	_	_

~~~


