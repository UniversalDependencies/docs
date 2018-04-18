---
layout: base
title:  'Statistics of xcomp in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `xcomp`

This relation is universal.

210 nodes (1%) are attached to their parents as `xcomp`.

193 instances of `xcomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.64285714285714.

The following 11 pairs of parts of speech are connected with `xcomp`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (152; 72% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (23; 11% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (18; 9% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 xcomp	color:blue
1	Но	но	CCONJ	_	_	2	cc	_	_
2	есть	быть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	мужчина	мужчина	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	_
5	которого	который	PRON	_	Case=Acc	10	obj	_	_
6	я	я	PRON	_	Case=Nom|Number=Sing|Person=1	8	nsubj	_	_
7	не	не	PART	_	Polarity=Neg	8	advmod	_	_
8	хотела	хотеть	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
9	бы	бы	PART	_	Mood=Cnd	8	aux	_	_
10	потерять	потерять	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	8	xcomp	_	SpaceAfter=No
11	...	...	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 xcomp	color:blue
1	И	и	CCONJ	_	_	3	cc	_	_
2	не	не	PART	_	Polarity=Neg	3	advmod	_	_
3	предложит	предложить	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
4	выпить	выпить	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	3	xcomp	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	если	если	SCONJ	_	_	8	mark	_	_
7	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2	8	nsubj	_	_
8	решил	решить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	advcl	_	_
9	жить	жить	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	8	xcomp	_	_
10	трезвым	трезвый	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	9	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	Неожиданностью	неожиданность	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	2	xcomp	_	_
2	стали	стать	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	фотки	фотка	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	2	nsubj	_	_
4	Жириновского	Жириновский	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_

~~~


