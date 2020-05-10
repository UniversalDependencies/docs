---
layout: base
title:  'Statistics of xcomp in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `xcomp`

This relation is universal.

331 nodes (2%) are attached to their parents as `xcomp`.

319 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.70694864048338.

The following 13 pairs of parts of speech are connected with `xcomp`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (169; 51% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (83; 25% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (43; 13% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (13; 4% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (13; 4% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 xcomp	color:blue
1	Так	так	ADV	RB	Degree=Pos	6	advmod	_	_
2	или	или	CCONJ	CC	_	3	cc	_	_
3	иначе	иначе	ADV	RB	Degree=Pos	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	1	punct	_	_
5	я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1	6	nsubj	_	_
6	попаду	попасть	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
7	в	в	ADP	IN	_	8	case	_	_
8	тюрьму	тюрьма	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	10	punct	_	_
10	надеюсь	надеяться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Mid	6	conj	_	SpaceAfter=No
11	,	,	PUNCT	,	_	13	punct	_	_
12	это	это	PRON	DT	Case=Acc|Gender=Neut|Number=Sing	13	nsubj	_	_
13	стоило	стоить	VERB	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	10	ccomp	_	_
14	сделать	сделать	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	13	xcomp	_	SpaceAfter=No
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
3	неспроста	неспроста	ADV	RB	Degree=Pos	4	advmod	_	_
4	называю	называть	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	его	он	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	obj	_	_
6	зверем	зверь	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	4	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Не	не	PART	NEG	Polarity=Neg	2	advmod	_	_
2	все	все	PRON	DT	Animacy=Anim|Case=Nom|Number=Plur	3	nsubj	_	_
3	могут	мочь	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	быть	быть	AUX	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	5	cop	_	_
5	выше	высокий	ADJ	JJR	Degree=Cmp	3	xcomp	_	_
6	этого	это	PRON	DT	Case=Gen|Gender=Neut|Number=Sing	5	obl	_	SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	_	_

~~~


