---
layout: base
title:  'Statistics of aux:pass in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_pud-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_pud-dep-aux-tense.html">aux:tense</a></tt>.

225 nodes (1%) are attached to their parents as `aux:pass`.

225 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (223; 99% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux:pass	color:blue
1	La	le	DET	DT	Gender=Fem|Number=Sing	2	det	_	wordform=la
2	formation	formation	NOUN	NN	Gender=Fem|Number=Sing	9	nsubj:pass	_	_
3	de	de	ADP	IN	_	5	case	_	_
4	10	10	NUM	CD	_	5	nummod	_	_
5	semaines	semaine	NOUN	NN	Gender=Fem|Number=Plur	2	nmod	_	_
6	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:tense	_	_
7	été	être	AUX	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	aux:pass	_	_
8	«	«	PUNCT	``	_	9	punct	_	_
9	certifiée	certifié	ADJ	JJ	Gender=Fem|Number=Sing	0	root	_	_
10	»	»	PUNCT	''	_	9	punct	_	_
11	par	par	ADP	IN	_	13	case	_	_
12	l'	le	DET	DT	Gender=Fem|Number=Sing	13	det	_	SpaceAfter=No
13	agence	agence	NOUN	NN	Gender=Fem|Number=Sing	9	obl	_	_
14	d'	de	ADP	IN	_	15	case	_	SpaceAfter=No
15	espionnage	espionnage	NOUN	NN	Gender=Masc|Number=Sing	13	nmod	_	_
16	anglaise	anglais	ADJ	JJ	Gender=Fem|Number=Sing	13	amod	_	_
17	GCHQ	GCHQ	PROPN	NNP	Number=Sing	13	appos	_	SpaceAfter=No
18	.	.	PUNCT	.	_	9	punct	_	_

~~~


