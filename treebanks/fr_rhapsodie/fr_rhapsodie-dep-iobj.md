---
layout: base
title:  'Statistics of iobj in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `iobj`

This relation is universal.

189 nodes (0%) are attached to their parents as `iobj`.

181 instances of `iobj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42857142857143.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (185; 98% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 iobj	color:blue
1	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	AlignBegin=23980|AlignEnd=24095|Exponence[Number]=Inherent|Exponence[Person]=Inherent
2	vois	voir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	discourse	_	AlignBegin=24095|AlignEnd=24285|Exponence[Person]=Absent|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	AlignBegin=24285|AlignEnd=24285
4	euh	euh	INTJ	_	_	2	discourse	_	AlignBegin=24285|AlignEnd=24745|SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	AlignBegin=24745|AlignEnd=24745
6	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	14	dislocated:obl	_	AlignBegin=24745|AlignEnd=25095|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	AlignBegin=25095|AlignEnd=25095
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	AlignBegin=25095|AlignEnd=25195|HasSpokenGender=OnlySingExceptWithLiaison
9	fac	fac	NOUN	_	Gender=Fem|Number=Sing	14	dislocated:subj	_	AlignBegin=25195|AlignEnd=25385|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	_	AlignBegin=25385|AlignEnd=25385
11	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	AlignBegin=25385|AlignEnd=25485|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
12	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	14	iobj	_	AlignBegin=25485|AlignEnd=25535|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
13	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:tense	_	AlignBegin=25535|AlignEnd=25565
14	fait	faire	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	AlignBegin=25565|AlignEnd=25685|Exponence[Number]=Absent|PastPartHasSpokenGender=Yes|Tense[denom]=Past
15	beaucoup	beaucoup	ADV	_	_	14	obj	_	AlignBegin=25685|AlignEnd=25885
16	de	de	ADP	_	_	17	case	_	AlignBegin=25885|AlignEnd=25975
17	bien	bien	NOUN	_	Gender=Masc|Number=Sing	15	obl:arg	_	AlignBegin=25975|AlignEnd=26157|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
18	.	.	PUNCT	_	_	14	punct	_	AlignBegin=26157|AlignEnd=26157

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 iobj	color:blue
1	mais	mais	CCONJ	_	_	9	cc	_	AlignBegin=53724|AlignEnd=53849
2	peut-être	peut-être	ADV	_	_	9	advmod	_	AlignBegin=53849|AlignEnd=54329
3	même	même	ADV	_	_	9	advmod	_	AlignBegin=54329|AlignEnd=54509
4	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	AlignBegin=54509|AlignEnd=54769|Exponence[Person]=Inherent
5	n'	ne	ADV	_	Polarity=Neg	9	advmod	_	AlignBegin=54769|AlignEnd=54769|SpaceAfter=No
6	en	en	PRON	_	Person=3|PronType=Prs	9	iobj	_	AlignBegin=54829|AlignEnd=54979|Exponence[Person]=Inherent
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	AlignBegin=54979|AlignEnd=55039
8	pas	pas	ADV	_	Polarity=Neg	9	advmod	_	AlignBegin=55039|AlignEnd=55179
9	séparable	séparable	ADJ	_	Gender=Masc|Number=Sing	0	root	_	AlignBegin=55179|AlignEnd=55799|Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	AlignBegin=55799|AlignEnd=55799

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 iobj	color:blue
1	mais	mais	CCONJ	_	_	15	cc	_	AlignBegin=49780|AlignEnd=49930
2	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	3	det	_	AlignBegin=49930|AlignEnd=50110|HasSpokenGender=OnlySingExceptWithLiaison
3	postes	poste	NOUN	_	Gender=Masc|Number=Plur	15	nsubj	_	AlignBegin=50110|AlignEnd=50400|Exponence[Gender]=Inherent|Exponence[Number]=Absent
4	qu'	que	PRON	_	PronType=Rel	8	obj	_	AlignBegin=50400|AlignEnd=50480|SpaceAfter=No
5	ils	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	12	nsubj	_	AlignBegin=50480|AlignEnd=50560|Exponence[Person]=Inherent
6	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	8	iobj	_	AlignBegin=50560|AlignEnd=50590|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
7	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux:tense	_	AlignBegin=50590|AlignEnd=50660
8	f~	f~	X	_	ExtPos=VERB	12	reparandum	_	AlignBegin=50660|AlignEnd=50757|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	AlignBegin=50757|AlignEnd=50906
10	euh	euh	INTJ	_	_	8	discourse	_	AlignBegin=50906|AlignEnd=51292|SpaceAfter=No
11	,	,	PUNCT	_	_	8	punct	_	AlignBegin=51292|AlignEnd=51292
12	proposés	proposer	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	3	acl:relcl	_	AlignBegin=51292|AlignEnd=51864|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
13	ne	ne	ADV	_	Polarity=Neg	15	advmod	_	AlignBegin=52387|AlignEnd=52631
14	me	moi	PRON	_	Case=Acc|Emph=No|Number=Sing|Person=1|PronType=Prs	15	obj	_	AlignBegin=52631|AlignEnd=52842|Exponence[Number]=Inherent|Exponence[Person]=Inherent
15	plaisaient	plaire	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	AlignBegin=52842|AlignEnd=53242|Exponence[Number]=Absent
16	pas	pas	ADV	_	Polarity=Neg	15	advmod	_	AlignBegin=53242|AlignEnd=53342
17	beaucoup	beaucoup	ADV	_	_	15	advmod	_	AlignBegin=53342|AlignEnd=53674
18	excepté	excepté	CCONJ	_	_	19	cc	_	AlignBegin=53674|AlignEnd=54152
19	Marsabit	Marsabit	PROPN	_	_	3	conj	_	AlignBegin=54152|AlignEnd=54802
20	qui	qui	PRON	_	PronType=Rel	23	nsubj	_	AlignBegin=54802|AlignEnd=54972
21	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	23	cop	_	AlignBegin=54972|AlignEnd=55202
22	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	23	det	_	AlignBegin=55202|AlignEnd=55512|LiaisonAfter=Yes
23	espèce	espèce	NOUN	_	Gender=Fem|Number=Sing	19	acl:relcl	_	AlignBegin=55512|AlignEnd=55992|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes
24	de	de	ADP	_	_	27	reparandum	_	AlignBegin=55992|AlignEnd=56212|SpaceAfter=No
25	,	,	PUNCT	_	_	24	punct	_	AlignBegin=56212|AlignEnd=56212
26	d'	de	ADP	_	_	27	case	_	AlignBegin=56212|AlignEnd=56292|SpaceAfter=No
27	île	île	NOUN	_	Gender=Fem|Number=Sing	23	nmod	_	AlignBegin=56292|AlignEnd=56847|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes
28	dans	dans	ADP	_	_	30	case	_	AlignBegin=57249|AlignEnd=57424
29	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	_	AlignBegin=57424|AlignEnd=57504|HasSpokenGender=OnlySingExceptWithLiaison
30	désert	désert	NOUN	_	Gender=Masc|Number=Sing	41	reparandum	_	AlignBegin=57504|AlignEnd=58114|Exponence[Gender]=Inherent|Exponence[Number]=Absent
31	tout	tout	ADV	_	_	34	advmod	_	AlignBegin=58114|AlignEnd=58294
32	à	à	ADP	_	_	34	case	_	AlignBegin=58294|AlignEnd=58384
33	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	34	det	_	AlignBegin=58294|AlignEnd=58384
34	nord	nord	NOUN	_	Gender=Masc|Number=Sing	30	nmod	_	AlignBegin=58384|AlignEnd=58614|Exponence[Gender]=Inherent|Exponence[Number]=Absent
35	de	de	ADP	_	_	37	case	_	AlignBegin=58614|AlignEnd=58714
36	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	37	det	_	AlignBegin=58614|AlignEnd=58714
37	Kenya	Kenya	PROPN	_	Gender=Masc|Number=Sing	34	nmod	_	AlignBegin=58714|AlignEnd=59144|Exponence[Gender]=Inherent|SpaceAfter=No
38	,	,	PUNCT	_	_	30	punct	_	AlignBegin=59144|AlignEnd=59144
39	dans	dans	ADP	_	_	41	case	_	AlignBegin=59144|AlignEnd=59364
40	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	41	det	_	AlignBegin=59364|AlignEnd=59434|HasSpokenGender=OnlySingExceptWithLiaison
41	désert	désert	NOUN	_	Gender=Masc|Number=Sing	27	nmod	_	AlignBegin=59434|AlignEnd=59824|Exponence[Gender]=Inherent|Exponence[Number]=Absent
42	de	de	ADP	_	_	44	case	_	AlignBegin=59824|AlignEnd=59914
43	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	44	det	_	AlignBegin=59824|AlignEnd=59914
44	Kenya	Kenya	PROPN	_	Gender=Masc|Number=Sing	41	nmod	_	AlignBegin=59914|AlignEnd=60294|Exponence[Gender]=Inherent|SpaceAfter=No
45	.	.	PUNCT	_	_	19	punct	_	AlignBegin=60294|AlignEnd=60294

~~~


