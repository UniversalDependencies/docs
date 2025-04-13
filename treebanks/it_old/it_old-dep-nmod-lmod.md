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
1	E	e	CCONJ	cscc	_	11	cc	_	Canto=7|Verso=36
2	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	11	nsubj	_	Canto=7|SpaceAfter=No|Verso=36
3	,	,	PUNCT	_	_	9	punct	_	_
4	ch'	che	PRON	pr	PronType=Rel	9	nsubj	_	Canto=7|SpaceAfter=No|Verso=36
5	avea	avere	AUX	vta5iis1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	9	aux	_	Canto=7|Verso=36
6	lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	Canto=7|Verso=36
7	cor	cuore	NOUN	sm3ms	Gender=Masc|Number=Sing	9	obj	_	Canto=7|Verso=36
8	quasi	quasi	ADV	b	_	9	advmod	_	Canto=7|Verso=36
9	compunto	compungere	VERB	vta2pra1ms	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	2	acl:relcl	_	Canto=7|SpaceAfter=No|Verso=36
10	,	,	PUNCT	_	_	2	punct	_	_
11	dissi	dire	VERB	vta3irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=7|SpaceAfter=No|Verso=37
12	:	:	PUNCT	_	_	19	punct	_	_
13	«	«	PUNCT	_	_	19	punct	_	SpaceAfter=No
14	Maestro	maestro	NOUN	sm2ms	Gender=Masc|Number=Sing	19	vocative	_	Canto=7|Verso=37
15	mio	mio	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	14	det:poss	_	Canto=7|SpaceAfter=No|Verso=37
16	,	,	PUNCT	_	_	14	punct	_	_
17	or	ora	ADV	cscn	_	19	advmod:tmod	_	Canto=7|Verso=37
18	mi	mi	PRON	pp1syda	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	19	iobj	_	Canto=7|Verso=37
19	dimostra	dimostrare	VERB	vta1mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	11	ccomp:reported	_	Canto=7|Verso=37
20	che	che	SCONJ	at	_	23	mark	_	Canto=7|Verso=38
21	gente	gente	NOUN	sf3fs	Gender=Fem|Number=Sing	23	nsubj	_	Canto=7|Verso=38
22	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	cop	_	Canto=7|Verso=38
23	questa	questo	PRON	pd1fs	Gender=Fem|Number=Sing|Person=1|PronType=Dem	19	ccomp	_	Canto=7|SpaceAfter=No|Verso=38
24	,	,	PUNCT	_	_	29	punct	_	_
25	e	e	CCONJ	cscc	_	29	cc	_	Canto=7|Verso=38
26	se	se	SCONJ	cssi	_	29	mark	_	Canto=7|Verso=38
27	tutti	tutto	DET	ai1mp	Gender=Masc|Number=Plur|PronType=Tot	30	det	_	Canto=7|Verso=38
28	fuor	essere	AUX	vi4irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	30	cop	_	Canto=7|Verso=38
29	cherci	chierico	NOUN	sm2mp	Gender=Masc|Number=Plur	19	conj	_	Canto=7|Verso=38
30	questi	questo	DET	ad1mp	Gender=Masc|Number=Plur|PronType=Dem	29	nsubj	_	Canto=7|Verso=39
31	chercuti	chiercuto	ADJ	a1mp	Gender=Masc|Number=Plur	30	amod	_	Canto=7|Verso=39
32	a	a	ADP	epsksl	_	34	case	_	Canto=7|Verso=39
33	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	34	det	_	Canto=7|Verso=39
34	sinistra	sinistra	NOUN	sf1fs	Gender=Fem|Number=Sing	30	nmod:lmod	_	Canto=7|Verso=39
35	nostra	nostro	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	34	det:poss	_	Canto=7|SpaceAfter=No|Verso=39
36	»	»	PUNCT	_	_	19	punct	_	SpaceAfter=No
37	.	.	PUNCT	_	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 nmod:lmod	color:blue
1	Qual	quale	DET	ar	Number=Sing|PronType=Rel	4	det	_	Canto=12|Verso=4
2	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	Canto=12|Verso=4
3	quella	quello	DET	ad1fs	Gender=Fem|Number=Sing|PronType=Dem	4	det	_	Canto=12|Verso=4
4	ruina	rovina	NOUN	sf1fs	Gender=Fem|Number=Sing	54	advcl:cmp	_	Canto=12|Verso=4
5	che	che	PRON	pr	PronType=Rel	15	nsubj	_	Canto=12|Verso=4
6	in	in	ADP	_	_	8	case	_	Canto=12|Comment=ne-l|Verso=4
7	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	Canto=12|Comment=ne-l|Verso=4
8	fianco	fianco	NOUN	sm2ms	Gender=Masc|Number=Sing	15	obl:lmod	_	Canto=12|Verso=4
9	di	di	ADP	_	_	10	case	_	Canto=12|Verso=5
10	qua	qua	ADV	_	_	12	advmod:lmod	_	Canto=12|Verso=5
11	da	da	ADP	_	_	12	case	_	Canto=12|Verso=5
12	Trento	Trento	PROPN	np	_	8	nmod:lmod	_	Canto=12|Verso=5
13	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	Canto=12|SpaceAfter=No|Verso=5
14	Adice	Adige	PROPN	np	_	15	obj	_	Canto=12|Verso=5
15	percosse	percuotere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	Canto=12|SpaceAfter=No|Verso=5
16	,	,	PUNCT	_	_	19	punct	_	_
17	o	o	CCONJ	cscr	_	19	cc	_	Canto=12|Verso=6
18	per	per	ADP	epskr	_	19	case	_	Canto=12|Verso=6
19	tremoto	terrremoto	NOUN	sm2ms	Gender=Masc|Number=Sing	15	obl	_	Canto=12|Verso=6
20	o	o	CCONJ	cscr	_	22	cc	_	Canto=12|Verso=6
21	per	per	ADP	epskr	_	22	case	_	Canto=12|Verso=6
22	sostegno	sostegno	NOUN	sm2ms	Gender=Masc|Number=Sing	19	conj	_	Canto=12|Verso=6
23	manco	manco	ADJ	a1ms	Gender=Masc|Number=Sing	22	amod	_	Canto=12|SpaceAfter=No|Verso=6
24	,	,	PUNCT	_	_	43	punct	_	_
25	che	che	SCONJ	cssu	_	43	mark	_	Canto=12|Verso=7
26	da	da	ADP	epsk6	_	27	case	_	Canto=12|Verso=7
27	cima	cima	NOUN	sf1fs	Gender=Fem|Number=Sing	43	obl:lmod	_	Canto=12|Verso=7
28	di	di	ADP	_	_	30	case	_	Canto=12|Comment=de-l|Verso=7
29	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	_	Canto=12|Comment=de-l|Verso=7
30	monte	monte	NOUN	sm3ms	Gender=Masc|Number=Sing	27	nmod	_	Canto=12|SpaceAfter=No|Verso=7
31	,	,	PUNCT	_	_	34	punct	_	_
32	onde	onde	ADV	p	_	34	advmod	_	Canto=12|Verso=7
33	si	si	PRON	pf3yle	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	34	expl:pass	_	Canto=12|Verso=7
34	mosse	muovere	VERB	vta+2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	27	acl:relcl	_	Canto=12|SpaceAfter=No|Verso=7
35	,	,	PUNCT	_	_	34	punct	_	_
36	a	a	ADP	_	_	38	case	_	Canto=12|Comment=a-l|Verso=8
37	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	38	det	_	Canto=12|Comment=a-l|Verso=8
38	piano	piano	NOUN	sm2ms	Gender=Masc|Number=Sing	43	obl:lmod	_	Canto=12|Verso=8
39	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	43	aux	_	Canto=12|Verso=8
40	sì	così	ADV	b	_	43	advmod	_	Canto=12|Verso=8
41	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	42	det	_	Canto=12|Verso=8
42	roccia	roccia	NOUN	sf1fs	Gender=Fem|Number=Sing	43	nsubj	_	Canto=12|Verso=8
43	discoscesa	discoscendere	VERB	vta2pra1fs	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	15	advcl	_	Canto=12|SpaceAfter=No|Verso=8
44	,	,	PUNCT	_	_	48	punct	_	_
45	ch'	che	SCONJ	cssu	_	48	mark	_	Canto=12|SpaceAfter=No|Verso=9
46	alcuna	alcuno	DET	ai	Gender=Fem|Number=Sing|PronType=Ind	47	det	_	Canto=12|Verso=9
47	via	via	NOUN	sf1fs	Gender=Fem|Number=Sing	48	obj	_	Canto=12|Verso=9
48	darebbe	dare	VERB	vta1dps3	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|Voice=Act	43	advcl	_	Canto=12|Verso=9
49	a	a	ADP	epsk1d	_	50	case	_	Canto=12|Verso=9
50	chi	chi	PRON	pr	PronType=Rel	52	obl:arg	_	Canto=12|Verso=9
51	sù	su	ADV	b	_	52	advmod:lmod	_	Canto=12|Verso=9
52	fosse	essere	AUX	vi4cis3	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	48	advcl:relcl	_	Canto=12|SpaceAfter=No|Verso=9
53	:	:	PUNCT	_	_	4	punct	_	_
54	cotal	cotale	PRON	pi2fs	Number=Sing|PronType=Ind	60	xcomp	_	Canto=12|Verso=10
55	di	di	ADP	epskg	_	57	case	_	Canto=12|Verso=10
56	quel	quello	DET	ad1ms	Gender=Masc|Number=Sing|PronType=Dem	57	det	_	Canto=12|Verso=10
57	burrato	burrato	NOUN	sm2ms	Gender=Masc|Number=Sing	60	nmod	_	Canto=12|Verso=10
58	era	essere	AUX	vi4iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	60	cop	_	Canto=12|Verso=10
59	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	60	det	_	Canto=12|Verso=10
60	scesa	scesa	NOUN	sf1fs	Gender=Fem|Number=Sing	0	root	_	Canto=12|SpaceAfter=No|Verso=10
61	;	;	PUNCT	_	_	76	punct	_	_
62	e	e	CCONJ	cscc	_	76	cc	_	Canto=12|Verso=11
63	'n	in	ADP	_	_	66	case	_	Canto=12|Verso=11
64	su	su	ADV	_	_	66	case	_	Canto=12|Verso=11
65	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	66	det	_	Canto=12|Verso=11
66	punta	punta	NOUN	sf1fs	Gender=Fem|Number=Sing	76	obl:lmod	_	Canto=12|Verso=11
67	de	di	ADP	eps	_	70	case	_	Canto=12|Verso=11
68	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	70	det	_	Canto=12|Verso=11
69	rotta	rompere	VERB	vta2pra1fs	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	70	acl	_	Canto=12|Verso=11
70	lacca	lacca	NOUN	sf1fs	Gender=Fem|Number=Sing	66	nmod	_	Canto=12|Verso=11
71	l'	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	72	det	_	Canto=12|SpaceAfter=No|Verso=12
72	infamia	infamia	NOUN	sf1fs	Gender=Fem|Number=Sing	76	nsubj	_	Canto=12|Verso=12
73	di	di	ADP	epskg	_	74	case	_	Canto=12|Verso=12
74	Creti	Creta	PROPN	np	_	72	nmod	_	Canto=12|Verso=12
75	era	essere	AUX	vi4iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	76	cop	_	Canto=12|Verso=12
76	distesa	distendere	VERB	vtp2pra1fs	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	60	parataxis	_	Canto=12|Verso=12
77	che	che	PRON	pr	PronType=Rel	79	nsubj:pass	_	Canto=12|Verso=13
78	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	79	aux:pass	_	Canto=12|Verso=13
79	concetta	concepire	VERB	vtp2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	72	acl:relcl	_	Canto=12|Verso=13
80	ne	in	ADP	epaksl	_	83	case	_	Canto=12|Verso=13
81	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	83	det	_	Canto=12|Verso=13
82	falsa	falso	ADJ	a1fs	Gender=Fem|Number=Sing	83	amod	_	Canto=12|Verso=13
83	vacca	vacca	NOUN	sf1fs	Gender=Fem|Number=Sing	79	obl:lmod	_	Canto=12|SpaceAfter=No|Verso=13
84	;	;	PUNCT	_	_	92	punct	_	_
85	e	e	CCONJ	cscc	_	92	cc	_	Canto=12|Verso=14
86	quando	quando	SCONJ	csst	_	87	mark	_	Canto=12|Verso=14
87	vide	vedere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	92	advcl	_	Canto=12|Verso=14
88	noi	noi	PRON	pp1plco	Number=Plur|Person=1|PronType=Prs	87	obj	_	Canto=12|SpaceAfter=No|Verso=14
89	,	,	PUNCT	_	_	87	punct	_	_
90	sé	sé	PRON	pp3lpr	Person=3|PronType=Prs	92	obj	_	Canto=12|Verso=14
91	stesso	stesso	DET	ad1ms	Gender=Masc|Number=Sing|PronType=Dem	90	det	_	Canto=12|Verso=14
92	morse	mordere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	60	parataxis	_	Canto=12|SpaceAfter=No|Verso=14
93	,	,	PUNCT	_	_	96	punct	_	_
94	sì	sì	ADV	_	_	96	advmod	_	Canto=12|Verso=15
95	come	come	SCONJ	_	_	96	mark	_	Canto=12|Verso=15
96	quei	quello	PRON	pd1ms	Gender=Masc|Number=Sing|Person=1|PronType=Dem	92	advcl:cmp	_	Canto=12|Verso=15
97	cui	cui	PRON	pr	PronType=Rel	101	obl	_	Canto=12|Verso=15
98	l'	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	99	det	_	Canto=12|SpaceAfter=No|Verso=15
99	ira	ira	NOUN	sf1fs	Gender=Fem|Number=Sing	101	nsubj	_	Canto=12|Verso=15
100	dentro	dentro	ADV	b	_	101	advmod:lmod	_	Canto=12|Verso=15
101	fiacca	fiaccare	VERB	vta1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	96	acl:relcl	_	Canto=12|SpaceAfter=No|Verso=15
102	.	.	PUNCT	_	_	60	punct	_	_

