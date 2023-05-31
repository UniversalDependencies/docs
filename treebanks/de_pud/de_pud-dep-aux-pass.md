---
layout: base
title:  'Statistics of aux:pass in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-aux.html">aux</a></tt>.

230 nodes (1%) are attached to their parents as `aux:pass`.

132 instances of `aux:pass` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.21739130434783.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (230; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 aux:pass	color:blue
1	Das	der	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	Projekt	Projekt	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	8	nsubj:pass	_	_
3	wird	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	aux:pass	_	_
4	über	über	ADP	IN	_	5	case	_	_
5	Sponsoren	Sponsor	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	8	obl	_	_
6	und	und	CCONJ	CC	_	7	cc	_	_
7	Werbung	Werbung	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	5	conj	_	_
8	finanziert	finanzieren	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


