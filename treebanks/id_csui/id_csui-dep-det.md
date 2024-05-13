---
layout: base
title:  'Statistics of det in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `det`

This relation is universal.

732 nodes (3%) are attached to their parents as `det`.

587 instances of `det` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.61338797814208.

The following 7 pairs of parts of speech are connected with `det`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-DET.html">DET</a></tt> (580; 79% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-DET.html">DET</a></tt> (81; 11% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-DET.html">DET</a></tt> (37; 5% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-DET.html">DET</a></tt> (17; 2% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-DET.html">DET</a></tt> (10; 1% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-DET.html">DET</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Banyak	banyak	DET	DT	Number=Plur|PronType=Ind	2	det	_	_
2	olahragawan	olahragawan	NOUN	NN	Number=Sing	4	nsubj	_	_
3	terkenal	kenal	ADJ	JJ	_	2	amod	_	_
4	melakukan	laku	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
5	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	4	obj	_	_
6	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 det	color:blue
1	Kenaikan	naik	NOUN	NN	Number=Sing	5	nsubj:pass	_	_
2	laba	laba	NOUN	NN	Number=Sing	1	nmod	_	_
3	bersih	bersih	ADJ	JJ	_	2	amod	_	_
4	ini	ini	DET	DT	PronType=Dem	1	det	_	_
5	dipicu	picu	VERB	VB	Mood=Ind|Voice=Pass	0	root	_	_
6	oleh	oleh	ADP	IN	_	7	case	_	_
7	naik	naik	VERB	VB	Mood=Ind|Voice=Act	5	advcl	_	_
8	nya	nya	DET	DT	Definite=Def|PronType=Art	7	det	_	_
9	penjualan	jual	NOUN	NN	Number=Sing	7	nsubj	_	_
10	sebesar	sebesar	NOUN	NN	Number=Sing	7	obl	_	_
11	16,4	16,4	NUM	CD	NumType=Card	12	nummod	_	_
12	persen	persen	NOUN	NN	Number=Sing	10	nmod	_	_
13	menjadi	jadi	VERB	VB	Mood=Ind|Voice=Act	7	advcl	_	_
14	Rp	Rp	NOUN	NN	Number=Sing	13	obj	_	SpaceAfter=No
15	1	1	NUM	CD	NumType=Card	14	nummod	_	_
16	triliun	triliun	NUM	CD	NumType=Card	15	flat	_	SpaceAfter=No
17	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 det	color:blue
1	Pihak	pihak	NOUN	NN	Number=Sing	3	nsubj:pass	_	_
2	nya	nya	PRON	PRP$	Number=Sing|Person=3|PronType=Prs	1	nmod:poss	_	_
3	terpaksa	paksa	VERB	VB	Mood=Ind|Voice=Pass	0	root	_	_
4	menggunakan	guna	VERB	VB	Mood=Ind|Voice=Act	3	ccomp	_	_
5	minyak	minyak	NOUN	NN	Number=Sing	4	obj	_	_
6	akibat	akibat	ADP	IN	_	13	case	_	_
7	langka	langka	ADJ	JJ	_	13	acl:relcl	_	_
8	nya	nya	DET	DT	Definite=Def|PronType=Art	7	det	_	_
9	pasokan	pasok	NOUN	NN	Number=Sing	7	nsubj	_	_
10	gas	gas	NOUN	NN	Number=Sing	9	nmod	_	_
11	dalam	dalam	ADP	IN	_	13	case	_	_
12	lima	lima	NUM	CD	NumType=Card	13	nummod	_	_
13	tahun	tahun	NOUN	NN	Number=Sing	4	obl:tmod	_	_
14	terakhir	akhir	ADJ	JJ	Degree=Sup	13	amod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	3	punct	_	_

~~~


