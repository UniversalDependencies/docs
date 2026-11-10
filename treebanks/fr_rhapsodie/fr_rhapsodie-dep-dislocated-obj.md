---
layout: base
title:  'Statistics of dislocated:obj in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `dislocated:obj`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-dislocated.html">dislocated</a></tt>.
There are also 3 other language-specific subtypes of `dislocated`: <tt><a href="fr_rhapsodie-dep-dislocated-mod.html">dislocated:mod</a></tt>, <tt><a href="fr_rhapsodie-dep-dislocated-obl.html">dislocated:obl</a></tt>, <tt><a href="fr_rhapsodie-dep-dislocated-subj.html">dislocated:subj</a></tt>.

21 nodes (0%) are attached to their parents as `dislocated:obj`.

13 instances of `dislocated:obj` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.28571428571429.

The following 5 pairs of parts of speech are connected with `dislocated:obj`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (11; 52% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (7; 33% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 dislocated:obj	color:blue
1	ben	ben	INTJ	_	_	7	discourse	_	SpaceAfter=No|WordAlignmentBegin=12388|WordAlignmentEnd=12558
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=12558|WordAlignmentEnd=12558
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=12558|WordAlignmentEnd=12678
4	chaises	chaise	NOUN	_	Gender=Fem|Number=Plur	7	dislocated:obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=12678|WordAlignmentEnd=13168
5	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=13168|WordAlignmentEnd=13168
6	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	expl:subj	_	Exponence[Person]=Inherent|WordAlignmentBegin=13168|WordAlignmentEnd=13228
7	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=13228|WordAlignmentEnd=13358
8	me	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	10	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=13358|WordAlignmentEnd=13388
9	les	lui	PRON	_	Case=Acc|Emph=No|Number=Plur|Person=3|PronType=Prs	10	obj	_	Exponence[Person]=Inherent|WordAlignmentBegin=13388|WordAlignmentEnd=13498
10	donner	donner	VERB	_	VerbForm=Inf	7	ccomp	_	SpaceAfter=No|Subject=NoRaising|WordAlignmentBegin=13498|WordAlignmentEnd=13767
11	.	.	PUNCT	_	_	7	punct	_	WordAlignmentBegin=13767|WordAlignmentEnd=13767

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dislocated:obj	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	dislocated:obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=117515|WordAlignmentEnd=117755
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=117755|WordAlignmentEnd=117755
3	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=117755|WordAlignmentEnd=117845
4	aime	aimer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=117845|WordAlignmentEnd=117985
5	pas	pas	ADV	_	Polarity=Neg	4	advmod	_	SpaceAfter=No|WordAlignmentBegin=117985|WordAlignmentEnd=118105
6	.	.	PUNCT	_	_	4	punct	_	WordAlignmentBegin=118105|WordAlignmentEnd=118105

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 dislocated:obj	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=107806|WordAlignmentEnd=107923
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	WordAlignmentBegin=107923|WordAlignmentEnd=107973
3	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=107973|WordAlignmentEnd=108289
4	,	,	PUNCT	_	_	5	punct	_	WordAlignmentBegin=108289|WordAlignmentEnd=108289
5	hein	hein	INTJ	_	_	3	discourse	_	SpaceAfter=No|WordAlignmentBegin=108289|WordAlignmentEnd=108554
6	,	,	PUNCT	_	_	7	punct	_	WordAlignmentBegin=108554|WordAlignmentEnd=108554
7	qu'	que	PRON	_	PronType=Rel	10	obj	_	SpaceAfter=No|WordAlignmentBegin=108554|WordAlignmentEnd=108650
8	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	Exponence[Person]=Inherent|WordAlignmentBegin=108650|WordAlignmentEnd=108711
9	veut	vouloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl:cleft	_	Exponence[Person]=Absent|Filler=obj|WordAlignmentBegin=108711|WordAlignmentEnd=108858
10	dire	dire	VERB	_	VerbForm=Inf	9	xcomp	_	Subject=SubjRaising|WordAlignmentBegin=108858|WordAlignmentEnd=109025
11	Yves	Yves	PROPN	_	_	3	dislocated:obj	_	WordAlignmentBegin=109025|WordAlignmentEnd=109145
12	Klein	Klein	PROPN	_	_	11	flat:name	_	SpaceAfter=No|WordAlignmentBegin=109145|WordAlignmentEnd=109505
13	.	.	PUNCT	_	_	3	punct	_	WordAlignmentBegin=109505|WordAlignmentEnd=109505

~~~


