

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

3570 nodes (1%) are attached to their parents as `xcomp`.

3559 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.41344537815126.

The following 25 pairs of parts of speech are connected with `xcomp`: [en-pos/VERB]()-[en-pos/VERB]() (2339; 66% instances), [en-pos/VERB]()-[en-pos/ADJ]() (655; 18% instances), [en-pos/ADJ]()-[en-pos/VERB]() (236; 7% instances), [en-pos/VERB]()-[en-pos/NOUN]() (187; 5% instances), [en-pos/VERB]()-[en-pos/PROPN]() (66; 2% instances), [en-pos/VERB]()-[en-pos/ADV]() (24; 1% instances), [en-pos/VERB]()-[en-pos/PART]() (13; 0% instances), [en-pos/VERB]()-[en-pos/NUM]() (9; 0% instances), [en-pos/VERB]()-[en-pos/PRON]() (7; 0% instances), [en-pos/ADV]()-[en-pos/VERB]() (5; 0% instances), [en-pos/AUX]()-[en-pos/VERB]() (5; 0% instances), [en-pos/ADJ]()-[en-pos/PART]() (4; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (3; 0% instances), [en-pos/VERB]()-[en-pos/DET]() (3; 0% instances), [en-pos/PRON]()-[en-pos/VERB]() (2; 0% instances), [en-pos/AUX]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/VERB]() (1; 0% instances), [en-pos/NUM]()-[en-pos/VERB]() (1; 0% instances), [en-pos/PRON]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/X]() (1; 0% instances), [en-pos/SYM]()-[en-pos/VERB]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADP]() (1; 0% instances), [en-pos/VERB]()-[en-pos/AUX]() (1; 0% instances), [en-pos/VERB]()-[en-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 xcomp	color:blue
1	When	when	ADV	WRB	PronType=Int	3	mark	_	_
2	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
3	saw	see	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	11	advcl	_	_
4	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	_	_
5	cartoon	cartoon	NOUN	NN	Number=Sing	3	dobj	_	_
6	of	of	ADP	IN	_	8	case	_	_
7	their	they	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	8	nmod:poss	_	_
8	prophet	prophet	NOUN	NN	Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	,	_	11	punct	_	_
10	people	people	NOUN	NNS	Number=Plur	11	nsubj	_	_
11	had	have	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
12	to	to	PART	TO	_	13	mark	_	_
13	die	die	VERB	VB	VerbForm=Inf	11	xcomp	_	SpaceAfter=No
14	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 xcomp	color:blue
1	i	i	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	am	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	going	go	VERB	VBG	VerbForm=Ger	0	root	_	_
4	out	out	ADV	RB	_	3	advmod	_	_
5	tonight	tonight	NOUN	NN	Number=Sing	3	nmod:tmod	_	_
6	to	to	PART	TO	_	8	mark	_	_
7	get	get	VERB	VB	VerbForm=Inf	8	aux	_	_
8	wasted	wasted	ADJ	JJ	Degree=Pos	3	xcomp	_	_
9	if	if	SCONJ	IN	_	12	mark	_	_
10	anyone	anyone	NOUN	NN	Number=Sing	12	nsubj	_	_
11	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	interested	interested	ADJ	JJ	Degree=Pos	3	advcl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
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


