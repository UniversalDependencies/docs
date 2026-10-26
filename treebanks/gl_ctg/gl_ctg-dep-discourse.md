---
layout: base
title:  'Statistics of discourse in UD_Galician-CTG'
udver: '2'
---

## Treebank Statistics: UD_Galician-CTG: Relations: `discourse`

This relation is universal.

6 nodes (0%) are attached to their parents as `discourse`.

6 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.83333333333333.

The following 5 pairs of parts of speech are connected with `discourse`: <tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (2; 33% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-INTJ.html">INTJ</a></tt> (1; 17% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (1; 17% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 26 discourse	color:blue
1	Por	por	ADP	SPS00	_	2	case	_	Treeler:cc
2	conseguinte	conseguinte	ADJ	AQ0CS0	_	14	amod	_	SpaceAfter=No|Treeler:s.a
3	,	,	PUNCT	Fc	_	2	punct	_	Treeler:f
4	os	o	DET	DA0MP0	Definite=Def|PronType=Art	5	det	_	Treeler:spec
5	tres	tres	NOUN	NCMS000	_	14	nsubj	_	Treeler:suj
6	números	número	NOUN	NCMP000	_	5	nmod	_	Treeler:sn
7	necesarios	necesario	ADJ	AQ0MP0	_	6	amod	_	Treeler:s.a
8	para	para	ADP	SPS00	_	9	case	_	Treeler:sp
9	seleccionar	seleccionar	VERB	VMN0000	_	6	ccomp	_	Treeler:S
10	os	o	DET	DA0MP0	Definite=Def|PronType=Art	11	det	_	Treeler:spec
11	conglomerados	conglomerado	NOUN	NCMP000	_	9	obj	_	Treeler:cd
12	son	ser	AUX	VSIP1S0	_	14	cop	_	Treeler:sentence
13	os	o	DET	DA0MP0	Definite=Def|PronType=Art	14	det	_	Treeler:spec
14	seguintes	seguinte	ADJ	AQ0CP0	_	0	root	_	SpaceAfter=No|Treeler:atr
15	:	:	PUNCT	Fd	_	18	punct	_	Treeler:f
16	1º	1º	NUM	Z	_	18	discourse	_	SpaceAfter=No|Treeler:sn
17	:	:	PUNCT	Fd	_	16	punct	_	Treeler:f
18	R	r	NOUN	NCMS000	_	14	appos	_	SpaceAfter=No|Treeler:suj
19	=	=	SYM	Fz	_	20	cc	_	Treeler:f
20	434	434	NUM	Z	_	18	nummod	_	Treeler:spec
21	2º	2º	NOUN	NCCN000	_	23	discourse	_	SpaceAfter=No|Treeler:sn
22	:	:	PUNCT	Fd	_	21	punct	_	Treeler:f
23	R+I	r+i	PROPN	NP00000	_	18	conj	_	SpaceAfter=No|Treeler:suj
24	=	=	SYM	Fz	_	25	cc	_	Treeler:f
25	1.083	1.083	NUM	Z	_	23	nummod	_	Treeler:spec
26	3º	3º	NOUN	NCCN000	_	28	discourse	_	SpaceAfter=No|Treeler:sn
27	:	:	PUNCT	Fd	_	26	punct	_	Treeler:f
28	R+2I	r+2i	PROPN	NP00000	_	18	conj	_	SpaceAfter=No|Treeler:suj
29	=	=	SYM	Fz	_	28	cc	_	Treeler:f
30	1.732	1.732	NUM	Z	_	28	nmod	_	Treeler:sn
31	que	que	PRON	PR0CN000	PronType=Rel	32	nsubj	_	Treeler:suj
32	corresponden	corresponder	VERB	VMIP3P0	_	18	acl:relcl	_	Treeler:S
33	con	con	ADP	SPS00	_	36	case	_	Treeler:creg
34	o	o	DET	DA0MS0	Definite=Def|PronType=Art	36	det	_	Treeler:spec
35	primeiro	primeiro	ADJ	AO0MS0	_	36	amod	_	Treeler:s.a
36	grupo	grupo	NOUN	NCMS000	_	32	obl	_	Treeler:sn
37	de	de	ADP	SPS00	_	38	case	_	Treeler:sp
38	Santiago	santiago	PROPN	NP00000	_	36	nmod	_	SpaceAfter=No|Treeler:sn
39	,	,	PUNCT	Fc	_	40	punct	_	Treeler:f
40	Lugo	lugo	PROPN	NP00000	_	38	conj	_	Treeler:grup.nom
41	e	e	CCONJ	CC	_	42	cc	_	Treeler:coord
42	Pontevedra	pontevedra	PROPN	NP00000	_	38	conj	_	SpaceAfter=No|Treeler:grup.nom
43	,	,	PUNCT	Fc	_	46	punct	_	Treeler:f
44	sendo	ser	AUX	VSG0000	_	46	cop	_	Treeler:S
45	o	o	DET	DA0MS0	Definite=Def|PronType=Art	46	det	_	Treeler:spec
46	tamaño	tamaño	NOUN	NCMS000	_	32	advcl	_	Treeler:atr
47	final	final	ADJ	AQ0CS0	_	46	amod	_	Treeler:s.a
48	de	de	ADP	SPS00	_	50	case	_	Treeler:sp
49	a	o	DET	DA0FS0	Definite=Def|PronType=Art	50	det	_	Treeler:spec
50	mostra	mostra	NOUN	NCFS000	_	46	nmod	_	Treeler:sn
51	de	de	ADP	SPS00	_	53	case	_	Treeler:sp
52	720	720	NUM	Z	_	53	nummod	_	Treeler:spec
53	alumnos	alumno	NOUN	NCMP000	_	50	nmod	_	SpaceAfter=No|Treeler:sn
54	.	.	PUNCT	Fp	_	14	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 25 discourse	color:blue
1	Coñecer	coñecer	VERB	VMN0000	_	9	nsubj	_	Treeler:suj
2	estas	este	DET	DD0FP0	PronType=Dem	3	det	_	Treeler:spec
3	dinámicas	dinámica	NOUN	NCFP000	_	1	obj	_	Treeler:cd
4	e	e	CCONJ	CC	_	1	cc	_	Treeler:coord
5	a	a	ADP	SPS00	_	7	case	_	Treeler:ci
6	os	o	DET	DA0MP0	Definite=Def|PronType=Art	7	det	_	Treeler:spec
7	colectivos	colectivo	NOUN	NCMP000	_	9	iobj	_	Treeler:sn
8	implicados	implicado	ADJ	AQ0MP0	_	7	amod	_	Treeler:s.a
9	permitirá	permitir	VERB	VMIF3S0	_	0	root	_	Treeler:sentence
10	saber	saber	VERB	VMN0000	_	9	obj	_	Treeler:cd
11	cómo	cómo	ADV	RG	_	10	case	_	Treeler:cc
12	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	10	dep	_	Treeler:morfema.pronominal
13	xera	xerar	VERB	VMIP3S0	_	10	obj	_	Treeler:cd
14	a	o	DET	DA0FS0	Definite=Def|PronType=Art	15	det	_	Treeler:spec
15	exclusión	exclusión	NOUN	NCFS000	_	13	nsubj	_	Treeler:suj
16	e	e	CCONJ	CC	_	17	cc	_	Treeler:coord
17	anticipar	anticipar	VERB	VMN0000	_	10	conj	_	Treeler:S
18	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	17	dep	_	Treeler:morfema.pronominal
19	,	,	PUNCT	Fc	_	21	punct	_	Treeler:f
20	con	con	ADP	SPS00	_	21	case	_	Treeler:cc
21	alternativas	alternativa	NOUN	NCFP000	_	17	obl	_	Treeler:sn
22	e	e	CCONJ	CC	_	23	cc	_	Treeler:coord
23	propostas	proposta	NOUN	NCFP000	_	21	conj	_	SpaceAfter=No|Treeler:grup.nom
24	,	,	PUNCT	Fc	_	27	punct	_	Treeler:f
25	ó	ó	INTJ	I	_	27	discourse	_	Treeler:spec
26	dito	dicir	VERB	VMP00SM	_	27	ccomp	_	Treeler:S
27	fenómeno	fenómeno	NOUN	NCMS000	_	21	nmod	_	SpaceAfter=No|Treeler:sn
28	.	.	PUNCT	Fp	_	9	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 16 discourse	color:blue
1	Por	por	ADP	SPS00	_	2	case	_	Treeler:cc
2	conseguinte	conseguinte	ADJ	AQ0CS0	_	14	amod	_	SpaceAfter=No|Treeler:s.a
3	,	,	PUNCT	Fc	_	2	punct	_	Treeler:f
4	os	o	DET	DA0MP0	Definite=Def|PronType=Art	5	det	_	Treeler:spec
5	tres	tres	NOUN	NCMS000	_	14	nsubj	_	Treeler:suj
6	números	número	NOUN	NCMP000	_	5	nmod	_	Treeler:sn
7	necesarios	necesario	ADJ	AQ0MP0	_	6	amod	_	Treeler:s.a
8	para	para	ADP	SPS00	_	9	case	_	Treeler:sp
9	seleccionar	seleccionar	VERB	VMN0000	_	6	ccomp	_	Treeler:S
10	os	o	DET	DA0MP0	Definite=Def|PronType=Art	11	det	_	Treeler:spec
11	conglomerados	conglomerado	NOUN	NCMP000	_	9	obj	_	Treeler:cd
12	son	ser	AUX	VSIP1S0	_	14	cop	_	Treeler:sentence
13	os	o	DET	DA0MP0	Definite=Def|PronType=Art	14	det	_	Treeler:spec
14	seguintes	seguinte	ADJ	AQ0CP0	_	0	root	_	SpaceAfter=No|Treeler:atr
15	:	:	PUNCT	Fd	_	18	punct	_	Treeler:f
16	1º	1º	NUM	Z	_	18	discourse	_	SpaceAfter=No|Treeler:sn
17	:	:	PUNCT	Fd	_	16	punct	_	Treeler:f
18	R	r	NOUN	NCMS000	_	14	appos	_	SpaceAfter=No|Treeler:suj
19	=	=	SYM	Fz	_	20	cc	_	Treeler:f
20	434	434	NUM	Z	_	18	nummod	_	Treeler:spec
21	2º	2º	NOUN	NCCN000	_	23	discourse	_	SpaceAfter=No|Treeler:sn
22	:	:	PUNCT	Fd	_	21	punct	_	Treeler:f
23	R+I	r+i	PROPN	NP00000	_	18	conj	_	SpaceAfter=No|Treeler:suj
24	=	=	SYM	Fz	_	25	cc	_	Treeler:f
25	1.083	1.083	NUM	Z	_	23	nummod	_	Treeler:spec
26	3º	3º	NOUN	NCCN000	_	28	discourse	_	SpaceAfter=No|Treeler:sn
27	:	:	PUNCT	Fd	_	26	punct	_	Treeler:f
28	R+2I	r+2i	PROPN	NP00000	_	18	conj	_	SpaceAfter=No|Treeler:suj
29	=	=	SYM	Fz	_	28	cc	_	Treeler:f
30	1.732	1.732	NUM	Z	_	28	nmod	_	Treeler:sn
31	que	que	PRON	PR0CN000	PronType=Rel	32	nsubj	_	Treeler:suj
32	corresponden	corresponder	VERB	VMIP3P0	_	18	acl:relcl	_	Treeler:S
33	con	con	ADP	SPS00	_	36	case	_	Treeler:creg
34	o	o	DET	DA0MS0	Definite=Def|PronType=Art	36	det	_	Treeler:spec
35	primeiro	primeiro	ADJ	AO0MS0	_	36	amod	_	Treeler:s.a
36	grupo	grupo	NOUN	NCMS000	_	32	obl	_	Treeler:sn
37	de	de	ADP	SPS00	_	38	case	_	Treeler:sp
38	Santiago	santiago	PROPN	NP00000	_	36	nmod	_	SpaceAfter=No|Treeler:sn
39	,	,	PUNCT	Fc	_	40	punct	_	Treeler:f
40	Lugo	lugo	PROPN	NP00000	_	38	conj	_	Treeler:grup.nom
41	e	e	CCONJ	CC	_	42	cc	_	Treeler:coord
42	Pontevedra	pontevedra	PROPN	NP00000	_	38	conj	_	SpaceAfter=No|Treeler:grup.nom
43	,	,	PUNCT	Fc	_	46	punct	_	Treeler:f
44	sendo	ser	AUX	VSG0000	_	46	cop	_	Treeler:S
45	o	o	DET	DA0MS0	Definite=Def|PronType=Art	46	det	_	Treeler:spec
46	tamaño	tamaño	NOUN	NCMS000	_	32	advcl	_	Treeler:atr
47	final	final	ADJ	AQ0CS0	_	46	amod	_	Treeler:s.a
48	de	de	ADP	SPS00	_	50	case	_	Treeler:sp
49	a	o	DET	DA0FS0	Definite=Def|PronType=Art	50	det	_	Treeler:spec
50	mostra	mostra	NOUN	NCFS000	_	46	nmod	_	Treeler:sn
51	de	de	ADP	SPS00	_	53	case	_	Treeler:sp
52	720	720	NUM	Z	_	53	nummod	_	Treeler:spec
53	alumnos	alumno	NOUN	NCMP000	_	50	nmod	_	SpaceAfter=No|Treeler:sn
54	.	.	PUNCT	Fp	_	14	punct	_	Treeler:f

~~~


