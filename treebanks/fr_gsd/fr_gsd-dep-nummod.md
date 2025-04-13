---
layout: base
title:  'Statistics of nummod in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `nummod`

This relation is universal.

3639 nodes (1%) are attached to their parents as `nummod`.

3633 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09563066776587.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (3127; 86% instances), <tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (402; 11% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (43; 1% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (39; 1% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (15; 0% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nummod	color:blue
1	Il	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	wordform=il
2	ne	ne	ADV	_	Polarity=Neg	4	advmod	_	_
3	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	cop	_	_
4	présent	présent	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
5	que	que	ADV	_	Polarity=Neg	10	advmod	_	_
6	durant	durant	ADP	_	_	10	case	_	_
7	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
8	10	10	NUM	_	Number=Plur	10	nummod	_	_
9	premières	premier	ADJ	_	Gender=Fem|Number=Plur	10	amod	_	_
10	parties	partie	NOUN	_	Gender=Fem|Number=Plur	4	obl:mod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	wordform=ce
2	taux	taux	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	atteint	atteindre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	même	même	ADV	_	_	3	advmod	_	_
5	50	50	NUM	_	Number=Plur	6	nummod	_	SpaceAfter=No
6	%	%	SYM	_	ExtPos=NOUN|Number=Plur	3	obj	_	_
7	dans	dans	ADP	_	_	9	case	_	_
8	certains	certain	DET	_	Gender=Masc|Number=Plur|PronType=Ind	9	det	_	_
9	centres	centre	NOUN	_	Gender=Masc|Number=Plur	3	obl:mod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	wordform=la
2	séance	séance	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	commence	commencer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	vers	vers	ADP	_	_	6	case	_	_
5	22	22	NUM	_	Number=Plur	6	nummod	_	SpaceAfter=No
6	h	h	NUM	_	Number=Plur	3	obl:mod	_	SpaceAfter=No|wordform=22h00
7	00	00	NUM	_	Number=Plur	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


