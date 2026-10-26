---
layout: base
title:  'Statistics of acl in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_rhapsodie-dep-acl-relcl.html">acl:relcl</a></tt>.

175 nodes (0%) are attached to their parents as `acl`.

174 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.34285714285714.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (162; 93% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	trois	trois	NUM	_	Number=Plur	2	nummod	_	AlignBegin=18727|AlignEnd=19111|Exponence[Number]=Inherent
2	policiers	policier	NOUN	_	Gender=Masc|Number=Plur	0	root	_	AlignBegin=19111|AlignEnd=19661|Exponence[Gender]=Inherent|Exponence[Number]=Absent
3	blessés	blesser	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	2	acl	_	AlignBegin=19661|AlignEnd=20296|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|SpaceAfter=No|Tense[denom]=Past
4	.	.	PUNCT	_	_	2	punct	_	AlignBegin=20296|AlignEnd=20296

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 acl	color:blue
1	oui	oui	INTJ	_	_	6	discourse	_	AlignBegin=265975|AlignEnd=266070|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=266070|AlignEnd=266070
3	mais	mais	CCONJ	_	_	6	cc	_	AlignBegin=266070|AlignEnd=266230
4	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	AlignBegin=266230|AlignEnd=266330|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
5	le	lui	PRON	_	Case=Acc|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obj	_	AlignBegin=266330|AlignEnd=266430|Exponence[Person]=Inherent
6	déguise	déguiser	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	AlignBegin=266430|AlignEnd=266790|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
7	pas	pas	ADV	_	Polarity=Neg	6	advmod	_	AlignBegin=266790|AlignEnd=266932
8	de	de	ADP	_	_	10	case	_	AlignBegin=266932|AlignEnd=267075
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	AlignBegin=266932|AlignEnd=267075
10	fait	fait	NOUN	_	Gender=Masc|Number=Sing	6	obl:mod	_	AlignBegin=267075|AlignEnd=267280|Exponence[Gender]=Inherent|Exponence[Number]=Absent
11	que	que	SCONJ	_	_	15	mark	_	AlignBegin=267280|AlignEnd=267420
12	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	15	nsubj	_	AlignBegin=267420|AlignEnd=267540|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	AlignBegin=267540|AlignEnd=267700
14	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	15	det	_	AlignBegin=267700|AlignEnd=268020
15	fauteuil	fauteuil	NOUN	_	Gender=Masc|Number=Sing	10	acl	_	AlignBegin=268020|AlignEnd=268400|Exponence[Gender]=Inherent|Exponence[Number]=Absent
16	qui	qui	PRON	_	PronType=Rel	17	nsubj	_	AlignBegin=268400|AlignEnd=268470
17	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	acl:relcl	_	AlignBegin=268470|AlignEnd=268500
18	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	19	det	_	AlignBegin=268500|AlignEnd=268622|LiaisonAfter=Yes
19	époque	époque	NOUN	_	Gender=Fem|Number=Sing	17	obj	_	AlignBegin=268622|AlignEnd=268939|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No
20	.	.	PUNCT	_	_	6	punct	_	AlignBegin=268939|AlignEnd=268939

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	ils	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	AlignBegin=166180|AlignEnd=166285|Exponence[Person]=Inherent
2	avaient	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	AlignBegin=166285|AlignEnd=166445|Exponence[Number]=Absent
3	peur	peur	NOUN	_	Gender=Fem|Number=Sing	2	obj:lvc	_	AlignBegin=166445|AlignEnd=166575|Exponence[Gender]=Inherent|Exponence[Number]=Absent
4	d'	de	ADP	_	_	5	mark	_	AlignBegin=166575|AlignEnd=166605|SpaceAfter=No
5	être	être	AUX	_	VerbForm=Inf	3	acl	_	AlignBegin=166605|AlignEnd=166755|Scrap=Yes|SpaceAfter=No|Subject=SubjRaising
6	…	…	PUNCT	_	_	2	punct	_	AlignBegin=166755|AlignEnd=166755

~~~


