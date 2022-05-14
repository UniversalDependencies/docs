---
layout: base
title:  'Statistics of aux:pass in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-aux.html">aux</a></tt>.

1604 nodes (1%) are attached to their parents as `aux:pass`.

1567 instances of `aux:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21321695760599.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (1604; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Four	four	NUM	CD	NumType=Card	2	nummod	2:nummod	_
2	months	month	NOUN	NNS	Number=Plur	3	obl:npmod	3:obl:npmod	_
3	later	late	ADV	RBR	Degree=Cmp	7	advmod	7:advmod	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	7:punct	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj:pass	7:nsubj:pass	_
6	were	be	AUX	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	7	aux:pass	7:aux:pass	_
7	married	marry	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


