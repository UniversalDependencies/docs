---
layout: base
title:  'Statistics of appos in UD_Galician-CTG'
udver: '2'
---

## Treebank Statistics: UD_Galician-CTG: Relations: `appos`

This relation is universal.

18 nodes (0%) are attached to their parents as `appos`.

18 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.5.

The following 6 pairs of parts of speech are connected with `appos`: <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (8; 44% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt> (4; 22% instances), <tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (3; 17% instances), <tt><a href="gl_ctg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_ctg-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="gl_ctg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_ctg-pos-NUM.html">NUM</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 19 appos	color:blue
1	Tan	tan	ADV	RG	_	2	advmod	_	Treeler:spec
2	só	só	ADV	RG	_	7	advmod	_	Treeler:sadv
3	o	o	DET	DA0MS0	Definite=Def|PronType=Art	7	det	_	Treeler:spec
4	que	que	PRON	PR0CN000	PronType=Rel	7	dep	_	Treeler:relatiu
5	anos	ano	NOUN	NCMP000	_	7	nmod	_	Treeler:cc
6	atrás	atrás	ADV	RG	_	7	advmod	_	Treeler:sadv
7	citara	citar	VERB	VMIM1S0	_	0	root	_	Treeler:sentence
8	coma	coma	SCONJ	CS	_	7	case	_	Treeler:cc
9	colonias	colonia	NOUN	NCFP000	_	7	obj	_	Treeler:cd
10	de	de	ADP	SPS00	_	11	case	_	Treeler:sp
11	reproducción	reproducción	NOUN	NCFS000	_	9	nmod	_	Treeler:sn
12	segura	seguro	ADJ	AQ0FS0	_	11	amod	_	Treeler:s.a
13	o	o	DET	DA0MS0	Definite=Def|PronType=Art	14	det	_	Treeler:spec
14	ornitólogo	ornitólogo	NOUN	NCMS000	_	11	nmod	_	Treeler:sn
15	británico	británico	ADJ	AQ0MS0	_	14	amod	_	Treeler:s.a
16	Tait	tait	PROPN	NP00000	_	14	nmod	_	SpaceAfter=No|Treeler:sn
17	:	:	PUNCT	Fd	_	19	punct	_	Treeler:f
18	as	o	DET	DA0FP0	Definite=Def|PronType=Art	19	det	_	Treeler:spec
19	Illas	illa	NOUN	NCFP000	_	9	appos	_	Treeler:suj
20	Cíes	cíes	PROPN	NP00000	_	19	nmod	_	SpaceAfter=No|Treeler:inc
21	,	,	PUNCT	Fc	_	22	punct	_	Treeler:f
22	Ons	ons	PROPN	NP00000	_	20	conj	_	Treeler:cc
23	e	e	CCONJ	CC	_	24	cc	_	Treeler:coord
24	Sisargas	sisargas	PROPN	NP00000	_	20	conj	_	SpaceAfter=No|Treeler:grup.nom
25	.	.	PUNCT	Fp	_	7	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 appos	color:blue
1	Dende	dende	ADP	SPS00	_	2	case	_	Treeler:cc
2	eiquí	eiquí	ADV	RG	_	22	advmod	_	Treeler:sadv
3	ata	ata	ADP	SPS00	_	4	case	_	Treeler:sp
4	finais	final	NOUN	NCCP000	_	2	obl	_	Treeler:sn
5	de	de	ADP	SPS00	_	7	case	_	Treeler:sp
6	a	o	DET	DA0FS0	Definite=Def|PronType=Art	7	det	_	Treeler:spec
7	década	década	NOUN	NCFS000	_	4	nmod	_	Treeler:sn
8	de	de	ADP	SPS00	_	10	case	_	Treeler:sp
9	os	o	DET	DA0MP0	Definite=Def|PronType=Art	10	det	_	Treeler:spec
10	anos	ano	NOUN	NCMP000	_	7	nmod	_	Treeler:sn
11	noventa	noventa	NUM	Z	_	10	nmod	_	Treeler:sn
12	(	(	PUNCT	Fpa	_	13	punct	_	Treeler:f
13	Pombo	pombo	NOUN	NCMS000	_	10	nmod	_	SpaceAfter=No|Treeler:sn
14	,	,	PUNCT	Fc	_	15	punct	_	Treeler:f
15	A.	a.	PROPN	NP00000	_	13	appos	_	Treeler:suj
16	A.	a.	PROPN	NP00000	_	15	flat	_	SpaceAfter=No|Treeler:suj
17	,	,	PUNCT	Fc	_	18	punct	_	Treeler:f
18	1999	1999	NUM	Z	_	13	appos	_	SpaceAfter=No|Treeler:sn
19	)	)	PUNCT	Fpt	_	13	punct	_	Treeler:f
20	non	non	PART	RN	_	22	advmod	_	Treeler:mod
21	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	22	iobj	_	Treeler:ci
22	coñecen	coñecer	VERB	VMIP3P0	_	0	root	_	Treeler:sentence
23	datos	dato	NOUN	NCMP000	_	22	nsubj	_	Treeler:suj
24	(	(	PUNCT	Fpa	_	25	punct	_	Treeler:f
25	v	v	NOUN	NCMS000	_	23	nmod	_	SpaceAfter=No|Treeler:sn
26	.	.	PUNCT	Fp	_	25	punct	_	Treeler:f
27	gr.	gr.	NOUN	NCCN000	_	25	nmod	_	SpaceAfter=No|Treeler:sn
28	,	,	PUNCT	Fc	_	29	punct	_	Treeler:f
29	migratoloxía	migratoloxía	NOUN	NCFS000	_	25	dep	_	Treeler:grup.nom
30	,	,	PUNCT	Fc	_	31	punct	_	Treeler:f
31	invernada	invernada	NOUN	NCFS000	_	25	nmod	_	SpaceAfter=No|Treeler:sn
32	)	)	PUNCT	Fpt	_	25	punct	_	Treeler:f
33	.	.	PUNCT	Fp	_	22	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 18 appos	color:blue
1	Dende	dende	ADP	SPS00	_	2	case	_	Treeler:cc
2	eiquí	eiquí	ADV	RG	_	22	advmod	_	Treeler:sadv
3	ata	ata	ADP	SPS00	_	4	case	_	Treeler:sp
4	finais	final	NOUN	NCCP000	_	2	obl	_	Treeler:sn
5	de	de	ADP	SPS00	_	7	case	_	Treeler:sp
6	a	o	DET	DA0FS0	Definite=Def|PronType=Art	7	det	_	Treeler:spec
7	década	década	NOUN	NCFS000	_	4	nmod	_	Treeler:sn
8	de	de	ADP	SPS00	_	10	case	_	Treeler:sp
9	os	o	DET	DA0MP0	Definite=Def|PronType=Art	10	det	_	Treeler:spec
10	anos	ano	NOUN	NCMP000	_	7	nmod	_	Treeler:sn
11	noventa	noventa	NUM	Z	_	10	nmod	_	Treeler:sn
12	(	(	PUNCT	Fpa	_	13	punct	_	Treeler:f
13	Pombo	pombo	NOUN	NCMS000	_	10	nmod	_	SpaceAfter=No|Treeler:sn
14	,	,	PUNCT	Fc	_	15	punct	_	Treeler:f
15	A.	a.	PROPN	NP00000	_	13	appos	_	Treeler:suj
16	A.	a.	PROPN	NP00000	_	15	flat	_	SpaceAfter=No|Treeler:suj
17	,	,	PUNCT	Fc	_	18	punct	_	Treeler:f
18	1999	1999	NUM	Z	_	13	appos	_	SpaceAfter=No|Treeler:sn
19	)	)	PUNCT	Fpt	_	13	punct	_	Treeler:f
20	non	non	PART	RN	_	22	advmod	_	Treeler:mod
21	se	se	PRON	PP3CN000	PronType=Prs|Reflex=Yes	22	iobj	_	Treeler:ci
22	coñecen	coñecer	VERB	VMIP3P0	_	0	root	_	Treeler:sentence
23	datos	dato	NOUN	NCMP000	_	22	nsubj	_	Treeler:suj
24	(	(	PUNCT	Fpa	_	25	punct	_	Treeler:f
25	v	v	NOUN	NCMS000	_	23	nmod	_	SpaceAfter=No|Treeler:sn
26	.	.	PUNCT	Fp	_	25	punct	_	Treeler:f
27	gr.	gr.	NOUN	NCCN000	_	25	nmod	_	SpaceAfter=No|Treeler:sn
28	,	,	PUNCT	Fc	_	29	punct	_	Treeler:f
29	migratoloxía	migratoloxía	NOUN	NCFS000	_	25	dep	_	Treeler:grup.nom
30	,	,	PUNCT	Fc	_	31	punct	_	Treeler:f
31	invernada	invernada	NOUN	NCFS000	_	25	nmod	_	SpaceAfter=No|Treeler:sn
32	)	)	PUNCT	Fpt	_	25	punct	_	Treeler:f
33	.	.	PUNCT	Fp	_	22	punct	_	Treeler:f

~~~


