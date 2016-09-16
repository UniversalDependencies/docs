

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

6 nodes (0%) are attached to their parents as `dep`.

3 instances of `dep` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 5 pairs of parts of speech are connected with `dep`: [hr-pos/ADJ]()-[hr-pos/PRON]() (2; 33% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (1; 17% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (1; 17% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (1; 17% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (1; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 dep	color:blue
1	Toliko	toliko	ADV	_	Degree=Pos	4	advmod	_	_
2	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	4	aux	_	_
3	bio	biti	AUX	_	Gender=Masc|Number=Sing|VerbForm=Part	4	cop	_	_
4	jak	jak	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
5	njegov	njegov	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|Poss=Yes	4	dep	_	_
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 dep	color:blue
1	Okvirni	okviran	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	zakon	zakon	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	provodit	provoditi	VERB	_	VerbForm=Inf	0	root	_	_
4	će	htjeti	AUX	_	Number=Sing|Person=3|Tense=Pres	3	aux	_	_
5	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	3	compound	_	_
6	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	3	dep	_	_
7	u	u	ADP	_	Case=Loc	8	case	_	_
8	fazama	faza	NOUN	_	Case=Loc|Gender=Fem|Number=Plur	3	nmod	_	_
9	,	,	PUNCT	_	_	10	punct	_	_
10	kaže	kazati	VERB	_	Number=Sing|Person=3|Tense=Pres	3	parataxis	_	_
11	Diamantopoulou	Diamantopoulou	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	_
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 dep	color:blue
1	Dužnosnici	dužnosnik	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
2	UNMIK-a	UNMIK	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	održali	održati	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
4	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	3	aux	_	_
5	tijekom	tijekom	ADP	_	Case=Gen	6	case	_	_
6	vikenda	vikend	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
7	razgovore	razgovor	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	3	dobj	_	_
8	s	s	ADP	_	Case=Ins	9	case	_	_
9	prosvjednicima	prosvjednik	NOUN	_	Case=Ins|Gender=Masc|Number=Plur	3	nmod	_	_
10	u	u	ADP	_	Case=Loc	11	case	_	_
11	pokušaju	pokušaj	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	3	nmod	_	_
12	uvjeriti	uvjeriti	VERB	_	VerbForm=Inf	11	dep	_	_
13	ih	oni	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	12	dobj	_	_
14	da	da	SCONJ	_	_	15	mark	_	_
15	napuste	napustiti	VERB	_	Number=Plur|Person=3|Tense=Pres	12	ccomp	_	_
16	zgradu	zgrada	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	15	dobj	_	_
17	,	,	PUNCT	_	_	22	punct	_	_
18	ali	ali	SCONJ	_	_	15	cc	_	_
19	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	22	aux	_	_
20	prosvjednici	prosvjednik	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	22	nsubj	_	_
21	to	taj	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	22	dobj	_	_
22	odbili	odbiti	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	15	conj	_	_
23	.	.	PUNCT	_	_	3	punct	_	_

~~~


