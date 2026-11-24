---
layout: base
title:  'Statistics of det in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `det`

This relation is universal.

3206 nodes (7%) are attached to their parents as `det`.

3206 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11135371179039.

The following 10 pairs of parts of speech are connected with `det`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (3002; 94% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (95; 3% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (23; 1% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (19; 1% instances), <tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (18; 1% instances), <tt><a href="fr_parisstories-pos-X.html">X</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (17; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (16; 0% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (14; 0% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	donc	donc	ADV	_	_	4	advmod	_	_
2	comment	comment	ADV	_	_	4	advmod	_	_
3	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
4	fais	faire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent
5	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	6	det	_	HasSpokenGender=OnlySingExceptWithLiaison
6	gougères	gougère	NOUN	_	Gender=Fem|Number=Plur	4	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
7	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	mais	mais	CCONJ	_	_	4	cc	_	_
2	souvent	souvent	ADV	_	_	4	advmod	_	_
3	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
4	trouve	trouver	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent
5	que	que	ADV	_	Polarity=Neg	7	advmod	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	HasSpokenGender=OnlySingExceptWithLiaison
7	Neufchâtel	Neufchâtel	PROPN	_	_	4	obj	_	SpaceAfter=No
8	…	…	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 det	color:blue
1	de	de	ADP	_	_	3	case	_	WordAlignmentBegin=15302|WordAlignmentEnd=15662
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	coup	coup	NOUN	_	Gender=Masc|Number=Sing	9	discourse	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=15662|WordAlignmentEnd=16022
4	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=16022|WordAlignmentEnd=16022
5	ben	ben	INTJ	_	_	9	discourse	_	SpaceAfter=No|WordAlignmentBegin=16022|WordAlignmentEnd=16383
6	,	,	PUNCT	_	_	5	punct	_	WordAlignmentBegin=16383|WordAlignmentEnd=16383
7	XXX	XXX	X	_	ExtPos=PROPN	9	dep	_	Scrap=Yes|SpaceAfter=No|WordAlignmentBegin=16383|WordAlignmentEnd=16743
8	,	,	PUNCT	_	_	9	punct	_	WordAlignmentBegin=16743|WordAlignmentEnd=16743
9	truc	truc	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=16743|WordAlignmentEnd=17103
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=17103|WordAlignmentEnd=17463
11	plus	plus	ADV	_	_	12	advmod	_	WordAlignmentBegin=17463|WordAlignmentEnd=17823
12	ridicule	ridicule	ADJ	_	Gender=Masc|Number=Sing	9	nmod	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=17823|WordAlignmentEnd=18184
13	à	à	ADP	_	_	15	case	_	WordAlignmentBegin=18184|WordAlignmentEnd=18544
14	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	monde	monde	NOUN	_	Gender=Masc|Number=Sing	12	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=18544|WordAlignmentEnd=18904
16	!	!	PUNCT	_	_	9	punct	_	WordAlignmentBegin=18904|WordAlignmentEnd=18904

~~~


