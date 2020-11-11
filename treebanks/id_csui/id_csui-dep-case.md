---
layout: base
title:  'Statistics of case in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `case`

This relation is universal.
There are 1 language-specific subtypes of `case`: <tt><a href="id_csui-dep-case-adv.html">case:adv</a></tt>.

2197 nodes (8%) are attached to their parents as `case`.

2197 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16795630405098.

The following 9 pairs of parts of speech are connected with `case`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (1430; 65% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (519; 24% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (95; 4% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (79; 4% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (29; 1% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (23; 1% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (18; 1% instances), <tt><a href="id_csui-pos-ADV.html">ADV</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="id_csui-pos-DET.html">DET</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (1; 0% instances).


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
5	mencapai	capai	VERB	VB	Voice=Act	0	root	_	_
6	121,32	121,32	NUM	CD	_	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Membaca	baca	VERB	VB	Voice=Act	0	root	_	_
2	Don	Don	PROPN	NNP	_	1	obj	_	_
3	Quixote	Quixote	PROPN	NNP	_	2	flat:name	_	_
4	untuk	untuk	ADP	IN	_	5	case	_	_
5	YouTube	YouTube	PROPN	NNP	_	1	obl	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	Menurut	turut	ADP	IN	_	2	case	_	_
2	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	8	obl	_	_
3	untuk	untuk	ADP	IN	_	4	case	_	_
4	akuisisi	akuisisi	NOUN	NN	Number=Sing	8	obl	_	_
5	ini	ini	DET	DT	PronType=Dem	4	det	_	_
6	perseroan	perseroan	NOUN	NN	Number=Sing	8	nsubj	_	_
7	akan	akan	AUX	MD	_	8	aux	_	_
8	melakukan	laku	VERB	VB	Voice=Act	0	root	_	_
9	rights	rights	X	FW	Foreign=Yes	8	obj	_	_
10	issue	issue	X	FW	Foreign=Yes	9	flat:foreign	_	SpaceAfter=No
11	.	.	PUNCT	.	_	8	punct	_	_

~~~


