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
1	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	AlignBegin=219969|AlignEnd=220064|HasSpokenGender=OnlySingExceptWithLiaison
2	problème	problème	NOUN	_	Gender=Masc|Number=Sing	14	dislocated:subj	_	AlignBegin=220064|AlignEnd=220414|Exponence[Gender]=Inherent|Exponence[Number]=Absent
3	de	de	ADP	_	_	5	case	_	AlignBegin=220414|AlignEnd=220494
4	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	AlignBegin=220494|AlignEnd=220534|Exponence[Gender]=Absent|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|SpaceAfter=No
5	informatique	informatique	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	AlignBegin=220534|AlignEnd=221054|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No
6	,	,	PUNCT	_	_	2	punct	_	AlignBegin=221054|AlignEnd=221054
7	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj:outer	_	AlignBegin=221054|AlignEnd=221114|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	AlignBegin=221114|AlignEnd=221184
9	que	que	SCONJ	_	_	14	mark	_	AlignBegin=221184|AlignEnd=221214
10	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	nsubj	_	AlignBegin=221214|AlignEnd=221364|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
11	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	reparandum	_	AlignBegin=221364|AlignEnd=221504|SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	_	AlignBegin=221504|AlignEnd=221504
13	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	AlignBegin=221504|AlignEnd=221674|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
14	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=221674|AlignEnd=221804
15	trop	trop	ADV	_	_	16	advmod	_	AlignBegin=221804|AlignEnd=221954
16	vite	vite	ADV	_	_	14	obj	_	AlignBegin=221954|AlignEnd=222153|SpaceAfter=No
17	.	.	PUNCT	_	_	14	punct	_	AlignBegin=222153|AlignEnd=222153

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 nsubj:outer	color:blue
1	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	dislocated:subj	_	AlignBegin=445769|AlignEnd=445829|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
2	que	que	PRON	_	PronType=Rel	5	obj	_	AlignBegin=445829|AlignEnd=445909
3	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	AlignBegin=445909|AlignEnd=445949|Exponence[Number]=Inherent|Exponence[Person]=Inherent
4	veux	vouloir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	AlignBegin=445949|AlignEnd=446049|Exponence[Person]=Absent
5	dire	dire	VERB	_	VerbForm=Inf	4	xcomp	_	AlignBegin=446049|AlignEnd=446199|SpaceAfter=No|Subject=SubjRaising
6	,	,	PUNCT	_	_	1	punct	_	AlignBegin=446199|AlignEnd=446199
7	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	nsubj:outer	_	AlignBegin=446199|AlignEnd=446289|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	AlignBegin=446289|AlignEnd=446369
9	que	que	SCONJ	_	_	12	mark	_	AlignBegin=446369|AlignEnd=446529
10	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	nsubj	_	AlignBegin=446529|AlignEnd=446629|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	AlignBegin=446629|AlignEnd=446679
12	cumulatif	cumulatif	ADJ	_	Gender=Masc|Number=Sing	0	root	_	AlignBegin=446679|AlignEnd=447225|Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	_	AlignBegin=447310|AlignEnd=447310

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 nsubj:outer	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj:outer	_	AlignBegin=87364|AlignEnd=87464|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	AlignBegin=87464|AlignEnd=87534
3	parce	parce	ADV	_	ExtPos=SCONJ	8	mark	_	AlignBegin=87723|AlignEnd=87924|Idiom=Yes
4	qu'	que	SCONJ	_	_	3	fixed	_	AlignBegin=87924|AlignEnd=88044|InIdiom=Yes|SpaceAfter=No
5	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	AlignBegin=87924|AlignEnd=88044|Exponence[Person]=Inherent
6	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux:tense	_	AlignBegin=88044|AlignEnd=88294
7	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	cop	_	AlignBegin=88294|AlignEnd=88483|Tense[denom]=Past
8	pilote	pilote	NOUN	_	Gender=Masc|Number=Sing	0	root	_	AlignBegin=88483|AlignEnd=88824|Exponence[Gender]=Inherent|Exponence[Number]=Absent
9	d'	de	ADP	_	_	10	case	_	AlignBegin=88824|AlignEnd=88874|SpaceAfter=No
10	essai	essai	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	AlignBegin=88874|AlignEnd=89269|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes
11	XXX	XXX	X	_	_	8	dep	_	AlignBegin=89269|AlignEnd=90123|Scrap=Yes
12	dès	dès	ADP	_	_	13	case	_	AlignBegin=90123|AlignEnd=90288
13	dix-sept	dix-sept	NUM	_	Number=Plur	8	nmod	_	AlignBegin=90288|AlignEnd=90898|Exponence[Number]=Inherent
14	dix-huit	dix-huit	NUM	_	Number=Plur	13	conj	_	AlignBegin=90898|AlignEnd=91363|Exponence[Number]=Inherent|SpaceAfter=No
15	.	.	PUNCT	_	_	8	punct	_	AlignBegin=91363|AlignEnd=91363

~~~


