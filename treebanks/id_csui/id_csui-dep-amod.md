---
layout: base
title:  'Statistics of amod in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `amod`

This relation is universal.

682 nodes (2%) are attached to their parents as `amod`.

666 instances of `amod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29618768328446.

The following 8 pairs of parts of speech are connected with `amod`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (640; 94% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (14; 2% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (12; 2% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (8; 1% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (5; 1% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	Banyak	banyak	DET	DT	Number=Plur|PronType=Ind	2	det	_	_
2	olahragawan	olahragawan	NOUN	NN	Number=Sing	4	nsubj	_	_
3	terkenal	kenal	ADJ	JJ	_	2	amod	_	_
4	melakukan	laku	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
5	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	4	obj	_	_
6	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 amod	color:blue
1	"	"	PUNCT	``	_	6	punct	_	SpaceAfter=No
2	Power	Power	X	FW	Foreign=Yes	6	nsubj	_	_
3	Plant	Plant	X	FW	Foreign=Yes	2	flat:foreign	_	_
4	baru	baru	ADJ	JJ	_	2	amod	_	_
5	akan	akan	AUX	MD	_	6	aux	_	_
6	beroperasi	operasi	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
7	pada	pada	ADP	IN	_	9	case	_	_
8	akhir	akhir	NOUN	NN	Number=Sing	9	nummod	_	_
9	2009	2009	NUM	CD	NumType=Card	6	obl	_	_
10	atau	atau	CCONJ	CC	_	12	cc	_	_
11	awal	awal	NOUN	NN	Number=Sing	12	nummod	_	_
12	2010	2010	NUM	CD	NumType=Card	9	conj	_	_
13	pembangunan	bangun	NOUN	NN	Number=Sing	9	nmod	_	_
14	untuk	untuk	SCONJ	IN	_	15	mark	_	_
15	mengantisipasi	antisipasi	VERB	VB	Mood=Ind|Voice=Act	6	advcl	_	_
16	mahal	mahal	ADJ	JJ	_	15	advcl	_	_
17	nya	nya	DET	DT	Definite=Def|PronType=Art	16	det	_	_
18	harga	harga	NOUN	NN	Number=Sing	16	nsubj	_	_
19	minyak	minyak	NOUN	NN	Number=Sing	18	nmod	_	_
20	mentah	mentah	ADJ	JJ	_	19	amod	_	SpaceAfter=No
21	,	,	PUNCT	,	_	6	punct	_	SpaceAfter=No
22	"	"	PUNCT	''	_	6	punct	_	_
23	kata	kata	VERB	VB	Mood=Ind|Voice=Act	6	parataxis	_	_
24	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	23	nsubj	_	_
25	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
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


