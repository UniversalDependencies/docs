

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

32 nodes (0%) are attached to their parents as `parataxis`.

31 instances of `parataxis` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 20.15625.

The following 9 pairs of parts of speech are connected with `parataxis`: [ga-pos/VERB]()-[ga-pos/VERB]() (16; 50% instances), [ga-pos/ADJ]()-[ga-pos/VERB]() (3; 9% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (3; 9% instances), [ga-pos/VERB]()-[ga-pos/PRON]() (3; 9% instances), [ga-pos/PROPN]()-[ga-pos/VERB]() (2; 6% instances), [ga-pos/VERB]()-[ga-pos/NOUN]() (2; 6% instances), [ga-pos/CONJ]()-[ga-pos/VERB]() (1; 3% instances), [ga-pos/SCONJ]()-[ga-pos/X]() (1; 3% instances), [ga-pos/VERB]()-[ga-pos/SCONJ]() (1; 3% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 parataxis	color:blue
1	Tháinig	tar	VERB	VI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	mé	mé	PRON	Pers	Number=Sing|Person=1	1	nsubj	_	_
3	ort	ar	ADP	Prep	Number=Sing|Person=2	1	nmod:prep	_	_
4	agus	agus	SCONJ	Subord	_	1	cc	_	_
5	drúcht	drúcht	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	1	conj	_	_
6	ar	ar	ADP	Simp	_	8	case	_	_
7	d'	do	DET	Det	Number=Sing|Person=2|Poss=Yes	8	nmod:poss	_	_
8	aghaidh	aghaidh	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	5	nmod	_	_
9	,	,	PUNCT	Punct	_	10	punct	_	_
10	shín	sín	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	1	parataxis	_	_
11	tú	tú	PRON	Pers	Number=Sing|Person=2	10	nsubj	_	_
12	do	do	DET	Det	Number=Sing|Person=2|Poss=Yes	13	nmod:poss	_	_
13	lámha	lámh	NOUN	Noun	Case=Com|Gender=Fem|Number=Plur	10	dobj	_	_
14	chugam	chuig	ADP	Prep	Number=Sing|Person=1	10	nmod:prep	_	_
15	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 parataxis	color:blue
1	An	an	PART	Vb	PartType=Vb	2	mark:prt	_	_
2	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	0	root	_	_
3	cead	cead	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	2	nsubj	_	_
4	agam	ag	ADP	Prep	Number=Sing|Person=1	2	nmod:prep	_	_
5	mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	7	nmod:poss	_	_
6	chéad	céad	NUM	Num	Form=Len|NumType=Ord	7	nummod	_	_
7	cheist	ceist	NOUN	Noun	Case=Com|Form=Len|Gender=Fem|Number=Sing	9	dobj	_	_
8	a	a	PART	Inf	PartType=Inf	9	mark	_	_
9	chur	cur	NOUN	Noun	Form=Len|VerbForm=Inf	2	xcomp	_	_
10	:	:	PUNCT	Punct	_	11	punct	_	_
11	Cé	cé	PRON	Q	PronType=Int	2	parataxis	_	_
12	hiad	iad	PRON	Pers	Number=Plur|Person=3	11	nsubj	_	_
13	féin	féin	PRON	Ref	Reflex=Yes	12	compound	_	_
14	agus	agus	CONJ	Coord	_	11	cc	_	_
15	céard	cé	PRON	Q	PronType=Int	11	conj	_	_
16	a	a	PART	Vb	PartType=Vb|PronType=Rel	17	mark:prt	_	_
17	tharlós	tarlaigh	VERB	VTI	Mood=Ind|PronType=Rel|Tense=Fut	15	csubj:cleft	_	_
18	dóibh	do	ADP	Prep	Number=Plur|Person=3	17	nmod:prep	_	_
19	?	?	PUNCT	?	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 13 parataxis	color:blue
1	Ní	is	VERB	Cop	Negative=Neg|Tense=Pres|VerbForm=Cop	2	cop	_	_
2	cosúil	cosúil	ADJ	Adj	Degree=Pos	0	root	_	_
3	go	go	PART	Vb	PartType=Cmpl	4	mark:prt	_	_
4	raibh	bí	VERB	PastInd	Form=Ecl|Mood=Ind|Tense=Past	2	csubj:cop	_	_
5	mórán	mórán	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	4	nsubj	_	_
6	le_cois	le_cois	ADP	Cmpd	PrepForm=Cmpd	8	case	_	_
7	dhá	dó	NUM	Num	NumType=Card	8	nummod	_	_
8	scór	scór	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	5	nmod	_	_
9	uilig	uile	DET	Det	_	8	det	_	_
10	acu	ag	ADP	Prep	Number=Plur|Person=3	9	compound	_	_
11	istigh	istigh	ADV	Dir	_	4	xcomp:pred	_	_
12	-	-	PUNCT	Punct	_	13	punct	_	_
13	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	2	parataxis	_	_
14	100	100	NUM	Num	_	13	nsubj	_	_
15	i	i	ADP	Simp	_	16	case	_	_
16	nGaillimh	Gaillimh	PROPN	Noun	Case=Com|Form=Ecl|Gender=Fem|Number=Sing	13	nmod	_	_
17	.	.	PUNCT	.	_	2	punct	_	_

~~~


