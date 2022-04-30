---
layout: base
title:  'Statistics of punct in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `punct`

This relation is universal.

3531 nodes (12%) are attached to their parents as `punct`.

2361 instances of `punct` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.73038799207023.

The following 12 pairs of parts of speech are connected with `punct`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PUNCT.html">PUNCT</a></tt> (2005; 57% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-PUNCT.html">PUNCT</a></tt> (621; 18% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-PUNCT.html">PUNCT</a></tt> (542; 15% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-PUNCT.html">PUNCT</a></tt> (158; 4% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-PUNCT.html">PUNCT</a></tt> (116; 3% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-PUNCT.html">PUNCT</a></tt> (57; 2% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-PUNCT.html">PUNCT</a></tt> (21; 1% instances), <tt><a href="id_csui-pos-AUX.html">AUX</a></tt>-<tt><a href="id_csui-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="id_csui-pos-ADV.html">ADV</a></tt>-<tt><a href="id_csui-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="id_csui-pos-SYM.html">SYM</a></tt>-<tt><a href="id_csui-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="id_csui-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-DET.html">DET</a></tt>-<tt><a href="id_csui-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 punct	color:blue
1	Banyak	banyak	DET	DT	Number=Plur|PronType=Ind	2	det	_	_
2	olahragawan	olahragawan	NOUN	NN	Number=Sing	4	nsubj	_	_
3	terkenal	kenal	ADJ	JJ	_	2	amod	_	_
4	melakukan	laku	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
5	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	4	obj	_	_
6	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 punct	color:blue
1	Baru	baru	ADV	RB	_	3	advmod	_	_
2	kemudian	kemudian	ADV	RB	_	3	advmod	_	_
3	berturut-turut	turut	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
4	dengan	dengan	ADP	IN	_	5	case	_	_
5	Malaysia	Malaysia	PROPN	NNP	_	3	obl	_	_
6	2005	2005	NUM	CD	NumType=Card	5	nummod	_	SpaceAfter=No
7	,	,	PUNCT	,	_	5	punct	_	_
8	dan	dan	CCONJ	CC	_	10	cc	_	_
9	kemudian	kemudian	ADV	RB	_	10	advmod	_	_
10	Filipina	Filipina	PROPN	NNP	_	5	nmod	_	_
11	2006	2006	NUM	CD	NumType=Card	10	nummod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 punct	color:blue
1	Olahragawan	olahragawan	NOUN	NN	Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	,	_	3	punct	_	_
3	panutan	panutan	NOUN	NN	Number=Sing	1	conj	_	_
4	dan	dan	CCONJ	CC	_	5	cc	_	_
5	merokok	rokok	VERB	VB	Mood=Ind|Voice=Act	1	conj	_	_

~~~


