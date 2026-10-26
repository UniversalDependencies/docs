---
layout: base
title:  'Statistics of root in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `root`

This relation is universal.

2776 nodes (6%) are attached to their parents as `root`.

2776 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.5421469740634.

The following 14 pairs of parts of speech are connected with `root`: -<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1869; 67% instances), -<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (307; 11% instances), -<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (241; 9% instances), -<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (90; 3% instances), -<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (86; 3% instances), -<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (85; 3% instances), -<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (37; 1% instances), -<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (30; 1% instances), -<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (11; 0% instances), -<tt><a href="fr_parisstories-pos-X.html">X</a></tt> (9; 0% instances), -<tt><a href="fr_parisstories-pos-CCONJ.html">CCONJ</a></tt> (6; 0% instances), -<tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt> (2; 0% instances), -<tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), -<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	donc	donc	ADV	_	_	4	advmod	_	_
2	comment	comment	ADV	_	_	4	advmod	_	_
3	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
4	fais	faire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent
5	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	6	det	_	HasSpokenGender=OnlySingExceptWithLiaison
6	gougères	gougère	NOUN	_	Gender=Fem|Number=Plur	4	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
7	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 9 root	color:blue
1	parce	parce	ADV	_	ExtPos=SCONJ	9	mark	_	Idiom=Yes
2	que	que	SCONJ	_	_	1	fixed	_	InIdiom=Yes
3	euh	euh	INTJ	_	_	9	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
6	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	pas	pas	ADV	_	Polarity=Neg	9	advmod	_	_
8	très	très	ADV	_	_	9	advmod	_	_
9	douée	doué	ADJ	_	Gender=Fem|Number=Sing	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=NotInThisDialect|HasSpokenNumber=OnlyWithLiaison
10	en	en	ADP	_	_	11	case	_	_
11	philosophie	philosophie	NOUN	_	Gender=Fem|Number=Sing	9	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
12	à	à	ADP	_	_	14	case	_	_
13	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	HasSpokenGender=OnlySingExceptWithLiaison
14	base	base	NOUN	_	Gender=Fem|Number=Sing	9	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
15	.	.	PUNCT	_	_	9	punct	_	_

~~~


