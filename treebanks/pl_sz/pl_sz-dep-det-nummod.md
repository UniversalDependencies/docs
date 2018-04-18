---
layout: base
title:  'Statistics of det:nummod in UD_Polish-SZ'
udver: '2'
---

## Treebank Statistics: UD_Polish-SZ: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="pl_sz-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="pl_sz-dep-det-numgov.html">det:numgov</a></tt>.

33 nodes (0%) are attached to their parents as `det:nummod`.

32 instances of `det:nummod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21212121212121.

The following 2 pairs of parts of speech are connected with `det:nummod`: <tt><a href="pl_sz-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_sz-pos-DET.html">DET</a></tt> (32; 97% instances), <tt><a href="pl_sz-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_sz-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det:nummod	color:blue
1	Zamontowanie	zamontowanie	NOUN	ger:sg:nom:n:perf:aff	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	4	nsubj	_	_
2	immobilizera	immobilizer	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	to	to	AUX	pred	_	4	cop	_	_
4	wydatek	wydatek	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
5	około	około	PART	qub	_	7	nmod	_	_
6	kilkuset	kilkaset	DET	num:pl:gen:m2:congr	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	7	det:nummod	_	_
7	złotych	złoty	NOUN	subst:pl:gen:m2	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur	4	nmod	_	SpaceAfter=No
8	.	.	PUNCT	interp	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 22 det:nummod	color:blue
1	Sprytny	sprytny	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	oszust	oszust	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	przekonujący	przekonujący	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	interp	_	8	punct	_	_
6	swym	swój	DET	adj:pl:dat:f:pos	Case=Dat|Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	7	det	_	_
7	ofiarom	ofiara	NOUN	subst:pl:dat:f	Case=Dat|Gender=Fem|Number=Plur	8	iobj	_	_
8	proponuje	proponować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	_
9	pozostawienie	pozostawienie	NOUN	ger:sg:acc:n:perf:aff	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	8	obj	_	_
10	obrączki	obrączka	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	9	obj	_	_
11	lub	lub	CCONJ	conj	_	14	cc	_	_
12	innej	inny	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	_
13	bezwartościowej	bezwartościowy	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	_
14	rzeczy	rzecz	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	10	conj	_	_
15	w	w	ADP	prep:acc:nwok	AdpType=Prep|Case=Acc|Variant=Short	16	case	_	_
16	zastaw	zastaw	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	nmod	_	_
17	i	i	CCONJ	conj	_	18	cc	_	_
18	zwrot	zwrot	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	conj	_	_
19	gotówki	gotówka	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	18	nmod	_	_
20	za	za	ADP	prep:acc	AdpType=Prep|Case=Acc	22	case	_	_
21	kilkadziesiąt	kilkadziesiąt	DET	num:pl:acc:f:rec	Case=Acc|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	22	det:numgov	_	_
22	minut	minuta	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	18	det:nummod	_	SpaceAfter=No
23	.	.	PUNCT	interp	_	4	punct	_	_

~~~


