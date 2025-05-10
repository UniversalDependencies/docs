---
layout: base
title:  'Statistics of xcomp in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `xcomp`

This relation is universal.

12 nodes (1%) are attached to their parents as `xcomp`.

12 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66666666666667.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt> (9; 75% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt> (3; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
2	sigara	sigara	NOUN	_	Case=Nom|Number=Sing	5	obj	_	_
3	ve	ve	CCONJ	_	_	4	cc	_	_
4	alkol	alkol	NOUN	_	Case=Nom|Number=Sing	2	conj	_	_
5	içmeyi	iç	VERB	_	Case=Acc|Number=Sing|VerbForm=Vnoun	6	xcomp	_	_
6	bırakmayı	bırak	VERB	_	Case=Acc|Number=Sing|VerbForm=Vnoun	7	xcomp	_	_
7	denedi	dene	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	Peter'in	Peter	PROPN	_	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	komşusu	komşu	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
3	çiti	çit	NOUN	_	Case=Acc|Number=Sing	5	obj	_	_
4	kırmızı	kırmızı	ADJ	_	_	5	xcomp	_	_
5	boyadı	boya	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


