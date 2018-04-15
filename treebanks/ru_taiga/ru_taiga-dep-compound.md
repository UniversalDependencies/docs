---
layout: base
title:  'Statistics of compound in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `compound`

This relation is universal.

10 nodes (0%) are attached to their parents as `compound`.

10 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 7 pairs of parts of speech are connected with `compound`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (3; 30% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (2; 20% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (1; 10% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 10% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	За	за	ADP	_	_	3	case	_	_
2	6	6	NUM	_	_	3	nummod:gov	_	_
3	лет	год	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	obl	_	_
4	освоено	освоить	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
5	42	42	NUM	_	_	6	compound	_	_
6	млн.	миллион	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	7	nummod:gov	_	_
7	га	га	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj:pass	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Но	но	CCONJ	_	_	5	cc	_	_
2	это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
3	-	-	PUNCT	_	_	5	cop	_	_
4	ЕЛЬЦИН	Ельцин	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	compound	_	_
5	ЦЕНТР	центр	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	!!!	!!!	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Присылайте	присылать	VERB	_	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
2	свои	свой	DET	_	Case=Acc|Number=Plur	4	det	_	_
3	ПП	пп	ADJ	_	_	4	compound	_	_
4	рецепты	рецепт	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	1	obj	_	_
5	с	с	ADP	_	_	7	case	_	_
6	качественными	качественный	ADJ	_	Case=Ins|Degree=Pos|Number=Plur	7	amod	_	_
7	фото	фото	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	4	nmod	_	_
8	и	и	CCONJ	_	_	9	cc	_	_
9	подсчетом	подсчет	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	7	conj	_	_
10	БЖУ	бжу	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
11	и	и	CCONJ	_	_	12	cc	_	_
12	калорий	калория	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	10	conj	_	_
13	в	в	ADP	_	_	15	case	_	_
14	предложенные	предложить	VERB	_	Animacy=Inan|Aspect=Perf|Case=Acc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	15	amod	_	_
15	новости	новость	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	1	obl	_	SpaceAfter=No
16	.	.	PUNCT	_	_	1	punct	_	_

~~~


