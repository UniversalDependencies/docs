---
layout: base
title:  'Statistics of flat:name in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="it_old-dep-flat.html">flat</a></tt>.
There are also 2 other language-specific subtypes of `flat`: <tt><a href="it_old-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="it_old-dep-flat-redup.html">flat:redup</a></tt>.

114 nodes (0%) are attached to their parents as `flat:name`.

114 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.3859649122807.

The following 4 pairs of parts of speech are connected with `flat:name`: <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (98; 86% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (14; 12% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_old-pos-NUM.html">NUM</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:name	color:blue
1	Ov'	ove	ADV	b	_	0	root	_	Canto=14|Verso=97
2	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	Canto=14|Verso=97
3	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Canto=14|Verso=97
4	buon	buono	ADJ	a1ms	Gender=Masc|Number=Sing	5	amod	_	Canto=14|Verso=97
5	Lizio	Lizio	PROPN	np	_	1	nsubj	_	Canto=14|Verso=97
6	e	e	CCONJ	cscr	_	7	cc	_	Canto=14|Verso=97
7	Arrigo	Arrigo	PROPN	np	_	5	conj	_	Canto=14|SpaceAfter=No|Verso=97
8	Mainardi	Mainardi	PROPN	np	_	7	flat:name	_	Canto=14|SpaceAfter=No|Verso=97
9	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	Vidi	vedere	VERB	vta2irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=24|Verso=31
2	messer	messere	NOUN	sm3ms	Gender=Masc|Number=Sing	1	obj	_	Canto=24|Verso=31
3	Marchese	Marchese	PROPN	np	_	2	flat:name	_	Canto=24|SpaceAfter=No|Verso=31
4	,	,	PUNCT	_	_	6	punct	_	_
5	ch'	che	PRON	pr	PronType=Rel	6	nsubj	_	Canto=24|Verso=31
6	ebbe	avere	VERB	vta5irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	acl:relcl	_	Canto=24|Verso=31
7	spazio	spazio	NOUN	sm2ms	Gender=Masc|Number=Sing	6	obj	_	Canto=24|Verso=31
8	già	già	ADV	b	_	10	advmod:tmod	_	Canto=24|Verso=32
9	di	di	ADP	epsd	_	10	mark	_	Canto=24|Verso=32
10	bere	bere	VERB	vta2fp	Tense=Pres|VerbForm=Inf|Voice=Act	7	acl	_	Canto=24|Verso=32
11	a	a	ADP	epsksl	_	12	case	_	Canto=24|Verso=32
12	Forlì	Forlì	PROPN	np	_	10	obl:lmod	_	Canto=24|Verso=32
13	con	con	ADP	epskm	_	15	case	_	Canto=24|Verso=32
14	men	meno	ADJ	a	_	15	amod	_	Canto=24|Verso=32
15	secchezza	secchezza	NOUN	sf1fs	Gender=Fem|Number=Sing	10	obl	_	Canto=24|SpaceAfter=No|Verso=32
16	,	,	PUNCT	_	_	20	punct	_	_
17	e	e	CCONJ	cscc	_	20	cc	_	Canto=24|Verso=33
18	sì	così	ADV	b	_	20	advmod	_	Canto=24|Verso=33
19	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	20	cop	_	Canto=24|Verso=33
20	tal	tale	DET	a2ms	Gender=Masc|Number=Sing	6	conj	_	Canto=24|SpaceAfter=No|Verso=33
21	,	,	PUNCT	_	_	25	punct	_	_
22	che	che	SCONJ	cssu	_	25	mark	_	Canto=24|Verso=33
23	non	non	ADV	b	PronType=Neg	25	advmod:neg	_	Canto=24|Verso=33
24	si	si	PRON	pf3ypr	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	25	expl:pv	_	Canto=24|Verso=33
25	sentì	sentire	VERB	vta+3irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	20	advcl	_	Canto=24|Verso=33
26	sazio	sazio	ADJ	a1ms	Gender=Masc|Number=Sing	25	xcomp	_	Canto=24|SpaceAfter=No|Verso=33
27	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 32 flat:name	color:blue
1	Ne	in	ADP	epaktd	_	3	case	_	Canto=19|Verso=1
2	l'	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	Canto=19|Verso=1
3	ora	ora	NOUN	sf1fs	Gender=Fem|Number=Sing	53	obl:tmod	_	Canto=19|Verso=1
4	che	che	PRON	pr	PronType=Rel	10	obl:tmod	_	Canto=19|Verso=1
5	non	non	ADV	b	PronType=Neg	10	advmod:neg	_	Canto=19|Verso=1
6	può	potere	AUX	vta2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	Canto=19|Verso=1
7	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	Canto=19|Verso=1
8	calor	calore	NOUN	sm3ms	Gender=Masc|Number=Sing	10	nsubj	_	Canto=19|Verso=1
9	diurno	diurno	ADJ	a1ms	Gender=Masc|Number=Sing	8	amod	_	Canto=19|Verso=1
10	intepidar	intiepidire	VERB	vta1fp	Tense=Pres|VerbForm=Inf|Voice=Act	3	acl:relcl	_	Canto=19|Verso=2
11	più	più	ADV	b	_	10	advmod	_	Canto=19|Verso=2
12	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	Canto=19|Verso=2
13	freddo	freddo	NOUN	sm2ms	Gender=Masc|Number=Sing	10	obj	_	Canto=19|Verso=2
14	de	di	ADP	eps	_	16	case	_	Canto=19|Verso=2
15	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	Canto=19|Verso=2
16	luna	luna	NOUN	sf1fs	Gender=Fem|Number=Sing	13	nmod	_	Canto=19|SpaceAfter=No|Verso=2
17	,	,	PUNCT	_	_	18	punct	_	_
18	vinto	vincere	VERB	vtp2pr	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	10	advcl	_	Canto=19|Verso=3
19	da	da	ADP	epske	_	20	case	_	Canto=19|Verso=3
20	terra	terra	NOUN	sf1fs	Gender=Fem|Number=Sing	18	obl:agent	_	Canto=19|SpaceAfter=No|Verso=3
21	,	,	PUNCT	_	_	25	punct	_	_
22	e	e	CCONJ	cscc	_	25	cc	_	Canto=19|Verso=3
23	talor	talora	ADV	b	_	25	advmod	_	Canto=19|Verso=3
24	da	da	ADP	epske	_	25	case	_	Canto=19|Verso=3
25	Saturno	Saturno	PROPN	np	_	20	conj	_	Canto=19|SpaceAfter=No|Verso=3
26	-	-	PUNCT	_	_	33	punct	_	_
27	quando	quando	SCONJ	csst	_	33	mark	_	Canto=19|Verso=4
28	i	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	29	det	_	Canto=19|Verso=4
29	geomanti	geomante	NOUN	sm3mp	Gender=Masc|Number=Plur	33	nsubj	_	Canto=19|Verso=4
30	lor	loro	DET	as	Poss=Yes|PronType=Prs	31	det:poss	_	Canto=19|Verso=4
31	Maggior	maggiore	ADJ	a2ms	Gender=Masc|Number=Sing	33	obj	_	Canto=19|Verso=4
32	Fortuna	fortuna	NOUN	sf1fs	Gender=Fem|Number=Sing	31	flat:name	_	Canto=19|Verso=4
33	veggiono	vedere	VERB	vta2ipp3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl	_	Canto=19|Verso=5
34	in	in	ADP	epsksl	_	35	case	_	Canto=19|Verso=5
35	oriente	oriente	NOUN	sm3ms	Gender=Masc|Number=Sing	33	obl:lmod	_	Canto=19|SpaceAfter=No|Verso=5
36	,	,	PUNCT	_	_	33	punct	_	_
37	innanzi	innanzi	ADV	_	_	40	advmod:lmod	_	Canto=19|Verso=5
38	a	a	ADP	_	_	40	case	_	Canto=19|Verso=5
39	l'	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	40	det	_	Canto=19|Verso=5
40	alba	alba	NOUN	sf1fs	Gender=Fem|Number=Sing	33	obl:tmod	_	Canto=19|SpaceAfter=No|Verso=5
41	,	,	PUNCT	_	_	42	punct	_	_
42	surger	surgere	VERB	vi2fp	Tense=Pres|VerbForm=Inf	33	xcomp	_	Canto=19|Verso=6
43	per	per	ADP	epskpl	_	44	case	_	Canto=19|Verso=6
44	via	via	NOUN	sf1fs	Gender=Fem|Number=Sing	42	obl:lmod	_	Canto=19|Verso=6
45	che	che	PRON	pr	PronType=Rel	48	nsubj	_	Canto=19|Verso=6
46	poco	poco	ADV	pi1ms	_	48	advmod:tmod	_	Canto=19|Verso=6
47	le	le	PRON	pp3fsyda	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	48	iobj	_	Canto=19|Verso=6
48	sta	stare	VERB	vi1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	44	acl:relcl	_	Canto=19|Verso=6
49	bruna	bruno	ADJ	a1fs	Gender=Fem|Number=Sing	48	xcomp	_	Canto=19|SpaceAfter=No|Verso=6
50	-	-	PUNCT	_	_	33	punct	_	SpaceAfter=No
51	,	,	PUNCT	_	_	53	punct	_	_
52	mi	mi	PRON	pp1syda	Clitic=Yes|Person=1|Poss=Yes|PronType=Prs	53	iobj	_	Canto=19|Verso=7
53	venne	venire	VERB	vi3irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Canto=19|Verso=7
54	in	in	ADP	epsksl	_	55	case	_	Canto=19|Verso=7
55	sogno	sogno	NOUN	sm2ms	Gender=Masc|Number=Sing	53	obl:lmod	_	Canto=19|Verso=7
56	una	uno	DET	rifs	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	57	det	_	Canto=19|Verso=7
57	femmina	femmina	NOUN	sf1fs	Gender=Fem|Number=Sing	53	nsubj	_	Canto=19|Verso=7
58	balba	balbo	ADJ	a1fs	Gender=Fem|Number=Sing	57	amod	_	Canto=19|SpaceAfter=No|Verso=7
59	,	,	PUNCT	_	_	63	punct	_	_
60	ne	in	ADP	epakp	_	62	case	_	Canto=19|Verso=8
61	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	62	det	_	Canto=19|Verso=8
62	occhi	occhio	NOUN	sm2mp	Gender=Masc|Number=Plur	63	obl:lmod	_	Canto=19|Verso=8
63	guercia	guercio	ADJ	a1fsxc6	Gender=Fem|Number=Sing	58	conj	_	Canto=19|SpaceAfter=No|Verso=8
64	,	,	PUNCT	_	_	69	punct	_	_
65	e	e	CCONJ	cscc	_	69	cc	_	Canto=19|Verso=8
66	sovra	sopra	ADP	eiskp	_	68	case	_	Canto=19|Verso=8
67	i	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	68	det	_	Canto=19|Verso=8
68	piè	piede	NOUN	sm3mp	Gender=Masc|Number=Plur	69	obl:lmod	_	Canto=19|Verso=8
69	distorta	distorcere	VERB	vta2pra1fs	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	58	conj	_	Canto=19|SpaceAfter=No|Verso=8
70	,	,	PUNCT	_	_	69	punct	_	_
71	con	con	ADP	epskq	_	73	case	_	Canto=19|Verso=9
72	le	la	DET	adfp	Gender=Fem|Number=Plur|PronType=Dem	73	det	_	Canto=19|Verso=9
73	man	mano	NOUN	sf2fp	Gender=Fem|Number=Plur	57	nmod	_	Canto=19|Verso=9
74	monche	monco	ADJ	a1fp	Gender=Fem|Number=Plur	73	amod	_	Canto=19|SpaceAfter=No|Verso=9
75	,	,	PUNCT	_	_	79	punct	_	_
76	e	e	CCONJ	cscc	_	79	cc	_	Canto=19|Verso=9
77	di	di	ADP	epsc	_	78	case	_	Canto=19|Verso=9
78	colore	colore	NOUN	sm3ms	Gender=Masc|Number=Sing	79	obl	_	Canto=19|Verso=9
79	scialba	scialbo	ADJ	a1fsxc5	Gender=Fem|Number=Sing	58	conj	_	Canto=19|SpaceAfter=No|Verso=9
80	.	.	PUNCT	_	_	53	punct	_	_

~~~


