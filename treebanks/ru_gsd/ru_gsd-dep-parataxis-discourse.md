---
layout: base
title:  'Statistics of parataxis:discourse in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `parataxis:discourse`

This relation is a language-specific subtype of <tt><a href="ru_gsd-dep-parataxis.html">parataxis</a></tt>.

35 nodes (0%) are attached to their parents as `parataxis:discourse`.

35 instances of `parataxis:discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.71428571428571.

The following 3 pairs of parts of speech are connected with `parataxis:discourse`: <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-PRON.html">PRON</a></tt> (33; 94% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 parataxis:discourse	color:blue
1	Тем	то	PRON	DT	Animacy=Inan|Case=Ins|ExtPos=ADV|Gender=Neut|Number=Sing	6	parataxis:discourse	_	_
2	не	не	PART	NEG	_	1	fixed	_	_
3	менее	менее	ADV	RBR	Degree=Cmp	1	fixed	_	SpaceAfter=No
4	,	,	PUNCT	,	_	1	punct	_	_
5	Дезе	Дезе	PROPN	NNP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
6	считали	считать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	роялистом	роялист	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	xcomp	_	_
8	и	и	CCONJ	CC	_	9	cc	_	_
9	боялись	бояться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Mid	6	conj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 parataxis:discourse	color:blue
1	Тем	то	PRON	DT	Animacy=Inan|Case=Ins|ExtPos=ADV|Gender=Neut|Number=Sing	9	parataxis:discourse	_	_
2	не	не	PART	NEG	_	1	fixed	_	_
3	менее	менее	ADV	RBR	Degree=Cmp	1	fixed	_	SpaceAfter=No
4	,	,	PUNCT	,	_	1	punct	_	_
5	экзистенции	экзистенция	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	9	nsubj	_	_
6	(	(	PUNCT	(	_	7	punct	_	SpaceAfter=No
7	люди	человек	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	5	appos	_	SpaceAfter=No
8	)	)	PUNCT	)	_	7	punct	_	_
9	должны	должен	ADJ	JJH	Case=Nom|Degree=Pos|Number=Plur|Variant=Short	0	root	_	_
10	соблюдать	соблюдать	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	9	xcomp	_	_
11	балланс	балланс	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	obj	_	_
12	между	между	ADP	IN	_	13	case	_	_
13	экзистенцией	экзистенция	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	11	nmod	_	SpaceAfter=No
14	,	,	PUNCT	,	_	16	punct	_	_
15	своими	свой	DET	PRP$	Case=Ins|Number=Plur	16	det	_	_
16	ролями	роль	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	13	conj	_	_
17	в	в	ADP	IN	_	18	case	_	_
18	жизни	жизнь	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	16	nmod	_	_
19	и	и	CCONJ	CC	_	20	cc	_	_
20	ничто	ничто	PRON	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	13	conj	_	SpaceAfter=No
21	,	,	PUNCT	,	_	23	punct	_	_
22	чтобы	чтобы	SCONJ	IN	_	23	mark	_	_
23	стать	стать	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	9	advcl	_	_
24	истинными	истинный	ADJ	JJL	Case=Ins|Degree=Pos|Number=Plur	25	amod	_	_
25	существами	существо	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Neut|Number=Plur	23	obj	_	SpaceAfter=No
26	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 29 parataxis:discourse	color:blue
1	Богомолова	Богомолов	PROPN	NNP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	2	obj	_	_
2	приводит	приводить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	Сергей	Сергей	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
4	Трахименок	Трахименок	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	flat:name	_	SpaceAfter=No
5	:	:	PUNCT	:	_	17	punct	_	_
6	``	``	PUNCT	``	_	17	punct	_	SpaceAfter=No
7	--	--	PUNCT	--	_	17	punct	_	_
8	У	у	ADP	IN	_	9	case	_	_
9	меня	я	PRON	PRP	Case=Gen|Number=Sing|Person=1	17	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	13	punct	_	_
11	--	--	PUNCT	--	_	13	punct	_	_
12	медленно	медленно	ADV	RB	Degree=Pos	13	advmod	_	_
13	произнес	произнести	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	17	parataxis	_	_
14	Богомолов	Богомолов	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
15	--	--	PUNCT	--	_	13	punct	_	_
16	не	не	PART	NEG	Polarity=Neg	17	advmod	_	_
17	было	быть	VERB	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	_	_
18	прототипов	прототип	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	17	obl	_	_
19	положительных	положительный	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	20	amod	_	_
20	героев	герой	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	18	nmod	_	SpaceAfter=No
21	...	...	PUNCT	--	_	17	punct	_	_
22	--	--	PUNCT	--	_	27	punct	_	_
23	А	а	CCONJ	CC	_	27	cc	_	_
24	вот	вот	PART	UH	_	25	advmod	_	_
25	отрицательных	отрицательный	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	27	nsubj	_	orig_deprel=amod
26	--	--	PUNCT	--	_	27	punct	_	_
27	были	быть	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	17	conj	_	orig_deprel=ccomp|SpaceAfter=No
28	...	...	PUNCT	.	_	31	punct	_	_
29	Точнее	точно	ADV	RB	Degree=Cmp	31	parataxis:discourse	_	SpaceAfter=No
30	,	,	PUNCT	,	_	31	punct	_	_
31	был	быть	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	27	conj	_	SpaceAfter=No
32	.	.	PUNCT	.	_	2	punct	_	_

~~~


