---
layout: base
title:  'Statistics of nmod:lmod in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `nmod:lmod`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="id_csui-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="id_csui-dep-nmod-tmod.html">nmod:tmod</a></tt>.

104 nodes (0%) are attached to their parents as `nmod:lmod`.

95 instances of `nmod:lmod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09615384615385.

The following 7 pairs of parts of speech are connected with `nmod:lmod`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (85; 82% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (10; 10% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="id_csui-pos-DET.html">DET</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:lmod	color:blue
1	Pembahasan	bahas	NOUN	NN	Number=Sing	5	nmod	_	_
2	tadi	tadi	NOUN	NN	Number=Sing	1	nmod	_	_
3	masih	masih	ADV	RB	_	5	advmod	_	_
4	dalam	dalam	ADP	IN	_	5	amod	_	_
5	tahap	tahap	NOUN	NN	Number=Sing	0	root	_	_
6	awal	awal	NOUN	NN	Number=Sing	5	nmod:lmod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nmod:lmod	color:blue
1	Kabar	kabar	NOUN	NN	Number=Sing	9	nsubj	_	_
2	rencana	rencana	NOUN	NN	Number=Sing	1	nmod	_	_
3	akuisisi	akuisisi	NOUN	NN	Number=Sing	2	nmod	_	_
4	Toba	Toba	PROPN	NNP	_	2	nmod	_	_
5	Pulp	Pulp	PROPN	NNP	_	4	flat:name	_	_
6	oleh	oleh	ADP	IN	_	7	case	_	_
7	Pinnacle	Pinnacle	PROPN	NNP	_	2	nmod	_	_
8	sudah	sudah	AUX	MD	_	9	aux	_	_
9	berhembus	berhembus	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
10	sejak	sejak	ADP	IN	_	12	case	_	_
11	awal	awal	NOUN	NN	Number=Sing	12	nmod:lmod	_	_
12	Oktober	Oktober	PROPN	NNP	_	9	obl:tmod	_	_
13	lalu	lalu	VERB	VB	Mood=Ind|Voice=Act	12	acl:relcl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nmod:lmod	color:blue
1	Berdasarkan	dasar	VERB	VB	Mood=Ind|Voice=Act	13	advcl	_	_
2	data	data	NOUN	NN	Number=Sing	1	obj	_	_
3	BES	BES	PROPN	NNP	_	2	nmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	13	punct	_	_
5	komposisi	komposisi	NOUN	NN	Number=Sing	13	nsubj:pass	_	_
6	pemegang	pegang	NOUN	NN	Number=Sing	5	nmod	_	_
7	saham	saham	NOUN	NN	Number=Sing	6	nmod	_	_
8	PT	PT	PROPN	NNP	_	6	nmod	_	_
9	Multi	Multi	PROPN	NNP	_	8	flat:name	_	_
10	Prima	Prima	PROPN	NNP	_	8	flat:name	_	_
11	Sejahtera	Sejahtera	PROPN	NNP	_	8	flat:name	_	_
12	Tbk	Tbk	PROPN	NNP	_	8	flat:name	_	_
13	terdiri	terdiri	VERB	VB	Mood=Ind|Voice=Pass	0	root	_	_
14	dari	dari	ADP	IN	_	15	case	_	_
15	publik	publik	NOUN	NN	Number=Sing	13	obl	_	_
16	di	di	ADP	IN	_	18	case	_	_
17	bawah	bawah	NOUN	NN	Number=Sing	18	nmod:lmod	_	_
18	5	5	NUM	CD	NumType=Card	19	nummod	_	SpaceAfter=No
19	%	%	SYM	SYM	_	15	nmod	_	_
20	sebanyak	sebanyak	NOUN	NN	Number=Sing	15	nmod	_	_
21	70,29	70,29	NUM	CD	NumType=Card	22	nummod	_	_
22	persen	persen	NOUN	NN	Number=Sing	20	nmod	_	SpaceAfter=No
23	,	,	PUNCT	,	_	24	punct	_	_
24	Pacific	Pacific	PROPN	NNP	_	15	conj	_	_
25	Asia	Asia	PROPN	NNP	_	24	flat:name	_	_
26	Holdings	Holdings	PROPN	NNP	_	24	flat:name	_	_
27	Ltd.	Ltd.	PROPN	NNP	_	24	flat:name	_	_
28	C/O	C/O	PROPN	NNP	_	24	flat:name	_	_
29	PT	PT	PROPN	NNP	_	24	flat:name	_	_
30	Ciptadana	Ciptadana	PROPN	NNP	_	24	flat:name	_	_
31	Sekuritas	Sekuritas	PROPN	NNP	_	24	flat:name	_	_
32	25	25	NUM	CD	NumType=Card	33	nummod	_	_
33	persen	persen	NOUN	NN	Number=Sing	24	nmod	_	_
34	dan	dan	CCONJ	CC	_	35	cc	_	_
35	PT	PT	PROPN	NNP	_	15	conj	_	_
36	Lippo	Lippo	PROPN	NNP	_	35	flat:name	_	_
37	E	E	PROPN	NNP	_	35	flat:name	_	SpaceAfter=No
38	-	-	PROPN	NNP	_	35	flat:name	_	SpaceAfter=No
39	Net	Net	PROPN	NNP	_	35	flat:name	_	_
40	Tbk	Tbk	PROPN	NNP	_	35	flat:name	_	_
41	4,71	4,71	NUM	CD	NumType=Card	42	nummod	_	_
42	persen	persen	NOUN	NN	Number=Sing	35	nmod	_	SpaceAfter=No
43	.	.	PUNCT	.	_	13	punct	_	_

~~~


