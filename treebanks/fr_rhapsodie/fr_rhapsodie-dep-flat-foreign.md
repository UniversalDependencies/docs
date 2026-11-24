---
layout: base
title:  'Statistics of flat:foreign in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_rhapsodie-dep-flat-name.html">flat:name</a></tt>.

8 nodes (0%) are attached to their parents as `flat:foreign`.

8 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.375.

The following 1 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (8; 100% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat:foreign	color:blue
1	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	2	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=19981|WordAlignmentEnd=20116
2	peut	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=20116|WordAlignmentEnd=20306
3	citer	citer	VERB	_	VerbForm=Inf	2	xcomp	_	SpaceAfter=No|Subject=SubjRaising|WordAlignmentBegin=20306|WordAlignmentEnd=20636
4	,	,	PUNCT	_	_	6	punct	_	WordAlignmentBegin=20636|WordAlignmentEnd=20636
5	par	par	ADP	_	_	6	case	_	WordAlignmentBegin=20636|WordAlignmentEnd=20796
6	exemple	exemple	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No|WordAlignmentBegin=20796|WordAlignmentEnd=21326
7	,	,	PUNCT	_	_	9	punct	_	WordAlignmentBegin=21326|WordAlignmentEnd=21326
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=21326|WordAlignmentEnd=21506
9	site	site	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=21506|WordAlignmentEnd=21914
10	A	A	X	_	Foreign=Yes	9	appos	_	Lang=en|Title=Yes|WordAlignmentBegin=22010|WordAlignmentEnd=22055
11	Small	Small	X	_	Foreign=Yes	10	flat:foreign	_	InTitle=Yes|Lang=en|WordAlignmentBegin=22055|WordAlignmentEnd=22415
12	World	World	X	_	Foreign=Yes	10	flat:foreign	_	InTitle=Yes|Lang=en|SpaceAfter=No|WordAlignmentBegin=22415|WordAlignmentEnd=22850
13	.	.	PUNCT	_	_	2	punct	_	WordAlignmentBegin=22850|WordAlignmentEnd=22850

~~~


