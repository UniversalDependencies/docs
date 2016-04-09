

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [det]().

208 nodes (0%) are attached to their parents as `det:predet`.

208 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.4375.

The following 7 pairs of parts of speech are connected with `det:predet`: [en-pos/NOUN]()-[en-pos/DET]() (191; 92% instances), [en-pos/DET]()-[en-pos/DET]() (8; 4% instances), [en-pos/ADJ]()-[en-pos/DET]() (3; 1% instances), [en-pos/NOUN]()-[en-pos/PRON]() (3; 1% instances), [en-pos/NOUN]()-[en-pos/PUNCT]() (1; 0% instances), [en-pos/NUM]()-[en-pos/DET]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 det:predet	color:blue
1	This	this	PRON	DT	Number=Sing|PronType=Dem	5	nsubj	_	_
2	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	5	det	_	_
4	best	best	ADJ	JJS	Degree=Sup	5	amod	_	_
5	solution	solution	NOUN	NN	Number=Sing	0	root	_	_
6	given	give	VERB	VBN	Tense=Past|VerbForm=Part	5	nmod	_	_
7	all	all	DET	PDT	_	9	det:predet	_	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	_	_
9	uncertainties	uncertainty	NOUN	NNS	Number=Plur	6	nsubj	_	_
10	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	_
11	face	face	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:predet	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	prefer	prefer	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	Royal	Royal	PROPN	NNP	Number=Sing	4	compound	_	_
4	Caribbean	Caribbean	PROPN	NNP	Number=Sing	2	dobj	_	_
5	out	out	ADP	IN	_	8	case	_	_
6	of	of	ADP	IN	_	8	case	_	_
7	all	all	DET	PDT	_	8	det:predet	_	_
8	these	these	DET	DT	Number=Plur|PronType=Dem	2	nmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det:predet	color:blue
1	What	what	PRON	WP	PronType=Int	3	det:predet	_	_
2	a	a	DET	DT	Definite=Ind|PronType=Art	3	det	_	_
3	group	group	NOUN	NN	Number=Sing	0	root	_	SpaceAfter=No
4	!	!	PUNCT	.	_	3	punct	_	_

~~~


