---
layout: base
title:  'Statistics of nsubj:outer in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-nsubj.html">nsubj</a></tt>.

11 nodes (0%) are attached to their parents as `nsubj:outer`.

8 instances of `nsubj:outer` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.90909090909091.

The following 7 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (2; 18% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (1; 9% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nsubj:outer	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	maith	maith	ADJ	Adj	Degree=Pos	0	root	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	rud	rud	NOUN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj:outer	_	_
5	go	go	PART	Vb	PartType=Cmpl	6	mark:prt	_	_
6	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	2	csubj:cop	_	_
7	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	leabhar	leabhar	NOUN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	_
9	seo	seo	DET	Det	PronType=Dem	8	det	_	SpaceAfter=No
10	,	,	PUNCT	Punct	_	11	punct	_	_
11	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	12	nsubj	_	_
12	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	4	acl:relcl	_	_
13	as	as	ADP	Simp	_	14	case	_	_
14	cló	cló	NOUN	Noun	Case=Nom|Gender=Masc|Number=Sing	12	xcomp:pred	_	_
15	ó	ó	SCONJ	Subord	_	16	mark	_	_
16	foilsíodh	foilsigh	VERB	VT	Mood=Ind|Person=0|Tense=Past	12	advcl	_	_
17	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	16	obj	_	_
18	nach	is	AUX	Cop	Polarity=Neg|PronType=Rel|Tense=Pres|VerbForm=Cop	19	cop	_	_
19	mór	mór	ADJ	Adj	Degree=Pos	17	acl:relcl	_	SpaceAfter=No
20	,	,	PUNCT	Punct	_	22	punct	_	_
21	ar	ar	ADP	Simp	_	22	case	_	_
22	fáil	fáil	NOUN	Noun	VerbForm=Inf	6	xcomp	_	_
23	arís	arís	ADV	Gn	_	22	advmod	_	_
24	mar	mar	SCONJ	Subord	_	22	mark	_	_
25	taobh	taobh	NOUN	Noun	Case=Nom|Gender=Masc|Number=Sing	30	obl	_	_
26	amuigh	amuigh	ADJ	Adj	Case=Nom|Gender=Masc|Number=Sing	25	amod	_	_
27	dá	de	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	28	case	_	_
28	fhiúntas	fiúntas	NOUN	Noun	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	25	nmod	_	_
29	liteartha	liteartha	ADJ	Adj	Case=Nom|Gender=Masc|Number=Sing	28	amod	_	_
30	tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	2	parataxis	_	_
31	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	30	nsubj	_	_
32	fíorthábhachtach	fíorthábhachtach	ADJ	Adj	Degree=Pos	30	xcomp:pred	_	_
33	ó	ó	ADP	Simp	_	34	case	_	_
34	thaobh	taobh	NOUN	Noun	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	32	obl	_	_
35	na	an	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	36	det	_	_
36	staire	stair	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	34	nmod	_	_
37	agus	agus	CCONJ	Coord	_	39	cc	_	_
38	na	an	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	39	det	_	_
39	socheolaíochta	socheolaíocht	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	36	conj	_	_
40	de	de	ADP	Prep	Gender=Masc|Number=Sing|Person=3	34	nmod	_	SpaceAfter=No
41	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 3 nsubj:outer	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	3	cop	_	_
2	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	3	nmod	_	_
3	luach	luach	NOUN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	16	nsubj:outer	_	_
4	an	an	DET	Art	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	tionscail	tionscal	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	3	nmod	_	_
6	sin	sin	DET	Det	PronType=Dem	5	det	_	_
7	do	do	ADP	Simp	_	8	case	_	_
8	gheilleagar	geilleagar	NOUN	Noun	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	3	nmod	_	_
9	na	an	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	hÉireann	Éire	PROPN	Noun	Case=Gen|Definite=Def|Form=HPref|Gender=Fem|Number=Sing	8	nmod	_	_
11	ná	ná	SCONJ	Subord	_	16	mark:prt	_	_
12	níos	níos	PART	Cmp	PartType=Comp	13	mark:prt	_	_
13	mó	mór	ADJ	Adj	Degree=Cmp,Sup	16	amod	_	_
14	ná	ná	CCONJ	Coord	_	16	mark	_	_
15	€5	€5	NUM	Num	_	16	nummod	_	_
16	bhilliún	billiún	NOUN	Noun	Case=Nom|Form=Len|Gender=Masc|Number=Sing	0	root	_	_
17	agus	agus	CCONJ	Coord	_	18	cc	_	_
18	tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	16	conj	_	_
19	ról	ról	NOUN	Noun	Case=Nom|Gender=Masc|Number=Sing	18	nsubj	_	_
20	lárnach	lárnach	ADJ	Adj	Case=Nom|Gender=Masc|Number=Sing	19	amod	_	_
21	ag	ag	ADP	Simp	_	22	case	_	_
22	Baile	Baile	PROPN	Noun	Definite=Def|Gender=Masc|Number=Sing	18	obl	_	NamedEntity=Yes
23	Átha	áth	PROPN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	22	nmod	_	NamedEntity=Yes
24	Cliath	cliath	PROPN	Noun	Case=Gen|Definite=Def|Gender=Fem|NounType=Weak|Number=Plur	23	nmod	_	NamedEntity=Yes
25	i	i	ADP	Simp	_	26	case	_	_
26	gcur	cur	NOUN	Noun	Case=Nom|Form=Ecl|Gender=Masc|Number=Sing	18	obl	_	_
27	leis	le	ADP	Simp	_	29	case	_	_
28	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	29	det	_	_
29	sruth	sruth	NOUN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	26	obl	_	_
30	ioncaim	ioncam	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	29	nmod	_	_
31	sin	sin	DET	Det	PronType=Dem	30	det	_	SpaceAfter=No
32	.	.	PUNCT	.	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 54	bgColor:blue
# visual-style 54	fgColor:white
# visual-style 53	bgColor:blue
# visual-style 53	fgColor:white
# visual-style 53 54 nsubj:outer	color:blue
1	(4)	(4)	NUM	Item	_	26	list	_	_
2	Maidir	maidir	ADP	CmpdNoGen	_	4	case	_	_
3	le	le	ADP	CmpdNoGen	_	2	fixed	_	_
4	hordú	ordú	NOUN	Noun	Case=Nom|Form=HPref|Gender=Masc|Number=Sing	26	nmod	_	_
5	atá	bí	VERB	PresInd	Form=Direct|Mood=Ind|PronType=Rel|Tense=Pres	4	acl:relcl	_	_
6	i	i	ADP	Simp	_	7	case	_	_
7	bhfeidhm	feidhm	NOUN	Noun	Case=Nom|Form=Ecl|Gender=Fem|Number=Sing	5	xcomp:pred	_	_
8	faoi	faoi	ADP	Simp	_	9	case	_	_
9	fho-alt	fo-alt	NOUN	Noun	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	7	nmod	_	_
10	(2)	(2)	NUM	Item	_	9	nmod	_	_
11	-	-	PUNCT	Punct	_	12	punct	_	_
12	(a)	(a)	NUM	Item	_	9	nmod	_	_
13	más	má	SCONJ	Subord	VerbForm=Cop	14	mark:prt	_	_
14	rud	rud	NOUN	Noun	Case=Nom|Gender=Masc|Number=Sing	26	advcl	_	_
15	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	14	nsubj	_	_
16	gur	is	AUX	Cop	Tense=Pres|VerbForm=Cop	18	cop	_	_
17	faoi	faoi	ADP	Simp	_	18	case	_	_
18	fho-alt	fo-alt	NOUN	Noun	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	14	acl	_	_
19	(2)	(2)	NUM	Item	_	18	nmod	_	_
20	(a)	(a)	NUM	Item	_	18	nmod	_	_
21	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	22	mark:prt	_	_
22	rinneadh	déan	VERB	VTI	Mood=Ind|Person=0|Tense=Past	18	csubj:cleft	_	_
23	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	22	obj	_	SpaceAfter=No
24	,	,	PUNCT	Punct	_	14	punct	_	_
25	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	26	cop	_	_
26	fianaise	fianaise	NOUN	Noun	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
27	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	26	nsubj:outer	_	_
28	gur	is	AUX	Cop	Tense=Pres|VerbForm=Cop	29	cop	_	_
29	Stát	stát	NOUN	Noun	Case=Nom|Gender=Masc|Number=Sing	26	csubj:cop	_	_
30	Conarthach	conarthach	ADJ	Adj	Case=Nom|Gender=Masc|Number=Sing	29	amod	_	_
31	aon	aon	DET	Det	PronType=Ind	32	det	_	_
32	stát	stát	NOUN	Noun	Case=Nom|Gender=Masc|Number=Sing	29	nsubj	_	_
33	lena	le	PART	Rel	Form=Indirect|PronType=Rel	34	obl	_	_
34	mbaineann	bain	VERB	VTI	Form=Ecl|Mood=Ind|Tense=Pres	32	acl:relcl	_	_
35	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	36	det	_	_
36	dearbhú	dearbhú	NOUN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	34	nsubj	_	SpaceAfter=No
37	,	,	PUNCT	Punct	_	38	punct	_	_
38	agus	agus	CCONJ	Coord	_	53	cc	_	_
39	(b)	(b)	NUM	Item	_	41	list	_	_
40	más	má	SCONJ	Subord	VerbForm=Cop	41	mark	_	_
41	rud	rud	NOUN	Noun	Case=Nom|Gender=Masc|Number=Sing	53	advcl	_	_
42	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	41	nsubj	_	_
43	gur	is	AUX	Cop	Tense=Pres|VerbForm=Cop	45	cop	_	_
44	faoi	faoi	ADP	Simp	_	45	case	_	_
45	fho-alt	fo-alt	NOUN	Noun	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	41	acl	_	_
46	(2)	(2)	NUM	Item	_	45	nmod	_	_
47	(b)	(b)	NUM	Item	_	45	nmod	_	_
48	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	49	mark:prt	_	_
49	rinneadh	déan	VERB	VTI	Mood=Ind|Person=0|Tense=Past	45	csubj:cleft	_	_
50	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	49	obj	_	SpaceAfter=No
51	,	,	PUNCT	Punct	_	41	punct	_	_
52	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	53	cop	_	_
53	fianaise	fianaise	NOUN	Noun	Case=Nom|Gender=Fem|Number=Sing	26	parataxis	_	_
54	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	53	nsubj:outer	_	_
55	go	go	PART	Vb	PartType=Cmpl	56	mark:prt	_	_
56	ndearnadh	déan	VERB	VTI	Form=Ecl|Mood=Ind|Person=0|Tense=Past	53	csubj:cop	_	_
57	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	58	det	_	_
58	dearbhú	dearbhú	NOUN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	56	obj	_	_
59	de	de	ADP	Simp	_	60	case	_	_
60	bhun	bun	NOUN	Noun	Case=Nom|Form=Len|Gender=Masc|Number=Sing	56	obl	_	_
61	Airteagal	airteagal	NOUN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	60	nmod	_	_
62	IV	IV	NUM	Num	NumType=Card	61	nmod	_	_
63	nó	nó	CCONJ	Coord	_	65	cc	_	_
64	gur	gur	PART	Vb	PartType=Vb|Tense=Past	65	mark:prt	_	_
65	cuireadh	cuir	VERB	VTI	Mood=Ind|Person=0|Tense=Past	56	conj	_	_
66	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	67	det	_	_
67	scéala	scéala	NOUN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	65	obj	_	_
68	in	i	ADP	Simp	_	69	case	_	_
69	iúl	iúl	NOUN	Noun	Case=Nom|Gender=Masc|Number=Sing	65	obl	_	_
70	de	de	ADP	Simp	_	71	case	_	_
71	bhun	bun	NOUN	Noun	Case=Nom|Form=Len|Gender=Masc|Number=Sing	65	obl	_	_
72	Airteagal	airteagal	NOUN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	71	nmod	_	_
73	VI	VI	NUM	Num	NumType=Card	72	nmod	_	_
74	agus	agus	CCONJ	Coord	_	76	cc	_	_
75	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	76	cop	_	_
76	fianaise	fianaise	NOUN	Noun	Case=Nom|Gender=Fem|Number=Sing	26	conj	_	_
77	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	76	nmod	_	_
78	ar	ar	ADP	Simp	_	76	nsubj	_	_
79	a	a	PRON	_	PronType=Rel	76	nmod	_	_
80	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	79	acl:relcl	_	_
81	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	80	xcomp:pred	_	SpaceAfter=No
82	.	.	PUNCT	.	_	26	punct	_	_

~~~


