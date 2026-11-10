---
layout: base
title:  'Statistics of flat in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="ru_pud-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="ru_pud-dep-flat-name.html">flat:name</a></tt>.

60 nodes (0%) are attached to their parents as `flat`.

60 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.55.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (48; 80% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (9; 15% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat	color:blue
1	В	в	ADP	IN	_	3	case	_	_
2	2011	2011	ADJ	ORD	_	3	amod	_	_
3	году	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	_	_
4	Блант	Блант	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	_	_
5	была	быть	AUX	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	aux:pass	_	_
6	названа	назвать	VERB	VBNH	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
7	послом	посол	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	xcomp	_	_
8	нового	новый	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	аромата	аромат	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
10	Yves	Yves	X	NNP	Foreign=Yes	9	flat	_	_
11	Saint	Saint	X	NNP	Foreign=Yes	10	flat:foreign	_	_
12	Laurent	Laurent	X	NNP	Foreign=Yes	10	flat:foreign	_	_
13	Opium	Opium	X	NNP	Foreign=Yes	10	flat:foreign	_	SpaceAfter=No
14	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 flat	color:blue
1	Эти	этот	DET	DT	Case=Nom|Number=Plur|PronType=Dem	3	det	_	_
2	растительные	растительный	ADJ	JJ	Case=Nom|Degree=Pos|Number=Plur	3	amod	_	_
3	семьи	семья	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	6	nsubj	_	_
4	все	все	ADV	RB	Degree=Pos	5	advmod	_	_
5	еще	еще	ADV	RB	Degree=Pos	6	advmod	_	_
6	присутствуют	присутствовать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	в	в	ADP	IN	_	11	case	_	_
8	Папуа	Папуа	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
9	—	—	PUNCT	-	_	11	punct	_	Proper=True
10	Новой	новый	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	Proper=True
11	Гвинее	Гвинея	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	8	flat	_	SpaceAfter=No
12	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 flat	color:blue
1	Попытки	попытка	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	5	nsubj	_	_
2	достичь	достичь	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	1	xcomp	_	_
3	мира	мир	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	obj	_	_
4	наконец	наконец	ADV	RB	Degree=Pos	5	advmod	_	_
5	завершились	завершиться	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
6	весной	весна	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	5	obl	_	_
7	1415	1415	ADJ	ORD	_	8	amod	_	_
8	года	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	,	_	12	punct	_	_
10	и	и	CCONJ	CC	_	12	cc	_	_
11	Энрике	Энрике	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	_
12	решил	решить	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	_	_
13	выполнить	выполнить	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	12	xcomp	_	_
14	свой	свой	DET	PRP$	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	15	det	_	_
15	план	план	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	13	obj	_	SpaceAfter=No
16	:	:	PUNCT	:	_	15	punct	_	_
17	завоевание	завоевание	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	15	appos	_	_
18	всего	весь	DET	DT	Case=Gen|Gender=Neut|Number=Sing|PronType=Tot	19	det	_	_
19	Королевства	королевство	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	17	nmod	_	_
20	Франция	Франция	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	19	flat	_	SpaceAfter=No
21	.	.	PUNCT	.	_	5	punct	_	_

~~~


