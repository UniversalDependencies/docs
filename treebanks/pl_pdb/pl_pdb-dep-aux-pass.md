---
layout: base
title:  'Statistics of aux:pass in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-aux.html">aux</a></tt>.
There are also 3 other language-specific subtypes of `aux`: <tt><a href="pl_pdb-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_pdb-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_pdb-dep-aux-imp.html">aux:imp</a></tt>.

1399 nodes (0%) are attached to their parents as `aux:pass`.

1126 instances of `aux:pass` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38456040028592.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (1399; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Inicjatywa	inicjatywa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
2	ta	ten	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	1	det	1:det	_
3	została	zostać	AUX	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
4	zaaprobowana	zaaprobować	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


