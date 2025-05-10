---
layout: base
title:  'Statistics of xcomp in UD_Esperanto-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Cairo: Relations: `xcomp`

This relation is universal.

8 nodes (5%) are attached to their parents as `xcomp`.

8 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt> (7; 88% instances), <tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Li	li	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	provis	provi	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	ĉesi	ĉesi	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	fumi	fumi	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	kaj	_	CCONJ	_	_	6	cc	_	_
6	trinki	trinki	VERB	_	VerbForm=Inf	4	conj	_	SpaceAfter=No
7	.	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	Ŝi	ŝi	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	igis	igi	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	sian	si	PRON	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	4	nmod:poss	_	_
4	edzon	edzo	NOUN	_	Case=Acc|Number=Sing	2	obj	_	_
5	lavi	lavi	VERB	_	VerbForm=Inf	4	xcomp	_	_
6	la	la	DET	_	_	7	det	_	_
7	aŭton	aŭto	NOUN	_	Case=Acc|Number=Sing	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


