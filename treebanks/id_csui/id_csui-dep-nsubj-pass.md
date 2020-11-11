---
layout: base
title:  'Statistics of nsubj:pass in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-nsubj.html">nsubj</a></tt>.

280 nodes (1%) are attached to their parents as `nsubj:pass`.

264 instances of `nsubj:pass` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.375.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (243; 87% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (21; 8% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (9; 3% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	TRJE	trje	PROPN	NNP	_	3	nsubj:pass	_	_
2	sebelumnya	sebelumnya	ADV	RB	_	3	advmod	_	_
3	dikenal	kenal	VERB	VB	Voice=Pass	0	root	_	_
4	sebagai	bagai	ADP	IN	_	5	case	_	_
5	PT	PT	PROPN	NNP	_	3	obl	_	_
6	Truba	Truba	PROPN	NNP	_	5	flat:name	_	_
7	Jurong	Jurong	PROPN	NNP	_	5	flat:name	_	_
8	Engineering	Engineering	PROPN	NNP	_	5	flat:name	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:pass	color:blue
1	"	"	PUNCT	``	_	10	punct	_	SpaceAfter=No
2	Kalau	Kalau	SCONJ	IN	_	4	mark	_	_
3	itu	itu	PRON	PRP	PronType=Dem	4	nsubj:pass	_	_
4	dimasukkan	masuk	VERB	VB	Voice=Pass	10	advcl	_	_
5	mungkin	mungkin	AUX	MD	_	10	aux	_	_
6	pendapatan	dapat	NOUN	NN	Number=Sing	10	nsubj	_	_
7	nya	nya	PRON	PRP$	_	6	nmod:poss	_	_
8	akan	akan	AUX	MD	_	10	aux	_	_
9	lebih	lebih	ADV	RB	_	10	advmod	_	_
10	besar	besar	ADJ	JJ	_	0	root	_	_
11	lagi	lagi	ADV	RB	_	10	advmod	_	SpaceAfter=No
12	,	,	PUNCT	,	_	10	punct	_	SpaceAfter=No
13	"	"	PUNCT	''	_	10	punct	_	_
14	kata	kata	VERB	VB	Voice=Act	10	parataxis	_	_
15	Roekman	Roekman	PROPN	NNP	_	14	nsubj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	10	punct	_	_

~~~


