---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "zh/dep/aux.html"
udver: '2'
---

An auxiliary is a functional modifier of a verb that is tagged [AUX](). In Mandarin this relation is used for preverbal auxiliaries as well as post-verbal aspect markers. The passive auxiliary 被 _bèi_, however, should use [aux:pass]().

Preverbal auxiliaries may precede the main verb immediately (1) or before other intervening material (2).

~~~ conllu
# visual-style 4 3 aux	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	你	_	PRON	_	_	4	nsubj	_	2SG
2	也	_	ADV	_	_	4	advmod	_	also
3	應該	_	AUX	_	_	4	aux	_	should
4	幫幫	_	VERB	_	_	0	root	_	help
5	我們	_	PRON	_	_	4	obj	_	3PL

1	"You	_	_	_	_	0	_	_	_
2	should	_	_	_	_	0	_	_	_
3	help	_	_	_	_	0	_	_	_
4	us,	_	_	_	_	0	_	_	_
5	too."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 4 2 aux	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	一定	_	ADV	_	_	4	advmod	_	certainly
2	要	_	AUX	_	_	4	aux	_	need
3	先	_	ADV	_	_	4	advmod	_	first
4	管	_	VERB	_	_	0	root	_	control
5	而	_	CCONJ	_	_	7	cc	_	and
6	後	_	ADV	_	_	7	advmod	_	after
7	教	_	VERB	_	_	4	conj	_	teach

1	"One	_	_	_	_	0	_	_	_
2	must	_	_	_	_	0	_	_	_
3	first	_	_	_	_	0	_	_	_
4	control	_	_	_	_	0	_	_	_
5	and	_	_	_	_	0	_	_	_
6	then	_	_	_	_	0	_	_	_
7	teach."	_	_	_	_	0	_	_	_

~~~

Some preverbal auxiliaries may also stack next to each other, in which case the head of all the auxiliaries is still the main verb.

~~~ conllu
# visual-style 3 1 aux	color:blue
# visual-style 3 2 aux	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	應該	_	AUX	_	_	3	aux	_	should
2	可以	_	AUX	_	_	3	aux	_	can
3	做	_	VERB	_	_	0	root	_	do

1	"should	_	_	_	_	0	_	_	_
2	be	_	_	_	_	0	_	_	_
3	able	_	_	_	_	0	_	_	_
4	to	_	_	_	_	0	_	_	_
5	do"	_	_	_	_	0	_	_	_

~~~

有 _yǒu_ and 沒(有) _méi(yǒu)_ may also function as auxiliaries.

~~~ conllu
# visual-style 3 2 aux	color:blue
# visual-style 3 4 aux	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	你	_	PRON	_	_	3	nsubj	_	2SG
2	有	_	AUX	_	_	3	aux	_	PERF
3	進	_	VERB	_	_	0	root	_	enter
4	過	_	AUX	_	_	3	aux	_	EXP
5	教員室	_	NOUN	_	_	3	obj	_	faculty-office

1	"You	_	_	_	_	0	_	_	_
2	have	_	_	_	_	0	_	_	_
3	entered	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_
5	faculty's	_	_	_	_	0	_	_	_
6	office	_	_	_	_	0	_	_	_
7	before."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 3 2 aux	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	我	_	PRON	_	_	3	nsubj	_	1SG
2	沒	_	AUX	_	_	3	aux	_	NEG.PERF
3	改變	_	VERB	_	_	0	root	_	change

1	"I	_	_	_	_	0	_	_	_
2	haven't	_	_	_	_	0	_	_	_
3	changed."	_	_	_	_	0	_	_	_

~~~

Post-verbal aspect markers include 過 _guo_ (experiential), 着/著 _zhe_ (durative), and 了 _le_ (perfective), which immediately follow the verb or predicate adjective it modifies, as seen in (4) and (6).

~~~ conllu
# visual-style 2 3 aux	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	盯	_	VERB	_	_	0	root	_	stare
3	著	_	AUX	_	_	2	aux	_	PROG
4	他	_	PRON	_	_	2	obj	_	3SG.M

1	"I'm	_	_	_	_	0	_	_	_
2	staring	_	_	_	_	0	_	_	_
3	at	_	_	_	_	0	_	_	_
4	him."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:31:44 CEST 2020 -->
