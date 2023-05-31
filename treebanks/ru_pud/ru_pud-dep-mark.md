---
layout: base
title:  'Statistics of mark in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `mark`

This relation is universal.

287 nodes (1%) are attached to their parents as `mark`.

287 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.56794425087108.

The following 12 pairs of parts of speech are connected with `mark`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-SCONJ.html">SCONJ</a></tt> (216; 75% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-SCONJ.html">SCONJ</a></tt> (22; 8% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (17; 6% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-SCONJ.html">SCONJ</a></tt> (13; 5% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-SCONJ.html">SCONJ</a></tt> (6; 2% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 mark	color:blue
1	Джордж	Джордж	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	aux:pass	_	_
3	поражен	поразить	VERB	VBNH	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	тем	то	PRON	DT	Case=Ins|Gender=Neut|Number=Sing	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	8	punct	_	_
6	что	что	SCONJ	IN	_	8	mark	_	_
7	он	он	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	nsubj	_	_
8	считал	считать	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	acl	_	_
9	упадком	упадок	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	8	xcomp	_	_
10	их	они	DET	PRP$	_	11	det	_	_
11	нравов	нрав	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 mark	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 mark	color:blue
1	Потому	потому	ADV	RB	Degree=Pos	8	mark	_	_
2	что	что	SCONJ	IN	_	1	fixed	_	_
3	каждое	каждый	DET	DT	Case=Nom|Gender=Neut|Number=Sing	4	det	_	_
4	чудо	чудо	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	_
5	и	и	CCONJ	CC	_	7	cc	_	_
6	каждый	каждый	DET	DT	Case=Nom|Gender=Masc|Number=Sing	7	det	_	_
7	район	район	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	conj	_	_
8	занимают	занимать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	отдельное	отдельный	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	10	amod	_	_
10	поле	поле	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	8	punct	_	_

~~~


