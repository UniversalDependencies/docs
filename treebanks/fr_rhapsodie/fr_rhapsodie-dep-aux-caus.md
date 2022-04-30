---
layout: base
title:  'Statistics of aux:caus in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `aux:caus`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-aux.html">aux</a></tt>.
There are also 1 other language-specific subtypes of `aux`: <tt><a href="fr_rhapsodie-dep-aux-pass.html">aux:pass</a></tt>.

27 nodes (0%) are attached to their parents as `aux:caus`.

27 instances of `aux:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44444444444444.

The following 1 pairs of parts of speech are connected with `aux:caus`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (27; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:caus	color:blue
1	et	et	CCONJ	_	_	6	cc	_	_
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj:caus	_	_
3	m'	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	6	iobj	_	SpaceAfter=No
4	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	fait	faire	AUX	DoubleAux	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	aux:caus	_	Scrap=Yes
6	voir	voir	VERB	CAUSATIVE	VerbForm=Inf	0	root	_	SpaceAfter=No
7	…	…	PUNCT	_	_	6	punct	_	_

~~~


