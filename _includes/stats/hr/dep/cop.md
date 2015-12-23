

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

1240 nodes (1%) are attached to their parents as `cop`.

1057 instances of `cop` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.33548387096774.

The following 11 pairs of parts of speech are connected with `cop`: [hr-pos/NOUN]()-[hr-pos/AUX]() (622; 50% instances), [hr-pos/ADJ]()-[hr-pos/AUX]() (493; 40% instances), [hr-pos/ADV]()-[hr-pos/AUX]() (60; 5% instances), [hr-pos/PRON]()-[hr-pos/AUX]() (29; 2% instances), [hr-pos/PROPN]()-[hr-pos/AUX]() (23; 2% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (5; 0% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (3; 0% instances), [hr-pos/NUM]()-[hr-pos/AUX]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/ADP]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/PART]()-[hr-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cop	color:blue
1	"	"	PUNCT	_	_	5	punct	_	_
2	Ipak	ipak	ADV	_	Degree=Pos	5	discourse	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	na	na	ADP	_	Case=Loc	5	case	_	_
5	popisu	popis	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	0	root	_	_
6	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	5	cop	_	_
7	skoro	skoro	ADV	_	Degree=Pos	8	advmod	_	_
8	40	40	NUM	_	NumType=Card	9	nummod	_	_
9	kandidata	kandidat	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	5	nsubj	_	_
10	,	,	PUNCT	_	_	5	punct	_	_
11	a	a	CONJ	_	_	5	cc	_	_
12	većina	većina	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	15	nsubj	_	_
13	ih	oni	PRON	_	Case=Gen|Number=Plur|Person=3|PronType=Prs	12	nmod	_	_
14	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	15	cop	_	_
15	novih	nov	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	5	conj	_	_
16	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Moldavci	Moldavac	PROPN	_	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
2	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	3	cop	_	_
3	umorni	umoran	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
4	i	i	CONJ	_	_	3	cc	_	_
5	zbunjeni	zbunjen	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	3	conj	_	_
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Bolje	dobro	ADV	_	Degree=Cmp	0	root	_	_
2	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	1	cop	_	_
3	zaustaviti	zaustaviti	VERB	_	VerbForm=Inf	1	csubj	_	_
4	sukobe	sukob	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	3	dobj	_	_
5	i	i	CONJ	_	_	3	cc	_	_
6	razviti	razviti	VERB	_	VerbForm=Inf	3	conj	_	_
7	poslovanje	poslovanje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	6	dobj	_	_
8	"	"	PUNCT	_	_	1	punct	_	_
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


