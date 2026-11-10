---
layout: base
title:  'Statistics of vocative in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `vocative`

This relation is universal.

16 nodes (0%) are attached to their parents as `vocative`.

8 instances of `vocative` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.0625.

The following 7 pairs of parts of speech are connected with `vocative`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (5; 31% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (3; 19% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-X.html">X</a></tt> (3; 19% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (2; 13% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 vocative	color:blue
1	cauchemar	cauchemar	NOUN	_	Gender=Masc|Number=Sing	6	dislocated:obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=75156|WordAlignmentEnd=75415
2	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=75415|WordAlignmentEnd=75415
3	meuf	meuf	NOUN	_	Gender=Fem|Number=Sing	6	vocative	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=75415|WordAlignmentEnd=75674
4	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=75674|WordAlignmentEnd=75674
5	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=75674|WordAlignmentEnd=75933
6	peux	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=75933|WordAlignmentEnd=76193
7	même	même	ADV	_	_	6	advmod	_	WordAlignmentBegin=76193|WordAlignmentEnd=76452
8	pas	pas	ADV	_	Polarity=Neg	6	advmod	_	WordAlignmentBegin=76452|WordAlignmentEnd=76711
9	savoir	savoir	VERB	_	VerbForm=Inf	6	xcomp	_	SpaceAfter=No|Subject=SubjRaising|WordAlignmentBegin=76711|WordAlignmentEnd=76970
10	.	.	PUNCT	_	_	6	punct	_	WordAlignmentBegin=76970|WordAlignmentEnd=76970

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 vocative	color:blue
1	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	Exponence[Person]=Inherent
2	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
3	là	là	ADV	_	_	0	root	_	_
4	en	en	ADP	_	ExtPos=ADP	9	mark	_	Idiom=Yes
5	mode	mode	NOUN	_	Gender=Masc|Number=Sing	4	fixed	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|InIdiom=Yes
6	mais	mais	CCONJ	_	_	9	cc	_	_
7	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	9	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Yes
8	êtes	être	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	sûre	sûr	ADJ	_	Gender=Fem|Number=Sing	3	advcl	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|Reported=Yes
10	madame	madame	NOUN	_	Gender=Fem|Number=Sing	9	vocative	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	euh	euh	INTJ	_	_	9	discourse:filler	_	SpaceAfter=No
13	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 vocative	color:blue
1	et	et	CCONJ	_	_	5	cc	_	WordAlignmentBegin=120176|WordAlignmentEnd=120295
2	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=120295|WordAlignmentEnd=120414
3	lui	lui	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=3|PronType=Prs	5	iobj	_	Exponence[Person]=Inherent|WordAlignmentBegin=120414|WordAlignmentEnd=120533
4	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	aux:tense	_	WordAlignmentBegin=120533|WordAlignmentEnd=120652
5	dit	dire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=120652|WordAlignmentEnd=120771
6	bon	bon	INTJ	_	_	11	discourse	_	SpaceAfter=No|WordAlignmentBegin=120771|WordAlignmentEnd=120967
7	,	,	PUNCT	_	_	6	punct	_	WordAlignmentBegin=120967|WordAlignmentEnd=120967
8	XXX	XXX	X	_	ExtPos=PROPN	11	vocative	_	SpaceAfter=No|WordAlignmentBegin=120967|WordAlignmentEnd=121163
9	,	,	PUNCT	_	_	10	punct	_	WordAlignmentBegin=121163|WordAlignmentEnd=121163
10	euh	euh	INTJ	_	_	11	discourse:filler	_	WordAlignmentBegin=121163|WordAlignmentEnd=121359
11	dis	dire	VERB	_	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	ccomp	_	Exponence[Person]=Absent|Reported=Yes|SpaceAfter=No|WordAlignmentBegin=121359|WordAlignmentEnd=121555
12	-moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	11	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|Reported=Yes|WordAlignmentBegin=121359|WordAlignmentEnd=121555
13	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=121555|WordAlignmentEnd=121752
14	que	que	PRON	_	PronType=Rel	19	obj	_	WordAlignmentBegin=121752|WordAlignmentEnd=121948
15	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	16	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=121948|WordAlignmentEnd=122144
16	as	avoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	13	acl:relcl	_	WordAlignmentBegin=122144|WordAlignmentEnd=122340
17	à	à	ADP	_	_	19	mark	_	WordAlignmentBegin=122340|WordAlignmentEnd=122340
18	me	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	19	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=122340|WordAlignmentEnd=122536
19	dire	dire	VERB	_	VerbForm=Inf	16	xcomp	_	SpaceAfter=No|Subject=SubjRaising|WordAlignmentBegin=122536|WordAlignmentEnd=122732
20	.	.	PUNCT	_	_	11	punct	_	WordAlignmentBegin=122732|WordAlignmentEnd=122732

~~~


