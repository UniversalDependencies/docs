---
layout: base
title:  'Statistics of orphan in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `orphan`

This relation is universal.

26 nodes (0%) are attached to their parents as `orphan`.

19 instances of `orphan` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.07692307692308.

The following 17 pairs of parts of speech are connected with `orphan`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (8; 31% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 orphan	color:blue
1	В	_	ADP	IN	_	3	case	_	_
2	обоих	_	NUM	CD	Animacy=Inan|Gender=Masc	3	nummod	_	_
3	случаях	_	NOUN	NN	Animacy=Inan|Gender=Masc|Number=Plur|Person=3	6	orphan	_	_
4	на	_	ADP	IN	_	6	case	_	_
5	высшем	_	ADJ	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	6	amod	_	_
6	уровне	_	NOUN	NN	Animacy=Inan|Gender=Masc|Number=Sing|Person=3	0	root	_	_
7	в	_	ADP	IN	_	8	case	_	_
8	рамках	_	NOUN	NN	Animacy=Inan|Gender=Fem|Number=Plur|Person=3	6	orphan	_	_
9	Европейского	_	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Variant=Long	10	amod	_	Proper=True
10	союза	_	PROPN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Person=3	8	nmod	_	SpaceAfter=No
11	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 orphan	color:blue
1	У	_	ADP	IN	_	2	case	_	_
2	нас	_	PRON	PRP	Case=Gen|Number=Plur|Person=1	0	root	_	_
3	отличная	_	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Long	4	amod	_	_
4	команда	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Person=3	2	orphan	_	SpaceAfter=No
5	,	_	PUNCT	,	_	8	punct	_	_
6	и	_	CCONJ	CC	_	8	cc	_	_
7	мы	_	PRON	PRP	Case=Nom|Number=Plur|Person=1	8	nsubj	_	_
8	можем	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres	2	conj	_	_
9	идти	_	VERB	VB	Aspect=Imp	8	xcomp	_	_
10	вперёд	_	ADV	RB	_	9	advmod	_	SpaceAfter=No
11	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 orphan	color:blue
1	Дюран	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	является	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	спикером	_	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Person=3	2	iobj	_	SpaceAfter=No
4	,	_	PUNCT	,	_	6	punct	_	_
5	а	_	CCONJ	CC	_	6	cc	_	_
6	Анхель	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	2	conj	_	_
7	Пинтадо	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	6	flat	_	orig_deprel=nsubj
8	казначеем	_	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Person=3	6	orphan	_	orig_deprel=root|SpaceAfter=No
9	.	_	PUNCT	.	_	2	punct	_	_

~~~


