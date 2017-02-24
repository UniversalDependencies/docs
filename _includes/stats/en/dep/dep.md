

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

10 nodes (0%) are attached to their parents as `dep`.

8 instances of `dep` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.2.

The following 7 pairs of parts of speech are connected with `dep`: [en-pos/NOUN]()-[en-pos/X]() (2; 20% instances), [en-pos/PUNCT]()-[en-pos/NOUN]() (2; 20% instances), [en-pos/PUNCT]()-[en-pos/PUNCT]() (2; 20% instances), [en-pos/NOUN]()-[en-pos/ADP]() (1; 10% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (1; 10% instances), [en-pos/VERB]()-[en-pos/ADV]() (1; 10% instances), [en-pos/VERB]()-[en-pos/VERB]() (1; 10% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	---------------------------------------------------------------------------	---------------------------------------------------------------------------	PUNCT	NFP	_	2	dep	_	_
2	-----	-----	PUNCT	NFP	_	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 dep	color:blue
1	Category	category	NOUN	NN	Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	:	_	1	punct	_	_
3	Science	science	NOUN	NN	Number=Sing	1	appos	_	_
4	>	>	PUNCT	,	_	3	punct	_	_
5	Astronomy	astronomy	NOUN	NN	Number=Sing	4	dep	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 dep	color:blue
1	Price	price	NOUN	NN	Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	:	_	1	punct	_	SpaceAfter=No
3	3,40	3,40	NUM	CD	NumType=Card	4	nummod	_	_
4	Euros	euro	NOUN	NNS	Number=Plur	1	appos	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	5	5	NUM	CD	NumType=Card	7	nummod	_	_
7	Euros	euro	NOUN	NNS	Number=Plur	4	conj	_	_
8	or	or	CCONJ	CC	_	10	cc	_	_
9	7,5	7,5	NUM	CD	NumType=Card	10	nummod	_	_
10	Euros	euro	NOUN	NNS	Number=Plur	4	conj	_	_
11	(	(	PUNCT	-LRB-	_	12	punct	_	SpaceAfter=No
12	1	1	X	LS	_	4	dep	_	SpaceAfter=No
13	)	)	PUNCT	-RRB-	_	12	punct	_	_
14	for	for	ADP	IN	_	18	case	_	_
15	a	a	DET	DT	Definite=Ind|PronType=Art	18	det	_	_
16	72	72	NUM	CD	NumType=Card	17	nummod	_	_
17	heures	heure	NOUN	NNS	Number=Plur	18	compound	_	_
18	lenght	lenght	NOUN	NN	Number=Sing	4	nmod	_	SpaceAfter=No
19	.	.	PUNCT	.	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is universal.

1 nodes (0%) are attached to their parents as `dep`.

1 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `dep`: [en-pos/VERB]()-[en-pos/NOUN]() (1; 100% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 dep	color:blue
1	Choose	choose	VERB	V	Mood=Imp|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	to	to	PART	PART	_	3	mark	_	_
3	pay	pay	VERB	V	VerbForm=Inf	1	xcomp	_	_
4	only	only	ADV	B	_	7	advmod	_	_
5	when	when	SCONJ	CS	_	7	mark	_	_
6	people	people	NOUN	S	Number=Plur	7	nsubj	_	_
7	click	click	VERB	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	3	advcl	_	_
8	(	(	PUNCT	FB	_	9	punct	_	SpaceAfter=No
9	CPC	CPC	PROPN	SP	_	7	appos	_	SpaceAfter=No
10	)	)	PUNCT	FB	_	9	punct	_	_
11	or	or	CCONJ	CC	_	12	cc	_	_
12	see	see	VERB	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	7	conj	_	_
13	people	people	NOUN	S	Number=Plur	12	obj	_	_
14	your	you	DET	AP	Poss=Yes|PronType=Prs	15	nmod:poss	_	_
15	advert	advert	NOUN	S	Number=Sing	12	dep	_	_
16	(	(	PUNCT	FB	_	17	punct	_	SpaceAfter=No
17	CPM	CPM	PROPN	SP	_	12	appos	_	SpaceAfter=No
18	)	)	PUNCT	FB	_	17	punct	_	SpaceAfter=No
19	.	.	PUNCT	FS	_	1	punct	_	_

~~~


