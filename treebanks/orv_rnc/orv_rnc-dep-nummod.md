---
layout: base
title:  'Statistics of nummod in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="orv_rnc-dep-nummod-gov.html">nummod:gov</a></tt>.

70 nodes (0%) are attached to their parents as `nummod`.

67 instances of `nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15714285714286.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (66; 94% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Тако	тако	ADV	_	Degree=Pos	0	root	_	_
2	ж	жъ	PART	_	_	1	advmod	_	_
3	на	на	ADP	_	_	5	case	_	_
4	обѣ	оба	NUM	_	Case=Acc|Gender=Fem	5	nummod	_	_
5	сторонѣ	сторона	NOUN	_	Case=Acc|Gender=Fem|Number=Adnum	1	obl	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 nummod	color:blue
1	А	а	CCONJ	_	_	9	cc	_	_
2	дворяномъ	дворянинъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	9	iobj	_	_
3	твоимъ	твой	DET	_	Case=Dat|Gender=Masc|Number=Plur|Poss=Yes	2	det	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	како	како	ADV	_	Degree=Pos	6	advmod	_	_
6	пошло	поити	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes	9	advcl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	погонъ	погонъ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	9	obj	_	_
9	имати	имати	VERB	_	Aspect=Imp|VerbForm=Inf	0	root	_	SpaceAfter=No
10	:	:	PUNCT	_	_	15	punct	_	_
11	от	отъ	ADP	_	_	12	case	_	_
12	князя	князь	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	15	orphan	_	_
13	по	по	ADP	_	_	15	case	_	_
14	5	5	NUM	_	Case=Acc	15	nummod:gov	_	_
15	кунъ	куна	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	8	parataxis	_	SpaceAfter=No
16	,	,	PUNCT	_	_	22	punct	_	_
17	а	а	CCONJ	_	_	22	cc	_	_
18	от	отъ	ADP	_	_	19	case	_	_
19	тиуна	тиунъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	22	orphan	_	_
20	по	по	ADP	_	_	22	case	_	_
21	двѣ	два	NUM	_	Case=Acc|Gender=Fem	22	nummod	_	_
22	дългѣи	долгий	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Adnum|Variant=Long	15	conj	_	SpaceAfter=No
23	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 26 nummod	color:blue
1	Да	да	CCONJ	_	_	5	cc	_	_
2	Ярко	Ярко	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
3	же	же	PART	_	_	5	advmod	_	_
4	де	де	PART	_	_	5	advmod	_	_
5	сказывалъ	сказывати	VERB	_	Aspect=Imp|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	0	root	_	SpaceAfter=No
6	:	:	PUNCT	_	_	9	punct	_	_
7	толко	толко	PART	_	_	9	advmod	_	_
8	де	де	PART	_	_	9	advmod	_	_
9	изволитъ	изволити	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	5	conj	_	_
10	государь	государь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
11	послати	послати	VERB	_	Aspect=Perf|VerbForm=Inf	9	xcomp	_	_
12	на	на	ADP	_	_	13	case	_	_
13	Богдоя	Богдой	PROPN	_	Case=Acc|Gender=Masc|Number=Sing	11	obl	_	_
14	князя	князь	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	13	appos	_	_
15	своихъ	свой	DET	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Poss=Yes	18	det	_	_
16	государевыхъ	государевъ	ADJ	_	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	18	amod	_	_
17	ратныхъ	ратный	ADJ	_	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	18	amod	_	_
18	людей	человѣкъ	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	11	obj	_	SpaceAfter=No
19	,	,	PUNCT	_	_	21	punct	_	_
20	и	и	CCONJ	_	_	21	cc	_	_
21	надобно	надобный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	9	conj	_	_
22	де	де	PART	_	_	21	advmod	_	_
23	послати	послати	VERB	_	Aspect=Perf|VerbForm=Inf	21	csubj	_	_
24	ратныхъ	ратный	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	25	amod	_	_
25	людей	человѣкъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	23	obj	_	_
26	тысячь	тысяча	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	25	nummod	_	_
27	съ	съ	ADP	_	_	28	case	_	_
28	шесть	шесть	NUM	_	Case=Acc	26	nummod	_	SpaceAfter=No
29	.	.	PUNCT	_	_	5	punct	_	_

~~~


