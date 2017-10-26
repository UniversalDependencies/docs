---
layout: base
title:  'Statistics of nummod in UD_Polish'
udver: '2'
---

## Treebank Statistics: UD_Polish: Relations: `nummod`

This relation is universal.

99 nodes (0%) are attached to their parents as `nummod`.

91 instances of `nummod` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.03030303030303.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="pl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl-pos-NUM.html">NUM</a></tt> (86; 87% instances), <tt><a href="pl-pos-NUM.html">NUM</a></tt>-<tt><a href="pl-pos-NUM.html">NUM</a></tt> (6; 6% instances), <tt><a href="pl-pos-ADP.html">ADP</a></tt>-<tt><a href="pl-pos-NUM.html">NUM</a></tt> (5; 5% instances), <tt><a href="pl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl-pos-NUM.html">NUM</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod	color:blue
1	Rok	rok	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
2	2007	2007	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	1	amod	_	_
3	zamknięto	zamknięty	ADJ	imps:perf	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	_
4	liczbą	liczba	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	3	obj	_	_
5	238400	238400	NUM	num:pl:gen:m1:congr	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	4	nummod	_	_
6	pasażerów	pasażer	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	5	nmod	_	SpaceAfter=No
7	.	.	PUNCT	interp	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nummod	color:blue
1	Na	na	ADP	prep:loc	AdpType=Prep|Case=Loc	3	case	_	_
2	tej	ten	DET	adj:sg:loc:f:pos	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	podstawie	podstawa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	4	obl	_	_
4	otrzymają	otrzymać	VERB	fin:pl:ter:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	diety	dieta	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	4	obj	_	SpaceAfter=No
6	,	,	PUNCT	interp	_	8	punct	_	_
7	od	od	ADP	prep:gen:nwok	AdpType=Prep|Case=Gen|Variant=Short	8	case	_	_
8	1500	1500	NUM	num:pl:gen:m2:congr	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur	5	nummod	_	_
9	do	do	ADP	prep:gen	AdpType=Prep|Case=Gen	10	case	_	_
10	2000	2000	NUM	num:pl:gen:m2:congr	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur	8	nummod	_	_
11	złotych	złoty	NOUN	subst:pl:gen:m2	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	interp	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nummod	color:blue
1	-	-	PUNCT	interp	_	2	punct	_	_
2	Uwiną	uwinąć	VERB	fin:pl:ter:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	się	się	PRON	qub	PronType=Prs|Reflex=Yes	2	expl:pv	_	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	2	advmod	_	_
5	ciągu	ciąg	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	case	_	_
6	trzech	trzy	NUM	num:pl:gen:m3:congr	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	nummod	_	_
7	lat	rok	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	interp	_	2	punct	_	_

~~~


