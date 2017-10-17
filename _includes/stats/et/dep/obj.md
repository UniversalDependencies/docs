

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

1827 nodes (5%) are attached to their parents as `obj`.

1160 instances of `obj` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.14668856048166.

The following 11 pairs of parts of speech are connected with `obj`: [et-pos/VERB]()-[et-pos/NOUN]() (1322; 72% instances), [et-pos/VERB]()-[et-pos/PRON]() (397; 22% instances), [et-pos/VERB]()-[et-pos/PROPN]() (68; 4% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (26; 1% instances), [et-pos/VERB]()-[et-pos/ADJ]() (4; 0% instances), [et-pos/VERB]()-[et-pos/NUM]() (4; 0% instances), [et-pos/ADJ]()-[et-pos/PROPN]() (2; 0% instances), [et-pos/ADJ]()-[et-pos/PRON]() (1; 0% instances), [et-pos/ADV]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/PRON]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 obj	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obj	color:blue
1	Kurat	kurat	INTJ	I	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	5	punct	_	_
3	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int	5	obj	_	_
4	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	teen	tegema	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	SpaceAfter=No
6	,	,	PUNCT	Z	_	7	punct	_	_
7	mõtles	mõtlema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
9	jahmunult	jahmunult	ADV	D	_	7	advmod	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 obj	color:blue
1	Just	just	ADV	D	_	2	advmod	_	_
2	praegu	praegu	ADV	D	_	3	advmod	_	_
3	leidis	leidma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	üks	üks	DET	P	Case=Nom|Number=Sing|PronType=Ind	6	det	_	_
5	võõras	võõras	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	_	_
6	rüütel	rüütel	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	_
7	Püha	püha	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	8	amod	_	_
8	Graali	Graal	PROPN	S	Case=Gen|Number=Sing	3	obj	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	3	punct	_	_

~~~


