---
layout: base
title:  'Statistics of det in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `det`

This relation is universal.

1331 nodes (1%) are attached to their parents as `det`.

1315 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30127723516153.

The following 10 pairs of parts of speech are connected with `det`: <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-DET.html">DET</a></tt> (1289; 97% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-DET.html">DET</a></tt> (13; 1% instances), <tt><a href="ru_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_gsd-pos-DET.html">DET</a></tt> (10; 1% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-DET.html">DET</a></tt> (9; 1% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_gsd-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-DET.html">DET</a></tt>-<tt><a href="ru_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Хозяин	хозяин	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	может	мочь	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	устроить	устроить	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	2	xcomp	_	_
4	своего	свой	DET	PRP$	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	5	det	_	_
5	питомца	питомец	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
6	на	на	ADP	IN	_	7	case	_	_
7	работу	работа	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Учёные	ученый	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	_
2	датируют	датировать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	эту	этот	DET	DT	Case=Acc|Gender=Fem|Number=Sing	4	det	_	_
4	Упанишаду	Упанишада	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
5	V	V	ADJ	ORD	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
6	--	--	PUNCT	--	_	7	punct	_	_
7	III	III	ADJ	ORD	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	5	nmod	_	_
8	веками	век	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	2	obl	_	_
9	до	до	ADP	IN	_	11	case	_	_
10	н.	наш	DET	PRP$	Case=Gen|Gender=Fem|Number=Sing	11	det	_	_
11	э	эра	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 det	color:blue
1	Я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1	2	nsubj	_	_
2	полюбил	полюбить	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	их	они	PRON	PRP	Case=Acc|Number=Plur|Person=3	2	obj	_	_
4	всех	весь	DET	DT	Animacy=Anim|Case=Acc|Number=Plur	3	det	_	SpaceAfter=No
5	,	,	PUNCT	,	_	8	punct	_	_
6	и	и	CCONJ	CC	_	8	cc	_	_
7	это	это	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	_
8	легло	лечь	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
9	в	в	ADP	IN	_	10	case	_	_
10	основу	основа	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	obl	_	_
11	сюжета	сюжет	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
12	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	2	punct	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


