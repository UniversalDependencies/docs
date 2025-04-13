---
layout: base
title:  'Statistics of expl:pv in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `expl:pv`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs_cltt-dep-expl-pass.html">expl:pass</a></tt>.

113 nodes (0%) are attached to their parents as `expl:pv`.

78 instances of `expl:pv` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74336283185841.

The following 4 pairs of parts of speech are connected with `expl:pv`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (80; 71% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (28; 25% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl:pv	color:blue
1	Vykazují	vykazovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	1:expl:pv	_
3	zde	zde	ADV	Db-------------	PronType=Dem	1	advmod	1:advmod	_
4	i	i	CCONJ	J^-------------	_	7	advmod:emph	7:advmod:emph	LId=i-1
5	nakoupené	nakoupený	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	_
6	opční	opční	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	_
7	listy	list	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	1	nsubj	1:nsubj	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 expl:pv	color:blue
1	(1)	(1)	PUNCT	Z:-------------	_	7	punct	7:punct	_
2	Položka	položka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	7:nsubj	_
3	„	"	PUNCT	Z:-------------	_	4	punct	4:punct	SpaceAfter=No
4	C.IV.1.	C.IV.1.	X	X@-------------	_	2	nmod	2:nmod	LGloss=(from_multi_word_term)
5	Peníze	Peníze	X	X@-------------	_	4	nmod	4:nmod	SpaceAfter=No|LGloss=(from_multi_word_term)
6	“	"	PUNCT	Z:-------------	_	4	punct	4:punct	_
7	obsahuje	obsahovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	zejména	zejména	ADV	Db-------------	_	9	advmod:emph	9:advmod:emph|13:advmod:emph|16:advmod:emph	_
9	peníze	peníze	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	7	obj	7:obj	_
10	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	11:case	LId=v-1
11	pokladně	pokladna	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	9	nmod	9:nmod:v:loc	_
12	a	a	CCONJ	J^-------------	_	13	cc	13:cc	LId=a-1
13	ceniny	cenina	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	9	conj	7:obj|9:conj	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	16	punct	16:punct	_
15	popřípadě	popřípadě	ADV	Db-------------	_	16	cc	16:cc	_
16	peníze	peníze	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	9	conj	7:obj|9:conj	_
17	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	18	case	18:case	LId=na-1
18	cestě	cesta	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	16	nmod	16:nmod:na:loc	_
19	vztahující	vztahující	ADJ	AGFS6-----A----	Aspect=Imp|Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	16	amod	16:amod	_
20	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	19	expl:pv	19:expl:pv	_
21	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	23	case	23:case	LId=k-1
22	této	tento	DET	PDFS3----------	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem	23	det	23:det	_
23	položce	položka	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing	19	obl:arg	19:obl:arg:k:dat	SpaceAfter=No
24	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 28 expl:pv	color:blue
1	(4)	(4)	PUNCT	Z:-------------	_	8	punct	8:punct	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	8	nsubj	8:nsubj	_
4	uvedené	uvedený	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	6:case	LId=v-1
6	§_1_odst._2_písm._f)	§_1_odst._2_písm._f)	X	X@-------------	_	4	obl	4:obl:v:loc	_
7	jsou	být	AUX	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
8	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Degree=Pos|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	0	root	0:root	_
9	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	8	xcomp	8:xcomp	LId=vést-1
10	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	9	obj	9:obj	_
11	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	13	case	13:case	LId=od-1
12	prvního	první	ADJ	CrIS2----------	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|NumType=Ord	13	amod	13:amod	_
13	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	obl	9:obl:od:gen	_
14	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	15	amod	15:amod	LId=účetní-1
15	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	13	nmod	13:nmod:gen	_
16	následujícího	následující	ADJ	AGNS2-----A----	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	15	amod	15:amod	_
17	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	18	case	18:case	LId=po-1
18	období	období	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing	16	obl	16:obl:po:loc|23:obl:v:loc	SpaceAfter=No
19	,	,	PUNCT	Z:-------------	_	23	punct	23:punct	_
20	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	21	case	21:case	LId=v-1
21	kterém	který	DET	P4ZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	23	obl	18:ref	_
22	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	23	expl:pv	23:expl:pv	_
23	rozhodly	rozhodnout	VERB	VpTP---XR-AA--1	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	18	acl:relcl	18:acl:relcl	_
24	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	23	xcomp	23:xcomp	LId=vést-1
25	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	24	obj	24:obj	SpaceAfter=No
26	,	,	PUNCT	Z:-------------	_	27	punct	27:punct	_
27	nerozhodnou-li	nerozhodnou-li	X	X@-------------	_	8	obl	8:obl	_
28	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	27	expl:pv	27:expl:pv	_
29	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	27	xcomp	27:xcomp	LId=vést-1
30	účetnictví	účetnictví	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing	29	obj	29:obj	_
31	již	již	ADV	Db-------------	_	33	advmod:emph	33:advmod:emph	_
32	ode	od	ADP	RV--2----------	AdpType=Voc|Case=Gen	33	case	33:case	LId=od-1
33	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	29	obl	29:obl:od:gen	_
34	zahájení	zahájení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	33	nmod	33:nmod:gen	_
35	podnikání	podnikání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	34	nmod	34:nmod:gen	_
36	nebo	nebo	CCONJ	J^-------------	_	40	cc	40:cc	_
37	jiné	jiný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	40	amod	40:amod	_
38	samostatné	samostatný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	40	amod	40:amod	_
39	výdělečné	výdělečný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	40	amod	40:amod	_
40	činnosti	činnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	35	conj	34:nmod:gen|35:conj	SpaceAfter=No
41	,	,	PUNCT	Z:-------------	_	44	punct	44:punct	_
42	až	až	PART	TT-------------	_	44	advmod:emph	44:advmod:emph	LId=až-3
43	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	44	case	44:case	LId=do-1
44	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	29	obl	29:obl:do:gen	_
45	ukončení	ukončení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	44	nmod	44:nmod:gen	_
46	uvedených	uvedený	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	47	amod	47:amod	_
47	činností	činnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	45	nmod	45:nmod:gen	_
48	nebo	nebo	CCONJ	J^-------------	_	44	cc	44:cc	_
49	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	51	case	51:case	LId=do-1
50	posledního	poslední	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	51	amod	51:amod	_
51	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	44	obl	44:obl:do:gen	_
52	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	53	amod	53:amod	LId=účetní-1
53	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	51	nmod	51:nmod:gen|58:obl:v:loc	SpaceAfter=No
54	,	,	PUNCT	Z:-------------	_	58	punct	58:punct	_
55	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	56	case	56:case	LId=v-1
56	kterém	který	DET	P4ZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	58	obl	53:ref	_
57	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	58	expl:pv	58:expl:pv	_
58	rozhodly	rozhodnout	VERB	VpTP---XR-AA--1	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	53	acl:relcl	53:acl:relcl	_
59	vedení	vedení	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing	61	obl:arg	61:obl:arg:dat	_
60	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	59	nmod	59:nmod:gen	_
61	ukončit	ukončit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	58	xcomp	58:xcomp	SpaceAfter=No
62	,	,	PUNCT	Z:-------------	_	64	punct	64:punct	_
63	a	a	CCONJ	J^-------------	_	64	cc	64:cc	LId=a-1
64	nevznikla-li	nevznikla-li	X	X@-------------	_	27	conj	8:obl|27:conj	_
65	jim	on	PRON	PPXP3--3-------	Case=Dat|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	64	obl:arg	64:obl:arg:dat	LId=on-1
66	povinnost	povinnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	64	nsubj	64:nsubj	_
67	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	66	acl	66:acl	LId=vést-1
68	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	67	obj	67:obj	_
69	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	70	case	70:case	LId=podle-2
70	§_1_odst._2_písm._d),_e),_g)	§_1_odst._2_písm._d),_e),_g)	X	X@-------------	_	67	obl	67:obl:podle:gen	_
71	nebo	nebo	CCONJ	J^-------------	_	72	cc	72:cc	_
72	h)	h)	X	X@-------------	_	70	conj	67:obl:podle:gen|70:conj	SpaceAfter=No
73	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


