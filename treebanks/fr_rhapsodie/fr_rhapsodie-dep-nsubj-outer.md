---
layout: base
title:  'Statistics of nsubj:outer in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="fr_rhapsodie-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="fr_rhapsodie-dep-nsubj-pass.html">nsubj:pass</a></tt>.

14 nodes (0%) are attached to their parents as `nsubj:outer`.

14 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 17.9285714285714.

The following 4 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (9; 64% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (2; 14% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (2; 14% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 7 nsubj:outer	color:blue
1	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=219969|WordAlignmentEnd=220064
2	problème	problème	NOUN	_	Gender=Masc|Number=Sing	14	dislocated:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=220064|WordAlignmentEnd=220414
3	de	de	ADP	_	_	5	case	_	WordAlignmentBegin=220414|WordAlignmentEnd=220494
4	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	Exponence[Gender]=Absent|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|SpaceAfter=No|WordAlignmentBegin=220494|WordAlignmentEnd=220534
5	informatique	informatique	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No|WordAlignmentBegin=220534|WordAlignmentEnd=221054
6	,	,	PUNCT	_	_	2	punct	_	WordAlignmentBegin=221054|WordAlignmentEnd=221054
7	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj:outer	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=221054|WordAlignmentEnd=221114
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	WordAlignmentBegin=221114|WordAlignmentEnd=221184
9	que	que	SCONJ	_	_	14	mark	_	WordAlignmentBegin=221184|WordAlignmentEnd=221214
10	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=221214|WordAlignmentEnd=221364
11	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	reparandum	_	SpaceAfter=No|WordAlignmentBegin=221364|WordAlignmentEnd=221504
12	,	,	PUNCT	_	_	11	punct	_	WordAlignmentBegin=221504|WordAlignmentEnd=221504
13	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=221504|WordAlignmentEnd=221674
14	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	WordAlignmentBegin=221674|WordAlignmentEnd=221804
15	trop	trop	ADV	_	_	16	advmod	_	WordAlignmentBegin=221804|WordAlignmentEnd=221954
16	vite	vite	ADV	_	_	14	obj	_	SpaceAfter=No|WordAlignmentBegin=221954|WordAlignmentEnd=222153
17	.	.	PUNCT	_	_	14	punct	_	WordAlignmentBegin=222153|WordAlignmentEnd=222153

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 nsubj:outer	color:blue
1	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	dislocated:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=445769|WordAlignmentEnd=445829
2	que	que	PRON	_	PronType=Rel	5	obj	_	WordAlignmentBegin=445829|WordAlignmentEnd=445909
3	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=445909|WordAlignmentEnd=445949
4	veux	vouloir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	Exponence[Person]=Absent|WordAlignmentBegin=445949|WordAlignmentEnd=446049
5	dire	dire	VERB	_	VerbForm=Inf	4	xcomp	_	SpaceAfter=No|Subject=SubjRaising|WordAlignmentBegin=446049|WordAlignmentEnd=446199
6	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=446199|WordAlignmentEnd=446199
7	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	nsubj:outer	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=446199|WordAlignmentEnd=446289
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	WordAlignmentBegin=446289|WordAlignmentEnd=446369
9	que	que	SCONJ	_	_	12	mark	_	WordAlignmentBegin=446369|WordAlignmentEnd=446529
10	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=446529|WordAlignmentEnd=446629
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	WordAlignmentBegin=446629|WordAlignmentEnd=446679
12	cumulatif	cumulatif	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No|WordAlignmentBegin=446679|WordAlignmentEnd=447225
13	.	.	PUNCT	_	_	12	punct	_	WordAlignmentBegin=447310|WordAlignmentEnd=447310

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 nsubj:outer	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj:outer	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=87364|WordAlignmentEnd=87464
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	WordAlignmentBegin=87464|WordAlignmentEnd=87534
3	parce	parce	ADV	_	ExtPos=SCONJ	8	mark	_	Idiom=Yes|WordAlignmentBegin=87723|WordAlignmentEnd=87924
4	qu'	que	SCONJ	_	_	3	fixed	_	InIdiom=Yes|SpaceAfter=No|WordAlignmentBegin=87924|WordAlignmentEnd=88044
5	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	Exponence[Person]=Inherent|WordAlignmentBegin=87924|WordAlignmentEnd=88044
6	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux:tense	_	WordAlignmentBegin=88044|WordAlignmentEnd=88294
7	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	cop	_	Status[Tense]=Denom|WordAlignmentBegin=88294|WordAlignmentEnd=88483
8	pilote	pilote	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=88483|WordAlignmentEnd=88824
9	d'	de	ADP	_	_	10	case	_	SpaceAfter=No|WordAlignmentBegin=88824|WordAlignmentEnd=88874
10	essai	essai	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=88874|WordAlignmentEnd=89269
11	XXX	XXX	X	_	_	8	dep	_	Scrap=Yes|WordAlignmentBegin=89269|WordAlignmentEnd=90123
12	dès	dès	ADP	_	_	13	case	_	WordAlignmentBegin=90123|WordAlignmentEnd=90288
13	dix-sept	dix-sept	NUM	_	ExtPos=PRON|Number=Plur	8	nmod	_	Exponence[Number]=Inherent|WordAlignmentBegin=90288|WordAlignmentEnd=90898
14	dix-huit	dix-huit	NUM	_	ExtPos=PRON|Number=Plur	13	conj	_	Exponence[Number]=Inherent|SpaceAfter=No|WordAlignmentBegin=90898|WordAlignmentEnd=91363
15	.	.	PUNCT	_	_	8	punct	_	WordAlignmentBegin=91363|WordAlignmentEnd=91363

~~~


