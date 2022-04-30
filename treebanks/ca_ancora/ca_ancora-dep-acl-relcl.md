---
layout: base
title:  'Statistics of acl:relcl in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ca_ancora-dep-acl.html">acl</a></tt>.

21 nodes (0%) are attached to their parents as `acl:relcl`.

21 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.38095238095238.

The following 7 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (10; 48% instances), <tt><a href="ca_ancora-pos-DET.html">DET</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (6; 29% instances), <tt><a href="ca_ancora-pos-DET.html">DET</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 29 acl:relcl	color:blue
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	_
2	marxa	marxa	NOUN	ncfs000	Gender=Fem|Number=Sing	22	nsubj	22:nsubj	SpaceAfter=No|ClusterId=CESS-CAT-AAP-20001226-22191-s4.sn.2|ClusterType=Gen|MentionSpan=1-20|MentionMisc=HomoDD
3	,	,	PUNCT	fc	PunctType=Comm	4	punct	4:punct	_
4	abans	abans	ADV	rg	_	2	advmod	2:advmod	_
5	d'	de	ADP	sps00	_	6	mark	6:mark	SpaceAfter=No
6	enregistrar	enregistrar	VERB	vmn0000	VerbForm=Inf	4	advcl	4:advcl	_
7	'	'	PUNCT	fz	PunctType=Quot	8	punct	8:punct	SpaceAfter=No
8	Mentre	Mentre	CCONJ	np0000a	_	6	obj	6:obj	MWE=Mentre_dormies|MWEPOS=PROPN|ClusterId[1]=CESS-CAT-AAP-20001226-22191-c17|ClusterType[1]=Spec.other|MentionSpan[1]=7-10|ClusterId[2]=CESS-CAT-AAP-20001226-22191-c11|ClusterType[2]=|MentionSpan[2]=7-13
9	dormies	dormies	PROPN	_	_	8	flat	8:flat	SpaceAfter=No
10	'	'	PUNCT	fz	PunctType=Quot	8	punct	8:punct	_
11	(	(	PUNCT	fpa	PunctSide=Ini|PunctType=Brck	12	punct	12:punct	SpaceAfter=No
12	1999	1999	NOUN	_	AdvType=Tim	8	appos	8:appos	SpaceAfter=No|ClusterId=CESS-CAT-AAP-20001226-22191-c18|ClusterType=Spec.date|MentionSpan=11-13
13	)	)	PUNCT	fpt	PunctSide=Fin|PunctType=Brck	12	punct	12:punct	SpaceAfter=No
14	,	,	PUNCT	fc	PunctType=Comm	4	punct	4:punct	_
15	de	de	ADP	spcms	_	18	case	18:case	_
16	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	18:det	_
17	seu	seu	DET	dp3ms0	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	18	det	18:det	ClusterId=CESS-CAT-AAP-20001226-22191-c3|ClusterType=Spec.organization|MentionSpan=17|MentionMisc=ClusterTypeMismatch:Spec:Spec.organization,CorefType:ident
18	compositor	compositor	NOUN	ncms000	Gender=Masc|Number=Sing	2	nmod	2:nmod	ClusterId=CESS-CAT-AAP-20001226-22191-s4.sn.32|ClusterType=Spec.person|MentionSpan=17-20
19	Jordi	Jordi	PROPN	np0000p	_	18	appos	18:appos	MWE=Jordi_Garrós|MWEPOS=PROPN|ClusterId=CESS-CAT-AAP-20001226-22191-s4.sn.37|ClusterType=Spec.person|MentionSpan=19-20
20	Garrós	Garrós	PROPN	_	_	19	flat	19:flat	_
21	va	anar	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	aux	22:aux	_
22	suposar	suposar	VERB	vmn0000	VerbForm=Inf	0	root	0:root	ClusterId=CESS-CAT-AAP-20001226-22191-c6|ClusterType=|MentionSpan=1-30
23	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	24:det	_
24	daltabaix	daltabaix	NOUN	ncms000	Gender=Masc|Number=Sing	22	obj	22:obj	ClusterId=CESS-CAT-AAP-20001226-22191-s4.sn.43|ClusterType=Gen|MentionSpan=23-29|MentionMisc=HomoDD
25	més	més	ADV	rg	Degree=Cmp	26	advmod	26:advmod	_
26	gran	gran	ADJ	aq0cs0	Number=Sing	24	amod	24:amod	_
27	que	que	PRON	pr0cn000	PronType=Rel	29	obj	29:obj	_
28	han	haver	AUX	vaip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	29	aux	29:aux	_
29	patit	patir	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	24	acl:relcl	24:acl:relcl	SpaceAfter=No
30	.	.	PUNCT	fp	PunctType=Peri	22	punct	22:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl:relcl	color:blue
1	"	"	PUNCT	fe	PunctType=Quot	3	punct	3:punct	SpaceAfter=No
2	Així	així	ADV	rg	_	3	advmod	3:advmod	_
3	veuran	veure	VERB	vmif3p0	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	22	ccomp	22:ccomp	_
4	que	que	SCONJ	cs	_	18	mark	18:mark	SpaceAfter=No
5	,	,	PUNCT	fc	PunctType=Comm	6	punct	6:punct	_
6	contràriament	contràriament	ADV	spcms	_	18	advmod	18:advmod	MWE=contràriament_al|MWEPOS=ADP
7	a	a	ADP	_	_	8	case	8:case	_
8	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	obl	6:obl	_
9	que	que	PRON	pr0cn000	PronType=Rel	10	obj	10:obj	_
10	diu	dir	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	acl:relcl	8:acl:relcl	ClusterId=CESS-CAT-AAP-20020502-26-s10.sn.17|ClusterType=Gen|MentionSpan=9-12|MentionMisc=HomoDD
11	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	12:det	_
12	premsa	premsa	NOUN	ncfs000	Gender=Fem|Number=Sing	10	nsubj	10:nsubj	SpaceAfter=No|ClusterId=CESS-CAT-AAP-20020502-26-s10.sn.24|ClusterType=Gen|MentionSpan=11-12|MentionMisc=HomoDD
13	,	,	PUNCT	fc	PunctType=Comm	6	punct	6:punct	_
14	no	no	ADV	rn	Polarity=Neg	18	advmod	18:advmod	_
15	som	ser	AUX	vsip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	18	cop	18:cop	_
16	en	en	ADP	rg	_	18	advmod	18:advmod	MWE=en_absolut|MWEPOS=ADV
17	absolut	absolut	NOUN	_	_	16	fixed	16:fixed	_
18	perillosos	perillós	ADJ	aq0mp0	Gender=Masc|Number=Plur	3	ccomp	3:ccomp	SpaceAfter=No
19	"	"	PUNCT	fe	PunctType=Quot	3	punct	3:punct	SpaceAfter=No
20	,	,	PUNCT	fc	PunctType=Comm	3	punct	3:punct	_
21	va	anar	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	aux	22:aux	_
22	assenyalar	assenyalar	VERB	vmn0000	VerbForm=Inf	0	root	0:root	_
23	un	un	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	24	det	24:det	_
24	responsable	responsable	NOUN	nccs000	Number=Sing	22	nsubj	22:nsubj	ClusterId=CESS-CAT-AAP-20020502-26-s10.sn.45|ClusterType=Gen|MentionSpan=23-29
25	de	de	ADP	spcms	_	27	case	27:case	_
26	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	27:det	_
27	servei	servei	NOUN	ncms000	Gender=Masc|Number=Sing	24	nmod	24:nmod	ClusterId=CESS-CAT-AAP-20020502-26-s10.sn.53|ClusterType=Gen|MentionSpan=27-29|MentionMisc=HomoDD
28	d'	de	ADP	sps00	_	29	case	29:case	SpaceAfter=No
29	ordre	ordre	NOUN	ncfs000	Gender=Fem|Number=Sing	27	nmod	27:nmod	SpaceAfter=No
30	.	.	PUNCT	fp	PunctType=Peri	22	punct	22:punct	_

