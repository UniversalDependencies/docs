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
1	couleur	couleur	NOUN	_	Gender=Fem|Number=Sing	0	root	_	AlignBegin=184038|AlignEnd=184343|Exponence[Gender]=Inherent|Exponence[Number]=Absent
2	bois	bois	NOUN	_	Gender=Masc	1	compound	_	AlignBegin=184343|AlignEnd=184483|Exponence[Gender]=Inherent
3	de	de	ADP	_	_	4	case	_	AlignBegin=184483|AlignEnd=184533
4	rose	rose	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	AlignBegin=184533|AlignEnd=184933|Exponence[Gender]=Inherent|Exponence[Number]=Absent
5	à	à	ADP	_	_	8	case	_	AlignBegin=184933|AlignEnd=185023
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	AlignBegin=184933|AlignEnd=185023
7	large	large	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	AlignBegin=185023|AlignEnd=185283|Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison
8	ruban	ruban	NOUN	_	Gender=Masc|Number=Sing	1	orphan	_	AlignBegin=185283|AlignEnd=185583|Exponence[Gender]=Inherent|Exponence[Number]=Absent
9	noir	noir	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	AlignBegin=185583|AlignEnd=186140|Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	AlignBegin=186140|AlignEnd=186140

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 orphan	color:blue
1	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	AlignBegin=58633|AlignEnd=58718|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
2	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux:tense	_	AlignBegin=58718|AlignEnd=58748
3	été	être	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	AlignBegin=58748|AlignEnd=58952|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	AlignBegin=58952|AlignEnd=59078|LiaisonAfter=Yes
5	an	an	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	AlignBegin=59078|AlignEnd=59178|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes
6	à	à	ADP	_	_	7	case	_	AlignBegin=59178|AlignEnd=59233
7	Lisbonne	Lisbonne	PROPN	_	_	3	obl:arg	_	AlignBegin=59233|AlignEnd=59617
8	et	et	CCONJ	_	_	10	cc	_	AlignBegin=59617|AlignEnd=59699
9	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	AlignBegin=59699|AlignEnd=59797|LiaisonAfter=Yes
10	an	an	NOUN	_	Gender=Masc|Number=Sing	3	conj	_	AlignBegin=59797|AlignEnd=59909|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes
11	à	à	ADP	_	_	12	case	_	AlignBegin=59909|AlignEnd=59971
12	Porto	Porto	PROPN	_	_	10	orphan	_	AlignBegin=59971|AlignEnd=60269
13	dans	dans	ADP	_	_	14	case	_	AlignBegin=60269|AlignEnd=60400
14	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	18	reparandum	_	AlignBegin=60400|AlignEnd=60989|HasSpokenGender=OnlySingExceptWithLiaison|Scrap=Yes|SpaceAfter=No
15	,	,	PUNCT	_	_	14	punct	_	AlignBegin=60989|AlignEnd=61287
16	dans	dans	ADP	_	_	18	case	_	AlignBegin=61287|AlignEnd=61392
17	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	18	det	_	AlignBegin=61392|AlignEnd=61511
18	collèges	collège	NOUN	_	Gender=Masc|Number=Plur	3	obl:mod	_	AlignBegin=61511|AlignEnd=62041|Exponence[Gender]=Inherent|Exponence[Number]=Absent
19	et	et	CCONJ	_	_	21	cc	_	AlignBegin=62667|AlignEnd=62752
20	dans	dans	ADP	_	_	21	case	_	AlignBegin=62752|AlignEnd=62939
21	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	25	reparandum	_	AlignBegin=62939|AlignEnd=63674|Scrap=Yes|SpaceAfter=No
22	,	,	PUNCT	_	_	21	punct	_	AlignBegin=63674|AlignEnd=64751
23	dans	dans	ADP	_	_	25	case	_	AlignBegin=64751|AlignEnd=64876
24	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	25	det	_	AlignBegin=64876|AlignEnd=65012
25	primaires	primaire	NOUN	_	Gender=Fem|Number=Plur	18	conj	_	AlignBegin=65012|AlignEnd=65505|Exponence[Gender]=Inherent|Exponence[Number]=Absent
26	portu~	portu~	X	_	ExtPos=ADJ	32	reparandum	_	AlignBegin=65746|AlignEnd=66077|SpaceAfter=No
27	,	,	PUNCT	_	_	28	punct	_	AlignBegin=66077|AlignEnd=66077
28	euh	euh	INTJ	_	_	26	discourse	_	AlignBegin=66077|AlignEnd=66506|SpaceAfter=No
29	,	,	PUNCT	_	_	30	punct	_	AlignBegin=66506|AlignEnd=66506
30	enfin	enfin	ADV	_	_	26	discourse	_	AlignBegin=66506|AlignEnd=66776|SpaceAfter=No
31	,	,	PUNCT	_	_	26	punct	_	AlignBegin=66776|AlignEnd=66776
32	françaises	français	ADJ	_	Gender=Fem|Number=Plur	25	amod	_	AlignBegin=66776|AlignEnd=67423|Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyFemWithLiaison|SpaceAfter=No
33	.	.	PUNCT	_	_	3	punct	_	AlignBegin=67423|AlignEnd=67423

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 orphan	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	AlignBegin=92389|AlignEnd=92533|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	AlignBegin=92410|AlignEnd=92533
3	pas	pas	ADV	_	Polarity=Neg	6	advmod	_	AlignBegin=92533|AlignEnd=92608
4	de	de	ADP	_	ExtPos=DET	6	det	_	AlignBegin=92608|AlignEnd=92638|Idiom=Yes
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	fixed	_	AlignBegin=92638|AlignEnd=92698|HasSpokenGender=OnlySingExceptWithLiaison|InIdiom=Yes
6	paille	paille	NOUN	_	Gender=Fem|Number=Sing	0	root	_	AlignBegin=92698|AlignEnd=92868|Exponence[Gender]=Inherent|Exponence[Number]=Absent
7	synthétique	synthétique	ADJ	_	Gender=Fem|Number=Sing	6	amod	_	AlignBegin=92868|AlignEnd=93288|Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	AlignBegin=93288|AlignEnd=93288
9	ni	ni	CCONJ	_	_	10	cc	_	AlignBegin=93288|AlignEnd=93435
10	XXX	XXX	X	_	_	6	conj	_	AlignBegin=93978|AlignEnd=94413|SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	AlignBegin=94413|AlignEnd=94413
12	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	13	nsubj	_	AlignBegin=94413|AlignEnd=94565|Exponence[Number]=Inherent|Exponence[Person]=Inherent
13	as	avoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	orphan	_	AlignBegin=94565|AlignEnd=94736
14	aucun	aucun	DET	_	Gender=Masc|Number=Sing|PronType=Neg	15	det	_	AlignBegin=94736|AlignEnd=94886
15	problème	problème	NOUN	_	Gender=Masc|Number=Sing	13	obj	_	AlignBegin=94886|AlignEnd=95149|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
16	.	.	PUNCT	_	_	6	punct	_	AlignBegin=95149|AlignEnd=95149

~~~


