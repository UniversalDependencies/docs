---
layout: base
title:  'Statistics of aux in UD_Indonesian'
udver: '2'
---

## Treebank Statistics: UD_Indonesian: Relations: `aux`

This relation is universal.

3 nodes (0%) are attached to their parents as `aux`.

3 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-ADV.html">ADV</a></tt> (2; 67% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 aux	color:blue
1	Mariah	mariah	PROPN	X--	_	3	nsubj	_	MorphInd=^mariah<x>_X--$
2	segera	segera	ADV	D--	_	3	advmod	_	MorphInd=^segera<d>_D--$
3	memeriksakan	menperiksakan	VERB	VSA	Number=Sing|Voice=Act	0	root	_	MorphInd=^meN+periksa<v>+kan_VSA$
4	dirinya	diri	PRON	NSD+PS3	Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obj	_	MorphInd=^diri<n>_NSD+dia<p>_PS3$
5	ke	ke	ADP	R--	_	6	case	_	MorphInd=^ke<r>_R--$
6	rumah	rumah	NOUN	NSD	Number=Sing	3	obl	_	MorphInd=^rumah<n>_NSD$
7	sakit	sakit	ADJ	ASP	Degree=Pos|Number=Sing	6	amod	_	MorphInd=^sakit<a>_ASP$
8	dan	dan	CCONJ	H--	_	11	cc	_	MorphInd=^dan<h>_H--$
9	terpaksa	terpaksa	ADV	VSP	Number=Sing|Voice=Pass	11	aux	_	MorphInd=^ter+paksa<v>_VSP$
10	harus	harus	ADV	VSA	Number=Sing|Voice=Act	11	aux	_	MorphInd=^harus<v>_VSA$
11	beristirahat	beristirahat	VERB	VSA	Number=Sing|Voice=Act	3	conj	_	MorphInd=^ber+istirahat<v>_VSA$
12	dari	dari	ADP	R--	_	13	case	_	MorphInd=^dari<r>_R--$
13	tampil	tampil	VERB	VSA	Number=Sing|Voice=Act	11	xcomp	_	MorphInd=^tampil<v>_VSA$
14	di	di	ADP	R--	_	16	case	_	MorphInd=^di<r>_R--$
15	depan	depan	ADP	NSD	Number=Sing	16	case	_	MorphInd=^depan<n>_NSD$
16	umum	umum	NOUN	ASP	Degree=Pos|Number=Sing	13	obl	_	SpaceAfter=No|MorphInd=^umum<a>_ASP$
17	.	.	PUNCT	Z--	_	3	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 aux	color:blue
1	Di	di	ADP	R--	_	3	case	_	MorphInd=^di<r>_R--$
2	akhir	akhir	ADJ	NSD	Number=Sing	3	amod	_	MorphInd=^akhir<n>_NSD$
3	masa	masa	NOUN	NSD	Number=Sing	12	obl	_	MorphInd=^masa<n>_NSD$
4	dinasnya	dinas	NOUN	NSD+PS3	Number=Sing|Number[psor]=Sing|Person[psor]=3	3	compound	_	SpaceAfter=No|MorphInd=^dinas<n>_NSD+dia<p>_PS3$
5	,	,	PUNCT	Z--	_	12	punct	_	MorphInd=^,<z>_Z--$
6	pada	pada	ADP	R--	_	7	case	_	MorphInd=^pada<r>_R--$
7	tahun	tahun	NOUN	NSD	Number=Sing	12	obl	_	MorphInd=^tahun<n>_NSD$
8	1977	1977	NUM	CC-	NumType=Card	7	nummod	_	SpaceAfter=No|MorphInd=^1977<c>_CC-$
9	,	,	PUNCT	Z--	_	12	punct	_	MorphInd=^,<z>_Z--$
10	masih	masih	ADV	D--	_	12	advmod	_	MorphInd=^masih<d>_D--$
11	dapat	dapat	VERB	VSA	Number=Sing|Voice=Act	12	aux	_	MorphInd=^dapat<v>_VSA$
12	dijumpai	dijumpai	VERB	VSP	Number=Sing|Voice=Pass	0	root	_	MorphInd=^di+jumpa<v>+i_VSP$
13	1	1	NUM	CC-	NumType=Card	14	nummod	_	MorphInd=^1<c>_CC-$
14	lokomotif	lokomotif	NOUN	X--	_	12	obj	_	MorphInd=^lokomotif<x>_X--$
15	B16	b16	PROPN	X--	_	14	flat	_	MorphInd=^b16<x>_X--$
16	yang	yang	CCONJ	S--	_	17	obj	_	MorphInd=^yang<s>_S--$
17	beroperasi	beroperasi	VERB	VSA	Number=Sing|Voice=Act	14	acl	_	MorphInd=^ber+operasi<n>_VSA$
18	jalan	jalan	NOUN	VSA	Number=Sing|Voice=Act	17	obj	_	MorphInd=^jalan<v>_VSA$
19	rel	rel	NOUN	X--	_	18	compound	_	MorphInd=^rel<x>_X--$
20	milik	milik	NOUN	VSA	Number=Sing|Voice=Act	14	compound	_	MorphInd=^milik<v>_VSA$
21	perusahaan	perusahaan	NOUN	NSD	Number=Sing	20	compound	_	MorphInd=^per+usaha<n>+an_NSD$
22	kereta	kereta	NOUN	NSD	Number=Sing	21	compound	_	MorphInd=^kereta<n>_NSD$
23	api	api	NOUN	NSD	Number=Sing	22	compound	_	MorphInd=^api<n>_NSD$
24	swasta	swasta	ADJ	ASP	Degree=Pos|Number=Sing	21	amod	_	MorphInd=^swasta<a>_ASP$
25	Oost	oost	PROPN	X--	_	21	appos	_	MorphInd=^oost<x>_X--$
26	-	-	PUNCT	Z--	_	25	punct	_	MorphInd=^-<z>_Z--$
27	Java	java	PROPN	F--	_	25	flat	_	MorphInd=^java<f>_F--$
28	Stoomtram	stoomtram	PROPN	X--	_	25	flat	_	MorphInd=^stoomtram<x>_X--$
29	Maatschappij	maatschappij	PROPN	X--	_	25	flat	_	MorphInd=^maatschappij<x>_X--$
30	(	(	PUNCT	Z--	_	31	punct	_	SpaceAfter=No|MorphInd=^(<z>_Z--$
31	OJS	ojs	PROPN	X--	_	25	appos	_	SpaceAfter=No|MorphInd=^ojs<x>_X--$
32	)	)	PUNCT	Z--	_	31	punct	_	SpaceAfter=No|MorphInd=^)<z>_Z--$
33	.	.	PUNCT	Z--	_	12	punct	_	MorphInd=^.<z>_Z--$

~~~