~~~


~~~ conllu
# visual-style 49	bgColor:blue
# visual-style 49	fgColor:white
# visual-style 48	bgColor:blue
# visual-style 48	fgColor:white
# visual-style 48 49 acl:relcl	color:blue
1	Però	però	CCONJ	cc	_	9	cc	9:cc	SpaceAfter=No
2	,	,	PUNCT	fc	PunctType=Comm	5	punct	5:punct	_
3	en	en	ADP	sps00	_	5	case	5:case	_
4	aquesta	aquest	DET	dd0fs0	Gender=Fem|Number=Sing|PronType=Dem	5	det	5:det	_
5	ocasió	ocasió	NOUN	ncfs000	Gender=Fem|Number=Sing	9	obl	9:obl	SpaceAfter=No|ClusterId=CESS-CAT-AAP-20020901-9_b-c48|ClusterType=Gen|MentionSpan=4-5|MentionMisc=CorefType:ident
6	,	,	PUNCT	fc	PunctType=Comm	5	punct	5:punct	_
7	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	8:det	_
8	novetat	novetat	NOUN	ncfs000	Gender=Fem|Number=Sing	9	nsubj	9:nsubj	ClusterId=CESS-CAT-AAP-20020901-9_b-c47|ClusterType=Gen|MentionSpan=7-8|MentionMisc=HomoDD
9	existeix	existir	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
10	,	,	PUNCT	fc	PunctType=Comm	12	punct	12:punct	_
11	i	i	CCONJ	cc	_	12	cc	12:cc	_
12	consisteix	consistir	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	conj	9:conj	_
13	precisament	precisament	ADV	rg	_	12	advmod	12:advmod	_
14	en	en	ADP	sps00	_	16	case	16:case	_
15	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	16:det	_
16	fet	fet	NOUN	ncms000	Gender=Masc|Number=Sing	12	obj	12:obj	ClusterId=CESS-CAT-AAP-20020901-9_b-s20.sn.35|ClusterType=Gen|MentionSpan=15-57|MentionMisc=HomoDD
17	que	que	SCONJ	cs	_	32	mark	32:mark	SpaceAfter=No
18	,	,	PUNCT	fc	PunctType=Comm	17	punct	17:punct	_
19	per	per	ADP	sps00	_	21	case	21:case	_
20	primera	primer	ADJ	ao0fs0	Gender=Fem|Number=Sing|NumType=Ord	21	amod	21:amod	_
21	vegada	vegada	NOUN	ncfs000	Gender=Fem|Number=Sing	32	obl	32:obl	_
22	en	en	ADP	sps00	_	26	case	26:case	_
23	els	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	25	det	25:det	_
24	últims	últim	ADJ	ao0mp0	Gender=Masc|Number=Plur|NumType=Ord	25	amod	25:amod	_
25	25	25	NUM	_	NumForm=Digit|NumType=Card	26	nummod	26:nummod	_
26	anys	any	NOUN	ncmp000	Gender=Masc|Number=Plur	32	obl	32:obl	ClusterId=CESS-CAT-AAP-20020901-9_b-s20.sn.56|ClusterType=Gen|MentionSpan=23-29|MentionMisc=HomoDD
27	de	de	ADP	sps00	_	28	case	28:case	_
28	democràcia	democràcia	NOUN	ncfs000	Gender=Fem|Number=Sing	26	nmod	26:nmod	_
29	constitucional	constitucional	ADJ	aq0cs0	Number=Sing	28	amod	28:amod	SpaceAfter=No
30	,	,	PUNCT	fc	PunctType=Comm	26	punct	26:punct	_
31	ens	jo	PRON	p010p000	Case=Acc,Dat|Number=Plur|Person=1|PronType=Prs	32	obj	32:obj	_
32	trobem	trobar	VERB	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	16	acl	16:acl	_
33	davant	davant	ADV	rg	_	32	obj	32:obj	_
34	d'	de	ADP	sps00	_	36	case	36:case	SpaceAfter=No
35	una	un	DET	di0fs0	Gender=Fem|Number=Sing|PronType=Ind	36	det	36:det	_
36	iniciativa	iniciativa	NOUN	ncfs000	Gender=Fem|Number=Sing	33	obl	33:obl	ClusterId=CESS-CAT-AAP-20020901-9_b-c48|ClusterType=Gen|MentionSpan=35-57
37	insòlita	insòlit	ADJ	aq0fs0	Gender=Fem|Number=Sing	36	amod	36:amod	SpaceAfter=No
38	,	,	PUNCT	fc	PunctType=Comm	40	punct	40:punct	_
39	que	que	PRON	pr0cn000	PronType=Rel	40	nsubj	40:nsubj	ClusterId=CESS-CAT-AAP-20020901-9_b-c48|ClusterType=Gen|MentionSpan=39|MentionMisc=CorefType:ident
40	suposa	suposar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	36	acl	36:acl	_
41	una	un	DET	di0fs0	Gender=Fem|Number=Sing|PronType=Ind	43	det	43:det	_
42	autèntica	autèntic	ADJ	aq0fs0	Gender=Fem|Number=Sing	43	amod	43:amod	_
43	solució	solució	NOUN	ncfs000	Gender=Fem|Number=Sing	40	obj	40:obj	ClusterId=CESS-CAT-AAP-20020901-9_b-s20.sn.98|ClusterType=Gen|MentionSpan=41-45
44	de	de	ADP	sps00	_	45	case	45:case	_
45	continuïtat	continuïtat	NOUN	ncfs000	Gender=Fem|Number=Sing	43	nmod	43:nmod	_
46	respecte	respecte	NOUN	spcms	_	48	case	48:case	MWE=respecte_al|MWEPOS=ADP
47	a	a	ADP	_	_	46	fixed	46:fixed	_
48	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	45	nmod	45:nmod	_
49	que	que	PRON	cs	PronType=Rel	48	acl:relcl	48:acl:relcl	_
50	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	51	det	51:det	_
51	lluita	lluita	NOUN	ncfs000	Gender=Fem|Number=Sing	49	nsubj	49:nsubj	ClusterId=CESS-CAT-AAP-20020901-9_b-c49|ClusterType=Gen|MentionSpan=50-52|MentionMisc=HomoDD
52	antiterrorista	antiterrorista	ADJ	aq0cs0	Number=Sing	51	amod	51:amod	_
53	havia	haver	AUX	vaii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	49	aux	49:aux	_
54	estat	estar	AUX	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	49	cop	49:cop	_
55	en	en	ADP	sps00	_	57	case	57:case	_
56	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	57	det	57:det	_
57	passat	passat	NOUN	ncms000	Gender=Masc|Number=Sing	49	obl	49:obl	SpaceAfter=No|ClusterId=CESS-CAT-AAP-20020901-9_b-c76|ClusterType=Gen|MentionSpan=56-57|MentionMisc=HomoDD
58	.	.	PUNCT	fp	PunctType=Peri	9	punct	9:punct	_

~~~


