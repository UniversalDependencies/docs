---
layout: base
title:  'Statistics of ccomp in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `ccomp`

This relation is universal.

145 nodes (1%) are attached to their parents as `ccomp`.

144 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.24827586206897.

The following 17 pairs of parts of speech are connected with `ccomp`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (101; 70% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (12; 8% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-PART.html">PART</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 ccomp	color:blue
1	Так	так	ADV	RB	_	6	advmod	_	_
2	или	или	CCONJ	CC	_	3	cc	_	_
3	иначе	иначе	ADV	RB	_	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	1	punct	_	_
5	я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1	6	nsubj	_	_
6	попаду	попасть	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut	0	root	_	_
7	в	в	ADP	IN	_	8	case	_	_
8	тюрьму	тюрьма	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	10	punct	_	_
10	надеюсь	надеяться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres	6	conj	_	SpaceAfter=No
11	,	,	PUNCT	,	_	13	punct	_	_
12	это	это	PRON	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	13	nsubj	_	_
13	стоило	стоить	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	10	ccomp	_	_
14	сделать	сделать	VERB	VB	Aspect=Perf	13	xcomp	_	SpaceAfter=No
15	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Давайте	давать	VERB	VBC	Aspect=Imp|Mood=Imp|Number=Plur|Person=2	0	root	_	_
2	просто	просто	ADV	RB	_	3	advmod	_	_
3	скажем	сказать	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut	1	xcomp	_	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	_	_
5	что	что	SCONJ	IN	_	7	mark	_	_
6	он	он	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj	_	_
7	неправ	неправый	ADJ	JJ	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Variant=Short	3	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 ccomp	color:blue
1	Мэй	Мэй	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
2	подверглась	подвергнуться	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
3	серьезной	серьезный	ADJ	JJ	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing|Variant=Long	4	amod	_	_
4	критике	критика	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	2	iobj	_	_
5	за	за	ADP	IN	_	6	case	_	_
6	то	то	DET	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	2	obl	_	SpaceAfter=No
7	,	,	PUNCT	,	_	9	punct	_	_
8	что	что	ADP	IN	_	9	mark	_	_
9	избегала	избегать	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	6	ccomp	_	_
10	ответа	ответ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	obj	_	_
11	и	и	CCONJ	CC	_	13	cc	_	_
12	не	не	PART	NEG	Polarity=Neg	13	advmod	_	_
13	давала	давать	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	9	conj	_	_
14	прямого	прямой	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Variant=Long	15	amod	_	_
15	ответа	ответ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	13	obj	_	_
16	средствам	средство	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Neut|Number=Plur	15	iobj	_	_
17	массовой	массовый	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Variant=Long	18	amod	_	_
18	информации	информация	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	16	nmod	_	_
19	после	после	ADP	IN	_	20	case	_	_
20	решения	решение	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	13	obl	_	_
21	суда	суд	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	20	nmod	_	_
22	по	по	ADP	IN	_	23	case	_	_
23	Брекзиту	Брекзит	PROPN	NNP	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	20	nmod	_	SpaceAfter=No
24	.	.	PUNCT	.	_	2	punct	_	_

~~~


