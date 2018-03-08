---
layout: base
title:  'Statistics of flat in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="ga-dep-flat-name.html">flat:name</a></tt>.

61 nodes (0%) are attached to their parents as `flat`.

61 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26229508196721.

The following 7 pairs of parts of speech are connected with `flat`: <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-PROPN.html">PROPN</a></tt> (42; 69% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (9; 15% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (5; 8% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (2; 3% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	Do	do	DET	Det	Number=Sing|Person=2|Poss=Yes	2	nmod:poss	_	_
2	thuairimíocht	tuairimíocht	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	0	root	_	_
3	faoi	faoi	ADP	Simp	_	5	case	_	_
4	do	do	DET	Det	Number=Sing|Person=2|Poss=Yes	5	nmod:poss	_	_
5	chuairt	cuairt	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	2	nmod	_	_
6	go	go	ADP	Simp	_	7	case	_	_
7	hIarthar	iarthar	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	5	nmod	_	_
8	Bhéal	Béal	PROPN	Noun	Case=Gen|Form=Len|Gender=Masc	7	compound	_	_
9	Feirste	Feirste	PROPN	Noun	_	8	flat	_	SpaceAfter=No
10	?	?	PUNCT	?	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 67	bgColor:blue
# visual-style 67	fgColor:white
# visual-style 66	bgColor:blue
# visual-style 66	fgColor:white
# visual-style 66 67 flat	color:blue
1	Céimeanna	céim	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Plur	0	root	_	_
2	comparáide	comparáid	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	1	compound	_	_
3	-	-	PUNCT	Punct	_	4	punct	_	_
4	Aidiachtaí	aidiacht	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Plur	1	compound	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	nsubj	_	_
6	chríochnaíonn	críochnaigh	VERB	VTI	Form=Len|Mood=Ind|Tense=Pres	4	acl:relcl	_	_
7	ar	ar	ADP	Simp	_	8	case	_	_
8	chonsan	consan	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	6	obl	_	_
9	leathan	leathan	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	8	amod	_	_
10	mall	mall	ADJ	Adj	Degree=Pos	4	amod	_	_
11	slow	slow	X	Foreign	Foreign=Yes	10	flat	_	_
12	níos	níos	NOUN	Subst	Number=Sing|PartType=Comp	13	mark:prt	_	_
13	moille	moille	ADJ	Adj	Degree=Cmp,Sup	10	amod	_	_
14	is	is	PART	Sup	_	15	mark:prt	_	_
15	moille	moille	ADJ	Adj	Degree=Cmp,Sup	10	amod	_	_
16	leathan	leathan	ADJ	Adj	Degree=Pos	4	amod	_	_
17	broad	broad	X	Foreign	Foreign=Yes	16	flat	_	_
18	níos	níos	NOUN	Subst	Number=Sing|PartType=Comp	19	mark:prt	_	_
19	leithne	leathan	ADJ	Adj	Degree=Cmp,Sup	16	amod	_	_
20	is	is	PART	Sup	_	21	mark:prt	_	_
21	leithne	leathan	ADJ	Adj	Degree=Cmp,Sup	16	amod	_	_
22	caol	caol	ADJ	Adj	Degree=Pos	4	amod	_	_
23	narrow	narrow	X	Foreign	Foreign=Yes	22	flat	_	_
24	níos	níos	NOUN	Subst	Number=Sing|PartType=Comp	25	mark:prt	_	_
25	caoile	caol	ADJ	Adj	Degree=Cmp,Sup	22	amod	_	_
26	is	is	PART	Sup	_	27	mark:prt	_	_
27	caoile	caol	ADJ	Adj	Degree=Cmp,Sup	22	amod	_	_
28	daor	daor	ADJ	Adj	Degree=Pos	4	amod	_	_
29	dear	dear	X	Foreign	Foreign=Yes	28	flat	_	_
30	níos	níos	NOUN	Subst	Number=Sing|PartType=Comp	31	mark:prt	_	_
31	daoire	daor	ADJ	Adj	Degree=Cmp,Sup	28	amod	_	_
32	is	is	PART	Sup	_	33	mark:prt	_	_
33	daoire	daor	ADJ	Adj	Degree=Cmp,Sup	28	amod	_	_
34	saor	saor	ADJ	Adj	Degree=Pos	4	amod	_	_
35	cheap	ceap	NOUN	Noun	Case=NomAcc|Foreign=Yes|Form=Len|Gender=Masc|Number=Sing	34	flat	_	SpaceAfter=No
36	,	,	PUNCT	Punct	_	37	punct	_	_
37	free	free	X	Foreign	Foreign=Yes	34	flat	_	_
38	níos	níos	NOUN	Subst	Number=Sing|PartType=Comp	39	mark:prt	_	_
39	saoire	saor	ADJ	Adj	Degree=Cmp,Sup	34	amod	_	_
40	is	is	PART	Sup	_	41	mark:prt	_	_
41	saoire	saor	ADJ	Adj	Degree=Cmp,Sup	34	amod	_	_
42	mear	mear	ADJ	Adj	Degree=Pos	4	amod	_	_
43	swift	swift	X	Foreign	Foreign=Yes	42	flat	_	_
44	níos	níos	NOUN	Subst	Number=Sing|PartType=Comp	45	mark:prt	_	_
45	mire	mear	ADJ	Adj	Degree=Cmp,Sup	42	amod	_	_
46	is	is	PART	Sup	_	47	mark:prt	_	_
47	mire	mear	ADJ	Adj	Degree=Cmp,Sup	45	amod	_	_
48	fuar	fuar	ADJ	Adj	Degree=Pos	4	amod	_	_
49	cold	cold	X	Foreign	Foreign=Yes	48	flat	_	_
50	níos	níos	NOUN	Subst	Number=Sing|PartType=Comp	51	mark:prt	_	_
51	fuaire	fuar	ADJ	Adj	Degree=Cmp,Sup	49	amod	_	_
52	is	is	PART	Sup	_	53	mark:prt	_	_
53	fuaire	fuar	ADJ	Adj	Degree=Cmp,Sup	49	amod	_	_
54	bán	bán	ADJ	Adj	Degree=Pos	53	amod	_	_
55	white	whi	ADJ	Adj	Foreign=Yes|VerbForm=Part	54	flat	_	_
56	níos	níos	NOUN	Subst	Number=Sing|PartType=Comp	57	mark:prt	_	_
57	báine	bán	ADJ	Adj	Degree=Cmp,Sup	54	amod	_	_
58	is	is	PART	Sup	_	59	mark:prt	_	_
59	báine	bán	ADJ	Adj	Degree=Cmp,Sup	54	amod	_	_
60	ceolmhar	ceolmhar	ADJ	Adj	Degree=Pos	4	amod	_	_
61	musical	musical	X	Foreign	Foreign=Yes	60	flat	_	_
62	níos	níos	NOUN	Subst	Number=Sing|PartType=Comp	63	mark:prt	_	_
63	ceolmhaire	ceolmhar	ADJ	Adj	Degree=Cmp,Sup	60	amod	_	_
64	is	is	PART	Sup	_	65	mark:prt	_	_
65	ceolmhaire	ceolmhar	ADJ	Adj	Degree=Cmp,Sup	60	amod	_	_
66	ciallmhar	ciallmhar	ADJ	Adj	Degree=Pos	4	amod	_	_
67	sensible	sensible	X	Foreign	Foreign=Yes	66	flat	_	_
68	níos	níos	NOUN	Subst	Number=Sing|PartType=Comp	69	mark:prt	_	_
69	ciallmhaire	ciallmhar	ADJ	Adj	Degree=Cmp,Sup	66	amod	_	_
70	is	is	PART	Sup	_	71	mark:prt	_	_
71	ciallmhaire	ciallmhar	ADJ	Adj	Degree=Cmp,Sup	66	amod	_	_
72	Más	má	SCONJ	Subord	VerbForm=Cop	73	mark	_	_
73	aidiacht	aidiacht	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	xcomp:pred	_	_
74	leathan	leathan	ADJ	Adj	Case=NomAcc|Gender=Fem|Number=Sing	73	amod	_	_
75	í	í	PRON	Pers	Gender=Fem|Number=Sing|Person=3	73	nsubj	_	_
76	déan	déan	VERB	VTI	Mood=Imp|Number=Sing|Person=2	73	advcl	_	_
77	caol	caol	ADJ	Adj	Degree=Pos	76	amod	_	_
78	í	í	PRON	Pers	Gender=Fem|Number=Sing|Person=3	76	obj	_	_
79	agus	agus	CCONJ	Coord	_	80	cc	_	_
80	cuir	cuir	VERB	VTI	Mood=Imp|Number=Sing|Person=2	76	conj	_	_
81	-e	-e	X	Foreign	Foreign=Yes	80	flat	_	_
82	leis	le	ADP	Prep	Gender=Masc|Number=Sing|Person=3	80	obl:prep	_	_
83	sna	i	ADP	Art	Number=Plur|PronType=Art	84	case	_	_
84	foirmeacha	foirm	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Plur	80	obl	_	_
85	comparáide	comparáid	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	84	compound	_	SpaceAfter=No
86	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	An	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	2	det	_	_
2	teideal	teideal	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
3	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	2	acl:relcl	_	_
4	air	ar	ADP	Prep	Gender=Masc|Number=Sing|Person=3	3	obl:prep	_	_
5	ná	ná	CCONJ	Coord	_	7	mark	_	_
6	'	'	PUNCT	Punct	_	7	punct	_	SpaceAfter=No
7	Kill	Kill	X	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	ccomp	_	_
8	me	me	X	Foreign	Foreign=Yes	7	flat	_	SpaceAfter=No
9	,	,	PUNCT	Punct	_	7	punct	_	_
10	I	I	X	Foreign	Foreign=Yes	7	flat	_	_
11	Love	Love	X	Foreign	Foreign=Yes	7	flat	_	_
12	You	You	X	Foreign	Foreign=Yes	7	flat	_	SpaceAfter=No
13	!	!	PUNCT	!	_	2	punct	_	_

~~~


