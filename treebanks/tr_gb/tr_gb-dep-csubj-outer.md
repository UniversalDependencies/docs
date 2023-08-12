---
layout: base
title:  'Statistics of csubj:outer in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="tr_gb-dep-csubj-cop.html">csubj:cop</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:outer`.

1 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 1 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 csubj:outer	color:blue
1	Önemli	önemli	ADJ	_	_	6	csubj:outer	_	_
2	olan	ol	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	sizin	siz	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
4	bu	bu	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	evi	ev	NOUN	_	Case=Acc|Number=Sing	6	obj	_	_
6	beğenmeniz	beğen	VERB	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=2|VerbForm=Vnoun	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


