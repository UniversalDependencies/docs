---
layout: base
title:  'Statistics of cc:preconj in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-cc.html">cc</a></tt>.

3 nodes (0%) are attached to their parents as `cc:preconj`.

3 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 3 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt> (1; 33% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt> (1; 33% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 cc:preconj	color:blue
1	"	"	PUNCT	``	_	5	punct	_	SpaceAfter=No
2	Sektor	Sektor	NOUN	NN	Number=Sing	5	nsubj	_	_
3	riil	riil	ADJ	JJ	_	2	amod	_	_
4	sudah	sudah	AUX	MD	_	5	aux	_	_
5	mulai	mulai	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
6	bangkit	bangkit	VERB	VB	Mood=Ind|Voice=Act	5	xcomp	_	_
7	yang	yang	PRON	IN	PronType=Rel	8	nsubj:pass	_	_
8	tercermin	tercermin	VERB	VB	Mood=Ind|Voice=Pass	6	advcl	_	_
9	dari	dari	ADP	IN	_	11	case	_	_
10	berbagai	berbagai	DET	DT	Number=Plur|PronType=Ind	11	det	_	_
11	indikator	indikator	NOUN	NN	Number=Sing	8	obl	_	_
12	baik	baik	CCONJ	CC	_	13	cc:preconj	_	_
13	makro	makro	ADJ	JJ	_	11	amod	_	_
14	maupun	maupun	CCONJ	CC	_	16	cc	_	_
15	per	per	ADP	IN	_	16	case	_	_
16	sektor	sektor	NOUN	NN	Number=Sing	13	conj	_	SpaceAfter=No
17	,	,	PUNCT	,	_	5	punct	_	SpaceAfter=No
18	"	"	PUNCT	''	_	5	punct	_	_
19	kata	kata	VERB	VB	Mood=Ind|Voice=Act	5	parataxis	_	_
20	Menko	Menko	PROPN	NNP	_	5	obl	_	_
21	Perekonomian	Perekonomian	PROPN	NNP	_	20	flat:name	_	_
22	Boediono	Boediono	PROPN	NNP	_	20	flat:name	_	SpaceAfter=No
23	,	,	PUNCT	,	_	5	punct	_	_
24	kepada	kepada	ADP	IN	_	25	case	_	_
25	pers	pers	NOUN	NN	Number=Sing	5	obl	_	_
26	usai	usai	ADP	IN	_	27	case	_	_
27	Rapat	Rapat	NOUN	NN	Number=Sing	5	obl	_	_
28	Terbatas	Terbatas	ADJ	JJ	_	27	amod	_	_
29	dengan	dengan	ADP	IN	_	30	case	_	_
30	Presiden	Presiden	PROPN	NNP	_	27	nmod	_	_
31	Susilo	Susilo	PROPN	NNP	_	30	flat:name	_	_
32	Bambang	Bambang	PROPN	NNP	_	30	flat:name	_	_
33	Yudhoyono	Yudhoyono	PROPN	NNP	_	30	flat:name	_	SpaceAfter=No
34	,	,	PUNCT	,	_	5	punct	_	_
35	di	di	ADP	IN	_	36	case	_	_
36	Kantor	Kantor	PROPN	NNP	_	5	obl	_	_
37	Presiden	Presiden	PROPN	NNP	_	36	flat:name	_	SpaceAfter=No
38	,	,	PUNCT	,	_	5	punct	_	_
39	Jumat	Jumat	PROPN	NNP	_	5	obl:tmod	_	_
40	sore	sore	NOUN	NN	Number=Sing	39	nmod	_	SpaceAfter=No
41	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 cc:preconj	color:blue
1	"	"	PUNCT	``	_	14	punct	_	SpaceAfter=No
2	Pembelian	Pembelian	NOUN	NN	Number=Sing	14	nsubj:pass	_	_
3	38.360	38.360	NUM	CD	NumType=Card	4	nummod	_	_
4	saham	saham	NOUN	NN	Number=Sing	2	nmod	_	_
5	atau	atau	CCONJ	CC	_	7	cc	_	_
6	yang	yang	PRON	IN	PronType=Rel	7	nsubj	_	_
7	merupakan	rupa	VERB	VB	Mood=Ind|Voice=Act	4	conj	_	_
8	70	70	NUM	CD	NumType=Card	9	nummod	_	_
9	persen	persen	NOUN	NN	Number=Sing	7	obj	_	_
10	saham	saham	NOUN	NN	Number=Sing	9	nmod	_	_
11	PT	PT	PROPN	NNP	_	10	nmod	_	_
12	Chandra	Chandra	PROPN	NNP	_	11	flat:name	_	_
13	Asri	Asri	PROPN	NNP	_	11	flat:name	_	_
14	dilakukan	laku	VERB	VB	Mood=Ind|Voice=Pass	0	root	_	_
15	baik	baik	CCONJ	CC	_	17	cc:preconj	_	_
16	melalui	lalu	ADP	IN	_	17	case	_	_
17	pembelian	beli	NOUN	NN	Number=Sing	14	obl	_	_
18	langsung	langsung	ADV	RB	_	17	advmod	_	_
19	maupun	maupun	CCONJ	CC	_	21	cc	_	_
20	tidak	tidak	PART	RP	Polarity=Neg	21	advmod	_	_
21	langsung	langsung	ADV	RB	_	17	conj	_	SpaceAfter=No
22	,	,	PUNCT	,	_	14	punct	_	SpaceAfter=No
23	"	"	PUNCT	''	_	14	punct	_	_
24	kata	kata	VERB	VB	Mood=Ind|Voice=Act	14	parataxis	_	_
25	Direktur	Direktur	NOUN	NN	Number=Sing	24	nsubj	_	_
26	Utama	Utama	ADJ	JJ	_	25	amod	_	_
27	Barito	Barito	PROPN	NNP	_	25	nmod	_	_
28	Pacific	Pacific	PROPN	NNP	_	25	nmod	_	SpaceAfter=No
29	,	,	PUNCT	,	_	25	punct	_	_
30	Anton	Anton	PROPN	NNP	_	25	appos	_	_
31	BS	BS	PROPN	NNP	_	30	flat:name	_	_
32	Hudyana	Hudyana	PROPN	NNP	_	30	flat:name	_	_
33	kepada	kepada	ADP	IN	_	34	case	_	_
34	Bursa	Bursa	PROPN	NNP	_	24	obl	_	_
35	Efek	Efek	PROPN	NNP	_	34	flat:name	_	_
36	Jakarta	Jakarta	PROPN	NNP	_	34	flat:name	_	_
37	Jumat	Jumat	PROPN	NNP	_	24	obl:tmod	_	SpaceAfter=No
38	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc:preconj	color:blue
1	Namun	namun	CCONJ	CC	_	8	cc	_	_
2	baik	baik	CCONJ	CC	_	3	cc:preconj	_	_
3	Toba	Toba	PROPN	NNP	_	8	nsubj	_	_
4	Pulp	Pulp	PROPN	NNP	_	3	flat:name	_	_
5	maupun	maupun	CCONJ	CC	_	6	cc	_	_
6	Pinnacle	Pinnacle	PROPN	NNP	_	3	conj	_	_
7	belum	belum	PART	RP	Polarity=Neg	8	advmod	_	_
8	memberikan	beri	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
9	keterangan	terang	NOUN	NN	Number=Sing	8	obj	_	_
10	apa	apa	PRON	WP	PronType=Rel	9	nmod	_	_
11	pun	pun	PART	RP	_	10	advmod:emph	_	SpaceAfter=No
12	.	.	PUNCT	.	_	8	punct	_	_

~~~


