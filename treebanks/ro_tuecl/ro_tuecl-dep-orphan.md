---
layout: base
title:  'Statistics of orphan in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `orphan`

This relation is universal.

10 nodes (0%) are attached to their parents as `orphan`.

10 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.9.

The following 2 pairs of parts of speech are connected with `orphan`: <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (9; 90% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 orphan	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	4	vocative:mention	_	_
2	Banii	ban	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	4	nsubj	_	_
3	se	sine	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pv	_	_
4	bagă	băga	VERB	_	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	la	la	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
6	aparate	aparat	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	4	obl	_	_
7	și	și	CCONJ	_	Polarity=Pos	8	cc	_	_
8	femeia	femeie	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	6	conj	_	_
9	la	la	ADP	_	AdpType=Prep|Case=Acc	10	case	_	_
10	produs	produs	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	8	orphan	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 orphan	color:blue
1	Părul	păr	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
2	trebuie	trebui	VERB	_	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	pieptănat	pieptănat	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	2	csubj	_	_
4	și	și	CCONJ	_	Polarity=Pos	5	cc	_	_
5	bărbatul	bărbat	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	3	conj	_	_
6	terorizat	terorizat	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	5	orphan	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


