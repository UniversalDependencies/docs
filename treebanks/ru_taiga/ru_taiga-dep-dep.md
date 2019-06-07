---
layout: base
title:  'Statistics of dep in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `dep`

This relation is universal.

9 nodes (0%) are attached to their parents as `dep`.

5 instances of `dep` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.22222222222222.

The following 8 pairs of parts of speech are connected with `dep`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (2; 22% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 11% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (1; 11% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (1; 11% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (1; 11% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 dep	color:blue
1	Зарплату	зарплата	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
2	обещанную	обещать	VERB	_	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	amod	_	_
3	не	не	PART	_	_	4	advmod	_	_
4	платят	платить	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	с	с	ADP	_	_	7	case	_	_
7	пьяницами	пьяница	NOUN	_	Animacy=Anim|Case=Ins|Gender=Fem|Number=Plur	4	dep	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	SpaceAfter=No

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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dep	color:blue
1	некую	некий	DET	_	Case=Acc|Gender=Fem|Number=Sing	4	dep	_	_
2	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
3	гражданскую	гражданский	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	силу	сила	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	10	obj	_	SpaceAfter=No
5	"	"	PUNCT	_	_	4	punct	_	_
6	раньше	раньше	ADV	_	Degree=Cmp	10	advmod	_	_
7	на	на	ADP	_	_	9	case	_	_
8	всех	весь	DET	_	Case=Loc|Number=Plur	9	det	_	_
9	дебатах	дебаты	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	10	obl	_	_
10	представлял	представлять	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	хач	хач	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


