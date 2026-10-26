---
layout: base
title:  'Statistics of obj in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `obj`

This relation is universal.
There are 1 language-specific subtypes of `obj`: <tt><a href="fr_partut-dep-obj-agent.html">obj:agent</a></tt>.

1081 nodes (4%) are attached to their parents as `obj`.

918 instances of `obj` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.41350601295097.

The following 13 pairs of parts of speech are connected with `obj`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (859; 79% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (177; 16% instances), <tt><a href="fr_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (17; 2% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt> (11; 1% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="fr_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_partut-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obj	color:blue
1	Je	moi	PRON	PE	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	voudrais	vouloir	VERB	VM	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	encore	encore	ADV	B	_	4	advmod	_	_
4	aborder	aborder	VERB	V	VerbForm=Inf	2	xcomp	_	_
5	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	dernier	dernier	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	7	amod	_	_
7	point	point	NOUN	S	Gender=Masc|Number=Sing	4	obj	_	_
8	:	:	PUNCT	FC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obj	color:blue
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
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 15 obj	color:blue
1	Elle	lui	PRON	PE	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	contenait	contenir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	200	200	NUM	N	NumType=Card	8	nummod	_	_
4	à	à	ADP	E	_	5	case	_	_
5	300	300	NUM	N	NumType=Card	3	nummod	_	_
6	à	à	ADP	E	_	7	case	_	_
7	400	400	NUM	N	NumType=Card	5	nummod	_	_
8	fois	fois	NOUN	S	Gender=Fem|Number=Plur	9	nmod	_	_
9	plus	plus	ADV	B	_	2	advmod	_	_
10	de	de	ADP	E	_	11	case	_	_
11	produits	produit	NOUN	S	Gender=Masc|Number=Plur	9	obl:arg	_	_
12	toxiques	toxique	ADJ	A	Number=Plur	11	amod	_	_
13	que	que	ADP	E	_	15	case	_	_
14	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	15	det	_	_
15	taux	taux	NOUN	S	Gender=Masc|Number=Plur	9	obj	_	_
16	autorisés	autoriser	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	15	acl	_	_
17	par	par	ADP	E	_	19	case	_	_
18	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	EPA	EPA	PROPN	SP	_	16	obl:agent	_	SpaceAfter=No
20	.	.	PUNCT	FS	_	2	punct	_	_

~~~


