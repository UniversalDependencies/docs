---
layout: base
title:  'Statistics of nsubj:pass in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-nsubj.html">nsubj</a></tt>.

78 nodes (0%) are attached to their parents as `nsubj:pass`.

50 instances of `nsubj:pass` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.32051282051282.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (60; 77% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (11; 14% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 1% instances).


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
1	Что	что	PRON	_	Case=Nom	5	nsubj:pass	_	_
2	у	у	ADP	_	_	3	case	_	_
3	нас	мы	PRON	_	Case=Gen|Number=Plur|Person=1	5	obl	_	_
4	сейчас	сейчас	ADV	_	Degree=Pos	5	advmod	_	_
5	ловится	ловить	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 nsubj:pass	color:blue
1	это	это	PRON	NOUN	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
2	--	--	PUNCT	--	_	3	punct	_	_
3	правда	правда	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
4	синих	синий	ADJ	ADJ	Case=Gen|Degree=Pos|Number=Plur	5	amod	_	_
5	глаз	глаз	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	,	_	10	punct	_	_
7	сестры	сестра	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Plur	10	nsubj	_	SpaceAfter=No
8	-	-	PUNCT	-	_	9	punct	_	SpaceAfter=No
9	рыбы	рыба	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Plur	7	appos	_	_
10	льнут	льнуть	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	_
11	к	к	ADP	ADP	_	12	case	_	_
12	оконцу	оконце	NOUN	NOUN	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	10	obl	_	SpaceAfter=No
13	:	:	PUNCT	:	_	16	punct	_	_
14	это	это	PART	NOUN	_	16	expl	_	_
15	шелест	шелест	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	16	nsubj:pass	_	_
16	слышен	слышный	ADJ	ADJ	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	10	parataxis	_	_
17	чей	чей	DET	ADJ	Case=Nom|Gender=Masc|Number=Sing	15	det	_	SpaceAfter=No
18	?	?	PUNCT	?	_	3	punct	_	_

~~~


