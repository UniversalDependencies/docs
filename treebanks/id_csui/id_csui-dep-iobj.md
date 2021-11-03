---
layout: base
title:  'Statistics of iobj in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `iobj`

This relation is universal.

2 nodes (0%) are attached to their parents as `iobj`.

2 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 iobj	color:blue
1	"	"	PUNCT	``	_	5	punct	_	SpaceAfter=No
2	Banyak	banyak	DET	DT	Number=Plur|PronType=Ind	3	det	_	_
3	orang	orang	NOUN	NN	Number=Sing	5	nsubj	_	_
4	baru	baru	ADV	RB	_	5	advmod	_	_
5	mulai	mulai	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
6	menjadi	jadi	VERB	VB	Mood=Ind|Voice=Act	5	advcl	_	_
7	kaya	kaya	ADJ	JJ	_	6	xcomp	_	_
8	dan	dan	CCONJ	CC	_	14	cc	_	_
9	kami	kami	PRON	PRP	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	14	nsubj	_	_
10	baru-baru	baru	NOUN	NN	Number=Sing	14	obl	_	_
11	ini	ini	DET	DT	PronType=Dem	10	det	_	_
12	saja	saja	ADV	RB	_	10	advmod	_	_
13	bisa	bisa	AUX	MD	_	14	aux	_	_
14	memberi	beri	VERB	VB	Mood=Ind|Voice=Act	5	conj	_	_
15	makan	makan	NOUN	NN	Number=Sing	14	iobj	_	_
16	diri	diri	PRON	PRP	PronType=Prs|Reflex=Yes	14	obj	_	_
17	sendiri	sendiri	DET	DT	PronType=Emp	16	det	_	SpaceAfter=No
18	,	,	PUNCT	,	_	5	punct	_	SpaceAfter=No
19	"	"	PUNCT	''	_	5	punct	_	_
20	kata	kata	VERB	VB	Mood=Ind|Voice=Act	5	parataxis	_	_
21	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	20	nsubj	_	_
22	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 iobj	color:blue
1	Penanaman	tanam	NOUN	NN	Number=Sing	8	nsubj	_	_
2	modal	modal	NOUN	NN	Number=Sing	1	nmod	_	_
3	Mitsubishi	Mitsubishi	PROPN	NNP	_	1	nmod	_	_
4	terhadap	hadap	ADP	IN	_	5	case	_	_
5	Encore	Encore	PROPN	NNP	_	1	nmod	_	_
6	Energy	Energy	PROPN	NNP	_	5	flat:name	_	SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	_
8	memberikan	beri	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
9	Encore	Encore	PROPN	NNP	_	8	iobj	_	_
10	dan	dan	CCONJ	CC	_	11	cc	_	_
11	Mitsubishi	Mitsubishi	PROPN	NNP	_	9	conj	_	_
12	kepemilikan	kepemilikan	NOUN	NN	Number=Sing	8	obj	_	_
13	tidak	tidak	PART	RP	Polarity=Neg	12	advmod	_	_
14	langsung	langsung	ADV	RB	_	12	advmod	_	_
15	masing-masing	masing-masing	DET	DT	PronType=Tot	17	det	_	_
16	30,721	30,721	NUM	CD	NumType=Card	17	nummod	_	_
17	persen	persen	NOUN	NN	Number=Sing	12	nmod	_	_
18	dan	dan	CCONJ	CC	_	20	cc	_	_
19	19,974	19,974	NUM	CD	NumType=Card	20	nummod	_	_
20	persen	persen	NOUN	NN	Number=Sing	17	conj	_	_
21	di	di	ADP	IN	_	22	case	_	_
22	MedcoEnergi	MedcoEnergi	PROPN	NNP	_	12	nmod	_	SpaceAfter=No
23	.	.	PUNCT	.	_	8	punct	_	_

~~~


