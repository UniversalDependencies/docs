---
layout: base
title:  'Statistics of det:predet in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-det.html">det</a></tt>.

9 nodes (0%) are attached to their parents as `det:predet`.

9 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `det:predet`: <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (9; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det:predet	color:blue
1	All	all	DET	PDT	_	3	det:predet	3:det:predet	_
2	the	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	_
3	medics	medic	NOUN	NNS	Number=Plur	5	nsubj	5:nsubj	_
4	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	5:cop	_
5	armed	armed	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	5:punct	_
7	except	except	ADP	IN	_	8	case	8:case	_
8	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	obl	5:obl:except	SpaceAfter=No
9	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


