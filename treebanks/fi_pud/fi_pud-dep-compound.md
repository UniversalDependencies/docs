---
layout: base
title:  'Statistics of compound in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="fi_pud-dep-compound-nn.html">compound:nn</a></tt>, <tt><a href="fi_pud-dep-compound-prt.html">compound:prt</a></tt>.

22 nodes (0%) are attached to their parents as `compound`.

22 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40909090909091.

The following 1 pairs of parts of speech are connected with `compound`: <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (22; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 compound	color:blue
1	Ensimmäinen	ensimmäinen	ADJ	_	Case=Nom|Derivation=Inen|Number=Sing|NumType=Ord	2	amod	2:amod	_
2	kuningas	kuningas	NOUN	_	Case=Nom|Number=Sing	4	nsubj:cop	4:nsubj:cop	_
3	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	Mojmír	Mojmír	PROPN	_	Case=Nom|Number=Sing	0	root	0:root	_
5	I	I	ADJ	_	NumType=Ord	4	flat:name	4:flat:name	_
6	(	(	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
7	hallitsi	hallita	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	parataxis	4:parataxis	_
8	830	830	NUM	_	NumType=Card	10	compound	10:compound	SpaceAfter=No
9	-	-	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No
10	846	846	NUM	_	NumType=Card	7	obl	7:obl	SpaceAfter=No
11	)	)	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


