---
layout: base
title:  'Statistics of aux:pass in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pt_porttinari-dep-aux.html">aux</a></tt>.

988 nodes (1%) are attached to their parents as `aux:pass`.

988 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04251012145749.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (988; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	Diferentes	diferente	ADJ	_	Number=Plur	2	amod	2:amod	_
2	críticas	crítico	NOUN	_	Gender=Fem|Number=Plur	3	nsubj	3:nsubj|5:nsubj:pass	_
3	podem	poder	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	ser	ser	AUX	_	VerbForm=Inf	5	aux:pass	5:aux:pass	_
5	feitas	fazer	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	3	xcomp	3:xcomp	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	3:punct	SpaceAfter=No

~~~


