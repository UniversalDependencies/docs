---
layout: base
title:  'Statistics of amod in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `amod`

This relation is universal.

1452 nodes (5%) are attached to their parents as `amod`.

1058 instances of `amod` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.24724517906336.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (1424; 98% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (9; 1% instances), <tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="fr_partut-pos-X.html">X</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (1; 0% instances).


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
4	son	son	DET	AP	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3|PronType=Prs	3	det	_	_
5	règlement	règlement	NOUN	S	Gender=Fem|Number=Sing	3	obj	_	_
6	intérieur	intérieur	ADJ	A	Gender=Masc|Number=Sing	3	amod	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	Notre	notre	DET	AP	Gender=Masc|Number=Sing|PronType=Prs	2	det	_	_
2	projet	projet	NOUN	S	Gender=Masc|Number=Sing	14	nsubj	_	_
3	d'	de	ADP	E	_	5	case	_	SpaceAfter=No
4	une	un	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Europe	Europe	PROPN	SP	_	2	nmod	_	_
6	tournée	tourné	ADJ	A	Gender=Fem|Number=Sing	5	amod	_	_
7	vers	vers	ADP	E	_	9	case	_	_
8	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	satisfaction	satisfaction	NOUN	S	Gender=Fem|Number=Sing	6	obl	_	_
10	de	de	ADP	E	_	12	case	_	_
11	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	12	det	_	_
12	besoins	besoin	NOUN	S	Gender=Masc|Number=Plur	9	nmod	_	_
13	sociaux	social	ADJ	A	Gender=Masc|Number=Plur	12	amod	_	_
14	vise	viser	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
15	une	un	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	convergence	convergence	NOUN	S	Gender=Fem|Number=Sing	14	obj	_	_
17	par	par	ADP	E	_	19	case	_	_
18	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	haut	haut	NOUN	S	Gender=Masc|Number=Sing	16	nmod	_	_
20	de	de	ADP	E	_	22	case	_	_
21	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	22	det	_	_
22	conditions	condition	NOUN	S	Gender=Fem|Number=Plur	16	nmod	_	_
23	d'	de	ADP	E	_	24	case	_	SpaceAfter=No
24	existence	existence	NOUN	S	Gender=Fem|Number=Sing	22	nmod	_	SpaceAfter=No
25	.	.	PUNCT	FS	_	14	punct	_	_

~~~


