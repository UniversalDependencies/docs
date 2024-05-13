---
layout: base
title:  'Statistics of conj in UD_Galician-CTG'
udver: '2'
---

## Treebank Statistics: UD_Galician-CTG: Relations: `conj`

This relation is universal.

22 nodes (0%) are attached to their parents as `conj`.

22 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.18181818181818.

The following 9 pairs of parts of speech are connected with `conj`: <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (9; 41% instances), <tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt> (3; 14% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (2; 9% instances), <tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (2; 9% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_ctg-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 33 conj	color:blue
1	Respecto	respecto	NOUN	NCMS000	_	0	root	_	Treeler:sentence
2	de	de	ADP	SPS00	_	4	case	_	Treeler:sp
3	a	o	DET	DA0FS0	_	4	det	_	Treeler:spec
4	percepción	percepción	NOUN	NCFS000	_	1	nmod	_	Treeler:sn
5	que	que	PRON	PR0CN000	_	11	nsubj	_	SpaceAfter=No|Treeler:suj
6	,	,	PUNCT	Fc	_	8	punct	_	Treeler:f
7	en	en	ADP	SPS00	_	8	case	_	Treeler:cc
8	liñas	liña	NOUN	NCFP000	_	11	obl	_	Treeler:sn
9	xerais	xeral	ADJ	AQ0CP0	_	8	amod	_	SpaceAfter=No|Treeler:s.a
10	,	,	PUNCT	Fc	_	8	punct	_	Treeler:f
11	posúen	posuír	VERB	VMIP3P0	_	4	ccomp	_	Treeler:S
12	os	o	DET	DA0MP0	_	13	det	_	Treeler:spec
13	cativos	cativo	ADJ	AQ0MP0	_	11	nsubj	_	Treeler:suj
14	e	e	CCONJ	CC	_	13	cc	_	ToDo=cc-without-conj|Treeler:coord
15	cativas	cativo	ADJ	AQ0FP0	_	13	dep	_	Treeler:grup.a
16	en	en	ADP	SPS00	_	17	case	_	Treeler:sp
17	relación	relación	NOUN	NCFS000	_	13	nmod	_	ToDo=nmod|Treeler:sn
18	a	a	ADP	SPS00	_	20	case	_	Treeler:sp
19	os	o	DET	DA0MP0	_	20	det	_	Treeler:spec
20	maiores	maior	NOUN	NCCP000	_	17	nmod	_	SpaceAfter=No|Treeler:sn
21	,	,	PUNCT	Fc	_	24	punct	_	Treeler:f
22	os	o	DET	DA0MP0	_	23	det	_	Treeler:spec
23	autores	autor	NOUN	NCMP000	_	24	nsubj	_	Treeler:suj
24	sinalan	sinalar	VERB	VMIP3P0	_	11	ccomp	_	Treeler:S
25	diferenzas	diferenza	NOUN	NCFP000	_	24	obj	_	Treeler:cd
26	entre	entre	ADP	SPS00	_	27	case	_	Treeler:sp
27	nenos	neno	NOUN	NCMP000	_	25	nmod	_	SpaceAfter=No|Treeler:sn
28	/	/	PUNCT	Fh	_	29	punct	_	Treeler:f
29	as	o	DET	DA0FP0	_	27	dep	_	SpaceAfter=No|Treeler:spec
30	,	,	PUNCT	Fc	_	31	punct	_	Treeler:f
31	adolescentes	adolescente	NOUN	NCMP000	_	27	dep	_	Treeler:grup.nom
32	e	e	CCONJ	CC	_	33	cc	_	Treeler:coord
33	mozos	mozo	NOUN	NCMP000	_	31	conj	_	SpaceAfter=No|Treeler:grup.nom
34	/	/	PUNCT	Fh	_	35	punct	_	SpaceAfter=No|Treeler:f
35	as	o	DET	DA0FP0	_	33	dep	_	SpaceAfter=No|Treeler:f
36	:	:	PUNCT	Fd	_	1	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 24 conj	color:blue
1	Tan	tan	ADV	RG	_	2	advmod	_	Treeler:spec
2	só	só	ADV	RG	_	7	advmod	_	Treeler:sadv
3	o	o	DET	DA0MS0	_	7	det	_	Treeler:spec
4	que	que	PRON	PR0CN000	_	7	dep	_	Treeler:relatiu
5	anos	ano	NOUN	NCMP000	_	7	case	_	ToDo=case-upos|Treeler:cc
6	atrás	atrás	ADV	RG	_	7	advmod	_	Treeler:sadv
7	citara	citar	VERB	VMIM1S0	_	0	root	_	Treeler:sentence
8	coma	coma	SCONJ	CS	_	7	case	_	Treeler:cc
9	colonias	colonia	NOUN	NCFP000	_	7	obj	_	Treeler:cd
10	de	de	ADP	SPS00	_	11	case	_	Treeler:sp
11	reproducción	reproducción	NOUN	NCFS000	_	9	nmod	_	Treeler:sn
12	segura	seguro	ADJ	AQ0FS0	_	11	amod	_	Treeler:s.a
13	o	o	DET	DA0MS0	_	14	det	_	Treeler:spec
14	ornitólogo	ornitólogo	NOUN	NCMS000	_	11	nmod	_	Treeler:sn
15	británico	británico	ADJ	AQ0MS0	_	14	amod	_	Treeler:s.a
16	Tait	tait	PROPN	NP00000	_	14	nmod	_	SpaceAfter=No|Treeler:sn
17	:	:	PUNCT	Fd	_	19	punct	_	Treeler:f
18	as	o	DET	DA0FP0	_	19	det	_	Treeler:spec
19	Illas	illa	NOUN	NCFP000	_	9	appos	_	Treeler:suj
20	Cíes	cíes	PROPN	NP00000	_	19	nmod	_	SpaceAfter=No|Treeler:inc
21	,	,	PUNCT	Fc	_	22	punct	_	Treeler:f
22	Ons	ons	PROPN	NP00000	_	20	conj	_	Treeler:cc
23	e	e	CCONJ	CC	_	24	cc	_	Treeler:coord
24	Sisargas	sisargas	PROPN	NP00000	_	20	conj	_	SpaceAfter=No|Treeler:grup.nom
25	.	.	PUNCT	Fp	_	7	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 38 conj	color:blue
1	Queremos	querer	VERB	VMIP1P0	_	0	root	_	Treeler:sentence
2	vivir	vivir	VERB	VMN0000	_	1	obj	_	Treeler:cd
3	en	en	ADP	SPS00	_	5	case	_	Treeler:cc
4	unha	un	DET	DI0FS0	_	5	det	_	Treeler:spec
5	sociedade	sociedade	NOUN	NCFS000	_	2	obl	_	Treeler:sn
6	en	en	ADP	SPS00	_	2	case	_	Treeler:cc
7	a	o	DET	DA0FS0	_	15	det	_	Treeler:spec
8	que	que	SCONJ	CS	_	15	mark	_	Treeler:conj
9	a	o	DET	DA0FS0	_	10	det	_	Treeler:spec
10	igualdade	igualdade	NOUN	NCFS000	_	15	nsubj	_	Treeler:suj
11	de	de	ADP	SPS00	_	12	case	_	Treeler:sp
12	oportunidades	oportunidade	NOUN	NCFP000	_	10	nmod	_	Treeler:sn
13	sexa	ser	AUX	VSSP1S0	_	15	cop	_	Treeler:cd
14	unha	un	DET	DI0FS0	_	15	det	_	Treeler:spec
15	realidade	realidade	NOUN	NCFS000	_	1	obj	_	Treeler:atr
16	tanxible	tanxible	ADJ	AQ0CS0	_	15	amod	_	Treeler:s.a
17	e	e	CCONJ	CC	_	23	cc	_	ToDo=cc-without-conj|Treeler:coord
18	os	o	DET	DA0MP0	_	19	det	_	Treeler:spec
19	mozos	mozo	NOUN	NCMP000	_	23	nsubj	_	Treeler:suj
20	e	e	CCONJ	CC	_	21	cc	_	Treeler:coord
21	mozas	mozo	NOUN	NCFP000	_	19	conj	_	Treeler:grup.nom
22	poidamos	poder	AUX	VMSP1P0	_	23	aux	_	Treeler:v
23	vivir	vivir	VERB	VMN0000	_	15	conj	_	Treeler:f
24	e	e	CCONJ	CC	_	25	cc	_	Treeler:coord
25	desenvolver	desenvolver	VERB	VMN0000	_	23	conj	_	Treeler:S
26	nos	nos	PRON	PP1CP000	_	25	dep	_	Treeler:morfema.pronominal
27	libremente	libre	ADV	RG	_	23	advmod	_	Treeler:cc
28	como	como	PRON	PR0CN000	_	25	obl	_	Treeler:cc
29	persoas	persoa	NOUN	NCFP000	_	28	nmod	_	SpaceAfter=No|Treeler:sn
30	,	,	PUNCT	Fc	_	28	punct	_	Treeler:f
31	independentemente	independente	ADV	RG	_	25	advmod	_	Treeler:cc
32	de	de	ADP	SPS00	_	34	case	_	Treeler:sp
33	o	o	DET	DA0MS0	_	34	det	_	Treeler:spec
34	sexo	sexo	NOUN	NCMS000	_	31	obl	_	Treeler:sn
35	a	a	ADP	SPS00	_	38	obj	_	Treeler:cd
36	o	o	DET	DA0MS0	_	38	det	_	Treeler:spec
37	que	que	SCONJ	CS	_	38	mark	_	Treeler:conj
38	pertenzamos	pertencer	VERB	VMSP1P0	_	15	conj	_	SpaceAfter=No|Treeler:S
39	.	.	PUNCT	Fp	_	1	punct	_	Treeler:f

~~~


