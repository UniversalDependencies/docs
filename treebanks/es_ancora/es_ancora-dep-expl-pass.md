---
layout: base
title:  'Statistics of expl:pass in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="es_ancora-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="es_ancora-dep-expl-pv.html">expl:pv</a></tt>.

2232 nodes (0%) are attached to their parents as `expl:pass`.

2009 instances of `expl:pass` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26926523297491.

The following 3 pairs of parts of speech are connected with `expl:pass`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (2227; 100% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 expl:pass	color:blue
1	A	a	ADP	sps00	_	3	case	3:case	_
2	cada	cada	DET	di0cs0	Number=Sing|PronType=Tot	3	det	3:det	_
3	residente	residente	NOUN	nccs000	Number=Sing	9	obj	9:obj	_
4	de	de	ADP	spcms	_	6	case	6:case	_
5	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	_
6	campo	campo	NOUN	ncms000	Gender=Masc|Number=Sing	3	nmod	3:nmod	_
7	se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	9	expl:pass	9:expl:pass	_
8	le	él	PRON	pp3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	9	obj	9:obj	_
9	entrega	entregar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
10	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	det	11:det	_
11	cupón	cupón	NOUN	ncms000	Gender=Masc|Number=Sing	9	nsubj	9:nsubj	SpaceAfter=No
12	.	.	PUNCT	fp	PunctType=Peri	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 38 expl:pass	color:blue
1	Ello	él	PRON	pp3ns000	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	ClusterId=CESS-CAST-P-19990102-3-c32|ClusterType=|MentionSpan=1|MentionMisc=ClusterTypeMismatch:Gen:,CorefType:dx.prop
2	significa	significar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	que	que	SCONJ	cs	_	23	mark	23:mark	_
4	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	5:det	_
5	26	26	NUM	_	NumForm=Digit|NumType=Card	6	nummod	6:nummod	_
6	cents	cent	NOUN	ncmp000	Gender=Masc|Number=Plur	23	nsubj	23:nsubj	ClusterId=CESS-CAST-P-19990102-3-s16.sn.10|ClusterType=Spec.number|MentionSpan=4-22
7	de	de	ADP	sps00	_	8	case	8:case	_
8	diferencia	diferencia	NOUN	ncfs000	Gender=Fem|Number=Sing	6	nmod	6:nmod	_
9	entre	entre	ADP	sps00	_	12	case	12:case	_
10	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	12	det	12:det	_
11	dos	dos	NUM	dn0cp0	Number=Plur|NumType=Card	10	nummod	10:nummod	_
12	hamburguesas	hamburguesa	NOUN	ncfp000	Gender=Fem|Number=Plur	8	nmod	8:nmod	ClusterId=CESS-CAST-P-19990102-3-s16.sn.25|ClusterType=Gen|MentionSpan=10-22|MentionMisc=HomoDD
13	(	(	PUNCT	fpa	PunctSide=Ini|PunctType=Brck	14	punct	14:punct	SpaceAfter=No
14	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	12:det	_
15	de	de	ADP	sps00	_	14	case	14:case	_
16	Barcelona	Barcelona	PROPN	np00000	_	14	appos	14:appos	ClusterId=CESS-CAST-P-19990102-3-c13|ClusterType=Spec.location|MentionSpan=16|MentionMisc=CorefType:ident
17	y	y	CCONJ	cc	_	18	cc	18:cc	_
18	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	conj	14:conj	_
19	de	de	ADP	sps00	_	18	case	18:case	_
20	Berlín	Berlín	PROPN	np00000	_	18	appos	18:appos	SpaceAfter=No|ClusterId=CESS-CAST-P-19990102-3-c14|ClusterType=Spec.location|MentionSpan=20|MentionMisc=CorefType:ident
21	)	)	PUNCT	fpt	PunctSide=Fin|PunctType=Brck	14	punct	14:punct	SpaceAfter=No
22	,	,	PUNCT	fc	PunctType=Comm	14	punct	14:punct	_
23	equivalen	equivaler	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	2:ccomp	_
24	a	a	ADP	sps00	_	23	case	23:case	_
25	más	más	ADV	rg	Degree=Cmp	28	advmod	28:advmod	_
26	de	de	ADP	sps00	_	25	case	25:case	_
27	43	43	NUM	_	NumForm=Digit|NumType=Card	25	nummod	25:nummod	_
28	pesetas	peseta	NOUN	zm	NumForm=Digit	24	conj	24:conj	SpaceAfter=No|ClusterId[1]=CESS-CAST-P-19990102-3-s16.sn.62|ClusterType[1]=Spec.number|MentionSpan[1]=25-43|ClusterId[2]=CESS-CAST-P-19990102-3-s16.sn.63|ClusterType[2]=Spec.number|MentionSpan[2]=25-28
29	,	,	PUNCT	fc	PunctType=Comm	35	punct	35:punct	_
30	es	es	NOUN	cc	_	35	cc	35:cc	MWE=es_decir|MWEPOS=CCONJ
31	decir	decir	NOUN	_	_	30	fixed	30:fixed	SpaceAfter=No
32	,	,	PUNCT	fc	PunctType=Comm	30	punct	30:punct	_
33	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	35	det	35:det	_
34	mismo	mismo	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Dem	33	det	33:det	_
35	25%	25/100	SYM	zp	NumForm=Digit|NumType=Frac	24	conj	24:conj	ClusterId=CESS-CAST-P-19990102-3-c18|ClusterType=Spec.number|MentionSpan=33-43|MentionMisc=CorefType:ident
36	que	que	PRON	pr0cn000	PronType=Int,Rel	35	obl	35:obl	ClusterId=CESS-CAST-P-19990102-3-c18|ClusterType=Spec.number|MentionSpan=36|MentionMisc=ClusterTypeMismatch:Spec:Spec.number,CorefType:ident
37	si	si	SCONJ	cs	_	36	mark	36:mark	_
38	se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	36	expl:pass	36:expl:pass	_
39	hace	hacer	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	36	case	36:case	_
40	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	41	det	41:det	_
41	comparación	comparación	NOUN	ncfs000	Gender=Fem|Number=Sing	36	obj	36:obj	ClusterId=CESS-CAST-P-19990102-3-s16.sn.90|ClusterType=Gen|MentionSpan=40-41|MentionMisc=HomoDD
42	en	en	ADP	sps00	_	43	case	43:case	_
43	pesetas	peseta	NOUN	ncfp000	Gender=Fem|Number=Plur	36	obl	36:obl	SpaceAfter=No|ClusterId=CESS-CAST-P-19990102-3-c19|ClusterType=Gen|MentionSpan=43|MentionMisc=CorefType:ident
44	.	.	PUNCT	fp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 23 expl:pass	color:blue
1	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	2:det	_
2	grupo	grupo	NOUN	ncms000	Gender=Masc|Number=Sing	6	nsubj	6:nsubj	ClusterId=CESS-CAST-P-20020202-115-c2|ClusterType=Spec.organization|MentionSpan=1-3|MentionMisc=CorefType:ident
3	británico	británico	ADJ	aq0ms0	Gender=Masc|Number=Sing	2	amod	2:amod	_
4	se	él	PRON	p0300000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	expl:pv	6:expl:pv	_
5	ha	haber	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	6:aux	_
6	visto	ver	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
7	obligado	obligado	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	6	obj	6:obj	_
8	a	a	ADP	sps00	_	9	mark	9:mark	_
9	aplazar	aplazar	VERB	vmn0000	VerbForm=Inf	7	xcomp	7:xcomp	_
10	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	11:det	_
11	conciertos	concierto	NOUN	ncmp000	Gender=Masc|Number=Plur	9	obj	9:obj	ClusterId=CESS-CAST-P-20020202-115-c1|ClusterType=Gen|MentionSpan=10-42|MentionMisc=HomoDD
12	que	que	PRON	pr0cn000	PronType=Int,Rel	13	iobj	13:iobj	ClusterId=CESS-CAST-P-20020202-115-c1|ClusterType=Gen|MentionSpan=12|MentionMisc=CorefType:ident
13	tenía	tener	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	11	acl	11:acl	_
14	programados	programado	ADJ	aq0mpp	Gender=Masc|Number=Plur|VerbForm=Part	24	xcomp	24:xcomp	_
15	para	para	ADP	sps00	_	18	case	18:case	_
16	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	18:det	_
17	próximo	próximo	ADJ	aq0ms0	Gender=Masc|Number=Sing	18	amod	18:amod	_
18	martes	martes	NOUN	_	AdvType=Tim	24	obl	24:obl	ClusterId=CESS-CAST-P-20020202-115-s2.sn.43|ClusterType=Spec.date|MentionSpan=16-18
19	en	en	ADP	sps00	_	20	case	20:case	_
20	Razzmatazz	Razzmatazz	PROPN	np00000	_	24	obl	24:obl	ClusterId=CESS-CAST-P-20020202-115-s2.sn.54|ClusterType=Spec.location|MentionSpan=20
21	(	(	PUNCT	fpa	PunctSide=Ini|PunctType=Brck	22	punct	22:punct	SpaceAfter=No
22	que	que	PRON	pr0cn000	PronType=Int,Rel	24	nsubj:pass	24:nsubj:pass	ClusterId=CESS-CAST-P-20020202-115-c1|ClusterType=Gen|MentionSpan=22|MentionMisc=CorefType:ident
23	se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	14	expl:pass	14:expl:pass	_
24	pospone	posponer	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	ccomp	13:ccomp	_
25	a	a	ADP	spcms	_	27	case	27:case	_
26	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	27:det	_
27	25	25	NUM	_	NumForm=Digit|NumType=Card	24	obl	24:obl	MWE=25_de_abril|MWEPOS=NOUN|ClusterId=CESS-CAST-P-20020202-115-s2.sn.68|ClusterType=Spec.date|MentionSpan=27-29
28	de	de	ADP	_	_	29	case	29:case	_
29	abril	abril	NOUN	_	_	27	compound	27:compound	SpaceAfter=No
30	)	)	PUNCT	fpt	PunctSide=Fin|PunctType=Brck	35	punct	35:punct	_
31	y	y	CCONJ	cc	_	35	cc	35:cc	SpaceAfter=No
32	,	,	PUNCT	fc	PunctType=Comm	35	punct	35:punct	_
33	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	34	det	34:det	_
34	día	día	NOUN	ncms000	Gender=Masc|Number=Sing	35	obl	35:obl	_
35	después	después	ADV	rg	_	14	conj	14:conj	SpaceAfter=No
36	,	,	PUNCT	fc	PunctType=Comm	35	punct	35:punct	_
37	en	en	ADP	sps00	_	35	case	35:case	_
38	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	39	det	39:det	_
39	Sala	Sala	PROPN	np00000	_	35	nmod	35:nmod	MWE=Sala_Multiusos|MWEPOS=PROPN|ClusterId=CESS-CAST-P-20020202-115-s2.sn.89|ClusterType=Spec.location|MentionSpan=38-42
40	Multiusos	Multiusos	PROPN	_	_	39	flat	39:flat	_
41	de	de	ADP	sps00	_	42	case	42:case	_
42	Zaragoza	Zaragoza	PROPN	np00000	_	39	nmod	39:nmod	SpaceAfter=No|ClusterId=CESS-CAST-P-20020202-115-s2.sn.97|ClusterType=Spec.location|MentionSpan=42
43	.	.	PUNCT	fp	PunctType=Peri	6	punct	6:punct	_

~~~


