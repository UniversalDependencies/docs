---
layout: base
title:  'Statistics of mark in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `mark`

This relation is universal.

466 nodes (2%) are attached to their parents as `mark`.

463 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.49570815450644.

The following 15 pairs of parts of speech are connected with `mark`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (253; 54% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (129; 28% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (41; 9% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (13; 3% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (8; 2% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (6; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (5; 1% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 mark	color:blue
1	Disons	dire	VERB	VBC	Mood=Imp|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	wordform=disons
2	seulement	seulement	ADV	RB	_	1	advmod	_	_
3	qu’	que	ADP	IN	_	5	mark	_	SpaceAfter=No|wordform=qu'
4	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	a	avoir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
6	tort	tort	NOUN	NN	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 mark	color:blue
1	Il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl:subj	_	wordform=il
2	se	se	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	peut	pouvoir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	IN	_	7	mark	_	_
5	cela	cela	PRON	PDEM	PronType=Dem	7	nsubj	_	_
6	n’	ne	ADV	RB	Polarity=Neg	7	advmod	_	SpaceAfter=No|wordform=n'
7	ait	avoir	VERB	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	csubj	_	_
8	pas	pas	ADV	RB	Polarity=Neg	7	advmod	_	_
9	d’	de	DET	DT	Gender=Fem|Number=Sing	10	det	_	SpaceAfter=No|wordform=d'
10	importance	importance	NOUN	NN	Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 mark	color:blue
1	C’	ce	PRON	PDEM	PronType=Dem	2	expl:subj	_	SpaceAfter=No|wordform=c'
2	est	être	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	parce	parce	ADV	IN	_	11	mark	_	_
4	que	que	SCONJ	IN	_	3	fixed	_	_
5	chaque	chaque	ADJ	JJ	Gender=Masc|Number=Sing	6	amod	_	_
6	miracle	miracle	NOUN	NN	Gender=Masc|Number=Sing	11	nsubj	_	_
7	et	et	CCONJ	CC	_	9	cc	_	_
8	chaque	chaque	ADJ	JJ	Gender=Fem|Number=Sing	9	amod	_	_
9	zone	zone	NOUN	NN	Gender=Fem|Number=Sing	6	conj	_	_
10	spécialisée	spécialisé	ADJ	JJ	Gender=Fem|Number=Sing	9	amod	_	_
11	occupent	occuper	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
12	un	un	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	domaine	domaine	NOUN	NN	Gender=Masc|Number=Sing	11	obj	_	_
14	entier	entier	ADJ	JJ	Gender=Masc|Number=Sing	13	amod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


