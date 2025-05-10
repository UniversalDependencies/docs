---
layout: base
title:  'Statistics of csubj:outer in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="en_ewt-dep-csubj-pass.html">csubj:pass</a></tt>.

3 nodes (0%) are attached to their parents as `csubj:outer`.

3 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.33333333333333.

The following 1 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 csubj:outer	color:blue
1	But	but	CCONJ	CC	_	12	cc	12:cc	_
2	to	to	PART	TO	_	3	mark	3:mark	_
3	address	address	VERB	VB	VerbForm=Inf	12	csubj:outer	12:csubj:outer	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	5:det	_
5	substance	substance	NOUN	NN	Number=Sing	3	obj	3:obj	_
6	of	of	ADP	IN	_	9	case	9:case	_
7	this	this	DET	DT	Number=Sing|PronType=Dem	9	det	9:det	_
8	Big	big	ADJ	JJ	Degree=Pos	9	amod	9:amod	_
9	Lie	lie	NOUN	NN	Number=Sing	5	nmod	5:nmod:of	_
10	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
11	to	to	PART	TO	_	12	mark	12:mark	_
12	risk	risk	VERB	VB	VerbForm=Inf	0	root	0:root	_
13	falling	fall	VERB	VBG	VerbForm=Ger	12	xcomp	12:xcomp	_
14	into	into	ADP	IN	_	16	case	16:case	_
15	its	its	PRON	PRP$	Case=Gen|Gender=Neut|Number=Sing|Person=3|Poss=Yes|PronType=Prs	16	nmod:poss	16:nmod:poss	_
16	logic	logic	NOUN	NN	Number=Sing	13	obl	13:obl:into	SpaceAfter=No
17	.	.	PUNCT	.	_	12	punct	12:punct	_

~~~


