---
layout: base
title:  'Statistics of orphan in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `orphan`

This relation is universal.

6 nodes (0%) are attached to their parents as `orphan`.

6 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.33333333333333.

The following 2 pairs of parts of speech are connected with `orphan`: <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (4; 67% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (2; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 orphan	color:blue
1	Alle	all	DET	PIDAT	Case=Nom|Number=Plur|Person=3	2	det	_	_
2	Schulen	Schule	NOUN	NN	Gender=Fem|Number=Plur|Person=3	0	root	_	_
3	an	an	ADP	APPR	AdpType=Prep|Case=Acc	5	case	_	_
4	das	der	DET	ART	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	Netz	Netz	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing|Person=3	2	orphan	_	_
6	und	und	CCONJ	KON	_	8	cc	_	_
7	jedem	jeder	DET	PIAT	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Ind,Neg,Tot	8	det	_	_
8	Schüler	Schüler	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	conj	_	_
9	einen	einen	DET	ART	Case=Acc|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Laptop	Laptop	NOUN	NN	Gender=Masc|Number=Sing|Person=3	8	orphan	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 orphan	color:blue
1	Die	Die	DET	ART	Case=Nom|Number=Plur|PronType=Art	2	det	_	_
2	Anwenderzahlen	Zahl	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur|Person=3	3	nsubj	_	_
3	liegen	liegen	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	nach	nach	ADV	ADV	_	3	advmod	_	_
5	wie	wie	CCONJ	KOKOM	ConjType=Comp	6	mark	_	_
6	vor	vor	ADV	ADV	_	4	advcl	_	_
7	unter	unter	ADP	APPR	AdpType=Prep|Case=Dat	9	case	_	_
8	der	der	DET	ART	Case=Dat|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	100.000-Marke	Marke	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing|Person=3	3	obl	_	_
10	,	,	PUNCT	$,	PunctType=Comm	16	punct	_	_
11	während	während	SCONJ	KOUS	_	16	mark	_	_
12	T-Online	T-Online	PROPN	NE	Case=Nom|Number=Sing|Person=3	16	nsubj	_	_
13	1,7	1,7	NUM	CARD	Number=Plur|NumType=Card|Person=3	14	nummod	_	_
14	Millionen	Million	NOUN	NN	Gender=Fem|Number=Plur|Person=3	15	nummod	_	_
15	Teilnehmer	Teilnehmer	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	16	obj	_	_
16	zählt	zählen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
17	,	,	PUNCT	$,	PunctType=Comm	16	punct	_	_
18	AOL	AOL	PROPN	NE	Case=Nom|Number=Sing|Person=3	16	conj	_	_
19	400.000	400.000	NUM	CARD	Number=Plur|NumType=Card|Person=3	18	orphan	_	_
20	und	und	CCONJ	KON	_	21	cc	_	_
21	CompuServe	CompuServe	PROPN	NE	Person=3	16	conj	_	_
22	280.000	280.000	NUM	CARD	Number=Plur|NumType=Card|Person=3	21	orphan	_	_
23	.	.	PUNCT	$.	PunctType=Peri	3	punct	_	_

~~~


