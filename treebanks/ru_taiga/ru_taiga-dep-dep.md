---
layout: base
title:  'Statistics of dep in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `dep`

This relation is universal.

11 nodes (0%) are attached to their parents as `dep`.

6 instances of `dep` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.09090909090909.

The following 9 pairs of parts of speech are connected with `dep`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (2; 18% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 9% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (1; 9% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (1; 9% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 9% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 dep	color:blue
1	Зарплату	зарплата	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
2	обещанную	обещать	VERB	_	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	amod	_	_
3	не	не	PART	_	Polarity=Neg	4	advmod	_	_
4	платят	платить	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	с	с	ADP	_	_	7	case	_	_
7	пьяницами	пьяница	NOUN	_	Animacy=Anim|Case=Ins|Gender=Fem|Number=Plur	4	dep	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 dep	color:blue
1	вот	вот	PART	_	_	2	advmod	_	_
2	так	так	ADV	_	Degree=Pos	5	advmod	_	_
3	нас	мы	PRON	_	Case=Acc|Number=Plur|Person=1	5	obj	_	_
4	и	и	PART	_	_	5	advmod	_	_
5	подкупают	подкупать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	))))))	))))))	SYM	_	_	5	discourse	_	_
7	@...	@...	PROPN	_	_	5	dep	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dep	color:blue
1	...	...	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	наука	наука	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	должна	должен	ADJ	_	Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	0	root	_	_
4	не	не	PART	_	Polarity=Neg	5	advmod	_	_
5	получать	получать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	3	dep	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	SpaceAfter=No
7	а	а	CCONJ	_	_	8	cc	_	_
8	зарабатывать	зарабатывать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	5	conj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


