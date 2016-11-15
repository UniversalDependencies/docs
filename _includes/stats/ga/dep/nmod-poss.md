

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:prep](), [nmod:tmod]().

234 nodes (1%) are attached to their parents as `nmod:poss`.

234 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08547008547009.

The following 4 pairs of parts of speech are connected with `nmod:poss`: [ga-pos/NOUN]()-[ga-pos/DET]() (228; 97% instances), [ga-pos/NOUN]()-[ga-pos/PART]() (4; 2% instances), [ga-pos/ADJ]()-[ga-pos/DET]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nmod:poss	color:blue
1	Cad	cad	PRON	Q	PronType=Int	0	root	_	_
2	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	case	_	_
3	thaobh	taobh	NOUN	Noun	Case=Com|Form=Len|Gender=Masc|Number=Sing	1	xcomp:pred	_	_
4	ná	nach	PART	Vb	Negative=Neg|PartType=Cmpl	5	dobj	_	_
5	haithneodh	haithneodh	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	1	acl:relcl	_	_
6	,	,	PUNCT	Punct	_	8	punct	_	_
7	ná	nach	PART	Vb	Negative=Neg|PartType=Cmpl	8	mark:prt	_	_
8	fuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	5	ccomp	_	_
9	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	8	nsubj	_	_
10	do	do	ADP	Simp	_	12	case	_	_
11	mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	12	nmod:poss	_	_
12	mhúineadh	múineadh	NOUN	Noun	Form=Len|VerbForm=Inf	8	xcomp	_	_
13	?	?	PUNCT	?	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Ar	ar	ADP	Simp	_	0	root	_	_
2	dhá	dó	NUM	Num	NumType=Card	3	nummod	_	_
3	chúis	cúis	NOUN	Noun	Case=Com|Form=Len|Gender=Fem|Number=Sing	1	nmod	_	_
4	ar	ar	ADP	Simp	_	6	case	_	_
5	a	a	PART	Inf	PartType=Inf	6	nmod:poss	_	_
6	laghad	laghad	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	3	nmod	_	_
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Beidh	bí	VERB	FutInd	Mood=Ind|Tense=Fut	0	root	_	_
2	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	nmod:poss	_	_
3	chomhionann	ionann	ADJ	Adj	Degree=Pos|Form=Len	1	nsubj	_	_
4	le	le	ADP	Simp	_	5	case	_	_
5	déanamh	déananh	NOUN	Noun	Form=Len|VerbForm=Inf	1	xcomp	_	_
6	le	le	ADP	Simp	_	7	case	_	_
7	fuaimniú	fuaimniú	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	5	nmod	_	_
8	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	teanga	teanga	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	7	compound	_	_
10	agus	agus	CONJ	Coord	_	1	cc	_	_
11	is	is	VERB	Cop	Tense=Pres|VerbForm=Cop	12	cop	_	_
12	mithid	mithid	ADJ	Adj	Degree=Pos	1	conj	_	_
13	sin	sin	PRON	Dem	PronType=Dem	12	nsubj	_	_
14	le	le	ADP	Simp	_	15	case	_	_
15	freastal	freastal	NOUN	Noun	VerbForm=Inf	12	xcomp	_	_
16	ar	ar	ADP	Simp	_	17	case	_	_
17	mhúinteoirí	múinteoir	NOUN	Noun	Case=Com|Form=Len|Gender=Masc|Number=Plur	15	nmod	_	_
18	,	,	PUNCT	Punct	_	19	punct	_	_
19	agus	agus	CONJ	Coord	_	17	cc	_	_
20	orthu	ar	ADP	Prep	Number=Plur|Person=3	19	conj	_	_
21	sin	sin	PRON	Dem	PronType=Dem	20	det	_	_
22	a	a	PART	Vb	PartType=Vb|PronType=Rel	23	nsubj	_	_
23	bhíonn	bí	VERB	PresImp	Form=Len	20	acl:relcl	_	_
24	ag	ag	ADP	Simp	_	25	case	_	_
25	plé	plé	NOUN	Noun	VerbForm=Inf	23	xcomp	_	_
26	le	le	ADP	Simp	_	27	case	_	_
27	scrúduithe	scrúdú	NOUN	Noun	Case=Com|Gender=Masc|Number=Plur	25	nmod	_	_
28	agus	agus	CONJ	Coord	_	27	cc	_	_
29	le	le	ADP	Simp	_	28	case	_	_
30	trialacha	triail	NOUN	Noun	Case=Com|Gender=Fem|Number=Plur	27	conj	_	_
31	cainte	caint	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	30	compound	_	_
32	agus	agus	CONJ	Coord	_	31	cc	_	_
33	éisteachta	éisteacht	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	31	conj	_	_
34	,	,	PUNCT	Punct	_	35	punct	_	_
35	agus	agus	CONJ	Coord	_	15	cc	_	_
36	go	go	PART	Ad	PartType=Ad	37	mark:prt	_	_
37	háirithe	áirithe	ADJ	Adj	Degree=Pos	35	advmod	_	_
38	le	le	ADP	Simp	_	39	case	_	_
39	cuidiú	cuidiú	NOUN	Noun	VerbForm=Inf	15	conj	_	_
40	le	le	ADP	Simp	_	41	case	_	_
41	lucht	lucht	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	39	nmod	_	_
42	raidió	raidió	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	41	compound	_	_
43	agus	agus	CONJ	Coord	_	42	cc	_	_
44	teilifíse	teilifís	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	42	conj	_	_
45	uirlis	uirlis	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	44	compound	_	_
46	chumhachtach	cumhachtach	ADJ	Adj	Case=Com|Gender=Fem|Number=Sing	45	amod	_	_
47	chumarsáide	cumarsáid	NOUN	Noun	Case=Gen|Form=Len|Gender=Fem|Number=Sing	45	compound	_	_
48	,	,	PUNCT	Punct	_	50	punct	_	_
49	a	a	PART	Vb	PartType=Vb|PronType=Rel	50	nsubj	_	_
50	dhéanfadh	déan	VERB	VTI	Form=Len|Mood=Cnd	45	acl:relcl	_	_
51	freastal	freastal	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	50	dobj	_	_
52	ar	ar	ADP	Simp	_	53	case	_	_
53	phobal	pobal	NOUN	Noun	Case=Com|Form=Len|Gender=Masc|Number=Sing	50	nmod	_	_
54	leathan	leathan	ADJ	Adj	Case=Com|Gender=Masc|Number=Sing	53	amod	_	_
55	ilbhéascnach	ilbhéascnach	ADJ	Adj	_	53	amod	_	_
56	,	,	PUNCT	Punct	_	58	punct	_	_
57	a	a	PART	Inf	PartType=Inf	58	mark	_	_
58	chothú	cothú	NOUN	Noun	Form=Len|VerbForm=Inf	38	xcomp	_	_
59	agus	agus	CONJ	Coord	_	58	cc	_	_
60	a	a	PART	Inf	PartType=Inf	61	mark	_	_
61	bhuanú	buanú	NOUN	Noun	Form=Len|VerbForm=Inf	58	conj	_	_
62	.	.	PUNCT	.	_	1	punct	_	_

~~~


