---
layout: base
title:  'Statistics of flat:name in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_taiga-dep-flat-foreign.html">flat:foreign</a></tt>.

215 nodes (0%) are attached to their parents as `flat:name`.

215 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15348837209302.

The following 4 pairs of parts of speech are connected with `flat:name`: <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (210; 98% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	Славный	славный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	винни	винни	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
3	пух	пух	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	flat:name	_	SpaceAfter=No
4	)	)	SYM	_	_	2	discourse	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	жириновский	Жириновский	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	предложил	предложить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	****ять	****ять	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	2	xcomp	_	_
4	надежду	надежда	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	3	obj	_	_
5	савченко	Савченко	PROPN	_	Animacy=Anim|Case=Dat|Gender=Fem|Number=Sing	4	flat:name	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	****ить	****ить	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	3	conj	_	_
8	киев	Киев	PROPN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	Гиганты	гигант	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	_
2	Возрожденья	возрожденье	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	_
3	Михайло	михайло	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	appos	_	_
4	Ангел	ангел	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	flat:name	_	_
5	и	и	PART	PART	_	7	cc	_	_
6	львокрепкий	львокрепкий	ADJ	ADJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	бородач	бородача	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	conj	_	_
8	из	из	ADP	ADP	_	9	case	_	_
9	Винчи	винчи	PROPN	PROPN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
10	Творили	творить	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	красками	краска	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	10	iobj	_	_
12	и	и	CCONJ	CONJ	_	13	cc	_	_
13	углем	уголь	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	11	conj	_	_
14	чудо	чудо	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	10	obj	_	SpaceAfter=No
15	:	:	PUNCT	_	_	18	punct	_	_
16	На	на	ADP	ADP	_	17	case	_	_
17	плоском	плоский	ADJ	NOUN	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	18	obl	_	_
18	углубляли	углублять	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	10	parataxis	_	_
19	мир	мир	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	18	obj	_	SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	Лепили	лепить	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	18	conj	_	_
22	тело	тело	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	21	obj	_	_
23	в	в	ADP	ADP	_	24	case	_	_
24	воздухе	воздух	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	21	obl	_	_
25	пространном	пространный	ADJ	ADJ	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	24	amod	_	SpaceAfter=No
26	.	.	PUNCT	_	_	10	punct	_	_

~~~


