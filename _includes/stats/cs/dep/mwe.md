

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

3705 nodes (0%) are attached to their parents as `mwe`.

3705 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.21754385964912.

The following 10 pairs of parts of speech are connected with `mwe`: [cs-pos/ADP]()-[cs-pos/NOUN]() (2249; 61% instances), [cs-pos/ADP]()-[cs-pos/ADP]() (1068; 29% instances), [cs-pos/ADV]()-[cs-pos/ADP]() (317; 9% instances), [cs-pos/NOUN]()-[cs-pos/ADP]() (44; 1% instances), [cs-pos/SCONJ]()-[cs-pos/SCONJ]() (12; 0% instances), [cs-pos/PART]()-[cs-pos/ADP]() (9; 0% instances), [cs-pos/ADP]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/ADP]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 mwe	color:blue
1	Počet	počet	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	5	nsubj	_	_
2	pracovníků	pracovník	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	1	nmod	_	_
3	podniku	podnik	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	2	nmod	_	_
4	zároveň	zároveň	ADV	Db-------------	_	5	advmod	_	_
5	klesl	klesnout	VERB	VpYS---XR-AA--1	Aspect=Perf|Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	LId=v-1
7	průběhu	průběh	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	6	mwe	_	_
8	6	6	NUM	C=-------------	NumForm=Digit|NumType=Card	9	nummod	_	_
9	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Plur	5	nmod	_	_
10	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=o-1
11	šestinu	šestina	NUM	CyFS4----------	Case=Acc|Gender=Fem|Number=Sing|NumType=Frac	5	advmod	_	SpaceAfter=No|LDeriv=še`6|LNumValue=6
12	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 mwe	color:blue
1	To	ten	PRON	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	_	_
2	znamená	znamenat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	11	punct	_	_
4	že	že	SCONJ	J,-------------	_	11	mark	_	_
5	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	8	case	_	LId=v-1
6	vztahu	vztah	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	5	mwe	_	_
7	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	5	mwe	_	LId=k-1
8	občanům	občan	NOUN	NNMP3-----A----	Animacy=Anim|Case=Dat|Gender=Masc|Negative=Pos|Number=Plur	11	nmod	_	_
9	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
10	veřejným	veřejný	ADJ	AAMS7----1A----	Animacy=Anim|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	11	amod	_	_
11	činitelem	činitel	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	2	ccomp	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mwe	color:blue
1	Samozřejmě	samozřejmě	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	2	dep	_	LDeriv=samozřejmý
2	nejen	nejen	PART	TT-------------	_	0	root	_	_
3	co	co	ADV	Db-------------	_	2	case	_	LId=co-5|LGloss=(př._co_nejméně,_co_nevidět,_co_chvíli,_co_do_počtu,_atd.)
4	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	mwe	_	LId=do-1
5	efektu	efekt	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	2	case	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	2	punct	_	_
7	ale	ale	CONJ	J^-------------	_	2	cc	_	_
8	i	i	CONJ	J^-------------	_	2	conj	_	LId=i-1
9	co	co	ADV	Db-------------	_	8	case	_	LId=co-5|LGloss=(př._co_nejméně,_co_nevidět,_co_chvíli,_co_do_počtu,_atd.)
10	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	mwe	_	LId=do-1
11	nákladů	náklad	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	8	case	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


