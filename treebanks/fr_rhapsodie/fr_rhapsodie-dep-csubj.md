---
layout: base
title:  'Statistics of csubj in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="fr_rhapsodie-dep-csubj-pass.html">csubj:pass</a></tt>.

18 nodes (0%) are attached to their parents as `csubj`.

16 instances of `csubj` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.27777777777778.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (12; 67% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 csubj	color:blue
1	XXX	XXX	X	_	_	3	dep	_	Overlap=Rhap_D2007-106|Scrap=Yes|SpaceAfter=No|WordAlignmentBegin=152546|WordAlignmentEnd=153071
2	,	,	PUNCT	_	_	3	punct	_	Overlap=Rhap_D2007-84|WordAlignmentBegin=153071|WordAlignmentEnd=152546
3	ah	ah	INTJ	_	_	8	discourse	_	Overlap=Rhap_D2007-106|SpaceAfter=No|WordAlignmentBegin=152546|WordAlignmentEnd=153071
4	,	,	PUNCT	_	_	8	punct	_	Overlap=Rhap_D2007-84|WordAlignmentBegin=153071|WordAlignmentEnd=152546
5	mais	mais	CCONJ	_	_	8	cc	_	Overlap=Rhap_D2007-106|WordAlignmentBegin=152546|WordAlignmentEnd=153071
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=153071|WordAlignmentEnd=153176
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	WordAlignmentBegin=153126|WordAlignmentEnd=153176
8	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=NotInThisDialect|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=153176|WordAlignmentEnd=153336
9	qu'	que	SCONJ	_	_	12	mark	_	SpaceAfter=No|WordAlignmentBegin=153336|WordAlignmentEnd=153386
10	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	12	nsubj:pass	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=153386|WordAlignmentEnd=153486
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:pass	_	WordAlignmentBegin=153486|WordAlignmentEnd=153516
12	habillé	habiller	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	8	csubj	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=153516|WordAlignmentEnd=153851
13	pareil	pareil	ADV	_	_	12	advmod	_	Overlap=Rhap_D2007-108|SpaceAfter=No|WordAlignmentBegin=153851|WordAlignmentEnd=154616
14	.	.	PUNCT	_	_	8	punct	_	Overlap=Rhap_D2007-86|WordAlignmentBegin=154616|WordAlignmentEnd=154616

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 csubj	color:blue
1	enfin	enfin	ADV	_	_	8	discourse	_	SpaceAfter=No|WordAlignmentBegin=30447|WordAlignmentEnd=30897
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=30897|WordAlignmentEnd=30897
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=30897|WordAlignmentEnd=31017
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	reparandum	_	SpaceAfter=No|WordAlignmentBegin=31017|WordAlignmentEnd=31097
5	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=31097|WordAlignmentEnd=31097
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=31097|WordAlignmentEnd=31187
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	WordAlignmentBegin=31187|WordAlignmentEnd=31247
8	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=NotInThisDialect|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=31247|WordAlignmentEnd=31407
9	que	que	SCONJ	_	_	13	mark	_	WordAlignmentBegin=31407|WordAlignmentEnd=31447
10	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	13	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=31447|WordAlignmentEnd=31497
11	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	13	cop	_	WordAlignmentBegin=31497|WordAlignmentEnd=31757
12	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=31757|WordAlignmentEnd=31877
13	côté	côté	NOUN	_	Gender=Masc|Number=Sing	8	csubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=31877|WordAlignmentEnd=32257
14	public	public	ADJ	_	Gender=Masc|Number=Sing	13	amod	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No|WordAlignmentBegin=32257|WordAlignmentEnd=32772
15	,	,	PUNCT	_	_	16	punct	_	WordAlignmentBegin=32772|WordAlignmentEnd=32772
16	direct	direct	ADJ	_	Gender=Masc|Number=Sing	14	conj:reform	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=32772|WordAlignmentEnd=33382
17	et	et	CCONJ	_	_	18	cc	_	WordAlignmentBegin=33382|WordAlignmentEnd=33482
18	que	que	SCONJ	_	_	32	reparandum	_	SpaceAfter=No|WordAlignmentBegin=33482|WordAlignmentEnd=33941
19	,	,	PUNCT	_	_	18	punct	_	WordAlignmentBegin=33941|WordAlignmentEnd=33941
20	et	et	CCONJ	_	_	32	cc	_	WordAlignmentBegin=33941|WordAlignmentEnd=34092
21	que	que	SCONJ	_	_	32	mark	_	WordAlignmentBegin=34092|WordAlignmentEnd=34252
22	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	32	dislocated:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=34252|WordAlignmentEnd=34630
23	,	,	PUNCT	_	_	22	punct	_	WordAlignmentBegin=34630|WordAlignmentEnd=34975
24	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	25	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=34975|WordAlignmentEnd=35080
25	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	reparandum	_	SpaceAfter=No|WordAlignmentBegin=35080|WordAlignmentEnd=35160
26	,	,	PUNCT	_	_	25	punct	_	WordAlignmentBegin=35160|WordAlignmentEnd=35160
27	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	32	nsubj:outer	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=35160|WordAlignmentEnd=35450
28	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	cop	_	WordAlignmentBegin=35450|WordAlignmentEnd=35520
29	comme	comme	SCONJ	_	_	32	mark	_	WordAlignmentBegin=35520|WordAlignmentEnd=35660
30	si	si	SCONJ	_	_	32	mark	_	WordAlignmentBegin=35660|WordAlignmentEnd=35800
31	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	32	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=35800|WordAlignmentEnd=35910
32	faisais	faire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	13	conj	_	Exponence[Person]=Absent|WordAlignmentBegin=35910|WordAlignmentEnd=36080
33	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	34	det	_	WordAlignmentBegin=36080|WordAlignmentEnd=36150
34	spectacle	spectacle	NOUN	_	Gender=Masc|Number=Sing	32	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=36150|WordAlignmentEnd=36572
35	.	.	PUNCT	_	_	8	punct	_	WordAlignmentBegin=36572|WordAlignmentEnd=36572

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 csubj	color:blue
1	et	et	CCONJ	_	_	5	reparandum	_	SpaceAfter=No|WordAlignmentBegin=266095|WordAlignmentEnd=266309
2	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=266309|WordAlignmentEnd=266309
3	euh	euh	INTJ	_	_	1	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=266309|WordAlignmentEnd=266977
4	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=266977|WordAlignmentEnd=267563
5	et	et	CCONJ	_	_	8	cc	_	WordAlignmentBegin=267563|WordAlignmentEnd=267638
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=267638|WordAlignmentEnd=267768
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	WordAlignmentBegin=267768|WordAlignmentEnd=267808
8	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=NotInThisDialect|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=267808|WordAlignmentEnd=267998
9	que	que	SCONJ	_	_	14	mark	_	WordAlignmentBegin=267998|WordAlignmentEnd=268128
10	elle	lui	PRON	_	Case=Nom|Emph=No|Gender=Fem|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	Exponence[Person]=Inherent|WordAlignmentBegin=268128|WordAlignmentEnd=268398
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	WordAlignmentBegin=268398|WordAlignmentEnd=268428
12	peut-être	peut-être	ADV	_	_	14	advmod	_	WordAlignmentBegin=268428|WordAlignmentEnd=268728
13	pas	pas	ADV	_	Polarity=Neg	14	advmod	_	WordAlignmentBegin=268728|WordAlignmentEnd=268838
14	compatible	compatible	ADJ	_	Gender=Fem|Number=Sing	8	csubj	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=268838|WordAlignmentEnd=269258
15	avec	avec	ADP	_	_	22	case	_	SpaceAfter=No|WordAlignmentBegin=269258|WordAlignmentEnd=269608
16	,	,	PUNCT	_	_	22	punct	_	WordAlignmentBegin=269608|WordAlignmentEnd=269608
17	euh	euh	INTJ	_	_	22	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=269608|WordAlignmentEnd=269784
18	,	,	PUNCT	_	_	17	punct	_	WordAlignmentBegin=269784|WordAlignmentEnd=271409
19	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	reparandum	_	HasSpokenGender=OnlySingExceptWithLiaison|SpaceAfter=No|WordAlignmentBegin=271409|WordAlignmentEnd=271526
20	,	,	PUNCT	_	_	19	punct	_	WordAlignmentBegin=271526|WordAlignmentEnd=271526
21	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	22	det	_	WordAlignmentBegin=271526|WordAlignmentEnd=271671
22	vie	vie	NOUN	_	Gender=Fem|Number=Sing	14	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=271671|WordAlignmentEnd=271771
23	de	de	ADP	_	_	24	case	_	WordAlignmentBegin=271771|WordAlignmentEnd=271795
24	famille	famille	NOUN	_	Gender=Fem|Number=Sing	22	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=271795|WordAlignmentEnd=272058
25	par	par	ADP	_	_	26	case	_	WordAlignmentBegin=272058|WordAlignmentEnd=272156
26	exemple	exemple	NOUN	_	Gender=Masc|Number=Sing	8	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No|WordAlignmentBegin=272156|WordAlignmentEnd=272408
27	.	.	PUNCT	_	_	8	punct	_	WordAlignmentBegin=272408|WordAlignmentEnd=272408

~~~


