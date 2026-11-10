---
layout: base
title:  'Statistics of acl in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_rhapsodie-dep-acl-relcl.html">acl:relcl</a></tt>.

178 nodes (0%) are attached to their parents as `acl`.

177 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.24157303370787.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (165; 93% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	trois	trois	NUM	_	Number=Plur	2	nummod	_	Exponence[Number]=Inherent|WordAlignmentBegin=18727|WordAlignmentEnd=19111
2	policiers	policier	NOUN	_	Gender=Masc|Number=Plur	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=19111|WordAlignmentEnd=19661
3	blessés	blesser	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	acl	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|SpaceAfter=No|Status[Tense]=Denom|WordAlignmentBegin=19661|WordAlignmentEnd=20296
4	.	.	PUNCT	_	_	2	punct	_	WordAlignmentBegin=20296|WordAlignmentEnd=20296

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 acl	color:blue
1	oui	oui	INTJ	_	_	6	discourse	_	SpaceAfter=No|WordAlignmentBegin=265975|WordAlignmentEnd=266070
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=266070|WordAlignmentEnd=266070
3	mais	mais	CCONJ	_	_	6	cc	_	WordAlignmentBegin=266070|WordAlignmentEnd=266230
4	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=266230|WordAlignmentEnd=266330
5	le	lui	PRON	_	Case=Acc|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obj	_	Exponence[Person]=Inherent|WordAlignmentBegin=266330|WordAlignmentEnd=266430
6	déguise	déguiser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=266430|WordAlignmentEnd=266790
7	pas	pas	ADV	_	Polarity=Neg	6	advmod	_	WordAlignmentBegin=266790|WordAlignmentEnd=266932
8	de	de	ADP	_	_	10	case	_	WordAlignmentBegin=266932|WordAlignmentEnd=267075
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	fait	fait	NOUN	_	Gender=Masc|Number=Sing	6	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=267075|WordAlignmentEnd=267280
11	que	que	SCONJ	_	_	15	mark	_	WordAlignmentBegin=267280|WordAlignmentEnd=267420
12	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	15	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=267420|WordAlignmentEnd=267540
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	WordAlignmentBegin=267540|WordAlignmentEnd=267700
14	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	15	det	_	WordAlignmentBegin=267700|WordAlignmentEnd=268020
15	fauteuil	fauteuil	NOUN	_	Gender=Masc|Number=Sing	10	acl	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=268020|WordAlignmentEnd=268400
16	qui	qui	PRON	_	PronType=Rel	17	nsubj	_	WordAlignmentBegin=268400|WordAlignmentEnd=268470
17	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	acl:relcl	_	WordAlignmentBegin=268470|WordAlignmentEnd=268500
18	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	19	det	_	LiaisonAfter=Yes|WordAlignmentBegin=268500|WordAlignmentEnd=268622
19	époque	époque	NOUN	_	Gender=Fem|Number=Sing	17	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No|WordAlignmentBegin=268622|WordAlignmentEnd=268939
20	.	.	PUNCT	_	_	6	punct	_	WordAlignmentBegin=268939|WordAlignmentEnd=268939

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	ils	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	Exponence[Person]=Inherent|WordAlignmentBegin=166180|WordAlignmentEnd=166285
2	avaient	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	Exponence[Number]=Absent|WordAlignmentBegin=166285|WordAlignmentEnd=166445
3	peur	peur	NOUN	_	Gender=Fem|Number=Sing	2	obj:lvc	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=166445|WordAlignmentEnd=166575
4	d'	de	ADP	_	_	5	mark	_	SpaceAfter=No|WordAlignmentBegin=166575|WordAlignmentEnd=166605
5	être	être	AUX	_	VerbForm=Inf	3	acl	_	Scrap=Yes|SpaceAfter=No|Subject=SubjRaising|WordAlignmentBegin=166605|WordAlignmentEnd=166755
6	…	…	PUNCT	_	_	2	punct	_	WordAlignmentBegin=166755|WordAlignmentEnd=166755

~~~


