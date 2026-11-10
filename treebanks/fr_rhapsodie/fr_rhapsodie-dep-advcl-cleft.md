---
layout: base
title:  'Statistics of advcl:cleft in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `advcl:cleft`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-advcl.html">advcl</a></tt>.

78 nodes (0%) are attached to their parents as `advcl:cleft`.

78 instances of `advcl:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.35897435897436.

The following 11 pairs of parts of speech are connected with `advcl:cleft`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (33; 42% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (28; 36% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (4; 5% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 advcl:cleft	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=189136|WordAlignmentEnd=189216
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	reparandum	_	SpaceAfter=No|WordAlignmentBegin=189216|WordAlignmentEnd=189326
3	,	,	PUNCT	_	_	2	punct	_	WordAlignmentBegin=189246|WordAlignmentEnd=189326
4	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=189326|WordAlignmentEnd=189436
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	reparandum	_	SpaceAfter=No|WordAlignmentBegin=189436|WordAlignmentEnd=189516
6	,	,	PUNCT	_	_	5	punct	_	WordAlignmentBegin=189516|WordAlignmentEnd=189516
7	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=189516|WordAlignmentEnd=189626
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	WordAlignmentBegin=189626|WordAlignmentEnd=189666
9	surtout	surtout	ADV	_	_	11	advmod	_	WordAlignmentBegin=189666|WordAlignmentEnd=189916
10	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	Exponence[Gender]=Absent|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|SpaceAfter=No|WordAlignmentBegin=189916|WordAlignmentEnd=189946
11	hôpital	hôpital	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Inherent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=189946|WordAlignmentEnd=190226
12	public	public	ADJ	_	Gender=Masc|Number=Sing	11	amod	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=190226|WordAlignmentEnd=190486
13	qui	qui	PRON	_	PronType=Rel	15	nsubj	_	WordAlignmentBegin=190486|WordAlignmentEnd=190546
14	m'	moi	PRON	_	Case=Acc|Emph=No|Number=Sing|Person=1|PronType=Prs	15	obj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=190546|WordAlignmentEnd=190576
15	attire	attirer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	advcl:cleft	_	Exponence[Number]=Absent|Exponence[Person]=Absent|Filler=subj|SpaceAfter=No|WordAlignmentBegin=190576|WordAlignmentEnd=190704
16	.	.	PUNCT	_	_	11	punct	_	WordAlignmentBegin=190704|WordAlignmentEnd=190704

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 advcl:cleft	color:blue
1	ben	ben	INTJ	_	_	5	discourse	_	SpaceAfter=No|WordAlignmentBegin=85835|WordAlignmentEnd=85925
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=85925|WordAlignmentEnd=85925
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=85925|WordAlignmentEnd=86025
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	WordAlignmentBegin=86025|WordAlignmentEnd=86055
5	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	0	root	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=86055|WordAlignmentEnd=86165
6	qui	qui	PRON	_	PronType=Rel	9	nsubj	_	WordAlignmentBegin=86165|WordAlignmentEnd=86295
7	les	lui	PRON	_	Case=Acc|Emph=No|Number=Plur|Person=3|PronType=Prs	9	obj	_	Exponence[Person]=Inherent|WordAlignmentBegin=86295|WordAlignmentEnd=86395
8	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	aux:tense	_	Filler=subj|WordAlignmentBegin=86395|WordAlignmentEnd=86445
9	payés	payer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	5	advcl:cleft	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|SpaceAfter=No|Status[Tense]=Denom|WordAlignmentBegin=86445|WordAlignmentEnd=86946
10	.	.	PUNCT	_	_	5	punct	_	WordAlignmentBegin=86946|WordAlignmentEnd=86946

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 advcl:cleft	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=148429|WordAlignmentEnd=148529
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	WordAlignmentBegin=148529|WordAlignmentEnd=148589
3	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=148589|WordAlignmentEnd=148809
4	qui	qui	PRON	_	PronType=Rel	6	nsubj	_	WordAlignmentBegin=148809|WordAlignmentEnd=148889
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	Filler=subj|WordAlignmentBegin=148889|WordAlignmentEnd=149009
6	terrible	terrible	ADJ	_	Gender=Masc|Number=Sing	3	advcl:cleft	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No|WordAlignmentBegin=149009|WordAlignmentEnd=149355
7	.	.	PUNCT	_	_	3	punct	_	WordAlignmentBegin=149355|WordAlignmentEnd=149355

~~~


