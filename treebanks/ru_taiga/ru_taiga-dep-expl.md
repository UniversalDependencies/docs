---
layout: base
title:  'Statistics of expl in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `expl`

This relation is universal.

5 nodes (0%) are attached to their parents as `expl`.

5 instances of `expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.8.

The following 3 pairs of parts of speech are connected with `expl`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (3; 60% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 expl	color:blue
1	-	-	PUNCT	_	_	4	punct	_	_
2	Еще	еще	ADV	_	Degree=Pos	3	advmod	_	_
3	как	как	ADV	_	Degree=Pos	4	advmod	_	_
4	кажется	казаться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
5	—	—	PUNCT	_	_	12	punct	_	_
6	это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	12	expl	_	_
7	собака	собака	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	12	nsubj	_	_
8	твоя	твой	DET	_	Case=Nom|Gender=Fem|Number=Sing	7	det	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	падла	падла	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	7	appos	_	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	_
12	наср@ла	насрать	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	parataxis	_	SpaceAfter=No
13	!	!	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 expl	color:blue
1	Так	так	ADV	_	Degree=Pos	4	advmod	_	_
2	это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	4	expl	_	_
3	все	все	PRON	_	Animacy=Anim|Case=Nom|Number=Plur	4	nsubj	_	_
4	сюда	сюда	ADV	_	Degree=Pos	0	root	_	SpaceAfter=No
5	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 expl	color:blue
1	Лучше	лучше	ADV	_	Degree=Cmp	3	advmod	_	_
2	всего	всё	PRON	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	1	obl	_	_
3	скажите	сказать	VERB	_	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
4	это	это	PART	_	_	8	expl	_	_
5	юбиляр	юбиляр	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
6	или	или	CCONJ	_	_	7	cc	_	_
7	вы	вы	PRON	_	Case=Nom|Number=Plur|Person=2	5	conj	_	_
8	слили	слить	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	3	ccomp	_	_
9	за	за	ADP	_	_	10	case	_	_
10	бабло	бабло	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	8	obl	_	_
11	на	на	ADP	_	_	12	case	_	_
12	выборах	выборы	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	8	obl	_	_
13	прокурорам	прокурор	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	8	iobj	_	_
14	беглым	беглый	ADJ	_	Case=Dat|Degree=Pos|Number=Plur	13	amod	_	_
15	и	и	CCONJ	_	_	16	cc	_	_
16	действующим	действовать	VERB	_	Aspect=Imp|Case=Dat|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	14	conj	_	_

~~~


