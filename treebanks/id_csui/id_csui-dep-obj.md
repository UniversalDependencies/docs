---
layout: base
title:  'Statistics of obj in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `obj`

This relation is universal.

1083 nodes (4%) are attached to their parents as `obj`.

1074 instances of `obj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.32871652816251.

The following 13 pairs of parts of speech are connected with `obj`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (943; 87% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (43; 4% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (31; 3% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (24; 2% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (22; 2% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-AUX.html">AUX</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	Kera	kera	NOUN	NN	Number=Sing	0	root	_	_
2	untuk	untuk	SCONJ	IN	_	3	mark	_	_
3	amankan	aman	VERB	VB	Mood=Ind|Voice=Act	1	acl	_	_
4	pesta	pesta	NOUN	NN	Number=Sing	3	obj	_	_
5	olahraga	olahraga	NOUN	NN	Number=Sing	4	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	Membaca	baca	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
2	Don	Don	PROPN	NNP	_	1	obj	_	_
3	Quixote	Quixote	PROPN	NNP	_	2	flat:name	_	_
4	untuk	untuk	ADP	IN	_	5	case	_	_
5	YouTube	YouTube	PROPN	NNP	_	1	obl	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obj	color:blue
1	Banyak	banyak	DET	DT	Number=Plur|PronType=Ind	2	det	_	_
2	olahragawan	olahragawan	NOUN	NN	Number=Sing	4	nsubj	_	_
3	terkenal	kenal	ADJ	JJ	_	2	amod	_	_
4	melakukan	laku	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
5	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	4	obj	_	_
6	.	.	PUNCT	.	_	4	punct	_	_

~~~


