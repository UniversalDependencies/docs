

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

12450 nodes (5%) are attached to their parents as `dobj`.

11976 instances of `dobj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.21654618473896.

The following 31 pairs of parts of speech are connected with `dobj`: [en-pos/VERB]()-[en-pos/NOUN]() (8716; 70% instances), [en-pos/VERB]()-[en-pos/PRON]() (2317; 19% instances), [en-pos/VERB]()-[en-pos/PROPN]() (671; 5% instances), [en-pos/VERB]()-[en-pos/DET]() (300; 2% instances), [en-pos/VERB]()-[en-pos/ADJ]() (170; 1% instances), [en-pos/VERB]()-[en-pos/NUM]() (103; 1% instances), [en-pos/VERB]()-[en-pos/SYM]() (65; 1% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (20; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (20; 0% instances), [en-pos/ADJ]()-[en-pos/DET]() (11; 0% instances), [en-pos/VERB]()-[en-pos/ADV]() (11; 0% instances), [en-pos/ADJ]()-[en-pos/PRON]() (10; 0% instances), [en-pos/VERB]()-[en-pos/X]() (9; 0% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (4; 0% instances), [en-pos/VERB]()-[en-pos/INTJ]() (3; 0% instances), [en-pos/ADV]()-[en-pos/ADV]() (2; 0% instances), [en-pos/ADV]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/AUX]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/SCONJ]()-[en-pos/PRON]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/NUM]() (1; 0% instances), [en-pos/ADP]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/AUX]()-[en-pos/DET]() (1; 0% instances), [en-pos/AUX]()-[en-pos/PRON]() (1; 0% instances), [en-pos/AUX]()-[en-pos/VERB]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/DET]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (1; 0% instances), [en-pos/NUM]()-[en-pos/ADV]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/SYM]()-[en-pos/NUM]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 dobj	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dobj	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	3	nsubj	_	SpaceAfter=No
2	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	overstating	overstate	VERB	VBG	VerbForm=Ger	7	ccomp	_	_
4	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	dobj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	know	know	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 dobj	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	want	want	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	to	to	PART	TO	_	4	mark	_	_
4	use	use	VERB	VB	VerbForm=Inf	2	xcomp	_	_
5	this	this	DET	DT	Number=Sing|PronType=Dem	6	det	_	_
6	opportunity	opportunity	NOUN	NN	Number=Sing	4	dobj	_	_
7	to	to	PART	TO	_	8	mark	_	_
8	welcome	welcome	VERB	VB	VerbForm=Inf	4	xcomp	_	_
9	Brian	Brian	PROPN	NNP	Number=Sing	10	name	_	_
10	Ryner	Ryner	PROPN	NNP	Number=Sing	8	dobj	_	_
11	to	to	ADP	IN	_	12	case	_	_
12	Google	Google	PROPN	NNP	Number=Sing	8	nmod	_	SpaceAfter=No
13	!	!	PUNCT	.	_	2	punct	_	_

~~~


