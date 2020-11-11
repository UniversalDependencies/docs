---
layout: base
title:  'Statistics of obl in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="id_csui-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="id_csui-dep-obl-tmod.html">obl:tmod</a></tt>.

1333 nodes (5%) are attached to their parents as `obl`.

943 instances of `obl` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.40435108777194.

The following 17 pairs of parts of speech are connected with `obl`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (753; 56% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (262; 20% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (114; 9% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (95; 7% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (35; 3% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (23; 2% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (16; 1% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (14; 1% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-ADV.html">ADV</a></tt> (6; 0% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 obl	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 obl	color:blue
1	Membaca	baca	VERB	VB	Voice=Act	0	root	_	_
2	Don	Don	PROPN	NNP	_	1	obj	_	_
3	Quixote	Quixote	PROPN	NNP	_	2	flat:name	_	_
4	untuk	untuk	ADP	IN	_	5	case	_	_
5	YouTube	YouTube	PROPN	NNP	_	1	obl	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 obl	color:blue
1	Perkembangan	kembang	NOUN	NN	Number=Sing	9	obl	_	_
2	sektor	sektor	NOUN	NN	Number=Sing	1	nmod	_	_
3	riil	riil	ADJ	JJ	_	1	amod	_	_
4	di	di	ADP	IN	_	5	case	_	_
5	bulan	bulan	NOUN	NN	Number=Sing	1	nmod:tmod	_	_
6	Juni	Juni	PROPN	NNP	_	5	nmod:tmod	_	_
7	2007	2007	NUM	CD	_	5	nummod	_	_
8	sangat	sangat	ADV	RB	_	9	advmod	_	_
9	positif	positif	ADJ	JJ	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


