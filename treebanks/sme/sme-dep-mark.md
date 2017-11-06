---
layout: base
title:  'Statistics of mark in UD_North_Sami'
udver: '2'
---

## Treebank Statistics: UD_North_Sami: Relations: `mark`

This relation is universal.

248 nodes (2%) are attached to their parents as `mark`.

248 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.65725806451613.

The following 9 pairs of parts of speech are connected with `mark`: <tt><a href="sme-pos-VERB.html">VERB</a></tt>-<tt><a href="sme-pos-SCONJ.html">SCONJ</a></tt> (183; 74% instances), <tt><a href="sme-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme-pos-SCONJ.html">SCONJ</a></tt> (28; 11% instances), <tt><a href="sme-pos-VERB.html">VERB</a></tt>-<tt><a href="sme-pos-CCONJ.html">CCONJ</a></tt> (18; 7% instances), <tt><a href="sme-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sme-pos-SCONJ.html">SCONJ</a></tt> (11; 4% instances), <tt><a href="sme-pos-PRON.html">PRON</a></tt>-<tt><a href="sme-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), <tt><a href="sme-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sme-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="sme-pos-ADV.html">ADV</a></tt>-<tt><a href="sme-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="sme-pos-NUM.html">NUM</a></tt>-<tt><a href="sme-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="sme-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sme-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
1	Lea	leat	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	meara	mearra	NOUN	N	Case=Gen|Number=Sing	1	obl	_	_
3	láhkai	láhkai	ADP	Po	_	2	case	_	_
4	go	go	SCONJ	CS	_	6	mark	_	_
5	das	dat	PRON	Pron	Case=Loc|Number=Sing|PronType=Dem	6	obl	_	_
6	oidnojit	oidnot	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	advcl	_	_
7	bárut	bárru	NOUN	N	Case=Nom|Number=Plur	6	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 mark	color:blue
1	De	de	ADV	Adv	_	3	advmod	_	_
2	farao	farao	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	_
3	gohccái	gohccát	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	ja	ja	CCONJ	CC	_	3	cc	_	_
5	fuomášii	fuomášit	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	conj	_	_
6	ahte	ahte	SCONJ	CS	_	9	mark	_	_
7	dat	dat	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	9	nsubj	_	_
8	lei	leat	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	cop	_	_
9	niehku	niehku	NOUN	N	Case=Nom|Number=Sing	5	advcl	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 mark	color:blue
1	Ja	ja	CCONJ	CC	_	4	mark	_	_
2	jos	jos	SCONJ	CS	_	1	conj	_	_
3	meahccái	meahcci	NOUN	N	Case=Ill|Number=Sing	4	obl	_	_
4	šaddá	šaddat	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	ja	ja	CCONJ	CC	_	8	mark	_	_
6	jos	jos	SCONJ	CS	_	5	conj	_	_
7	iige	ii	VERB	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	8	aux:neg	_	_
8	oaččo	oažžut	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	4	advcl	_	_
9	dola	dolla	NOUN	N	Case=Acc|Number=Sing	8	obj	_	SpaceAfter=No
10	,	,	PUNCT	CLB	_	4	punct	_	_
11	de	de	ADV	Adv	_	13	advmod	_	_
12	gale	gale	ADV	Adv	_	13	advmod	_	_
13	galbmo	galbmot	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	_
14	jámas	jámas	ADV	Adv	_	13	advmod	_	SpaceAfter=No
15	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


