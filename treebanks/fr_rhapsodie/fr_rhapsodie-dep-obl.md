---
layout: base
title:  'Statistics of obl in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="fr_rhapsodie-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_rhapsodie-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_rhapsodie-dep-obl-mod.html">obl:mod</a></tt>.

3 nodes (0%) are attached to their parents as `obl`.

3 instances of `obl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.66666666666667.

The following 2 pairs of parts of speech are connected with `obl`: <tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (2; 67% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl	color:blue
1	merci	merci	INTJ	_	_	0	root	_	AlignBegin=307273|AlignEnd=308382|Backchannel=?|Overlap=Rhap_D2011-118
2	à	à	ADP	_	_	3	case	_	AlignBegin=307273|AlignEnd=308382|Overlap=Rhap_D2011-118
3	vous	vous	PRON	_	Case=Acc|Emph=No|Number=Plur|Person=2|PronType=Prs	1	obl	_	AlignBegin=307273|AlignEnd=308382|Exponence[Number]=Inherent|Exponence[Person]=Inherent|Overlap=Rhap_D2011-118|Polite=Unknown|SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	AlignBegin=308382|AlignEnd=308382|Overlap=Rhap_D2011-99

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl	color:blue
1	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	AlignBegin=40122|AlignEnd=40202|HasSpokenGender=OnlySingExceptWithLiaison
2	quatorze	quatorze	NUM	_	_	14	nummod	_	AlignBegin=40202|AlignEnd=40624
3	juillet	juillet	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	AlignBegin=40624|AlignEnd=41285|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	AlignBegin=41285|AlignEnd=41471
5	lors	lors	ADV	_	_	14	advmod	_	AlignBegin=41471|AlignEnd=41651
6	de	de	ADP	_	_	9	case	_	AlignBegin=41651|AlignEnd=41761
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	AlignBegin=41651|AlignEnd=41761
8	traditionnel	traditionnel	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	AlignBegin=41761|AlignEnd=42461|Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison
9	défilé	défilé	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	AlignBegin=42461|AlignEnd=43145|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
10	,	,	PUNCT	_	_	5	punct	_	AlignBegin=43145|AlignEnd=43845
11	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	expl:subj	_	AlignBegin=43845|AlignEnd=43960|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
12	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	AlignBegin=43960|AlignEnd=44023
13	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	AlignBegin=44023|AlignEnd=44137|HasSpokenGender=OnlySingExceptWithLiaison
14	nation	nation	NOUN	_	Gender=Fem|Number=Sing	0	root	_	AlignBegin=44137|AlignEnd=44570|Exponence[Gender]=Inherent|Exponence[Number]=Absent
15	tout	tout	ADV	_	_	16	advmod	_	AlignBegin=44570|AlignEnd=44775
16	entière	entier	ADJ	_	Gender=Fem|Number=Sing	14	amod	_	AlignBegin=44775|AlignEnd=45343|Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison
17	qui	qui	PRON	_	PronType=Rel	19	nsubj	_	AlignBegin=46130|AlignEnd=46228
18	vous	vous	PRON	_	Case=Dat|Emph=No|Number=Plur|Person=2|PronType=Prs	19	iobj	_	AlignBegin=46228|AlignEnd=46383|Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown
19	rend	rendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	advcl:cleft	_	AlignBegin=46383|AlignEnd=46545|Exponence[Person]=Absent|Filler=subj
20	hommage	hommage	NOUN	_	Gender=Masc|Number=Sing	19	obj:lvc	_	AlignBegin=46545|AlignEnd=46992|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No
21	.	.	PUNCT	_	_	14	punct	_	AlignBegin=46992|AlignEnd=46992

~~~


