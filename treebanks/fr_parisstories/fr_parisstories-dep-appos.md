---
layout: base
title:  'Statistics of appos in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `appos`

This relation is universal.

87 nodes (0%) are attached to their parents as `appos`.

87 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.59770114942529.

The following 20 pairs of parts of speech are connected with `appos`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (30; 34% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (13; 15% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (11; 13% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (6; 7% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (4; 5% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	traumatisme	traumatisme	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	soirée	soirée	NOUN	_	Gender=Fem|Number=Sing	2	appos	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 appos	color:blue
1	et	et	CCONJ	_	_	13	cc	_	_
2	euh	euh	INTJ	_	_	13	discourse:filler	_	SpaceAfter=No
3	,	,	PUNCT	_	_	13	punct	_	_
4	même	même	ADV	_	_	7	advmod	_	_
5	ma	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	7	det	_	HasSpokenGender=OnlySingExceptWithLiaison
6	meilleure	meilleur	ADJ	_	Gender=Fem|Number=Sing	7	amod	_	HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|LiaisonAfter=Yes
7	amie	ami	NOUN	_	Gender=Fem|Number=Sing	13	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	donc	donc	ADV	_	_	10	advmod	_	_
10	Manon	Manon	PROPN	_	_	7	appos	_	SpaceAfter=No
11	,	,	PUNCT	_	_	7	punct	_	_
12	me	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	13	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
13	dit	dire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent
14	même	même	ADV	_	_	13	advmod	_	SpaceAfter=No
15	,	,	PUNCT	_	_	16	punct	_	_
16	euh	euh	INTJ	_	_	13	discourse:filler	_	_
17	:	:	PUNCT	_	_	20	punct	_	_
18	tout	tout	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	20	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
19	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	20	expl:pv	_	Exponence[Person]=Inherent
20	passe	passer	VERB	_	ExtPos=VERB|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	ccomp	_	Exponence[Number]=Absent|Exponence[Person]=Absent|Reported=Yes
21	bien	bien	ADV	_	_	20	advmod	_	SpaceAfter=No
22	.	.	PUNCT	_	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 appos	color:blue
1	et	et	CCONJ	_	ExtPos=CCONJ	5	cc	_	Idiom=Yes|WordAlignmentBegin=3376|WordAlignmentEnd=3530
2	puis	puis	CCONJ	_	_	1	fixed	_	InIdiom=Yes|SpaceAfter=No|WordAlignmentBegin=3530|WordAlignmentEnd=3724
3	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=3724|WordAlignmentEnd=3724
4	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=3724|WordAlignmentEnd=3918
5	voulais	vouloir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=3918|WordAlignmentEnd=4112
6	jouer	jouer	VERB	_	VerbForm=Inf	5	xcomp	_	SpaceAfter=No|Subject=SubjRaising|WordAlignmentBegin=4112|WordAlignmentEnd=4306
7	,	,	PUNCT	_	_	8	punct	_	WordAlignmentBegin=4306|WordAlignmentEnd=4306
8	faire	faire	VERB	_	VerbForm=Inf	6	appos	_	Subject=SubjRaising|WordAlignmentBegin=4306|WordAlignmentEnd=4498
9	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	WordAlignmentBegin=4498|WordAlignmentEnd=4689
10	truc	truc	NOUN	_	Gender=Masc|Number=Sing	8	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=4689|WordAlignmentEnd=4881
11	.	.	PUNCT	_	_	5	punct	_	WordAlignmentBegin=4881|WordAlignmentEnd=4881

~~~


