---
layout: base
title:  'Statistics of flat:name in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_taiga-dep-flat-foreign.html">flat:foreign</a></tt>.

65 nodes (0%) are attached to their parents as `flat:name`.

65 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16923076923077.

The following 3 pairs of parts of speech are connected with `flat:name`: <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (61; 94% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Екатерина	Екатерина	PROPN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	Усакова	Усакова	PROPN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	1	flat:name	_	SpacesAfter=\n

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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	Шейх	шейх	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
2	Салих	Салих	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	appos	_	_
3	аль	аль	PART	_	_	2	flat:name	_	SpaceAfter=No
4	-	-	PUNCT	_	_	2	punct	_	_
5	Фаузан	Фаузан	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	flat:name	_	_
6	сказал	сказать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	:	:	PUNCT	_	_	10	punct	_	_
8	:	:	PUNCT	_	_	10	punct	_	SpaceAfter=No
9	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	Кто	кто	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	_
11	противоречит	противоречить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	22	acl	_	_
12	этому	этот	DET	_	Case=Dat|Gender=Masc|Number=Sing	13	det	_	_
13	манхаджу	Манхадж	PROPN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	11	obj	_	SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	начиная	начинать	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	11	advcl	_	_
16	свой	свой	DET	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	17	det	_	_
17	призыв	призыв	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	15	obj	_	_
18	с	с	ADP	_	_	19	case	_	_
19	чего-то	что-то	PRON	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	15	obl	_	_
20	другого	другой	ADJ	_	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	19	amod	_	SpaceAfter=No
21	,	,	PUNCT	_	_	15	punct	_	_
22	тот	тот	PRON	_	Case=Nom|Gender=Masc|Number=Sing	23	nsubj	_	_
23	противоречит	противоречить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	parataxis	_	_
24	призыву	призыв	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	23	obj	_	_
25	посланников	посланник	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	24	nmod	_	SpaceAfter=No
26	.	.	PUNCT	_	_	6	punct	_	_

~~~


