---
layout: base
title:  'Statistics of obl:mod in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `obl:mod`

This relation is a language-specific subtype of <tt><a href="fr_pud-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="fr_pud-dep-obl-agent.html">obl:agent</a></tt>.

80 nodes (0%) are attached to their parents as `obl:mod`.

58 instances of `obl:mod` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.1125.

The following 9 pairs of parts of speech are connected with `obl:mod`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (33; 41% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (18; 23% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (12; 15% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (7; 9% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (3; 4% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 obl:mod	color:blue
1	Guitariste	_	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	_
2	passionné	_	VERB	VBN	Gender=Masc|Number=Sing|VerbForm=Part	1	acl	_	SpaceAfter=No
3	,	_	PUNCT	,	_	4	punct	_	_
4	il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	1	appos	_	_
5	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	aux:tense	_	_
6	participé	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
7	à	_	ADP	IN	_	9	case	_	_
8	un	_	DET	DT	Gender=Masc|Number=Sing	9	det	_	_
9	concert	_	NOUN	NN	Gender=Masc|Number=Sing	6	obl	_	_
10	la	_	DET	DT	Gender=Fem|Number=Sing	12	det	_	_
11	même	_	ADJ	JJ	Gender=Fem|Number=Sing	12	amod	_	_
12	année	_	NOUN	NN	Gender=Fem|Number=Sing	6	obl:mod	_	SpaceAfter=No
13	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 obl:mod	color:blue
1	Il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
2	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	aux:tense	_	_
3	terminé	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
4	ses	_	DET	DTP$	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	5	det	_	_
5	études	_	NOUN	NN	Gender=Fem|Number=Plur	3	obj	_	_
6	et	_	CCONJ	CC	_	8	cc	_	_
7	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	aux:tense	_	_
8	obtenu	_	VERB	VBN	Gender=Masc|Number=Sing	3	conj	_	_
9	sa	_	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	10	det	_	_
10	maitrise	_	NOUN	NN	Gender=Fem|Number=Sing	8	obj	_	_
11	le	_	DET	DT	Gender=Masc|Number=Sing	12	det	_	_
12	21	_	NUM	CD	_	3	obl:mod	_	_
13	avril	_	NOUN	NNP	Gender=Masc|Number=Sing	12	nmod	_	_
14	1882	_	NUM	CD	_	13	nmod	_	SpaceAfter=No
15	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 obl:mod	color:blue
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


