

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

8 nodes (0%) are attached to their parents as `goeswith`.

8 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 2 pairs of parts of speech are connected with `goeswith`: [da-pos/NUM]()-[da-pos/SYM]() (7; 88% instances), [da-pos/SYM]()-[da-pos/SYM]() (1; 13% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 goeswith	color:blue
1	Grænsebeløbet	grænsebeløb	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	2	nsubj	_	_
2	udgør	udgøre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	for	for	ADP	_	AdpType=Prep	4	case	_	_
4	indkomster	indkomst	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	2	nmod	_	_
5	,	,	PUNCT	_	_	8	punct	_	_
6	der	der	PRON	_	PartType=Inf	8	nsubj	_	_
7	ikke	ikke	ADV	_	_	8	neg	_	_
8	overstiger	overstige	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
9	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	12	det	_	_
10	ca.	cirka	ADV	_	_	12	advmod	_	_
11	130.000	130.000	NUM	_	NumType=Card	12	nummod	_	_
12	kr.	krone	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	8	dobj	_	_
13	,	,	PUNCT	_	_	2	punct	_	_
14	i	i	ADP	_	AdpType=Prep	15	case	_	_
15	1992	1992	NUM	_	NumType=Card	2	nummod	_	_
16	11	11	NUM	_	NumType=Card	2	dobj	_	_
17	2/3	2/3	NUM	_	NumType=Card	16	nummod	_	_
18	%	%	SYM	_	_	16	goeswith	_	_
19	af	af	ADP	_	AdpType=Prep	20	case	_	_
20	husstandsindkomsten	husstandsindkomst	NOUN	_	Definite=Def|Gender=Com|Number=Sing	18	nmod	_	_
21	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 goeswith	color:blue
1	UDSENDES	udsende	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
2	KL	klokke	NOUN	_	Definite=Def|Gender=Com|Number=Sing	1	nmod	_	_
3	=	=	SYM	_	_	2	cc	_	_
4	1600	1600	NUM	_	NumType=Card	2	conj	_	_
5	OPLÆSER	oplæser	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	1	conj	_	_
6	=	=	SYM	_	_	5	cc	_	_
7	=	=	SYM	_	_	6	goeswith	_	_
8	ER	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_

~~~


