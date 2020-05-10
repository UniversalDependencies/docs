---
layout: base
title:  'Statistics of nsubj:pass in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_pud-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fr_pud-dep-nsubj-caus.html">nsubj:caus</a></tt>.

200 nodes (1%) are attached to their parents as `nsubj:pass`.

199 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.37.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (129; 65% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (47; 24% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (20; 10% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 nsubj:pass	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	En	en	ADP	IN	_	2	case	_	wordform=en
2	principe	principe	NOUN	NN	Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
5	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	indétectable	indétectable	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
7	s’	si	ADP	IN	_	10	mark	_	SpaceAfter=No|wordform=s'
8	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3	10	nsubj:pass	_	_
9	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	fait	faire	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	advcl	_	_
11	correctement	correctement	ADV	RB	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nsubj:pass	color:blue
1	Toutefois	toutefois	ADV	RB	_	4	advmod	_	SpaceAfter=No|wordform=toutefois
2	,	,	PUNCT	,	_	1	punct	_	_
3	cela	cela	PRON	PDEM	_	4	nsubj	_	_
4	changea	changer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	lorsque	lorsque	SCONJ	IN	_	8	mark	_	_
6	Julien	Julien	PROPN	NNP	Gender=Masc|Number=Sing	8	nsubj:pass	_	_
7	fut	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	aux:pass	_	_
8	tué	tuer	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	advcl	_	_
9	à	à	ADP	INDT	_	11	case	_	_
10	le	le	DET	_	Gender=Masc|Number=Sing	11	det	_	_
11	combat	combat	NOUN	NN	Gender=Masc|Number=Sing	8	obl	_	_
12	en	en	ADP	IN	_	13	case	_	_
13	363	363	NUM	CD	_	4	obl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	4	punct	_	_

~~~


