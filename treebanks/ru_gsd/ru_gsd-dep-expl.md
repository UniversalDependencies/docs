---
layout: base
title:  'Statistics of expl in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `expl`

This relation is universal.

25 nodes (0%) are attached to their parents as `expl`.

25 instances of `expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.32.

The following 2 pairs of parts of speech are connected with `expl`: <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-PART.html">PART</a></tt> (23; 92% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-PART.html">PART</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 expl	color:blue
1	Рэгги-метал	Рэгги-метал	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
2	--	--	PUNCT	--	_	5	punct	_	_
3	это	это	PART	UH	_	5	expl	_	_
4	музыкальный	музыкальный	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
5	жанр	жанр	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	,	_	7	punct	_	_
7	сплав	сплав	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	conj	_	_
8	рэгги	рэгги	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
9	и	и	CCONJ	CC	_	10	cc	_	_
10	метала	метал	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 expl	color:blue
1	Следует	следовать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	добавить	добавить	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	1	xcomp	_	SpaceAfter=No
3	,	,	PUNCT	,	_	7	punct	_	_
4	что	что	SCONJ	IN	_	7	mark	_	_
5	позже	позже	ADV	RBR	Degree=Cmp	7	advmod	_	_
6	были	быть	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	сняты	снять	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	ccomp	_	_
8	два	два	NUM	CD	Animacy=Inan|Case=Nom|Gender=Masc|NumType=Card	9	nummod:gov	_	_
9	минисериала	минисериал	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nsubj:pass	_	SpaceAfter=No
10	,	,	PUNCT	,	_	11	punct	_	_
11	рассказывающих	рассказывать	VERB	VBNL	Animacy=Inan|Aspect=Imp|Case=Gen|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	9	acl	_	_
12	о	о	ADP	IN	_	14	case	_	_
13	дальнейшей	дальнейший	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	_
14	судьбе	судьба	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	11	obl	_	_
15	героев	герой	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	14	nmod	_	SpaceAfter=No
16	:	:	PUNCT	:	_	9	punct	_	_
17	``	``	PUNCT	``	_	19	punct	_	SpaceAfter=No
18	Это	это	PART	UH	_	19	expl	_	_
19	Англия	Англия	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	9	appos	_	_
20	86	86	NUM	CD	Case=Nom|NumType=Card	19	nummod:entity	_	SpaceAfter=No
21	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	25	punct	_	_
22	и	и	CCONJ	CC	_	25	cc	_	_
23	``	``	PUNCT	``	_	25	punct	_	SpaceAfter=No
24	Это	это	PART	UH	_	25	expl	_	_
25	Англия	Англия	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	19	conj	_	_
26	88	88	NUM	CD	Case=Nom|NumType=Card	25	nummod:entity	_	SpaceAfter=No
27	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	25	punct	_	SpaceAfter=No
28	.	.	PUNCT	.	_	1	punct	_	_

~~~


