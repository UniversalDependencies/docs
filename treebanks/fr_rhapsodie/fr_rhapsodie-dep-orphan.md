---
layout: base
title:  'Statistics of orphan in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `orphan`

This relation is universal.

4 nodes (0%) are attached to their parents as `orphan`.

4 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 3 pairs of parts of speech are connected with `orphan`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 25% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 orphan	color:blue
1	couleur	couleur	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=184038|WordAlignmentEnd=184343
2	bois	bois	NOUN	_	Gender=Masc	1	compound	_	Exponence[Gender]=Inherent|WordAlignmentBegin=184343|WordAlignmentEnd=184483
3	de	de	ADP	_	_	4	case	_	WordAlignmentBegin=184483|WordAlignmentEnd=184533
4	rose	rose	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=184533|WordAlignmentEnd=184933
5	à	à	ADP	_	_	8	case	_	WordAlignmentBegin=184933|WordAlignmentEnd=185023
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
7	large	large	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=185023|WordAlignmentEnd=185283
8	ruban	ruban	NOUN	_	Gender=Masc|Number=Sing	1	orphan	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=185283|WordAlignmentEnd=185583
9	noir	noir	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No|WordAlignmentBegin=185583|WordAlignmentEnd=186140
10	.	.	PUNCT	_	_	1	punct	_	WordAlignmentBegin=186140|WordAlignmentEnd=186140

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 orphan	color:blue
1	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=58633|WordAlignmentEnd=58718
2	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux:tense	_	WordAlignmentBegin=58718|WordAlignmentEnd=58748
3	été	être	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=58748|WordAlignmentEnd=58952
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	LiaisonAfter=Yes|WordAlignmentBegin=58952|WordAlignmentEnd=59078
5	an	an	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=59078|WordAlignmentEnd=59178
6	à	à	ADP	_	_	7	case	_	WordAlignmentBegin=59178|WordAlignmentEnd=59233
7	Lisbonne	Lisbonne	PROPN	_	_	3	obl:arg	_	WordAlignmentBegin=59233|WordAlignmentEnd=59617
8	et	et	CCONJ	_	_	10	cc	_	WordAlignmentBegin=59617|WordAlignmentEnd=59699
9	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	LiaisonAfter=Yes|WordAlignmentBegin=59699|WordAlignmentEnd=59797
10	an	an	NOUN	_	Gender=Masc|Number=Sing	3	conj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=59797|WordAlignmentEnd=59909
11	à	à	ADP	_	_	12	case	_	WordAlignmentBegin=59909|WordAlignmentEnd=59971
12	Porto	Porto	PROPN	_	_	10	orphan	_	WordAlignmentBegin=59971|WordAlignmentEnd=60269
13	dans	dans	ADP	_	_	14	case	_	WordAlignmentBegin=60269|WordAlignmentEnd=60400
14	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	18	reparandum	_	HasSpokenGender=OnlySingExceptWithLiaison|Scrap=Yes|SpaceAfter=No|WordAlignmentBegin=60400|WordAlignmentEnd=60989
15	,	,	PUNCT	_	_	14	punct	_	WordAlignmentBegin=60989|WordAlignmentEnd=61287
16	dans	dans	ADP	_	_	18	case	_	WordAlignmentBegin=61287|WordAlignmentEnd=61392
17	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	18	det	_	WordAlignmentBegin=61392|WordAlignmentEnd=61511
18	collèges	collège	NOUN	_	Gender=Masc|Number=Plur	3	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=61511|WordAlignmentEnd=62041
19	et	et	CCONJ	_	_	25	cc	_	WordAlignmentBegin=62667|WordAlignmentEnd=62752
20	dans	dans	ADP	_	_	21	case	_	WordAlignmentBegin=62752|WordAlignmentEnd=62939
21	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	25	reparandum	_	Promotion=det|Scrap=Yes|SpaceAfter=No|WordAlignmentBegin=62939|WordAlignmentEnd=63674
22	,	,	PUNCT	_	_	21	punct	_	WordAlignmentBegin=63674|WordAlignmentEnd=64751
23	dans	dans	ADP	_	_	25	case	_	WordAlignmentBegin=64751|WordAlignmentEnd=64876
24	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	25	det	_	WordAlignmentBegin=64876|WordAlignmentEnd=65012
25	primaires	primaire	NOUN	_	Gender=Fem|Number=Plur	18	conj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=65012|WordAlignmentEnd=65505
26	portu~	portu~	X	_	ExtPos=ADJ	32	reparandum	_	SpaceAfter=No|WordAlignmentBegin=65746|WordAlignmentEnd=66077
27	,	,	PUNCT	_	_	28	punct	_	WordAlignmentBegin=66077|WordAlignmentEnd=66077
28	euh	euh	INTJ	_	_	26	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=66077|WordAlignmentEnd=66506
29	,	,	PUNCT	_	_	30	punct	_	WordAlignmentBegin=66506|WordAlignmentEnd=66506
30	enfin	enfin	ADV	_	_	26	discourse	_	SpaceAfter=No|WordAlignmentBegin=66506|WordAlignmentEnd=66776
31	,	,	PUNCT	_	_	26	punct	_	WordAlignmentBegin=66776|WordAlignmentEnd=66776
32	françaises	français	ADJ	_	Gender=Fem|Number=Plur	25	amod	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyFemWithLiaison|SpaceAfter=No|WordAlignmentBegin=66776|WordAlignmentEnd=67423
33	.	.	PUNCT	_	_	3	punct	_	WordAlignmentBegin=67423|WordAlignmentEnd=67423

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 orphan	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=92389|WordAlignmentEnd=92533
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	WordAlignmentBegin=92410|WordAlignmentEnd=92533
3	pas	pas	ADV	_	Polarity=Neg	6	advmod	_	WordAlignmentBegin=92533|WordAlignmentEnd=92608
4	de	de	ADP	_	ExtPos=DET	6	det	_	Idiom=Yes|WordAlignmentBegin=92608|WordAlignmentEnd=92638
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	fixed	_	HasSpokenGender=OnlySingExceptWithLiaison|InIdiom=Yes|WordAlignmentBegin=92638|WordAlignmentEnd=92698
6	paille	paille	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=92698|WordAlignmentEnd=92868
7	synthétique	synthétique	ADJ	_	Gender=Fem|Number=Sing	6	amod	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No|WordAlignmentBegin=92868|WordAlignmentEnd=93288
8	,	,	PUNCT	_	_	10	punct	_	WordAlignmentBegin=93288|WordAlignmentEnd=93288
9	ni	ni	CCONJ	_	_	10	cc	_	WordAlignmentBegin=93288|WordAlignmentEnd=93435
10	XXX	XXX	X	_	_	6	conj	_	SpaceAfter=No|WordAlignmentBegin=93978|WordAlignmentEnd=94413
11	,	,	PUNCT	_	_	10	punct	_	WordAlignmentBegin=94413|WordAlignmentEnd=94413
12	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	13	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=94413|WordAlignmentEnd=94565
13	as	avoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	orphan	_	WordAlignmentBegin=94565|WordAlignmentEnd=94736
14	aucun	aucun	DET	_	Gender=Masc|Number=Sing|PronType=Neg	15	det	_	WordAlignmentBegin=94736|WordAlignmentEnd=94886
15	problème	problème	NOUN	_	Gender=Masc|Number=Sing	13	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=94886|WordAlignmentEnd=95149
16	.	.	PUNCT	_	_	6	punct	_	WordAlignmentBegin=95149|WordAlignmentEnd=95149

~~~


