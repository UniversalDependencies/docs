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
1	佢	_	PRON	_	_	2	nsubj	_	3SG
2	換	_	VERB	_	_	6	csubj:pass	_	change
3	衫	_	NOUN	_	_	2	obj	_	clothes
4	畀	_	ADP	_	_	5	case	_	AGT
5	人	_	NOUN	_	_	6	obl:agent	_	people
6	發現	_	VERB	_	_	0	root	_	discover

1	"Her	_	_	_	_	0	_	_	_
2	changing	_	_	_	_	0	_	_	_
3	clothes	_	_	_	_	0	_	_	_
4	was	_	_	_	_	0	_	_	_
5	discovered	_	_	_	_	0	_	_	_
6	by	_	_	_	_	0	_	_	_
7	other	_	_	_	_	0	_	_	_
8	people."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:43:15 CEST 2020 -->
