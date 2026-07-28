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
1	et	et	CCONJ	_	_	6	cc	_	AlignBegin=28804|AlignEnd=28864
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj:caus	_	AlignBegin=28864|AlignEnd=29004|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
3	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	6	iobj	_	AlignBegin=29004|AlignEnd=29034|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
4	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	AlignBegin=29034|AlignEnd=29074
5	fait	faire	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	aux:caus	_	AlignBegin=29074|AlignEnd=29214|Scrap=Yes|Tense[denom]=Past
6	voir	voir	VERB	_	VerbForm=Inf	0	root	_	AlignBegin=29214|AlignEnd=29432|SpaceAfter=No|Subject=OblRaising
7	…	…	PUNCT	_	_	6	punct	_	AlignBegin=29432|AlignEnd=29432

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 nsubj:caus	color:blue
1	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	AlignBegin=304037|AlignEnd=304132|Exponence[Number]=Inherent|Exponence[Person]=Inherent
2	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=304132|AlignEnd=304302|Exponence[Person]=Absent
3	que	que	SCONJ	_	_	10	mark	_	AlignBegin=304302|AlignEnd=304422
4	bien	bien	ADV	_	_	10	nsubj:caus	_	AlignBegin=304422|AlignEnd=304572
5	de	de	ADP	_	_	7	case	_	AlignBegin=304572|AlignEnd=304672
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	AlignBegin=304572|AlignEnd=304672
7	tragédies	tragédie	NOUN	_	Gender=Fem|Number=Plur	4	obl:arg	_	AlignBegin=304672|AlignEnd=305112|Exponence[Gender]=Inherent|Exponence[Number]=Absent
8	aujourd'hui	aujourd'hui	ADV	_	_	10	advmod	_	AlignBegin=305112|AlignEnd=305672
9	font	faire	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux:caus	_	AlignBegin=305672|AlignEnd=306022
10	douter	douter	VERB	_	VerbForm=Inf	2	ccomp	_	AlignBegin=306022|AlignEnd=306542|Subject=ObjRaising
11	de	de	ADP	_	_	13	case	_	AlignBegin=306542|AlignEnd=306652
12	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	13	det	_	AlignBegin=306652|AlignEnd=306882|Exponence[Gender]=Absent|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes
13	espérance	espérance	NOUN	_	Gender=Fem|Number=Sing	10	obl:arg	_	AlignBegin=306882|AlignEnd=307832|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	AlignBegin=307832|AlignEnd=307832

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 nsubj:caus	color:blue
1	à	à	ADP	_	_	3	case	_	AlignBegin=341460|AlignEnd=341540
2	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	AlignBegin=341540|AlignEnd=341580|Exponence[Gender]=Absent|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|SpaceAfter=No
3	intérieur	intérieur	NOUN	_	Gender=Masc|Number=Sing	12	obl:mod	_	AlignBegin=341580|AlignEnd=342130|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes
4	de	de	ADP	_	_	6	case	_	AlignBegin=342130|AlignEnd=342290
5	chaque	chaque	DET	_	Number=Sing|PronType=Ind	6	det	_	AlignBegin=342290|AlignEnd=342600|Exponence[Number]=Inherent
6	nation	nation	NOUN	_	Gender=Fem|Number=Sing	3	nmod	_	AlignBegin=342600|AlignEnd=343212|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
7	,	,	PUNCT	_	_	3	punct	_	AlignBegin=343212|AlignEnd=344490
8	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	AlignBegin=344490|AlignEnd=344535|LiaisonAfter=Yes
9	exigence	exigence	NOUN	_	Gender=Fem|Number=Sing	12	nsubj:caus	_	AlignBegin=344535|AlignEnd=345576|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes
10	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	12	expl:pv	_	AlignBegin=345756|AlignEnd=345946|Exponence[Person]=Inherent
11	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:caus	_	AlignBegin=345946|AlignEnd=346086
12	entendre	entendre	VERB	_	VerbForm=Inf	0	root	_	AlignBegin=346086|AlignEnd=346875|Subject=NoRaising
13	toujours	toujours	ADV	_	_	15	advmod	_	AlignBegin=347407|AlignEnd=347652
14	plus	plus	NOUN	_	Gender=Masc	15	obl:mod	_	AlignBegin=347652|AlignEnd=347762|Exponence[Gender]=Inherent
15	forte	fort	ADJ	_	Gender=Fem|Number=Sing	12	advcl	_	AlignBegin=347762|AlignEnd=348379|Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison
16	pour	pour	ADP	_	_	24	mark	_	AlignBegin=349444|AlignEnd=349579
17	que	que	SCONJ	_	_	24	mark	_	AlignBegin=349579|AlignEnd=349679
18	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	19	det	_	AlignBegin=349679|AlignEnd=349779|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes
19	avancées	avancée	NOUN	_	Gender=Fem|Number=Plur	24	nsubj:pass	_	AlignBegin=349779|AlignEnd=350279|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes
20	de	de	ADP	_	_	22	case	_	AlignBegin=350279|AlignEnd=350329
21	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	AlignBegin=350329|AlignEnd=350399|HasSpokenGender=OnlySingExceptWithLiaison
22	science	science	NOUN	_	Gender=Fem|Number=Sing	19	nmod	_	AlignBegin=350399|AlignEnd=350910|Exponence[Gender]=Inherent|Exponence[Number]=Absent
23	soient	être	AUX	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	24	aux:pass	_	AlignBegin=351414|AlignEnd=351684
24	orientées	orienter	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	12	advcl	_	AlignBegin=351684|AlignEnd=352174|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
25	vers	vers	ADP	_	_	27	case	_	AlignBegin=352174|AlignEnd=352644
26	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	AlignBegin=352644|AlignEnd=352794|HasSpokenGender=OnlySingExceptWithLiaison
27	bien	bien	NOUN	_	Gender=Masc|Number=Sing	24	obl:arg	_	AlignBegin=352794|AlignEnd=353094|Exponence[Gender]=Inherent|Exponence[Number]=Absent
28	de	de	ADP	_	_	30	case	_	AlignBegin=353094|AlignEnd=353234
29	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	30	det	_	AlignBegin=353234|AlignEnd=353374|HasSpokenGender=OnlySingExceptWithLiaison|SpaceAfter=No
30	Homme	Homme	PROPN	_	_	27	nmod	_	AlignBegin=353374|AlignEnd=353879
31	et	et	CCONJ	_	_	34	cc	_	AlignBegin=354518|AlignEnd=354623
32	ne	ne	ADV	_	Polarity=Neg	34	advmod	_	AlignBegin=354623|AlignEnd=354783
33	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	34	obj	_	AlignBegin=354783|AlignEnd=354973|Exponence[Person]=Inherent
34	retournent	retourner	VERB	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	24	conj	_	AlignBegin=354973|AlignEnd=355573
35	jamais	jamais	ADV	_	PronType=Neg	34	advmod	_	AlignBegin=355573|AlignEnd=355923
36	contre	contre	ADP	_	_	37	case	_	AlignBegin=355923|AlignEnd=356293
37	lui	lui	PRON	_	Emph=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	34	obl:arg	_	AlignBegin=356293|AlignEnd=356625|Exponence[Person]=Inherent|SpaceAfter=No
38	.	.	PUNCT	_	_	12	punct	_	AlignBegin=356625|AlignEnd=356625

~~~


