---
layout: base
title:  'Statistics of parataxis in UD_Galician-CTG'
udver: '2'
---

## Treebank Statistics: UD_Galician-CTG: Relations: `parataxis`

This relation is universal.

22 nodes (0%) are attached to their parents as `parataxis`.

15 instances of `parataxis` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.8181818181818.

The following 10 pairs of parts of speech are connected with `parataxis`: <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (10; 45% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (3; 14% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (1; 5% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (1; 5% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 parataxis	color:blue
1	Percorrido	percorrido	NOUN	NCMS000	_	6	parataxis	_	SpaceAfter=No|Treeler:suj
2	:	:	PUNCT	Fd	_	1	punct	_	Treeler:f
3	a	o	DET	DA0FS0	Definite=Def|PronType=Art	4	det	_	Treeler:spec
4	ruta	ruta	NOUN	NCFS000	_	6	nsubj	_	SpaceAfter=No|Treeler:suj
5	,	,	PUNCT	Fc	_	4	punct	_	Treeler:f
6	inicia	iniciar	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
7	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	6	dep	_	Treeler:morfema.pronominal
8	en	en	ADP	SPS00	_	10	case	_	Treeler:cc
9	a	o	DET	DA0FS0	Definite=Def|PronType=Art	10	det	_	Treeler:spec
10	Vila	vila	NOUN	NCFS000	_	6	obl	_	Treeler:sn
11	de	de	ADP	SPS00	_	12	case	_	Treeler:sp
12	Vilameá	vilameá	PROPN	NP00000	_	10	nmod	_	SpaceAfter=No|Treeler:sn
13	,	,	PUNCT	Fc	_	14	punct	_	Treeler:f
14	situada	situar	VERB	VMP00SF	_	10	ccomp	_	Treeler:S
15	a	a	ADP	SPS00	_	17	case	_	Treeler:creg
16	400	400	NUM	Z	_	17	nummod	_	Treeler:spec
17	m	m	NOUN	NCMS000	_	14	obl	_	Treeler:sn
18	de	de	ADP	SPS00	_	19	case	_	Treeler:sp
19	altitude	altitude	NOUN	NCFS000	_	17	nmod	_	Treeler:sn
20	que	que	PRON	PR0CN000	PronType=Rel	22	obj	_	Treeler:cd
21	deberemos	deber	AUX	VMIF1P0	_	22	aux	_	Treeler:v
22	atravesar	atravesar	VERB	VMN0000	_	19	ccomp	_	Treeler:S
23	por	por	ADP	SPS00	_	27	case	_	Treeler:cc
24	as	o	DET	DA0FP0	Definite=Def|PronType=Art	27	det	_	Treeler:spec
25	súas	seu	DET	DP3FP0	Poss=Yes|PronType=Prs	27	det	_	Treeler:spec
26	estreitas	estreito	ADJ	AQ0FP0	_	27	amod	_	Treeler:s.a
27	rúas	rúa	NOUN	NCFP000	_	22	obl	_	Treeler:sn
28	ata	ata	ADP	SPS00	_	30	case	_	Treeler:sp
29	a	o	DET	DA0FS0	Definite=Def|PronType=Art	30	det	_	Treeler:spec
30	cima	cima	NOUN	NCFS000	_	27	nmod	_	Treeler:sn
31	de	de	ADP	SPS00	_	33	case	_	Treeler:sp
32	o	o	DET	DA0MS0	Definite=Def|PronType=Art	33	det	_	Treeler:spec
33	pobo	pobo	NOUN	NCMS000	_	30	nmod	_	SpaceAfter=No|Treeler:sn
34	,	,	PUNCT	Fc	_	36	punct	_	Treeler:f
35	onde	onde	PRON	PR0CN000	PronType=Rel	36	nsubj	_	Treeler:suj
36	atoparemos	atopar	VERB	VMIF1P0	_	27	ccomp	_	Treeler:S
37	unha	un	DET	DI0FS0	Definite=Ind|PronType=Art	38	det	_	Treeler:spec
38	fonte	fonte	NOUN	NCFS000	_	36	obj	_	SpaceAfter=No|Treeler:cd
39	.	.	PUNCT	Fp	_	6	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 15 parataxis	color:blue
1	Non	non	PART	RN	_	2	advmod	_	Treeler:mod
2	existe	existir	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
3	ningunha	ningún	DET	DI0FS0	PronType=Neg	4	det	_	Treeler:spec
4	nova	novo	ADJ	AQ0FS0	_	2	nsubj	_	Treeler:suj
5	en	en	ADP	SPS00	_	7	case	_	Treeler:cc
6	os	o	DET	DA0MP0	Definite=Def|PronType=Art	7	det	_	Treeler:spec
7	medios	medio	NOUN	NCMP000	_	2	obl	_	Treeler:sn
8	analizados	analizar	VERB	VMP00PM	_	7	ccomp	_	Treeler:S
9	en	en	ADP	SPS00	_	11	case	_	Treeler:cc
10	o	o	DET	DA0MS0	Definite=Def|PronType=Art	11	det	_	Treeler:spec
11	cal	cal	PRON	PR0CS000	PronType=Rel	8	obl	_	Treeler:sn
12	o	o	DET	DA0MS0	Definite=Def|PronType=Art	13	det	_	Treeler:spec
13	debate	debate	NOUN	NCMS000	_	15	nsubj	_	Treeler:suj
14	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	15	obj	_	Treeler:cd
15	centre	centrar	VERB	VMSP3S0	_	2	parataxis	_	Treeler:suj
16	en	en	ADP	SPS00	_	18	case	_	Treeler:cc
17	a	o	DET	DA0FS0	Definite=Def|PronType=Art	18	det	_	Treeler:spec
18	nación	nación	NOUN	NCFS000	_	15	obl	_	Treeler:sn
19	ou	ou	CCONJ	CC	_	21	cc	_	Treeler:coord
20	en	en	ADP	SPS00	_	21	case	_	Treeler:sp
21	discusión	discusión	NOUN	NCFS000	_	18	conj	_	Treeler:sn
22	teóricas	teórico	ADJ	AQ0FP0	_	21	amod	_	Treeler:s.a
23	sobre	sobre	ADP	SPS00	_	22	case	_	Treeler:sp
24	a	o	DET	DA0FS0	Definite=Def|PronType=Art	22	det	_	Treeler:spec
25	mesma	mesmo	DET	DI0FS0	PronType=Ind	22	det	_	SpaceAfter=No|Treeler:d
26	.	.	PUNCT	Fp	_	2	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 30 parataxis	color:blue
1	Existe	existir	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
2	unha	un	DET	DI0FS0	Definite=Ind|PronType=Art	3	det	_	Treeler:spec
3	potencia	potencia	NOUN	NCFS000	_	1	nsubj	_	Treeler:suj
4	instalada	instalar	VERB	VMP00SF	_	3	ccomp	_	Treeler:S
5	en	en	ADP	SPS00	_	6	case	_	Treeler:cc
6	Galicia	galicia	PROPN	NP00000	_	4	obl	_	Treeler:sn
7	en	en	ADP	SPS00	_	8	case	_	Treeler:cc
8	centrais	central	NOUN	NCFP000	_	4	obl	_	Treeler:sn
9	hidráulicas	hidráulico	ADJ	AQ0FP0	_	8	amod	_	Treeler:s.a
10	de	de	ADP	SPS00	_	14	case	_	Treeler:sp
11	máis	máis	ADV	RG	_	14	advmod	_	Treeler:spec
12	de	de	ADP	SPS00	_	11	case	_	Treeler:sp
13	10	10	NUM	Z	_	11	nummod	_	Treeler:z
14	MW	megawatt	NOUN	NCMS000	_	8	nmod	_	SpaceAfter=No|Treeler:sn
15	,	,	PUNCT	Fc	_	18	punct	_	Treeler:f
16	de	de	ADP	SPS00	_	18	case	_	Treeler:sp
17	2.945	2.945	NUM	Z	_	18	nummod	_	Treeler:spec
18	MW	megawatt	NOUN	NCMS000	_	14	nmod	_	SpaceAfter=No|Treeler:sn
19	,	,	PUNCT	Fc	_	18	punct	_	Treeler:f
20	cuxa	cuxa	NOUN	NCFS000	_	14	nmod	_	Treeler:sn
21	produción	produción	NOUN	NCFS000	_	20	amod	_	Treeler:s.a
22	en	en	ADP	SPS00	_	24	case	_	Treeler:sp
23	o	o	DET	DA0MS0	Definite=Def|PronType=Art	24	det	_	Treeler:spec
24	ano	ano	NOUN	NCMS000	_	21	nmod	_	Treeler:sn
25	2002	2002	NUM	Z	_	24	nmod	_	SpaceAfter=No|Treeler:sn
26	,	,	PUNCT	Fc	_	30	punct	_	Treeler:f
27	foi	ser	AUX	VSIS3S0	_	30	cop	_	Treeler:suj
28	de	de	ADP	SPS00	_	30	case	_	Treeler:atr
29	415	415	NUM	Z	_	30	nummod	_	Treeler:sn
30	ktep	ktep	PROPN	NP00000	_	1	parataxis	_	SpaceAfter=No|Treeler:sn
31	,	,	PUNCT	Fc	_	30	punct	_	Treeler:f
32	enerxía	enerxía	NOUN	NCFS000	_	1	parataxis	_	Treeler:sn
33	dispoñible	dispoñible	ADJ	AQ0CS0	_	32	amod	_	Treeler:s.a
34	para	para	ADP	SPS00	_	37	case	_	Treeler:sp
35	o	o	DET	DA0MS0	Definite=Def|PronType=Art	37	det	_	Treeler:spec
36	seu	seu	DET	DP3MS0	Poss=Yes|PronType=Prs	37	det	_	Treeler:spec
37	consumo	consumo	NOUN	NCMS000	_	32	nmod	_	Treeler:sn
38	exclusivo	exclusivo	ADJ	AQ0MS0	_	37	amod	_	Treeler:s.a
39	en	en	ADP	SPS00	_	40	case	_	Treeler:sp
40	forma	forma	NOUN	NCFS000	_	37	nmod	_	Treeler:sn
41	de	de	ADP	SPS00	_	42	case	_	Treeler:sp
42	electricidade	electricidade	NOUN	NCFS000	_	40	nmod	_	Treeler:sn
43	.	.	PUNCT	Fp	_	1	punct	_	Treeler:f

~~~


