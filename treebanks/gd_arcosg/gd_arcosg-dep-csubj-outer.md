---
layout: base
title:  'Statistics of csubj:outer in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `csubj:outer`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `csubj`: <tt><a href="gd_arcosg-dep-csubj-cleft.html">csubj:cleft</a></tt>, <tt><a href="gd_arcosg-dep-csubj-cop.html">csubj:cop</a></tt>.

5 nodes (0%) are attached to their parents as `csubj:outer`.

5 instances of `csubj:outer` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.8.

The following 4 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (2; 40% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 16 csubj:outer	color:blue
1	B'	is	AUX	Ws	Tense=Past	6	cop	_	_
2	an	an	ADP	Sp	_	1	fixed	_	_
3	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	1	fixed	_	_
4	nuair	nuair	SCONJ	Cs	_	6	mark	_	_
5	a	a	PART	Q-r	PartType=Vb|PronType=Rel	6	mark:prt	_	_
6	bha	bi	VERB	V-s	Tense=Past	0	root	_	_
7	Uilleam	Uilleam	PROPN	Nn-mn	Case=Nom|Gender=Masc	6	nsubj	_	_
8	is	is	CCONJ	Cc	_	9	cc	_	_
9	Màiri	Màiri	PROPN	Nn-fn	Case=Nom|Gender=Fem	6	conj	_	_
10	Anna	Anna	PROPN	Nn-fn	Case=Nom|Gender=Fem	9	flat:name	_	_
11	pòsda	pòs	ADJ	Av	_	6	xcomp:pred	_	_
12	ann	an	ADP	Sp	_	14	case	_	_
13	an	an	ADP	Sp	_	12	fixed	_	_
14	Glaschu	Glaschu	PROPN	Nt	_	11	obl	_	_
15	a	a	PART	Q-r	PartType=Vb|PronType=Rel	16	advmod	_	_
16	chuireadh	cuir	VERB	V-s0	Person=0|Tense=Past	6	csubj:outer	_	_
17	eòlas	eòlas	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	16	nsubj	_	_
18	an	an	ADV	Rt	_	16	advmod	_	_
19	toiseach	toiseach	ADV	Rt	_	18	fixed	_	_
20	air	air	ADP	Sp	_	21	case	_	_
21	iad	iad	PRON	Pp3p	Number=Plur|Person=3	16	obl	_	_
22	.	.	PUNCT	Fe	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 csubj:outer	color:blue
1	Agus	agus	CCONJ	Cc	_	2	cc	_	_
2	bha	bi	VERB	V-s	Tense=Past	0	root	_	_
3	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
4	fhéin	féin	PRON	Px	Reflex=Yes	3	nmod	_	_
5	a'	ag	PART	Sa	_	6	case	_	_
6	smaoineachadh	smaoinich	NOUN	Nv	VerbForm=Vnoun	2	xcomp:pred	_	_
7	nach	nach	PART	Qn	PartType=Cmpl|Polarity=Neg	9	mark:prt	_	_
8	b'	is	AUX	Ws	Tense=Past	9	cop	_	_
9	urrainn	urrainn	NOUN	Uf	_	6	ccomp	_	_
10	saighead	saighead	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
11	a	a	PART	Ug	PartType=Inf	12	mark:prt	_	_
12	bhith	bi	NOUN	Nv	VerbForm=Inf	9	csubj:outer	_	_
13	na	na	PART	Uc	PartType=Comp	15	mark:prt	_	_
14	b'	b'	PART	Uc	PartType=Comp	13	fixed	_	_
15	fhearr	math	ADJ	Apc	Degree=Cmp,Sup	16	amod	_	_
16	cuimis	cuimis	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	12	nsubj	_	SpaceAfter=No
17	,	,	PUNCT	Fi	_	20	punct	_	_
18	agus	agus	CCONJ	Cc	_	20	cc	_	_
19	chan	cha	PART	Qn	PartType=Vb|Polarity=Neg	20	mark:prt	_	_
20	eil	bi	VERB	V-p--d	Tense=Pres	9	conj	_	_
21	agads'	aig	ADP	Sp	_	22	case	_	_
22	thusa	thu	PRON	Pp2s--e	Form=Emp|Number=Sing|Person=2	20	xcomp:pred	_	_
23	,	,	PUNCT	Fi	_	20	punct	_	SpaceAfter=No
24	"	"	PUNCT	Fz	_	20	punct	_	_
25	as	arsa	VERB	V-s	Tense=Past	2	parataxis	_	_
26	ise	i	PRON	Pp3sf-e	Form=Emp|Gender=Fem|Number=Sing|Person=3	25	nsubj	_	SpaceAfter=No
27	,	,	PUNCT	Fi	_	25	punct	_	_
28	“	“	PUNCT	Fq	_	31	punct	_	SpaceAfter=No
29	on	on	SCONJ	Cs	_	31	mark	_	_
30	a	a	PART	Q-r	PartType=Vb|PronType=Rel	31	mark:prt	_	_
31	tha	bi	VERB	V-p	Tense=Pres	2	parataxis	_	_
32	thu	thu	PRON	Pp2s	Number=Sing|Person=2	31	nsubj	_	_
33	'dol	rach	NOUN	Nv	VerbForm=Vnoun	31	xcomp:pred	_	_
34	a	a	PART	Ug	PartType=Inf	35	mark:prt	_	_
35	dh’fhalbh	falbh	NOUN	Nv	VerbForm=Inf	33	xcomp	_	_
36	'na	an	ADP	Sp	_	38	case	_	_
37	do	do	DET	Dp2s	Number=Sing|Person=2|Poss=Yes	38	nmod:poss	_	_
38	bhuachaille	buachaille	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	35	obl	_	_
39	cruidh	cruidh	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	38	nmod	_	_
40	tuathanaich	tuathanach	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	38	nmod	_	SpaceAfter=No
41	,	,	PUNCT	Fi	_	44	punct	_	_
42	ach	ach	CCONJ	Cc	_	44	cc	_	_
43	na	na	PART	Qnm	PartType=Vb|Polarity=Neg	44	mark:prt	_	_
44	dealaich	dealaich	VERB	Vm-2s	Mood=Imp|Person=2	2	parataxis	_	_
45	ris	ri	ADP	Sp	_	47	case	_	_
46	an	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	47	det	_	_
47	t-saighead	saighead	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	44	obl	_	_
48	's	's	CCONJ	Cc	_	51	cc	_	_
49	ris	ri	ADP	Sp	_	51	case	_	_
50	an	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	51	det	_	_
51	fheadan	feadan	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	47	conj	_	_
52	agus	agus	CCONJ	Cc	_	53	cc	_	_
53	faodaidh	faod	VERB	V-f	Tense=Fut	44	conj	_	_
54	gun	gu	PART	Qa	PartType=Cmpl	55	mark:prt	_	_
55	dèan	dèan	VERB	V-f--d	Tense=Fut	53	ccomp	_	_
56	iad	iad	PRON	Pp3p	Number=Plur|Person=3	55	nsubj	_	_
57	mór	mór	ADJ	Ar	_	58	amod	_	_
58	fheum	feum	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	55	obj	_	_
59	do	do	ADP	Sp	_	60	case	_	_
60	thu	thu	PRON	Pp2s	Number=Sing|Person=2	55	obl	_	_
61	.	.	PUNCT	Fe	_	44	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 18 csubj:outer	color:blue
1	cha	cha	PART	Qn	PartType=Vb|Polarity=Neg	2	mark:prt	_	_
2	thachair	tachair	VERB	V-f--d	Tense=Fut	0	root	_	_
3	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
4	a	a	ADV	Rt	_	2	advmod	_	_
5	chaoidh	chaoidh	ADV	Rt	_	4	fixed	_	_
6	agus	agus	CCONJ	Cc	_	7	cc	_	_
7	tha	bi	VERB	V-p	Tense=Pres	2	conj	_	_
8	fhios	fios	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
9	aig	aig	ADP	Sp	_	10	case	_	_
10	thu	thu	PRON	Pp2s	Number=Sing|Person=2	7	xcomp:pred	_	_
11	gur	is	AUX	Wpdia	Polarity=Aff|Tense=Pres	13	cop	_	_
12	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	11	fixed	_	_
13	seo	seo	PRON	Pd	_	8	acl	_	_
14	an	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	seòrsa	seòrsa	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
16	rud	rud	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	15	nmod	_	_
17	a	a	PART	Q-r	PartType=Vb|PronType=Rel	18	obj	_	_
18	bhios	bi	VERB	V-f--r	Tense=Fut	13	csubj:outer	_	_
19	daoine	duine	NOUN	Ncpmn	Case=Nom|Gender=Masc|Number=Plur	18	nsubj	_	_
20	an	an	ADV	Rs	_	19	advmod	_	_
21	seo	seo	ADV	Rs	_	20	fixed	_	_
22	mu	mu	ADP	Sp	_	24	case	_	_
23	dheidhinn	deidhinn	ADP	Nf	_	22	fixed	_	_
24	seo	seo	PRON	Pd	_	18	xcomp:pred	_	_
25	an	an	ADV	Rt	_	18	advmod	_	_
26	dràsda	dràsda	ADV	Rt	_	25	fixed	_	_
27	cabhsair	cabhsair	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	24	appos	_	_
28	eadar	eadar	ADP	Sp	_	30	case	_	_
29	na	an	DET	Tdpf	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	30	det	_	_
30	Hearadh	Hearadh	PROPN	Nt	_	27	nmod	_	_
31	agus	agus	CCONJ	Cc	_	32	cc	_	_
32	Uibhist-a-Tuath	Uibhist-a-Tuath	PROPN	Nt	_	30	conj	_	_

~~~


