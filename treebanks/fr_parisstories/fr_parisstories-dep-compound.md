---
layout: base
title:  'Statistics of compound in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `compound`

This relation is universal.

14 nodes (0%) are attached to their parents as `compound`.

14 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07142857142857.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (5; 36% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (3; 21% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (2; 14% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (2; 14% instances), <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	dans	dans	ADP	_	_	3	case	_	WordAlignmentBegin=84155|WordAlignmentEnd=84447
2	ses	son	DET	_	Number=Plur|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	3	det	_	HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|WordAlignmentBegin=84447|WordAlignmentEnd=84739
3	albums	album	NOUN	_	Gender=Masc|Number=Plur	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=84739|WordAlignmentEnd=85032
4	photos	photo	NOUN	_	Gender=Fem|Number=Plur	3	compound	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=85032|WordAlignmentEnd=85324
5	.	.	PUNCT	_	_	3	punct	_	WordAlignmentBegin=84250|WordAlignmentEnd=84250

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound	color:blue
1	euh	euh	INTJ	_	_	8	discourse:filler	_	_
2	donc	donc	ADV	_	_	8	cc	_	_
3	voilà	voilà	VERB	_	ExtPos=INTJ	8	discourse	_	_
4	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
5	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
6	dans	dans	ADP	_	_	8	case	_	_
7	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	8	det	_	HasSpokenGender=OnlySingExceptWithLiaison
8	Charentes	Charentes	PROPN	_	_	0	root	_	_
9	Maritimes	Maritimes	PROPN	_	_	8	compound	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 compound	color:blue
1	et	et	CCONJ	_	_	10	cc	_	_
2	donc	donc	ADV	_	_	10	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	HasSpokenGender=OnlySingExceptWithLiaison
5	deux	deux	NUM	_	_	6	nummod	_	_
6	premières	premier	ADJ	_	Gender=Fem|Number=Plur	7	amod	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison
7	semaines	semaine	NOUN	_	Gender=Fem|Number=Plur	10	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
10	commence	commencer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent
11	à	à	ADP	_	_	12	mark	_	_
12	aller	aller	VERB	_	VerbForm=Inf	10	xcomp	_	Subject=SubjRaising
13	à	à	ADP	_	_	15	case	_	_
14	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	HasSpokenGender=OnlySingExceptWithLiaison
15	salle	salle	NOUN	_	Gender=Fem|Number=Sing	12	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
16	de	de	ADP	_	_	15	compound	_	_
17	sport	sport	NOUN	_	Gender=Masc|Number=Sing	16	compound	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
18	,	,	PUNCT	_	_	22	punct	_	_
19	donc	donc	ADV	_	_	22	discourse	_	SpaceAfter=No
20	,	,	PUNCT	_	_	19	punct	_	_
21	à	à	ADP	_	_	22	mark	_	_
22	prendre	prendre	VERB	_	VerbForm=Inf	12	conj	_	Subject=SubjRaising
23	mes	son	DET	_	Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	24	det	_	HasSpokenGender=OnlySingExceptWithLiaison
24	marques	marque	NOUN	_	Gender=Fem|Number=Plur	22	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
25	etc	etc	ADV	_	_	24	conj	_	SpaceAfter=No|wordform=etcétéra
26	.	.	PUNCT	_	_	10	punct	_	_

~~~


