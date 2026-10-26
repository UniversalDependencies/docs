---
layout: base
title:  'Statistics of aux:pass in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_littleprince-dep-aux.html">aux</a></tt>.

32 nodes (0%) are attached to their parents as `aux:pass`.

32 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1875.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-AUX.html">AUX</a></tt> (32; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	soil	soil	NOUN	NN	Number=Sing	7	nsubj:pass	_	_
3	of	of	ADP	IN	_	5	case	_	_
4	that	that	DET	DT	Number=Sing|PronType=Dem	5	det	_	_
5	planet	planet	NOUN	NN	Number=Sing	2	nmod	_	_
6	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	infested	infest	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
8	with	with	ADP	IN	_	9	case	_	_
9	them	they	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	7	obl	_	_
10	.	.	PUNCT	.	_	7	punct	_	_

~~~


