---
layout: base
title:  'Statistics of ccomp in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `ccomp`

This relation is universal.

305 nodes (1%) are attached to their parents as `ccomp`.

296 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.04262295081967.

The following 12 pairs of parts of speech are connected with `ccomp`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (139; 46% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (131; 43% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (12; 4% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	Disons	_	VERB	VBC	Mood=Imp|Number=Plur|Person=1|Tense=Pres	0	root	_	_
2	seulement	_	ADV	RB	_	1	advmod	_	_
3	qu’	_	ADP	IN	_	5	mark	_	OrigForm=qu'|SpaceAfter=No
4	il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
5	a	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	ccomp	_	_
6	tort	_	NOUN	NN	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
7	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 ccomp	color:blue
1	5000	_	NUM	CD	_	2	nummod	_	_
2	dollars	_	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	_
3	par	_	ADP	IN	_	4	case	_	_
4	personne	_	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	_	PUNCT	,	_	7	punct	_	_
6	le	_	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	maximum	_	NOUN	NN	Gender=Masc|Number=Sing	2	appos	_	_
8	autorisé	_	VERB	VBN	Gender=Masc|Number=Sing|VerbForm=Part	7	ccomp	_	SpaceAfter=No
9	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Je	_	PRON	PRP	Number=Sing|Person=1	2	nsubj	_	_
2	crois	_	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	qu’	_	ADP	IN	_	6	mark	_	OrigForm=qu'|SpaceAfter=No
4	il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	6	expl	_	_
5	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
6	juste	_	ADJ	JJ	Gender=Masc|Number=Sing	2	ccomp	_	_
7	de	_	ADP	IN	_	8	mark	_	_
8	dire	_	VERB	VB	_	6	csubj	_	_
9	que	_	SCONJ	IN	_	13	mark	_	_
10	Rocco	_	PROPN	NNP	Gender=Masc|Number=Sing	13	nsubj	_	_
11	Catalano	_	PROPN	NNP	Gender=Masc|Number=Sing	10	flat:name	_	_
12	ne	_	ADV	RB	Polarity=Neg	13	advmod	_	_
13	vit	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	ccomp	_	_
14	que	_	ADV	RB	_	13	advmod	_	_
15	pour	_	ADP	IN	_	17	case	_	_
16	le	_	DET	DT	Gender=Masc|Number=Sing	17	det	_	_
17	style	_	NOUN	NN	Gender=Masc|Number=Sing	13	obl	_	_
18	rétro	_	ADJ	JJ	Gender=Masc|Number=Sing	17	amod	_	SpaceAfter=No
19	.	_	PUNCT	.	_	2	punct	_	_

~~~


