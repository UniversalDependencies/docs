---
layout: base
title:  'Statistics of root in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `root`

This relation is universal.

1000 nodes (4%) are attached to their parents as `root`.

1000 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.647.

The following 7 pairs of parts of speech are connected with `root`: -<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (857; 86% instances), -<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (76; 8% instances), -<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (57; 6% instances), -<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (5; 1% instances), -<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), -<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), -<tt><a href="fr_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	C'	_	PRON	PDEM	_	2	nsubj	_	SpaceAfter=No
2	est	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	parfois	_	ADV	RB	_	2	advmod	_	_
4	comme	_	ADP	IN	_	7	case	_	_
5	un	_	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
6	super	_	ADJ	JJ	Gender=Masc|Number=Sing	7	amod	_	_
7	pouvoir	_	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
8	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	5000	_	NUM	CD	_	2	nummod	_	_
2	dollars	_	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	_
3	par	_	ADP	IN	_	4	case	_	_
4	personne	_	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	_	PUNCT	,	_	7	punct	_	_
6	le	_	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	maximum	_	NOUN	NN	Gender=Masc|Number=Sing	2	appos	_	_
8	autorisé	_	VERB	VBN	Gender=Masc|Number=Sing|VerbForm=Part	7	acl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 15 root	color:blue
1	Ce	_	PRON	PDEM	_	15	nsubj	_	_
2	qu'	_	PRON	WP	_	4	obj	_	SpaceAfter=No
3	elle	_	PRON	PRP	Gender=Fem|Number=Sing|Person=3	4	nsubj	_	_
4	dit	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	acl:relcl	_	_
5	et	_	CCONJ	CC	_	6	cc	_	_
6	ce	_	PRON	PDEM	_	1	conj	_	_
7	qu'	_	PRON	WP	_	9	obj	_	SpaceAfter=No
8	elle	_	PRON	PRP	Gender=Fem|Number=Sing|Person=3	9	nsubj	_	_
9	fait	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	acl:relcl	_	SpaceAfter=No
10	,	_	PUNCT	,	_	11	punct	_	_
11	réellement	_	ADV	RB	_	15	advmod	_	SpaceAfter=No
12	,	_	PUNCT	,	_	11	punct	_	_
13	c'	_	PRON	PDEM	_	15	expl:subj	_	SpaceAfter=No
14	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	15	cop	_	_
15	incroyable	_	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
16	.	_	PUNCT	.	_	15	punct	_	_

~~~


