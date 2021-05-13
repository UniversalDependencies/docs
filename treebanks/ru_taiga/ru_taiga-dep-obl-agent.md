---
layout: base
title:  'Statistics of obl:agent in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-obl.html">obl</a></tt>.

81 nodes (0%) are attached to their parents as `obl:agent`.

66 instances of `obl:agent` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.59259259259259.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (56; 69% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (13; 16% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (10; 12% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Колонны	колонна	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	2	nsubj	_	_
2	шли	идти	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	разделенные	разделить	VERB	_	Aspect=Perf|Case=Nom|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	1	acl	_	_
5	изрядными	изрядный	ADJ	_	Case=Ins|Degree=Pos|Number=Plur	6	amod	_	_
6	интервалами	интервал	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	4	obl:agent	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	метров	метр	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	_
9	по	по	ADP	_	_	8	case	_	_
10	150	150	NUM	_	NumForm=Digit|NumType=Card	8	nummod:gov	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:agent	color:blue
1	Опрошенные	опросить	VERB	_	Aspect=Perf|Case=Nom|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	5	acl	_	_
2	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
3	Известиями	Известия	PROPN	_	Animacy=Inan|Case=Ins|Gender=Neut|NameType=Com|Number=Plur	1	obl:agent	_	SpaceAfter=No
4	"	"	PUNCT	_	_	3	punct	_	_
5	эксперты	эксперт	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
6	не	не	PART	_	Polarity=Neg	7	advmod	_	_
7	разделяют	разделять	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	этого	этот	DET	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	оптимизма	оптимизм	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:agent	color:blue
1	Так	так	ADV	_	Degree=Pos|PronType=Dem	8	parataxis	_	_
2	вот	вот	PART	_	_	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	встреченный	встречить	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	6	acl	_	_
5	нами	мы	PRON	_	Case=Ins|Number=Plur|Person=1|PronType=Prs	4	obl:agent	_	_
6	Кирилл	Кирилл	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	8	nsubj	_	_
7	очень	очень	ADV	_	Degree=Pos	8	advmod	_	_
8	удивлялся	удивляться	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


