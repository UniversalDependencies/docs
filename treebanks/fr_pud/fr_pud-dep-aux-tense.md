---
layout: base
title:  'Statistics of aux:tense in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `aux:tense`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_pud-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_pud-dep-aux-pass.html">aux:pass</a></tt>.

568 nodes (2%) are attached to their parents as `aux:tense`.

568 instances of `aux:tense` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35211267605634.

The following 3 pairs of parts of speech are connected with `aux:tense`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (556; 98% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (7; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (5; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux:tense	color:blue
1	Auparavant	auparavant	ADV	RB	_	7	advmod	_	wordform=auparavant
2	les	le	DET	DT	Gender=Masc|Number=Plur	3	det	_	_
3	jets	jet	NOUN	NN	Gender=Masc|Number=Plur	7	nsubj:pass	_	_
4	avaient	avoir	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	7	aux:tense	_	_
5	seulement	seulement	ADV	RB	_	7	advmod	_	_
6	été	être	AUX	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	aux:pass	_	_
7	vus	voir	VERB	VBN	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
8	par	par	ADP	IN	_	10	case	_	_
9	des	un	DET	DT	Gender=Masc|Number=Plur	10	det	_	_
10	bloggeurs	bloggeur	NOUN	NN	Gender=Masc|Number=Plur	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 aux:tense	color:blue
1	Sa	son	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	wordform=sa
2	gestion	gestion	NOUN	NN	Gender=Fem|Number=Sing	10	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	,	_	4	punct	_	_
4	cependant	cependant	ADV	RB	_	10	advmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	_
6	n'	ne	ADV	RB	Polarity=Neg	10	advmod	_	SpaceAfter=No
7	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	_
8	pas	pas	ADV	RB	Polarity=Neg	10	advmod	_	_
9	été	être	AUX	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	cop	_	_
10	exempte	exempte	ADJ	JJ	Gender=Fem|Number=Sing	0	root	_	_
11	de	de	ADP	IN	_	12	case	_	_
12	critiques	critique	NOUN	NN	Gender=Fem|Number=Plur	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 aux:tense	color:blue
1	Son	son	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	wordform=son
2	album	album	NOUN	NN	Gender=Masc|Number=Sing	11	nsubj	_	_
3	Wild	Wild	X	FW	_	2	appos	_	Proper=True
4	West	West	X	WF	_	3	flat:foreign	_	Proper=True
5	(	(	PUNCT	(	_	6	punct	_	SpaceAfter=No
6	1981	1981	NUM	CD	_	2	obl:mod	_	SpaceAfter=No
7	)	)	PUNCT	)	_	6	punct	_	_
8	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:tense	_	_
9	été	être	AUX	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	cop	_	_
10	l’	le	DET	DT	Gender=Fem|Number=Sing	11	det	_	SpaceAfter=No|wordform=l'
11	une	une	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
12	de	de	ADP	IN	_	15	case	_	_
13	ses	son	DET	DTP$	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	15	det	_	_
14	meilleures	meilleur	ADJ	JJR	Gender=Fem|Number=Plur	15	amod	_	_
15	ventes	vente	NOUN	NN	Gender=Fem|Number=Plur	11	nmod	_	_

~~~


