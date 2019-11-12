---
layout: base
title:  'Statistics of aux:pass in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_pud-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_pud-dep-aux-tense.html">aux:tense</a></tt>.

226 nodes (1%) are attached to their parents as `aux:pass`.

226 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23893805309735.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (224; 99% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux:pass	color:blue
1	La	_	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	formation	_	NOUN	NN	Gender=Fem|Number=Sing	9	nsubj:pass	_	_
3	de	_	ADP	IN	_	5	case	_	_
4	10	_	NUM	CD	_	5	nummod	_	_
5	semaines	_	NOUN	NN	Gender=Fem|Number=Plur	2	nmod	_	_
6	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	aux:tense	_	_
7	été	_	AUX	VBN	Gender=Masc|Number=Sing	9	aux:pass	_	_
8	«	_	PUNCT	``	_	9	punct	_	_
9	certifiée	_	ADJ	JJ	Gender=Fem|Number=Sing	0	root	_	_
10	»	_	PUNCT	''	_	9	punct	_	_
11	par	_	ADP	IN	_	13	case	_	_
12	l'	_	DET	DT	Gender=Fem|Number=Sing	13	det	_	SpaceAfter=No
13	agence	_	NOUN	NN	Gender=Fem|Number=Sing	9	obl	_	_
14	d'	_	ADP	IN	_	15	case	_	SpaceAfter=No
15	espionnage	_	NOUN	NN	Gender=Masc|Number=Sing	13	nmod	_	_
16	anglaise	_	ADJ	JJ	Gender=Fem|Number=Sing	13	amod	_	_
17	GCHQ	_	PROPN	NNP	Number=Sing	13	appos	_	SpaceAfter=No
18	.	_	PUNCT	.	_	9	punct	_	_

~~~


