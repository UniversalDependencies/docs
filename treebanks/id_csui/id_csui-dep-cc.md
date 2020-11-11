---
layout: base
title:  'Statistics of cc in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="id_csui-dep-cc-preconj.html">cc:preconj</a></tt>.

768 nodes (3%) are attached to their parents as `cc`.

767 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.43489583333333.

The following 12 pairs of parts of speech are connected with `cc`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt> (334; 43% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt> (248; 32% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt> (85; 11% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt> (56; 7% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt> (16; 2% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt> (14; 2% instances), <tt><a href="id_csui-pos-ADV.html">ADV</a></tt>-<tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances), <tt><a href="id_csui-pos-AUX.html">AUX</a></tt>-<tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="id_csui-pos-PART.html">PART</a></tt>-<tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	Zinedine	zinedine	PROPN	NNP	_	7	nsubj	_	_
2	Zidane	Zidane	PROPN	NNP	_	1	flat:name	_	_
3	dan	dan	CCONJ	CC	_	4	cc	_	_
4	pebasket	pebasket	NOUN	NN	Number=Sing	1	conj	_	_
5	Michael	Michael	PROPN	NNP	_	4	nmod	_	_
6	Jordan	Jordan	PROPN	NNP	_	5	flat:name	_	_
7	melakukan	laku	VERB	VB	Voice=Act	0	root	_	_
8	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cc	color:blue
1	Baru	baru	ADV	RB	_	3	advmod	_	_
2	kemudian	kemudian	ADV	RB	_	3	advmod	_	_
3	berturut-turut	turut	VERB	VB	Voice=Act	0	root	_	_
4	dengan	dengan	ADP	IN	_	5	case	_	_
5	Malaysia	Malaysia	PROPN	NNP	_	3	obl	_	_
6	2005	2005	NUM	CD	_	5	nummod	_	SpaceAfter=No
7	,	,	PUNCT	,	_	5	punct	_	_
8	dan	dan	CCONJ	CC	_	10	cc	_	_
9	kemudian	kemudian	ADV	RB	_	10	advmod	_	_
10	Filipina	Filipina	PROPN	NNP	_	5	nmod	_	_
11	2006	2006	NUM	CD	_	10	nummod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


