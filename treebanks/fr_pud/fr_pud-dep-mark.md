---
layout: base
title:  'Statistics of mark in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `mark`

This relation is universal.

455 nodes (2%) are attached to their parents as `mark`.

452 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.51428571428571.

The following 15 pairs of parts of speech are connected with `mark`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (247; 54% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (127; 28% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (41; 9% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (12; 3% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (6; 1% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 mark	color:blue
1	Disons	_	VERB	VBC	Mood=Imp|Number=Plur|Person=1|Tense=Pres	0	root	_	_
2	seulement	_	ADV	RB	_	1	advmod	_	_
3	qu’	_	ADP	IN	_	5	mark	_	OrigForm=qu'|SpaceAfter=No
4	il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
5	a	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	ccomp	_	_
6	tort	_	NOUN	NN	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
7	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 mark	color:blue
1	Il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	3	expl:subj	_	_
2	se	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	3	obj	_	_
3	peut	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	que	_	SCONJ	IN	_	7	mark	_	_
5	cela	_	PRON	PDEM	_	7	nsubj	_	_
6	n’	_	ADV	RB	Polarity=Neg	7	advmod	_	OrigForm=n'|SpaceAfter=No
7	ait	_	VERB	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Pres	3	csubj	_	_
8	pas	_	ADV	RB	Polarity=Neg	7	advmod	_	_
9	d’	_	DET	DT	Gender=Fem|Number=Sing	10	det	_	OrigForm=d'|SpaceAfter=No
10	importance	_	NOUN	NN	Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 mark	color:blue
1	C’	_	PRON	PDEM	_	2	expl:subj	_	OrigForm=C'|SpaceAfter=No
2	est	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	parce	_	ADV	IN	_	11	mark	_	_
4	que	_	SCONJ	IN	_	3	fixed	_	_
5	chaque	_	ADJ	JJ	Gender=Masc|Number=Sing	6	amod	_	_
6	miracle	_	NOUN	NN	Gender=Masc|Number=Sing	11	nsubj	_	_
7	et	_	CCONJ	CC	_	9	cc	_	_
8	chaque	_	ADJ	JJ	Gender=Fem|Number=Sing	9	amod	_	_
9	zone	_	NOUN	NN	Gender=Fem|Number=Sing	6	conj	_	_
10	spécialisée	_	ADJ	JJ	Gender=Fem|Number=Sing	9	amod	_	_
11	occupent	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	2	ccomp	_	_
12	un	_	DET	DT	Gender=Masc|Number=Sing	13	det	_	_
13	domaine	_	NOUN	NN	Gender=Masc|Number=Sing	11	obj	_	_
14	entier	_	ADJ	JJ	Gender=Masc|Number=Sing	13	amod	_	SpaceAfter=No
15	.	_	PUNCT	.	_	2	punct	_	_

~~~


