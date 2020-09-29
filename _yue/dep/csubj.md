---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

The `csubj` relation is the clausal counterpart to [nsubj](); when the subject of the sentence is a clause itself, this relation is used. The governor of the subject clause is its main verb. 

~~~ conllu
# visual-style 6 2 csubj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	其實	_	ADV	_	_	6	advmod	_	actually
2	教	_	VERB	_	_	6	csubj	_	teach
3	細佬仔	_	NOUN	_	_	2	obj	_	children
4	有	_	AUX	_	_	6	aux	_	have
5	幾	_	ADV	_	_	6	advmod	_	how
6	難	_	ADJ	_	_	0	root	_	difficult
7	吖	_	PART	_	_	6	discourse:sp	_	SP
8	？	_	PUNCT	_	_	6	punct	_	_

1	"Actually,	_	_	_	_	0	_	_	_
2	how	_	_	_	_	0	_	_	_
3	difficult	_	_	_	_	0	_	_	_
4	can	_	_	_	_	0	_	_	_
5	teaching	_	_	_	_	0	_	_	_
6	children	_	_	_	_	0	_	_	_
7	be?"	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:31:49 CEST 2020 -->
