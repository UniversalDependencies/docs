---
layout: base
title:  'Statistics of expl:subj in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `expl:subj`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `expl`: <tt><a href="fr_rhapsodie-dep-expl-comp.html">expl:comp</a></tt>, <tt><a href="fr_rhapsodie-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="fr_rhapsodie-dep-expl-pv.html">expl:pv</a></tt>.

425 nodes (1%) are attached to their parents as `expl:subj`.

409 instances of `expl:subj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.34823529411765.

The following 7 pairs of parts of speech are connected with `expl:subj`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (319; 75% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (38; 9% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (37; 9% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (23; 5% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:subj	color:blue
1	vraiment	vraiment	ADV	_	_	11	advmod	_	SpaceAfter=No|WordAlignmentBegin=239381|WordAlignmentEnd=239576
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=239576|WordAlignmentEnd=239576
3	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=239576|WordAlignmentEnd=239656
4	psychiatrie	psychiatrie	NOUN	_	Gender=Fem|Number=Sing	11	dislocated:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=239656|WordAlignmentEnd=239997
5	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=239997|WordAlignmentEnd=239997
6	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	expl:subj	_	Exponence[Person]=Inherent|WordAlignmentBegin=239997|WordAlignmentEnd=240043
7	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	reparandum	_	Exponence[Person]=Absent|WordAlignmentBegin=240043|WordAlignmentEnd=240161
8	ê~	ê~	X	_	ExtPos=VERB	7	ccomp	_	Scrap=Yes|SpaceAfter=No|WordAlignmentBegin=240161|WordAlignmentEnd=240253
9	,	,	PUNCT	_	_	7	punct	_	WordAlignmentBegin=240253|WordAlignmentEnd=240253
10	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	expl:subj	_	Exponence[Person]=Inherent|WordAlignmentBegin=240253|WordAlignmentEnd=240367
11	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=240367|WordAlignmentEnd=240551
12	être	être	AUX	_	VerbForm=Inf	11	ccomp	_	Scrap=Yes|SpaceAfter=No|Subject=NoRaising|WordAlignmentBegin=240551|WordAlignmentEnd=241190
13	…	…	PUNCT	_	_	11	punct	_	WordAlignmentBegin=241190|WordAlignmentEnd=241190

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 expl:subj	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 expl:subj	color:blue
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


