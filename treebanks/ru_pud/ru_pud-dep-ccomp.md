---
layout: base
title:  'Statistics of ccomp in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `ccomp`

This relation is universal.

132 nodes (1%) are attached to their parents as `ccomp`.

132 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.34090909090909.

The following 14 pairs of parts of speech are connected with `ccomp`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (86; 65% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (15; 11% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (9; 7% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (6; 5% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (3; 2% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 ccomp	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Давайте	давать	VERB	VBC	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
2	просто	просто	PART	UH	_	3	advmod	_	_
3	скажем	сказать	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	1	xcomp	_	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	_	_
5	что	что	SCONJ	IN	_	7	mark	_	_
6	он	он	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj	_	_
7	неправ	неправый	ADJ	JJH	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	3	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Это	это	PRON	DT	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	_
2	замечательно	замечательный	ADJ	JJH	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
3	,	,	PUNCT	,	_	6	punct	_	_
4	что	что	SCONJ	IN	_	6	mark	_	_
5	мы	мы	PRON	PRP	Case=Nom|Number=Plur|Person=1	6	nsubj	_	_
6	можем	мочь	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
7	спасти	спасти	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	6	xcomp	_	_
8	эти	этот	DET	DT	Animacy=Inan|Case=Acc|Number=Plur	9	det	_	_
9	традиции	традиция	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	7	obj	_	_
10	и	и	CCONJ	CC	_	11	cc	_	_
11	привести	привести	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	7	conj	_	_
12	их	они	PRON	PRP	Case=Acc|Number=Plur|Person=3	11	obj	_	_
13	к	к	ADP	IN	_	15	case	_	_
14	новому	новый	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	_
15	формату	формат	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	11	obl	_	_
16	для	для	ADP	IN	_	17	case	_	_
17	мексиканцев	мексиканец	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	15	nmod	_	SpaceAfter=No
18	.	.	PUNCT	.	_	2	punct	_	_

~~~


