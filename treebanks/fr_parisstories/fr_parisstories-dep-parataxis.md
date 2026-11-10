---
layout: base
title:  'Statistics of parataxis in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `parataxis`

This relation is universal.
There are 1 language-specific subtypes of `parataxis`: <tt><a href="fr_parisstories-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

29 nodes (0%) are attached to their parents as `parataxis`.

29 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.1379310344828.

The following 12 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (9; 31% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (4; 14% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (4; 14% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (3; 10% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 parataxis	color:blue
1	ouais	ouais	INTJ	_	_	6	discourse	_	SpaceAfter=No|WordAlignmentBegin=119290|WordAlignmentEnd=119608
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=119608|WordAlignmentEnd=119608
3	bah	bah	INTJ	_	_	6	discourse	_	SpaceAfter=No|WordAlignmentBegin=119608|WordAlignmentEnd=119925
4	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=119925|WordAlignmentEnd=119925
5	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=119925|WordAlignmentEnd=120243
6	pense	penser	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|SpaceAfter=No|WordAlignmentBegin=120243|WordAlignmentEnd=120561
7	,	,	PUNCT	_	_	9	punct	_	WordAlignmentBegin=120561|WordAlignmentEnd=120561
8	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	9	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=120561|WordAlignmentEnd=120878
9	as	avoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	parataxis	_	WordAlignmentBegin=120878|WordAlignmentEnd=121196
10	raison	raison	NOUN	_	Gender=Fem|Number=Sing	9	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=121196|WordAlignmentEnd=121513
11	,	,	PUNCT	_	_	12	punct	_	WordAlignmentBegin=121513|WordAlignmentEnd=121513
12	sûrement	sûrement	ADV	_	_	6	advmod	_	SpaceAfter=No|WordAlignmentBegin=121513|WordAlignmentEnd=121831
13	.	.	PUNCT	_	_	6	punct	_	WordAlignmentBegin=121831|WordAlignmentEnd=121831

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 parataxis	color:blue
1	honnêtement	honnêtement	ADV	_	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	euh	euh	INTJ	_	_	1	discourse:filler	_	SpaceAfter=No
4	,	,	PUNCT	_	_	1	punct	_	_
5	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	reparandum	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	pas	pas	ADV	_	Polarity=Neg	11	advmod	_	_
11	possible	possible	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
12	,	,	PUNCT	_	_	14	punct	_	_
13	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	14	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
14	peux	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	parataxis	_	Exponence[Person]=Absent
15	pas	pas	ADV	_	Polarity=Neg	14	advmod	_	_
16	connaître	connaître	VERB	_	VerbForm=Inf	14	xcomp	_	SpaceAfter=No|Subject=SubjRaising
17	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 16 parataxis	color:blue
1	et	et	CCONJ	_	_	5	cc	_	WordAlignmentBegin=97592|WordAlignmentEnd=97785
2	là	là	ADV	_	_	5	advmod	_	SpaceAfter=No|WordAlignmentBegin=97785|WordAlignmentEnd=97977
3	,	,	PUNCT	_	_	2	punct	_	WordAlignmentBegin=97977|WordAlignmentEnd=97977
4	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=97977|WordAlignmentEnd=98170
5	vois	voir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=98170|WordAlignmentEnd=98363
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=98363|WordAlignmentEnd=98555
7	tête	tête	NOUN	_	Gender=Fem|Number=Sing	5	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=98555|WordAlignmentEnd=98748
8	de	de	ADP	_	_	9	case	_	WordAlignmentBegin=98748|WordAlignmentEnd=98941
9	Kévin	Kévin	PROPN	_	_	7	nmod	_	WordAlignmentBegin=98941|WordAlignmentEnd=99133
10	qui	qui	PRON	_	PronType=Rel	11	nsubj	_	WordAlignmentBegin=99133|WordAlignmentEnd=99326
11	dépasse	dépasser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	Exponence[Number]=Absent|Exponence[Person]=Absent|WordAlignmentBegin=99326|WordAlignmentEnd=99519
12	de	de	ADP	_	_	14	case	_	WordAlignmentBegin=99519|WordAlignmentEnd=99711
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	mur	mur	NOUN	_	Gender=Masc|Number=Sing	11	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=99711|WordAlignmentEnd=99904
15	bon	bon	ADJ	_	Gender=Masc|Number=Sing	16	amod	_	HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|LiaisonAfter=Yes|WordAlignmentBegin=99904|WordAlignmentEnd=100838
16	anniversaire	anniversaire	NOUN	_	Gender=Masc|Number=Sing	5	parataxis	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|Reported=Yes|WordAlignmentBegin=100838|WordAlignmentEnd=101772
17	!	!	PUNCT	_	_	16	punct	_	WordAlignmentBegin=101772|WordAlignmentEnd=101772

~~~


