---
layout: base
title:  'Statistics of obl:agent in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_pud-dep-obl-unmarked.html">obl:unmarked</a></tt>.

1 nodes (0%) are attached to their parents as `obl:agent`.

1 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `obl:agent`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 obl:agent	color:blue
1	Grafton	Grafton	PROPN	NNP	Number=Sing	3	nmod:poss	3:nmod:poss	_
2	's	's	PART	POS	_	1	case	1:case	_
3	government	government	NOUN	NN	Number=Sing	4	nsubj	4:nsubj	_
4	disintegrated	disintegrate	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
5	in	in	ADP	IN	_	6	case	6:case	_
6	1770	1770	NUM	CD	NumForm=Digit|NumType=Card	4	obl	4:obl:in	SpaceAfter=No
7	,	,	PUNCT	,	_	4	punct	4:punct	_
8	allowing	allow	VERB	VBG	VerbForm=Ger	4	advcl	4:advcl	_
9	the	the	DET	DT	Definite=Def|PronType=Art	10	det	10:det	_
10	Tories	Tory	PROPN	NNPS	Number=Plur	8	iobj	8:iobj|16:nsubj:xsubj	_
11	led	lead	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	10	acl	10:acl	_
12	by	by	ADP	IN	_	14	case	14:case	_
13	Lord	lord	NOUN	NN	Number=Sing	14	nmod:desc	14:nmod:desc	_
14	North	North	PROPN	NNP	Number=Sing	11	obl:agent	11:obl:agent	_
15	to	to	PART	TO	_	16	mark	16:mark	_
16	return	return	VERB	VB	VerbForm=Inf	8	xcomp	8:xcomp	_
17	to	to	ADP	IN	_	18	case	18:case	_
18	power	power	NOUN	NN	Number=Sing	16	obl	16:obl:to	SpaceAfter=No
19	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


