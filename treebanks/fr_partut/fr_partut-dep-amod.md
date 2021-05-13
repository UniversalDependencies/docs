---
layout: base
title:  'Statistics of amod in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `amod`

This relation is universal.

1450 nodes (5%) are attached to their parents as `amod`.

1057 instances of `amod` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.24827586206897.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (1416; 98% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (9; 1% instances), <tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="fr_partut-pos-X.html">X</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Cher	cher	ADJ	A	Gender=Masc|Number=Sing	2	amod	_	_
2	collègue	collègue	NOUN	S	Gender=Masc|Number=Sing	4	vocative	_	_
3	nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
4	allons	aller	VERB	VA	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	vérifier	vérifier	VERB	V	VerbForm=Inf	4	xcomp	_	_
6	tout	tout	DET	T	Gender=Masc|Number=Sing|PronType=Ind	7	det	_	_
7	cela	cela	PRON	PD	Number=Sing|Person=3|PronType=Dem	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 amod	color:blue
1	Le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	comité	comité	NOUN	S	Gender=Masc|Number=Sing	3	nsubj	_	_
3	adopte	adopter	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	son	son	DET	AP	Gender=Masc|Number=Sing|PronType=Prs	3	det	_	_
5	règlement	règlement	NOUN	S	Gender=Fem|Number=Sing	3	obj	_	_
6	intérieur	intérieur	ADJ	A	Gender=Masc|Number=Sing	3	amod	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 amod	color:blue
1	Le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	taux	taux	NOUN	S	Gender=Masc	19	nsubj	_	_
3	de	de	ADP	E	_	4	case	_	_
4	mortalité	mortalité	NOUN	S	Gender=Fem|Number=Sing	2	nmod	_	_
5	chez	chez	ADP	E	_	7	case	_	_
6	ces	ce	DET	DD	Number=Plur|PronType=Dem	7	det	_	_
7	dauphins	dauphin	NOUN	S	Gender=Masc|Number=Plur	4	nmod	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	2	punct	_	_
9	pour	pour	ADP	E	_	12	case	_	_
10	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
11	premier	premier	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	12	amod	_	_
12	petit	petit	ADJ	A	Gender=Masc|Number=Sing	2	nmod	_	_
13	de	de	ADP	E	_	15	case	_	_
14	chaque	chaque	DET	DI	Number=Sing|PronType=Ind	15	det	_	_
15	femelle	femelle	NOUN	S	Gender=Fem|Number=Sing	12	obl	_	SpaceAfter=No
16	,	,	PUNCT	FF	_	2	punct	_	_
17	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	_
18	de	de	ADP	E	_	19	case	_	_
19	60	60	NUM	N	NumType=Card	0	root	_	_
20	à	à	ADP	E	_	22	case	_	_
21	80	80	NUM	N	NumType=Card	22	nummod	_	_
22	pourcent	pourcent	NOUN	S	Gender=Masc|Number=Sing	19	nmod	_	SpaceAfter=No
23	.	.	PUNCT	FS	_	19	punct	_	_

~~~


