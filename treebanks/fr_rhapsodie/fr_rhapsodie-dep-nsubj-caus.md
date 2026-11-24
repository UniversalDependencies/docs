---
layout: base
title:  'Statistics of nsubj:caus in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="fr_rhapsodie-dep-nsubj-outer.html">nsubj:outer</a></tt>, <tt><a href="fr_rhapsodie-dep-nsubj-pass.html">nsubj:pass</a></tt>.

14 nodes (0%) are attached to their parents as `nsubj:caus`.

14 instances of `nsubj:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.71428571428571.

The following 3 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (12; 86% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:caus	color:blue
1	et	et	CCONJ	_	_	6	cc	_	WordAlignmentBegin=28804|WordAlignmentEnd=28864
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj:caus	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=28864|WordAlignmentEnd=29004
3	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	6	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=29004|WordAlignmentEnd=29034
4	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	WordAlignmentBegin=29034|WordAlignmentEnd=29074
5	fait	faire	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	aux:caus	_	Scrap=Yes|Status[Tense]=Denom|WordAlignmentBegin=29074|WordAlignmentEnd=29214
6	voir	voir	VERB	_	VerbForm=Inf	0	root	_	SpaceAfter=No|Subject=OblRaising|WordAlignmentBegin=29214|WordAlignmentEnd=29432
7	…	…	PUNCT	_	_	6	punct	_	WordAlignmentBegin=29432|WordAlignmentEnd=29432

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 nsubj:caus	color:blue
1	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=304037|WordAlignmentEnd=304132
2	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=304132|WordAlignmentEnd=304302
3	que	que	SCONJ	_	_	10	mark	_	WordAlignmentBegin=304302|WordAlignmentEnd=304422
4	bien	bien	ADV	_	_	10	nsubj:caus	_	WordAlignmentBegin=304422|WordAlignmentEnd=304572
5	de	de	ADP	_	_	7	case	_	WordAlignmentBegin=304572|WordAlignmentEnd=304672
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	tragédies	tragédie	NOUN	_	Gender=Fem|Number=Plur	4	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=304672|WordAlignmentEnd=305112
8	aujourd'hui	aujourd'hui	ADV	_	_	10	advmod	_	WordAlignmentBegin=305112|WordAlignmentEnd=305672
9	font	faire	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux:caus	_	WordAlignmentBegin=305672|WordAlignmentEnd=306022
10	douter	douter	VERB	_	VerbForm=Inf	2	ccomp	_	Subject=ObjRaising|WordAlignmentBegin=306022|WordAlignmentEnd=306542
11	de	de	ADP	_	_	13	case	_	WordAlignmentBegin=306542|WordAlignmentEnd=306652
12	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	13	det	_	Exponence[Gender]=Absent|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|WordAlignmentBegin=306652|WordAlignmentEnd=306882
13	espérance	espérance	NOUN	_	Gender=Fem|Number=Sing	10	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No|WordAlignmentBegin=306882|WordAlignmentEnd=307832
14	.	.	PUNCT	_	_	2	punct	_	WordAlignmentBegin=307832|WordAlignmentEnd=307832

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 nsubj:caus	color:blue
1	à	à	ADP	_	_	3	case	_	WordAlignmentBegin=341460|WordAlignmentEnd=341540
2	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	3	det	_	HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|SpaceAfter=No|WordAlignmentBegin=341540|WordAlignmentEnd=341580
3	intérieur	intérieur	NOUN	_	Gender=Masc|Number=Sing	12	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=341580|WordAlignmentEnd=342130
4	de	de	ADP	_	_	6	case	_	WordAlignmentBegin=342130|WordAlignmentEnd=342290
5	chaque	chaque	DET	_	Number=Sing|PronType=Ind	6	det	_	Exponence[Number]=Inherent|WordAlignmentBegin=342290|WordAlignmentEnd=342600
6	nation	nation	NOUN	_	Gender=Fem|Number=Sing	3	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=342600|WordAlignmentEnd=343212
7	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=343212|WordAlignmentEnd=344490
8	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	LiaisonAfter=Yes|WordAlignmentBegin=344490|WordAlignmentEnd=344535
9	exigence	exigence	NOUN	_	Gender=Fem|Number=Sing	12	nsubj:caus	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=344535|WordAlignmentEnd=345576
10	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	12	expl:pv	_	Exponence[Person]=Inherent|WordAlignmentBegin=345756|WordAlignmentEnd=345946
11	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:caus	_	WordAlignmentBegin=345946|WordAlignmentEnd=346086
12	entendre	entendre	VERB	_	VerbForm=Inf	0	root	_	Subject=NoRaising|WordAlignmentBegin=346086|WordAlignmentEnd=346875
13	toujours	toujours	ADV	_	_	15	advmod	_	WordAlignmentBegin=347407|WordAlignmentEnd=347652
14	plus	plus	NOUN	_	Gender=Masc	15	obl:mod	_	Exponence[Gender]=Inherent|WordAlignmentBegin=347652|WordAlignmentEnd=347762
15	forte	fort	ADJ	_	Gender=Fem|Number=Sing	12	advcl	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=347762|WordAlignmentEnd=348379
16	pour	pour	ADP	_	_	24	mark	_	WordAlignmentBegin=349444|WordAlignmentEnd=349579
17	que	que	SCONJ	_	_	24	mark	_	WordAlignmentBegin=349579|WordAlignmentEnd=349679
18	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	19	det	_	HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|WordAlignmentBegin=349679|WordAlignmentEnd=349779
19	avancées	avancée	NOUN	_	Gender=Fem|Number=Plur	24	nsubj:pass	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=349779|WordAlignmentEnd=350279
20	de	de	ADP	_	_	22	case	_	WordAlignmentBegin=350279|WordAlignmentEnd=350329
21	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=350329|WordAlignmentEnd=350399
22	science	science	NOUN	_	Gender=Fem|Number=Sing	19	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=350399|WordAlignmentEnd=350910
23	soient	être	AUX	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	24	aux:pass	_	WordAlignmentBegin=351414|WordAlignmentEnd=351684
24	orientées	orienter	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	12	advcl	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=351684|WordAlignmentEnd=352174
25	vers	vers	ADP	_	_	27	case	_	WordAlignmentBegin=352174|WordAlignmentEnd=352644
26	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=352644|WordAlignmentEnd=352794
27	bien	bien	NOUN	_	Gender=Masc|Number=Sing	24	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=352794|WordAlignmentEnd=353094
28	de	de	ADP	_	_	30	case	_	WordAlignmentBegin=353094|WordAlignmentEnd=353234
29	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	30	det	_	HasSpokenGender=OnlySingExceptWithLiaison|SpaceAfter=No|WordAlignmentBegin=353234|WordAlignmentEnd=353374
30	Homme	Homme	PROPN	_	_	27	nmod	_	WordAlignmentBegin=353374|WordAlignmentEnd=353879
31	et	et	CCONJ	_	_	34	cc	_	WordAlignmentBegin=354518|WordAlignmentEnd=354623
32	ne	ne	ADV	_	Polarity=Neg	34	advmod	_	WordAlignmentBegin=354623|WordAlignmentEnd=354783
33	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	34	obj	_	Exponence[Person]=Inherent|WordAlignmentBegin=354783|WordAlignmentEnd=354973
34	retournent	retourner	VERB	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	24	conj	_	WordAlignmentBegin=354973|WordAlignmentEnd=355573
35	jamais	jamais	ADV	_	PronType=Neg	34	advmod	_	WordAlignmentBegin=355573|WordAlignmentEnd=355923
36	contre	contre	ADP	_	_	37	case	_	WordAlignmentBegin=355923|WordAlignmentEnd=356293
37	lui	lui	PRON	_	Emph=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	34	obl:arg	_	Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=356293|WordAlignmentEnd=356625
38	.	.	PUNCT	_	_	12	punct	_	WordAlignmentBegin=356625|WordAlignmentEnd=356625

~~~


