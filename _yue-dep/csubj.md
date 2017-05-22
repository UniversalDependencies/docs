---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

The `csubj` relation is the clausal counterpart to [nsubj](); when the subject of the sentence is a clause itself, this relation is used. The governor of the subject clause is its main verb. 

~~~ conllu
# visual-style 5 2 csubj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	其實	_	ADV	_	_	5	advmod	_	actually
2	教	_	VERB	_	_	5	csubj	_	teach
3	細佬仔	_	NOUN	_	_	2	obj	_	children
3	有	_	AUX	_	_	5	aux	_	have
4	幾	_	ADV	_	_	5	advmod	_	how
5	難	_	ADJ	_	_	0	root	_	difficult
6	吖	_	PART	_	_	5	discourse:sp	_	SP
7	？	_	PUNCT	_	_	5	punct	_	_

1	"Actually,	_	_	_	_	0	_	_	_
2	how	_	_	_	_	0	_	_	_
3	difficult	_	_	_	_	0	_	_	_
4	can	_	_	_	_	0	_	_	_
5	teaching	_	_	_	_	0	_	_	_
6	children	_	_	_	_	0	_	_	_
7	be?"	_	_	_	_	0	_	_	_

~~~
