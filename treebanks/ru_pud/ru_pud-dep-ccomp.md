---
layout: base
title:  'Statistics of ccomp in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `ccomp`

This relation is universal.

166 nodes (1%) are attached to their parents as `ccomp`.

158 instances of `ccomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.93373493975904.

The following 18 pairs of parts of speech are connected with `ccomp`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (101; 61% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (15; 9% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (12; 7% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (12; 7% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (6; 4% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-PART.html">PART</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 ccomp	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Это	_	DET	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	_
2	то	_	DET	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
3	,	_	PUNCT	,	_	5	punct	_	_
4	что	_	PRON	WP	Animacy=Inan|Case=Nom|Gender=Neut	5	nsubj	_	_
5	заставляет	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	ccomp	_	_
6	нас	_	PRON	PRP	Case=Acc|Number=Plur|Person=1	5	obj	_	_
7	возвращаться	_	VERB	VB	Aspect=Imp	5	xcomp	_	_
8	снова	_	ADV	RB	_	7	advmod	_	_
9	и	_	CCONJ	CC	_	10	cc	_	_
10	снова	_	ADV	RB	_	8	conj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 ccomp	color:blue
1	У	_	ADP	IN	_	2	case	_	_
2	них	_	PRON	PRP	Case=Gen|Number=Plur|Person=3	5	orphan	_	_
3	только	_	ADV	RB	_	4	advmod	_	_
4	один	_	NUM	CD	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nummod	_	_
5	шанс	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	_
6	реабилитироваться	_	VERB	VB	Aspect=Perf|VerbForm=Inf	5	ccomp	_	_
7	—	_	PUNCT	-	_	8	punct	_	OrigForm=--
8	обыграть	_	VERB	VB	Aspect=Perf	6	appos	_	_
9	команду	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Person=3	8	obj	_	_
10	Англии	_	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	9	nmod	_	SpaceAfter=No
11	.	_	PUNCT	.	_	5	punct	_	_

~~~


