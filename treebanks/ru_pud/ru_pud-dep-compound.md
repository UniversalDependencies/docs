---
layout: base
title:  'Statistics of compound in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `compound`

This relation is universal.

9 nodes (0%) are attached to their parents as `compound`.

5 instances of `compound` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.44444444444444.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (7; 78% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (2; 22% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 compound	color:blue
1	Город	город	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No
2	-	-	PUNCT	-	_	3	punct	_	SpaceAfter=No
3	государство	государство	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	1	compound	_	_
4	возник	возникнуть	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	в	в	ADP	IN	_	8	case	_	_
6	тот	тот	DET	DT	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	det	_	_
7	же	же	PART	UH	_	6	advmod	_	_
8	период	период	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	12	punct	_	_
10	что	что	SCONJ	IN	_	12	mark	_	_
11	и	и	PART	UH	_	12	advmod	_	_
12	Сукхотай	Сукхотай	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 compound	color:blue
1	После	после	ADP	IN	_	2	case	_	_
2	того	то	PRON	DT	Case=Gen|Gender=Neut|Number=Sing	21	obl	_	_
3	как	как	SCONJ	IN	_	5	mark	_	_
4	Киплинг	Киплинг	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
5	вернулся	вернуться	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	2	acl	_	_
6	в	в	ADP	IN	_	7	case	_	_
7	Лахор	Лахор	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
8	,	,	PUNCT	,	_	5	punct	_	_
9	в	в	ADP	IN	_	10	case	_	_
10	период	период	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	21	obl	_	_
11	с	с	ADP	IN	_	12	case	_	_
12	ноября	ноябрь	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
13	1886	1886	ADJ	ORD	_	12	nmod	_	_
14	по	по	ADP	IN	_	15	case	_	_
15	июнь	июнь	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	nmod	_	_
16	1887	1887	ADJ	ORD	_	17	amod	_	_
17	года	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	15	nmod	_	_
18	в	в	ADP	IN	_	19	case	_	_
19	газете	газета	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	21	obl	_	_
20	были	быть	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	21	aux:pass	_	_
21	опубликованы	опубликовать	VERB	VBNH	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
22	тридцать	тридцать	NUM	CD	Case=Nom	23	compound	_	_
23	девять	девять	NUM	CD	Case=Nom	24	nummod	_	_
24	историй	история	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	21	nsubj:pass	_	SpaceAfter=No
25	.	.	PUNCT	.	_	21	punct	_	_

~~~


