---
layout: base
title:  'Statistics of xcomp in UD_Ottoman_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-TueCL: Relations: `xcomp`

This relation is universal.

12 nodes (1%) are attached to their parents as `xcomp`.

12 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16666666666667.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="ota_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_tuecl-pos-VERB.html">VERB</a></tt> (9; 75% instances), <tt><a href="ota_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_tuecl-pos-ADJ.html">ADJ</a></tt> (3; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 xcomp	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|PronType=Prs	9	nsubj	_	_
2	tütün	tütün	NOUN	_	Case=Nom|Number=Sing	5	obj	_	_
3	ve	ve	CCONJ	_	_	4	cc	_	_
4	alḳol	alḳol	NOUN	_	Case=Nom|Number=Sing	2	conj	_	_
5	içmegi	iç	VERB	Vnoun	Case=Acc|Number=Sing|VerbForm=Vnoun	7	xcomp	_	_
6	terk	terk	NOUN	_	Case=Nom|Number=Sing	7	compound:lvc	_	_
7	etmege	et	VERB	Vnoun	Case=Dat|Number=Sing|VerbForm=Vnoun	9	xcomp	_	_
8	teşebbüs	teşebbüs	NOUN	_	Case=Nom|Number=Sing	9	compound:lvc	_	_
9	eyledi	eyle	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Stop	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	Peterin	Peter	PROPN	_	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	hem-sāyesi	hem-sāye	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
3	çiti	çit	NOUN	_	Case=Acc|Number=Sing	5	obj	_	_
4	aḥmere	aḥmer	ADJ	_	_	5	xcomp	_	_
5	boyadı	boya	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


