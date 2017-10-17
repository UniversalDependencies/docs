

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

6282 nodes (18%) are attached to their parents as `punct`.

3988 instances of `punct` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.6007640878701.

The following 11 pairs of parts of speech are connected with `punct`: [et-pos/VERB]()-[et-pos/PUNCT]() (4619; 74% instances), [et-pos/NOUN]()-[et-pos/PUNCT]() (679; 11% instances), [et-pos/ADJ]()-[et-pos/PUNCT]() (373; 6% instances), [et-pos/ADV]()-[et-pos/PUNCT]() (176; 3% instances), [et-pos/PROPN]()-[et-pos/PUNCT]() (162; 3% instances), [et-pos/PRON]()-[et-pos/PUNCT]() (131; 2% instances), [et-pos/NUM]()-[et-pos/PUNCT]() (69; 1% instances), [et-pos/AUX]()-[et-pos/PUNCT]() (53; 1% instances), [et-pos/ADP]()-[et-pos/PUNCT]() (10; 0% instances), [et-pos/INTJ]()-[et-pos/PUNCT]() (9; 0% instances), [et-pos/X]()-[et-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 punct	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 punct	color:blue
1	Kas	kas	ADV	D	_	7	advmod	_	_
2	jälle	jälle	ADV	D	_	7	advmod	_	_
3	üks	üks	DET	P	Case=Nom|Number=Sing|PronType=Ind	7	det	_	_
4	uus	uus	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
5	ja	ja	CCONJ	J	_	6	cc	_	_
6	tundmatu	tundmatu	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	conj	_	_
7	põlvkond	põlvkond	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
8	...	...	PUNCT	Z	_	7	punct	_	SpaceAfter=No
9	?	?	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 punct	color:blue
1	Noormees	noor_mees	NOUN	S	Case=Nom|Number=Sing	5	vocative	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	5	punct	_	_
3	te	sina	PRON	P	Case=Nom|Number=Plur|Person=2|PronType=Prs	5	nsubj:cop	_	_
4	olete	olema	AUX	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	tugev	tugev	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
6	ja	ja	CCONJ	J	_	7	cc	_	_
7	julge	julge	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	Z	_	9	punct	_	_
9	tapke	tapma	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
10	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
11	ära	ära	ADV	D	_	9	compound:prt	_	SpaceAfter=No
12	!	!	PUNCT	Z	_	5	punct	_	_

~~~


