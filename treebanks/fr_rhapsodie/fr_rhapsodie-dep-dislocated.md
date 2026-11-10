---
layout: base
title:  'Statistics of dislocated in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `dislocated`

This relation is universal.
There are 4 language-specific subtypes of `dislocated`: <tt><a href="fr_rhapsodie-dep-dislocated-mod.html">dislocated:mod</a></tt>, <tt><a href="fr_rhapsodie-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="fr_rhapsodie-dep-dislocated-obl.html">dislocated:obl</a></tt>, <tt><a href="fr_rhapsodie-dep-dislocated-subj.html">dislocated:subj</a></tt>.

4 nodes (0%) are attached to their parents as `dislocated`.

4 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.

The following 4 pairs of parts of speech are connected with `dislocated`: <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 4 dislocated	color:blue
1	mais	mais	CCONJ	_	_	14	cc	_	WordAlignmentBegin=5096|WordAlignmentEnd=5201
2	quand	quand	SCONJ	_	ExtPos=ADV	14	advmod	_	Idiom=Yes|WordAlignmentBegin=5201|WordAlignmentEnd=5381
3	même	même	ADV	_	_	2	fixed	_	InIdiom=Yes|WordAlignmentBegin=5381|WordAlignmentEnd=5551
4	celui-là	celui-là	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	dislocated	_	Exponence[Person]=Inherent|WordAlignmentBegin=5551|WordAlignmentEnd=5911
5	cent	cent	NUM	_	Number=Plur	7	nummod	_	Exponence[Number]=Inherent|WordAlignmentBegin=6384|WordAlignmentEnd=6709
6	mille	mille	NUM	_	Number=Plur	5	flat	_	Exponence[Number]=Inherent|WordAlignmentBegin=6709|WordAlignmentEnd=6899
7	exemplaires	exemplaire	NOUN	_	Gender=Masc|Number=Plur	14	dislocated:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=6899|WordAlignmentEnd=7599
8	en	en	ADP	_	_	10	case	_	WordAlignmentBegin=7599|WordAlignmentEnd=7689
9	quatre	quatre	NUM	_	Number=Plur	10	nummod	_	Exponence[Number]=Inherent|WordAlignmentBegin=7689|WordAlignmentEnd=7888
10	semaines	semaine	NOUN	_	Gender=Fem|Number=Plur	7	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=7888|WordAlignmentEnd=8339
11	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=8339|WordAlignmentEnd=8469
12	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	WordAlignmentBegin=8469|WordAlignmentEnd=8509
13	absolument	absolument	ADV	_	_	14	advmod	_	WordAlignmentBegin=8509|WordAlignmentEnd=8939
14	fabuleux	fabuleux	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyFemWithLiaison|SpaceAfter=No|WordAlignmentBegin=8939|WordAlignmentEnd=9484
15	.	.	PUNCT	_	_	14	punct	_	WordAlignmentBegin=9484|WordAlignmentEnd=9484

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 dislocated	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	dislocated	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=28933|WordAlignmentEnd=29153
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=29153|WordAlignmentEnd=29153
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=29153|WordAlignmentEnd=29333
4	livres	livre	NOUN	_	Gender=Masc|Number=Plur	1	appos	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=29333|WordAlignmentEnd=29545
5	politiques	politique	ADJ	_	Gender=Masc|Number=Plur	4	amod	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No|WordAlignmentBegin=29847|WordAlignmentEnd=30548
6	,	,	PUNCT	_	_	7	punct	_	WordAlignmentBegin=30548|WordAlignmentEnd=31178
7	enfin	enfin	ADV	_	_	5	discourse	_	SpaceAfter=No|WordAlignmentBegin=31178|WordAlignmentEnd=31393
8	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=31393|WordAlignmentEnd=31393
9	non	non	ADV	_	Polarity=Neg	0	root	_	SpaceAfter=No|WordAlignmentBegin=31393|WordAlignmentEnd=31513
10	.	.	PUNCT	_	_	9	punct	_	WordAlignmentBegin=31513|WordAlignmentEnd=31513

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 dislocated	color:blue
1	ensuite	ensuite	ADV	_	_	9	advmod	_	SpaceAfter=No|WordAlignmentBegin=148128|WordAlignmentEnd=148543
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=148543|WordAlignmentEnd=148543
3	nos	son	DET	_	Number=Plur|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	4	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=148543|WordAlignmentEnd=148673
4	chaussures	chaussure	NOUN	_	Gender=Fem|Number=Plur	9	dislocated	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=148673|WordAlignmentEnd=149113
5	qui	qui	PRON	_	PronType=Rel	6	nsubj	_	WordAlignmentBegin=149113|WordAlignmentEnd=149193
6	sont	être	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	WordAlignmentBegin=149193|WordAlignmentEnd=149403
7	ici	ici	ADV	_	_	6	obl:arg	_	SpaceAfter=No|WordAlignmentBegin=149403|WordAlignmentEnd=149770
8	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=149770|WordAlignmentEnd=150068
9	waouh	waouh	INTJ	_	_	0	root	_	SpaceAfter=No|WordAlignmentBegin=150068|WordAlignmentEnd=150870
10	.	.	PUNCT	_	_	9	punct	_	WordAlignmentBegin=150870|WordAlignmentEnd=150870

~~~


