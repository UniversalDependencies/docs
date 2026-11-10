---
layout: base
title:  'Statistics of csubj:pass in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="pt_portjur-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="pt_portjur-dep-csubj-outer.html">csubj:outer</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:pass`.

2 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 26 csubj:pass	color:blue
1	Em	em	ADP	_	_	3	case	_	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	provisão	provisão	NOUN	_	Gender=Fem|Number=Sing	25	obl	_	_
4	de	de	ADP	_	_	5	case	_	_
5	conexão	conexão	NOUN	_	Gender=Fem|Number=Sing	3	nmod	_	_
6	a	a	ADP	_	_	8	case	_	_
7	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	internet	internet	NOUN	_	Foreign=Yes|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	onerosa	oneroso	ADJ	_	Gender=Fem|Number=Sing	5	amod	_	_
11	ou	ou	CCONJ	_	_	12	cc	_	_
12	gratuita	gratuito	ADJ	_	Gender=Fem|Number=Sing	10	conj	_	SpaceAfter=No
13	,	,	PUNCT	_	_	18	punct	_	_
14	bem	bem	ADV	_	ExtPos=CCONJ	18	cc	_	_
15	como	como	CCONJ	_	_	14	fixed	_	_
16	em	em	ADP	_	_	18	case	_	_
17	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	transmissão	transmissão	NOUN	_	Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
19	,	,	PUNCT	_	_	20	punct	_	_
20	comutação	comutação	NOUN	_	Gender=Fem|Number=Sing	18	conj	_	_
21	ou	ou	CCONJ	_	_	22	cc	_	_
22	roteamento	roteamento	NOUN	_	Gender=Masc|Number=Sing	18	conj	_	SpaceAfter=No
23	,	,	PUNCT	_	_	3	punct	_	_
24	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	aux:pass	_	_
25	vedado	vedar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
26	bloquear	bloquear	VERB	_	VerbForm=Inf	25	csubj:pass	_	SpaceAfter=No
27	,	,	PUNCT	_	_	28	punct	_	_
28	monitorar	monitorar	VERB	_	VerbForm=Inf	26	conj	_	SpaceAfter=No
29	,	,	PUNCT	_	_	30	punct	_	_
30	filtrar	filtrar	VERB	_	VerbForm=Inf	26	conj	_	_
31	ou	ou	CCONJ	_	_	32	cc	_	_
32	analisar	analisar	VERB	_	VerbForm=Inf	26	conj	_	_
33	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	34	det	_	_
34	conteúdo	conteúdo	NOUN	_	Gender=Masc|Number=Sing	26	obj	_	_
35	de	de	ADP	_	_	37	case	_	_
36	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	37	det	_	_
37	pacotes	pacote	NOUN	_	Gender=Masc|Number=Plur	34	nmod	_	_
38	de	de	ADP	_	_	39	case	_	_
39	dados	dado	NOUN	_	Gender=Masc|Number=Plur	37	nmod	_	SpaceAfter=No
40	,	,	PUNCT	_	_	41	punct	_	_
41	respeitado	respeitar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	25	advcl	_	_
42	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	41	nsubj:pass	_	_
43	disposto	dispor	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	42	acl	_	_
44	em	em	ADP	_	_	46	case	_	_
45	este	este	DET	_	Gender=Masc|Number=Sing|PronType=Dem	46	det	_	_
46	artigo	artigo	NOUN	_	Gender=Masc|Number=Sing	43	obl	_	SpaceAfter=No
47	.	.	PUNCT	_	_	25	punct	_	_

~~~


