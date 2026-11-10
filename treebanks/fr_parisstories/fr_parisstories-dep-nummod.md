---
layout: base
title:  'Statistics of nummod in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `nummod`

This relation is universal.

142 nodes (0%) are attached to their parents as `nummod`.

142 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16197183098592.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt> (140; 99% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	et	et	CCONJ	_	_	5	cc	_	_
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	soixante-quinze	soixante-quinze	NUM	_	Number=Plur	5	nummod	_	Exponence[Number]=Inherent
5	grammes	gramme	NOUN	_	Gender=Masc|Number=Plur	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
6	de	de	ADP	_	_	7	case	_	_
7	beurre	beurre	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
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


