

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

731 nodes (0%) are attached to their parents as `expl`.

658 instances of `expl` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51025991792066.

The following 7 pairs of parts of speech are connected with `expl`: [en-pos/VERB]()-[en-pos/PRON]() (550; 75% instances), [en-pos/ADJ]()-[en-pos/PRON]() (134; 18% instances), [en-pos/NOUN]()-[en-pos/PRON]() (34; 5% instances), [en-pos/VERB]()-[en-pos/ADV]() (6; 1% instances), [en-pos/PROPN]()-[en-pos/PRON]() (4; 1% instances), [en-pos/AUX]()-[en-pos/PRON]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl	color:blue
1	Read	read	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	_
2	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
3	entire	entire	ADJ	JJ	Degree=Pos	4	amod	_	_
4	article	article	NOUN	NN	Number=Sing	1	dobj	_	SpaceAfter=No
5	;	;	PUNCT	,	_	1	punct	_	_
6	there	there	PRON	EX	_	7	expl	_	SpaceAfter=No
7	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	_	_
9	punchline	punchline	NOUN	NN	Number=Sing	7	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	7	punct	_	_
11	too	too	ADV	RB	_	7	advmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	true	true	ADJ	JJ	Degree=Pos	0	root	_	_
4	that	that	SCONJ	IN	_	10	mark	_	_
5	Google	Google	PROPN	NNP	Number=Sing	10	nsubj	_	_
6	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
7	been	be	VERB	VBN	Tense=Past|VerbForm=Part	10	cop	_	_
8	in	in	ADP	IN	_	10	case	_	_
9	acquisition	acquisition	NOUN	NN	Number=Sing	10	compound	_	_
10	mode	mode	NOUN	NN	Number=Sing	3	csubj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 expl	color:blue
1	There	there	PRON	EX	_	7	expl	_	_
2	must	must	AUX	MD	VerbForm=Fin	7	aux	_	_
3	be	be	VERB	VB	VerbForm=Inf	7	cop	_	_
4	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	_	_
5	better	better	ADJ	JJR	Degree=Cmp	7	amod	_	_
6	mexican	mexican	ADJ	JJ	Degree=Pos	7	amod	_	_
7	place	place	NOUN	NN	Number=Sing	0	root	_	_
8	in	in	ADP	IN	_	9	case	_	_
9	Rockland	Rockland	PROPN	NNP	Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	_	_

~~~


