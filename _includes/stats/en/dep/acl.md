

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

1817 nodes (1%) are attached to their parents as `acl`.

1800 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.82168409466153.

The following 20 pairs of parts of speech are connected with `acl`: [en-pos/NOUN]()-[en-pos/VERB]() (1658; 91% instances), [en-pos/PROPN]()-[en-pos/VERB]() (50; 3% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (30; 2% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (23; 1% instances), [en-pos/ADJ]()-[en-pos/VERB]() (16; 1% instances), [en-pos/NOUN]()-[en-pos/ADV]() (9; 0% instances), [en-pos/PRON]()-[en-pos/VERB]() (5; 0% instances), [en-pos/NUM]()-[en-pos/VERB]() (4; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (4; 0% instances), [en-pos/NOUN]()-[en-pos/ADP]() (3; 0% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (3; 0% instances), [en-pos/VERB]()-[en-pos/NOUN]() (3; 0% instances), [en-pos/SYM]()-[en-pos/VERB]() (2; 0% instances), [en-pos/ADP]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/ADV]()-[en-pos/VERB]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (1; 0% instances), [en-pos/PRON]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/VERB]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	Any	any	DET	DT	_	2	det	_	_
2	opinions	opinion	NOUN	NNS	Number=Plur	7	nsubj	_	_
3	expressed	express	VERB	VBN	Tense=Past|VerbForm=Part	2	acl	_	_
4	herein	herein	ADV	RB	_	3	advmod	_	_
5	are	be	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	solely	solely	ADV	RB	_	7	advmod	_	_
7	those	those	PRON	DT	Number=Plur|PronType=Dem	0	root	_	_
8	of	of	ADP	IN	_	10	case	_	_
9	the	the	DET	DT	Definite=Def|PronType=Art	10	det	_	_
10	author	author	NOUN	NN	Number=Sing	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl	color:blue
1	Umar	Umar	PROPN	NNP	Number=Sing	2	compound	_	_
2	Islam	Islam	PROPN	NNP	Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	28	28	NUM	CD	NumType=Card	2	list	_	SpaceAfter=No
5	,	,	PUNCT	,	_	2	punct	_	_
6	(	(	PUNCT	-LRB-	_	7	punct	_	SpaceAfter=No
7	born	bear	VERB	VBN	Tense=Past|VerbForm=Part	2	acl	_	_
8	Brian	Brian	PROPN	NNP	Number=Sing	9	name	_	_
9	Young	Young	PROPN	NNP	Number=Sing	7	xcomp	_	SpaceAfter=No
10	)	)	PUNCT	-RRB-	_	7	punct	_	_
11	High	High	PROPN	NNP	Number=Sing	12	compound	_	_
12	Wycombe	Wycombe	PROPN	NNP	Number=Sing	2	list	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	Original	original	ADJ	JJ	Degree=Pos	3	amod	_	_
2	Margin	margin	NOUN	NN	Number=Sing	3	compound	_	_
3	Call	call	NOUN	NN	Number=Sing	0	root	_	_
4	Margin	margin	NOUN	NN	Number=Sing	3	parataxis	_	_
5	Due	due	ADJ	JJ	Degree=Pos	4	acl	_	_
6	Today	today	NOUN	NN	Number=Sing	4	nmod:tmod	_	_

~~~


