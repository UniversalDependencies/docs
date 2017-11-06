---
layout: base
title:  'Statistics of nsubj:pass in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-nsubj.html">nsubj</a></tt>.

149 nodes (1%) are attached to their parents as `nsubj:pass`.

118 instances of `nsubj:pass` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.43624161073825.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (94; 63% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (21; 14% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (20; 13% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (11; 7% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Первое	_	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|Variant=Long	2	amod	_	_
2	издание	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|Person=3	4	nsubj:pass	_	_
3	было	_	VERB	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	4	aux:pass	_	_
4	напечатано	_	VERB	VBN	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|Voice=Pass	0	root	_	_
5	тиражом	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Person=3	4	advmod	_	_
6	всего	_	ADV	RB	_	8	advmod	_	_
7	3000	_	NUM	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur|Person=3	8	nummod	_	_
8	экземпляров	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Person=3	5	advmod	_	SpaceAfter=No
9	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Олдрин	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	3	nsubj:pass	_	_
2	был	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	3	aux:pass	_	_
3	женат	_	VERB	VBN	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|Voice=Pass	0	root	_	_
4	три	_	NUM	CD	Animacy=Inan|Case=Acc	5	nummod	_	_
5	раза	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Person=3	3	advmod	_	SpaceAfter=No
6	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Он	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	nsubj:pass	_	_
2	был	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	3	aux:pass	_	_
3	объявлен	_	VERB	VBN	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|Voice=Pass	0	root	_	_
4	природным	_	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	5	amod	_	_
5	заповедником	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Person=3	3	advmod	_	_
6	в	_	ADP	IN	_	8	case	_	_
7	1975	_	NUM	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	8	nummod	_	_
8	году	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Person=3	3	obl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	3	punct	_	_

~~~


