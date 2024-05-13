---
layout: base
title:  'Statistics of flat:foreign in UD_Russian'
udver: '2'
---

## Treebank Statistics: UD_Russian: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="ru-dep-flat.html">flat</a></tt>.

11 nodes (0%) are attached to their parents as `flat:foreign`.

11 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.72727272727273.

The following 2 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="ru-pos-ADV.html">ADV</a></tt>-<tt><a href="ru-pos-ADV.html">ADV</a></tt> (10; 91% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 flat:foreign	color:blue
1	Если	ЕСЛИ	SCONJ	IN	_	6	mark	_	_
2	какое	КАКОЙ	DET	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	amod	_	_
3	-	-	PUNCT	-	_	2	goeswith	_	_
4	либо	ЛИБО	ADV	AFX	_	2	goeswith	_	_
5	учреждение	УЧРЕЖДЕНИЕ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	6	nsubj	_	_
6	обращалось	ОБРАЩАТЬСЯ	VERB	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	22	advcl	_	_
7	к	К	ADP	IN	_	8	case	_	_
8	императору	ИМПЕРАТОР	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	6	obl	_	_
9	с	С	ADP	IN	_	10	case	_	_
10	докладом	ДОКЛАД	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	6	obl	_	_
11	``	``	PUNCT	``	_	12	punct	_	SpaceAfter=No
12	цзоучао	ЦЗОУЧАО	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	10	appos	_	_
13	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	12	punct	_	_
14	(	(	PUNCT	(	_	15	punct	_	SpaceAfter=No
15	奏	奏	ADV	FW	_	12	appos	_	_
16	抄	抄	ADV	FW	_	15	flat:foreign	_	SpaceAfter=No
17	)	)	PUNCT	)	_	15	punct	_	SpaceAfter=No
18	,	,	PUNCT	,	_	6	punct	_	_
19	то	ТО	ADV	RB	_	22	advmod	_	_
20	доклад	ДОКЛАД	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	22	nsubj	_	_
21	сначала	СНАЧАЛА	ADV	RB	_	22	advmod	_	_
22	поступал	ПОСТУПАТЬ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
23	к	К	ADP	IN	_	24	case	_	_
24	цзяшичжунам	ЦЗЯШИЧЖУН	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	22	obl	_	_
25	на	НА	ADP	IN	_	26	case	_	_
26	проверку	ПРОВЕРКА	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	22	obl	_	_
27	и	И	CCONJ	CC	_	28	cc	_	_
28	исправление	ИСПРАВЛЕНИЕ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	26	conj	_	_
29	неисправностей	НЕИСПРАВНОСТЬ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	28	nmod	_	_
30	и	И	CCONJ	CC	_	31	cc	_	_
31	упущений	УПУЩЕНИЕ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	29	conj	_	SpaceAfter=No
32	.	.	PUNCT	.	_	22	punct	_	_

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 33 flat:foreign	color:blue
1	Тем	ТО	PRON	DT	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	2	det	_	_
2	самым	САМЫЙ	ADJ	JJL	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	18	amod	_	_
3	его	ЕГО	DET	PRP$	Person=3	4	det	_	_
4	фраза	ФРАЗА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	18	nsubj	_	_
5	``	``	PUNCT	``	_	8	punct	_	SpaceAfter=No
6	Я	Я	PRON	PRP	Case=Nom|Number=Sing|Person=1	8	nsubj	_	_
7	--	--	PUNCT	--	_	8	punct	_	_
8	берлинец	БЕРЛИНЕЦ	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	appos	_	_
9	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	8	punct	_	_
10	(	(	PUNCT	(	_	14	punct	_	SpaceAfter=No
11	``	``	PUNCT	``	_	14	punct	_	SpaceAfter=No
12	Ich	ICH	PRON	PRP	Case=Nom|Number=Sing|Person=1	14	nsubj	_	_
13	bin	BIN	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	cop	_	_
14	Berliner	BERLINER	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	8	appos	_	_
15	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	14	punct	_	SpaceAfter=No
16	)	)	PUNCT	)	_	14	punct	_	_
17	якобы	ЯКОБЫ	ADV	RB	_	18	advmod	_	_
18	превратилась	ПРЕВРАТИТЬСЯ	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
19	по	ПО	ADP	IN	_	20	case	_	_
20	смыслу	СМЫСЛ	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	18	obl	_	_
21	в	В	ADP	IN	_	26	case	_	_
22	``	``	PUNCT	``	_	26	punct	_	SpaceAfter=No
23	Я	Я	PRON	PRP	Case=Nom|Number=Sing|Person=1	26	nsubj	_	_
24	--	--	PUNCT	--	_	26	punct	_	_
25	берлинский	БЕРЛИНСКИЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	26	amod	_	_
26	пончик	ПОНЧИК	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	18	obl	_	_
27	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	26	punct	_	_
28	(	(	PUNCT	(	_	33	punct	_	SpaceAfter=No
29	``	``	PUNCT	``	_	33	punct	_	SpaceAfter=No
30	Ich	ICH	PRON	PRP	Case=Nom|Number=Sing|Person=1	33	nsubj	_	_
31	bin	BIN	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	33	cop	_	_
32	ein	EIN	DET	DT	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	33	det	_	_
33	Berliner	BERLINER	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	26	flat:foreign	_	_
34	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	33	punct	_	SpaceAfter=No
35	)	)	PUNCT	)	_	33	punct	_	SpaceAfter=No
36	,	,	PUNCT	,	_	26	punct	_	_
37	чем	ЧТО	PRON	WP	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	39	iobj	_	_
38	якобы	ЯКОБЫ	ADV	RB	_	39	advmod	_	_
39	вызвала	ВЫЗВАТЬ	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	26	acl:relcl	_	_
40	смех	СМЕХ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	39	obj	_	_
41	у	У	ADP	IN	_	42	case	_	_
42	немцев	НЕМЕЦ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	39	obl	_	SpaceAfter=No
43	.	.	PUNCT	.	_	18	punct	_	_

~~~


