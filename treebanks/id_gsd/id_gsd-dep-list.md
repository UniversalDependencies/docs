---
layout: base
title:  'Statistics of list in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `list`

This relation is universal.

13 nodes (0%) are attached to their parents as `list`.

13 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 33.6923076923077.

The following 7 pairs of parts of speech are connected with `list`: <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (5; 38% instances), <tt><a href="id_gsd-pos-X.html">X</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (2; 15% instances), <tt><a href="id_gsd-pos-X.html">X</a></tt>-<tt><a href="id_gsd-pos-X.html">X</a></tt> (2; 15% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (1; 8% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="id_gsd-pos-X.html">X</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 68	bgColor:blue
# visual-style 68	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 68 list	color:blue
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
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 29 list	color:blue
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
# visual-style 47	bgColor:blue
# visual-style 47	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 47 list	color:blue
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


