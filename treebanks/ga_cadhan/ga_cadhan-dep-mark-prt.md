---
layout: base
title:  'Statistics of mark:prt in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `mark:prt`

This relation is a language-specific subtype of <tt><a href="ga_cadhan-dep-mark.html">mark</a></tt>.

159 nodes (3%) are attached to their parents as `mark:prt`.

159 instances of `mark:prt` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0251572327044.

The following 4 pairs of parts of speech are connected with `mark:prt`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PART.html">PART</a></tt> (136; 86% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-PART.html">PART</a></tt> (20; 13% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark:prt	color:blue
1	Go	go	PART	_	Mood=Sub|PartType=Vb	2	mark:prt	_	_
2	ttugadh	tabhair	VERB	_	Form=Ecl|Mood=Sub	0	root	_	_
3	Dia	Dia	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
4	Odlaig	Nollaig	PROPN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	obj	_	_
5	mhaith	maith	ADJ	_	Case=Nom|Form=Len|Gender=Fem|Number=Sing	4	amod	_	_
6	dhúinn	do	ADP	_	Form=Len|Number=Plur|Person=1	2	obl:prep	_	_
7	faoi	faoi	ADP	_	_	8	case	_	_
8	shéan	séan	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	4	nmod	_	_
9	agus	agus	CCONJ	_	_	11	cc	_	_
10	faoi	faoi	ADP	_	_	11	case	_	_
11	shonas	sonas	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	8	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark:prt	color:blue
1	Adubhairt	abair	VERB	_	Mood=Ind|Tense=Past	0	root	_	_
2	tú	tú	PRON	_	Number=Sing|Person=2	1	nsubj	_	_
3	so	seo	PRON	_	PronType=Dem	1	obj	_	_
4	gu	go	PART	_	PartType=Ad	5	mark:prt	_	_
5	fírinneach	fírinneach	ADJ	_	Degree=Pos	1	advmod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 54	bgColor:blue
# visual-style 54	fgColor:white
# visual-style 55	bgColor:blue
# visual-style 55	fgColor:white
# visual-style 55 54 mark:prt	color:blue
1	Ní	is	AUX	_	Polarity=Neg|Tense=Pres|VerbForm=Cop	4	cop	_	_
2	ar	ar	ADP	_	_	4	case	_	_
3	a	a	DET	_	Number=Plur|Person=3|Poss=Yes	4	nmod:poss	_	_
4	sonsan	son	NOUN	_	Case=Nom|Definite=Def|Form=Emp|Number=Sing	0	root	_	_
5	amháin	amháin	ADJ	_	Degree=Pos	4	amod	_	_
6	do	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	7	mark:prt	_	_
7	ním	déan	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres	4	csubj:cleft	_	_
8	guidhe	guí	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	17	punct	_	_
10	achd	ach	CCONJ	_	_	17	cc	_	_
11	mar	mar	ADP	_	_	13	case	_	_
12	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	13	det	_	_
13	gcéudna	céanna	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Masc|Number=Sing	18	advcl	_	_
14	ar	ar	ADP	_	PrepForm=Cmpd	17	case	_	_
15	son	son	NOUN	_	Case=Nom|Definite=Def|Number=Sing|PrepForm=Cmpd	14	fixed	_	_
16	na	an	DET	_	Case=Gen|Definite=Def|Number=Plur|PronType=Art	17	det	_	_
17	ndáoine	duine	NOUN	_	Case=Gen|Definite=Def|Form=Ecl|Gender=Masc|NounType=Strong|Number=Plur	4	conj	_	_
18	chreidfios	creid	VERB	_	Mood=Ind|Tense=Fut	17	acl:relcl	_	_
19	ionnam	i	ADP	_	Number=Sing|Person=1	18	obl:prep	_	SpaceAfter=No
20	,	,	PUNCT	_	_	23	punct	_	_
21	tré	trí	ADP	_	_	23	case	_	_
22	na	a	DET	_	Number=Plur|Person=3|Poss=Yes	23	nmod:poss	_	_
23	mbreithirsean	briathar	NOUN	_	Case=Nom|Definite=Def|Form=Ecl,Emp|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
24	:	:	PUNCT	_	_	27	punct	_	SpacesAfter=\n
25	Dochum	Chun	ADP	_	_	27	case	_	_
26	gu	go	PART	_	PartType=Cmpl	27	mark:prt	_	_
27	mbéidís	bí	VERB	_	Form=Ecl|Mood=Cnd|Number=Plur|Person=3	8	acl	_	_
28	uile	uile	DET	_	PronType=Ind	27	det	_	_
29	ná	i	ADP	_	Number=Plur|Person=3|Poss=Yes	30	case	_	_
30	náon	aon	NUM	_	Form=Ecl|NumType=Card	27	xcomp:pred	_	SpaceAfter=No
31	,	,	PUNCT	_	_	33	punct	_	_
32	mar	mar	SCONJ	_	_	33	mark	_	_
33	atá	bí	VERB	_	Form=Direct|Mood=Ind|PronType=Rel|Tense=Pres	27	advcl	_	_
34	tusa	tusa	PRON	_	Number=Sing|Person=2|PronType=Emp	33	nsubj	_	_
35	a	a	PART	_	PartType=Voc	36	case:voc	_	_
36	athuir	athair	NOUN	_	Case=Voc|Definite=Def|Gender=Masc|Number=Sing	33	vocative	_	_
37	ionnamsa	i	ADP	_	Number=Sing|Person=1|PronType=Emp	33	xcomp:pred	_	SpaceAfter=No
38	,	,	PUNCT	_	_	39	punct	_	_
39	agus	agus	CCONJ	_	_	40	cc	_	_
40	meisi	mise	PRON	_	Number=Sing|Person=1|PronType=Emp	34	conj	_	_
41	ionnadsa	i	ADP	_	Number=Sing|Person=2|PronType=Emp	33	xcomp:pred	_	SpaceAfter=No
42	:	:	PUNCT	_	_	45	punct	_	_
43	dochum	chun	SCONJ	_	_	45	mark	_	_
44	gu	go	SCONJ	_	_	45	mark:prt	_	_
45	mbéidision	mbeidísean	VERB	_	Form=Ecl|Mood=Cnd|Number=Plur|Person=3|PronType=Emp	27	conj	_	_
46	mar	mar	ADP	_	_	48	case	_	_
47	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	48	det	_	_
48	gcédna	céanna	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Masc|Number=Sing	45	obl	_	_
49	na	i	ADP	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	50	case	_	_
50	naon	aon	NUM	_	Form=Ecl|NumType=Card	45	xcomp:pred	_	_
51	ionnuinne	i	ADP	_	Number=Plur|Person=1|PronType=Emp	50	obl:prep	_	SpaceAfter=No
52	:	:	PUNCT	_	_	55	punct	_	_
53	dochum	chun	SCONJ	_	_	55	mark	_	_
54	gu	go	SCONJ	_	_	55	mark:prt	_	_
55	gcreidfeadh	creid	VERB	_	Form=Ecl|Mood=Cnd	27	conj	_	_
56	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	57	det	_	_
57	sáoghal	saol	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	55	nsubj	_	SpaceAfter=No
58	,	,	PUNCT	_	_	55	punct	_	_
59	gurab	is	AUX	_	Form=VF|Tense=Pres|VerbForm=Cop	60	cop	_	_
60	tusa	tú	PRON	_	Number=Sing|Person=2|PronType=Emp	55	ccomp	_	_
61	dho	a	PART	_	Form=Direct,Len|PartType=Vb|PronType=Rel	62	nsubj	_	_
62	chuir	cuir	VERB	_	Form=Len|Mood=Ind|Tense=Past	60	csubj:cleft	_	_
63	uáit	ó	ADP	_	Number=Sing|Person=2	62	obl:prep	_	_
64	mhé	mé	PRON	_	Form=Len|Number=Sing|Person=1	62	obj	_	SpaceAfter=No
65	.	.	PUNCT	_	_	4	punct	_	SpacesAfter=\n

~~~


