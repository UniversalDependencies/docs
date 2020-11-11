---
layout: base
title:  'Statistics of case:adv in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `case:adv`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-case.html">case</a></tt>.

28 nodes (0%) are attached to their parents as `case:adv`.

28 instances of `case:adv` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07142857142857.

The following 3 pairs of parts of speech are connected with `case:adv`: <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (23; 82% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (3; 11% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (2; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case:adv	color:blue
1	Pinjaman	pinjam	NOUN	NN	Number=Sing	3	nsubj	_	_
2	LPBN	LPBN	PROPN	NNP	_	1	nmod	_	_
3	meningkat	tingkat	VERB	VB	Voice=Act	0	root	_	_
4	dengan	dengan	ADP	IN	_	5	case:adv	_	_
5	cepat	cepat	ADJ	JJ	_	3	advcl	_	_
6	di	di	ADP	IN	_	7	case	_	_
7	tahun	tahun	NOUN	NN	Number=Sing	3	obl:tmod	_	_
8	2005	2005	NUM	CD	_	7	nummod	_	SpaceAfter=No
9	-	-	PUNCT	:	_	7	punct	_	SpaceAfter=No
10	2006	2006	NUM	CD	_	7	nummod	_	_
11	namun	namun	CCONJ	CC	_	16	cc	_	_
12	kualitas	kualitas	NOUN	NN	Number=Sing	16	nsubj:pass	_	_
13	nya	nya	PRON	PRP$	_	12	nmod:poss	_	_
14	belum	belum	PART	RP	Polarity=Neg	16	advmod	_	_
15	cukup	cukup	ADV	RB	_	16	advmod	_	_
16	teruji	uji	VERB	VB	Voice=Pass	3	conj	_	SpaceAfter=No
17	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 case:adv	color:blue
1	Tingkat	tingkat	NOUN	NN	Number=Sing	10	nsubj	_	_
2	kredit	kredit	NOUN	NN	Number=Sing	1	nmod	_	_
3	bermasalah	masalah	VERB	VB	Voice=Act	2	ccomp	_	_
4	(	(	PUNCT	-LRB-	_	5	punct	_	SpaceAfter=No
5	NPL	NPL	PROPN	NNP	_	2	appos	_	SpaceAfter=No
6	)	)	PUNCT	-RRB-	_	5	punct	_	_
7	perbankan	bank	NOUN	NN	Number=Sing	2	nmod	_	_
8	pun	pun	PART	RP	_	1	advmod:emph	_	_
9	terus	terus	ADV	RB	_	10	advmod	_	_
10	mengalami	alam	VERB	VB	Voice=Act	0	root	_	_
11	perbaikan	perbaikan	NOUN	NN	Number=Sing	10	obj	_	_
12	sejalan	jalan	NOUN	NN	Number=Sing	11	nmod	_	_
13	dengan	dengan	ADP	IN	_	14	case:adv	_	_
14	diselesaikan	selesai	VERB	VB	Voice=Pass	12	acl	_	_
15	nya	nya	DET	DT	_	14	det	_	_
16	proses	proses	NOUN	NN	Number=Sing	14	nsubj:pass	_	_
17	restrukturisasi	restrukturisasi	NOUN	NN	Number=Sing	16	nmod	_	_
18	debitur-debitur	debitur-debitur	NOUN	NN	Number=Sing	16	nmod	_	_
19	besar	besar	ADJ	JJ	_	18	amod	_	_
20	di	di	ADP	IN	_	22	case	_	_
21	beberapa	beberapa	DET	DT	_	22	det	_	_
22	bank-bank	bank	NOUN	NN	Number=Plur	18	nmod	_	_
23	besar	besar	ADJ	JJ	_	22	amod	_	SpaceAfter=No
24	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 31 case:adv	color:blue
1	Badan	badan	NOUN	NN	Number=Sing	7	nsubj	_	_
2	Pusat	Pusat	PROPN	NNP	_	1	nmod	_	_
3	Statistik	Statistik	PROPN	NNP	_	1	nmod	_	_
4	(	(	PUNCT	-LRB-	_	5	punct	_	SpaceAfter=No
5	BPS	BPS	PROPN	NNP	_	1	appos	_	SpaceAfter=No
6	)	)	PUNCT	-RRB-	_	5	punct	_	_
7	menyatakan	nyata	VERB	VB	Voice=Act	0	root	_	_
8	perekonomian	ekonomi	NOUN	NN	Number=Sing	10	nsubj	_	_
9	Indonesia	Indonesia	PROPN	NNP	_	8	nmod	_	_
10	tumbuh	tumbuh	VERB	VB	Voice=Act	7	advcl	_	_
11	pada	pada	ADP	IN	_	12	case	_	_
12	triwulan	triwulan	NOUN	NN	Number=Sing	10	obl:tmod	_	_
13	II	II	ADJ	JJ	_	12	amod	_	_
14	2007	2007	NUM	CD	_	12	nummod	_	_
15	sebesar	sebesar	NOUN	NN	Number=Sing	10	obj	_	_
16	2,41	2,41	NUM	CD	_	17	nummod	_	_
17	persen	persen	NOUN	NN	Number=Sing	15	nmod	_	SpaceAfter=No
18	,	,	PUNCT	,	_	10	punct	_	_
19	sedangkan	sedangkan	CCONJ	CC	_	36	cc	_	_
20	pertumbuhan	tumbuh	NOUN	NN	Number=Sing	27	nmod	_	_
21	ekonomi	ekonomi	NOUN	NN	Number=Sing	20	nmod	_	_
22	pada	pada	ADP	IN	_	24	case	_	_
23	enam	enam	NUM	CD	_	24	nummod	_	_
24	bulan	bulan	NOUN	NN	Number=Sing	27	nmod:tmod	_	_
25	pertama	pertama	ADJ	JJ	_	24	amod	_	_
26	2007	2007	NUM	CD	_	24	nummod	_	_
27	sebesar	sebesar	NOUN	NN	Number=Sing	10	parataxis	_	_
28	6,13	6,13	NUM	CD	_	29	nummod	_	_
29	persen	persen	NOUN	NN	Number=Sing	27	nmod	_	_
30	dan	dan	CCONJ	CC	_	36	cc	_	_
31	secara	cara	ADP	IN	_	32	case:adv	_	_
32	year	year	X	FW	Foreign=Yes	36	nmod	_	_
33	on	on	X	FW	Foreign=Yes	32	flat:foreign	_	_
34	year	year	X	FW	Foreign=Yes	32	flat:foreign	_	_
35	6,28	6,28	NUM	CD	_	36	nummod	_	_
36	persen	persen	NOUN	NN	Number=Sing	27	conj	_	SpaceAfter=No
37	.	.	PUNCT	.	_	7	punct	_	_

~~~


