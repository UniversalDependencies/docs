---
layout: base
title:  'Statistics of nsubj:pass in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-nsubj.html">nsubj</a></tt>.

175 nodes (1%) are attached to their parents as `nsubj:pass`.

141 instances of `nsubj:pass` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.23428571428571.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (113; 65% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (26; 15% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (18; 10% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (14; 8% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	Зимняя	зимний	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Long	2	amod	_	Proper=True
2	Универсиада	универсиада	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	_	_
3	2019	2019	NUM	JJ	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Variant=Long	4	amod	_	Proper=True
4	года	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
5	будет	быть	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut	6	aux:pass	_	_
6	проводиться	проводиться	VERB	VB	Aspect=Imp	0	root	_	_
7	в	в	ADP	IN	_	8	case	_	_
8	Красноярске	Красноярск	PROPN	NNP	Animacy=Inan|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Он	он	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	nsubj:pass	_	_
2	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	3	aux:pass	_	_
3	объявлен	объявить	VERB	VBN	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|Voice=Pass	0	root	_	_
4	природным	природный	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	5	amod	_	_
5	заповедником	заповедник	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	xcomp	_	_
6	в	в	ADP	IN	_	8	case	_	_
7	1975	1975	NUM	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	8	amod	_	_
8	году	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubj:pass	color:blue
1	Екатерина	Екатерина	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	9	nsubj:pass	_	SpaceAfter=No
2	,	,	PUNCT	,	_	3	punct	_	_
3	царица	царица	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	1	appos	_	_
4	России	Россия	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	3	punct	_	_
6	тоже	тоже	ADV	CC	_	9	advmod	_	_
7	была	быть	AUX	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	9	aux:pass	_	_
8	весьма	весьма	ADV	RB	_	9	advmod	_	_
9	удовлетворена	удовлетворить	VERB	VBN	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|Voice=Pass	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


