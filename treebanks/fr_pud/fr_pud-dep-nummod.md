---
layout: base
title:  'Statistics of nummod in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `nummod`

This relation is universal.

218 nodes (1%) are attached to their parents as `nummod`.

188 instances of `nummod` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11009174311927.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (159; 73% instances), <tt><a href="fr_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (33; 15% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (18; 8% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (8; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	5000	5000	NUM	CD	_	2	nummod	_	_
2	dollars	dollar	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	_
3	par	par	ADP	IN	_	4	case	_	_
4	personne	personne	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	le	le	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	maximum	maximum	NOUN	NN	Gender=Masc|Number=Sing	2	appos	_	_
8	autorisé	autoriser	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	Les	le	DET	DT	Gender=Fem|Number=Plur	2	det	_	wordform=les
2	sources	source	NOUN	NN	Gender=Fem|Number=Plur	5	nsubj	_	_
3	consultées	consulté	ADJ	JJ	Gender=Fem|Number=Plur	2	amod	_	_
4	ont	avoir	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
5	indiqué	indiquer	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	que	que	SCONJ	IN	_	12	mark	_	_
7	c’	ce	PRON	PDEM	_	12	nsubj	_	SpaceAfter=No|wordform=c'
8	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
9	«	«	PUNCT	``	_	12	punct	_	_
10	100	100	NUM	CD	_	11	nummod	_	SpaceAfter=No
11	%	%	SYM	SYM	_	12	advmod	_	_
12	Cospedal	Cospedal	PROPN	NNP	Gender=Fem|Number=Sing	5	ccomp	_	_
13	»	»	PUNCT	''	_	12	punct	_	SpaceAfter=No
14	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	Philippe	Philippe	PROPN	NNP	Gender=Masc|Number=Sing	4	nsubj	_	_
2	II	II	NUM	CD	_	1	nummod	_	Proper=True|wordform=ii
3	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
4	manifesté	manifester	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	contre	contre	ADP	IN	_	7	case	_	_
6	ses	son	DET	DTP$	Gender=Masc|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	7	det	_	_
7	ennemis	ennemi	NOUN	NN	Gender=Masc|Number=Plur	4	obl	_	_
8	méridionaux	méridional	ADJ	JJ	Gender=Masc|Number=Plur	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	4	punct	_	_

~~~


