

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

3669 nodes (2%) are attached to their parents as `mark`.

3595 instances of `mark` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.11201962387572.

The following 35 pairs of parts of speech are connected with `mark`: [hr-pos/VERB]()-[hr-pos/SCONJ]() (2474; 67% instances), [hr-pos/ADJ]()-[hr-pos/SCONJ]() (457; 12% instances), [hr-pos/NOUN]()-[hr-pos/SCONJ]() (279; 8% instances), [hr-pos/VERB]()-[hr-pos/ADP]() (107; 3% instances), [hr-pos/AUX]()-[hr-pos/SCONJ]() (91; 2% instances), [hr-pos/VERB]()-[hr-pos/PART]() (91; 2% instances), [hr-pos/ADV]()-[hr-pos/SCONJ]() (39; 1% instances), [hr-pos/ADJ]()-[hr-pos/ADP]() (23; 1% instances), [hr-pos/ADJ]()-[hr-pos/PART]() (17; 0% instances), [hr-pos/VERB]()-[hr-pos/CCONJ]() (17; 0% instances), [hr-pos/PROPN]()-[hr-pos/SCONJ]() (14; 0% instances), [hr-pos/NOUN]()-[hr-pos/PART]() (9; 0% instances), [hr-pos/DET]()-[hr-pos/SCONJ]() (7; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (7; 0% instances), [hr-pos/PRON]()-[hr-pos/SCONJ]() (7; 0% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (3; 0% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (3; 0% instances), [hr-pos/ADJ]()-[hr-pos/CCONJ]() (2; 0% instances), [hr-pos/ADP]()-[hr-pos/SCONJ]() (2; 0% instances), [hr-pos/ADV]()-[hr-pos/PART]() (2; 0% instances), [hr-pos/AUX]()-[hr-pos/ADP]() (2; 0% instances), [hr-pos/AUX]()-[hr-pos/PART]() (2; 0% instances), [hr-pos/NOUN]()-[hr-pos/CCONJ]() (2; 0% instances), [hr-pos/ADP]()-[hr-pos/CCONJ]() (1; 0% instances), [hr-pos/ADP]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/CCONJ]() (1; 0% instances), [hr-pos/DET]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/NUM]()-[hr-pos/SCONJ]() (1; 0% instances), [hr-pos/PART]()-[hr-pos/SCONJ]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/SCONJ]()-[hr-pos/CCONJ]() (1; 0% instances), [hr-pos/SYM]()-[hr-pos/SCONJ]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 mark	color:blue
1	Dogodio	dogoditi	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	1	obj	_	_
3	i	i	CCONJ	_	_	1	conj	_	_
4	za	za	ADP	_	Case=Acc	5	case	_	_
5	očekivati	očekivati	VERB	_	VerbForm=Inf	6	xcomp	_	_
6	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	conj	_	_
7	da	da	SCONJ	_	_	9	mark	_	_
8	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	imati	imati	VERB	_	VerbForm=Inf	5	ccomp	_	_
10	dugoročnu	dugoročan	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	_
11	i	i	CCONJ	_	_	12	cc	_	_
12	poučnu	poučan	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	10	conj	_	_
13	rolu	rola	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	9	obj	_	SpaceAfter=No
14	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 mark	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Mislim	misliti	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	da	da	SCONJ	_	_	7	mark	_	_
4	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
5	to	taj	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	nsubj	_	_
6	biti	biti	AUX	_	VerbForm=Inf	7	cop	_	_
7	dovoljno	dovoljan	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	ccomp	_	SpaceAfter=No
8	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	kazao	kazati	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	2	parataxis	_	_
11	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 mark	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Ne	ne	PART	_	Polarity=Neg	3	advmod	_	_
3	mogu	moći	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	odlučno	odlučno	ADV	_	Degree=Pos	5	advmod	_	_
5	tvrditi	tvrditi	VERB	_	VerbForm=Inf	3	xcomp	_	_
6	da	da	SCONJ	_	_	9	mark	_	_
7	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	to	taj	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	nsubj	_	_
9	uzrok	uzrok	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	ccomp	_	_
10	sukoba	sukob	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	9	nmod	_	ToDo=nmod
11	unutar	unutar	ADP	_	Case=Gen	12	case	_	_
12	vlade	vlada	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


