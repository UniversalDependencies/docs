---
layout: base
title:  'Statistics of flat:foreign in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-flat.html">flat</a></tt>.

35 nodes (0%) are attached to their parents as `flat:foreign`.

35 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (33; 94% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:foreign	color:blue
1	Radio	radio	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	2:nsubj	_
2	gra	grać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	"	"	PUNCT	interp	PunctType=Quot	4	punct	4:punct	SpaceAfter=No
4	Close	close	X	ign	Foreign=Yes	2	obj	2:obj	_
5	your	your	X	ign	Foreign=Yes	4	flat:foreign	4:flat:foreign	_
6	eyes	eyes	X	ign	Foreign=Yes	5	flat:foreign	5:flat:foreign	SpaceAfter=No
7	"	"	PUNCT	interp	PunctType=Quot	4	punct	4:punct	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 55	bgColor:blue
# visual-style 55	fgColor:white
# visual-style 54	bgColor:blue
# visual-style 54	fgColor:white
# visual-style 54 55 flat:foreign	color:blue
1	Co	co	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	5	nsubj	5:nsubj	_
2	mnie	ja	PRON	ppron12:sg:acc:f:pri:akc	Case=Acc|Gender=Fem|Number=Sing|Person=1|PronType=Prs|Variant=Long	5	obj	5:obj	_
3	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Ins
4	lekka	lekki	ADJ	adjp	PrepCase=Pre	5	obl	5:obl	_
5	zawiodło	zawieść	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	8	advcl	8:advcl	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
7	to	to	SCONJ	comp	_	8	mark	8:mark	_
8	brak	brak	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
9	wykonań	wykonać	NOUN	ger:pl:gen:n:perf:aff	Aspect=Perf|Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos|VerbForm=Vnoun	8	nmod:arg	8:nmod:arg	_
10	tych	ten	DET	adj:pl:gen:f:pos	Case=Gen|Gender=Fem|Number=Plur|PronType=Dem	11	det	11:det	_
11	piosenek	piosenka	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	9	obj	9:obj	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	16	punct	16:punct	_
13	jak	jak	SCONJ	comp	ConjType=Cmpr	16	mark	16:mark|20:mark|26:mark|33:mark|38:mark|43:mark|47:mark|54:mark|61:mark|68:mark|85:mark	SpaceAfter=No
14	:	:	PUNCT	interp	PunctType=Colo	16	punct	16:punct	_
15	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	16	punct	16:punct	SpaceAfter=No
16	Everlasting	Everlasting	X	ign	Foreign=Yes	11	obl:cmpr	11:obl:cmpr	SpaceAfter=No
17	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	16	punct	16:punct	SpaceAfter=No
18	,	,	PUNCT	interp	PunctType=Comm	20	punct	20:punct	_
19	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	20	punct	20:punct	SpaceAfter=No
20	Ai	Ai	X	ign	Foreign=Yes	16	conj	11:obl:cmpr|16:conj	_
21	no	no	X	ign	Foreign=Yes	20	flat:foreign	20:flat:foreign	_
22	melody	melody	X	ign	Foreign=Yes	21	flat:foreign	21:flat:foreign	SpaceAfter=No
23	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	20	punct	20:punct	SpaceAfter=No
24	,	,	PUNCT	interp	PunctType=Comm	26	punct	26:punct	_
25	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	26	punct	26:punct	SpaceAfter=No
26	The	the	X	ign	Foreign=Yes	16	conj	11:obl:cmpr|16:conj	_
27	power	power	X	ign	Foreign=Yes	26	flat:foreign	26:flat:foreign	_
28	of	of	X	ign	Foreign=Yes	27	flat:foreign	27:flat:foreign	_
29	smile	smile	X	ign	Foreign=Yes	28	flat:foreign	28:flat:foreign	SpaceAfter=No
30	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	26	punct	26:punct	SpaceAfter=No
31	,	,	PUNCT	interp	PunctType=Comm	33	punct	33:punct	_
32	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	33	punct	33:punct	SpaceAfter=No
33	Amazing	amazing	X	ign	Foreign=Yes	16	conj	11:obl:cmpr|16:conj	_
34	Grace	Grace	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	33	flat:foreign	33:flat:foreign	SpaceAfter=No
35	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	33	punct	33:punct	SpaceAfter=No
36	,	,	PUNCT	interp	PunctType=Comm	38	punct	38:punct	_
37	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	38	punct	38:punct	SpaceAfter=No
38	Ave	Ave	PROPN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	16	conj	11:obl:cmpr|16:conj	_
39	Maria	Maria	PROPN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	38	flat	38:flat	SpaceAfter=No
40	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	38	punct	38:punct	SpaceAfter=No
41	,	,	PUNCT	interp	PunctType=Comm	43	punct	43:punct	_
42	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	43	punct	43:punct	SpaceAfter=No
43	Karma	Karma	PROPN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	16	conj	11:obl:cmpr|16:conj	SpaceAfter=No
44	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	43	punct	43:punct	SpaceAfter=No
45	,	,	PUNCT	interp	PunctType=Comm	47	punct	47:punct	_
46	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	47	punct	47:punct	SpaceAfter=No
47	Il	il	X	ign	Foreign=Yes	16	conj	11:obl:cmpr|16:conj	_
48	mare	mare	X	ign	Foreign=Yes	47	flat:foreign	47:flat:foreign	_
49	di	di	X	ign	Foreign=Yes	48	flat:foreign	48:flat:foreign	_
50	suoni	suoni	X	ign	Foreign=Yes	49	flat:foreign	49:flat:foreign	SpaceAfter=No
51	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	47	punct	47:punct	SpaceAfter=No
52	,	,	PUNCT	interp	PunctType=Comm	54	punct	54:punct	_
53	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	54	punct	54:punct	SpaceAfter=No
54	Time	time	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	16	conj	11:obl:cmpr|16:conj	_
55	to	to	X	ign	Foreign=Yes	54	flat:foreign	54:flat:foreign	_
56	say	say	X	ign	Foreign=Yes	55	flat:foreign	55:flat:foreign	_
57	goodbye	goodbye	X	ign	Foreign=Yes	56	flat:foreign	56:flat:foreign	SpaceAfter=No
58	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	54	punct	54:punct	SpaceAfter=No
59	,	,	PUNCT	interp	PunctType=Comm	61	punct	61:punct	_
60	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	61	punct	61:punct	SpaceAfter=No
61	Happy	happy	X	ign	Foreign=Yes	16	conj	11:obl:cmpr|16:conj	_
62	birthday	birthday	X	ign	Foreign=Yes	61	flat:foreign	61:flat:foreign	_
63	to	to	X	ign	Foreign=Yes	62	flat:foreign	62:flat:foreign	_
64	me	me	X	ign	Foreign=Yes	63	flat:foreign	63:flat:foreign	SpaceAfter=No
65	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	61	punct	61:punct	SpaceAfter=No
66	,	,	PUNCT	interp	PunctType=Comm	68	punct	68:punct	_
67	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	68	punct	68:punct	SpaceAfter=No
68	Without	without	X	ign	Foreign=Yes	16	conj	11:obl:cmpr|16:conj	_
69	you	you	X	ign	Foreign=Yes	68	flat:foreign	68:flat:foreign	_
70	here	here	X	ign	Foreign=Yes	69	flat:foreign	69:flat:foreign	SpaceAfter=No
71	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	68	punct	68:punct	_
72	(	(	PUNCT	interp	PunctSide=Ini|PunctType=Brck	76	punct	76:punct	SpaceAfter=No
73	ten	ten	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	76	nsubj	76:nsubj	_
74	ostatni	ostatni	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	73	amod	73:amod	_
75	akurat	akurat	PART	part	_	73	advmod:emph	73:advmod:emph	_
76	mógł	móc	VERB	praet:sg:m3:imperf:nagl	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	68	parataxis:insert	68:parataxis:insert	_
77	by	by	AUX	part	_	76	aux:cnd	76:aux:cnd	_
78	spokojnie	spokojnie	ADV	adv:pos	Degree=Pos	76	parataxis:insert	76:parataxis:insert	_
79	zostać	zostać	AUX	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	80	aux:pass	80:aux:pass	_
80	zagrany	zagrać	ADJ	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	76	ccomp	76:ccomp	_
81	na	na	ADP	prep:loc	AdpType=Prep	82	case	82:case	Case=Loc
82	gitarze	gitara	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	80	obl:arg	80:obl:arg	SpaceAfter=No
83	)	)	PUNCT	interp	PunctSide=Fin|PunctType=Brck	76	punct	76:punct	_
84	i	i	CCONJ	conj	_	85	cc	85:cc	_
85	mnóstwa	mnóstwo	NOUN	subst:pl:gen:n:ncol	Case=Gen|Gender=Neut|Number=Plur	16	conj	11:obl:cmpr|16:conj	_
86	innych	inny	ADJ	adj:pl:gen:m1:pos	Animacy=Hum|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	85	nmod:arg	85:nmod:arg	SpaceAfter=No
87	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 34 flat:foreign	color:blue
1	Co	co	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	5	nsubj	5:nsubj	_
2	mnie	ja	PRON	ppron12:sg:acc:f:pri:akc	Case=Acc|Gender=Fem|Number=Sing|Person=1|PronType=Prs|Variant=Long	5	obj	5:obj	_
3	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Ins
4	lekka	lekki	ADJ	adjp	PrepCase=Pre	5	obl	5:obl	_
5	zawiodło	zawieść	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	8	advcl	8:advcl	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
7	to	to	SCONJ	comp	_	8	mark	8:mark	_
8	brak	brak	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
9	wykonań	wykonać	NOUN	ger:pl:gen:n:perf:aff	Aspect=Perf|Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos|VerbForm=Vnoun	8	nmod:arg	8:nmod:arg	_
10	tych	ten	DET	adj:pl:gen:f:pos	Case=Gen|Gender=Fem|Number=Plur|PronType=Dem	11	det	11:det	_
11	piosenek	piosenka	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	9	obj	9:obj	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	16	punct	16:punct	_
13	jak	jak	SCONJ	comp	ConjType=Cmpr	16	mark	16:mark|20:mark|26:mark|33:mark|38:mark|43:mark|47:mark|54:mark|61:mark|68:mark|85:mark	SpaceAfter=No
14	:	:	PUNCT	interp	PunctType=Colo	16	punct	16:punct	_
15	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	16	punct	16:punct	SpaceAfter=No
16	Everlasting	Everlasting	X	ign	Foreign=Yes	11	obl:cmpr	11:obl:cmpr	SpaceAfter=No
17	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	16	punct	16:punct	SpaceAfter=No
18	,	,	PUNCT	interp	PunctType=Comm	20	punct	20:punct	_
19	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	20	punct	20:punct	SpaceAfter=No
20	Ai	Ai	X	ign	Foreign=Yes	16	conj	11:obl:cmpr|16:conj	_
21	no	no	X	ign	Foreign=Yes	20	flat:foreign	20:flat:foreign	_
22	melody	melody	X	ign	Foreign=Yes	21	flat:foreign	21:flat:foreign	SpaceAfter=No
23	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	20	punct	20:punct	SpaceAfter=No
24	,	,	PUNCT	interp	PunctType=Comm	26	punct	26:punct	_
25	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	26	punct	26:punct	SpaceAfter=No
26	The	the	X	ign	Foreign=Yes	16	conj	11:obl:cmpr|16:conj	_
27	power	power	X	ign	Foreign=Yes	26	flat:foreign	26:flat:foreign	_
28	of	of	X	ign	Foreign=Yes	27	flat:foreign	27:flat:foreign	_
29	smile	smile	X	ign	Foreign=Yes	28	flat:foreign	28:flat:foreign	SpaceAfter=No
30	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	26	punct	26:punct	SpaceAfter=No
31	,	,	PUNCT	interp	PunctType=Comm	33	punct	33:punct	_
32	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	33	punct	33:punct	SpaceAfter=No
33	Amazing	amazing	X	ign	Foreign=Yes	16	conj	11:obl:cmpr|16:conj	_
34	Grace	Grace	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	33	flat:foreign	33:flat:foreign	SpaceAfter=No
35	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	33	punct	33:punct	SpaceAfter=No
36	,	,	PUNCT	interp	PunctType=Comm	38	punct	38:punct	_
37	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	38	punct	38:punct	SpaceAfter=No
38	Ave	Ave	PROPN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	16	conj	11:obl:cmpr|16:conj	_
39	Maria	Maria	PROPN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	38	flat	38:flat	SpaceAfter=No
40	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	38	punct	38:punct	SpaceAfter=No
41	,	,	PUNCT	interp	PunctType=Comm	43	punct	43:punct	_
42	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	43	punct	43:punct	SpaceAfter=No
43	Karma	Karma	PROPN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	16	conj	11:obl:cmpr|16:conj	SpaceAfter=No
44	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	43	punct	43:punct	SpaceAfter=No
45	,	,	PUNCT	interp	PunctType=Comm	47	punct	47:punct	_
46	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	47	punct	47:punct	SpaceAfter=No
47	Il	il	X	ign	Foreign=Yes	16	conj	11:obl:cmpr|16:conj	_
48	mare	mare	X	ign	Foreign=Yes	47	flat:foreign	47:flat:foreign	_
49	di	di	X	ign	Foreign=Yes	48	flat:foreign	48:flat:foreign	_
50	suoni	suoni	X	ign	Foreign=Yes	49	flat:foreign	49:flat:foreign	SpaceAfter=No
51	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	47	punct	47:punct	SpaceAfter=No
52	,	,	PUNCT	interp	PunctType=Comm	54	punct	54:punct	_
53	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	54	punct	54:punct	SpaceAfter=No
54	Time	time	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	16	conj	11:obl:cmpr|16:conj	_
55	to	to	X	ign	Foreign=Yes	54	flat:foreign	54:flat:foreign	_
56	say	say	X	ign	Foreign=Yes	55	flat:foreign	55:flat:foreign	_
57	goodbye	goodbye	X	ign	Foreign=Yes	56	flat:foreign	56:flat:foreign	SpaceAfter=No
58	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	54	punct	54:punct	SpaceAfter=No
59	,	,	PUNCT	interp	PunctType=Comm	61	punct	61:punct	_
60	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	61	punct	61:punct	SpaceAfter=No
61	Happy	happy	X	ign	Foreign=Yes	16	conj	11:obl:cmpr|16:conj	_
62	birthday	birthday	X	ign	Foreign=Yes	61	flat:foreign	61:flat:foreign	_
63	to	to	X	ign	Foreign=Yes	62	flat:foreign	62:flat:foreign	_
64	me	me	X	ign	Foreign=Yes	63	flat:foreign	63:flat:foreign	SpaceAfter=No
65	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	61	punct	61:punct	SpaceAfter=No
66	,	,	PUNCT	interp	PunctType=Comm	68	punct	68:punct	_
67	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	68	punct	68:punct	SpaceAfter=No
68	Without	without	X	ign	Foreign=Yes	16	conj	11:obl:cmpr|16:conj	_
69	you	you	X	ign	Foreign=Yes	68	flat:foreign	68:flat:foreign	_
70	here	here	X	ign	Foreign=Yes	69	flat:foreign	69:flat:foreign	SpaceAfter=No
71	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	68	punct	68:punct	_
72	(	(	PUNCT	interp	PunctSide=Ini|PunctType=Brck	76	punct	76:punct	SpaceAfter=No
73	ten	ten	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	76	nsubj	76:nsubj	_
74	ostatni	ostatni	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	73	amod	73:amod	_
75	akurat	akurat	PART	part	_	73	advmod:emph	73:advmod:emph	_
76	mógł	móc	VERB	praet:sg:m3:imperf:nagl	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	68	parataxis:insert	68:parataxis:insert	_
77	by	by	AUX	part	_	76	aux:cnd	76:aux:cnd	_
78	spokojnie	spokojnie	ADV	adv:pos	Degree=Pos	76	parataxis:insert	76:parataxis:insert	_
79	zostać	zostać	AUX	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	80	aux:pass	80:aux:pass	_
80	zagrany	zagrać	ADJ	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	76	ccomp	76:ccomp	_
81	na	na	ADP	prep:loc	AdpType=Prep	82	case	82:case	Case=Loc
82	gitarze	gitara	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	80	obl:arg	80:obl:arg	SpaceAfter=No
83	)	)	PUNCT	interp	PunctSide=Fin|PunctType=Brck	76	punct	76:punct	_
84	i	i	CCONJ	conj	_	85	cc	85:cc	_
85	mnóstwa	mnóstwo	NOUN	subst:pl:gen:n:ncol	Case=Gen|Gender=Neut|Number=Plur	16	conj	11:obl:cmpr|16:conj	_
86	innych	inny	ADJ	adj:pl:gen:m1:pos	Animacy=Hum|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	85	nmod:arg	85:nmod:arg	SpaceAfter=No
87	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


