---
layout: base
title:  'Statistics of iobj in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `iobj`

This relation is universal.

190 nodes (0%) are attached to their parents as `iobj`.

183 instances of `iobj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.43157894736842.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (186; 98% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 iobj	color:blue
1	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=23980|WordAlignmentEnd=24095
2	vois	voir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	discourse	_	Exponence[Person]=Absent|SpaceAfter=No|WordAlignmentBegin=24095|WordAlignmentEnd=24285
3	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=24285|WordAlignmentEnd=24285
4	euh	euh	INTJ	_	_	2	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=24285|WordAlignmentEnd=24745
5	,	,	PUNCT	_	_	2	punct	_	WordAlignmentBegin=24745|WordAlignmentEnd=24745
6	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	14	dislocated:obl	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=24745|WordAlignmentEnd=25095
7	,	,	PUNCT	_	_	6	punct	_	WordAlignmentBegin=25095|WordAlignmentEnd=25095
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=25095|WordAlignmentEnd=25195
9	fac	fac	NOUN	_	Gender=Fem|Number=Sing	14	dislocated:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=25195|WordAlignmentEnd=25385
10	,	,	PUNCT	_	_	9	punct	_	WordAlignmentBegin=25385|WordAlignmentEnd=25385
11	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=25385|WordAlignmentEnd=25485
12	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	14	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=25485|WordAlignmentEnd=25535
13	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:tense	_	WordAlignmentBegin=25535|WordAlignmentEnd=25565
14	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Exponence[Number]=Absent|PastPartHasSpokenGender=Yes|Status[Tense]=Denom|WordAlignmentBegin=25565|WordAlignmentEnd=25685
15	beaucoup	beaucoup	ADV	_	_	14	obj	_	WordAlignmentBegin=25685|WordAlignmentEnd=25885
16	de	de	ADP	_	_	17	case	_	WordAlignmentBegin=25885|WordAlignmentEnd=25975
17	bien	bien	NOUN	_	Gender=Masc|Number=Sing	15	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=25975|WordAlignmentEnd=26157
18	.	.	PUNCT	_	_	14	punct	_	WordAlignmentBegin=26157|WordAlignmentEnd=26157

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 iobj	color:blue
1	mais	mais	CCONJ	_	_	9	cc	_	WordAlignmentBegin=53724|WordAlignmentEnd=53849
2	peut-être	peut-être	ADV	_	_	9	advmod	_	WordAlignmentBegin=53849|WordAlignmentEnd=54329
3	même	même	ADV	_	_	9	advmod	_	WordAlignmentBegin=54329|WordAlignmentEnd=54509
4	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	Exponence[Person]=Inherent|WordAlignmentBegin=54509|WordAlignmentEnd=54769
5	n'	ne	ADV	_	Polarity=Neg	9	advmod	_	SpaceAfter=No|WordAlignmentBegin=54769|WordAlignmentEnd=54769
6	en	en	PRON	_	Person=3|PronType=Prs	9	iobj	_	Exponence[Person]=Inherent|WordAlignmentBegin=54829|WordAlignmentEnd=54979
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	WordAlignmentBegin=54979|WordAlignmentEnd=55039
8	pas	pas	ADV	_	Polarity=Neg	9	advmod	_	WordAlignmentBegin=55039|WordAlignmentEnd=55179
9	séparable	séparable	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No|WordAlignmentBegin=55179|WordAlignmentEnd=55799
10	.	.	PUNCT	_	_	9	punct	_	WordAlignmentBegin=55799|WordAlignmentEnd=55799

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 iobj	color:blue
1	mais	mais	CCONJ	_	_	15	cc	_	WordAlignmentBegin=49780|WordAlignmentEnd=49930
2	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	3	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=49930|WordAlignmentEnd=50110
3	postes	poste	NOUN	_	Gender=Masc|Number=Plur	15	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=50110|WordAlignmentEnd=50400
4	qu'	que	PRON	_	PronType=Rel	8	obj	_	SpaceAfter=No|WordAlignmentBegin=50400|WordAlignmentEnd=50480
5	ils	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	12	nsubj	_	Exponence[Person]=Inherent|WordAlignmentBegin=50480|WordAlignmentEnd=50560
6	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	8	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=50560|WordAlignmentEnd=50590
7	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux:tense	_	WordAlignmentBegin=50590|WordAlignmentEnd=50660
8	f~	f~	X	_	ExtPos=VERB	12	reparandum	_	SpaceAfter=No|WordAlignmentBegin=50660|WordAlignmentEnd=50757
9	,	,	PUNCT	_	_	10	punct	_	WordAlignmentBegin=50757|WordAlignmentEnd=50906
10	euh	euh	INTJ	_	_	8	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=50906|WordAlignmentEnd=51292
11	,	,	PUNCT	_	_	8	punct	_	WordAlignmentBegin=51292|WordAlignmentEnd=51292
12	proposés	proposer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	3	acl:relcl	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=51292|WordAlignmentEnd=51864
13	ne	ne	ADV	_	Polarity=Neg	15	advmod	_	WordAlignmentBegin=52387|WordAlignmentEnd=52631
14	me	moi	PRON	_	Case=Acc|Emph=No|Number=Sing|Person=1|PronType=Prs	15	obj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=52631|WordAlignmentEnd=52842
15	plaisaient	plaire	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	Exponence[Number]=Absent|WordAlignmentBegin=52842|WordAlignmentEnd=53242
16	pas	pas	ADV	_	Polarity=Neg	15	advmod	_	WordAlignmentBegin=53242|WordAlignmentEnd=53342
17	beaucoup	beaucoup	ADV	_	_	15	advmod	_	WordAlignmentBegin=53342|WordAlignmentEnd=53674
18	excepté	excepté	CCONJ	_	_	19	cc	_	WordAlignmentBegin=53674|WordAlignmentEnd=54152
19	Marsabit	Marsabit	PROPN	_	_	3	conj	_	WordAlignmentBegin=54152|WordAlignmentEnd=54802
20	qui	qui	PRON	_	PronType=Rel	23	nsubj	_	WordAlignmentBegin=54802|WordAlignmentEnd=54972
21	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	23	cop	_	WordAlignmentBegin=54972|WordAlignmentEnd=55202
22	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	23	det	_	LiaisonAfter=Yes|WordAlignmentBegin=55202|WordAlignmentEnd=55512
23	espèce	espèce	NOUN	_	Gender=Fem|Number=Sing	19	acl:relcl	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=55512|WordAlignmentEnd=55992
24	de	de	ADP	_	_	27	reparandum	_	SpaceAfter=No|WordAlignmentBegin=55992|WordAlignmentEnd=56212
25	,	,	PUNCT	_	_	24	punct	_	WordAlignmentBegin=56212|WordAlignmentEnd=56212
26	d'	de	ADP	_	_	27	case	_	SpaceAfter=No|WordAlignmentBegin=56212|WordAlignmentEnd=56292
27	île	île	NOUN	_	Gender=Fem|Number=Sing	23	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=56292|WordAlignmentEnd=56847
28	dans	dans	ADP	_	_	30	case	_	WordAlignmentBegin=57249|WordAlignmentEnd=57424
29	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=57424|WordAlignmentEnd=57504
30	désert	désert	NOUN	_	Gender=Masc|Number=Sing	27	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=57504|WordAlignmentEnd=58114
31	tout	tout	ADV	_	_	34	advmod	_	WordAlignmentBegin=58114|WordAlignmentEnd=58294
32	à	à	ADP	_	_	34	case	_	WordAlignmentBegin=58294|WordAlignmentEnd=58384
33	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	34	det	_	_
34	nord	nord	NOUN	_	Gender=Masc|Number=Sing	30	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=58384|WordAlignmentEnd=58614
35	de	de	ADP	_	_	37	case	_	WordAlignmentBegin=58614|WordAlignmentEnd=58714
36	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	37	det	_	_
37	Kenya	Kenya	PROPN	_	Gender=Masc|Number=Sing	34	nmod	_	Exponence[Gender]=Inherent|SpaceAfter=No|WordAlignmentBegin=58714|WordAlignmentEnd=59144
38	,	,	PUNCT	_	_	41	punct	_	WordAlignmentBegin=59144|WordAlignmentEnd=59144
39	dans	dans	ADP	_	_	41	case	_	WordAlignmentBegin=59144|WordAlignmentEnd=59364
40	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	41	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=59364|WordAlignmentEnd=59434
41	désert	désert	NOUN	_	Gender=Masc|Number=Sing	30	conj:reform	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=59434|WordAlignmentEnd=59824
42	de	de	ADP	_	_	44	case	_	WordAlignmentBegin=59824|WordAlignmentEnd=59914
43	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	44	det	_	_
44	Kenya	Kenya	PROPN	_	Gender=Masc|Number=Sing	41	nmod	_	Exponence[Gender]=Inherent|SpaceAfter=No|WordAlignmentBegin=59914|WordAlignmentEnd=60294
45	.	.	PUNCT	_	_	19	punct	_	WordAlignmentBegin=60294|WordAlignmentEnd=60294

~~~


