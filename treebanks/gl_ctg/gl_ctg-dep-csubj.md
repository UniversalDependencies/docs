---
layout: base
title:  'Statistics of csubj in UD_Galician-CTG'
udver: '2'
---

## Treebank Statistics: UD_Galician-CTG: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="gl_ctg-dep-csubj-outer.html">csubj:outer</a></tt>.

4 nodes (0%) are attached to their parents as `csubj`.

3 instances of `csubj` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj	color:blue
1	Que	que	SCONJ	CS	_	4	cc	_	Treeler:et
2	é	ser	AUX	VSIP3S0	_	4	cop	_	Treeler:sentence
3	máis	máis	ADV	RG	_	4	advmod	_	Treeler:cc
4	bonito	bonito	ADJ	AQ0MS0	_	0	root	_	Treeler:atr
5	vivir	vivir	VERB	VMN0000	_	4	csubj	_	Treeler:suj
6	en	en	ADP	SPS00	_	7	case	_	Treeler:cc
7	USA	usar	VERB	VMIP3S0	_	5	obl	_	SpaceAfter=No|Treeler:S
8	,	,	PUNCT	Fc	_	9	punct	_	Treeler:f
9	Suecia	suecia	PROPN	NP00000	_	7	conj	_	Treeler:suj
10	ou	ou	CCONJ	CC	_	11	cc	_	Treeler:coord
11	Inglaterra	inglaterra	PROPN	NP00000	_	7	conj	_	SpaceAfter=No|Treeler:grup.nom
12	,	,	PUNCT	Fc	_	16	punct	_	Treeler:f
13	cal	cal	PRON	PR0CS000	PronType=Rel	16	nsubj	_	Treeler:suj
14	destes	dar	VERB	VMIS2P0	_	13	nmod	_	Treeler:suj
15	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	16	obj	_	Treeler:cd
16	achega	achegar	VERB	VMIP3S0	_	4	conj	_	Treeler:S
17	máis	máis	ADV	RG	_	16	advmod	_	Treeler:cc
18	a	a	ADP	SPS00	_	20	case	_	Treeler:cd
19	o	o	DET	DA0MS0	Definite=Def|PronType=Art	20	det	_	Treeler:spec
20	socialismo	socialismo	NOUN	NCMS000	_	17	obl	_	Treeler:sn
21	de	de	ADP	SPS00	_	23	case	_	Treeler:sp
22	o	o	DET	DA0MS0	Definite=Def|PronType=Art	23	det	_	Treeler:spec
23	século	século	NOUN	NCMS000	_	20	nmod	_	Treeler:sn
24	XXI	xxi	NUM	Z	_	23	nmod	_	SpaceAfter=No|Treeler:sn
25	?	?	PUNCT	Fit	_	4	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 csubj	color:blue
1	Por	por	ADP	SPS00	_	5	case	_	Treeler:cc
2	o	o	DET	DA0MS0	Definite=Def|PronType=Art	3	det	_	Treeler:spec
3	tanto	tanto	ADV	RG	_	5	obl	_	SpaceAfter=No|Treeler:sn
4	,	,	PUNCT	Fc	_	3	punct	_	Treeler:f
5	pasado	pasar	VERB	VMP00SM	_	12	obl	_	Treeler:sn
6	este	este	DET	DD0MS0	PronType=Dem	7	det	_	Treeler:spec
7	período	período	NOUN	NCMS000	_	5	nsubj	_	SpaceAfter=No|Treeler:suj
8	,	,	PUNCT	Fc	_	5	punct	_	Treeler:f
9	decidir	decidir	VERB	VMN0000	_	12	csubj	_	Treeler:suj
10	a	o	DET	DA0FS0	Definite=Def|PronType=Art	11	det	_	Treeler:spec
11	investigación	investigación	NOUN	NCFS000	_	9	obj	_	Treeler:suj
12	queda	quedar	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
13	a	o	DET	DA0FS0	Definite=Def|PronType=Art	14	det	_	Treeler:spec
14	criterio	criterio	NOUN	NCMS000	_	12	xcomp	_	Treeler:suj
15	de	de	ADP	SPS00	_	17	case	_	Treeler:sp
16	o	o	DET	DA0MS0	Definite=Def|PronType=Art	17	det	_	Treeler:spec
17	clínico	clínico	ADJ	AQ0MS0	_	14	nmod	_	SpaceAfter=No|Treeler:sn
18	,	,	PUNCT	Fc	_	21	punct	_	Treeler:f
19	que	que	PRON	PR0CN000	PronType=Rel	21	nsubj	_	Treeler:suj
20	debe	deber	AUX	VMIP3S0	_	21	aux	_	Treeler:v
21	ter	ter	VERB	VMN0000	_	14	ccomp	_	Treeler:S
22	presente	presente	ADJ	AQ0CS0	_	21	xcomp	_	Treeler:cpred
23	o	o	DET	DA0MS0	Definite=Def|PronType=Art	24	det	_	Treeler:spec
24	grao	grao	NOUN	NCMS000	_	21	obj	_	Treeler:cd
25	en	en	ADP	SPS00	_	27	case	_	Treeler:cc
26	o	o	DET	DA0MS0	Definite=Def|PronType=Art	27	det	_	Treeler:spec
27	que	que	PRON	PR0CN000	PronType=Rel	30	obl	_	Treeler:sn
28	pode	poder	AUX	VMIP3S0	_	30	aux	_	Treeler:v
29	estar	estar	AUX	VMN0000	_	30	cop	_	Treeler:S
30	errada	errar	VERB	VMP00SF	_	24	ccomp	_	Treeler:atr
31	a	o	DET	DA0FS0	Definite=Def|PronType=Art	32	det	_	Treeler:spec
32	estimación	estimación	NOUN	NCFS000	_	30	nsubj	_	Treeler:suj
33	de	de	ADP	SPS00	_	35	case	_	Treeler:sp
34	o	o	DET	DA0MS0	Definite=Def|PronType=Art	35	det	_	Treeler:spec
35	período	período	NOUN	NCMS000	_	32	nmod	_	Treeler:sn
36	de	de	ADP	SPS00	_	37	case	_	Treeler:sp
37	xestación	xestación	NOUN	NCFS000	_	35	nmod	_	Treeler:sn
38	e	e	CCONJ	CC	_	39	cc	_	Treeler:coord
39	que	que	PRON	PR0CN000	PronType=Rel	30	conj	_	Treeler:S
40	un	un	DET	DI0MS0	Definite=Ind|PronType=Art	41	det	_	Treeler:spec
41	diagnóstico	diagnóstico	NOUN	NCMS000	_	30	ccomp	_	Treeler:S
42	específico	específico	ADJ	AQ0MS0	_	41	amod	_	SpaceAfter=No|Treeler:s.a
43	:	:	PUNCT	Fd	_	21	punct	_	Treeler:f

~~~


