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
1	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	2	nsubj	_	AlignBegin=19981|AlignEnd=20116|Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
2	peut	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=20116|AlignEnd=20306|Exponence[Person]=Absent
3	citer	citer	VERB	_	VerbForm=Inf	2	xcomp	_	AlignBegin=20306|AlignEnd=20636|SpaceAfter=No|Subject=SubjRaising
4	,	,	PUNCT	_	_	6	punct	_	AlignBegin=20636|AlignEnd=20636
5	par	par	ADP	_	_	6	case	_	AlignBegin=20636|AlignEnd=20796
6	exemple	exemple	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	AlignBegin=20796|AlignEnd=21326|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	AlignBegin=21326|AlignEnd=21326
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	AlignBegin=21326|AlignEnd=21506|HasSpokenGender=OnlySingExceptWithLiaison
9	site	site	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	AlignBegin=21506|AlignEnd=21914|Exponence[Gender]=Inherent|Exponence[Number]=Absent
10	A	A	X	_	Foreign=Yes	9	nmod:appos	_	AlignBegin=22010|AlignEnd=22055|InTitle=Yes|Lang=en
11	Small	Small	X	_	Foreign=Yes	10	flat:foreign	_	AlignBegin=22055|AlignEnd=22415|InTitle=Yes|Lang=en
12	World	World	X	_	Foreign=Yes	10	flat:foreign	_	AlignBegin=22415|AlignEnd=22850|Lang=en|SpaceAfter=No|Title=Yes
13	.	.	PUNCT	_	_	2	punct	_	AlignBegin=22850|AlignEnd=22850

~~~


