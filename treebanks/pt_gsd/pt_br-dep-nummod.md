---
layout: base
title:  'Statistics of nummod in UD_Portuguese-BR'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-BR: Relations: `nummod`

This relation is universal.

4725 nodes (1%) are attached to their parents as `nummod`.

4302 instances of `nummod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25566137566138.

The following 12 pairs of parts of speech are connected with `nummod`: <tt><a href="pt_br-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_br-pos-NUM.html">NUM</a></tt> (3940; 83% instances), <tt><a href="pt_br-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_br-pos-NUM.html">NUM</a></tt> (590; 12% instances), <tt><a href="pt_br-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_br-pos-NUM.html">NUM</a></tt> (114; 2% instances), <tt><a href="pt_br-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pt_br-pos-NUM.html">NUM</a></tt> (22; 0% instances), <tt><a href="pt_br-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_br-pos-CCONJ.html">CCONJ</a></tt> (22; 0% instances), <tt><a href="pt_br-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_br-pos-PROPN.html">PROPN</a></tt> (16; 0% instances), <tt><a href="pt_br-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_br-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="pt_br-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_br-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="pt_br-pos-PART.html">PART</a></tt>-<tt><a href="pt_br-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="pt_br-pos-X.html">X</a></tt>-<tt><a href="pt_br-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="pt_br-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_br-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pt_br-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_br-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	É	_	VERB	VERB	_	2	cop	_	_
2	um	_	PRON	PRON	_	0	root	_	_
3	de	de	ADP	ADP	_	6	case	_	_
4	os	o	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
5	três	_	NUM	NUM	NumType=Card	6	nummod	_	_
6	ácidos	_	NOUN	NOUN	_	2	nmod	_	_
7	ftálicos	_	ADJ	ADJ	_	6	amod	_	_
8	isoméricos	_	ADJ	ADJ	_	6	amod	_	SpaceAfter=No
9	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Sua	_	DET	DET	_	2	det:poss	_	_
2	capacidade	_	NOUN	NOUN	_	3	nsubj	_	_
3	é	_	VERB	VERB	_	0	root	_	_
4	de	_	ADP	ADP	_	7	case	_	_
5	10	_	NUM	NUM	NumType=Card	6	nummod	_	_
6	mil	_	NUM	NUM	NumType=Card	7	nummod	_	_
7	pessoas	_	NOUN	NOUN	_	3	nmod	_	SpaceAfter=No
8	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Jon	_	PROPN	PNOUN	_	0	root	_	_
2	Bon	_	PROPN	PNOUN	_	1	flat	_	_
3	Jovi	_	PROPN	PNOUN	_	1	flat	_	SpaceAfter=No
4	,	_	PUNCT	.	_	7	punct	_	_
5	en	en	ADP	ADP	_	7	case	_	_
6	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Show	_	NOUN	NOUN	_	1	nmod	_	_
8	"	_	PUNCT	.	_	10	punct	_	SpaceAfter=No
9	30	_	NUM	NUM	NumType=Card	10	nummod	_	_
10	Days	_	PROPN	PNOUN	_	7	appos	_	_
11	to	_	ADP	ADP	_	12	case	_	_
12	Victory	_	PROPN	PNOUN	_	10	nmod	_	_
13	Concert	_	PROPN	PNOUN	_	12	flat	_	SpaceAfter=No
14	"	_	PUNCT	.	_	10	punct	_	SpaceAfter=No
15	.	_	PUNCT	.	_	1	punct	_	_

~~~


