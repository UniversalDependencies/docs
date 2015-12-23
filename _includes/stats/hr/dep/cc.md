

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

2709 nodes (3%) are attached to their parents as `cc`.

2696 instances of `cc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.16943521594684.

The following 30 pairs of parts of speech are connected with `cc`: [hr-pos/NOUN]()-[hr-pos/CONJ]() (1141; 42% instances), [hr-pos/VERB]()-[hr-pos/CONJ]() (561; 21% instances), [hr-pos/PROPN]()-[hr-pos/CONJ]() (373; 14% instances), [hr-pos/ADJ]()-[hr-pos/CONJ]() (331; 12% instances), [hr-pos/VERB]()-[hr-pos/SCONJ]() (83; 3% instances), [hr-pos/NOUN]()-[hr-pos/SCONJ]() (46; 2% instances), [hr-pos/ADV]()-[hr-pos/CONJ]() (30; 1% instances), [hr-pos/NUM]()-[hr-pos/CONJ]() (28; 1% instances), [hr-pos/ADJ]()-[hr-pos/SCONJ]() (23; 1% instances), [hr-pos/PRON]()-[hr-pos/CONJ]() (16; 1% instances), [hr-pos/NUM]()-[hr-pos/PUNCT]() (13; 0% instances), [hr-pos/AUX]()-[hr-pos/CONJ]() (11; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (9; 0% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (7; 0% instances), [hr-pos/X]()-[hr-pos/CONJ]() (7; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (6; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADV]() (4; 0% instances), [hr-pos/PROPN]()-[hr-pos/PUNCT]() (4; 0% instances), [hr-pos/ADV]()-[hr-pos/SCONJ]() (3; 0% instances), [hr-pos/NUM]()-[hr-pos/ADP]() (2; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADP]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/PUNCT]() (1; 0% instances), [hr-pos/ADP]()-[hr-pos/CONJ]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/PUNCT]() (1; 0% instances), [hr-pos/PART]()-[hr-pos/CONJ]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/SCONJ]() (1; 0% instances), [hr-pos/X]()-[hr-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 cc	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 cc	color:blue
1	Komisija	komisija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	će	htjeti	AUX	_	Number=Sing|Person=3|Tense=Pres	3	aux	_	_
3	pregledati	pregledati	VERB	_	VerbForm=Inf	0	root	_	_
4	ponude	ponuda	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	3	dobj	_	_
5	i	i	CONJ	_	_	3	cc	_	_
6	objaviti	objaviti	VERB	_	VerbForm=Inf	3	conj	_	_
7	pobjednika	pobjednik	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	6	dobj	_	_
8	u	u	ADP	_	Case=Loc	9	case	_	_
9	listopadu	listopad	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	6	nmod	_	_
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cc	color:blue
1	"	"	PUNCT	_	_	5	punct	_	_
2	"	"	PUNCT	_	_	5	punct	_	_
3	Mi	mi	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
4	smo	biti	AUX	_	Number=Plur|Person=1|Tense=Pres	5	cop	_	_
5	Christina	Christina	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
6	i	i	CONJ	_	_	5	cc	_	_
7	Seth	Seth	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	conj	_	_
8	iz	iz	ADP	_	Case=Gen	9	case	_	_
9	New	New	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
10	York	York	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	9	name	_	_
11	Cityja	City	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	9	name	_	_
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


