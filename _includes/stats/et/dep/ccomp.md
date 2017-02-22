

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

206 nodes (1%) are attached to their parents as `ccomp`.

195 instances of `ccomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.06796116504854.

The following 9 pairs of parts of speech are connected with `ccomp`: [et-pos/VERB]()-[et-pos/VERB]() (147; 71% instances), [et-pos/VERB]()-[et-pos/ADJ]() (24; 12% instances), [et-pos/VERB]()-[et-pos/NOUN]() (18; 9% instances), [et-pos/VERB]()-[et-pos/PRON]() (7; 3% instances), [et-pos/VERB]()-[et-pos/PROPN]() (4; 2% instances), [et-pos/VERB]()-[et-pos/ADV]() (3; 1% instances), [et-pos/ADJ]()-[et-pos/ADV]() (1; 0% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/ADJ]()-[et-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Indrikson	Indrikson	PROPN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	teadis	teadma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ju	ju	ADV	D	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	_	_
5	millist	milline	DET	P	Case=Par|Number=Sing|PronType=Rel	6	det	_	_
6	palka	palk	NOUN	S	Case=Par|Number=Sing	8	obj	_	_
7	näitlejad	näitleja	NOUN	S	Case=Nom|Number=Plur	8	nsubj	_	_
8	saavad	saama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 ccomp	color:blue
1	Ühel	üks	DET	P	Case=Ade|Number=Sing|PronType=Ind	2	det	_	_
2	päeval	päev	NOUN	S	Case=Ade|Number=Sing	3	obl	_	_
3	tundis	tundma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	ka	ka	ADV	D	_	3	advmod	_	_
5	meie	mina	PRON	P	Case=Gen|Number=Plur|Person=1|PronType=Prs	6	nmod:poss	_	_
6	tibu	tibu	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	10	punct	_	_
8	et	et	SCONJ	J	_	10	mark	_	_
9	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
10	haige	haige	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Mina	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	vaatan	vaatama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	6	punct	_	_
4	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Rel	6	nsubj:cop	_	_
5	minule	mina	PRON	P	Case=All|Number=Sing|Person=1|PronType=Prs	6	nmod	_	ManualCheck=Yes
6	hea	hea	NOUN	S	Case=Nom|Number=Sing	2	ccomp	_	_
7	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	2	punct	_	_

~~~


