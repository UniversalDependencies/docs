---
layout: base
title:  'Statistics of xcomp in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `xcomp`

This relation is universal.

460 nodes (2%) are attached to their parents as `xcomp`.

460 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.19347826086957.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (362; 79% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (75; 16% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (16; 3% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	créer	créer	VERB	V	VerbForm=Inf	0	root	_	_
2	et	et	CCONJ	CC	_	3	cc	_	_
3	reproduire	reproduire	VERB	V	VerbForm=Inf	1	conj	_	_
4	des	un	DET	RI	Definite=Ind|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
5	oeuvres	œuvre	NOUN	S	Gender=Fem|Number=Plur	1	obj	_	_
6	dites	dire	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	5	acl	_	_
7	derivées	dérivé	ADJ	A	Gender=Fem|Number=Plur	6	xcomp	_	SpaceAfter=No
8	;	;	PUNCT	FC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 xcomp	color:blue
1	Prototaxites	Prototaxites	PROPN	SP	_	5	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	couché	coucher	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	acl	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	mesurait	mesurer	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
6	environ	environ	ADV	B	_	5	advmod	_	_
7	90	90	NUM	N	NumType=Card	8	nummod	_	_
8	cm	cm	NOUN	S	Gender=Fem|Number=Sing	5	xcomp	_	_
9	de	de	ADP	E	_	10	case	_	_
10	hauteur	hauteur	NOUN	S	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	5	punct	_	_

~~~


