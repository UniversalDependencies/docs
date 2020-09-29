---
layout: relation
title: 'advmod:df'
shortdef: 'duration or frequency adverbial modifier'
udver: '2'
---

The relation `advmod:df` is used for a noun phrase usually headed by a classifier expressing the duration or the frequency of the event expressed by the main predicate. The duration (1) and frequency (2) phrases can be post-verbal as well as pre-verbal (3-4).

For nominal time expressions and adverbial time expressions that provide a time frame rather than a duration, use [obl:tmod]() and [advmod](), respectively.

~~~ conllu
# visual-style 3 6 advmod:df	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	他	_	PRON	_	_	3	nsubj	_	3SG
2	已經	_	ADV	_	_	3	advmod	_	already
3	來	_	VERB	_	_	0	root	_	come
4	了	_	AUX	_	_	3	aux	_	PERF
5	兩	_	NUM	_	_	6	nummod	_	two
6	天	_	NOUN	_	_	3	advmod:df	_	CL:days
7	了	_	PART	_	_	3	discourse:sp	_	SP

1	"He	_	_	_	_	0	_	_	_
2	has	_	_	_	_	0	_	_	_
3	already	_	_	_	_	0	_	_	_
4	been	_	_	_	_	0	_	_	_
5	here	_	_	_	_	0	_	_	_
6	for	_	_	_	_	0	_	_	_
7	two	_	_	_	_	0	_	_	_
8	days."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 6 advmod:df	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	等	_	VERB	_	_	0	root	_	wait
3	過	_	AUX	_	_	2	aux	_	EXP
4	他	_	PRON	_	_	2	obj	_	3SG.M
5	三	_	NUM	_	_	6	nummod	_	three
6	次	_	NOUN	_	_	2	advmod:df	_	CL:times

1	"I	_	_	_	_	0	_	_	_
2	waited	_	_	_	_	0	_	_	_
3	for	_	_	_	_	0	_	_	_
4	him	_	_	_	_	0	_	_	_
5	three	_	_	_	_	0	_	_	_
6	times."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 5 3 advmod:df	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	他	_	PRON	_	_	5	nsubj	_	3SG.M
2	兩	_	NUM	_	_	3	nummod	_	two
3	年	_	NOUN	_	_	5	advmod:df	_	years
4	沒	_	AUX	_	_	5	aux	_	NEG.PERF
5	來	_	VERB	_	_	0	root	_	come
6	美國	_	PROPN	_	_	5	obj	_	USA
7	了	_	PART	_	_	5	discourse:sp	_	SP

1	"It	_	_	_	_	0	_	_	_
2	has	_	_	_	_	0	_	_	_
3	been	_	_	_	_	0	_	_	_
4	two	_	_	_	_	0	_	_	_
5	years	_	_	_	_	0	_	_	_
6	that	_	_	_	_	0	_	_	_
7	he	_	_	_	_	0	_	_	_
8	has	_	_	_	_	0	_	_	_
9	not	_	_	_	_	0	_	_	_
10	come	_	_	_	_	0	_	_	_
11	to	_	_	_	_	0	_	_	_
12	the	_	_	_	_	0	_	_	_
13	U.S."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 5 3 advmod:df	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	他	_	PRON	_	_	5	nsubj	_	3SG.M
2	三	_	NUM	_	_	3	nummod	_	three
3	次	_	NOUN	_	_	5	advmod:df	_	CL:times
4	都	_	ADV	_	_	5	advmod	_	all
5	去	_	VERB	_	_	0	root	_	go
6	了	_	PART	_	_	5	discourse:sp	_	SP

1	"He	_	_	_	_	0	_	_	_
2	went	_	_	_	_	0	_	_	_
3	all	_	_	_	_	0	_	_	_
4	three	_	_	_	_	0	_	_	_
5	times."	_	_	_	_	0	_	_	_

~~~

<!-- Interlanguage links updated Út zář 29 20:43:08 CEST 2020 -->
