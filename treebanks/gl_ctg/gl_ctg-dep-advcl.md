---
layout: base
title:  'Statistics of advcl in UD_Galician-CTG'
udver: '2'
---

## Treebank Statistics: UD_Galician-CTG: Relations: `advcl`

This relation is universal.

738 nodes (1%) are attached to their parents as `advcl`.

580 instances of `advcl` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.40108401084011.

The following 19 pairs of parts of speech are connected with `advcl`: <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (416; 56% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (112; 15% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (81; 11% instances), <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (49; 7% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt> (36; 5% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (14; 2% instances), <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="gl_ctg-pos-ADP.html">ADP</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="gl_ctg-pos-DET.html">DET</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="gl_ctg-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 advcl	color:blue
1	Non	non	PART	RN	_	2	advmod	_	Treeler:mod
2	parece	parecer	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
3	necesario	necesario	ADJ	AQ0MS0	_	2	xcomp	_	Treeler:atr
4	detenérmonos	detenérmonos	NOUN	NCMP000	_	2	xcomp	_	Treeler:atr
5	en	en	ADP	SPS00	_	7	case	_	Treeler:sp
6	a	o	DET	DA0FS0	Definite=Def|PronType=Art	7	det	_	Treeler:spec
7	significación	significación	NOUN	NCFS000	_	4	nmod	_	Treeler:sn
8	que	que	SCONJ	CS	_	11	mark	_	Treeler:conj
9	a	o	DET	DA0FS0	Definite=Def|PronType=Art	10	det	_	Treeler:spec
10	Rede	rede	NOUN	NCFS000	_	11	nsubj	_	Treeler:suj
11	ten	ter	VERB	VMIP3S0	_	2	advcl	_	Treeler:cc
12	en	en	ADP	SPS00	_	14	case	_	Treeler:cc
13	o	o	DET	DA0MS0	Definite=Def|PronType=Art	14	det	_	Treeler:spec
14	horizonte	horizonte	NOUN	NCMS000	_	11	obl	_	Treeler:sn
15	social	social	ADJ	AQ0CS0	_	14	amod	_	SpaceAfter=No|Treeler:s.a
16	,	,	PUNCT	Fc	_	17	punct	_	Treeler:f
17	cultural	cultural	ADJ	AQ0CS0	_	15	dep	_	SpaceAfter=No|Treeler:grup.a
18	,	,	PUNCT	Fc	_	17	punct	_	Treeler:f
19	económico	económico	ADJ	AQ0MS0	_	15	dep	_	Treeler:grup.a
20	e	e	CCONJ	CC	_	21	cc	_	Treeler:coord
21	político	político	ADJ	AQ0MS0	_	15	conj	_	Treeler:grup.a
22	de	de	ADP	SPS00	_	25	case	_	Treeler:sp
23	o	o	DET	DA0MS0	Definite=Def|PronType=Art	25	det	_	Treeler:spec
24	novo	novo	ADJ	AQ0MS0	_	25	amod	_	Treeler:s.a
25	século	século	NOUN	NCMS000	_	14	nmod	_	SpaceAfter=No|Treeler:sn
26	.	.	PUNCT	Fp	_	11	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 advcl	color:blue
1	A	o	DET	DA0FS0	Definite=Def|PronType=Art	2	det	_	Treeler:spec
2	faceta	faceta	NOUN	NCFS000	_	7	nsubj	_	Treeler:suj
3	máis	máis	ADV	RG	_	4	advmod	_	Treeler:sadv
4	sinxela	sinxelo	ADJ	AQ0FS0	_	2	amod	_	Treeler:s.a
5	e	e	CCONJ	CC	_	6	cc	_	Treeler:coord
6	artesanal	artesanal	ADJ	AQ0CS0	_	4	conj	_	Treeler:grup.a
7	ten	ter	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
8	como	como	PRON	PR0CN000	PronType=Rel	9	nmod	_	Treeler:suj
9	obxecto	obxecto	NOUN	NCMS000	_	7	advcl	_	Treeler:cd
10	a	o	DET	DA0FS0	Definite=Def|PronType=Art	11	det	_	Treeler:spec
11	captura	captura	NOUN	NCFS000	_	7	obj	_	Treeler:cd
12	de	de	ADP	SPS00	_	13	case	_	Treeler:sp
13	moluscos	moluscos	NOUN	NCMP000	_	11	nmod	_	Treeler:sn
14	en	en	ADP	SPS00	_	16	case	_	Treeler:sp
15	os	o	DET	DA0MP0	Definite=Def|PronType=Art	16	det	_	Treeler:spec
16	areais	areal	NOUN	NCMP000	_	11	nmod	_	Treeler:sn
17	costeiros	costeiro	ADJ	AQ0MP0	_	16	amod	_	Treeler:s.a
18	e	e	CCONJ	CC	_	19	cc	_	Treeler:coord
19	fai	facer	VERB	VMIP3S0	_	7	conj	_	Treeler:S
20	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	19	dep	_	Treeler:morfema.pronominal
21	a	o	DET	DA0FS0	Definite=Def|PronType=Art	22	det	_	Treeler:spec
22	pé	pé	NOUN	NCMS000	_	19	obj	_	SpaceAfter=No|Treeler:cd
23	.	.	PUNCT	Fp	_	7	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 22 advcl	color:blue
1	Non	non	PART	RN	_	3	advmod	_	Treeler:mod
2	é	ser	AUX	VSIP3S0	_	3	cop	_	Treeler:sentence
3	raro	raro	ADJ	AQ0MS0	_	0	root	_	Treeler:atr
4	atopar	atopar	VERB	VMN0000	_	3	nsubj	_	Treeler:suj
5	solos	solo	NOUN	NCMP000	_	4	obj	_	Treeler:cd
6	con	con	ADP	SPS00	_	8	case	_	Treeler:cc
7	bo	bo	ADJ	AQ0MS0	_	8	amod	_	Treeler:s.a
8	contido	contido	NOUN	NCMS000	_	4	obl	_	Treeler:sn
9	en	en	ADP	SPS00	_	10	case	_	Treeler:sp
10	fósforo	fósforo	NOUN	NCMS000	_	8	nmod	_	SpaceAfter=No|Treeler:sn
11	,	,	PUNCT	Fc	_	22	punct	_	Treeler:f
12	como	como	PRON	PR0CN000	PronType=Rel	22	nmod	_	Treeler:suj
13	consecuencia	consecuencia	NOUN	NCFS000	_	12	nmod	_	Treeler:sn
14	de	de	ADP	SPS00	_	16	case	_	Treeler:sp
15	unha	un	DET	DI0FS0	Definite=Ind|PronType=Art	16	det	_	Treeler:spec
16	época	época	NOUN	NCFS000	_	13	nmod	_	Treeler:sn
17	en	en	ADP	SPS00	_	22	case	_	Treeler:cc
18	a	o	DET	DA0FS0	Definite=Def|PronType=Art	22	dep	_	Treeler:infinitiu
19	que	que	SCONJ	CS	_	22	mark	_	Treeler:conj
20	só	só	ADV	RG	_	22	case	_	Treeler:cc
21	lle	lle	PRON	PP3CSD00	PronType=Prs	22	obj	_	Treeler:cd
22	botaban	botar	VERB	VMII3P0	_	8	advcl	_	Treeler:S
23	mineral	mineral	NOUN	NCMS000	_	22	obj	_	Treeler:cd
24	(	(	PUNCT	Fpa	_	25	punct	_	SpaceAfter=No|Treeler:f
25	superfosfato	superfosfato	NOUN	NCMS000	_	23	nmod	_	SpaceAfter=No|Treeler:sn
26	)	)	PUNCT	Fpt	_	25	punct	_	SpaceAfter=No|Treeler:f
27	.	.	PUNCT	Fp	_	3	punct	_	Treeler:f

~~~


