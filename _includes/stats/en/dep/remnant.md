

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

96 nodes (0%) are attached to their parents as `remnant`.

96 instances of `remnant` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.82291666666667.

The following 23 pairs of parts of speech are connected with `remnant`: [en-pos/NOUN]()-[en-pos/NOUN]() (35; 36% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (10; 10% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (9; 9% instances), [en-pos/ADV]()-[en-pos/ADV]() (7; 7% instances), [en-pos/NUM]()-[en-pos/NUM]() (6; 6% instances), [en-pos/VERB]()-[en-pos/VERB]() (5; 5% instances), [en-pos/DET]()-[en-pos/NOUN]() (3; 3% instances), [en-pos/VERB]()-[en-pos/NOUN]() (3; 3% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (2; 2% instances), [en-pos/NOUN]()-[en-pos/NUM]() (2; 2% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (2; 2% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (1; 1% instances), [en-pos/ADJ]()-[en-pos/VERB]() (1; 1% instances), [en-pos/ADJ]()-[en-pos/X]() (1; 1% instances), [en-pos/ADV]()-[en-pos/PROPN]() (1; 1% instances), [en-pos/NOUN]()-[en-pos/ADV]() (1; 1% instances), [en-pos/NOUN]()-[en-pos/VERB]() (1; 1% instances), [en-pos/NUM]()-[en-pos/DET]() (1; 1% instances), [en-pos/PART]()-[en-pos/ADV]() (1; 1% instances), [en-pos/PRON]()-[en-pos/ADJ]() (1; 1% instances), [en-pos/PRON]()-[en-pos/PRON]() (1; 1% instances), [en-pos/PUNCT]()-[en-pos/CONJ]() (1; 1% instances), [en-pos/VERB]()-[en-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 remnant	color:blue
1	Birds	bird	NOUN	NNS	Number=Plur	2	nsubj	_	_
2	eat	eat	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	and	and	CONJ	CC	_	2	cc	_	_
4	sleep	sleep	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	2	conj	_	_
5	with	with	ADP	IN	_	7	case	_	_
6	their	they	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	7	nmod:poss	_	_
7	flock	flock	NOUN	NN	Number=Sing	2	nmod	_	SpaceAfter=No
8	,	,	PUNCT	,	_	7	punct	_	_
9	not	not	ADV	RB	_	10	neg	_	_
10	predators	predator	NOUN	NNS	Number=Plur	7	remnant	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 remnant	color:blue
1	Four	four	NUM	CD	NumType=Card	6	nsubj	_	_
2	of	of	ADP	IN	_	3	case	_	_
3	these	these	PRON	DT	Number=Plur|PronType=Dem	1	nmod	_	_
4	were	be	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	6	cop	_	_
5	under	under	ADP	IN	_	6	case	_	_
6	Clinton	Clinton	PROPN	NNP	Number=Sing	0	root	_	_
7	and	and	CONJ	CC	_	6	cc	_	_
8	6	6	NUM	CD	NumType=Card	1	remnant	_	_
9	under	under	ADP	IN	_	10	case	_	_
10	Bush	Bush	PROPN	NNP	Number=Sing	6	remnant	_	SpaceAfter=No
11	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 remnant	color:blue
1	But	but	CONJ	CC	_	3	cc	_	_
2	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	found	find	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	_	_
5	location	location	NOUN	NN	Number=Sing	3	dobj	_	_
6	wonderful	wonderful	ADJ	JJ	Degree=Pos	3	xcomp	_	_
7	and	and	CONJ	CC	_	6	cc	_	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	_	_
9	neighbors	neighbor	NOUN	NNS	Number=Plur	5	remnant	_	_
10	very	very	ADV	RB	_	11	advmod	_	_
11	kind	kind	ADJ	JJ	Degree=Pos	6	remnant	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


