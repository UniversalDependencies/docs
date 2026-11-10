---
layout: base
title:  'Statistics of aux:caus in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `aux:caus`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_rhapsodie-dep-aux-pass.html">aux:pass</a></tt>, <tt><a href="fr_rhapsodie-dep-aux-tense.html">aux:tense</a></tt>.

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
1	et	et	CCONJ	_	_	6	cc	_	WordAlignmentBegin=28804|WordAlignmentEnd=28864
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj:caus	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=28864|WordAlignmentEnd=29004
3	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	6	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=29004|WordAlignmentEnd=29034
4	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	WordAlignmentBegin=29034|WordAlignmentEnd=29074
5	fait	faire	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	aux:caus	_	Scrap=Yes|Status[Tense]=Denom|WordAlignmentBegin=29074|WordAlignmentEnd=29214
6	voir	voir	VERB	_	VerbForm=Inf	0	root	_	SpaceAfter=No|Subject=OblRaising|WordAlignmentBegin=29214|WordAlignmentEnd=29432
7	…	…	PUNCT	_	_	6	punct	_	WordAlignmentBegin=29432|WordAlignmentEnd=29432

~~~