~~~


~~~ conllu
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 38 40 nmod:lmod	color:blue
1	Poi	poi	ADV	b	_	24	advmod:tmod	_	Canto=18|Verso=139
2	quando	quando	SCONJ	csst	_	7	mark	_	Canto=18|Verso=139
3	fuor	essere	AUX	vi4irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	aux	_	Canto=18|Verso=139
4	da	da	ADP	epska	_	5	case	_	Canto=18|Verso=139
5	noi	noi	PRON	pp1plco	Number=Plur|Person=1|PronType=Prs	7	obl:lmod	_	Canto=18|Verso=139
6	tanto	tanto	ADV	b	_	7	advmod	_	Canto=18|Verso=139
7	divise	dividere	VERB	vtp2pra1fp	Aspect=Perf|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	24	advcl	_	Canto=18|Verso=139
8	quell'	quello	DET	ad1fp	Gender=Fem|Number=Plur|PronType=Dem	9	det	_	Canto=18|Verso=140
9	ombre	ombra	NOUN	sf1fp	Gender=Fem|Number=Plur	7	nsubj	_	Canto=18|SpaceAfter=No|Verso=140
10	,	,	PUNCT	_	_	12	punct	_	_
11	che	che	SCONJ	cssu	_	12	mark	_	Canto=18|Verso=140
12	veder	vedere	VERB	vtp2fp	Tense=Pres|VerbForm=Inf|Voice=Pass	7	advcl	_	Canto=18|Verso=140
13	più	più	ADV	b	_	12	advmod	_	Canto=18|Verso=140
14	non	non	ADV	b	PronType=Neg	12	advmod:neg	_	Canto=18|Verso=140
15	potier	potere	AUX	vta2irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	aux	_	Canto=18|Verso=140
16	si	si	PRON	pf3xle	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	12	expl:impers	_	Canto=18|Verso=140
17	,	,	PUNCT	_	_	12	punct	_	_
18	novo	nuovo	ADJ	a1ms	Gender=Masc|Number=Sing	19	amod	_	Canto=18|Verso=141
19	pensiero	pensiero	NOUN	sm2ms	Gender=Masc|Number=Sing	24	nsubj	_	Canto=18|Verso=141
20	dentro	dentro	ADV	_	_	22	advmod:lmod	_	Canto=18|Verso=141
21	a	a	ADP	_	_	22	case	_	Canto=18|Verso=141
22	me	me	PRON	pp1slco	Person=1|Poss=Yes|PronType=Prs	24	obl:lmod	_	Canto=18|Verso=141
23	si	si	PRON	pf3ypr	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	24	expl:pv	_	Canto=18|Verso=141
24	mise	mettere	VERB	vta+2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=18|SpaceAfter=No|Verso=141
25	,	,	PUNCT	_	_	31	punct	_	_
26	di	di	ADP	_	_	28	case	_	Canto=18|Comment=de-l|Verso=142
27	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	28	det	_	Canto=18|Comment=de-l|Verso=142
28	qual	quale	PRON	pr2ms	Number=Sing|PronType=Rel	31	obl	_	Canto=18|Verso=142
29	più	più	DET	a	_	30	det	_	Canto=18|Verso=142
30	altri	altro	PRON	pi	Gender=Masc|Number=Plur|PronType=Ind	31	nsubj	_	Canto=18|Verso=142
31	nacquero	nascere	VERB	vi2irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	19	acl:relcl	_	Canto=18|Verso=142
32	e	e	CCONJ	cscc	_	33	cc	_	Canto=18|Verso=142
33	diversi	diverso	ADJ	a1mp	Gender=Masc|Number=Plur	29	conj	_	Canto=18|SpaceAfter=No|Verso=142
34	;	;	PUNCT	_	_	41	punct	_	_
35	e	e	CCONJ	cscc	_	41	cc	_	Canto=18|Verso=143
36	tanto	tanto	ADV	b	_	41	advmod	_	Canto=18|Verso=143
37	d'	da	ADP	epskdl	_	38	case	_	Canto=18|Verso=143
38	uno	uno	PRON	pi1ms	Gender=Masc|Number=Sing|PronType=Ind	41	obl:lmod	_	Canto=18|Verso=143
39	in	in	ADP	epskml	_	40	case	_	Canto=18|Verso=143
40	altro	altro	PRON	pi	Gender=Masc|Number=Sing|PronType=Ind	38	nmod:lmod	_	Canto=18|Verso=143
41	vaneggiai	vaneggiare	VERB	vi1irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	24	parataxis	_	Canto=18|SpaceAfter=No|Verso=143
42	,	,	PUNCT	_	_	48	punct	_	_
43	che	che	SCONJ	cssu	_	48	mark	_	Canto=18|Verso=144
44	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	45	det	_	Canto=18|Verso=144
45	occhi	occhio	NOUN	sm2mp	Gender=Masc|Number=Plur	48	obj	_	Canto=18|Verso=144
46	per	per	ADP	epskr	_	47	case	_	Canto=18|Verso=144
47	vaghezza	vaghezza	NOUN	sf1fs	Gender=Fem|Number=Sing	48	obl	_	Canto=18|Verso=144
48	ricopersi	ricoprire	VERB	vta3irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	41	advcl	_	Canto=18|SpaceAfter=No|Verso=144
49	,	,	PUNCT	_	_	55	punct	_	_
50	e	e	CCONJ	cscc	_	55	cc	_	Canto=18|Verso=145
51	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	52	det	_	Canto=18|Verso=145
52	pensamento	pensamento	NOUN	sm2ms	Gender=Masc|Number=Sing	55	obj	_	Canto=18|Verso=145
53	in	in	ADP	epskml	_	54	case	_	Canto=18|Verso=145
54	sogno	sogno	NOUN	sm2ms	Gender=Masc|Number=Sing	55	obl	_	Canto=18|Verso=145
55	trasmutai	trasmutare	VERB	vta1irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	48	conj	_	Canto=18|SpaceAfter=No|Verso=145
56	.	.	PUNCT	_	_	24	punct	_	_

~~~


