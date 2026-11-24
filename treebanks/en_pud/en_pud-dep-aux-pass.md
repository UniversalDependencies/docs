---
layout: base
title:  'Statistics of aux:pass in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-aux.html">aux</a></tt>.

277 nodes (1%) are attached to their parents as `aux:pass`.

277 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27075812274368.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (277; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	_
2	new	new	ADJ	JJ	Degree=Pos	3	amod	3:amod	_
3	spending	spending	NOUN	NN	Number=Sing	5	nsubj:pass	5:nsubj:pass	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	5:aux:pass	_
5	fueled	fuel	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	by	by	ADP	IN	_	11	case	11:case	_
7	Clinton	Clinton	PROPN	NNP	Number=Sing	11	nmod:poss	11:nmod:poss	SpaceAfter=No
8	’s	's	PART	POS	_	7	case	7:case	_
9	large	large	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
10	bank	bank	NOUN	NN	Number=Sing	11	compound	11:compound	_
11	account	account	NOUN	NN	Number=Sing	5	obl	5:obl:by	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


