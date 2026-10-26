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
Average distance between parent and child is 4.95238095238095.

The following 5 pairs of parts of speech are connected with `dislocated:obj`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (11; 52% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (7; 33% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 dislocated:obj	color:blue
1	ben	ben	INTJ	_	_	7	discourse	_	AlignBegin=12388|AlignEnd=12558|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=12558|AlignEnd=12558
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	AlignBegin=12558|AlignEnd=12678|HasSpokenGender=OnlySingExceptWithLiaison
4	chaises	chaise	NOUN	_	Gender=Fem|Number=Plur	7	dislocated:obj	_	AlignBegin=12678|AlignEnd=13168|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	AlignBegin=13168|AlignEnd=13168
6	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	expl:subj	_	AlignBegin=13168|AlignEnd=13228|Exponence[Person]=Inherent
7	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=13228|AlignEnd=13358|Exponence[Person]=Absent
8	me	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	7	iobj	_	AlignBegin=13358|AlignEnd=13388|Exponence[Number]=Inherent|Exponence[Person]=Inherent
9	les	lui	PRON	_	Case=Acc|Emph=No|Number=Plur|Person=3|PronType=Prs	10	obj	_	AlignBegin=13388|AlignEnd=13498|Exponence[Person]=Inherent
10	donner	donner	VERB	_	VerbForm=Inf	7	ccomp	_	AlignBegin=13498|AlignEnd=13767|SpaceAfter=No|Subject=NoRaising
11	.	.	PUNCT	_	_	7	punct	_	AlignBegin=13767|AlignEnd=13767

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dislocated:obj	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	dislocated:obj	_	AlignBegin=117515|AlignEnd=117755|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=117755|AlignEnd=117755
3	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	AlignBegin=117755|AlignEnd=117845|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
4	aime	aimer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=117845|AlignEnd=117985|Exponence[Person]=Absent
5	pas	pas	ADV	_	Polarity=Neg	4	advmod	_	AlignBegin=117985|AlignEnd=118105|SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	AlignBegin=118105|AlignEnd=118105

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 dislocated:obj	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	expl:subj	_	AlignBegin=107806|AlignEnd=107923|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	AlignBegin=107923|AlignEnd=107973
3	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	AlignBegin=107973|AlignEnd=108289|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	AlignBegin=108289|AlignEnd=108289
5	hein	hein	INTJ	_	_	3	discourse	_	AlignBegin=108289|AlignEnd=108554|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	AlignBegin=108554|AlignEnd=108554
7	qu'	que	PRON	_	PronType=Rel	10	obj	_	AlignBegin=108554|AlignEnd=108650|SpaceAfter=No
8	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	AlignBegin=108650|AlignEnd=108711|Exponence[Person]=Inherent
9	veut	vouloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl:cleft	_	AlignBegin=108711|AlignEnd=108858|Exponence[Person]=Absent|Filler=obj
10	dire	dire	VERB	_	VerbForm=Inf	9	xcomp	_	AlignBegin=108858|AlignEnd=109025|Subject=SubjRaising
11	Yves	Yves	PROPN	_	_	3	dislocated:obj	_	AlignBegin=109025|AlignEnd=109145
12	Klein	Klein	PROPN	_	_	11	flat:name	_	AlignBegin=109145|AlignEnd=109505|SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	AlignBegin=109505|AlignEnd=109505

~~~


