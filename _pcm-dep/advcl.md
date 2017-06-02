---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

The `advcl` relation is used between an adverbial clause and the verb or other predicate it modifies.

~~~ conllu
# visual-style 2 1 advcl	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	na	_	PART	_	_	3	cop	_	_
2	di	_	DET	_	_	3	det	_	_
3	danger	_	NOUN	_	_	0	root	_	_
4	wen	_	SCONJ	_	_	5	mark	_	_
5	dey	_	PART	_	_	3	acl	_	_
6	alcohol	_	NOUN	_	_	5	obj	_	_
7	be	_	PART	_	_	3	acl:cleft	_	_
8	dat	_	PRON	_	_	7	nsubj	_	_

1	those	_	_	_	_	0	_	_	_
2	are	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	dangers	_	_	_	_	0	_	_	_
5	of	_	_	_	_	0	_	_	_
6	alcohol	_	_	_	_	0	_	_	_

~~~
