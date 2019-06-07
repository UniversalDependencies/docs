---
layout: base
title:  'Statistics of obl:agent in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-obl.html">obl</a></tt>.

23 nodes (0%) are attached to their parents as `obl:agent`.

16 instances of `obl:agent` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.91304347826087.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (13; 57% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (5; 22% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (3; 13% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


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
10	150	150	NUM	_	_	8	nummod:gov	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:agent	color:blue
1	Так	так	ADV	_	Degree=Pos	8	parataxis	_	_
2	вот	вот	PART	_	_	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	встреченный	встречить	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	6	amod	_	_
5	нами	мы	PRON	_	Case=Ins|Number=Plur|Person=1	4	obl:agent	_	_
6	Кирилл	Кирилл	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
7	очень	очень	ADV	_	Degree=Pos	8	advmod	_	_
8	удивлялся	удивляться	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 obl:agent	color:blue
1	Все	весь	DET	_	Animacy=Inan|Case=Acc|Number=Plur	2	det	_	_
2	Законы	Закон	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	11	obj	_	_
3	принятые	принять	VERB	_	Animacy=Inan|Aspect=Perf|Case=Acc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	2	acl	_	_
4	за	за	ADP	_	_	7	case	_	_
5	последние	последний	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	6	amod	_	_
6	16	16	NUM	_	_	7	nummod:gov	_	_
7	лет	год	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	obl	_	_
8	ГД	ГД	PROPN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	3	obl:agent	_	_
9	Путин	Путин	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	_
10	не	не	PART	_	_	11	advmod	_	_
11	подписывал	подписывать	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
12	?	?	PUNCT	_	_	11	punct	_	SpaceAfter=No
13	))))	))))	SYM	_	_	11	discourse	_	SpaceAfter=No

~~~


