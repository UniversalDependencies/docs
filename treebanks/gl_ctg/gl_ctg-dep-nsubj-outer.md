---
layout: base
title:  'Statistics of nsubj:outer in UD_Galician-CTG'
udver: '2'
---

## Treebank Statistics: UD_Galician-CTG: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="gl_ctg-dep-nsubj.html">nsubj</a></tt>.

110 nodes (0%) are attached to their parents as `nsubj:outer`.

110 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 11.0363636363636.

The following 14 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (33; 30% instances), <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (29; 26% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (19; 17% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt> (9; 8% instances), <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="gl_ctg-pos-ADP.html">ADP</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="gl_ctg-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 8 nsubj:outer	color:blue
1	Entre	entre	ADP	SPS00	_	3	case	_	Treeler:cc
2	os	o	DET	DA0MP0	Definite=Def|PronType=Art	3	det	_	Treeler:spec
3	sistemas	sistema	NOUN	NCMP000	_	15	obl	_	Treeler:sn
4	de	de	ADP	SPS00	_	5	case	_	Treeler:sp
5	desulfuración	desulfuración	NOUN	NCFS000	_	3	nmod	_	SpaceAfter=No|Treeler:sn
6	,	,	PUNCT	Fc	_	3	punct	_	Treeler:f
7	os	o	DET	DA0MP0	Definite=Def|PronType=Art	8	det	_	Treeler:spec
8	procesos	proceso	NOUN	NCMP000	_	15	nsubj:outer	_	Treeler:suj
9	por	por	ADP	SPS00	_	10	case	_	Treeler:sp
10	vía	vía	NOUN	NCFS000	_	8	nmod	_	Treeler:sn
11	húmida	húmido	ADJ	AQ0FS0	_	10	amod	_	Treeler:s.a
12	son	ser	AUX	VSIP1S0	_	15	cop	_	Treeler:sentence
13	os	o	DET	DA0MP0	Definite=Def|PronType=Art	15	det	_	Treeler:spec
14	que	que	PRON	PR0CN000	PronType=Rel	15	nsubj	_	Treeler:suj
15	acadaron	acadar	VERB	VMIS3P0	_	0	root	_	Treeler:atr
16	maior	maior	ADJ	AQ0CS0	_	17	amod	_	Treeler:s.a
17	difusión	difusión	NOUN	NCFS000	_	15	obj	_	Treeler:cd
18	(	(	PUNCT	Fpa	_	19	punct	_	SpaceAfter=No|Treeler:f
19	80	80	NUM	Z	Foreign=Yes	15	flat	_	SpaceAfter=No|Treeler:inc
20	%	%	SYM	Ft	_	19	nmod	_	SpaceAfter=No|Treeler:sn
21	)	)	PUNCT	Fpt	_	19	punct	_	Treeler:f
22	ata	ata	ADP	SPS00	_	24	case	_	Treeler:cc
23	o	o	DET	DA0MS0	Definite=Def|PronType=Art	24	det	_	Treeler:spec
24	momento	momento	NOUN	NCMS000	_	15	obl	_	SpaceAfter=No|Treeler:sn
25	.	.	PUNCT	Fp	_	15	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 22 nsubj:outer	color:blue
1	Pretende	pretender	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
2	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	1	obj	_	Treeler:cd
3	o	o	DET	DA0MS0	Definite=Def|PronType=Art	5	det	_	Treeler:spec
4	mesmo	mesmo	DET	DI0MS0	PronType=Ind	5	det	_	Treeler:d
5	obxectivo	obxectivo	NOUN	NCMS000	_	1	nsubj	_	Treeler:suj
6	ca	ca	SCONJ	CS	_	10	mark	_	Treeler:conj
7	en	en	ADP	SPS00	_	10	case	_	Treeler:cc
8	a	o	DET	DA0FS0	Definite=Def|PronType=Art	10	det	_	Treeler:spec
9	anterior	anterior	ADJ	AQ0CS0	_	10	amod	_	Treeler:s.a
10	análise	análise	NOUN	NCFS000	_	1	obl	_	Treeler:sn
11	de	de	ADP	SPS00	_	13	case	_	Treeler:sp
12	a	o	DET	DA0FS0	Definite=Def|PronType=Art	13	det	_	Treeler:spec
13	variación	variación	NOUN	NCFS000	_	10	nmod	_	Treeler:sn
14	de	de	ADP	SPS00	_	16	case	_	Treeler:sp
15	o	o	DET	DA0MS0	Definite=Def|PronType=Art	16	det	_	Treeler:spec
16	fixo	facer	VERB	VMIS3S0	_	13	nmod	_	SpaceAfter=No|Treeler:sn
17	,	,	PUNCT	Fc	_	18	punct	_	Treeler:f
18	por	por	ADP	SPS00	_	16	case	_	Treeler:cc
19	o	o	DET	DA0MS0	Definite=Def|PronType=Art	27	det	_	Treeler:spec
20	que	que	SCONJ	CS	_	27	mark	_	Treeler:conj
21	o	o	DET	DA0MS0	Definite=Def|PronType=Art	22	det	_	Treeler:spec
22	procedemento	procedemento	NOUN	NCMS000	_	27	nsubj:outer	_	Treeler:suj
23	que	que	PRON	PR0CN000	PronType=Rel	24	obj	_	Treeler:cd
24	compre	comprar	VERB	VMSP1S0	_	22	ccomp	_	Treeler:S
25	seguir	seguir	VERB	VMN0000	_	27	nsubj	_	Treeler:suj
26	é	ser	AUX	VSIP3S0	_	27	cop	_	Treeler:cd
27	idéntico	idéntico	ADJ	AQ0MS0	_	16	obj	_	SpaceAfter=No|Treeler:atr
28	.	.	PUNCT	Fp	_	1	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 2 nsubj:outer	color:blue
1	Un	un	DET	DI0MS0	Definite=Ind|PronType=Art	2	det	_	Treeler:spec
2	plano	plano	NOUN	NCMS000	_	21	nsubj:outer	_	Treeler:suj
3	que	que	PRON	PR0CN000	PronType=Rel	4	nsubj	_	Treeler:suj
4	concibe	concibir	VERB	VMIP3S0	_	2	ccomp	_	Treeler:S
5	principalmente	principal	ADV	RG	_	4	case	_	Treeler:cc
6	a	o	DET	DA0FS0	Definite=Def|PronType=Art	7	det	_	Treeler:spec
7	auga	auga	NOUN	NCFS000	_	4	obj	_	Treeler:cd
8	como	como	PRON	PR0CN000	PronType=Rel	10	nmod	_	Treeler:relatiu
9	un	un	DET	DI0MS0	Definite=Ind|PronType=Art	10	det	_	Treeler:spec
10	recurso	recurso	NOUN	NCMS000	_	7	nmod	_	Treeler:sn
11	productivo	productivo	ADJ	AQ0MS0	_	10	amod	_	Treeler:s.a
12	e	e	CCONJ	CC	_	4	cc	_	Treeler:coord
13	non	non	PART	RN	_	21	advmod	_	Treeler:mod
14	como	como	PRON	PR0CN000	PronType=Rel	16	nmod	_	Treeler:suj
15	un	un	DET	DI0MS0	Definite=Ind|PronType=Art	16	det	_	Treeler:spec
16	activo	activo	NOUN	NCMS000	_	21	advcl	_	Treeler:suj
17	ecosocial	ecosocial	ADJ	AQ0MS0	_	16	amod	_	Treeler:s.a
18	non	non	PART	RN	_	21	advmod	_	Treeler:mod
19	é	ser	AUX	VSIP3S0	_	21	cop	_	Treeler:sentence
20	un	un	DET	DI0MS0	Definite=Ind|PronType=Art	21	det	_	Treeler:spec
21	plano	plano	NOUN	NCMS000	_	0	root	_	Treeler:atr
22	sustentábel	sustentábel	ADJ	AQ0CS0	_	21	amod	_	SpaceAfter=No|Treeler:s.a
23	.	.	PUNCT	Fp	_	21	punct	_	Treeler:f

~~~


