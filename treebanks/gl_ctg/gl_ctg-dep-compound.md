---
layout: base
title:  'Statistics of compound in UD_Galician-CTG'
udver: '2'
---

## Treebank Statistics: UD_Galician-CTG: Relations: `compound`

This relation is universal.

147 nodes (0%) are attached to their parents as `compound`.

133 instances of `compound` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.77551020408163.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (118; 80% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (19; 13% instances), <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="gl_ctg-pos-ADP.html">ADP</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 compound	color:blue
1	Os	o	DET	DA0MP0	_	2	det	_	Treeler:spec
2	vendedores	vendedor	NOUN	NCMP000	_	4	nsubj	_	Treeler:suj
3	poden	poder	AUX	VMIP3P0	_	4	aux	_	Treeler:v
4	decir	decir	VERB	VMN0000	_	0	root	_	Treeler:sentence
5	lles	lle	PRON	PP3CPD00	_	4	iobj	_	Treeler:ci
6	os	o	DET	DA0MP0	_	7	det	_	Treeler:spec
7	nenos	neno	NOUN	NCMP000	_	4	obj	_	SpaceAfter=No|Treeler:cd
8	/	/	PUNCT	Fh	_	16	punct	_	SpaceAfter=No|Treeler:f
9	as	o	DET	DA0FP0	_	12	det	_	Treeler:spec
10	que	que	PRON	PR0CN000	_	12	dep	_	Treeler:relatiu
11	as	o	DET	DA0FP0	_	12	det	_	Treeler:spec
12	drogas	droga	NOUN	NCFP000	_	16	nsubj	_	Treeler:suj
13	os	o	DET	DA0MP0	_	16	det	_	Treeler:spec
14	axudarán	axudar	VERB	VMIF3P0	_	16	compound	_	Treeler:v
15	a	a	ADP	SPS00	_	16	case	_	Treeler:s
16	estudar	estudar	VERB	VMN0000	_	7	ccomp	_	Treeler:S
17	mellor	mellor	ADJ	AQ0CS0	_	16	xcomp	_	Treeler:cpred
18	e	e	CCONJ	CC	_	17	cc	_	ToDo=cc-without-conj|Treeler:coord
19	a	a	ADP	SPS00	_	20	case	_	Treeler:sp
20	aprobar	aprobar	VERB	VMN0000	_	17	ccomp	_	Treeler:S
21	os	o	DET	DA0MP0	_	22	det	_	Treeler:spec
22	exames	exame	NOUN	NCMP000	_	20	obj	_	SpaceAfter=No|Treeler:cd
23	.	.	PUNCT	Fp	_	4	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 compound	color:blue
1	Aínda	aínda	ADV	RG	_	20	case	_	ToDo=case-upos|Treeler:cc
2	que	que	PRON	PR0CN000	_	7	nsubj	_	Treeler:suj
3	continúa	continuar	VERB	VMIP3S0	_	7	compound	_	Treeler:v
4	a	a	ADP	SPS00	_	7	case	_	Treeler:s
5	ser	ser	AUX	VSN0000	_	7	cop	_	Treeler:S
6	a	o	DET	DA0FS0	_	7	det	_	Treeler:spec
7	rama	rama	NOUN	NCFS000	_	20	ccomp	_	Treeler:atr
8	de	de	ADP	SPS00	_	9	case	_	Treeler:sp
9	actividade	actividade	NOUN	NCFS000	_	7	nmod	_	ToDo=nmod|Treeler:sn
10	máis	máis	ADV	RG	_	11	advmod	_	Treeler:spec
11	expansiva	expansivo	ADJ	AQ0FS0	_	9	amod	_	SpaceAfter=No|Treeler:s.a
12	,	,	PUNCT	Fc	_	7	punct	_	Treeler:f
13	a	o	DET	DA0FS0	_	14	det	_	Treeler:spec
14	taxa	taxa	NOUN	NCFS000	_	20	nsubj	_	Treeler:suj
15	de	de	ADP	SPS00	_	16	case	_	Treeler:sp
16	crecemento	crecemento	NOUN	NCMS000	_	14	nmod	_	Treeler:sn
17	de	de	ADP	SPS00	_	19	case	_	Treeler:sp
18	a	o	DET	DA0FS0	_	19	det	_	Treeler:spec
19	construcción	construcción	NOUN	NCFS000	_	16	nmod	_	Treeler:sn
20	mostra	mostrar	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
21	un	un	DET	DI0MS0	_	22	det	_	Treeler:spec
22	perfil	perfil	NOUN	NCMS000	_	20	obj	_	Treeler:cd
23	desacelerado	desacelerar	VERB	VMP00SM	_	22	ccomp	_	SpaceAfter=No|Treeler:S
24	.	.	PUNCT	Fp	_	20	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 14 compound	color:blue
1	As	o	DET	DA0FP0	_	2	det	_	Treeler:spec
2	rexións	rexión	NOUN	NCFP000	_	24	nsubj	_	Treeler:suj
3	máis	máis	ADV	RG	_	4	advmod	_	Treeler:sadv
4	cálidas	cálido	ADJ	AQ0FP0	_	2	amod	_	Treeler:s.a
5	e	e	CCONJ	CC	_	4	cc	_	ToDo=cc-without-conj|Treeler:coord
6	húmidas	húmido	ADJ	AQ0FP0	_	4	dep	_	SpaceAfter=No|Treeler:grup.a
7	,	,	PUNCT	Fc	_	18	punct	_	Treeler:f
8	onde	onde	PRON	PR0CN000	_	18	nsubj	_	Treeler:suj
9	os	o	DET	DA0MP0	_	10	det	_	Treeler:spec
10	procesos	proceso	NOUN	NCMP000	_	18	nsubj	_	Treeler:suj
11	de	de	ADP	SPS00	_	13	case	_	Treeler:sp
12	o	o	DET	DA0MS0	_	13	det	_	Treeler:spec
13	ecosistema	ecosistema	NOUN	NCMS000	_	10	nmod	_	Treeler:sn
14	tenden	tender	VERB	VMIP3P0	_	18	compound	_	Treeler:v
15	a	a	ADP	SPS00	_	18	case	_	Treeler:s
16	ser	ser	AUX	VSN0000	_	18	cop	_	Treeler:S
17	máis	máis	ADV	RG	_	18	advmod	_	Treeler:spec
18	rápidos	rápido	ADJ	AQ0MP0	_	2	ccomp	_	SpaceAfter=No|Treeler:atr
19	,	,	PUNCT	Fc	_	22	punct	_	Treeler:f
20	en	en	ADP	SPS00	_	22	case	_	Treeler:cc
21	calquera	calquera	DET	DI0NN0	_	22	det	_	Treeler:spec
22	caso	caso	NOUN	NCMS000	_	18	obl	_	SpaceAfter=No|Treeler:sn
23	,	,	PUNCT	Fc	_	22	punct	_	Treeler:f
24	recuperarán	recuperar	VERB	VMIF3P0	_	0	root	_	Treeler:sentence
25	se	se	PRON	PP3CN000	_	24	dep	_	Treeler:morfema.pronominal
26	máis	máis	ADV	RG	_	24	case	_	Treeler:cc
27	axiña	axiña	ADV	RG	_	24	case	_	Treeler:cc
28	ca	ca	SCONJ	CS	_	31	mark	_	Treeler:conj
29	os	o	DET	DA0MP0	_	31	det	_	Treeler:spec
30	máis	máis	ADV	RG	_	31	advmod	_	Treeler:sadv
31	fríos	frío	ADJ	AQ0MP0	_	24	amod	_	ToDo=case-upos|Treeler:cc
32	e	e	CCONJ	CC	_	31	cc	_	ToDo=cc-without-conj|Treeler:coord
33	áridos	árido	ADJ	AQ0MP0	_	31	dep	_	SpaceAfter=No|Treeler:grup.a
34	.	.	PUNCT	Fp	_	24	punct	_	Treeler:f

~~~


