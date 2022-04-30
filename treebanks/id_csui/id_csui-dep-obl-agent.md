---
layout: base
title:  'Statistics of obl:agent in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="id_csui-dep-obl-tmod.html">obl:tmod</a></tt>.

62 nodes (0%) are attached to their parents as `obl:agent`.

62 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.20967741935484.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (42; 68% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (19; 31% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:agent	color:blue
1	Sementara	sementara	ADV	RB	_	6	advmod	_	MWEPOS=ADV
2	itu	itu	PRON	PRP	PronType=Dem	1	fixed	_	_
3	tekanan	tekan	NOUN	NN	Number=Sing	6	nsubj	_	_
4	inflasi	inflasi	NOUN	NN	Number=Sing	3	nmod	_	_
5	sendiri	sendiri	DET	DT	PronType=Emp	3	det	_	_
6	didorong	dorong	VERB	VB	Mood=Ind|Voice=Pass	0	root	_	_
7	oleh	oleh	ADP	IN	_	8	case	_	_
8	kenaikan	naik	NOUN	NN	Number=Sing	6	obl:agent	_	_
9	harga	harga	NOUN	NN	Number=Sing	8	nmod	_	_
10	minyak	minyak	NOUN	NN	Number=Sing	9	nmod	_	_
11	dunia	dunia	NOUN	NN	Number=Sing	9	nmod	_	_
12	bersama	sama	ADP	IN	_	14	case	_	_
13	dengan	dengan	ADP	IN	_	14	case	_	_
14	kenaikan	naik	NOUN	NN	Number=Sing	8	nmod	_	_
15	harga	harga	NOUN	NN	Number=Sing	14	nmod	_	_
16	komoditas	komoditas	NOUN	NN	Number=Sing	15	nmod	_	_
17	primer	primer	ADJ	JJ	_	16	amod	_	_
18	global	global	ADJ	JJ	_	16	amod	_	SpaceAfter=No
19	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Sisa	sisa	NOUN	NN	Number=Sing	4	nsubj:pass	_	_
2	nya	nya	DET	DT	Definite=Def|PronType=Art	1	det	_	_
3	,	,	PUNCT	,	_	4	punct	_	_
4	dimiliki	milik	VERB	VB	Mood=Ind|Voice=Pass	0	root	_	_
5	oleh	oleh	ADP	IN	_	6	case	_	_
6	PT	PT	PROPN	NNP	_	4	obl:agent	_	_
7	Multi	Multi	PROPN	NNP	_	6	flat:name	_	_
8	Energi	Energi	PROPN	NNP	_	6	flat:name	_	_
9	Persada	Persada	PROPN	NNP	_	6	flat:name	_	_
10	2,3	2,3	NUM	CD	NumType=Card	11	nummod	_	_
11	persen	persen	NOUN	NN	Number=Sing	6	nmod	_	_
12	dan	dan	CCONJ	CC	_	13	cc	_	_
13	PT	PT	PROPN	NNP	_	6	conj	_	_
14	Kurnia	Kurnia	PROPN	NNP	_	13	flat:name	_	_
15	Unggul	Unggul	PROPN	NNP	_	13	flat:name	_	_
16	Sejahtera	Sejahtera	PROPN	NNP	_	13	flat:name	_	_
17	1,7	1,7	NUM	CD	NumType=Card	18	nummod	_	_
18	persen	persen	NOUN	NN	Number=Sing	13	nmod	_	SpaceAfter=No
19	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:agent	color:blue
1	Disebutkan	sebut	VERB	VB	Mood=Ind|Voice=Pass	15	parataxis	_	_
2	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	1	obl:agent	_	_
3	,	,	PUNCT	,	_	1	punct	_	_
4	keuangan	uang	NOUN	NN	Number=Sing	15	nsubj	_	_
5	publik	publik	NOUN	NN	Number=Sing	4	nmod	_	_
6	dan	dan	CCONJ	CC	_	7	cc	_	_
7	perbaikan	perbaikan	NOUN	NN	Number=Sing	4	conj	_	_
8	pengawasan	awas	NOUN	NN	Number=Sing	7	nmod	_	_
9	atas	atas	ADP	IN	_	10	case	_	_
10	risiko	risiko	NOUN	NN	Number=Sing	7	nmod	_	_
11	fiskal	fiskal	ADJ	JJ	_	10	amod	_	_
12	secara	cara	ADP	IN	_	13	case:adv	_	_
13	luas	luas	ADJ	JJ	_	10	acl	_	_
14	adalah	adalah	AUX	VBZ	_	15	cop	_	_
15	kekuatan	kuat	NOUN	NN	Number=Sing	0	root	_	_
16	fundamental	fundamental	ADJ	JJ	_	15	amod	_	_
17	peringkat	peringkat	NOUN	NN	Number=Sing	15	nmod	_	_
18	Indonesia	Indonesia	PROPN	NNP	_	15	nmod	_	SpaceAfter=No
19	.	.	PUNCT	.	_	15	punct	_	_

~~~


