---
layout: base
title:  'Statistics of flat in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="id_csui-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="id_csui-dep-flat-name.html">flat:name</a></tt>.

418 nodes (1%) are attached to their parents as `flat`.

418 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16267942583732.

The following 6 pairs of parts of speech are connected with `flat`: <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (380; 91% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (30; 7% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	Namun	namun	ADV	RB	_	5	advmod	_	_
2	dana	dana	NOUN	NN	Number=Sing	5	nsubj:pass	_	_
3	tersebut	sebut	DET	DT	PronType=Dem	2	det	_	_
4	baru	baru	ADV	RB	_	5	advmod	_	_
5	terpakai	pakai	VERB	VB	Mood=Ind|Voice=Pass	0	root	_	_
6	168	168	NUM	CD	NumType=Card	8	nummod	_	_
7	juta	juta	NUM	CD	NumType=Card	6	flat	_	_
8	dolar	dolar	NOUN	NN	Number=Sing	5	obl	_	_
9	AS	AS	PROPN	NNP	_	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	Saya	saya	PRON	PRP	Number=Sing|Person=1|Polite=Form|PronType=Prs	3	nsubj	_	_
2	akan	akan	AUX	MD	_	3	aux	_	_
3	meninggalkan	tinggal	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
4	Indonesia	Indonesia	PROPN	NNP	_	3	obj	_	_
5	pada	pada	ADP	IN	_	6	case	_	_
6	28	28	NUM	CD	NumType=Card	3	obl:tmod	_	_
7	Februari	Februari	PROPN	NNP	_	6	flat	_	_
8	mendatang	datang	VERB	VB	Mood=Ind|Voice=Act	7	acl:relcl	_	_
9	ke	ke	ADP	IN	_	10	case	_	_
10	London	London	PROPN	NNP	_	3	obl	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 flat	color:blue
1	Kredit	kredit	NOUN	NN	Number=Sing	20	nsubj	_	_
2	bermasalah	masalah	VERB	VB	Mood=Ind|Voice=Act	1	acl	_	_
3	(	(	PUNCT	-LRB-	_	4	punct	_	SpaceAfter=No
4	non-performing	non-performing	X	FW	Foreign=Yes	1	appos	_	_
5	loan	loan	X	FW	Foreign=Yes	4	flat:foreign	_	_
6	-	-	PUNCT	:	_	4	punct	_	SpaceAfter=No
7	NPL	NPL	PROPN	NNP	_	4	nmod	_	SpaceAfter=No
8	)	)	PUNCT	-RRB-	_	4	punct	_	_
9	industri	industri	NOUN	NN	Number=Sing	1	nmod	_	_
10	tekstil	tekstil	NOUN	NN	Number=Sing	9	nmod	_	_
11	dan	dan	CCONJ	CC	_	12	cc	_	_
12	produk	produk	NOUN	NN	Number=Sing	10	conj	_	_
13	tekstil	tekstil	NOUN	NN	Number=Sing	12	nmod	_	_
14	(	(	PUNCT	-LRB-	_	15	punct	_	SpaceAfter=No
15	TPT	TPT	PROPN	NNP	_	10	appos	_	SpaceAfter=No
16	)	)	PUNCT	-RRB-	_	15	punct	_	_
17	pada	pada	ADP	IN	_	18	case	_	_
18	Maret	Maret	PROPN	NNP	_	20	obl:tmod	_	_
19	2007	2007	NUM	CD	NumType=Card	18	flat	_	_
20	mencapai	capai	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
21	23,37	23,37	NUM	CD	NumType=Card	22	nummod	_	_
22	persen	persen	NOUN	NN	Number=Sing	20	obj	_	SpaceAfter=No
23	,	,	PUNCT	,	_	25	punct	_	_
24	demikian	demikian	PRON	PRP	PronType=Dem	25	obl	_	_
25	dikemukakan	dikemukakan	VERB	VB	Mood=Ind|Voice=Pass	20	parataxis	_	_
26	Deputi	Deputi	NOUN	NN	Number=Sing	25	nsubj:pass	_	_
27	Gubernur	Gubernur	NOUN	NN	Number=Sing	26	nmod	_	_
28	Bank	Bank	PROPN	NNP	_	26	nmod	_	_
29	Indonesia	Indonesia	PROPN	NNP	_	28	flat:name	_	_
30	(	(	PUNCT	-LRB-	_	31	punct	_	SpaceAfter=No
31	BI	BI	PROPN	NNP	_	28	appos	_	SpaceAfter=No
32	)	)	PUNCT	-RRB-	_	31	punct	_	SpaceAfter=No
33	,	,	PUNCT	,	_	26	punct	_	_
34	Hartadi	Hartadi	PROPN	NNP	_	26	appos	_	_
35	A	A	PROPN	NNP	_	34	flat:name	_	_
36	Sarwono	Sarwono	PROPN	NNP	_	34	flat:name	_	_
37	di	di	ADP	IN	_	38	case	_	_
38	Jakarta	Jakarta	PROPN	NNP	_	25	obl	_	SpaceAfter=No
39	,	,	PUNCT	,	_	25	punct	_	_
40	Rabu	Rabu	PROPN	NNP	_	25	obl:tmod	_	SpaceAfter=No
41	.	.	PUNCT	.	_	20	punct	_	_

~~~


