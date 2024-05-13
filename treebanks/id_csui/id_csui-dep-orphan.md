---
layout: base
title:  'Statistics of orphan in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `orphan`

This relation is universal.

17 nodes (0%) are attached to their parents as `orphan`.

17 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.70588235294118.

The following 2 pairs of parts of speech are connected with `orphan`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (15; 88% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (2; 12% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 orphan	color:blue
1	Tahun	tahun	NOUN	NN	Number=Sing	0	root	_	_
2	ini	ini	DET	DT	PronType=Dem	1	det	_	_
3	akan	akan	AUX	MD	_	5	aux	_	_
4	22	22	NUM	CD	NumType=Card	5	nummod	_	_
5	persen	persen	NOUN	NN	Number=Sing	1	orphan	_	SpaceAfter=No
6	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 24 orphan	color:blue
1	Bank	bank	NOUN	NN	Number=Sing	3	nsubj	_	_
2	Mandiri	Mandiri	PROPN	NNP	_	1	flat:name	_	_
3	menyumbang	sumbang	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
4	NPL	NPL	PROPN	NNP	_	3	obj	_	_
5	terbanyak	banyak	ADJ	JJ	Degree=Sup	4	amod	_	_
6	sebesar	sebesar	NOUN	NN	Number=Sing	4	nmod	_	_
7	56	56	NUM	CD	NumType=Card	8	nummod	_	_
8	persen	persen	NOUN	NN	Number=Sing	6	nmod	_	_
9	dari	dari	ADP	IN	_	10	case	_	_
10	total	total	NOUN	NN	Number=Sing	8	nmod	_	_
11	NPL	NPL	PROPN	NNP	_	10	nmod	_	SpaceAfter=No
12	,	,	PUNCT	,	_	13	punct	_	_
13	Bank	Bank	NOUN	NN	Number=Sing	3	conj	_	_
14	BNI	BNI	PROPN	NNP	_	13	flat:name	_	_
15	23	23	NUM	CD	NumType=Card	16	nummod	_	_
16	persen	persen	NOUN	NN	Number=Sing	13	orphan	_	SpaceAfter=No
17	,	,	PUNCT	,	_	18	punct	_	_
18	BRI	BRI	PROPN	NNP	_	3	conj	_	_
19	17	17	NUM	CD	NumType=Card	20	nummod	_	_
20	persen	persen	NOUN	NN	Number=Sing	18	orphan	_	_
21	dan	dan	CCONJ	CC	_	22	cc	_	_
22	BTN	BTN	PROPN	NNP	_	3	conj	_	_
23	3,1	3,1	NUM	CD	NumType=Card	24	nummod	_	_
24	persen	persen	NOUN	NN	Number=Sing	22	orphan	_	SpaceAfter=No
25	.	.	PUNCT	.	_	3	punct	_	_

~~~


