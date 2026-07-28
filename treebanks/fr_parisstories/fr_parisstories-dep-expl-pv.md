---
layout: base
title:  'Statistics of expl:pv in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `expl:pv`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `expl`: <tt><a href="fr_parisstories-dep-expl-comp.html">expl:comp</a></tt>, <tt><a href="fr_parisstories-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="fr_parisstories-dep-expl-subj.html">expl:subj</a></tt>.

118 nodes (0%) are attached to their parents as `expl:pv`.

118 instances of `expl:pv` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44915254237288.

The following 1 pairs of parts of speech are connected with `expl:pv`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (118; 100% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 expl:pv	color:blue
1	et	et	CCONJ	_	_	4	cc	_	_
2	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
3	me	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	4	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
4	dis	dire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	_	_
6	oh	oh	INTJ	_	_	8	discourse	_	_
7	mon	son	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	8	det	_	HasSpokenGender=OnlySingExceptWithLiaison
8	dieu	dieu	NOUN	_	ExtPos=INTJ|Gender=Masc|Number=Sing	10	discourse	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
9	mais	mais	CCONJ	_	_	10	cc	_	_
10	qu'	que	PRON	_	PronType=Int	4	ccomp	_	SpaceAfter=No
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	Reported=Yes|SpaceAfter=No
12	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	10	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
13	qu'	que	SCONJ	_	_	17	mark	_	SpaceAfter=No
14	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	17	nsubj	_	Exponence[Person]=Inherent
15	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	17	expl:pv	_	Exponence[Person]=Inherent|SpaceAfter=No
16	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux:tense	_	Filler=obj
17	passé	passer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	10	advcl:cleft	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
18	?	?	PUNCT	_	_	4	punct	_	_

~~~


