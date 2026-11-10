---
layout: base
title:  'Statistics of amod in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `amod`

This relation is universal.

1014 nodes (2%) are attached to their parents as `amod`.

508 instances of `amod` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.32248520710059.

The following 8 pairs of parts of speech are connected with `amod`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (938; 93% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (34; 3% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (16; 2% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (14; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 amod	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=26749|WordAlignmentEnd=26864
2	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	4	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=26864|WordAlignmentEnd=26914
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	WordAlignmentBegin=26914|WordAlignmentEnd=26944
4	sorti	sortir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=26944|WordAlignmentEnd=27284
5	un	un	DET	_	Definite=Ind|ExtPos=ADV|Gender=Masc|Number=Sing|PronType=Art	4	advmod	_	Idiom=Yes|WordAlignmentBegin=27284|WordAlignmentEnd=27364
6	petit	petit	ADJ	_	Gender=Masc|Number=Sing	5	fixed	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|InIdiom=Yes|WordAlignmentBegin=27364|WordAlignmentEnd=27514
7	peu	peu	NOUN	_	Gender=Masc	5	fixed	_	Exponence[Gender]=Inherent|InIdiom=Yes|WordAlignmentBegin=27514|WordAlignmentEnd=27614
8	de	de	ADP	_	_	11	case	_	WordAlignmentBegin=27614|WordAlignmentEnd=27644
9	mon	son	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	11	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=27644|WordAlignmentEnd=27784
10	petit	petit	ADJ	_	Gender=Masc|Number=Sing	11	amod	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=27784|WordAlignmentEnd=27954
11	cocon	cocon	NOUN	_	Gender=Masc|Number=Sing	4	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=27954|WordAlignmentEnd=28274
12	de	de	ADP	_	_	14	case	_	WordAlignmentBegin=28274|WordAlignmentEnd=28354
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	septième	septième	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=28354|WordAlignmentEnd=28804
15	.	.	PUNCT	_	_	4	punct	_	WordAlignmentBegin=28804|WordAlignmentEnd=28804

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	donc	donc	ADV	_	_	7	advmod	_	SpaceAfter=No|WordAlignmentBegin=75287|WordAlignmentEnd=75557
2	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=75557|WordAlignmentEnd=75557
3	euh	euh	INTJ	_	_	1	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=75557|WordAlignmentEnd=75850
4	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=75850|WordAlignmentEnd=76094
5	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=76094|WordAlignmentEnd=76179
6	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux:tense	_	WordAlignmentBegin=76179|WordAlignmentEnd=76229
7	connu	connaître	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=76229|WordAlignmentEnd=76479
8	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	9	det	_	HasSpokenGender=OnlySingExceptWithLiaison|SpaceAfter=No|WordAlignmentBegin=76479|WordAlignmentEnd=76509
9	Algérie	Algérie	PROPN	_	_	7	obj	_	WordAlignmentBegin=76509|WordAlignmentEnd=76829
10	heureuse	heureux	ADJ	_	Gender=Fem|Number=Sing	9	amod	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyFemWithLiaison|SpaceAfter=No|WordAlignmentBegin=76829|WordAlignmentEnd=77279
11	.	.	PUNCT	_	_	7	punct	_	WordAlignmentBegin=77279|WordAlignmentEnd=77279

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	et	et	CCONJ	_	_	3	cc	_	WordAlignmentBegin=155269|WordAlignmentEnd=155364
2	tout	tout	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=155364|WordAlignmentEnd=155514
3	cela	cela	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=155514|WordAlignmentEnd=155824
4	grâce	grâce	NOUN	_	ExtPos=ADV|Gender=Fem	3	advmod	_	Exponence[Gender]=Inherent|WordAlignmentBegin=155824|WordAlignmentEnd=156384
5	à	à	ADP	_	_	7	case	_	WordAlignmentBegin=156528|WordAlignmentEnd=156688
6	notre	son	DET	_	Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	7	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=156757|WordAlignmentEnd=157074
7	boule	boule	NOUN	_	Gender=Fem|Number=Sing	4	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=157074|WordAlignmentEnd=157334
8	de	de	ADP	_	_	9	case	_	WordAlignmentBegin=157334|WordAlignmentEnd=157404
9	lavage	lavage	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=157404|WordAlignmentEnd=157834
10	,	,	PUNCT	_	_	11	punct	_	WordAlignmentBegin=157834|WordAlignmentEnd=0
11	Maître	maître	NOUN	_	Gender=Masc|Number=Sing	3	vocative	_	Exponence[Gender]=Inherent|SpaceAfter=No|WordAlignmentBegin=157834|WordAlignmentEnd=158054
12	.	.	PUNCT	_	_	3	punct	_	WordAlignmentBegin=0|WordAlignmentEnd=0

~~~


