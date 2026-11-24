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
1	merci	merci	INTJ	_	_	0	root	_	Overlap=Rhap_D2011-118|WordAlignmentBegin=307273|WordAlignmentEnd=308382
2	à	à	ADP	_	_	3	case	_	Overlap=Rhap_D2011-118|WordAlignmentBegin=307273|WordAlignmentEnd=308382
3	vous	vous	PRON	_	Case=Acc|Emph=No|Number=Plur|Person=2|PronType=Prs	1	obl	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|Overlap=Rhap_D2011-118|Polite=Unknown|SpaceAfter=No|WordAlignmentBegin=307273|WordAlignmentEnd=308382
4	.	.	PUNCT	_	_	1	punct	_	Overlap=Rhap_D2011-99|WordAlignmentBegin=308382|WordAlignmentEnd=308382

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl	color:blue
1	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=40122|WordAlignmentEnd=40202
2	quatorze	quatorze	NUM	_	ExtPos=PROPN	14	obl:mod	_	WordAlignmentBegin=40202|WordAlignmentEnd=40624
3	juillet	juillet	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=40624|WordAlignmentEnd=41285
4	,	,	PUNCT	_	_	2	punct	_	WordAlignmentBegin=41285|WordAlignmentEnd=41471
5	lors	lors	ADV	_	_	14	advmod	_	WordAlignmentBegin=41471|WordAlignmentEnd=41651
6	de	de	ADP	_	_	9	case	_	WordAlignmentBegin=41651|WordAlignmentEnd=41761
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	traditionnel	traditionnel	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=41761|WordAlignmentEnd=42461
9	défilé	défilé	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=42461|WordAlignmentEnd=43145
10	,	,	PUNCT	_	_	5	punct	_	WordAlignmentBegin=43145|WordAlignmentEnd=43845
11	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=43845|WordAlignmentEnd=43960
12	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	WordAlignmentBegin=43960|WordAlignmentEnd=44023
13	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=44023|WordAlignmentEnd=44137
14	nation	nation	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=44137|WordAlignmentEnd=44570
15	tout	tout	ADV	_	_	16	advmod	_	WordAlignmentBegin=44570|WordAlignmentEnd=44775
16	entière	entier	ADJ	_	Gender=Fem|Number=Sing	14	amod	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=44775|WordAlignmentEnd=45343
17	qui	qui	PRON	_	PronType=Rel	19	nsubj	_	WordAlignmentBegin=46130|WordAlignmentEnd=46228
18	vous	vous	PRON	_	Case=Dat|Emph=No|Number=Plur|Person=2|PronType=Prs	19	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown|WordAlignmentBegin=46228|WordAlignmentEnd=46383
19	rend	rendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	advcl:cleft	_	Exponence[Person]=Absent|Filler=subj|WordAlignmentBegin=46383|WordAlignmentEnd=46545
20	hommage	hommage	NOUN	_	Gender=Masc|Number=Sing	19	obj:lvc	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No|WordAlignmentBegin=46545|WordAlignmentEnd=46992
21	.	.	PUNCT	_	_	14	punct	_	WordAlignmentBegin=46992|WordAlignmentEnd=46992

~~~


