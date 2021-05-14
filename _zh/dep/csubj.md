---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

The `csubj` relation is the clausal counterpart to [nsubj](); when the subject of the sentence is a clause itself, this relation is used. The governor of the subject clause is its main verb. 

~~~ conllu
# visual-style 7 2 csubj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	其實	_	ADV	_	_	7	advmod	_	actually
2	教	_	VERB	_	_	7	csubj	_	teach
3	小孩	_	NOUN	_	_	2	obj	_	children
4	能	_	AUX	_	_	7	aux	_	can
5	有	_	AUX	_	_	7	aux	_	have
6	多	_	ADV	_	_	7	advmod	_	very
7	難	_	ADJ	_	_	0	root	_	difficult
8	呢	_	PART	_	_	7	discourse:sp	_	SP
9	？	_	PUNCT	_	_	7	punct	_	_

1	"Actually,	_	_	_	_	0	_	_	_
2	how	_	_	_	_	0	_	_	_
3	difficult	_	_	_	_	0	_	_	_
4	can	_	_	_	_	0	_	_	_
5	teaching	_	_	_	_	0	_	_	_
6	children	_	_	_	_	0	_	_	_
7	be?"	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:59 CEST 2021 -->
