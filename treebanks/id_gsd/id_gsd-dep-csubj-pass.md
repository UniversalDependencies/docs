---
layout: base
title:  'Statistics of csubj:pass in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="id_gsd-dep-csubj.html">csubj</a></tt>.

8 nodes (0%) are attached to their parents as `csubj:pass`.

8 instances of `csubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.25.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (6; 75% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (2; 25% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 csubj:pass	color:blue
1	Pada	pada	ADP	R--	_	2	case	_	MorphInd=^pada<r>_R--$
2	pihak	pihak	NOUN	NSD	Number=Sing	10	obl	_	MorphInd=^pihak<n>_NSD$
3	yang	yang	PRON	S--	PronType=Rel	4	nsubj	_	MorphInd=^yang<s>_S--$
4	lain	lain	ADJ	ASP	Degree=Pos|Number=Sing	2	amod	_	SpaceAfter=No|MorphInd=^lain<a>_ASP$
5	,	,	PUNCT	Z--	_	2	punct	_	MorphInd=^,<z>_Z--$
6	berjenis	berjenis	VERB	VSA	Number=Sing|Voice=Act	10	csubj:pass	_	MorphInd=^ber+jenis<n>_VSA$
7	-	-	PUNCT	Z--	_	8	punct	_	MorphInd=^-<z>_Z--$
8	jenis	jenis	VERB	NSD	Number=Sing	6	fixed	_	MorphInd=^jenis<n>_NSD$
9	ulat	ulat	NOUN	NSD	Number=Sing	6	obj	_	MorphInd=^ulat<n>_NSD$
10	diketahui	diketahui	VERB	VSP	Number=Sing|Voice=Pass	0	root	_	MorphInd=^di+ketahui<v>_VSP$
11	sebagai	sebagai	ADP	R--	_	12	case	_	MorphInd=^sebagai<r>_R--$
12	hama	hama	NOUN	X--	_	10	obl	_	MorphInd=^hama<x>_X--$
13	yang	yang	PRON	S--	PronType=Rel	14	nsubj	_	MorphInd=^yang<s>_S--$
14	rakus	rakus	ADJ	X--	_	12	amod	_	SpaceAfter=No|MorphInd=^rakus<x>_X--$
15	.	.	PUNCT	Z--	_	10	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 32 csubj:pass	color:blue
1	Setelah	setelah	ADV	R--	_	2	advmod	_	MorphInd=^setelah<r>_R--$
2	sempat	sempat	VERB	D--	_	13	advcl	_	MorphInd=^sempat<d>_D--$
3	tertunda	tertunda	VERB	VSP	Number=Sing|Voice=Pass	2	xcomp	_	MorphInd=^ter+tunda<v>_VSP$
4	selama	selama	ADP	R--	_	7	case	_	MorphInd=^selama<r>_R--$
5	lima	lima	NUM	CC-	NumType=Card	7	nummod	_	MorphInd=^lima<c>_CC-$
6	belas	belas	NUM	CC-	NumType=Card	5	nummod	_	MorphInd=^belas<c>_CC-$
7	tahun	tahun	NOUN	NSD	Number=Sing	3	obl	_	SpaceAfter=No|MorphInd=^tahun<n>_NSD$
8	,	,	PUNCT	Z--	_	2	punct	_	MorphInd=^,<z>_Z--$
9	akhirnya	akhirnya	ADV	B--	_	10	advmod	_	MorphInd=^akhirnya<b>_B--$
10	album	album	NOUN	NSD	Number=Sing	13	nsubj:pass	_	MorphInd=^album<n>_NSD$
11	CHINESE	chinese	PROPN	X--	_	10	flat	_	MorphInd=^chinese<x>_X--$
12	DEMOCRACY	democracy	PROPN	F--	_	11	flat	_	MorphInd=^democracy<f>_F--$
13	dirilis	dirilis	VERB	VSP	Number=Sing|Voice=Pass	0	root	_	MorphInd=^di+rilis<v>_VSP$
14	juga	juga	ADV	D--	_	13	advmod	_	MorphInd=^juga<d>_D--$
15	meski	meski	ADV	S--	_	20	advmod	_	MorphInd=^meski<s>_S--$
16	hanya	hanya	ADV	D--	_	20	advmod	_	MorphInd=^hanya<d>_D--$
17	secara	secara	ADV	R--	_	16	advmod	_	MorphInd=^secara<r>_R--$
18	eksklusif	eksklusif	ADJ	ASP	Degree=Pos|Number=Sing	16	amod	_	MorphInd=^eksklusif<a>_ASP$
19	lewat	lewat	ADP	VSA	Number=Sing|Voice=Act	20	case	_	MorphInd=^lewat<v>_VSA$
20	Best	best	PROPN	F--	_	13	obl	_	MorphInd=^best<f>_F--$
21	Buy	buy	PROPN	F--	_	20	flat	_	SpaceAfter=No|MorphInd=^buy<f>_F--$
22	.	.	PUNCT	Z--	_	13	punct	_	MorphInd=^.<z>_Z--$
23	Lalu	lalu	SCONJ	ASP	Degree=Pos|Number=Sing	25	mark	_	MorphInd=^lalu<a>_ASP$
24	setelah	setelah	ADV	R--	_	25	advmod	_	MorphInd=^setelah<r>_R--$
25	mengendap	mengendap	ADP	X--	_	34	advcl	_	MorphInd=^mengendap<x>_X--$
26	selama	selama	ADP	R--	_	29	case	_	MorphInd=^selama<r>_R--$
27	itu	itu	DET	B--	PronType=Dem	29	det	_	MorphInd=^itu<b>_B--$
28	di	di	ADP	R--	_	29	case	_	MorphInd=^di<r>_R--$
29	studio	studio	NOUN	NSD	Number=Sing	25	nmod	_	MorphInd=^studio<n>_NSD$
30	apa	apa	PRON	W--	PronType=Int	34	csubj:pass	_	MorphInd=^apa<w>_W--$
31	sebenarnya	sebenarnya	ADV	D--	_	34	advmod	_	MorphInd=^sebenarnya<d>_D--$
32	yang	yang	PRON	S--	PronType=Rel	34	csubj:pass	_	MorphInd=^yang<s>_S--$
33	akan	akan	ADV	M--	_	34	advmod	_	MorphInd=^akan<m>_M--$
34	ditawarkan	ditawarkan	VERB	VSP	Number=Sing|Voice=Pass	13	dep	_	MorphInd=^di+tawar<v>+kan_VSP$
35	Axl	axl	PROPN	X--	_	34	obj	_	MorphInd=^axl<x>_X--$
36	Rose	rose	PROPN	F--	_	35	flat	_	MorphInd=^rose<f>_F--$
37	yang	yang	PRON	S--	PronType=Rel	39	obj	_	MorphInd=^yang<s>_S--$
38	notabene	notabene	NOUN	X--	_	39	amod	_	MorphInd=^notabene<x>_X--$
39	tinggal	tinggal	VERB	VSA	Number=Sing|Voice=Act	35	acl	_	MorphInd=^tinggal<v>_VSA$
40	satu	satu	NUM	CC-	NumType=Card	39	nummod	_	MorphInd=^satu<c>_CC-$
41	-	-	PUNCT	Z--	_	42	punct	_	MorphInd=^-<z>_Z--$
42	satunya	satu	NUM	CC-+PS3	Number[psor]=Sing|NumType=Card|Person[psor]=3	40	fixed	_	MorphInd=^satu<c>_CC-+dia<p>_PS3$
43	personel	personel	NOUN	NSD	Number=Sing	39	compound	_	MorphInd=^personel<n>_NSD$
44	awal	awal	ADJ	NSD	Number=Sing	43	amod	_	MorphInd=^awal<n>_NSD$
45	Guns	guns	PROPN	X--	_	43	flat	_	MorphInd=^guns<x>_X--$
46	N	n	PROPN	F--	_	45	flat	_	MorphInd=^n<f>_F--$
47	Roses	roses	PROPN	F--	_	46	flat	_	SpaceAfter=No|MorphInd=^roses<f>_F--$
48	?	?	PUNCT	Z--	_	34	punct	_	MorphInd=^?<z>_Z--$

~~~


