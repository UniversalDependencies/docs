---
layout: base
title:  'Statistics of dislocated in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `dislocated`

This relation is universal.
There are 4 language-specific subtypes of `dislocated`: <tt><a href="fr_rhapsodie-dep-dislocated-mod.html">dislocated:mod</a></tt>, <tt><a href="fr_rhapsodie-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="fr_rhapsodie-dep-dislocated-obl.html">dislocated:obl</a></tt>, <tt><a href="fr_rhapsodie-dep-dislocated-subj.html">dislocated:subj</a></tt>.

2 nodes (0%) are attached to their parents as `dislocated`.

2 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.5.

The following 2 pairs of parts of speech are connected with `dislocated`: <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 50% instances), <tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 dislocated	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	dislocated	_	AlignBegin=28933|AlignEnd=29153|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=29153|AlignEnd=29153
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	AlignBegin=29153|AlignEnd=29333|HasSpokenGender=OnlySingExceptWithLiaison
4	livres	livre	NOUN	_	Gender=Masc|Number=Plur	1	appos	_	AlignBegin=29333|AlignEnd=29545|Exponence[Gender]=Inherent|Exponence[Number]=Absent
5	politiques	politique	ADJ	_	Gender=Masc|Number=Plur	4	amod	_	AlignBegin=29847|AlignEnd=30548|Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	AlignBegin=30548|AlignEnd=31178
7	enfin	enfin	ADV	_	_	5	discourse	_	AlignBegin=31178|AlignEnd=31393|SpaceAfter=No
8	,	,	PUNCT	_	_	1	punct	_	AlignBegin=31393|AlignEnd=31393
9	non	non	ADV	_	Polarity=Neg	0	root	_	AlignBegin=31393|AlignEnd=31513|SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	AlignBegin=31513|AlignEnd=31513

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 dislocated	color:blue
1	ensuite	ensuite	ADV	_	_	9	advmod	_	AlignBegin=148128|AlignEnd=148543|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=148543|AlignEnd=148543
3	nos	son	DET	_	Number=Plur|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	4	det	_	AlignBegin=148543|AlignEnd=148673|HasSpokenGender=OnlySingExceptWithLiaison
4	chaussures	chaussure	NOUN	_	Gender=Fem|Number=Plur	9	dislocated	_	AlignBegin=148673|AlignEnd=149113|Exponence[Gender]=Inherent|Exponence[Number]=Absent
5	qui	qui	PRON	_	PronType=Rel	6	nsubj	_	AlignBegin=149113|AlignEnd=149193
6	sont	être	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	AlignBegin=149193|AlignEnd=149403
7	ici	ici	ADV	_	_	6	obl:arg	_	AlignBegin=149403|AlignEnd=149770|SpaceAfter=No
8	,	,	PUNCT	_	_	4	punct	_	AlignBegin=149770|AlignEnd=150068
9	waouh	waouh	INTJ	_	_	0	root	_	AlignBegin=150068|AlignEnd=150870|SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	AlignBegin=150870|AlignEnd=150870

~~~


