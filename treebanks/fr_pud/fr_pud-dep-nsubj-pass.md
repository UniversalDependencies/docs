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
Average distance between parent and child is 5.36.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (130; 65% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (47; 24% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (20; 10% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 nsubj:pass	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	En	_	ADP	IN	_	2	case	_	_
2	principe	_	NOUN	NN	Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
3	,	_	PUNCT	,	_	2	punct	_	_
4	il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
5	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
6	indétectable	_	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
7	s’	_	ADP	IN	_	10	mark	_	OrigForm=s'|SpaceAfter=No
8	il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	10	nsubj:pass	_	_
9	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	10	aux:pass	_	_
10	fait	_	VERB	VBN	Gender=Masc|Number=Sing	6	advcl	_	_
11	correctement	_	ADV	RB	_	10	advmod	_	SpaceAfter=No
12	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nsubj:pass	color:blue
1	Toutefois	_	ADV	RB	_	4	advmod	_	SpaceAfter=No
2	,	_	PUNCT	,	_	1	punct	_	_
3	cela	_	PRON	PDEM	_	4	nsubj	_	_
4	changea	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
5	lorsque	_	SCONJ	IN	_	8	mark	_	_
6	Julien	_	PROPN	NNP	Gender=Masc|Number=Sing	8	nsubj:pass	_	_
7	fut	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	8	aux:pass	_	_
8	tué	_	VERB	VBN	Gender=Masc|Number=Sing	4	advcl	_	_
9	à	à	ADP	INDT	_	11	case	_	_
10	le	le	DET	_	Gender=Masc|Number=Sing	11	det	_	_
11	combat	_	NOUN	NN	Gender=Masc|Number=Sing	8	obl	_	_
12	en	_	ADP	IN	_	13	case	_	_
13	363	_	NUM	CD	_	4	obl	_	SpaceAfter=No
14	.	_	PUNCT	.	_	4	punct	_	_

~~~


