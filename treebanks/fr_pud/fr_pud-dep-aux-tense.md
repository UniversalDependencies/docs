---
layout: base
title:  'Statistics of aux:tense in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `aux:tense`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_pud-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_pud-dep-aux-pass.html">aux:pass</a></tt>.

569 nodes (2%) are attached to their parents as `aux:tense`.

569 instances of `aux:tense` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35325131810193.

The following 3 pairs of parts of speech are connected with `aux:tense`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (557; 98% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (7; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (5; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux:tense	color:blue
1	Auparavant	_	ADV	RB	_	7	advmod	_	_
2	les	_	DET	DT	Gender=Masc|Number=Plur	3	det	_	_
3	jets	_	NOUN	NN	Gender=Masc|Number=Plur	7	nsubj:pass	_	_
4	avaient	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Imp	7	aux:tense	_	_
5	seulement	_	ADV	RB	_	7	advmod	_	_
6	été	_	AUX	VBN	Gender=Masc|Number=Sing	7	aux:pass	_	_
7	vus	_	VERB	VBN	Gender=Masc|Number=Plur	0	root	_	_
8	par	_	ADP	IN	_	10	case	_	_
9	des	_	DET	DT	Gender=Masc|Number=Plur	10	det	_	_
10	bloggeurs	_	NOUN	NN	Gender=Masc|Number=Plur	7	obl	_	SpaceAfter=No
11	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 aux:tense	color:blue
1	Sa	_	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	gestion	_	NOUN	NN	Gender=Fem|Number=Sing	10	nsubj	_	SpaceAfter=No
3	,	_	PUNCT	,	_	4	punct	_	_
4	cependant	_	ADV	RB	_	10	advmod	_	SpaceAfter=No
5	,	_	PUNCT	,	_	4	punct	_	_
6	n'	_	ADV	RB	Polarity=Neg	10	advmod	_	SpaceAfter=No
7	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	10	aux:tense	_	_
8	pas	_	ADV	RB	Polarity=Neg	10	advmod	_	_
9	été	_	AUX	VBN	Gender=Masc|Number=Sing	10	cop	_	_
10	exempte	_	ADJ	JJ	Gender=Fem|Number=Sing	0	root	_	_
11	de	_	ADP	IN	_	12	case	_	_
12	critiques	_	NOUN	NN	Gender=Fem|Number=Plur	10	obl	_	SpaceAfter=No
13	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 aux:tense	color:blue
1	Son	_	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	album	_	NOUN	NN	Gender=Masc|Number=Sing	11	nsubj	_	_
3	Wild	_	ADJ	JJ	Number=Sing	4	amod	_	Proper=True
4	West	_	NOUN	NN	Number=Sing	2	appos	_	Proper=True
5	(	_	PUNCT	(	_	6	punct	_	SpaceAfter=No
6	1981	_	NUM	CD	_	2	obl:mod	_	SpaceAfter=No
7	)	_	PUNCT	)	_	6	punct	_	_
8	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	11	aux:tense	_	_
9	été	_	AUX	VBN	Gender=Masc|Number=Sing	11	cop	_	_
10	l’	_	DET	DT	Gender=Fem|Number=Sing	11	det	_	OrigForm=l'|SpaceAfter=No
11	une	_	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
12	de	_	ADP	IN	_	15	case	_	_
13	ses	_	DET	DTP$	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	15	det	_	_
14	meilleures	_	ADJ	JJR	Gender=Fem|Number=Plur	15	amod	_	_
15	ventes	_	NOUN	NN	Gender=Fem|Number=Plur	11	nmod	_	_

~~~


