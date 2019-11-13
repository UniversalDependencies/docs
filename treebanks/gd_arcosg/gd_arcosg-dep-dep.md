---
layout: base
title:  'Statistics of dep in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `dep`

This relation is universal.

21 nodes (0%) are attached to their parents as `dep`.

18 instances of `dep` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.14285714285714.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-X.html">X</a></tt> (10; 48% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-X.html">X</a></tt> (10; 48% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 dep	color:blue
1	oidhche	oidhche	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	thrang	trang	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	1	amod	_	_
3	[?]	[?]	X	Xx	_	1	dep	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 dep	color:blue
1	tha	bi	VERB	V-p	Tense=Pres	0	root	_	_
2	seo	seo	PRON	Pd	_	1	nsubj	_	_
3	an	an	DET	Tds	Number=Sing	4	det	_	_
4	[?]	[?]	X	Xx	_	1	dep	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dep	color:blue
1	bidh	bi	VERB	V-f	Tense=Fut	0	root	_	_
2	Eòrpa	Eòrpa	PROPN	Nt	_	1	dep	_	_
3	[?]	[?]	X	Xx	_	1	dep	_	_
4	na	an	DET	Tdpm	Gender=Masc|Number=Plur	5	det	_	_
5	cluicheadairean	cluicheadair	NOUN	Ncpmn	Case=Nom|Gender=Masc|Number=Plur	1	nsubj	_	_
6	dìon	dìon	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
7	a	a	ADP	Sp	_	10	case	_	_
8	cheart	cheart	ADV	Rg	_	10	advmod	_	_
9	cho	cho	ADV	Rg	_	10	advmod	_	_
10	comasach	comasach	ADJ	Ap	_	1	xcomp:pred	_	_
11	air	air	ADP	Sp	_	12	case	_	_
12	tadhal	tadhal	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	13	obj	_	_
13	fhaighinn	faigh	NOUN	Nv	_	10	xcomp	_	_
14	bho	bho	ADP	Sp	_	16	case	_	_
15	can	can	VERB	Vm-2s	Mood=Imp|Person=2	16	discourse	_	_
16	oir	oir	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	13	obl	_	_
17	a’	an	DET	Tdsmg	Case=Gen|Gender=Masc|Number=Sing	18	det	_	_
18	bhocsa	bocsa	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	16	obl	_	_
19	no	no	CCONJ	Cc	_	21	cc	_	_
20	mar	mar	ADP	Sp	_	21	case	_	_
21	sin	sin	PRON	Pd	_	18	conj	_	_
22	agus	agus	CCONJ	Cc	_	24	cc	_	_
23	a	a	PART	Q-r	PartType=Vb|PronType=Rel	24	mark:prt	_	_
24	tha	bi	VERB	V-p	Tense=Pres	1	conj	_	_
25	na	an	DET	Tdpm	Gender=Masc|Number=Plur	26	det	_	_
26	cluicheadairean	cluicheadair	NOUN	Ncpmn	Case=Nom|Gender=Masc|Number=Plur	24	nsubj	_	_
27	meadhon	meadhon	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	26	nmod	_	_
28	ach	ach	CCONJ	Cc	_	31	cc	_	_
29	a-rithist	a-rithist	ADV	Rt	_	31	advmod	_	_
30	bhon	bhon	ADP	Spa-s	_	31	case	_	_
31	uair	uair	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	24	xcomp:pred	_	_
32	a	a	PART	Q-r	PartType=Vb|PronType=Rel	33	mark:prt	_	_
33	bha	bi	VERB	V-s	Tense=Past	31	acl:relcl	_	_
34	iad	iad	PRON	Pp3p	Number=Plur|Person=3	33	nsubj	_	_
35	a'	ag	PART	Sa	_	36	case	_	_
36	gluasad	gluais	NOUN	Nv	VerbForm=Vnoun	33	xcomp:pred	_	_
37	a’	an	DET	Tdsmg	Case=Gen|Gender=Masc|Number=Sing	38	det	_	_
38	bhall	ball	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	36	obj	_	_
39	bho	bho	ADP	Sp	_	40	case	_	_
40	chèile	chèile	PRON	Px	Reflex=Yes	36	obl	_	_
41	's	is	AUX	Wp-i	_	42	cop	_	_
42	dòcha	dòcha	NOUN	Uf	_	43	parataxis	_	_
43	goirid	goirid	ADV	Rg	_	36	advmod	_	_
44	an-dràsda	an-dràsda	ADV	Rt	_	36	advmod	_	_
45	's	's	CCONJ	Cc	_	46	cc	_	_
46	an	an	ADV	Rt	_	44	conj	_	_
47	uairsin	uairsin	ADV	Rt	_	46	fixed	_	_
48	ga	ga	PART	Sap3sm	_	49	case	_	_
49	shuathadh	suath	NOUN	Nv	VerbForm=Vnoun	36	conj	_	_
50	's	is	AUX	Wp-i	_	51	cop	_	_
51	dòcha	dòcha	NOUN	Uf	_	53	parataxis	_	_
52	leth-cheud	leth-cheud	NUM	Mc	_	53	nummod	_	_
53	slat	slat	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	49	obl:smod	_	_
54	no	no	CCONJ	Cc	_	56	cc	_	_
55	mar	mar	ADP	Sp	_	56	case	_	_
56	sin	sin	PRON	Pd	_	53	conj	_	_
57	agus	agus	CCONJ	Cc	_	58	cc	_	_
58	tha	bi	VERB	V-p	Tense=Pres	1	conj	_	_
59	iad	iad	PRON	Pp3p	Number=Plur|Person=3	58	nsubj	_	_
60	'	ag	PART	Sa	_	61	case	_	SpaceAfter=No
61	fosgladh	fosgail	NOUN	Nv	VerbForm=Vnoun	58	xcomp:pred	_	_
62	a-mach	a-mach	ADV	Rs	_	61	advmod	_	_
63	chluicheadairean	cluicheadair	NOUN	Ncpmg	Case=Gen|Gender=Masc|Number=Plur	61	obj	_	_
64	dìon	dìon	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	63	nmod	_	_
65	Alba	Alba	PROPN	Nt	_	64	nmod	_	_
66	uair	uair	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	58	obl:tmod	_	_
67	no	no	CCONJ	Cc	_	68	cc	_	_
68	dhà	dhà	PRON	Pn	_	66	conj	_	_
69	mar	mar	ADP	Sp	_	70	case	_	_
70	sin	sin	PRON	Pd	_	66	obl	_	_

~~~


