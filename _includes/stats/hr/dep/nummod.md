

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

1795 nodes (2%) are attached to their parents as `nummod`.

1729 instances of `nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31197771587744.

The following 20 pairs of parts of speech are connected with `nummod`: [hr-pos/NOUN]()-[hr-pos/NUM]() (1441; 80% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (171; 10% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (106; 6% instances), [hr-pos/PROPN]()-[hr-pos/NUM]() (13; 1% instances), [hr-pos/VERB]()-[hr-pos/NUM]() (13; 1% instances), [hr-pos/ADJ]()-[hr-pos/NUM]() (12; 1% instances), [hr-pos/PRON]()-[hr-pos/NUM]() (8; 0% instances), [hr-pos/NOUN]()-[hr-pos/PROPN]() (6; 0% instances), [hr-pos/NUM]()-[hr-pos/ADJ]() (4; 0% instances), [hr-pos/PUNCT]()-[hr-pos/NUM]() (4; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (3; 0% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (3; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADJ]() (3; 0% instances), [hr-pos/ADV]()-[hr-pos/NUM]() (2; 0% instances), [hr-pos/ADV]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/PUNCT]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/X]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Svaka	svaki	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	2	det	_	_
2	obitelj	obitelj	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	može	moći	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	dobiti	dobiti	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	do	do	ADP	_	Case=Gen	7	case	_	_
6	500	500	NUM	_	NumType=Card	7	nummod	_	_
7	eura	euro	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	4	dobj	_	_
8	pomoći	pomoć	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Prvi	prvi	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	nummod	_	_
2	predsjednik	predsjednik	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
3	skupštine	skupština	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	SZO-a	SZO	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	3	nummod	_	_
5	bio	biti	AUX	_	Gender=Masc|Number=Sing|VerbForm=Part	7	cop	_	_
6	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	7	aux	_	_
7	prof.	prof.	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
8	Andrija	Andrija	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	7	appos	_	_
9	Štampar	Štampar	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	8	name	_	_
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	Ukupni	ukupan	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	amod	_	_
2	troškovi	trošak	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	4	nsubjpass	_	_
3	projekta	projekt	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
4	procijenjeni	procijeniti	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
5	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	4	auxpass	_	_
6	na	na	ADP	_	Case=Acc	9	case	_	_
7	56,4	56,4	NUM	_	NumType=Card	8	compound	_	_
8	milijuna	milijun	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	9	nummod	_	_
9	eura	euro	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	4	nmod	_	_
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


