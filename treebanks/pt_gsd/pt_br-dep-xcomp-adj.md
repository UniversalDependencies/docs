---
layout: base
title:  'Statistics of xcomp:adj in UD_Portuguese-BR'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-BR: Relations: `xcomp:adj`

This relation is a language-specific subtype of <tt><a href="pt_br-dep-xcomp.html">xcomp</a></tt>.

1648 nodes (1%) are attached to their parents as `xcomp:adj`.

1625 instances of `xcomp:adj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.40958737864078.

The following 6 pairs of parts of speech are connected with `xcomp:adj`: <tt><a href="pt_br-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_br-pos-ADJ.html">ADJ</a></tt> (1642; 100% instances), <tt><a href="pt_br-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_br-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pt_br-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_br-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_br-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_br-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_br-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_br-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_br-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_br-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp:adj	color:blue
1	A	_	DET	DET	_	2	det	_	_
2	Nina	_	PROPN	PNOUN	_	5	nsubj	_	_
3	é	_	VERB	VERB	_	5	cop	_	_
4	a	_	DET	DET	_	5	det	_	_
5	chance	_	NOUN	NOUN	_	0	root	_	_
6	de	_	ADP	ADP	_	8	mark	_	_
7	ele	_	PRON	PRON	_	8	nsubj	_	_
8	ser	_	VERB	VERB	_	5	nmod	_	_
9	feliz	_	ADJ	ADJ	_	8	xcomp:adj	_	SpaceAfter=No
10	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 xcomp:adj	color:blue
1	"	_	PUNCT	.	_	6	punct	_	SpaceAfter=No
2	A	_	DET	DET	_	3	det	_	_
3	Europa	_	PROPN	PNOUN	_	6	nsubj	_	_
4	vai	_	AUX	AUX	_	6	aux	_	_
5	se	_	PART	PRT	_	6	expl:pv	_	_
6	recuperar	_	VERB	VERB	_	20	ccomp	_	_
7	e	_	CCONJ	CONJ	_	13	cc	_	_
8	estará	_	VERB	VERB	_	13	case	_	_
9	melhor	_	ADJ	ADJ	_	13	xcomp:adj	_	_
10	de	de	ADP	ADP	_	13	case	_	_
11	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
12	que	_	ADP	ADP	_	10	fixed	_	_
13	nós	_	PRON	PRON	_	6	conj	_	_
14	quando	_	CCONJ	CONJ	_	15	mark	_	_
15	terminar	_	VERB	VERB	_	13	advcl	_	_
16	a	_	DET	DET	_	17	det	_	_
17	crise	_	NOUN	NOUN	_	15	nsubj	_	SpaceAfter=No
18	"	_	PUNCT	.	_	6	punct	_	SpaceAfter=No
19	,	_	PUNCT	.	_	20	punct	_	_
20	assinalou	_	VERB	VERB	_	0	root	_	_
21	Gurría	_	PROPN	PNOUN	_	20	nsubj	_	SpaceAfter=No
22	.	_	PUNCT	.	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 xcomp:adj	color:blue
1	O	_	DET	DET	_	2	det	_	_
2	ombré	_	NOUN	NOUN	_	5	nsubj	_	_
3	é	_	VERB	VERB	_	5	cop	_	_
4	um	_	DET	DET	_	5	det	_	_
5	estilo	_	NOUN	NOUN	_	0	root	_	_
6	de	_	ADP	ADP	_	7	case	_	_
7	cor	_	NOUN	NOUN	_	5	nmod	_	_
8	que	_	PRON	PRON	_	9	nsubj	_	_
9	aparece	_	VERB	VERB	_	5	acl:relcl	_	_
10	roupas	_	NOUN	NOUN	_	9	dep	_	_
11	em	_	ADP	ADP	_	12	case	_	_
12	efeito	_	NOUN	NOUN	_	10	nmod	_	_
13	degradê	_	ADJ	ADJ	_	12	amod	_	SpaceAfter=No
14	,	_	PUNCT	.	_	15	punct	_	_
15	digamos	_	VERB	VERB	_	5	parataxis	_	_
16	que	_	CCONJ	CONJ	_	18	mark	_	_
17	ele	_	PRON	PRON	_	18	nsubj	_	_
18	é	_	VERB	VERB	_	15	ccomp	_	_
19	um	_	DET	DET	_	20	det	_	_
20	primo	_	ADJ	ADJ	_	18	xcomp:adj	_	_
21	próximo	_	ADJ	ADJ	_	20	xcomp:adj	_	_
22	de	_	ADP	ADP	_	23	case	_	_
23	tye	_	NOUN	NOUN	_	20	nmod	_	_
24	-	_	PUNCT	.	_	23	punct	_	_
25	dye	_	NOUN	NOUN	_	23	flat	_	SpaceAfter=No
26	,	_	PUNCT	.	_	23	punct	_	_
27	só	_	ADV	ADV	_	31	mark	_	_
28	que	_	ADP	ADP	_	27	fixed	_	_
29	mais	_	ADV	ADV	_	31	advmod	_	_
30	"	_	PUNCT	.	_	31	punct	_	SpaceAfter=No
31	arrumadinho	_	ADJ	ADJ	_	20	nmod	_	SpaceAfter=No
32	"	_	PUNCT	.	_	31	punct	_	SpaceAfter=No
33	,	_	PUNCT	.	_	45	punct	_	_
34	umas	_	DET	DET	_	45	mark	_	_
35	vez	_	NOUN	NOUN	_	34	fixed	_	_
36	que	_	CCONJ	CONJ	_	34	fixed	_	_
37	as	_	DET	DET	_	38	det	_	_
38	marcas	_	NOUN	NOUN	_	45	nsubj	_	_
39	de	de	ADP	ADP	_	41	case	_	_
40	as	o	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	41	det	_	_
41	divisões	_	NOUN	NOUN	_	38	nmod	_	_
42	de	de	ADP	ADP	_	44	case	_	_
43	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	44	det	_	_
44	cor	_	NOUN	NOUN	_	41	nmod	_	_
45	são	_	VERB	VERB	_	18	advcl	_	_
46	bem	_	ADV	ADV	_	47	advmod	_	_
47	mais	_	ADV	ADV	_	48	advmod	_	_
48	retas	_	ADJ	ADJ	_	45	xcomp:adj	_	_
49	e	_	CCONJ	CONJ	_	50	cc	_	_
50	uniformes	_	ADJ	ADJ	_	48	conj	_	SpaceAfter=No
51	.	_	PUNCT	.	_	5	punct	_	_

~~~


