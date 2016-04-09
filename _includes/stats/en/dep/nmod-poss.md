

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:npmod](), [nmod:tmod]().

4442 nodes (2%) are attached to their parents as `nmod:poss`.

4441 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.62764520486267.

The following 16 pairs of parts of speech are connected with `nmod:poss`: [en-pos/NOUN]()-[en-pos/PRON]() (3612; 81% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (409; 9% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (260; 6% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (71; 2% instances), [en-pos/PROPN]()-[en-pos/PRON]() (43; 1% instances), [en-pos/ADJ]()-[en-pos/PRON]() (31; 1% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (4; 0% instances), [en-pos/VERB]()-[en-pos/PRON]() (3; 0% instances), [en-pos/SYM]()-[en-pos/PRON]() (2; 0% instances), [en-pos/DET]()-[en-pos/PRON]() (1; 0% instances), [en-pos/INTJ]()-[en-pos/INTJ]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/NUM]() (1; 0% instances), [en-pos/NUM]()-[en-pos/PRON]() (1; 0% instances), [en-pos/NUM]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/PRON]()-[en-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:poss	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	will	will	AUX	MD	VerbForm=Fin	3	aux	_	_
3	meeting	meet	VERB	VBG	VerbForm=Ger	0	root	_	_
4	Rod	Rod	PROPN	NNP	Number=Sing	6	nmod:poss	_	SpaceAfter=No
5	's	's	PART	POS	_	4	case	_	_
6	office	office	NOUN	NN	Number=Sing	3	dobj	_	_
7	EB	EB	PROPN	NNP	Number=Sing	6	list	_	SpaceAfter=No
8	4054	4054	NUM	CD	NumType=Card	7	nummod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:poss	color:blue
1	First	first	ADJ	JJ	Degree=Pos|NumType=Ord	2	amod	_	_
2	time	time	NOUN	NN	Number=Sing	12	nmod:tmod	_	_
3	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	started	start	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	2	acl:relcl	_	_
5	wearing	wear	VERB	VBG	VerbForm=Ger	4	xcomp	_	_
6	woman	woman	NOUN	NN	Number=Sing	8	nmod:poss	_	SpaceAfter=No
7	's	's	PART	POS	_	6	case	_	_
8	lingerie	lingerie	NOUN	NN	Number=Sing	5	dobj	_	_
9	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
10	was	be	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	cop	_	_
11	very	very	ADV	RB	_	12	advmod	_	_
12	young	young	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


