---
layout: base
title:  'Statistics of csubj in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `csubj`

This relation is universal.

32 nodes (0%) are attached to their parents as `csubj`.

29 instances of `csubj` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.90625.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (21; 66% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (5; 16% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (4; 13% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	Справедливо	справедливо	VERB	PRED	_	0	root	_	_
2	сказать	сказать	VERB	VB	Aspect=Perf	1	csubj	_	SpaceAfter=No
3	,	,	PUNCT	,	_	7	punct	_	_
4	что	что	SCONJ	IN	_	7	mark	_	_
5	Рокко	Рокко	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
6	Каталано	Каталано	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	flat:name	_	_
7	работает	работать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	ccomp	_	_
8	и	и	PART	UH	_	10	advmod	_	_
9	в	в	ADP	IN	_	10	case	_	_
10	стиле	стиль	NOUN	NN	Animacy=Inan|Gender=Masc|Number=Sing	7	obl	_	_
11	ретро	ретро	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 csubj	color:blue
1	Если	если	SCONJ	IN	_	3	mark	_	_
2	все	все	PRON	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	3	obj	_	_
3	сделать	сделать	VERB	VB	Aspect=Perf	8	advcl	_	_
4	правильно	правильно	ADV	RB	_	3	advmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	3	punct	_	_
6	то	то	SCONJ	RB	_	8	mark	_	_
7	это	это	PRON	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	9	obj	_	_
8	невозможно	невозможный	ADV	RB	_	0	root	_	_
9	обнаружить	обнаружить	VERB	VB	Aspect=Perf	8	csubj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	12	punct	_	_
11	но	но	CCONJ	CC	_	12	cc	_	_
12	это	это	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	conj	_	_
13	в	в	ADP	IN	_	14	case	_	_
14	теории	теория	NOUN	NN	Animacy=Inan|Gender=Fem|Number=Sing	12	orphan	_	SpaceAfter=No
15	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 csubj	color:blue
1	Стивен	Стивен	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
2	Уилер	Уилер	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	flat:name	_	SpaceAfter=No
3	,	,	PUNCT	,	_	4	punct	_	_
4	редактор	редактор	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	appos	_	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	_
6	загружал	загружать	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
7	Киплинга	Киплинг	PROPN	NNP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
8	работой	работа	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	6	iobj	_	SpaceAfter=No
9	,	,	PUNCT	,	_	12	punct	_	_
10	но	но	CCONJ	CC	_	12	cc	_	_
11	Киплинга	Киплинг	PROPN	NNP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	14	obj	_	_
12	невозможно	невозможный	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|Variant=Short	6	conj	_	_
13	было	быть	VERB	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	12	cop	_	_
14	остановить	остановить	VERB	VB	Aspect=Perf	12	csubj	_	SpaceAfter=No
15	.	.	PUNCT	.	_	6	punct	_	_

~~~


