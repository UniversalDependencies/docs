---
layout: base
title:  'Statistics of mark in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `mark`

This relation is universal.

601 nodes (2%) are attached to their parents as `mark`.

598 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.08818635607321.

The following 13 pairs of parts of speech are connected with `mark`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (345; 57% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (174; 29% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (35; 6% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (15; 2% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (9; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (8; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 mark	color:blue
1	Disons	dire	VERB	VBC	Mood=Imp|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	wordform=disons
2	seulement	seulement	ADV	RB	_	1	advmod	_	_
3	qu'	que	ADP	IN	_	5	mark	_	SpaceAfter=No
4	il	lui	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	a	avoir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
6	tort	tort	NOUN	NN	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 mark	color:blue
1	Je	moi	PRON	PRP	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	wordform=je
2	me	moi	PRON	PRP	Number=Sing|Person=1|PronType=Prs|Reflex=Yes	3	expl:pv	_	_
3	demande	demander	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	également	également	ADV	RB	_	3	advmod	_	_
5	si	si	SCONJ	IN	_	10	mark	_	_
6	la	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Coupe	coupe	NOUN	NN	Gender=Fem|Number=Sing	10	nsubj	_	Proper=True|wordform=coupe
8	Davis	Davis	PROPN	NNP	Gender=Masc|Number=Sing	7	appos	_	_
9	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	_
10	joué	jouer	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	ccomp	_	_
11	un	un	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	rôle	rôle	NOUN	NN	Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 mark	color:blue
1	C'	ce	PRON	PDEM	PronType=Dem	2	expl:subj	_	SpaceAfter=No|wordform=c'
2	est	être	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	parce	parce	ADV	IN	ExtPos=SCONJ	11	mark	_	_
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


