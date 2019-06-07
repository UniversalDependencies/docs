---
layout: base
title:  'Statistics of aux:pass in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="de_hdt-dep-aux.html">aux</a></tt>.

5606 nodes (1%) are attached to their parents as `aux:pass`.

3095 instances of `aux:pass` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.73760256867642.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (5606; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 aux:pass	color:blue
1	Alte	alt	ADJ	ADJA	Degree=Pos|Number=Plur	2	amod	_	_
2	EMails	EMails	NOUN	NN	Case=Nom|Person=3	7	nsubj:pass	_	_
3	wurden	werden	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Past	7	aux:pass	_	_
4	nicht	nicht	PART	PTKNEG	_	7	advmod	_	_
5	vom	vom	ADP	APPRART	Case=Dat	6	case	_	_
6	Server	Server	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	7	obl	_	_
7	gelöscht	löschen	VERB	VVPP	_	0	root	_	_
8	.	.	PUNCT	$.	_	7	punct	_	_

~~~


