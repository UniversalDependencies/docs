---
layout: base
title:  'Statistics of orphan in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `orphan`

This relation is universal.

4 nodes (0%) are attached to their parents as `orphan`.

4 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.75.

The following 4 pairs of parts of speech are connected with `orphan`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (1; 25% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (1; 25% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 20 orphan	color:blue
1	La	_	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	partie	_	NOUN	NN	Gender=Fem|Number=Sing	8	nsubj:pass	_	_
3	nord	_	NOUN	NN	Gender=Masc|Number=Sing	2	compound	_	_
4	de	de	ADP	INDT	_	6	case	_	_
5	le	le	DET	_	Gender=Masc|Number=Sing	6	det	_	_
6	Caucase	_	PROPN	NNP	Gender=Masc|Number=Sing	2	nmod	_	_
7	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	aux:pass	_	_
8	connue	_	VERB	VBN	Gender=Fem|Number=Sing	0	root	_	_
9	sous	_	ADP	IN	_	11	case	_	_
10	le	_	DET	DT	Gender=Masc|Number=Sing	11	det	_	_
11	nom	_	NOUN	NN	Gender=Masc|Number=Sing	8	obl	_	_
12	de	_	ADP	IN	_	13	case	_	_
13	Ciscaucasie	_	PROPN	NNP	Gender=Fem|Number=Sing	11	nmod	_	_
14	et	_	CCONJ	CC	_	16	cc	_	_
15	la	_	DET	DT	Gender=Fem|Number=Sing	16	det	_	_
16	partie	_	NOUN	NN	Gender=Fem|Number=Sing	8	conj	_	orig_deprel=nsubj:pass
17	sud	_	NOUN	NN	Gender=Fem|Number=Sing	16	compound	_	_
18	sous	_	ADP	IN	_	20	case	_	orig_deprel=obl
19	le	_	DET	DT	Gender=Masc|Number=Sing	20	det	_	_
20	nom	_	NOUN	NN	Gender=Masc|Number=Sing	16	orphan	_	_
21	de	_	ADP	IN	_	22	case	_	_
22	Transcaucasie	_	PROPN	NNP	Gender=Fem|Number=Sing	20	nmod	_	SpaceAfter=No
23	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 orphan	color:blue
1	La	_	DET	DT	Gender=Fem|Number=Sing	3	det	_	_
2	première	_	ADJ	JJ	Gender=Fem|Number=Sing	3	amod	_	_
3	société	_	NOUN	NN	Gender=Fem|Number=Sing	12	nsubj:pass	_	_
4	de	_	ADP	IN	_	5	case	_	_
5	production	_	NOUN	NN	Gender=Fem|Number=Sing	3	nmod	_	_
6	cinématrographique	_	ADJ	JJ	Gender=Fem|Number=Sing	5	amod	_	_
7	(	_	PUNCT	(	_	9	punct	_	SpaceAfter=No
8	Athina	_	PROPN	NNP	Number=Sing	9	compound	_	_
9	Film	_	NOUN	NN	Number=Sing	3	appos	_	Proper=True|SpaceAfter=No
10	)	_	PUNCT	)	_	9	punct	_	_
11	fut	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	12	aux:pass	_	_
12	créée	_	VERB	VBN	Gender=Fem|Number=Sing	0	root	_	_
13	en	_	ADP	IN	_	14	case	_	_
14	1912	_	NUM	CD	_	12	obl	_	SpaceAfter=No
15	,	_	PUNCT	,	_	18	punct	_	_
16	et	_	CCONJ	CC	_	18	cc	_	_
17	Asty	_	PROPN	NNP	Number=Sing	18	compound	_	_
18	Film	_	NOUN	NN	Number=Sing	12	conj	_	Proper=True|orig_deprel=appos
19	en	_	ADP	IN	_	20	case	_	orig_deprel=obl
20	1916	_	NUM	CD	_	18	orphan	_	SpaceAfter=No
21	.	_	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 orphan	color:blue
1	Il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
2	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	aux:tense	_	_
3	également	_	ADV	RB	_	4	advmod	_	_
4	construit	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
5	et	_	CCONJ	CC	_	6	cc	_	_
6	rénové	_	VERB	VBN	Gender=Masc|Number=Sing	4	conj	_	_
7	cinq	_	NUM	CD	_	8	nummod	_	_
8	marchés	_	NOUN	NN	Gender=Masc|Number=Plur	4	obj	_	_
9	traditionnels	_	ADJ	JJ	Gender=Masc|Number=Plur	8	amod	_	_
10	en	_	ADP	IN	_	11	case	_	_
11	2013	_	NUM	CD	_	4	obl	_	_
12	et	_	CCONJ	CC	_	13	cc	_	_
13	quatre	_	NUM	CD	_	4	conj	_	orig_deprel=nummod
14	en	_	ADP	IN	_	15	case	_	orig_deprel=obl
15	2014	_	NUM	CD	_	13	orphan	_	SpaceAfter=No
16	.	_	PUNCT	.	_	4	punct	_	_

~~~


