---
layout: base
title:  'Statistics of acl:relcl in UD_Galician-CTG'
udver: '2'
---

## Treebank Statistics: UD_Galician-CTG: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="gl_ctg-dep-acl.html">acl</a></tt>.

57 nodes (0%) are attached to their parents as `acl:relcl`.

57 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.4385964912281.

The following 8 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (42; 74% instances), <tt><a href="gl_ctg-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (7; 12% instances), <tt><a href="gl_ctg-pos-DET.html">DET</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 acl:relcl	color:blue
1	As	o	DET	DA0FP0	Definite=Def|PronType=Art	2	det	_	Treeler:spec
2	bases	base	NOUN	NCFP000	_	18	nsubj	_	Treeler:suj
3	sobre	sobre	ADP	SPS00	_	4	case	_	Treeler:sp
4	as	o	DET	DA0FP0	Definite=Def|PronType=Art	10	obl	_	Treeler:spec
5	que	que	SCONJ	CS	_	10	mark	_	Treeler:sn
6	o	o	DET	DA0MS0	Definite=Def|PronType=Art	7	det	_	Treeler:spec
7	Plan	plan	NOUN	NCMS000	_	10	nsubj	_	Treeler:suj
8	de	de	ADP	SPS00	_	9	case	_	Treeler:sp
9	modernización	modernización	NOUN	NCFS000	_	7	nmod	_	Treeler:sn
10	plantea	plantea	VERB	VMSP3S0	_	2	acl:relcl	_	Treeler:S
11	o	o	DET	DA0MS0	Definite=Def|PronType=Art	13	det	_	Treeler:spec
12	novo	novo	ADJ	AQ0MS0	_	13	amod	_	Treeler:s.a
13	modelo	modelo	NOUN	NCCS000	_	10	obj	_	Treeler:suj
14	de	de	ADP	SPS00	_	15	case	_	Treeler:sp
15	xestión	xestión	NOUN	NCFS000	_	13	nmod	_	Treeler:sn
16	municipal	municipal	ADJ	AQ0CS0	_	15	amod	_	Treeler:s.a
17	poden	poder	AUX	VMIP3P0	_	18	aux	_	Treeler:v
18	resumir	resumir	VERB	VMN0000	_	0	root	_	Treeler:sentence
19	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	18	dep	_	Treeler:morfema.pronominal
20	en	en	ADP	SPS00	_	23	case	_	Treeler:cc
21	os	o	DET	DA0MP0	Definite=Def|PronType=Art	23	det	_	Treeler:spec
22	seguintes	seguinte	ADJ	AQ0CP0	_	23	amod	_	Treeler:s.a
23	puntos	punto	NOUN	NCMP000	_	18	obl	_	SpaceAfter=No|Treeler:sn
24	:	:	PUNCT	Fd	_	23	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 18 acl:relcl	color:blue
1	Unha	un	DET	DI0FS0	Definite=Ind|PronType=Art	2	det	_	Treeler:spec
2	transformación	transformación	NOUN	NCFS000	_	0	root	_	Treeler:suj
3	que	que	PRON	PR0CN000	PronType=Rel	2	ccomp	_	SpaceAfter=No|Treeler:suj
4	,	,	PUNCT	Fc	_	18	punct	_	Treeler:f
5	xunto	xunto	ADJ	AQ0MS0	_	18	amod	_	Treeler:s.a
6	a	a	ADP	SPS00	_	13	case	_	Treeler:sp
7	outras	outro	DET	DI0FP0	PronType=Ind	8	det	_	Treeler:spec
8	necesárias	necesárias	ADJ	AQ0FP0	_	13	nmod	_	SpaceAfter=No|Treeler:sn
9	,	,	PUNCT	Fc	_	10	punct	_	Treeler:f
10	daria	daria	ADJ	AQ0FS0	_	8	amod	_	Treeler:sa
11	un	un	DET	DI0MS0	Definite=Ind|PronType=Art	13	det	_	Treeler:spec
12	duro	duro	ADJ	AQ0MS0	_	13	amod	_	Treeler:s.a
13	revés	revés	NOUN	NCMS000	_	5	nmod	_	Treeler:sn
14	a	a	ADP	SPS00	_	16	case	_	Treeler:sp
15	esa	ese	DET	DD0FS0	PronType=Dem	16	det	_	Treeler:spec
16	masculinidade	masculinidade	NOUN	NCFS000	_	13	nmod	_	Treeler:sn
17	que	que	PRON	PR0CN000	PronType=Rel	18	nsubj	_	Treeler:suj
18	sustenta	sustentar	VERB	VMIP3S0	_	3	acl:relcl	_	Treeler:S
19	o	o	DET	DA0MS0	Definite=Def|PronType=Art	20	det	_	Treeler:spec
20	poder	poder	VERB	VMN0000	_	18	obj	_	Treeler:cd
21	de	de	ADP	SPS00	_	22	case	_	Treeler:sp
22	domínio	domínio	NOUN	NCMS000	_	20	obl	_	SpaceAfter=No|Treeler:sn
23	,	,	PUNCT	Fc	_	24	punct	_	Treeler:f
24	e	e	CCONJ	CC	_	2	cc	_	Treeler:coord
25	que	que	PRON	PR0CN000	PronType=Rel	28	obj	_	Treeler:cd
26	tanta	tanto	DET	DI0FS0	PronType=Dem	27	det	_	Treeler:spec
27	violénncia	violénncia	NOUN	NCFS000	_	28	nsubj	_	Treeler:suj
28	xera	xerar	VERB	VMIP3S0	_	2	acl:relcl	_	SpaceAfter=No|Treeler:sentence
29	.	.	PUNCT	Fp	_	28	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl:relcl	color:blue
1	Os	o	DET	DA0MP0	Definite=Def|PronType=Art	2	det	_	Treeler:spec
2	estratos	estrato	NOUN	NCMP000	_	7	nsubj	_	Treeler:suj
3	C	c	NOUN	NCMS000	_	2	nmod	_	Treeler:suj
4	e	e	CCONJ	CC	_	5	cc	_	Treeler:coord
5	D	d	NOUN	NCMS000	_	3	conj	_	Treeler:grup.nom
6	son	ser	AUX	VSIP1S0	_	7	cop	_	Treeler:sentence
7	os	o	DET	DA0MP0	Definite=Def|PronType=Art	0	root	_	Treeler:spec
8	que	que	PRON	PR0CN000	PronType=Rel	9	nsubj	_	Treeler:suj
9	dispoñen	dispoñer	VERB	VMIP3P0	_	7	acl:relcl	_	Treeler:atr
10	porcentualmente	porcentual	ADV	RG	_	9	case	_	Treeler:cc
11	de	de	ADP	SPS00	_	14	case	_	Treeler:creg
12	un	un	DET	DI0MS0	Definite=Ind|PronType=Art	14	det	_	Treeler:spec
13	maior	maior	ADJ	AQ0CS0	_	14	amod	_	Treeler:s.a
14	número	número	NOUN	NCMS000	_	9	obl	_	Treeler:sn
15	de	de	ADP	SPS00	_	16	case	_	Treeler:sp
16	máquinas	máquina	NOUN	NCFP000	_	14	nmod	_	SpaceAfter=No|Treeler:sn
17	,	,	PUNCT	Fc	_	18	punct	_	Treeler:f
18	así	así	ADV	RG	_	16	advmod	_	Treeler:sadv
19	como	como	SCONJ	CS	_	20	mark	_	Treeler:sp
20	tamén	tamén	ADV	RG	_	16	advmod	_	Treeler:sadv
21	de	de	ADP	SPS00	_	24	case	_	Treeler:sp
22	a	o	DET	DA0FS0	Definite=Def|PronType=Art	24	det	_	Treeler:spec
23	máis	máis	ADV	RG	_	24	advmod	_	Treeler:spec
24	moderna	moderno	ADJ	AQ0FS0	_	20	obl	_	SpaceAfter=No|Treeler:sn
25	.	.	PUNCT	Fp	_	7	punct	_	Treeler:f

~~~


