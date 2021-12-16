---
layout: base
title:  'Statistics of dep in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `dep`

This relation is universal.

31 nodes (0%) are attached to their parents as `dep`.

20 instances of `dep` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.58064516129032.

The following 22 pairs of parts of speech are connected with `dep`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (4; 13% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (3; 10% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (2; 6% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (2; 6% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (1; 3% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (1; 3% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


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
8	.	.	PUNCT	_	_	4	punct	_	_~

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dep	color:blue
1	Я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
2	уже	уже	ADV	_	Degree=Pos	5	advmod	_	_
3	несу	нести	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	dep	_	_
4	одето	одето	X	_	_	5	dep	_	_
5	месяцев	месяц	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	8	obl	_	_
6	каждый	каждый	DET	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Tot	7	det	_	_
7	день	день	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	obl	_	_
8	ем	есть	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	овсянку	овсянка	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	obj	_	_
10	и	и	CCONJ	_	_	11	cc	_	_
11	гречку	гречка	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	8	punct	_	_~

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 15 dep	color:blue
1	А	а	CCONJ	_	_	3	cc	_	_
2	то	то	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	1	fixed	_	_
3	продаются	продаваться	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
4	кормушки	кормушка	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	3	nsubj	_	_
5	и	и	PART	_	_	8	advmod	_	_
6	за	за	ADP	_	_	8	case	_	_
7	15	15	NUM	_	NumForm=Digit|NumType=Card	8	nummod:gov	_	_
8	тысяч	тысяча	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	3	obl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	а	а	CCONJ	_	_	11	cc	_	_
11	делают	делать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
12	то	то	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	11	obj	_	_
13	же	же	PART	_	_	12	advmod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	19	punct	_	_
15	что	что	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	19	dep	_	_
16	и	и	PART	_	_	19	advmod	_	_
17	за	за	ADP	_	_	19	case	_	_
18	5	5	NUM	_	NumForm=Digit|NumType=Card	19	nummod:gov	_	_
19	тысяч	тысяча	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	12	acl	_	SpaceAfter=No
20	.	.	PUNCT	_	_	3	punct	_	_~

~~~


