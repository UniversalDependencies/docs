---
layout: base
title:  'Statistics of aux:pass in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-aux.html">aux</a></tt>.
There are also 3 other language-specific subtypes of `aux`: <tt><a href="pl_pdb-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_pdb-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_pdb-dep-aux-imp.html">aux:imp</a></tt>.

1407 nodes (0%) are attached to their parents as `aux:pass`.

1134 instances of `aux:pass` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38663823738451.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (1407; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Postanowienie	postanowienie	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	2:nsubj	_
2	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	4	aux:pass	4:aux:pass	_
4	wydane	wydać	ADJ	ppas:sg:nom:n:perf:aff	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	2	xcomp	2:xcomp	_
5	na	na	ADP	prep:loc	AdpType=Prep	6	case	6:case	Case=Loc
6	posiedzeniu	posiedzenie	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	4	obl	4:obl	_
7	niejawnym	niejawny	ADJ	adj:sg:loc:n:pos	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	6	amod	6:amod	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


