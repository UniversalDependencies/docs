---
layout: base
title:  'Statistics of nummod:gov in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="ru_taiga-dep-nummod-entity.html">nummod:entity</a></tt>.

208 nodes (1%) are attached to their parents as `nummod:gov`.

197 instances of `nummod:gov` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.375.

The following 12 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (187; 90% instances), <tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (5; 2% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod:gov	color:blue
1	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2	2	nsubj	_	_
2	говоришь	говорить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	что	что	SCONJ	_	_	5	mark	_	_
5	любишь	любить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
6	меня	я	PRON	_	Case=Acc|Number=Sing|Person=1	5	obj	_	_
7	по	по	ADP	_	_	8	case	_	_
8	100	100	NUM	_	_	9	nummod:gov	_	_
9	раз	раз	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	2	obj	_	_
10	в	в	ADP	_	_	11	case	_	_
11	день	день	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod:gov	color:blue
1	100	100	NUM	_	_	2	nummod:gov	_	SpaceAfter=No
2	%	%	SYM	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	compound	_	_
3	яблочник	яблочник	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod:gov	color:blue
1	Вторая	второй	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	_	_	6	punct	_	_
3	"	"	PUNCT	_	_	6	punct	_	SpaceAfter=No
4	Сколько	сколько	NUM	_	Case=Nom	5	nummod:gov	_	_
5	всего	всё	PRON	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	6	nsubj	_	_
6	случилось	случиться	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	1	parataxis	_	SpaceAfter=No
7	,	,	PUNCT	_	_	13	punct	_	_
8	пока	пока	SCONJ	_	_	13	mark	_	_
9	три	три	NUM	_	Case=Nom	10	nummod:gov	_	_
10	недели	неделя	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	13	obl	_	_
11	новости	новость	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	13	obj	_	_
12	не	не	PART	_	Polarity=Neg	13	advmod	_	_
13	читал	читать	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	advcl	_	SpaceAfter=No
14	!!!\	!!!\	PUNCT	_	_	6	punct	_	_

~~~


