---
layout: base
title:  'Statistics of nummod in UD_Galician-CTG'
udver: '2'
---

## Treebank Statistics: UD_Galician-CTG: Relations: `nummod`

This relation is universal.

553 nodes (0%) are attached to their parents as `nummod`.

368 instances of `nummod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.50271247739602.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (352; 64% instances), <tt><a href="gl_ctg-pos-DET.html">DET</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (128; 23% instances), <tt><a href="gl_ctg-pos-ADV.html">ADV</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (25; 5% instances), <tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (24; 4% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (11; 2% instances), <tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (5; 1% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 nummod	color:blue
1	A	o	DET	DA0FS0	_	3	det	_	Treeler:spec
2	súa	seu	DET	DP3FS0	_	3	det	_	Treeler:spec
3	taxa	taxa	NOUN	NCFS000	_	6	nsubj	_	Treeler:suj
4	de	de	ADP	SPS00	_	5	case	_	Treeler:sp
5	crecemento	crecemento	NOUN	NCMS000	_	3	nmod	_	Treeler:sn
6	sitúa	situar	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
7	se	se	PRON	PP3CN000	_	6	dep	_	Treeler:morfema.pronominal
8	en	en	ADP	SPS00	_	10	case	_	Treeler:cc
9	o	o	DET	DA0MS0	_	10	det	_	Treeler:spec
10	4,1	4,1	NUM	Z	_	6	obl	_	SpaceAfter=No|Treeler:sn
11	%	%	SYM	Ft	_	10	nmod	_	Treeler:sn
12	e	e	CCONJ	CC	_	6	cc	_	ToDo=cc-without-conj|Treeler:coord
13	a	o	DET	DA0FS0	_	15	det	_	Treeler:spec
14	súa	seu	DET	DP3FS0	_	15	det	_	Treeler:spec
15	contribución	contribución	NOUN	NCFS000	_	19	nsubj	_	Treeler:suj
16	a	a	ADP	SPS00	_	18	case	_	Treeler:sp
17	o	o	DET	DA0MS0	_	18	det	_	Treeler:spec
18	PIB	pib	PROPN	NP00000	_	15	nmod	_	Treeler:sn
19	cifra	cifrar	VERB	VMIP3S0	_	6	ccomp	_	Treeler:S
20	se	se	PRON	PP3CN000	_	19	dep	_	Treeler:morfema.pronominal
21	en	en	ADP	SPS00	_	23	case	_	Treeler:cc
22	0,3	0,3	NUM	Z	_	23	nummod	_	Treeler:spec
23	puntos	punto	NOUN	NCMP000	_	19	obl	_	SpaceAfter=No|Treeler:sn
24	.	.	PUNCT	Fp	_	6	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nummod	color:blue
1	Os	o	DET	DA0MP0	_	2	det	_	Treeler:spec
2	resultados	resultado	NOUN	NCMP000	_	3	nsubj	_	Treeler:suj
3	indican	indicar	VERB	VMIP3P0	_	0	root	_	Treeler:sentence
4	un	un	DET	DI0MS0	_	5	det	_	Treeler:spec
5	custo	custo	NOUN	NCMS000	_	3	obj	_	Treeler:cd
6	que	que	PRON	PR0CN000	_	7	nsubj	_	Treeler:suj
7	oscila	oscilar	VERB	VMIP3S0	_	5	ccomp	_	Treeler:S
8	entre	entre	ADP	SPS00	_	14	case	_	Treeler:cc
9	os	o	DET	DA0MP0	_	14	det	_	Treeler:spec
10	88.000	88.000	NUM	Z	_	9	nummod	_	Treeler:z
11	e	e	CCONJ	CC	_	9	cc	_	ToDo=cc-without-conj|Treeler:coord
12	os	o	DET	DA0MP0	_	14	det	_	Treeler:spec
13	134.300	134.300	NUM	Z	_	12	nummod	_	Treeler:z
14	millóns	millón	NOUN	NCMP000	_	7	obl	_	Treeler:sn
15	de	de	ADP	SPS00	_	16	case	_	Treeler:sp
16	pesetas	peseta	NOUN	NCFP000	_	14	nmod	_	Treeler:sn
17	(	(	PUNCT	Fpa	_	19	punct	_	SpaceAfter=No|Treeler:f
18	de	de	ADP	SPS00	_	19	case	_	Treeler:sp
19	467	467	NUM	Z	_	14	nmod	_	Treeler:sn
20	a	a	ADP	SPS00	_	22	case	_	Treeler:sp
21	707	707	NUM	Z	_	22	nummod	_	Treeler:spec
22	millóns	millón	NOUN	NCMP000	_	19	nmod	_	Treeler:sn
23	de	de	ADP	SPS00	_	24	case	_	Treeler:sp
24	dólares	dólar	NOUN	NCMP000	_	22	nmod	_	SpaceAfter=No|Treeler:sn
25	)	)	PUNCT	Fpt	_	19	punct	_	SpaceAfter=No|Treeler:f
26	.	.	PUNCT	Fp	_	3	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 24 nummod	color:blue
1	En	en	ADP	SPS00	_	3	case	_	Treeler:cc
2	as	o	DET	DA0FP0	_	3	det	_	Treeler:spec
3	épocas	época	NOUN	NCFP000	_	6	obl	_	Treeler:sn
4	máis	máis	ADV	RG	_	5	advmod	_	Treeler:spec
5	chuviosas	chuvioso	ADJ	AQ0FP0	_	3	amod	_	Treeler:s.a
6	agochan	agochar	VERB	VMIP3P0	_	0	root	_	Treeler:sentence
7	se	se	PRON	PP3CN000	_	6	dep	_	Treeler:morfema.pronominal
8	tras	tras	ADP	SPS00	_	11	case	_	Treeler:cc
9	de	de	ADP	SPS00	_	11	case	_	Treeler:sp
10	o	o	DET	DA0MS0	_	11	det	_	Treeler:spec
11	veo	veo	NOUN	NCMS000	_	6	obl	_	Treeler:sn
12	de	de	ADP	SPS00	_	15	case	_	Treeler:sp
13	unha	un	DET	DI0FS0	_	15	det	_	Treeler:spec
14	fina	fino	ADJ	AQ0FS0	_	15	amod	_	Treeler:s.a
15	fervenza	fervenza	NOUN	NCFS000	_	11	nmod	_	SpaceAfter=No|Treeler:sn
16	,	,	PUNCT	Fc	_	19	punct	_	Treeler:f
17	que	que	PRON	PR0CN000	_	19	nsubj	_	Treeler:suj
18	se	se	PRON	PP3CN000	_	19	obj	_	Treeler:cd
19	precipita	precipitar	VERB	VMIP3S0	_	15	ccomp	_	Treeler:S
20	dende	dende	ADP	SPS00	_	25	case	_	Treeler:cc
21	algo	algo	PRON	PI0CN000	_	22	dep	_	Treeler:p
22	máis	máis	ADV	RG	_	25	advmod	_	Treeler:spec
23	de	de	ADP	SPS00	_	22	case	_	Treeler:sp
24	15	15	NUM	Z	_	22	nummod	_	Treeler:z
25	m	m	NOUN	NCMS000	_	19	obl	_	SpaceAfter=No|Treeler:sn
26	.	.	PUNCT	Fp	_	6	punct	_	Treeler:f

~~~


