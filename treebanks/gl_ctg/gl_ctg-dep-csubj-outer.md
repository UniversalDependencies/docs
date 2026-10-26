---
layout: base
title:  'Statistics of csubj:outer in UD_Galician-CTG'
udver: '2'
---

## Treebank Statistics: UD_Galician-CTG: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="gl_ctg-dep-csubj.html">csubj</a></tt>.

6 nodes (0%) are attached to their parents as `csubj:outer`.

6 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 11.

The following 2 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (4; 67% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (2; 33% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 7 csubj:outer	color:blue
1	Sen	sen	ADP	SPS00	_	2	case	_	Treeler:cc
2	embargo	embargo	NOUN	NCMS000	_	7	obl	_	SpaceAfter=No|Treeler:sn
3	,	,	PUNCT	Fc	_	2	punct	_	Treeler:f
4	debe	deber	AUX	VMIP3S0	_	7	aux	_	Treeler:v
5	así	así	ADV	RG	_	7	case	_	Treeler:cc
6	mesmo	mesmo	DET	DI0MS0	PronType=Ind	7	det	_	Treeler:spec
7	ter	ter	VERB	VMN0000	_	26	csubj:outer	_	Treeler:suj
8	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	7	dep	_	Treeler:morfema.pronominal
9	en	en	ADP	SPS00	_	10	case	_	Treeler:cc
10	conta	conta	NOUN	NCFS000	_	7	obl	_	Treeler:sn
11	que	que	PRON	PR0CN000	PronType=Rel	26	nsubj	_	Treeler:suj
12	en	en	ADP	SPS00	_	14	case	_	Treeler:cc
13	esas	ese	DET	DD0FP0	PronType=Dem	14	det	_	Treeler:spec
14	sociedades	sociedade	NOUN	NCFP000	_	26	obl	_	Treeler:sn
15	a	a	ADP	SPS00	_	16	case	_	Treeler:sp
16	capacidade	capacidade	NOUN	NCFS000	_	14	nmod	_	Treeler:sn
17	de	de	ADP	SPS00	_	19	case	_	Treeler:sp
18	as	o	DET	DA0FP0	Definite=Def|PronType=Art	19	det	_	Treeler:spec
19	mulleres	muller	NOUN	NCFP000	_	16	nmod	_	Treeler:sn
20	de	de	ADP	SPS00	_	21	case	_	Treeler:sp
21	tomar	tomar	VERB	VMN0000	_	19	ccomp	_	Treeler:S
22	calquera	calquera	DET	DI0NN0	PronType=Ind	23	det	_	Treeler:spec
23	decisión	decisión	NOUN	NCFS000	_	21	obj	_	Treeler:cd
24	é	ser	AUX	VSIP3S0	_	26	cop	_	Treeler:sentence
25	moi	moi	ADV	RG	_	26	advmod	_	Treeler:spec
26	baixa	baixo	ADJ	AQ0FS0	_	0	root	_	Treeler:atr
27	(	(	PUNCT	Fpa	_	28	punct	_	SpaceAfter=No|Treeler:f
28	Lin	lin	PROPN	NP00000	Foreign=Yes	26	flat	_	Treeler:inc
29	L.	l.	PROPN	NP00000	_	28	flat	_	Treeler:cd
30	Lim	lim	PROPN	NP00000	Foreign=Yes	28	flat	_	SpaceAfter=No
31	,	,	PUNCT	Fc	_	32	punct	_	Treeler:f
32	1993	1993	NUM	Z	_	28	nmod	_	SpaceAfter=No
33	)	)	PUNCT	Fpt	_	28	punct	_	SpaceAfter=No
34	.	.	PUNCT	Fp	_	26	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 20 csubj:outer	color:blue
1	Para	para	ADP	SPS00	_	2	case	_	Treeler:cc
2	coñecer	coñecer	VERB	VMN0000	_	18	ccomp	_	Treeler:S
3	as	o	DET	DA0FP0	Definite=Def|PronType=Art	4	det	_	Treeler:spec
4	problemáticas	problemática	NOUN	NCFP000	_	2	obj	_	Treeler:cd
5	específicas	específico	ADJ	AQ0FP0	_	4	amod	_	Treeler:s.a
6	de	de	ADP	SPS00	_	8	case	_	Treeler:sp
7	os	o	DET	DA0MP0	Definite=Def|PronType=Art	8	det	_	Treeler:spec
8	inmigrantes	inmigrante	NOUN	NCCP000	_	4	nmod	_	Treeler:sn
9	(	(	PUNCT	Fpa	_	10	punct	_	SpaceAfter=No|Treeler:f
10	Punto	punto	NOUN	NCMS000	Foreign=Yes	2	flat	_	Treeler:inc
11	2	2	NUM	Z	_	10	nmod	_	SpaceAfter=No|Treeler:sn
12	)	)	PUNCT	Fpt	_	10	punct	_	Treeler:f
13	ademais	ademais	ADV	RG	_	2	advmod	_	Treeler:cc
14	de	de	ADP	SPS00	_	15	case	_	Treeler:sp
15	documentar	documentar	VERB	VMN0000	_	2	ccomp	_	Treeler:S
16	nos	nos	PRON	PP1CP000	PronType=Prs	15	dep	_	Treeler:morfema.pronominal
17	,	,	PUNCT	Fc	_	2	punct	_	Treeler:f
18	temos	ter	VERB	VMIP1P0	_	0	root	_	Treeler:sentence
19	que	que	SCONJ	CS	_	34	mark	_	Treeler:conj
20	tomar	tomar	VERB	VMN0000	_	34	csubj:outer	_	Treeler:suj
21	contacto	contacto	NOUN	NCMS000	_	20	obj	_	Treeler:cd
22	con	con	ADP	SPS00	_	24	case	_	Treeler:sp
23	os	o	DET	DA0MP0	Definite=Def|PronType=Art	24	det	_	Treeler:spec
24	inmigrantes	inmigrante	NOUN	NCCP000	_	21	nmod	_	Treeler:sn
25	e	e	CCONJ	CC	_	26	cc	_	Treeler:coord
26	saber	saber	VERB	VMN0000	_	20	conj	_	Treeler:S
27	que	que	DET	DT0CN0	PronType=Rel	34	nsubj	_	Treeler:suj
28	é	ser	AUX	VSIP3S0	_	34	cop	_	Treeler:cd
29	o	o	DET	DA0MS0	Definite=Def|PronType=Art	34	det	_	Treeler:spec
30	que	que	PRON	PR0CN000	PronType=Rel	34	obj	_	Treeler:cd
31	realmente	real	ADV	RG	_	34	case	_	Treeler:cc
32	están	estar	AUX	VMIP3P0	_	34	aux	_	Treeler:v
33	a	a	ADP	SPS00	_	34	case	_	Treeler:s
34	necesitar	necesitar	VERB	VMN0000	_	18	obj	_	SpaceAfter=No|Treeler:atr
35	.	.	PUNCT	Fp	_	18	punct	_	Treeler:f

~~~


