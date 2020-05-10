---
layout: base
title:  'Statistics of nsubj:pass in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-nsubj.html">nsubj</a></tt>.

197 nodes (0%) are attached to their parents as `nsubj:pass`.

131 instances of `nsubj:pass` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.63451776649746.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (154; 78% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (29; 15% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (5; 3% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	Либеральные	либеральный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	2	amod	_	_
2	сердца	сердце	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	3	nsubj:pass	_	_
3	разбиты	разбить	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	Что	что	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj:pass	_	_
2	у	у	ADP	_	_	3	case	_	_
3	нас	мы	PRON	_	Case=Gen|Number=Plur|Person=1	5	obl	_	_
4	сейчас	сейчас	ADV	_	Degree=Pos	5	advmod	_	_
5	ловится	ловить	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Климентьев	Климентьев	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	уже	уже	ADV	_	Degree=Pos	3	advmod	_	_
3	зарегистрирован	зарегистрировать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	кандидатом	кандидат	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	3	xcomp	_	_
5	в	в	ADP	_	_	6	case	_	_
6	губернаторы	губернатор	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


