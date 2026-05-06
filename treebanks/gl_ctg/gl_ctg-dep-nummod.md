---
layout: base
title:  'Statistics of nummod in UD_Galician-CTG'
udver: '2'
---

## Treebank Statistics: UD_Galician-CTG: Relations: `nummod`

This relation is universal.

545 nodes (0%) are attached to their parents as `nummod`.

492 instances of `nummod` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53577981651376.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (467; 86% instances), <tt><a href="gl_ctg-pos-ADV.html">ADV</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (25; 5% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (16; 3% instances), <tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (15; 3% instances), <tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (10; 2% instances), <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="gl_ctg-pos-SYM.html">SYM</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (6; 1% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 nummod	color:blue
1	A	o	DET	DA0FS0	Definite=Def|PronType=Art	3	det	_	Treeler:spec
2	súa	seu	DET	DP3FS0	Poss=Yes|PronType=Prs	3	det	_	Treeler:spec
3	taxa	taxa	NOUN	NCFS000	_	6	nsubj	_	Treeler:suj
4	de	de	ADP	SPS00	_	5	case	_	Treeler:sp
5	crecemento	crecemento	NOUN	NCMS000	_	3	nmod	_	Treeler:sn
6	sitúa	situar	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
7	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	6	dep	_	Treeler:morfema.pronominal
8	en	en	ADP	SPS00	_	10	case	_	Treeler:cc
9	o	o	DET	DA0MS0	Definite=Def|PronType=Art	10	det	_	Treeler:spec
10	4,1	4,1	NUM	Z	_	6	obl	_	SpaceAfter=No|Treeler:sn
11	%	%	SYM	Ft	_	10	nmod	_	Treeler:sn
12	e	e	CCONJ	CC	_	19	cc	_	Treeler:coord
13	a	o	DET	DA0FS0	Definite=Def|PronType=Art	15	det	_	Treeler:spec
14	súa	seu	DET	DP3FS0	Poss=Yes|PronType=Prs	15	det	_	Treeler:spec
15	contribución	contribución	NOUN	NCFS000	_	19	nsubj	_	Treeler:suj
16	a	a	ADP	SPS00	_	18	case	_	Treeler:sp
17	o	o	DET	DA0MS0	Definite=Def|PronType=Art	18	det	_	Treeler:spec
18	PIB	pib	PROPN	NP00000	_	15	nmod	_	Treeler:sn
19	cifra	cifrar	VERB	VMIP3S0	_	6	conj	_	Treeler:S
20	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	19	dep	_	Treeler:morfema.pronominal
21	en	en	ADP	SPS00	_	23	case	_	Treeler:cc
22	0,3	0,3	NUM	Z	_	23	nummod	_	Treeler:spec
23	puntos	punto	NOUN	NCMP000	_	19	obl	_	SpaceAfter=No|Treeler:sn
24	.	.	PUNCT	Fp	_	6	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 24 nummod	color:blue
1	En	en	ADP	SPS00	_	3	case	_	Treeler:cc
2	as	o	DET	DA0FP0	Definite=Def|PronType=Art	3	det	_	Treeler:spec
3	épocas	época	NOUN	NCFP000	_	6	obl	_	Treeler:sn
4	máis	máis	ADV	RG	_	5	advmod	_	Treeler:spec
5	chuviosas	chuvioso	ADJ	AQ0FP0	_	3	amod	_	Treeler:s.a
6	agochan	agochar	VERB	VMIP3P0	_	0	root	_	Treeler:sentence
7	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	6	dep	_	Treeler:morfema.pronominal
8	tras	tras	ADP	SPS00	_	11	case	_	Treeler:cc
9	de	de	ADP	SPS00	_	11	case	_	Treeler:sp
10	o	o	DET	DA0MS0	Definite=Def|PronType=Art	11	det	_	Treeler:spec
11	veo	veo	NOUN	NCMS000	_	6	obl	_	Treeler:sn
12	de	de	ADP	SPS00	_	15	case	_	Treeler:sp
13	unha	un	DET	DI0FS0	Definite=Ind|PronType=Art	15	det	_	Treeler:spec
14	fina	fino	ADJ	AQ0FS0	_	15	amod	_	Treeler:s.a
15	fervenza	fervenza	NOUN	NCFS000	_	11	nmod	_	SpaceAfter=No|Treeler:sn
16	,	,	PUNCT	Fc	_	19	punct	_	Treeler:f
17	que	que	PRON	PR0CN000	PronType=Rel	19	nsubj	_	Treeler:suj
18	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	19	obj	_	Treeler:cd
19	precipita	precipitar	VERB	VMIP3S0	_	15	ccomp	_	Treeler:S
20	dende	dende	ADP	SPS00	_	25	case	_	Treeler:cc
21	algo	algo	PRON	PI0CN000	PronType=Ind	22	dep	_	Treeler:p
22	máis	máis	ADV	RG	_	25	advmod	_	Treeler:spec
23	de	de	ADP	SPS00	_	22	case	_	Treeler:sp
24	15	15	NUM	Z	_	22	nummod	_	Treeler:z
25	m	m	NOUN	NCMS000	_	19	obl	_	SpaceAfter=No|Treeler:sn
26	.	.	PUNCT	Fp	_	6	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 21 nummod	color:blue
1	Estes	este	DET	DD0MP0	PronType=Dem	2	det	_	Treeler:spec
2	anticorpos	anticorpo	NOUN	NCMP000	_	5	nsubj	_	Treeler:suj
3	chegan	chegar	VERB	VMIP3P0	_	5	compound	_	Treeler:v
4	a	a	ADP	SPS00	_	5	case	_	Treeler:s
5	acadar	acadar	VERB	VMN0000	_	0	root	_	Treeler:sentence
6	uns	un	DET	DI0MP0	PronType=Ind	7	det	_	Treeler:spec
7	niveis	nivel	NOUN	NCMP000	_	5	obj	_	Treeler:cd
8	que	que	PRON	PR0CN000	PronType=Rel	9	nsubj	_	Treeler:suj
9	garanten	garantir	VERB	VMIP3P0	_	7	ccomp	_	Treeler:S
10	a	o	DET	DA0FS0	Definite=Def|PronType=Art	11	det	_	Treeler:spec
11	protección	protección	NOUN	NCFS000	_	9	obj	_	SpaceAfter=No|Treeler:cd
12	,	,	PUNCT	Fc	_	16	punct	_	Treeler:f
13	que	que	PRON	PR0CN000	PronType=Rel	16	nsubj	_	Treeler:suj
14	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	16	obj	_	Treeler:cd
15	pode	poder	AUX	VMIP3S0	_	16	aux	_	Treeler:v
16	considerar	considerar	VERB	VMN0000	_	11	ccomp	_	Treeler:S
17	permanente	permanente	ADJ	AQ0CS0	_	16	xcomp	_	SpaceAfter=No|Treeler:cpred
18	,	,	PUNCT	Fc	_	19	punct	_	Treeler:f
19	aproximadamente	aproximadamente	ADV	RG	_	16	advmod	_	Treeler:sadv
20	uns	un	DET	DI0MP0	PronType=Ind	16	det	_	Treeler:spec
21	7-14	7-14	NUM	Z	_	16	nummod	_	Treeler:z
22	días	día	NOUN	NCMP000	_	16	nmod	_	Treeler:cc
23	despois	despois	ADV	RG	_	16	advmod	_	Treeler:sadv
24	de	de	ADP	SPS00	_	26	case	_	Treeler:sp
25	a	o	DET	DA0FS0	Definite=Def|PronType=Art	26	det	_	Treeler:spec
26	infección	infección	NOUN	NCFS000	_	23	obl	_	SpaceAfter=No|Treeler:sn
27	.	.	PUNCT	Fp	_	5	punct	_	Treeler:f

~~~


