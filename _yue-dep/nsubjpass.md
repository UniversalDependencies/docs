---
layout: relation
title: 'nsubj:pass'
shortdef: 'passive nominal subject'
udver: '2'
---
The `nsubj:pass` relation is used for the passive subject of a verb.

~~~ conllu
# visual-style 3 1 nsubj:pass	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	我	_	PRON	_	_	4	nsubj:pass	_	1SG
2	畀	_	ADP	_	_	3	case	_	AGT
3	校長	_	NOUN	_	_	4	obl:agent	_	school-principal
4	罰	_	VERB	_	_	0	root	_	punish

1	"I'm	_	_	_	_	0	_	_	_
2	being	_	_	_	_	0	_	_	_
3	punished	_	_	_	_	0	_	_	_
4	by	_	_	_	_	0	_	_	_
5	the	_	_	_	_	0	_	_	_
6	principal."	_	_	_	_	0	_	_	_

~~~
