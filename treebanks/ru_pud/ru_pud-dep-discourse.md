---
layout: base
title:  'Statistics of discourse in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `discourse`

This relation is universal.

9 nodes (0%) are attached to their parents as `discourse`.

9 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.66666666666667.

The following 7 pairs of parts of speech are connected with `discourse`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (3; 33% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 11% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (1; 11% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADP.html">ADP</a></tt> (1; 11% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-INTJ.html">INTJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 5 discourse	color:blue
1	Мы	мы	PRON	PRP	Case=Nom|Number=Plur|Person=1	3	nsubj	_	_
2	очень	очень	ADV	RB	_	3	advmod	_	_
3	расстроены	расстраивать	ADJ	JJ	Animacy=Inan|Case=Nom|Number=Plur|Variant=Short	0	root	_	SpaceAfter=No
4	,	,	PUNCT	,	_	5	punct	_	_
5	ведь	ведь	ADV	UH	_	13	discourse	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	играя	играть	VERB	VBG	Aspect=Imp|VerbForm=Part	13	advcl	_	_
8	на	на	ADP	IN	_	10	case	_	_
9	своем	свой	DET	PRP$	Gender=Neut|Number=Sing|Reflex=Yes	10	det	_	_
10	поле	поле	NOUN	NN	Animacy=Inan|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
11	,	,	PUNCT	,	_	7	punct	_	_
12	мы	мы	PRON	PRP	Case=Nom|Number=Plur|Person=1	13	nsubj	_	_
13	умудрились	умудриться	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past	3	advcl	_	_
14	потерять	потерять	VERB	VB	Aspect=Perf	13	xcomp	_	_
15	шесть	шесть	NUM	CD	Case=Acc	16	nummod	_	_
16	очков	очки	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	14	obj	_	_
17	в	в	ADP	IN	_	18	case	_	_
18	рейтинге	рейтинг	NOUN	NN	Animacy=Inan|Gender=Masc|Number=Sing	14	obl	_	SpaceAfter=No
19	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 discourse	color:blue
1	В	в	ADP	IN	_	3	case	_	_
2	течение	течение	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	1	fixed	_	_
3	Войны	война	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	16	obl	_	_
4	Первой	первый	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Variant=Long	5	amod	_	Proper=True
5	коалиции	коалиция	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	,	_	10	punct	_	_
7	после	после	ADP	IN	_	10	case	_	_
8	Великой	великий	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Variant=Long	10	amod	_	Proper=True
9	французской	французский	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Variant=Long	10	amod	_	Proper=True
10	революции	революция	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	3	appos	_	SpaceAfter=No
11	,	,	PUNCT	,	_	10	punct	_	_
12	все	весь	ADV	RB	_	13	discourse	_	_
13	больше	много	DET	DT	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	14	det	_	_
14	внимания	внимание	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	16	nsubj:pass	_	_
15	было	быть	AUX	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	16	aux:pass	_	_
16	обращено	обратить	VERB	VBN	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|Voice=Pass	0	root	_	_
17	на	на	ADP	IN	_	21	case	_	_
18	молодого	молодой	ADJ	JJ	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Variant=Long	21	amod	_	_
19	корсиканского	корсиканский	ADJ	JJ	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Variant=Long	21	amod	_	_
20	артиллеристского	артиллеристский	ADJ	JJ	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Variant=Long	21	amod	_	_
21	офицера	офицер	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	16	obl	_	_
22	Наполеона	Наполеон	PROPN	NNP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	21	nmod	_	_
23	Бонапарта	Бонапарт	PROPN	NNP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	22	flat:name	_	SpaceAfter=No
24	.	.	PUNCT	.	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 discourse	color:blue
1	Сейчас	сейчас	ADV	RB	_	3	advmod	_	_
2	там	там	ADV	RB	_	3	advmod	_	_
3	можно	можно	VERB	PRED	_	0	root	_	_
4	увидеть	увидеть	VERB	VB	Aspect=Perf	3	xcomp	_	_
5	только	только	ADV	RB	_	6	discourse	_	_
6	руины	руины	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	4	obj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	_	_

~~~


