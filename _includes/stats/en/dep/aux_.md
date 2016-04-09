

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

8093 nodes (3%) are attached to their parents as `aux`.

8066 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.71271469170888.

The following 17 pairs of parts of speech are connected with `aux`: [en-pos/VERB]()-[en-pos/AUX]() (7258; 90% instances), [en-pos/ADJ]()-[en-pos/AUX]() (410; 5% instances), [en-pos/NOUN]()-[en-pos/AUX]() (252; 3% instances), [en-pos/ADV]()-[en-pos/AUX]() (59; 1% instances), [en-pos/PROPN]()-[en-pos/AUX]() (33; 0% instances), [en-pos/ADJ]()-[en-pos/VERB]() (24; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (14; 0% instances), [en-pos/NUM]()-[en-pos/AUX]() (11; 0% instances), [en-pos/PRON]()-[en-pos/AUX]() (8; 0% instances), [en-pos/ADP]()-[en-pos/AUX]() (7; 0% instances), [en-pos/DET]()-[en-pos/AUX]() (5; 0% instances), [en-pos/VERB]()-[en-pos/ADV]() (5; 0% instances), [en-pos/AUX]()-[en-pos/AUX]() (3; 0% instances), [en-pos/ADV]()-[en-pos/ADV]() (1; 0% instances), [en-pos/PRON]()-[en-pos/VERB]() (1; 0% instances), [en-pos/SYM]()-[en-pos/AUX]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	SpaceAfter=No
2	've	have	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	moved	move	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
4	on	on	ADV	RB	_	3	advmod	_	SpaceAfter=No
5	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux	color:blue
1	the	the	DET	DT	Definite=Def|PronType=Art	3	det	_	_
2	following	follow	VERB	VBG	VerbForm=Ger	3	amod	_	_
3	weekend	weekend	NOUN	NN	Number=Sing	7	nmod:tmod	_	_
4	i	i	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
5	will	will	AUX	MD	VerbForm=Fin	7	aux	_	_
6	be	be	VERB	VB	VerbForm=Inf	7	cop	_	_
7	ready	ready	ADJ	JJ	Degree=Pos	0	root	_	_
8	to	to	PART	TO	_	9	mark	_	_
9	rock	rock	VERB	VB	VerbForm=Inf	7	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 aux	color:blue
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


