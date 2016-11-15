

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

5037 nodes (4%) are attached to their parents as `cc`.

4964 instances of `cc` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.21500893388922.

The following 40 pairs of parts of speech are connected with `cc`: [hr-pos/NOUN]()-[hr-pos/CONJ]() (2080; 41% instances), [hr-pos/VERB]()-[hr-pos/CONJ]() (1236; 25% instances), [hr-pos/ADJ]()-[hr-pos/CONJ]() (637; 13% instances), [hr-pos/PROPN]()-[hr-pos/CONJ]() (531; 11% instances), [hr-pos/VERB]()-[hr-pos/SCONJ]() (101; 2% instances), [hr-pos/ADV]()-[hr-pos/CONJ]() (82; 2% instances), [hr-pos/NOUN]()-[hr-pos/SCONJ]() (64; 1% instances), [hr-pos/NUM]()-[hr-pos/CONJ]() (60; 1% instances), [hr-pos/PRON]()-[hr-pos/CONJ]() (35; 1% instances), [hr-pos/AUX]()-[hr-pos/CONJ]() (32; 1% instances), [hr-pos/ADJ]()-[hr-pos/SCONJ]() (29; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (25; 0% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (18; 0% instances), [hr-pos/NUM]()-[hr-pos/PUNCT]() (15; 0% instances), [hr-pos/ADP]()-[hr-pos/CONJ]() (12; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (12; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADV]() (10; 0% instances), [hr-pos/NOUN]()-[hr-pos/PUNCT]() (10; 0% instances), [hr-pos/X]()-[hr-pos/CONJ]() (7; 0% instances), [hr-pos/PROPN]()-[hr-pos/PUNCT]() (5; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADP]() (4; 0% instances), [hr-pos/ADV]()-[hr-pos/SCONJ]() (3; 0% instances), [hr-pos/AUX]()-[hr-pos/ADV]() (3; 0% instances), [hr-pos/NOUN]()-[hr-pos/PART]() (3; 0% instances), [hr-pos/ADJ]()-[hr-pos/PUNCT]() (2; 0% instances), [hr-pos/NUM]()-[hr-pos/ADP]() (2; 0% instances), [hr-pos/PRON]()-[hr-pos/SCONJ]() (2; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADV]() (2; 0% instances), [hr-pos/PROPN]()-[hr-pos/SCONJ]() (2; 0% instances), [hr-pos/SCONJ]()-[hr-pos/CONJ]() (2; 0% instances), [hr-pos/VERB]()-[hr-pos/PUNCT]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/ADP]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/PART]()-[hr-pos/CONJ]() (1; 0% instances), [hr-pos/PRON]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/X]()-[hr-pos/SCONJ]() (1; 0% instances).


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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
1	Moldavci	Moldavac	PROPN	_	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
2	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	3	cop	_	_
3	umorni	umoran	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
4	i	i	CONJ	_	_	3	cc	_	_
5	zbunjeni	zbunjen	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	3	conj	_	_
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


