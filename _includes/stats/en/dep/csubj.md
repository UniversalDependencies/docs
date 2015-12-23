

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

340 nodes (0%) are attached to their parents as `csubj`.

211 instances of `csubj` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.21764705882353.

The following 15 pairs of parts of speech are connected with `csubj`: [en-pos/ADJ]()-[en-pos/VERB]() (150; 44% instances), [en-pos/VERB]()-[en-pos/VERB]() (109; 32% instances), [en-pos/NOUN]()-[en-pos/VERB]() (55; 16% instances), [en-pos/VERB]()-[en-pos/ADJ]() (8; 2% instances), [en-pos/VERB]()-[en-pos/NOUN]() (3; 1% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (2; 1% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (2; 1% instances), [en-pos/ADV]()-[en-pos/VERB]() (2; 1% instances), [en-pos/VERB]()-[en-pos/PRON]() (2; 1% instances), [en-pos/VERB]()-[en-pos/PROPN]() (2; 1% instances), [en-pos/ADJ]()-[en-pos/ADP]() (1; 0% instances), [en-pos/NUM]()-[en-pos/VERB]() (1; 0% instances), [en-pos/PART]()-[en-pos/VERB]() (1; 0% instances), [en-pos/PRON]()-[en-pos/VERB]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Great	great	ADJ	JJ	Degree=Pos	0	root	_	_
2	to	to	PART	TO	_	3	mark	_	_
3	have	have	VERB	VB	VerbForm=Inf	1	csubj	_	_
4	you	you	PRON	PRP	Case=Acc|Person=2|PronType=Prs	3	dobj	_	_
5	on	on	ADP	IN	_	6	case	_	_
6	board	board	NOUN	NN	Number=Sing	3	nmod	_	SpaceAfter=No
7	!	!	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 csubj	color:blue
1	how	how	ADV	WRB	PronType=Int	2	advmod	_	_
2	much	much	ADJ	JJ	Degree=Pos	5	dobj	_	_
3	does	do	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
5	cost	cost	VERB	VB	VerbForm=Inf	0	root	_	_
6	to	to	PART	TO	_	7	mark	_	_
7	join	join	VERB	VB	VerbForm=Inf	5	csubj	_	_
8	world	world	PROPN	NNP	Number=Sing	10	compound	_	_
9	resorts	resorts	PROPN	NNPS	Number=Plur	10	compound	_	_
10	international	international	PROPN	NNP	Number=Sing	7	dobj	_	SpaceAfter=No
11	?	?	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 csubj	color:blue
1	Heather	Heather	PROPN	NNP	Number=Sing	2	nsubj	_	_
2	moving	move	VERB	VBG	VerbForm=Ger	8	csubj	_	_
3	in	in	ADV	RB	_	2	advmod	_	_
4	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
5	been	be	VERB	VBN	Tense=Past|VerbForm=Part	8	cop	_	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	_	_
7	different	different	ADJ	JJ	Degree=Pos	8	amod	_	_
8	story	story	NOUN	NN	Number=Sing	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


