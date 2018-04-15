---
layout: base
title:  'Statistics of nsubj:pass in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-nsubj.html">nsubj</a></tt>.

46 nodes (0%) are attached to their parents as `nsubj:pass`.

31 instances of `nsubj:pass` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.3695652173913.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (36; 78% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (6; 13% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 2% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nsubj:pass	color:blue
1	Приглашён	пригласить	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
2	только	только	PART	_	_	3	advmod	_	_
3	я	я	PRON	_	Case=Nom|Number=Sing|Person=1	1	nsubj:pass	_	SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	Самое	самый	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	amod	_	_
2	интересное	интересный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	6	nsubj:pass	_	_
3	и	и	CCONJ	_	_	4	cc	_	_
4	полезное	полезный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	conj	_	_
5	будет	быть	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux:pass	_	_
6	опубликовано	опубликовать	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
7	у	у	ADP	_	_	8	case	_	_
8	нас	мы	PRON	_	Case=Gen|Number=Plur|Person=1	6	obl	_	SpaceAfter=No
9	!	!	PUNCT	_	_	6	punct	_	_
10	#фрукты@zerofat	#фрукты@zerofat	X	_	Foreign=Yes	6	parataxis	_	_
11	#творог@zerofat	#творог@zerofat	X	_	Foreign=Yes	10	conj	_	_
12	#запеканки@zerofat	#запеканки@zerofat	X	_	Foreign=Yes	10	conj	_	_

~~~


