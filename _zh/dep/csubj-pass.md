---
layout: relation
title: 'csubj:pass'
shortdef: 'clausal passive subject'
udver: '2'
---

When a clause is the passive subject of a verb, the `csubj:pass` relation is used.

~~~ conllu
# visual-style 6 2 csubj:pass	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	他	_	PRON	_	_	2	nsubj	_	3SG.M
2	換	_	VERB	_	_	6	csubj:pass	_	change
3	衣服	_	NOUN	_	_	2	obj	_	clothes
4	被	_	ADP	_	_	5	case	_	by
5	人	_	NOUN	_	_	6	obl:agent	_	people
6	看	_	VERB	_	_	0	root	_	see
7	見	_	VERB	_	_	6	compound:vv	_	see

1	"Him	_	_	_	_	0	_	_	_
2	changing	_	_	_	_	0	_	_	_
3	clothes	_	_	_	_	0	_	_	_
4	was	_	_	_	_	0	_	_	_
5	seen	_	_	_	_	0	_	_	_
6	by	_	_	_	_	0	_	_	_
7	other	_	_	_	_	0	_	_	_
8	people."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated St lis 3 20:58:49 CET 2021 -->
