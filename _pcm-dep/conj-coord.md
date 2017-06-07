---
layout: relation
title: 'conj:coord'
shortdef: 'coordinated conjunct'
udver: '2'
---

The `conj:coord` relation is used between conjuncts which are in the same paradigm, i.e they fulfill the same role in relation to their governor. Conjunctions are treated asymetrically with the first conjunct as the head, and all the other conjuncts as dependants of this element.


~~~ conllu
# visual-style 4 5 conj:coord	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	dem	they	PRON	PRON	_	3	nsubj	_	_
2	dey	be	AUX	AUX	_	3	aux	_	_
3	drink	drink	VERB	VERB	_	0	root	_	_
4	kainkain	kainkain	NOUN	NOUN	_	3	obj	_	_
5	ogogoro	ogogoro	NOUN	NOUN	_	4	conj:coord	_	_

1	they	_	_	_	_	0	_	_	_
2	be	_	_	_	_	0	_	_	_
3	drink	_	_	_	_	0	_	_	_
4	kainkain	_	_	_	_	0	_	_	_
5	ogogoro	_	_	_	_	0	_	_	_

1	they	_	_	_	_	0	_	_	_
2	drink	_	_	_	_	0	_	_	_
3	spirits	_	_	_	_	0	_	_	_
4	,	_	_	_	_	0	_	_	_
5	ogogoro	_	_	_	_	0	_	_	_
~~~
