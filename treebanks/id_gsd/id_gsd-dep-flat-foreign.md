---
layout: base
title:  'Statistics of flat:foreign in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="id_gsd-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="id_gsd-dep-flat-name.html">flat:name</a></tt>.

46 nodes (0%) are attached to their parents as `flat:foreign`.

46 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.97826086956522.

The following 5 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="id_gsd-pos-X.html">X</a></tt>-<tt><a href="id_gsd-pos-X.html">X</a></tt> (41; 89% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-X.html">X</a></tt> (2; 4% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="id_gsd-pos-X.html">X</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="id_gsd-pos-X.html">X</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 21 flat:foreign	color:blue
1	Teknik	teknik	PROPN	NSD	_	5	nsubj	_	MorphInd=^teknik<n>_NSD$
2	yang	yang	PRON	S--	PronType=Rel	3	nsubj:pass	_	MorphInd=^yang<s>_S--$
3	dipakai	pakai	VERB	VSP	Mood=Ind|Voice=Pass	1	acl:relcl	_	MorphInd=^di+pakai<v>_VSP$
4	adalah	adalah	AUX	O--	_	5	cop	_	MorphInd=^adalah<o>_O--$
5	Penyambung	sambung	NOUN	NSD	Number=Sing	0	root	_	MorphInd=^peN+sambung<v>_NSD$
6	dan	dan	CCONJ	H--	_	7	cc	_	MorphInd=^dan<h>_H--$
7	Pembentuk	bentuk	NOUN	NSD	Number=Sing	5	conj	_	MorphInd=^peN+bentuk<n>_NSD$
8	Artikulasi	artikulasi	NOUN	X--	_	5	compound	_	MorphInd=^artikulasi<x>_X--$
9	Nyanyian	nyanyi	NOUN	NSD	Number=Sing	8	compound	_	MorphInd=^nyanyi<v>+an_NSD$
10	dengan	dengan	ADP	R--	_	11	case	_	MorphInd=^dengan<r>_R--$
11	Domain	domain	NOUN	F--	_	5	nmod	_	MorphInd=^domain<f>_F--$
12	Frekuensi	frekuensi	NOUN	NSD	Number=Sing	11	compound	_	MorphInd=^frekuensi<n>_NSD$
13	(	(	PUNCT	Z--	_	14	punct	_	SpaceAfter=No|MorphInd=^(<z>_Z--$
14	Frequency	frequency	X	F--	Foreign=Yes	5	appos	_	MorphInd=^frequency<f>_F--$
15	-	-	PUNCT	Z--	_	16	punct	_	MorphInd=^-<z>_Z--$
16	Domain	domain	X	F--	Foreign=Yes	14	flat:foreign	_	MorphInd=^domain<f>_F--$
17	Singing	singing	PROPN	X--	_	14	flat:foreign	_	MorphInd=^singing<x>_X--$
18	Articulation	articulation	X	X--	Foreign=Yes	14	flat:foreign	_	MorphInd=^articulation<x>_X--$
19	Splicing	splicing	X	X--	Foreign=Yes	14	flat:foreign	_	MorphInd=^splicing<x>_X--$
20	and	and	X	F--	Foreign=Yes	14	flat:foreign	_	MorphInd=^and<f>_F--$
21	Shaping	shaping	X	X--	Foreign=Yes	14	flat:foreign	_	SpaceAfter=No|MorphInd=^shaping<x>_X--$
22	)	)	PUNCT	Z--	_	14	punct	_	SpaceAfter=No|MorphInd=^)<z>_Z--$
23	.	.	PUNCT	Z--	_	5	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 23 flat:foreign	color:blue
1	Image	image	X	F--	Foreign=Yes	0	root	_	SpaceAfter=No|MorphInd=^image<f>_F--$
2	:	:	PUNCT	Z--	_	1	punct	_	MorphInd=^:<z>_Z--$
3	City	city	PROPN	F--	_	1	nmod	_	MorphInd=^city<f>_F--$
4	Hall	hall	PROPN	F--	_	3	flat:name	_	MorphInd=^hall<f>_F--$
5	in	in	X	F--	Foreign=Yes	3	dep	_	MorphInd=^in<f>_F--$
6	West	west	PROPN	F--	_	3	nmod	_	SpaceAfter=No|MorphInd=^west<f>_F--$
7	,	,	PUNCT	Z--	_	8	punct	_	MorphInd=^,<z>_Z--$
8	TX	tx	PROPN	X--	_	6	flat:name	_	MorphInd=^tx<x>_X--$
9	IMG4905.JPG	IMG4905.JPG	SYM	X--	_	1	appos	_	MorphInd=^img<x>_X--$
10	|	|	PUNCT	Z--	_	11	punct	_	MorphInd=^&vert;<z>_Z--$
11	Balai	balai	NOUN	VSA	_	1	list	_	MorphInd=^bala<n>+i_VSA$
12	Kota	kota	NOUN	NSD	Number=Sing	11	compound	_	MorphInd=^kota<n>_NSD$
13	dan	dan	CCONJ	H--	_	14	cc	_	MorphInd=^dan<h>_H--$
14	kantor	kantor	NOUN	NSD	Number=Sing	11	conj	_	MorphInd=^kantor<n>_NSD$
15	polisi	polisi	NOUN	NSD	Number=Sing	14	compound	_	MorphInd=^polisi<n>_NSD$
16	di	di	ADP	R--	_	17	case	_	MorphInd=^di<r>_R--$
17	West	west	PROPN	F--	_	11	nmod	_	MorphInd=^west<f>_F--$
18	Image	image	X	F--	Foreign=Yes	1	list	_	SpaceAfter=No|MorphInd=^image<f>_F--$
19	:	:	PUNCT	Z--	_	20	punct	_	MorphInd=^:<z>_Z--$
20	Restored	restored	PROPN	X--	_	18	appos	_	MorphInd=^restored<x>_X--$
21	rail	rail	X	F--	Foreign=Yes	20	dep	_	MorphInd=^rail<f>_F--$
22	depot	depot	X	F--	Foreign=Yes	20	flat:foreign	_	MorphInd=^depot<f>_F--$
23	in	in	X	X--	Foreign=Yes	20	flat:foreign	_	MorphInd=^in<f>_F--$
24	West	west	PROPN	F--	_	20	nmod	_	SpaceAfter=No|MorphInd=^west<f>_F--$
25	,	,	PUNCT	Z--	_	26	punct	_	MorphInd=^,<z>_Z--$
26	TX	tx	PROPN	X--	_	24	nmod	_	MorphInd=^tx<x>_X--$
27	IMG4902.JPG	IMG4902.JPG	SYM	X--	_	18	appos	_	MorphInd=^img<x>_X--$
28	|	|	PUNCT	Z--	_	29	punct	_	MorphInd=^&vert;<z>_Z--$
29	Depot	depot	NOUN	F--	_	1	list	_	MorphInd=^depot<f>_F--$
30	pemulihan	pulih	NOUN	NSD	Number=Sing	29	nmod	_	MorphInd=^peN+pulih<a>+an_NSD$
31	kereta	kereta	NOUN	NSD	Number=Sing	29	nmod	_	MorphInd=^kereta<n>_NSD$
32	api	api	NOUN	NSD	Number=Sing	31	nmod	_	MorphInd=^api<n>_NSD$
33	di	di	ADP	R--	_	34	case	_	MorphInd=^di<r>_R--$
34	West	west	PROPN	F--	_	29	nmod	_	MorphInd=^west<f>_F--$
35	Image	image	PROPN	F--	_	1	list	_	SpaceAfter=No|MorphInd=^image<f>_F--$
36	:	:	PUNCT	Z--	_	35	punct	_	MorphInd=^:<z>_Z--$
37	Log	log	PROPN	F--	_	35	appos	_	MorphInd=^log<f>_F--$
38	Cabin	cabin	PROPN	X--	_	37	flat:name	_	MorphInd=^cabin<x>_X--$
39	Fellowship	fellowship	PROPN	F--	_	37	flat:name	_	SpaceAfter=No|MorphInd=^fellowship<f>_F--$
40	,	,	PUNCT	Z--	_	41	punct	_	MorphInd=^,<z>_Z--$
41	West	west	PROPN	F--	_	37	nmod	_	SpaceAfter=No|MorphInd=^west<f>_F--$
42	,	,	PUNCT	Z--	_	43	punct	_	MorphInd=^,<z>_Z--$
43	TX	tx	PROPN	X--	_	41	nmod	_	MorphInd=^tx<x>_X--$
44	IMG4903.JPG	IMG4903.JPG	SYM	X--	_	35	appos	_	MorphInd=^img<x>_X--$
45	|	|	PUNCT	Z--	_	47	punct	_	MorphInd=^&vert;<z>_Z--$
46	"	"	PUNCT	Z--	_	47	punct	_	SpaceAfter=No|MorphInd=^"<z>_Z--$
47	His	his	X	F--	Foreign=Yes	1	list	_	MorphInd=^his<x>_X--$
48	Offer	offer	X	F--	Foreign=Yes	47	flat:foreign	_	MorphInd=^offer<f>_F--$
49	Still	still	X	X--	Foreign=Yes	47	flat:foreign	_	MorphInd=^still<x>_X--$
50	Stands	stands	X	X--	Foreign=Yes	47	flat:foreign	_	SpaceAfter=No|MorphInd=^stands<x>_X--$
51	"	"	PUNCT	Z--	_	47	punct	_	MorphInd=^"<z>_Z--$
52	Gereja	gereja	PROPN	NSD	_	47	appos	_	MorphInd=^gereja<n>_NSD$
53	Log	log	PROPN	F--	_	52	flat:name	_	MorphInd=^log<f>_F--$
54	Cabin	cabin	PROPN	X--	_	52	flat:name	_	MorphInd=^cabin<x>_X--$
55	Fellowship	fellowship	PROPN	F--	_	52	flat:name	_	MorphInd=^fellowship<f>_F--$
56	di	di	ADP	R--	_	57	case	_	MorphInd=^di<r>_R--$
57	West	west	PROPN	F--	_	52	nmod	_	MorphInd=^west<f>_F--$
58	Image	image	X	F--	Foreign=Yes	52	nmod	_	SpaceAfter=No|MorphInd=^image<f>_F--$
59	:	:	PUNCT	Z--	_	60	punct	_	MorphInd=^:<z>_Z--$
60	Village	village	PROPN	F--	_	57	nmod	_	MorphInd=^village<f>_F--$
61	Shoppe	shoppe	PROPN	X--	_	60	flat:name	_	SpaceAfter=No|MorphInd=^shoppe<x>_X--$
62	,	,	PUNCT	Z--	_	63	punct	_	MorphInd=^,<z>_Z--$
63	West	west	PROPN	F--	_	60	nmod	_	SpaceAfter=No|MorphInd=^west<f>_F--$
64	,	,	PUNCT	Z--	_	65	punct	_	MorphInd=^,<z>_Z--$
65	TX	tx	PROPN	X--	_	63	nmod	_	MorphInd=^tx<x>_X--$
66	IMG4899.JPG	IMG4899.JPG	SYM	X--	_	58	appos	_	MorphInd=^img<x>_X--$
67	|	|	PUNCT	Z--	_	68	punct	_	MorphInd=^&vert;<z>_Z--$
68	Village	village	PROPN	F--	_	3	list	_	MorphInd=^village<f>_F--$
69	Shoppe	shoppe	PROPN	X--	_	68	flat:name	_	MorphInd=^shoppe<x>_X--$
70	and	and	X	F--	Foreign=Yes	68	dep	_	MorphInd=^and<f>_F--$
71	Bakery	bakery	PROPN	X--	_	68	flat:name	_	MorphInd=^bakery<x>_X--$
72	di	di	ADP	R--	_	74	case	_	MorphInd=^di<r>_R--$
73	pusat	pusat	NOUN	ASP	_	74	nmod:lmod	_	MorphInd=^pusat<a>_ASP$
74	kota	kota	NOUN	NSD	Number=Sing	68	nmod	_	MorphInd=^kota<n>_NSD$
75	West	west	PROPN	F--	_	74	nmod	_	MorphInd=^west<f>_F--$

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat:foreign	color:blue
1	Penggunaan	guna	NOUN	NSD	Number=Sing	14	nsubj	_	MorphInd=^peN+guna<n>+an_NSD$
2	sebutan	sebut	NOUN	NSD	Number=Sing	1	compound	_	MorphInd=^sebut<v>+an_NSD$
3	ini	ini	DET	B--	PronType=Dem	2	det	_	SpaceAfter=No|MorphInd=^ini<b>_B--$
4	,	,	PUNCT	Z--	_	6	punct	_	MorphInd=^,<z>_Z--$
5	seperti	seperti	SCONJ	R--	_	6	mark	_	MorphInd=^seperti<r>_R--$
6	menganggap	anggap	VERB	VSA	Mood=Ind|Voice=Act	1	acl	_	MorphInd=^meN+anggap<v>_VSA$
7	seluruh	seluruh	DET	B--	PronType=Tot	8	det	_	MorphInd=^seluruh<b>_B--$
8	Perancis	perancis	PROPN	NSD	_	6	obj	_	MorphInd=^perancis<n>_NSD$
9	sebagai	sebagai	ADP	R--	_	10	case	_	MorphInd=^sebagai<r>_R--$
10	la	la	PROPN	F--	_	8	nmod	_	MorphInd=^la<f>_F--$
11	province	province	PROPN	F--	_	10	flat:foreign	_	SpaceAfter=No|MorphInd=^province<f>_F--$
12	,	,	PUNCT	Z--	_	6	punct	_	MorphInd=^,<z>_Z--$
13	kadang-kadang	kadang	ADV	D--	_	14	advmod	_	MorphInd=^kadang<d>_D--$
14	dianggap	anggap	VERB	VSP	Mood=Ind|Voice=Pass	0	root	_	MorphInd=^di+anggap<v>_VSP$
15	merendahkan	rendah	VERB	VSA	Mood=Ind|Voice=Act	14	amod	_	SpaceAfter=No|MorphInd=^meN+rendah<a>+kan_VSA$
16	.	.	PUNCT	Z--	_	14	punct	_	MorphInd=^.<z>_Z--$

~~~


