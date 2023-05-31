---
layout: base
title:  'Statistics of aux:pass in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ru_gsd-dep-aux.html">aux</a></tt>.

538 nodes (1%) are attached to their parents as `aux:pass`.

523 instances of `aux:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07992565055762.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-AUX.html">AUX</a></tt> (526; 98% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-AUX.html">AUX</a></tt> (10; 2% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Текст	текст	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	написан	написать	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	по	по	ADP	AFX	_	6	case	_	SpaceAfter=No
5	-	-	PUNCT	-	_	6	punct	_	SpaceAfter=No
6	латыни	латыни	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Все	весь	DET	DT	Case=Nom|Number=Plur	2	det	_	_
2	граждане	гражданин	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj:pass	_	_
3	были	быть	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	обязаны	обязанный	ADJ	JJH	Case=Nom|Degree=Pos|Number=Plur|Variant=Short	0	root	_	_
5	работать	работать	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	4	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 aux:pass	color:blue
1	1	1	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	5	obl	_	_
2	января	январь	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	flat	_	_
3	1889	1889	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
4	года	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
5	произведен	произвести	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
6	в	в	ADP	IN	_	7	case	_	_
7	чин	чин	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	_	_
8	вице-адмирала	вице-адмирал	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
9	,	,	PUNCT	,	_	15	punct	_	_
10	а	а	CCONJ	CC	_	15	cc	_	_
11	в	в	ADP	IN	_	13	case	_	_
12	1891	1891	ADJ	ORD	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	13	amod	_	_
13	году	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	15	obl	_	_
14	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	17	aux:pass	_	_
15	назначен	назначить	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	5	conj	_	_
16	старшим	старший	ADJ	JJL	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	17	amod	_	_
17	флагманом	флагман	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	15	iobj	_	_
18	Балтийского	балтийский	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	_
19	флота	флот	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	SpaceAfter=No
20	.	.	PUNCT	.	_	5	punct	_	_

~~~


