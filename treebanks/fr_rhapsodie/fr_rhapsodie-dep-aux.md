---
layout: base
title:  'Statistics of aux in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `aux`

This relation is universal.
There are 3 language-specific subtypes of `aux`: <tt><a href="fr_rhapsodie-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_rhapsodie-dep-aux-pass.html">aux:pass</a></tt>, <tt><a href="fr_rhapsodie-dep-aux-tense.html">aux:tense</a></tt>.

5 nodes (0%) are attached to their parents as `aux`.

5 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (4; 80% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	et	et	CCONJ	_	_	6	cc	_	WordAlignmentBegin=28804|WordAlignmentEnd=28864
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj:caus	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=28864|WordAlignmentEnd=29004
3	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	6	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=29004|WordAlignmentEnd=29034
4	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	WordAlignmentBegin=29034|WordAlignmentEnd=29074
5	fait	faire	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	aux:caus	_	Scrap=Yes|Status[Tense]=Denom|WordAlignmentBegin=29074|WordAlignmentEnd=29214
6	voir	voir	VERB	_	VerbForm=Inf	0	root	_	SpaceAfter=No|Subject=OblRaising|WordAlignmentBegin=29214|WordAlignmentEnd=29432
7	…	…	PUNCT	_	_	6	punct	_	WordAlignmentBegin=29432|WordAlignmentEnd=29432

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	et	et	CCONJ	_	ExtPos=CCONJ	5	cc	_	Idiom=Yes|WordAlignmentBegin=29481|WordAlignmentEnd=29676
2	puis	puis	CCONJ	_	_	1	fixed	_	InIdiom=Yes|WordAlignmentBegin=29676|WordAlignmentEnd=29906
3	nous	nous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=29906|WordAlignmentEnd=30146
4	avons	avoir	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	WordAlignmentBegin=30146|WordAlignmentEnd=30483
5	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	Scrap=Yes|SpaceAfter=No|Status[Tense]=Denom|WordAlignmentBegin=30483|WordAlignmentEnd=30976
6	,	,	PUNCT	_	_	7	punct	_	WordAlignmentBegin=30976|WordAlignmentEnd=30976
7	euh	euh	INTJ	_	_	5	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=30976|WordAlignmentEnd=31577
8	…	…	PUNCT	_	_	5	punct	_	WordAlignmentBegin=31577|WordAlignmentEnd=31577

~~~


