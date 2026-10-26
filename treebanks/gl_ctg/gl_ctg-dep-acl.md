---
layout: base
title:  'Statistics of acl in UD_Galician-CTG'
udver: '2'
---

## Treebank Statistics: UD_Galician-CTG: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="gl_ctg-dep-acl-relcl.html">acl:relcl</a></tt>.

18 nodes (0%) are attached to their parents as `acl`.

17 instances of `acl` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (15; 83% instances), <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="gl_ctg-pos-DET.html">DET</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	A	o	DET	DA0FS0	Definite=Def|PronType=Art	2	det	_	Treeler:spec
2	proporción	proporción	NOUN	NCFS000	_	20	nsubj	_	Treeler:suj
3	de	de	ADP	SPS00	_	4	case	_	Treeler:sp
4	mostras	mostra	NOUN	NCFP000	_	2	nmod	_	Treeler:sn
5	tomadas	tomar	VERB	VMP00PF	_	4	acl	_	Treeler:S
6	a	a	ADP	SPS00	_	9	case	_	Treeler:creg
7	o	o	DET	DA0MS0	Definite=Def|PronType=Art	9	det	_	Treeler:spec
8	3º	3º	NUM	Z	_	9	nummod	_	Treeler:spec
9	día	día	NOUN	NCMS000	_	5	obl	_	Treeler:sn
10	de	de	ADP	SPS00	_	11	case	_	Treeler:sp
11	vida	vida	NOUN	NCFS000	_	9	nmod	_	Treeler:sn
12	en	en	ADP	SPS00	_	14	case	_	Treeler:cc
13	o	o	DET	DA0MS0	Definite=Def|PronType=Art	14	det	_	Treeler:spec
14	ano	ano	NOUN	NCMS000	_	5	obl	_	Treeler:sn
15	2002	2002	NUM	Z	_	14	nmod	_	Treeler:sn
16	foi	ser	AUX	VSIS3S0	_	20	cop	_	Treeler:sentence
17	de	de	ADP	SPS00	_	20	case	_	Treeler:atr
18	o	o	DET	DA0MS0	Definite=Def|PronType=Art	20	det	_	Treeler:spec
19	3,38	3,38	NUM	Z	_	20	nummod	_	SpaceAfter=No|Treeler:sn
20	%	%	SYM	Ft	_	0	root	_	Treeler:f
21	mentres	mentres	ADV	RG	_	31	case	_	Treeler:cc
22	que	que	SCONJ	CS	_	31	mark	_	Treeler:conj
23	en	en	ADP	SPS00	_	25	case	_	Treeler:cc
24	o	o	DET	DA0MS0	Definite=Def|PronType=Art	25	det	_	Treeler:spec
25	ano	ano	NOUN	NCMS000	_	31	obl	_	Treeler:sn
26	2004	2004	NUM	Z	_	25	nmod	_	Treeler:sn
27	foi	ser	AUX	VSIS3S0	_	31	cop	_	Treeler:atr
28	de	de	ADP	SPS00	_	31	case	_	Treeler:atr
29	o	o	DET	DA0MS0	Definite=Def|PronType=Art	31	det	_	Treeler:spec
30	39	39	NUM	Z	_	31	nummod	_	SpaceAfter=No|Treeler:sn
31	%	%	SYM	Ft	_	20	conj	_	SpaceAfter=No|Treeler:sn
32	.	.	PUNCT	Fp	_	20	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 acl	color:blue
1	Por	por	ADP	SPS00	_	3	case	_	Treeler:cc
2	o	o	DET	DA0MS0	Definite=Def|PronType=Art	3	det	_	Treeler:spec
3	lado	lado	NOUN	NCMS000	_	8	obl	_	Treeler:sn
4	de	de	ADP	SPS00	_	6	case	_	Treeler:sp
5	os	o	DET	DA0MP0	Definite=Def|PronType=Art	6	det	_	Treeler:spec
6	elementos	elemento	NOUN	NCMP000	_	3	nmod	_	Treeler:sn
7	institucionais	institucional	ADJ	AQ0CP0	_	6	amod	_	Treeler:s.a
8	aparecen	aparecer	VERB	VMIP3P0	_	0	root	_	Treeler:sentence
9	variables	variable	ADJ	AQ0CP0	_	8	nsubj	_	Treeler:cpred
10	relacionadas	relacionar	VERB	VMP00PF	_	9	acl	_	Treeler:cpred
11	con	con	ADP	SPS00	_	13	case	_	Treeler:creg
12	o	o	DET	DA0MS0	Definite=Def|PronType=Art	13	det	_	Treeler:spec
13	nivel	nivel	NOUN	NCMS000	_	10	obl	_	Treeler:sn
14	competencial	competencial	ADJ	AQ0MS0	_	13	amod	_	SpaceAfter=No|Treeler:s.a
15	,	,	PUNCT	Fc	_	17	punct	_	Treeler:f
16	as	o	DET	DA0FP0	Definite=Def|PronType=Art	17	det	_	Treeler:spec
17	CC.	CC.	NOUN	NCFP000	_	13	conj	_	SpaceAfter=No
18	AA.	AA.	ADJ	AQ0FP0	_	17	amod	_	_
19	uniprovinciais	uniprovincial	ADJ	AQ0CP0	_	17	amod	_	SpaceAfter=No
20	,	,	PUNCT	Fc	_	22	punct	_	_
21	a	o	DET	DA0FS0	Definite=Def|PronType=Art	22	det	_	_
22	evolución	evolución	NOUN	NCFS000	_	13	conj	_	_
23	de	de	ADP	SPS00	_	25	case	_	_
24	o	o	DET	DA0MS0	Definite=Def|PronType=Art	25	det	_	_
25	sistema	sistema	NOUN	NCMS000	_	22	nmod	_	_
26	de	de	ADP	SPS00	_	27	case	_	_
27	financiamento	financiamento	NOUN	NCMS000	_	25	nmod	_	_
28	e	e	CCONJ	CC	_	31	cc	_	_
29	a	o	DET	DA0FS0	Definite=Def|PronType=Art	31	det	_	_
30	posible	posible	ADJ	AQ0CS0	_	31	amod	_	_
31	eficacia	eficacia	NOUN	NCFS000	_	13	conj	_	_
32	de	de	ADP	SPS00	_	34	case	_	_
33	o	o	DET	DA0MS0	Definite=Def|PronType=Art	34	det	_	_
34	límite	límite	NOUN	NCMS000	_	31	nmod	_	_
35	máximo	máximo	ADJ	AQ0MS0	_	34	amod	_	_
36	de	de	ADP	SPS00	_	37	case	_	_
37	endebedamento	endebedamento	NOUN	NCMS000	_	34	nmod	_	_
38	establecido	establecer	VERB	VMP00SM	_	37	ccomp	_	_
39	por	por	ADP	SPS00	_	41	case	_	_
40	a	o	DET	DA0FS0	Definite=Def|PronType=Art	41	det	_	_
41	LOFCA	Lofca	NOUN	NCFS000	_	38	obl	_	_
42	con	con	ADP	SPS00	_	43	case	_	_
43	relación	relación	NOUN	NCFS000	_	41	nmod	_	_
44	a	a	ADP	SPS00	_	46	case	_	_
45	os	o	DET	DA0MP0	Definite=Def|PronType=Art	46	det	_	_
46	ingresos	ingreso	NOUN	NCMP000	_	43	nmod	_	_
47	correntes	corrente	ADJ	AQ0CP0	_	46	amod	_	SpaceAfter=No
48	.	.	PUNCT	Fp	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 32 acl	color:blue
1	Entenderá	entender	VERB	VMIF3S0	_	0	root	_	Treeler:sentence
2	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	1	dep	_	Treeler:morfema.pronominal
3	por	por	ADP	SPS00	_	4	case	_	Treeler:cc
4	gases	gas	NOUN	NCMP000	_	1	obl	_	Treeler:sn
5	medicinais	medicinal	ADJ	AQ0CP0	_	4	amod	_	Treeler:s.a
6	licuados	licuar	VERB	VMP00PM	_	4	ccomp	_	Treeler:S
7	o	o	DET	DA0MS0	Definite=Def|PronType=Art	8	det	_	Treeler:spec
8	osíxeno	osíxeno	NOUN	NCMS000	_	6	xcomp	_	Treeler:cpred
9	líquido	líquido	ADJ	AQ0MS0	_	8	amod	_	SpaceAfter=No|Treeler:s.a
10	,	,	PUNCT	Fc	_	11	punct	_	Treeler:f
11	nitróxeno	nitróxeno	NOUN	NCMS000	_	8	conj	_	Treeler:sn
12	líquido	líquido	ADJ	AQ0MS0	_	11	amod	_	Treeler:s.a
13	e	e	CCONJ	CC	_	14	cc	_	Treeler:coord
14	protóxido	protóxido	NOUN	NCMS000	_	8	conj	_	Treeler:S
15	de	de	ADP	SPS00	_	16	case	_	Treeler:sp
16	nitróxeno	nitróxeno	NOUN	NCMS000	_	14	nmod	_	Treeler:sn
17	líquido	líquido	ADJ	AQ0MS0	_	16	amod	_	SpaceAfter=No|Treeler:s.a
18	,	,	PUNCT	Fc	_	22	punct	_	Treeler:f
19	así	así	ADV	RG	_	22	advmod	_	Treeler:sadv
20	como	como	SCONJ	CS	_	22	mark	_	Treeler:conj
21	calquera	calquera	DET	DI0NN0	PronType=Ind	22	det	_	Treeler:f
22	outro	outro	DET	DI0MS0	PronType=Ind	8	nmod	_	Treeler:d
23	que	que	PRON	PR0CN000	PronType=Rel	32	nsubj	_	SpaceAfter=No|Treeler:suj
24	,	,	PUNCT	Fc	_	27	punct	_	Treeler:f
25	con	con	ADP	SPS00	_	27	case	_	Treeler:cc
26	similares	similar	ADJ	AQ0CP0	_	27	amod	_	Treeler:s.a
27	características	característica	NOUN	NCFP000	_	32	obl	_	Treeler:sn
28	e	e	CCONJ	CC	_	29	cc	_	Treeler:coord
29	utilización	utilización	NOUN	NCFS000	_	27	conj	_	SpaceAfter=No|Treeler:grup.nom
30	,	,	PUNCT	Fc	_	27	punct	_	Treeler:f
31	poida	poder	AUX	VMSP1S0	_	32	aux	_	Treeler:v
32	fabricar	fabricar	VERB	VMN0000	_	22	acl	_	Treeler:S
33	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	32	dep	_	Treeler:morfema.pronominal
34	en	en	ADP	SPS00	_	36	case	_	Treeler:cc
35	o	o	DET	DA0MS0	Definite=Def|PronType=Art	36	det	_	Treeler:spec
36	futuro	futuro	NOUN	NCMS000	_	32	obl	_	SpaceAfter=No|Treeler:sn
37	.	.	PUNCT	Fp	_	1	punct	_	Treeler:f

~~~


