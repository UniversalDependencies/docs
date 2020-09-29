---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

The `det` relation is used between a nominal phrase and its determiner.

~~~ conllu
# visual-style 2 1 det	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	dis	this	DET	DET	_	2	det	_	_
2	thing	thing	NOUN	NOUN	_	4	nsubj	_	_
3	no	not	PART	PART	_	4	advmod	_	_
4	good	good	ADJ	ADJ	_	0	root	_	_

1	this	_	_	_	_	0	_	_	_
2	thing	_	_	_	_	0	_	_	_
3	not	_	_	_	_	0	_	_	_
4	good	_	_	_	_	0	_	_	_

1	This	_	_	_	_	0	_	_	_
2	thing	_	_	_	_	0	_	_	_
3	is	_	_	_	_	0	_	_	_
4	not	_	_	_	_	0	_	_	_
5	good	_	_	_	_	0	_	_	_

~~~

However, the [nmod:poss]() relation is used between a nominal clause and its possessive determiner, and the [nummod]() relation is used between a nominal phrase and its numeric modifier.
<!-- Interlanguage links updated Út zář 29 18:41:19 CEST 2020 -->
