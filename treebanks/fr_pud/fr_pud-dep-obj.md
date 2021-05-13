---
layout: base
title:  'Statistics of obj in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `obj`

This relation is universal.
There are 1 language-specific subtypes of `obj`: <tt><a href="fr_pud-dep-obj-agent.html">obj:agent</a></tt>.

1082 nodes (4%) are attached to their parents as `obj`.

874 instances of `obj` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.17744916820702.

The following 7 pairs of parts of speech are connected with `obj`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (799; 74% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (221; 20% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (49; 5% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-SYM.html">SYM</a></tt> (8; 1% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obj	color:blue
1	Notre	son	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	2	det	_	wordform=notre
2	pays	pays	NOUN	NN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	n'	ne	ADV	RB	Polarity=Neg	4	advmod	_	SpaceAfter=No
4	a	avoir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	pas	pas	ADV	RB	Polarity=Neg	4	advmod	_	_
6	besoin	besoin	NOUN	NN	Gender=Masc|Number=Sing	4	obj	_	_
7	de	de	ADP	IN	_	8	case	_	_
8	ça	ça	PRON	PDEM	PronType=Dem	4	obl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	11	punct	_	_
10	mes	son	DET	DTP$	Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	11	det	_	_
11	amis	ami	NOUN	NN	Gender=Masc|Number=Plur	4	vocative	_	SpaceAfter=No
12	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obj	color:blue
1	Tout	tout	ADJ	PDT	Gender=Masc|Number=Sing	3	amod	_	wordform=tout
2	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	monde	monde	NOUN	NN	Gender=Masc|Number=Sing	5	nsubj	_	_
4	ne	ne	ADV	RB	Polarity=Neg	5	advmod	_	_
5	peut	pouvoir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	pas	pas	ADV	RB	Polarity=Neg	5	advmod	_	_
7	s'	se	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obj	_	SpaceAfter=No
8	élever	élever	VERB	VB	VerbForm=Inf	5	xcomp	_	_
9	à	à	ADP	IN	_	13	case	_	_
10	le	le	DET	_	Definite=Def|PronType=Art	9	fixed	_	_
11	dessus	dessus	X	GW	_	9	fixed	_	_
12	de	de	ADP	IN	_	9	fixed	_	_
13	ça	ça	PRON	PDEM	PronType=Dem	8	obl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obj	color:blue
1	Et	et	CCONJ	CC	_	6	cc	_	wordform=et
2	bien	bien	ADV	RB	_	6	advmod	_	_
3	sûr	sûr	ADJ	JJ	Gender=Masc|Number=Sing	2	fixed	_	_
4	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	expl:subj	_	_
5	y	y	PRON	PRP	Person=3|PronType=Prs	6	expl:comp	_	_
6	a	avoir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	Bob	Bob	PROPN	NNP	Gender=Masc|Number=Sing	6	obj	_	SpaceAfter=No
8	,	,	PUNCT	,	_	10	punct	_	_
9	toujours	toujours	ADV	RB	_	10	advmod	_	_
10	divertissant	divertissant	ADJ	JJ	Gender=Masc|Number=Sing	7	amod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	6	punct	_	_

~~~


