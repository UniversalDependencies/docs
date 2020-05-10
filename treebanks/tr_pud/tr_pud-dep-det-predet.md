---
layout: base
title:  'Statistics of det:predet in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-det.html">det</a></tt>.

8 nodes (0%) are attached to their parents as `det:predet`.

8 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.125.

The following 1 pairs of parts of speech are connected with `det:predet`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (8; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 det:predet	color:blue
1	Sanayi	sanayi	NOUN	NN	Number=Sing	2	nmod:poss	_	Proper=True
2	Devrimi	Devrim	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	nsubj	_	Proper=True|SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	İngiltere'de	İngiltere	PROPN	PROPN	Case=Loc|Number=Sing	10	obl	_	Proper=True
5	diğer	diğer	DET	PDT	Definite=Def|Number=Sing|Polarity=Pos	7	det:predet	_	_
6	tüm	tüm	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	7	det	_	_
7	ülkelerden	ülke	NOUN	NN	Case=Abl|Number=Plur	9	obl	_	_
8	daha	daha	ADV	RB	_	9	advmod	_	_
9	önce	önce	ADV	RB	_	10	advmod	_	_
10	gerçekleşti	gerçekleş	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


