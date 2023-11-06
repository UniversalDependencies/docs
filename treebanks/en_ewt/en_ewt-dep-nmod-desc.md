---
layout: base
title:  'Statistics of nmod:desc in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `nmod:desc`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="en_ewt-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_ewt-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_ewt-dep-nmod-tmod.html">nmod:tmod</a></tt>.

3 nodes (0%) are attached to their parents as `nmod:desc`.

3 instances of `nmod:desc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nmod:desc`: <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:desc	color:blue
1	Yahoo!	Yahoo!	PROPN	NNP	Number=Sing	2	compound	2:compound	_
2	Founders	founder	NOUN	NNS	Number=Plur	3	nmod:desc	3:nmod:desc	_
3	Jerry	Jerry	PROPN	NNP	Number=Sing	8	nsubj	8:nsubj	_
4	Yang	Yang	PROPN	NNP	Number=Sing	3	flat	3:flat	_
5	and	and	CCONJ	CC	_	6	cc	6:cc	_
6	David	David	PROPN	NNP	Number=Sing	3	conj	3:conj:and|8:nsubj	CorrectSpaceAfter=Yes|SpaceAfter=No
7	Filo	Filo	PROPN	NNP	Number=Sing	6	flat	6:flat	_
8	selected	select	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
9	the	the	DET	DT	Definite=Def|PronType=Art	10	det	10:det	_
10	name	name	NOUN	NN	Number=Sing	8	obj	8:obj	_
11	because	because	SCONJ	IN	_	13	mark	13:mark	_
12	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	13	nsubj	13:nsubj	_
13	considered	consider	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	8	advcl	8:advcl:because	_
14	themselves	themselves	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes	13	obj	13:obj|15:nsubj:xsubj	_
15	yahoos	yahoo	NOUN	NNS	Number=Plur	13	xcomp	13:xcomp	SpaceAfter=No
16	...	...	PUNCT	,	_	8	punct	8:punct	_

~~~


