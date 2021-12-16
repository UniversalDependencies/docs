---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

The coordinating conjunction links a conjunction word to its immediately following conjunct as its head. (See [CCONJ]() for a  list of Mandarin Chinese conjunction words.)

~~~ conllu
# visual-style 4 2 cc	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	中文	_	NOUN	_	_	0	root	_	Chinese-language
2	和	_	CCONJ	_	_	4	cc	_	and
3	中國	_	PROPN	_	_	4	compound	_	China
4	歷史	_	NOUN	_	_	1	conj	_	history

1	"Chinese	_	_	_	_	0	_	_	_
2	language	_	_	_	_	0	_	_	_
3	and	_	_	_	_	0	_	_	_
4	Chinese	_	_	_	_	0	_	_	_
5	history"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 5 3 cc	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	先	_	ADV	_	_	2	advmod	_	first
2	管	_	VERB	_	_	0	root	_	control
3	而	_	CCONJ	_	_	5	cc	_	and
4	後	_	ADV	_	_	5	advmod	_	after
5	教	_	VERB	_	_	2	conj	_	teach

1	"First	_	_	_	_	0	_	_	_
2	control	_	_	_	_	0	_	_	_
3	and	_	_	_	_	0	_	_	_
4	then	_	_	_	_	0	_	_	_
5	teach."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated St lis 3 20:58:43 CET 2021 -->
