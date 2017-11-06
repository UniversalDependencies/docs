---
layout: base
title:  'Statistics of obj in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `obj`

This relation is universal.

1095 nodes (4%) are attached to their parents as `obj`.

886 instances of `obj` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.17442922374429.

The following 11 pairs of parts of speech are connected with `obj`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (806; 74% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (209; 19% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (48; 4% instances), <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (11; 1% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-SYM.html">SYM</a></tt> (8; 1% instances), <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obj	color:blue
1	Notre	_	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|PronType=Prs	2	nmod:poss	_	_
2	pays	_	NOUN	NN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	n'	_	ADV	RB	Polarity=Neg	4	advmod	_	SpaceAfter=No
4	a	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	pas	_	ADV	RB	Polarity=Neg	4	advmod	_	_
6	besoin	_	NOUN	NN	Gender=Masc|Number=Sing	4	obj	_	_
7	de	_	ADP	IN	_	8	case	_	_
8	ça	_	PRON	PDEM	_	4	obl	_	SpaceAfter=No
9	,	_	PUNCT	,	_	11	punct	_	_
10	mes	_	PRON	DTP$	Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|PronType=Prs	11	nmod:poss	_	_
11	amis	_	NOUN	NN	Gender=Masc|Number=Plur	4	vocative	_	SpaceAfter=No
12	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obj	color:blue
1	Tout	_	DET	PDT	Gender=Masc|Number=Sing	3	det:predet	_	_
2	le	_	DET	DT	Gender=Masc|Number=Sing	3	det	_	_
3	monde	_	NOUN	NN	Gender=Masc|Number=Sing	5	nsubj	_	_
4	ne	_	ADV	RB	Polarity=Neg	5	advmod	_	_
5	peut	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
6	pas	_	ADV	RB	Polarity=Neg	5	advmod	_	_
7	s'	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	8	obj	_	SpaceAfter=No
8	élever	_	VERB	VB	_	5	xcomp	_	_
9	à	à	ADP	IN	_	13	case	_	_
10	le	le	DET	_	_	9	fixed	_	_
11	dessus	_	X	GW	_	9	fixed	_	_
12	de	_	ADP	IN	_	9	fixed	_	_
13	ça	_	PRON	PDEM	_	8	obl	_	SpaceAfter=No
14	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obj	color:blue
1	Et	_	CCONJ	CC	_	6	cc	_	_
2	bien	_	ADV	RB	_	6	advmod	_	_
3	sûr	_	ADJ	JJ	Gender=Masc|Number=Sing	2	fixed	_	_
4	il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	6	expl	_	_
5	y	_	PRON	PRP	Person=3	6	advmod	_	_
6	a	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
7	Bob	_	PROPN	NNP	Gender=Masc|Number=Sing	6	obj	_	SpaceAfter=No
8	,	_	PUNCT	,	_	10	punct	_	_
9	toujours	_	ADV	RB	_	10	advmod	_	_
10	divertissant	_	ADJ	JJ	Gender=Masc|Number=Sing	7	amod	_	SpaceAfter=No
11	.	_	PUNCT	.	_	6	punct	_	_

~~~


