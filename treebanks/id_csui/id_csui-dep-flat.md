---
layout: base
title:  'Statistics of flat in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="id_csui-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="id_csui-dep-flat-name.html">flat:name</a></tt>.

368 nodes (1%) are attached to their parents as `flat`.

368 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1195652173913.

The following 6 pairs of parts of speech are connected with `flat`: <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (360; 98% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	Namun	namun	CCONJ	CC	_	5	cc	_	_
2	dana	dana	NOUN	NN	Number=Sing	5	nsubj:pass	_	_
3	tersebut	sebut	DET	DT	_	2	det	_	_
4	baru	baru	ADV	RB	_	5	advmod	_	_
5	terpakai	pakai	VERB	VB	Voice=Pass	0	root	_	_
6	168	168	NUM	CD	_	8	nummod	_	_
7	juta	juta	NUM	CD	_	6	flat	_	_
8	dolar	dolar	NOUN	NN	Number=Sing	5	obl	_	_
9	AS	AS	PROPN	NNP	_	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 flat	color:blue
1	Luas	luas	NOUN	NN	Number=Sing	4	nsubj	_	_
2	ini	ini	DET	DT	PronType=Dem	1	det	_	_
3	lebih	lebih	ADV	RB	_	4	advmod	_	_
4	kecil	kecil	ADJ	JJ	_	0	root	_	_
5	dari	dari	ADP	IN	_	6	case	_	_
6	keterbukaan	keterbukaan	NOUN	NN	Number=Sing	4	obl	_	_
7	informasi	informasi	NOUN	NN	Number=Sing	6	nmod	_	_
8	yang	yang	SCONJ	IN	_	9	mark	_	_
9	disampaikan	sampai	VERB	VB	Voice=Pass	6	acl:relcl	_	_
10	pada	pada	ADP	IN	_	11	case	_	_
11	14	14	NUM	CD	_	9	obl	_	_
12	Maret	Maret	PROPN	NNP	_	11	flat	_	_
13	2007	2007	NUM	CD	_	11	flat	_	_
14	lalu	lalu	VERB	VB	Voice=Act	11	acl	_	_
15	yakni	yakni	ADP	IN	_	18	case	_	_
16	sekitar	sekitar	ADV	RB	_	17	advmod	_	_
17	16.268	16.268	NUM	CD	_	18	nummod	_	_
18	hektar	hektar	NOUN	NN	Number=Sing	4	obl	_	SpaceAfter=No
19	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 26 flat	color:blue
1	"	"	PUNCT	``	_	6	punct	_	SpaceAfter=No
2	Transaksi	Transaksi	NOUN	NN	Number=Sing	6	nsubj	_	_
3	pembelian	beli	NOUN	NN	Number=Sing	2	nmod	_	_
4	tersebut	sebut	DET	DT	_	2	det	_	_
5	telah	telah	AUX	MD	_	6	aux	_	_
6	selesai	selesai	VERB	VB	Voice=Act	0	root	_	_
7	pada	pada	ADP	IN	_	8	case	_	_
8	1	1	NUM	CD	_	6	obl	_	_
9	Oktober	Oktober	PROPN	NNP	_	8	flat	_	_
10	2007	2007	NUM	CD	_	8	flat	_	SpaceAfter=No
11	,	,	PUNCT	,	_	6	punct	_	_
12	karena	karena	ADP	IN	_	13	case	_	_
13	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	16	obl	_	_
14	PT	PT	PROPN	NNP	_	16	nsubj	_	_
15	Mitra	Mitra	PROPN	NNP	_	14	flat:name	_	_
16	menjadi	jadi	VERB	VB	Voice=Act	6	parataxis	_	_
17	anak	anak	NOUN	NN	Number=Sing	16	obl	_	_
18	perusahaan	usaha	NOUN	NN	Number=Sing	17	nmod	_	_
19	SIMP	SIMP	PROPN	NNP	_	17	nmod	_	SpaceAfter=No
20	,	,	PUNCT	,	_	6	punct	_	SpaceAfter=No
21	"	"	PUNCT	''	_	6	punct	_	_
22	kata	kata	VERB	VB	Voice=Act	6	parataxis	_	_
23	Sekretaris	Sekretaris	NOUN	NN	Number=Sing	22	nsubj	_	_
24	Perusahaan	Perusahaan	NOUN	NN	Number=Sing	23	nmod	_	_
25	Indofood	Indofood	PROPN	NNP	_	23	nmod	_	_
26	Werianty	Werianty	PROPN	NNP	_	23	flat	_	_
27	dalam	dalam	ADP	IN	_	28	case	_	_
28	penjelasan	penjelasan	NOUN	NN	Number=Sing	22	obl	_	_
29	nya	nya	PRON	PRP$	Number=Sing|Person=3|Poss=Yes|PronType=Prs	28	nmod:poss	_	_
30	ke	ke	ADP	IN	_	31	case	_	_
31	Bursa	Bursa	PROPN	NNP	_	28	nmod	_	_
32	Efek	Efek	PROPN	NNP	_	31	flat:name	_	_
33	Jakarta	Jakarta	PROPN	NNP	_	31	flat:name	_	_
34	(	(	PUNCT	-LRB-	_	35	punct	_	SpaceAfter=No
35	BEJ	BEJ	PROPN	NNP	_	31	appos	_	SpaceAfter=No
36	)	)	PUNCT	-RRB-	_	35	punct	_	_
37	di	di	ADP	IN	_	38	case	_	_
38	Jakarta	Jakarta	PROPN	NNP	_	28	nmod	_	_
39	Rabu	Rabu	PROPN	NNP	_	22	obl:tmod	_	SpaceAfter=No
40	.	.	PUNCT	.	_	6	punct	_	_

~~~


