---
layout: base
title:  'Statistics of aux:pass in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-aux.html">aux</a></tt>.

19 nodes (0%) are attached to their parents as `aux:pass`.

19 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (18; 95% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Узворванне	узворванне	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
2	можа	магчы	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	быць	быць	AUX	_	Aspect=Imp|VerbForm=Inf|Voice=Act	4	aux:pass	_	_
4	заменена	заменена	VERB	_	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	xcomp	_	_
5	паверхневай	паверхневы	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	апрацоўкай	апрацоўка	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	4	iobj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 aux:pass	color:blue
1	Як	як	SCONJ	IN	_	2	mark	_	_
2	паведамляў	паведамляць	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	16	parataxis	_	_
3	Тэлеграф	Тэлеграф	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	2	punct	_	_
5	23	23	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	16	obl	_	_
6	сакавіка	сакавік	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
7	на	на	ADP	IN	_	8	case	_	_
8	пасяджэнні	пасяджэнне	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	16	obl	_	_
9	савета	савет	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
10	міністраў	міністр	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	9	nmod	_	_
11	замежных	замежны	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	12	amod	_	_
12	спраў	справа	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	10	nmod	_	_
13	краін	краіна	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	10	nmod	_	_
14	Еўрасаюза	Еўрасаюз	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	_
15	было	быць	AUX	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	16	aux:pass	_	_
16	прынята	прыняты	ADJ	JJH	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	_
17	рашэнне	рашэнне	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	16	nsubj	_	_
18	аб	аб	ADP	IN	_	19	case	_	_
19	пашырэнні	пашырэнне	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	17	nmod	_	_
20	санкцый	санкцыя	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	19	nmod	_	_
21	супраць	супраць	ADP	IN	_	22	case	_	_
22	Беларусі	Беларусь	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	20	nmod	_	SpaceAfter=No
23	.	.	PUNCT	PUNCT	_	16	punct	_	_

~~~


