---
layout: base
title:  'Statistics of case in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `case`

This relation is universal.
There are 1 language-specific subtypes of `case`: <tt><a href="id_csui-dep-case-adv.html">case:adv</a></tt>.

2173 nodes (8%) are attached to their parents as `case`.

2173 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15324436263231.

The following 9 pairs of parts of speech are connected with `case`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (1427; 66% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (490; 23% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (111; 5% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (77; 4% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (26; 1% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (23; 1% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (17; 1% instances), <tt><a href="id_csui-pos-ADV.html">ADV</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-DET.html">DET</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Yen	yen	NOUN	NN	Number=Sing	5	nsubj	_	_
2	terhadap	hadap	ADP	IN	_	3	case	_	_
3	dolar	dolar	NOUN	NN	Number=Sing	1	nmod	_	_
4	AS	AS	PROPN	NNP	_	3	nmod	_	_
5	mencapai	capai	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
6	121,32	121,32	NUM	CD	NumType=Card	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Membaca	baca	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
2	Don	Don	PROPN	NNP	_	1	obj	_	_
3	Quixote	Quixote	PROPN	NNP	_	2	flat:name	_	_
4	untuk	untuk	ADP	IN	_	5	case	_	_
5	YouTube	YouTube	PROPN	NNP	_	1	obl	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 case	color:blue
1	Ia	ia	PRON	PRP	Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	mengatakan	kata	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
3	kejahatan	jahat	NOUN	NN	Number=Sing	5	nsubj	_	_
4	itu	itu	DET	DT	PronType=Dem	3	det	_	_
5	bernilai	nilai	VERB	VB	Mood=Ind|Voice=Act	2	ccomp	_	_
6	hingga	hingga	ADP	IN	_	8	case	_	_
7	£	£	SYM	SYM	_	5	obl	_	SpaceAfter=No
8	12.900	12.900	NUM	CD	NumType=Card	7	nummod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


