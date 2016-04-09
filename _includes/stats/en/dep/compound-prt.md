

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [compound]().

910 nodes (0%) are attached to their parents as `compound:prt`.

910 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33076923076923.

The following 6 pairs of parts of speech are connected with `compound:prt`: [en-pos/VERB]()-[en-pos/ADP]() (888; 98% instances), [en-pos/VERB]()-[en-pos/ADV]() (17; 2% instances), [en-pos/ADJ]()-[en-pos/ADP]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/ADV]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	SpaceAfter=No
2	've	have	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	grown	grow	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
4	up	up	ADP	RP	_	3	compound:prt	_	SpaceAfter=No
5	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	Jacques	Jacques	PROPN	NNP	Number=Sing	3	nsubj	_	_
2	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	ready	ready	ADJ	JJ	Degree=Pos	0	root	_	_
4	to	to	PART	TO	_	5	mark	_	_
5	drop	drop	VERB	VB	VerbForm=Inf	3	xcomp	_	_
6	in	in	ADV	RP	_	5	compound:prt	_	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	_	_
8	dollar	dollar	NOUN	NN	Number=Sing	9	compound	_	_
9	amount	amount	NOUN	NN	Number=Sing	5	dobj	_	_
10	on	on	ADP	IN	_	12	case	_	_
11	the	the	DET	DT	Definite=Def|PronType=Art	12	det	_	_
12	release	release	NOUN	NN	Number=Sing	5	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 compound:prt	color:blue
1	Run	run	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	_
2	for	for	ADP	IN	_	4	case	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
4	hills	hill	NOUN	NNS	Number=Plur	1	nmod	_	_
5	...	...	PUNCT	,	_	1	punct	_	_
6	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	10	nsubj	_	SpaceAfter=No
7	'll	will	AUX	MD	VerbForm=Fin	10	aux	_	_
8	be	be	VERB	VB	VerbForm=Inf	10	cop	_	_
9	much	much	ADV	RB	_	10	advmod	_	_
10	better	better	ADJ	JJR	Degree=Cmp	1	parataxis	_	_
11	off	off	ADP	RP	_	10	compound:prt	_	SpaceAfter=No
12	!	!	PUNCT	.	_	1	punct	_	_

~~~


