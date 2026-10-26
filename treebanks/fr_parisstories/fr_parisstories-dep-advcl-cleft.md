---
layout: base
title:  'Statistics of advcl:cleft in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `advcl:cleft`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-advcl.html">advcl</a></tt>.

40 nodes (0%) are attached to their parents as `advcl:cleft`.

39 instances of `advcl:cleft` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.525.

The following 9 pairs of parts of speech are connected with `advcl:cleft`: <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (22; 55% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (8; 20% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (4; 10% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 advcl:cleft	color:blue
1	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
2	me	moi	PRON	_	Emph=No|Number=Sing|Person=1|PronType=Prs	4	expl:comp	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
3	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	aperçue	apercevoir	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
5	que	que	SCONJ	_	_	8	mark	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
7	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	ccomp	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
9	qui	qui	PRON	_	PronType=Rel	11	nsubj	_	_
10	les	lui	PRON	_	Case=Acc|Emph=No|Number=Plur|Person=3|PronType=Prs	11	obj	_	Exponence[Person]=Inherent
11	empêchait	empêcher	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	advcl:cleft	_	Exponence[Number]=Absent|Exponence[Person]=Absent|Filler=subj
12	de	de	ADP	_	_	13	mark	_	_
13	gonfler	gonfler	VERB	_	VerbForm=Inf	11	xcomp	_	SpaceAfter=No|Subject=ObjRaising
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 15 advcl:cleft	color:blue
1	de	de	ADP	_	_	3	case	_	AlignBegin=92195|AlignEnd=92341|wordform=du
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	HasSpokenGender=OnlySingExceptWithLiaison
3	coup	coup	NOUN	_	Gender=Masc|Number=Sing	9	discourse	_	AlignBegin=92341|AlignEnd=92487|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=92487|AlignEnd=92487
5	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	expl:subj	_	AlignBegin=92487|AlignEnd=92633|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	AlignBegin=92633|AlignEnd=92779
7	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	AlignBegin=92779|AlignEnd=92925|HasSpokenGender=OnlySingExceptWithLiaison
8	première	premier	ADJ	_	Gender=Fem|Number=Sing	9	amod	_	AlignBegin=92925|AlignEnd=93071|Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison
9	fois	fois	NOUN	_	Gender=Fem|Number=Sing	0	root	_	AlignBegin=93071|AlignEnd=93218|Exponence[Gender]=Inherent|Exponence[Number]=Absent
10	de	de	ADP	_	_	12	case	_	AlignBegin=93218|AlignEnd=93364
11	ma	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	12	det	_	AlignBegin=93364|AlignEnd=93510|HasSpokenGender=OnlySingExceptWithLiaison
12	vie	vie	NOUN	_	Gender=Fem|Number=Sing	9	nmod	_	AlignBegin=93510|AlignEnd=93656|Exponence[Gender]=Inherent|Exponence[Number]=Absent
13	que	que	SCONJ	_	_	15	mark	_	AlignBegin=93656|AlignEnd=93802
14	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	15	nsubj	_	AlignBegin=93802|AlignEnd=93948|Exponence[Number]=Inherent|Exponence[Person]=Inherent
15	faisais	faire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	9	advcl:cleft	_	AlignBegin=93948|AlignEnd=94094|Exponence[Person]=Absent|Filler=mod
16	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	15	obj	_	AlignBegin=94094|AlignEnd=94240|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
17	.	.	PUNCT	_	_	9	punct	_	AlignBegin=94240|AlignEnd=94240

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 advcl:cleft	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
2	fait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	Exponence[Number]=Absent|Exponence[Person]=Absent
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	LiaisonAfter=Yes
4	an	an	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	Exponence[Person]=Inherent
7	fait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	advcl:cleft	_	Exponence[Number]=Absent|Exponence[Person]=Absent|Filler=mod
8	que	que	ADV	_	Polarity=Neg	10	advmod	_	_
9	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	10	det	_	_
10	conneries	connerie	NOUN	_	Gender=Fem|Number=Plur	7	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


