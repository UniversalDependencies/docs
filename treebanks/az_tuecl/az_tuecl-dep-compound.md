---
layout: base
title:  'Statistics of compound in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="az_tuecl-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="az_tuecl-dep-compound-redup.html">compound:redup</a></tt>.

8 nodes (1%) are attached to their parents as `compound`.

8 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (7; 88% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-ADV.html">ADV</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	O	o	PRON	_	_	2	nsubj	_	_
2	çalışdı	çalış	VERB	_	_	0	root	_	_
3	kı	ki	SCONJ	_	_	9	mark	_	_
4	siqar	siqar	NOUN	_	_	5	compound	_	_
5	çekmә	çek	VERB	_	_	9	xcomp	_	_
6	vә	və	CCONJ	_	_	8	cc	_	_
7	әlkol	alkol	NOUN	_	_	8	obj	_	_
8	içmәni	iç	VERB	_	_	5	conj	_	_
9	tәrkidә	tərk	VERB	_	_	2	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Deniz	Deniz	PROPN	_	_	3	nsubj	_	_
2	gec	gec	ADV	_	_	3	advmod	_	_
3	yatsa	yat	VERB	_	_	6	advcl	_	_
4	mədrəsəyə	mədrəsə	NOUN	_	_	6	obl	_	_
5	gec	gec	ADV	_	_	6	compound	_	_
6	qalacax	qal	VERB	_	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


