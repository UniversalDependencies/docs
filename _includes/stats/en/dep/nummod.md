

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

3092 nodes (1%) are attached to their parents as `nummod`.

2147 instances of `nummod` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49676584734799.

The following 26 pairs of parts of speech are connected with `nummod`: [en-pos/NOUN]()-[en-pos/NUM]() (1966; 64% instances), [en-pos/PROPN]()-[en-pos/NUM]() (531; 17% instances), [en-pos/SYM]()-[en-pos/NUM]() (301; 10% instances), [en-pos/NUM]()-[en-pos/NUM]() (91; 3% instances), [en-pos/VERB]()-[en-pos/X]() (56; 2% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (34; 1% instances), [en-pos/PUNCT]()-[en-pos/X]() (32; 1% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (16; 1% instances), [en-pos/ADJ]()-[en-pos/X]() (13; 0% instances), [en-pos/NOUN]()-[en-pos/X]() (11; 0% instances), [en-pos/NOUN]()-[en-pos/DET]() (8; 0% instances), [en-pos/NOUN]()-[en-pos/ADV]() (6; 0% instances), [en-pos/PROPN]()-[en-pos/X]() (6; 0% instances), [en-pos/ADJ]()-[en-pos/NUM]() (4; 0% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (4; 0% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (2; 0% instances), [en-pos/X]()-[en-pos/X]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/ADV]()-[en-pos/X]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/SYM]() (1; 0% instances), [en-pos/NUM]()-[en-pos/ADV]() (1; 0% instances), [en-pos/PRON]()-[en-pos/NUM]() (1; 0% instances), [en-pos/SYM]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/SYM]()-[en-pos/SYM]() (1; 0% instances), [en-pos/VERB]()-[en-pos/NUM]() (1; 0% instances), [en-pos/X]()-[en-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Four	four	NUM	CD	NumType=Card	2	nummod	_	_
2	months	month	NOUN	NNS	Number=Plur	3	nmod:npmod	_	_
3	later	later	ADV	RB	_	7	advmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	_	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubjpass	_	_
6	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	7	auxpass	_	_
7	married	marry	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nummod	color:blue
1	Darin	Darin	PROPN	NNP	Number=Sing	2	name	_	_
2	Fisher	Fisher	PROPN	NNP	Number=Sing	3	nsubj	_	_
3	wrote	write	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	this	this	DET	DT	Number=Sing|PronType=Dem	5	det	_	_
5	response	response	NOUN	NN	Number=Sing	3	dobj	_	_
6	on	on	ADP	IN	_	7	case	_	_
7	January	January	PROPN	NNP	Number=Sing	3	nmod	_	_
8	25	25	NUM	CD	NumType=Card	7	nummod	_	SpaceAfter=No
9	,	,	PUNCT	,	_	7	punct	_	_
10	2005	2005	NUM	CD	NumType=Card	7	nummod	_	SpaceAfter=No
11	:	:	PUNCT	:	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	$	$	SYM	$	_	0	root	_	SpaceAfter=No
2	5250	5250	NUM	CD	NumType=Card	1	nummod	_	_
3	Deposited	deposit	VERB	VBN	Tense=Past|VerbForm=Part	1	advcl	_	_
4	Directly	directly	ADV	RB	_	3	advmod	_	_
5	to	to	ADP	IN	_	8	case	_	_
6	your	you	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	8	nmod:poss	_	_
7	PayPal	PayPal	PROPN	NNP	Number=Sing	8	compound	_	_
8	account	account	NOUN	NN	Number=Sing	3	nmod	_	SpaceAfter=No
9	!	!	PUNCT	.	_	1	punct	_	_

~~~


