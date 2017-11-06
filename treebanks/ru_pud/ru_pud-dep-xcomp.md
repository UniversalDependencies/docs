---
layout: base
title:  'Statistics of xcomp in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `xcomp`

This relation is universal.

281 nodes (1%) are attached to their parents as `xcomp`.

276 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.49822064056939.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (200; 71% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (30; 11% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (22; 8% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (15; 5% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 xcomp	color:blue
1	Так	_	ADV	RB	_	6	advmod	_	_
2	или	_	CCONJ	CC	_	3	cc	_	_
3	иначе	_	ADV	RB	_	1	conj	_	SpaceAfter=No
4	,	_	PUNCT	,	_	1	punct	_	_
5	я	_	PRON	PRP	Case=Nom|Number=Sing|Person=1	6	nsubj	_	_
6	попаду	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut	0	root	_	_
7	в	_	ADP	IN	_	8	case	_	_
8	тюрьму	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Person=3	6	obl	_	SpaceAfter=No
9	,	_	PUNCT	,	_	10	punct	_	_
10	надеюсь	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres	6	conj	_	SpaceAfter=No
11	,	_	PUNCT	,	_	13	punct	_	_
12	это	_	DET	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	14	obj	_	_
13	стоило	_	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	10	ccomp	_	_
14	сделать	_	VERB	VB	Aspect=Perf	13	xcomp	_	SpaceAfter=No
15	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 xcomp	color:blue
1	Я	_	PRON	PRP	Case=Nom|Number=Sing|Person=1	2	nsubj	_	_
2	объявляю	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	первые	_	ADJ	JJ	Animacy=Inan|Case=Acc|Number=Plur|Variant=Long	6	amod	_	_
4	международные	_	ADJ	JJ	Animacy=Inan|Case=Acc|Number=Plur|Variant=Long	6	amod	_	_
5	Олимпийские	_	ADJ	JJ	Animacy=Inan|Case=Acc|Number=Plur|Variant=Long	6	amod	_	Proper=True
6	игры	_	PROPN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur|Person=3	2	obj	_	_
7	закрытыми	_	ADJ	JJ	Animacy=Inan|Case=Ins|Number=Plur|Variant=Long	2	xcomp	_	SpaceAfter=No
8	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 xcomp	color:blue
1	Однако	_	CCONJ	CC	_	7	cc:preconj	_	_
2	темные	_	ADJ	JJ	Animacy=Inan|Case=Nom|Number=Plur|Variant=Long	3	amod	_	_
3	дела	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur|Person=3	7	nsubj:pass	_	_
4	Коттон	_	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing|Person=3	3	nmod	_	_
5	не	_	PART	NEG	Polarity=Neg	7	advmod	_	_
6	были	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past	7	aux:pass	_	_
7	совершены	_	VERB	VBN	Animacy=Inan|Aspect=Perf|Case=Nom|Number=Plur|Tense=Past|Variant=Short|Voice=Pass	0	root	_	_
8	из-за	_	ADP	IN	_	9	case	_	_
9	желания	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|Person=3	7	obl	_	_
10	убивать	_	VERB	VB	Aspect=Imp|VerbForm=Inf	9	xcomp	_	SpaceAfter=No
11	.	_	PUNCT	.	_	7	punct	_	_

~~~


