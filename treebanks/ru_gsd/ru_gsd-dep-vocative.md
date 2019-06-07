---
layout: base
title:  'Statistics of vocative in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `vocative`

This relation is universal.

5 nodes (0%) are attached to their parents as `vocative`.

3 instances of `vocative` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `vocative`: <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (2; 40% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 vocative	color:blue
1	``	``	PUNCT	``	_	3	punct	_	SpaceAfter=No
2	Не	не	PART	NEG	Polarity=Neg	3	advmod	_	_
3	думайте	думать	VERB	VBC	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	,	_	5	punct	_	_
5	товарищи	товарищ	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	3	vocative	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1	8	nsubj	_	_
8	бросаю	бросать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	_
9	слова	слово	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	8	obj	_	_
10	на	на	ADP	IN	_	11	case	_	_
11	ветер	ветер	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 vocative	color:blue
1	``	``	PUNCT	``	_	4	punct	_	SpaceAfter=No
2	Адад	Адад	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	vocative	_	_
3	потомство	потомство	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	4	obj	_	_
4	храни	хранить	VERB	VBC	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	21	parataxis	_	SpaceAfter=No
5	&#39;&#39;	&#39;&#39;	PUNCT	.	_	4	punct	_	SpaceAfter=No
6	;	;	PUNCT	:	_	4	punct	_	_
7	dIM	dIM	X	FW	Foreign=Yes	4	list	_	SpaceAfter=No
8	,	,	PUNCT	,	_	9	punct	_	_
9	MU	mu	X	FW	Foreign=Yes	7	list	_	SpaceAfter=No
10	,	,	PUNCT	,	_	11	punct	_	_
11	ŠEŠ	šeš	X	FW	Foreign=Yes	7	list	_	_
12	или	или	CCONJ	CC	_	13	cc	_	_
13	mdIM	mdIM	X	FW	Foreign=Yes	7	conj	_	SpaceAfter=No
14	,	,	PUNCT	,	_	15	punct	_	_
15	MU	mu	X	FW	Foreign=Yes	13	list	_	SpaceAfter=No
16	,	,	PUNCT	,	_	17	punct	_	_
17	ŠEŠ	šeš	X	FW	Foreign=Yes	13	list	_	SpaceAfter=No
18	)	)	PUNCT	)	_	4	punct	_	_
19	--	--	PUNCT	--	_	21	punct	_	_
20	касситский	касситский	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	21	amod	_	_
21	царь	царь	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
22	Вавилонии	Вавилония	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	21	nmod	_	SpaceAfter=No
23	,	,	PUNCT	,	_	21	punct	_	_
24	правил	править	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	21	parataxis	_	_
25	приблизительно	приблизительно	ADV	RB	Degree=Pos	27	advmod	_	_
26	в	в	ADP	IN	_	30	case	_	_
27	1219	1219	ADJ	ORD	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	30	amod	_	_
28	--	--	PUNCT	--	_	29	punct	_	_
29	1188	1188	ADJ	ORD	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	27	nmod	_	_
30	годах	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	24	obl	_	_
31	до	до	ADP	IN	_	33	case	_	_
32	н.	наш	DET	PRP$	Abbr=Yes	33	det	_	_
33	э	э	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	30	nmod	_	SpaceAfter=No
34	.	.	PUNCT	.	_	21	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 vocative	color:blue
1	Бутафор	бутафор	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	ccomp	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	Иван	Иван	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	vocative	_	_
4	Васильевич	Васильевич	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	flat:name	_	SpaceAfter=No
5	!	!	PUNCT	.	_	1	punct	_	_
6	--	--	PUNCT	--	_	7	punct	_	_
7	застонал	застонать	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	Фома	Фома	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	SpaceAfter=No
9	,	,	PUNCT	,	_	13	punct	_	_
10	а	а	CCONJ	CC	_	13	cc	_	_
11	Иван	Иван	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
12	Васильевич	Васильевич	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	11	flat:name	_	_
13	утих	утихнуть	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	conj	_	SpaceAfter=No
14	,	,	PUNCT	,	_	17	punct	_	_
15	а	а	CCONJ	CC	_	17	cc	_	_
16	бутафора	бутафор	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	17	obj	_	_
17	выпустили	выпустить	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	13	conj	_	_
18	с	с	ADP	IN	_	19	case	_	_
19	миром	мир	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	17	obl	_	SpaceAfter=No
20	.	.	PUNCT	.	_	7	punct	_	_

~~~


