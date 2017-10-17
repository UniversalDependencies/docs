

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

840 nodes (2%) are attached to their parents as `aux`.

801 instances of `aux` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.12738095238095.

The following 7 pairs of parts of speech are connected with `aux`: [et-pos/VERB]()-[et-pos/AUX]() (797; 95% instances), [et-pos/ADJ]()-[et-pos/AUX]() (23; 3% instances), [et-pos/NOUN]()-[et-pos/AUX]() (7; 1% instances), [et-pos/PRON]()-[et-pos/AUX]() (6; 1% instances), [et-pos/ADV]()-[et-pos/AUX]() (4; 0% instances), [et-pos/PROPN]()-[et-pos/AUX]() (2; 0% instances), [et-pos/AUX]()-[et-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Muidugi	muidugi	ADV	D	_	4	advmod	_	_
2	poleks	olema	AUX	V	Mood=Cnd|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	keegi	keegi	PRON	P	Case=Nom|Number=Sing|PronType=Ind	4	nsubj	_	_
4	osanud	oskama	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	teda	tema	PRON	P	Case=Par|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
6	sealt	sealt	ADV	D	_	7	advmod	_	_
7	otsida	otsima	VERB	V	VerbForm=Inf	4	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	"	"	PUNCT	Z	_	7	punct	_	SpaceAfter=No
2	Detsembrikuu	detsembri_kuu	NOUN	S	Case=Gen|Number=Sing	3	nmod	_	_
3	mängudegraafik	mängu+de_graafik	NOUN	S	Case=Nom|Number=Sing	7	nsubj:cop	_	_
4	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
5	olnud	olema	AUX	V	Tense=Past|VerbForm=Part|Voice=Act	7	cop	_	_
6	väga	väga	ADV	D	_	7	advmod	_	_
7	tihe	tihe	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	"	"	PUNCT	Z	_	7	punct	_	SpaceAfter=No
2	Terve	terve	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	3	amod	_	_
3	igaviku	igavik	NOUN	S	Case=Gen|Number=Sing	7	obl	_	_
4	olen	olema	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
5	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj:cop	_	_
6	olnud	olema	AUX	V	Tense=Past|VerbForm=Part|Voice=Act	7	cop	_	_
7	teel	tee	NOUN	S	Case=Ade|Number=Sing	0	root	_	SpaceAfter=No
8	!	!	PUNCT	Z	_	7	punct	_	SpaceAfter=No
9	"	"	PUNCT	Z	_	7	punct	_	_
10	karjus	karjuma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	parataxis	_	_
11	sir	sir	NOUN	S	Case=Nom|Number=Sing	12	nmod	_	_
12	Parcival	Parcival	PROPN	S	Case=Nom|Number=Sing	10	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	Z	_	7	punct	_	_

~~~


