---
layout: base
title:  'Statistics of nmod:lmod in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `nmod:lmod`

This relation is a language-specific subtype of <tt><a href="it_old-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="it_old-dep-nmod-poss.html">nmod:poss</a></tt>.

3 nodes (0%) are attached to their parents as `nmod:lmod`.

3 instances of `nmod:lmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.33333333333333.

The following 3 pairs of parts of speech are connected with `nmod:lmod`: <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (1; 33% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 34 nmod:lmod	color:blue
1	E	e	CCONJ	cscc	_	11	cc	11:cc	Canto=7|Verso=36|UniqueTokenId=OldItalian_Dante_Inferno-241_1
2	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	11	nsubj	11:nsubj	Canto=7|SpaceAfter=No|Verso=36|UniqueTokenId=OldItalian_Dante_Inferno-241_2
3	,	,	PUNCT	_	_	9	punct	9:punct	UniqueTokenId=OldItalian_Dante_Inferno-241_3
4	ch'	che	PRON	pr	PronType=Rel	9	nsubj	9:nsubj	Canto=7|SpaceAfter=No|Verso=36|UniqueTokenId=OldItalian_Dante_Inferno-241_4
5	avea	avere	AUX	vta5iis1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	9	aux	9:aux	Canto=7|Verso=36|UniqueTokenId=OldItalian_Dante_Inferno-241_5
6	lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	Canto=7|Verso=36|UniqueTokenId=OldItalian_Dante_Inferno-241_6
7	cor	cuore	NOUN	sm3ms	Gender=Masc|Number=Sing	9	obj	9:obj	Canto=7|Verso=36|UniqueTokenId=OldItalian_Dante_Inferno-241_7
8	quasi	quasi	ADV	b	_	9	advmod	9:advmod	Canto=7|Verso=36|UniqueTokenId=OldItalian_Dante_Inferno-241_8
9	compunto	compungere	VERB	vta2pra1ms	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	2	acl:relcl	2:acl:relcl	Canto=7|SpaceAfter=No|Verso=36|UniqueTokenId=OldItalian_Dante_Inferno-241_9
10	,	,	PUNCT	_	_	2	punct	2:punct	UniqueTokenId=OldItalian_Dante_Inferno-241_10
11	dissi	dire	VERB	vta3irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=7|SpaceAfter=No|Verso=37|UniqueTokenId=OldItalian_Dante_Inferno-241_11
12	:	:	PUNCT	_	_	19	punct	19:punct	UniqueTokenId=OldItalian_Dante_Inferno-241_12
13	«	«	PUNCT	_	_	19	punct	19:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Inferno-241_13
14	Maestro	maestro	NOUN	sm2ms	Gender=Masc|Number=Sing	19	vocative	19:vocative	Canto=7|Verso=37|UniqueTokenId=OldItalian_Dante_Inferno-241_14
15	mio	mio	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	14	det:poss	14:det:poss	Canto=7|SpaceAfter=No|Verso=37|UniqueTokenId=OldItalian_Dante_Inferno-241_15
16	,	,	PUNCT	_	_	14	punct	14:punct	UniqueTokenId=OldItalian_Dante_Inferno-241_16
17	or	ora	ADV	cscn	_	19	advmod:tmod	19:advmod:tmod	Canto=7|Verso=37|UniqueTokenId=OldItalian_Dante_Inferno-241_17
18	mi	mi	PRON	pp1syda	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	19	iobj	19:iobj	Canto=7|Verso=37|UniqueTokenId=OldItalian_Dante_Inferno-241_18
19	dimostra	dimostrare	VERB	vta1mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	11	ccomp:reported	11:ccomp:reported	Canto=7|Verso=37|UniqueTokenId=OldItalian_Dante_Inferno-241_19
20	che	che	SCONJ	at	_	23	mark	23:mark	Canto=7|Verso=38|UniqueTokenId=OldItalian_Dante_Inferno-241_20
21	gente	gente	NOUN	sf3fs	Gender=Fem|Number=Sing	23	nsubj	23:nsubj	Canto=7|Verso=38|UniqueTokenId=OldItalian_Dante_Inferno-241_21
22	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	cop	23:cop	Canto=7|Verso=38|UniqueTokenId=OldItalian_Dante_Inferno-241_22
23	questa	questo	PRON	pd1fs	Gender=Fem|Number=Sing|Person=1|PronType=Dem	19	ccomp	19:ccomp	Canto=7|SpaceAfter=No|Verso=38|UniqueTokenId=OldItalian_Dante_Inferno-241_23
24	,	,	PUNCT	_	_	29	punct	29:punct	UniqueTokenId=OldItalian_Dante_Inferno-241_24
25	e	e	CCONJ	cscc	_	29	cc	29:cc	Canto=7|Verso=38|UniqueTokenId=OldItalian_Dante_Inferno-241_25
26	se	se	SCONJ	cssi	_	29	mark	29:mark	Canto=7|Verso=38|UniqueTokenId=OldItalian_Dante_Inferno-241_26
27	tutti	tutto	DET	ai1mp	Gender=Masc|Number=Plur|PronType=Tot	30	det	30:det	Canto=7|Verso=38|UniqueTokenId=OldItalian_Dante_Inferno-241_27
28	fuor	essere	AUX	vi4irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	30	cop	30:cop	Canto=7|Verso=38|UniqueTokenId=OldItalian_Dante_Inferno-241_28
29	cherci	chierico	NOUN	sm2mp	Gender=Masc|Number=Plur	19	conj	19:conj	Canto=7|Verso=38|UniqueTokenId=OldItalian_Dante_Inferno-241_29
30	questi	questo	DET	ad1mp	Gender=Masc|Number=Plur|PronType=Dem	29	nsubj	29:nsubj	Canto=7|Verso=39|UniqueTokenId=OldItalian_Dante_Inferno-241_30
31	chercuti	chiercuto	ADJ	a1mp	Gender=Masc|Number=Plur	30	amod	30:amod	Canto=7|Verso=39|UniqueTokenId=OldItalian_Dante_Inferno-241_31
32	a	a	ADP	epsksl	_	34	case	34:case	Canto=7|Verso=39|UniqueTokenId=OldItalian_Dante_Inferno-241_32
33	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	34	det	34:det	Canto=7|Verso=39|UniqueTokenId=OldItalian_Dante_Inferno-241_33
34	sinistra	sinistra	NOUN	sf1fs	Gender=Fem|Number=Sing	30	nmod:lmod	30:nmod:lmod	Canto=7|Verso=39|UniqueTokenId=OldItalian_Dante_Inferno-241_34
35	nostra	nostro	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	34	det:poss	34:det:poss	Canto=7|SpaceAfter=No|Verso=39|UniqueTokenId=OldItalian_Dante_Inferno-241_35
36	»	»	PUNCT	_	_	19	punct	19:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Inferno-241_36
37	.	.	PUNCT	_	_	19	punct	19:punct	UniqueTokenId=OldItalian_Dante_Inferno-241_37

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 nmod:lmod	color:blue
1	Qual	quale	DET	ar	Number=Sing|PronType=Rel	4	det	4:det	Canto=12|Verso=4|UniqueTokenId=OldItalian_Dante_Inferno-413_1
2	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	Canto=12|Verso=4|UniqueTokenId=OldItalian_Dante_Inferno-413_2
3	quella	quello	DET	ad1fs	Gender=Fem|Number=Sing|PronType=Dem	4	det	4:det	Canto=12|Verso=4|UniqueTokenId=OldItalian_Dante_Inferno-413_3
4	ruina	rovina	NOUN	sf1fs	Gender=Fem|Number=Sing	54	advcl:cmp	54:advcl:cmp	Canto=12|Verso=4|UniqueTokenId=OldItalian_Dante_Inferno-413_4
5	che	che	PRON	pr	PronType=Rel	15	nsubj	15:nsubj	Canto=12|Verso=4|UniqueTokenId=OldItalian_Dante_Inferno-413_5
6	in	in	ADP	_	_	8	case	8:case	Canto=12|Comment=ne-l|Verso=4|UniqueTokenId=OldItalian_Dante_Inferno-413_6
7	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	8:det	Canto=12|Comment=ne-l|Verso=4|UniqueTokenId=OldItalian_Dante_Inferno-413_7
8	fianco	fianco	NOUN	sm2ms	Gender=Masc|Number=Sing	15	obl:lmod	15:obl:lmod	Canto=12|Verso=4|UniqueTokenId=OldItalian_Dante_Inferno-413_8
9	di	di	ADP	_	_	10	case	10:case	Canto=12|Verso=5|UniqueTokenId=OldItalian_Dante_Inferno-413_9
10	qua	qua	ADV	_	_	12	advmod:lmod	12:advmod:lmod	Canto=12|Verso=5|UniqueTokenId=OldItalian_Dante_Inferno-413_10
11	da	da	ADP	_	_	12	case	12:case	Canto=12|Verso=5|UniqueTokenId=OldItalian_Dante_Inferno-413_11
12	Trento	Trento	PROPN	np	_	8	nmod:lmod	8:nmod:lmod	Canto=12|Verso=5|UniqueTokenId=OldItalian_Dante_Inferno-413_12
13	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	14:det	Canto=12|SpaceAfter=No|Verso=5|UniqueTokenId=OldItalian_Dante_Inferno-413_13
14	Adice	Adige	PROPN	np	_	15	obj	15:obj	Canto=12|Verso=5|UniqueTokenId=OldItalian_Dante_Inferno-413_14
15	percosse	percuotere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	4:acl:relcl	Canto=12|SpaceAfter=No|Verso=5|UniqueTokenId=OldItalian_Dante_Inferno-413_15
16	,	,	PUNCT	_	_	19	punct	19:punct	UniqueTokenId=OldItalian_Dante_Inferno-413_16
17	o	o	CCONJ	cscr	_	19	cc	19:cc	Canto=12|Verso=6|UniqueTokenId=OldItalian_Dante_Inferno-413_17
18	per	per	ADP	epskr	_	19	case	19:case	Canto=12|Verso=6|UniqueTokenId=OldItalian_Dante_Inferno-413_18
19	tremoto	terrremoto	NOUN	sm2ms	Gender=Masc|Number=Sing	15	obl	15:obl	Canto=12|Verso=6|UniqueTokenId=OldItalian_Dante_Inferno-413_19
20	o	o	CCONJ	cscr	_	22	cc	22:cc	Canto=12|Verso=6|UniqueTokenId=OldItalian_Dante_Inferno-413_20
21	per	per	ADP	epskr	_	22	case	22:case	Canto=12|Verso=6|UniqueTokenId=OldItalian_Dante_Inferno-413_21
22	sostegno	sostegno	NOUN	sm2ms	Gender=Masc|Number=Sing	19	conj	19:conj	Canto=12|Verso=6|UniqueTokenId=OldItalian_Dante_Inferno-413_22
23	manco	manco	ADJ	a1ms	Gender=Masc|Number=Sing	22	amod	22:amod	Canto=12|SpaceAfter=No|Verso=6|UniqueTokenId=OldItalian_Dante_Inferno-413_23
24	,	,	PUNCT	_	_	43	punct	43:punct	UniqueTokenId=OldItalian_Dante_Inferno-413_24
25	che	che	SCONJ	cssu	_	43	mark	43:mark	Canto=12|Verso=7|UniqueTokenId=OldItalian_Dante_Inferno-413_25
26	da	da	ADP	epsk6	_	27	case	27:case	Canto=12|Verso=7|UniqueTokenId=OldItalian_Dante_Inferno-413_26
27	cima	cima	NOUN	sf1fs	Gender=Fem|Number=Sing	43	obl:lmod	43:obl:lmod	Canto=12|Verso=7|UniqueTokenId=OldItalian_Dante_Inferno-413_27
28	di	di	ADP	_	_	30	case	30:case	Canto=12|Comment=de-l|Verso=7|UniqueTokenId=OldItalian_Dante_Inferno-413_28
29	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	30:det	Canto=12|Comment=de-l|Verso=7|UniqueTokenId=OldItalian_Dante_Inferno-413_29
30	monte	monte	NOUN	sm3ms	Gender=Masc|Number=Sing	27	nmod	27:nmod	Canto=12|SpaceAfter=No|Verso=7|UniqueTokenId=OldItalian_Dante_Inferno-413_30
31	,	,	PUNCT	_	_	34	punct	34:punct	UniqueTokenId=OldItalian_Dante_Inferno-413_31
32	onde	onde	ADV	p	_	34	advmod	34:advmod	Canto=12|Verso=7|UniqueTokenId=OldItalian_Dante_Inferno-413_32
33	si	si	PRON	pf3yle	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	34	expl:pass	34:expl:pass	Canto=12|Verso=7|UniqueTokenId=OldItalian_Dante_Inferno-413_33
34	mosse	muovere	VERB	vta+2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	27	acl:relcl	27:acl:relcl	Canto=12|SpaceAfter=No|Verso=7|UniqueTokenId=OldItalian_Dante_Inferno-413_34
35	,	,	PUNCT	_	_	34	punct	34:punct	UniqueTokenId=OldItalian_Dante_Inferno-413_35
36	a	a	ADP	_	_	38	case	38:case	Canto=12|Comment=a-l|Verso=8|UniqueTokenId=OldItalian_Dante_Inferno-413_36
37	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	38	det	38:det	Canto=12|Comment=a-l|Verso=8|UniqueTokenId=OldItalian_Dante_Inferno-413_37
38	piano	piano	NOUN	sm2ms	Gender=Masc|Number=Sing	43	obl:lmod	43:obl:lmod	Canto=12|Verso=8|UniqueTokenId=OldItalian_Dante_Inferno-413_38
39	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	43	aux	43:aux	Canto=12|Verso=8|UniqueTokenId=OldItalian_Dante_Inferno-413_39
40	sì	così	ADV	b	_	43	advmod	43:advmod	Canto=12|Verso=8|UniqueTokenId=OldItalian_Dante_Inferno-413_40
41	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	42	det	42:det	Canto=12|Verso=8|UniqueTokenId=OldItalian_Dante_Inferno-413_41
42	roccia	roccia	NOUN	sf1fs	Gender=Fem|Number=Sing	43	nsubj	43:nsubj	Canto=12|Verso=8|UniqueTokenId=OldItalian_Dante_Inferno-413_42
43	discoscesa	discoscendere	VERB	vta2pra1fs	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	15	advcl	15:advcl	Canto=12|SpaceAfter=No|Verso=8|UniqueTokenId=OldItalian_Dante_Inferno-413_43
44	,	,	PUNCT	_	_	48	punct	48:punct	UniqueTokenId=OldItalian_Dante_Inferno-413_44
45	ch'	che	SCONJ	cssu	_	48	mark	48:mark	Canto=12|SpaceAfter=No|Verso=9|UniqueTokenId=OldItalian_Dante_Inferno-413_45
46	alcuna	alcuno	DET	ai	Gender=Fem|Number=Sing|PronType=Ind	47	det	47:det	Canto=12|Verso=9|UniqueTokenId=OldItalian_Dante_Inferno-413_46
47	via	via	NOUN	sf1fs	Gender=Fem|Number=Sing	48	obj	48:obj	Canto=12|Verso=9|UniqueTokenId=OldItalian_Dante_Inferno-413_47
48	darebbe	dare	VERB	vta1dps3	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|Voice=Act	43	advcl	43:advcl	Canto=12|Verso=9|UniqueTokenId=OldItalian_Dante_Inferno-413_48
49	a	a	ADP	epsk1d	_	50	case	50:case	Canto=12|Verso=9|UniqueTokenId=OldItalian_Dante_Inferno-413_49
50	chi	chi	PRON	pr	PronType=Rel	52	obl:arg	52:obl:arg	Canto=12|Verso=9|UniqueTokenId=OldItalian_Dante_Inferno-413_50
51	sù	su	ADV	b	_	52	advmod:lmod	52:advmod:lmod	Canto=12|Verso=9|UniqueTokenId=OldItalian_Dante_Inferno-413_51
52	fosse	essere	AUX	vi4cis3	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	48	advcl:relcl	48:advcl:relcl	Canto=12|SpaceAfter=No|Verso=9|UniqueTokenId=OldItalian_Dante_Inferno-413_52
53	:	:	PUNCT	_	_	4	punct	4:punct	UniqueTokenId=OldItalian_Dante_Inferno-413_53
54	cotal	cotale	PRON	pi2fs	Number=Sing|PronType=Ind	60	xcomp	60:xcomp	Canto=12|Verso=10|UniqueTokenId=OldItalian_Dante_Inferno-413_54
55	di	di	ADP	epskg	_	57	case	57:case	Canto=12|Verso=10|UniqueTokenId=OldItalian_Dante_Inferno-413_55
56	quel	quello	DET	ad1ms	Gender=Masc|Number=Sing|PronType=Dem	57	det	57:det	Canto=12|Verso=10|UniqueTokenId=OldItalian_Dante_Inferno-413_56
57	burrato	burrato	NOUN	sm2ms	Gender=Masc|Number=Sing	60	nmod	60:nmod	Canto=12|Verso=10|UniqueTokenId=OldItalian_Dante_Inferno-413_57
58	era	essere	AUX	vi4iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	60	cop	60:cop	Canto=12|Verso=10|UniqueTokenId=OldItalian_Dante_Inferno-413_58
59	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	60	det	60:det	Canto=12|Verso=10|UniqueTokenId=OldItalian_Dante_Inferno-413_59
60	scesa	scesa	NOUN	sf1fs	Gender=Fem|Number=Sing	0	root	0:root	Canto=12|SpaceAfter=No|Verso=10|UniqueTokenId=OldItalian_Dante_Inferno-413_60
61	;	;	PUNCT	_	_	76	punct	76:punct	UniqueTokenId=OldItalian_Dante_Inferno-413_61
62	e	e	CCONJ	cscc	_	76	cc	76:cc	Canto=12|Verso=11|UniqueTokenId=OldItalian_Dante_Inferno-413_62
63	'n	in	ADP	_	_	66	case	66:case	Canto=12|Verso=11|UniqueTokenId=OldItalian_Dante_Inferno-413_63
64	su	su	ADV	_	_	66	case	66:case	Canto=12|Verso=11|UniqueTokenId=OldItalian_Dante_Inferno-413_64
65	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	66	det	66:det	Canto=12|Verso=11|UniqueTokenId=OldItalian_Dante_Inferno-413_65
66	punta	punta	NOUN	sf1fs	Gender=Fem|Number=Sing	76	obl:lmod	76:obl:lmod	Canto=12|Verso=11|UniqueTokenId=OldItalian_Dante_Inferno-413_66
67	de	di	ADP	eps	_	70	case	70:case	Canto=12|Verso=11|UniqueTokenId=OldItalian_Dante_Inferno-413_67
68	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	70	det	70:det	Canto=12|Verso=11|UniqueTokenId=OldItalian_Dante_Inferno-413_68
69	rotta	rompere	VERB	vta2pra1fs	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	70	acl	70:acl	Canto=12|Verso=11|UniqueTokenId=OldItalian_Dante_Inferno-413_69
70	lacca	lacca	NOUN	sf1fs	Gender=Fem|Number=Sing	66	nmod	66:nmod	Canto=12|Verso=11|UniqueTokenId=OldItalian_Dante_Inferno-413_70
71	l'	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	72	det	72:det	Canto=12|SpaceAfter=No|Verso=12|UniqueTokenId=OldItalian_Dante_Inferno-413_71
72	infamia	infamia	NOUN	sf1fs	Gender=Fem|Number=Sing	76	nsubj	76:nsubj	Canto=12|Verso=12|UniqueTokenId=OldItalian_Dante_Inferno-413_72
73	di	di	ADP	epskg	_	74	case	74:case	Canto=12|Verso=12|UniqueTokenId=OldItalian_Dante_Inferno-413_73
74	Creti	Creta	PROPN	np	_	72	nmod	72:nmod	Canto=12|Verso=12|UniqueTokenId=OldItalian_Dante_Inferno-413_74
75	era	essere	AUX	vi4iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	76	cop	76:cop	Canto=12|Verso=12|UniqueTokenId=OldItalian_Dante_Inferno-413_75
76	distesa	distendere	VERB	vtp2pra1fs	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	60	parataxis	60:parataxis	Canto=12|Verso=12|UniqueTokenId=OldItalian_Dante_Inferno-413_76
77	che	che	PRON	pr	PronType=Rel	79	nsubj:pass	79:nsubj:pass	Canto=12|Verso=13|UniqueTokenId=OldItalian_Dante_Inferno-413_77
78	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	79	aux:pass	79:aux:pass	Canto=12|Verso=13|UniqueTokenId=OldItalian_Dante_Inferno-413_78
79	concetta	concepire	VERB	vtp2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	72	acl:relcl	72:acl:relcl	Canto=12|Verso=13|UniqueTokenId=OldItalian_Dante_Inferno-413_79
80	ne	in	ADP	epaksl	_	83	case	83:case	Canto=12|Verso=13|UniqueTokenId=OldItalian_Dante_Inferno-413_80
81	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	83	det	83:det	Canto=12|Verso=13|UniqueTokenId=OldItalian_Dante_Inferno-413_81
82	falsa	falso	ADJ	a1fs	Gender=Fem|Number=Sing	83	amod	83:amod	Canto=12|Verso=13|UniqueTokenId=OldItalian_Dante_Inferno-413_82
83	vacca	vacca	NOUN	sf1fs	Gender=Fem|Number=Sing	79	obl:lmod	79:obl:lmod	Canto=12|SpaceAfter=No|Verso=13|UniqueTokenId=OldItalian_Dante_Inferno-413_83
84	;	;	PUNCT	_	_	92	punct	92:punct	UniqueTokenId=OldItalian_Dante_Inferno-413_84
85	e	e	CCONJ	cscc	_	92	cc	92:cc	Canto=12|Verso=14|UniqueTokenId=OldItalian_Dante_Inferno-413_85
86	quando	quando	SCONJ	csst	_	87	mark	87:mark	Canto=12|Verso=14|UniqueTokenId=OldItalian_Dante_Inferno-413_86
87	vide	vedere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	92	advcl	92:advcl	Canto=12|Verso=14|UniqueTokenId=OldItalian_Dante_Inferno-413_87
88	noi	noi	PRON	pp1plco	Number=Plur|Person=1|PronType=Prs	87	obj	87:obj	Canto=12|SpaceAfter=No|Verso=14|UniqueTokenId=OldItalian_Dante_Inferno-413_88
89	,	,	PUNCT	_	_	87	punct	87:punct	UniqueTokenId=OldItalian_Dante_Inferno-413_89
90	sé	sé	PRON	pp3lpr	Person=3|PronType=Prs	92	obj	92:obj	Canto=12|Verso=14|UniqueTokenId=OldItalian_Dante_Inferno-413_90
91	stesso	stesso	DET	ad1ms	Gender=Masc|Number=Sing|PronType=Dem	90	det	90:det	Canto=12|Verso=14|UniqueTokenId=OldItalian_Dante_Inferno-413_91
92	morse	mordere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	60	parataxis	60:parataxis	Canto=12|SpaceAfter=No|Verso=14|UniqueTokenId=OldItalian_Dante_Inferno-413_92
93	,	,	PUNCT	_	_	96	punct	96:punct	UniqueTokenId=OldItalian_Dante_Inferno-413_93
94	sì	sì	ADV	_	_	96	advmod	96:advmod	Canto=12|Verso=15|UniqueTokenId=OldItalian_Dante_Inferno-413_94
95	come	come	SCONJ	_	_	96	mark	96:mark	Canto=12|Verso=15|UniqueTokenId=OldItalian_Dante_Inferno-413_95
96	quei	quello	PRON	pd1ms	Gender=Masc|Number=Sing|Person=1|PronType=Dem	92	advcl:cmp	92:advcl:cmp	Canto=12|Verso=15|UniqueTokenId=OldItalian_Dante_Inferno-413_96
97	cui	cui	PRON	pr	PronType=Rel	101	obj	101:obj	Canto=12|Verso=15|UniqueTokenId=OldItalian_Dante_Inferno-413_97
98	l'	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	99	det	99:det	Canto=12|SpaceAfter=No|Verso=15|UniqueTokenId=OldItalian_Dante_Inferno-413_98
99	ira	ira	NOUN	sf1fs	Gender=Fem|Number=Sing	101	nsubj	101:nsubj	Canto=12|Verso=15|UniqueTokenId=OldItalian_Dante_Inferno-413_99
100	dentro	dentro	ADV	b	_	101	advmod:lmod	101:advmod:lmod	Canto=12|Verso=15|UniqueTokenId=OldItalian_Dante_Inferno-413_100
101	fiacca	fiaccare	VERB	vta1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	96	acl:relcl	96:acl:relcl	Canto=12|SpaceAfter=No|Verso=15|UniqueTokenId=OldItalian_Dante_Inferno-413_101
102	.	.	PUNCT	_	_	60	punct	60:punct	UniqueTokenId=OldItalian_Dante_Inferno-413_102

~~~


~~~ conllu
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 38 40 nmod:lmod	color:blue
1	Poi	poi	ADV	b	_	24	advmod:tmod	24:advmod:tmod	Canto=18|Verso=139|UniqueTokenId=OldItalian_Dante_Purgatorio-655_1
2	quando	quando	SCONJ	csst	_	7	mark	7:mark	Canto=18|Verso=139|UniqueTokenId=OldItalian_Dante_Purgatorio-655_2
3	fuor	essere	AUX	vi4irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	aux	7:aux	Canto=18|Verso=139|UniqueTokenId=OldItalian_Dante_Purgatorio-655_3
4	da	da	ADP	epska	_	5	case	5:case	Canto=18|Verso=139|UniqueTokenId=OldItalian_Dante_Purgatorio-655_4
5	noi	noi	PRON	pp1plco	Number=Plur|Person=1|PronType=Prs	7	obl:lmod	7:obl:lmod	Canto=18|Verso=139|UniqueTokenId=OldItalian_Dante_Purgatorio-655_5
6	tanto	tanto	ADV	b	_	7	advmod	7:advmod	Canto=18|Verso=139|UniqueTokenId=OldItalian_Dante_Purgatorio-655_6
7	divise	dividere	VERB	vtp2pra1fp	Aspect=Perf|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	24	advcl	24:advcl	Canto=18|Verso=139|UniqueTokenId=OldItalian_Dante_Purgatorio-655_7
8	quell'	quello	DET	ad1fp	Gender=Fem|Number=Plur|PronType=Dem	9	det	9:det	Canto=18|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-655_8
9	ombre	ombra	NOUN	sf1fp	Gender=Fem|Number=Plur	7	nsubj	7:nsubj	Canto=18|SpaceAfter=No|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-655_9
10	,	,	PUNCT	_	_	12	punct	12:punct	_
11	che	che	SCONJ	cssu	_	12	mark	12:mark	Canto=18|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-655_11
12	veder	vedere	VERB	vtp2fp	Tense=Pres|VerbForm=Inf|Voice=Pass	7	advcl	7:advcl	Canto=18|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-655_12
13	più	più	ADV	b	_	12	advmod	12:advmod	Canto=18|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-655_13
14	non	non	ADV	b	PronType=Neg	12	advmod:neg	12:advmod:neg	Canto=18|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-655_14
15	potier	potere	AUX	vta2irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	aux	12:aux	Canto=18|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-655_15
16	si	si	PRON	pf3xle	Person=3|PronType=Prs|Reflex=Yes	12	expl:impers	12:expl:impers	Canto=18|Clitic=Yes|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-655_16
17	,	,	PUNCT	_	_	12	punct	12:punct	_
18	novo	nuovo	ADJ	a1ms	Gender=Masc|Number=Sing	19	amod	19:amod	Canto=18|Verso=141|UniqueTokenId=OldItalian_Dante_Purgatorio-655_18
19	pensiero	pensiero	NOUN	sm2ms	Gender=Masc|Number=Sing	24	nsubj	24:nsubj	Canto=18|Verso=141|UniqueTokenId=OldItalian_Dante_Purgatorio-655_19
20	dentro	dentro	ADV	_	_	22	advmod:lmod	22:advmod:lmod	Canto=18|Verso=141|UniqueTokenId=OldItalian_Dante_Purgatorio-655_20
21	a	a	ADP	_	_	22	case	22:case	Canto=18|Verso=141|UniqueTokenId=OldItalian_Dante_Purgatorio-655_21
22	me	me	PRON	pp1slco	Person=1|Poss=Yes|PronType=Prs	24	obl:lmod	24:obl:lmod	Canto=18|Verso=141|UniqueTokenId=OldItalian_Dante_Purgatorio-655_22
23	si	si	PRON	pf3ypr	Person=3|PronType=Prs|Reflex=Yes	24	expl:pv	24:expl:pv	Canto=18|Clitic=Yes|Verso=141|UniqueTokenId=OldItalian_Dante_Purgatorio-655_23
24	mise	mettere	VERB	vta+2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=18|SpaceAfter=No|Verso=141|UniqueTokenId=OldItalian_Dante_Purgatorio-655_24
25	,	,	PUNCT	_	_	31	punct	31:punct	_
26	di	di	ADP	_	_	28	case	28:case	Canto=18|Comment=de-l|Verso=142|UniqueTokenId=OldItalian_Dante_Purgatorio-655_26
27	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	28	det	28:det	Canto=18|Comment=de-l|Verso=142|UniqueTokenId=OldItalian_Dante_Purgatorio-655_27
28	qual	quale	PRON	pr2ms	Number=Sing|PronType=Rel	31	obl	31:obl	Canto=18|Verso=142|UniqueTokenId=OldItalian_Dante_Purgatorio-655_28
29	più	più	DET	a	_	30	det	30:det	Canto=18|Verso=142|UniqueTokenId=OldItalian_Dante_Purgatorio-655_29
30	altri	altro	PRON	pi	Gender=Masc|Number=Plur|PronType=Ind	31	nsubj	31:nsubj	Canto=18|Verso=142|UniqueTokenId=OldItalian_Dante_Purgatorio-655_30
31	nacquero	nascere	VERB	vi2irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	19	acl:relcl	19:acl:relcl	Canto=18|Verso=142|UniqueTokenId=OldItalian_Dante_Purgatorio-655_31
32	e	e	CCONJ	cscc	_	33	cc	33:cc	Canto=18|Verso=142|UniqueTokenId=OldItalian_Dante_Purgatorio-655_32
33	diversi	diverso	ADJ	a1mp	Gender=Masc|Number=Plur	29	conj	29:conj	Canto=18|SpaceAfter=No|Verso=142|UniqueTokenId=OldItalian_Dante_Purgatorio-655_33
34	;	;	PUNCT	_	_	41	punct	41:punct	_
35	e	e	CCONJ	cscc	_	41	cc	41:cc	Canto=18|Verso=143|UniqueTokenId=OldItalian_Dante_Purgatorio-655_35
36	tanto	tanto	ADV	b	_	41	advmod	41:advmod	Canto=18|Verso=143|UniqueTokenId=OldItalian_Dante_Purgatorio-655_36
37	d'	da	ADP	epskdl	_	38	case	38:case	Canto=18|Verso=143|UniqueTokenId=OldItalian_Dante_Purgatorio-655_37
38	uno	uno	PRON	pi1ms	Gender=Masc|Number=Sing|PronType=Ind	41	obl:lmod	41:obl:lmod	Canto=18|Verso=143|UniqueTokenId=OldItalian_Dante_Purgatorio-655_38
39	in	in	ADP	epskml	_	40	case	40:case	Canto=18|Verso=143|UniqueTokenId=OldItalian_Dante_Purgatorio-655_39
40	altro	altro	PRON	pi	Gender=Masc|Number=Sing|PronType=Ind	38	nmod:lmod	38:nmod:lmod	Canto=18|Verso=143|UniqueTokenId=OldItalian_Dante_Purgatorio-655_40
41	vaneggiai	vaneggiare	VERB	vi1irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	24	parataxis	24:parataxis	Canto=18|SpaceAfter=No|Verso=143|UniqueTokenId=OldItalian_Dante_Purgatorio-655_41
42	,	,	PUNCT	_	_	48	punct	48:punct	_
43	che	che	SCONJ	cssu	_	48	mark	48:mark	Canto=18|Verso=144|UniqueTokenId=OldItalian_Dante_Purgatorio-655_43
44	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	45	det	45:det	Canto=18|Verso=144|UniqueTokenId=OldItalian_Dante_Purgatorio-655_44
45	occhi	occhio	NOUN	sm2mp	Gender=Masc|Number=Plur	48	obj	48:obj	Canto=18|Verso=144|UniqueTokenId=OldItalian_Dante_Purgatorio-655_45
46	per	per	ADP	epskr	_	47	case	47:case	Canto=18|Verso=144|UniqueTokenId=OldItalian_Dante_Purgatorio-655_46
47	vaghezza	vaghezza	NOUN	sf1fs	Gender=Fem|Number=Sing	48	obl	48:obl	Canto=18|Verso=144|UniqueTokenId=OldItalian_Dante_Purgatorio-655_47
48	ricopersi	ricoprire	VERB	vta3irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	41	advcl	41:advcl	Canto=18|SpaceAfter=No|Verso=144|UniqueTokenId=OldItalian_Dante_Purgatorio-655_48
49	,	,	PUNCT	_	_	55	punct	55:punct	_
50	e	e	CCONJ	cscc	_	55	cc	55:cc	Canto=18|Verso=145|UniqueTokenId=OldItalian_Dante_Purgatorio-655_50
51	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	52	det	52:det	Canto=18|Verso=145|UniqueTokenId=OldItalian_Dante_Purgatorio-655_51
52	pensamento	pensamento	NOUN	sm2ms	Gender=Masc|Number=Sing	55	obj	55:obj	Canto=18|Verso=145|UniqueTokenId=OldItalian_Dante_Purgatorio-655_52
53	in	in	ADP	epskml	_	54	case	54:case	Canto=18|Verso=145|UniqueTokenId=OldItalian_Dante_Purgatorio-655_53
54	sogno	sogno	NOUN	sm2ms	Gender=Masc|Number=Sing	55	obl	55:obl	Canto=18|Verso=145|UniqueTokenId=OldItalian_Dante_Purgatorio-655_54
55	trasmutai	trasmutare	VERB	vta1irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	48	conj	48:conj	Canto=18|SpaceAfter=No|Verso=145|UniqueTokenId=OldItalian_Dante_Purgatorio-655_55
56	.	.	PUNCT	_	_	24	punct	24:punct	_

~~~


