---
layout: base
title:  'Statistics of xcomp in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `xcomp`

This relation is universal.

307 nodes (2%) are attached to their parents as `xcomp`.

300 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.58957654723127.

The following 14 pairs of parts of speech are connected with `xcomp`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (182; 59% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (42; 14% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (37; 12% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (14; 5% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (13; 4% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (8; 3% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 xcomp	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	И	и	CCONJ	CC	_	4	cc	_	_
2	я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1	4	nsubj	_	_
3	неспроста	неспроста	ADV	RB	_	4	advmod	_	_
4	называю	называть	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
5	его	он	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	obj	_	_
6	зверем	зверь	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	4	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	Как	как	ADP	IN	_	3	case	_	_
2	и	и	PART	UH	_	3	advmod	_	_
3	фьорды	фьорд	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	8	advmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	пресноводные	пресноводный	ADJ	JJ	Animacy=Inan|Case=Nom|Number=Plur|Variant=Long	6	amod	_	_
6	озера	озеро	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	8	nsubj	_	_
7	часто	часто	ADV	RB	_	8	advmod	_	_
8	бывают	бывать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
9	глубокими	глубокий	ADJ	JJ	Animacy=Inan|Case=Ins|Number=Plur|Variant=Long	8	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	8	punct	_	_

~~~


