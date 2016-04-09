

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.

1426 nodes (0%) are attached to their parents as `xcomp`.

1423 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.69284712482468.

The following 18 pairs of parts of speech are connected with `xcomp`: [es-pos/VERB]()-[es-pos/VERB]() (994; 70% instances), [es-pos/VERB]()-[es-pos/ADJ]() (317; 22% instances), [es-pos/VERB]()-[es-pos/NOUN]() (61; 4% instances), [es-pos/VERB]()-[es-pos/PROPN]() (22; 2% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (7; 0% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (4; 0% instances), [es-pos/VERB]()-[es-pos/PRON]() (4; 0% instances), [es-pos/ADJ]()-[es-pos/VERB]() (3; 0% instances), [es-pos/ADP]()-[es-pos/VERB]() (3; 0% instances), [es-pos/AUX]()-[es-pos/VERB]() (3; 0% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/VERB]() (1; 0% instances), [es-pos/PRON]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/PRON]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/VERB]() (1; 0% instances), [es-pos/VERB]()-[es-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
1	Esto	este	PRON	_	Number=Sing|PronType=Dem	2	nsubj	_	_
2	permitió	permitir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	a	a	ADP	_	_	4	case	_	_
4	Smart	smart	PROPN	_	_	2	iobj	_	_
5	asistir	asistir	VERB	_	VerbForm=Inf	2	xcomp	_	_
6	a	a	ADP	_	_	8	case	_	_
7	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Pembroke	pembroke	PROPN	_	_	5	nmod	_	_
9	College	college	PROPN	_	_	8	name	_	_
10	de	de	ADP	_	_	11	case	_	_
11	Cambridge	cambridge	PROPN	_	_	8	nmod	_	_
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 xcomp	color:blue
1	Gracias	gracia	NOUN	_	Gender=Fem|Number=Plur	0	root	_	_
2	Lupe	lupe	PROPN	_	_	1	dep	_	_
3	y	y	CONJ	_	_	2	cc	_	_
4	Ana	ana	PROPN	_	_	2	conj	_	_
5	por	por	ADP	_	_	6	mark	_	_
6	hacer	hacer	VERB	_	VerbForm=Inf	1	advcl	_	_
7	me	yo	PRON	_	Case=Acc,Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	6	iobj	_	_
8	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	vida	vida	NOUN	_	Gender=Fem|Number=Sing	6	dobj	_	_
10	más	más	ADV	_	Degree=Cmp	11	advmod	_	_
11	fácil	fácil	ADJ	_	Number=Sing	6	xcomp	_	_
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Pueden	pueden	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	ser	ser	VERB	_	VerbForm=Inf	3	cop	_	_
3	unicelulares	unicelular	NOUN	_	Gender=Masc|Number=Plur|VerbForm=Part	1	xcomp	_	_
4	y	y	CONJ	_	_	3	cc	_	_
5	talófitos	talófito	NOUN	_	Gender=Masc|Number=Plur	3	conj	_	_
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


