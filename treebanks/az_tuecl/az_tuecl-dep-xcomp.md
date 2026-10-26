---
layout: base
title:  'Statistics of xcomp in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `xcomp`

This relation is universal.

15 nodes (2%) are attached to their parents as `xcomp`.

12 instances of `xcomp` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.73333333333333.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt> (14; 93% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 xcomp	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	çalışdı	çalış	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	kı	ki	SCONJ	_	_	9	mark	_	_
4	siqar	siqar	NOUN	_	Case=Nom|Number=Sing	5	compound	_	_
5	çekmə	çek	VERB	_	VerbForm=Vnoun	9	xcomp	_	_
6	və	və	CCONJ	_	_	8	cc	_	_
7	əlkol	alkol	NOUN	_	Case=Nom|Number=Sing	8	obj	_	_
8	içməni	iç	VERB	_	Case=Acc|Number=Sing|VerbForm=Vnoun	5	conj	_	_
9	tərkidə	tərk	VERB	_	Mood=Sub|Number=Sing|Person=3	2	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	Peterin	Peter	PROPN	_	Case=Gen|Number=Sing	2	nmod	_	_
2	qonşusu	qonşu	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
3	hasarı	hasar	NOUN	_	Case=Acc|Number=Sing	5	obl	_	_
4	qırmız	qırmız	ADJ	_	_	5	xcomp	_	_
5	rənglədi	rənglə	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=CauCau	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


