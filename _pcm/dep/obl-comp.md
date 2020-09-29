---
layout: relation
title: 'obl:comp'
shortdef: 'oblique complement'
udver: '2'
---

obl is split in three subrelations: [obl:ad](), [obl:comp](), and [obl:periph]().

The `obl:comp` relation is used for nominal arguments which are introduced by a preposition. 

We introduce this relation to distinguish these elements, which are subcategorized, from oblique elements which are not arguments but adjuncts, and will be annotated as [obl:ad]().

~~~ conllu
# visual-style 4 6 obl:comp	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	speed	speed	NOUN	NOUN	_	4	dislocated	_	_
2	im	he	PRON	PRON	_	4	nsubj	_	_
3	dey	be	AUX	AUX	_	4	aux	_	_
4	lead	lead	VERB	VERB	_	0	root	_	_
5	to	to	ADP	ADP	_	6	case	_	_
6	accident	accident	NOUN	NOUN	_	4	obl:comp	_	_

1	speed	_	_	_	_	0	_	_	_
2	it	_	_	_	_	0	_	_	_
3	be	_	_	_	_	0	_	_	_
4	lead	_	_	_	_	0	_	_	_
5	to	_	_	_	_	0	_	_	_
6	accident	_	_	_	_	0	_	_	_

1	speeding	_	_	_	_	0	_	_	_
2	it	_	_	_	_	0	_	_	_
3	leads	_	_	_	_	0	_	_	_
4	to	_	_	_	_	0	_	_	_
5	accidents	_	_	_	_	0	_	_	_
~~~
<!-- Interlanguage links updated Út zář 29 18:41:32 CEST 2020 -->
