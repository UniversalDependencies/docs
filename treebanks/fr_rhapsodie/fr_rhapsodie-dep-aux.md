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
1	et	et	CCONJ	_	_	6	cc	_	AlignBegin=28804|AlignEnd=28864
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj:caus	_	AlignBegin=28864|AlignEnd=29004|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
3	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	6	iobj	_	AlignBegin=29004|AlignEnd=29034|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
4	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	AlignBegin=29034|AlignEnd=29074
5	fait	faire	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	aux:caus	_	AlignBegin=29074|AlignEnd=29214|Scrap=Yes|Tense[denom]=Past
6	voir	voir	VERB	_	VerbForm=Inf	0	root	_	AlignBegin=29214|AlignEnd=29432|SpaceAfter=No|Subject=OblRaising
7	…	…	PUNCT	_	_	6	punct	_	AlignBegin=29432|AlignEnd=29432

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	et	et	CCONJ	_	ExtPos=CCONJ	5	cc	_	AlignBegin=29481|AlignEnd=29676|Idiom=Yes
2	puis	puis	CCONJ	_	_	1	fixed	_	AlignBegin=29676|AlignEnd=29906|InIdiom=Yes
3	nous	nous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	AlignBegin=29906|AlignEnd=30146|Exponence[Number]=Inherent|Exponence[Person]=Inherent
4	avons	avoir	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	AlignBegin=30146|AlignEnd=30483
5	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	AlignBegin=30483|AlignEnd=30976|Scrap=Yes|SpaceAfter=No|Tense[denom]=Past
6	,	,	PUNCT	_	_	7	punct	_	AlignBegin=30976|AlignEnd=30976
7	euh	euh	INTJ	_	_	5	discourse	_	AlignBegin=30976|AlignEnd=31577|SpaceAfter=No
8	…	…	PUNCT	_	_	5	punct	_	AlignBegin=31577|AlignEnd=31577

~~~


