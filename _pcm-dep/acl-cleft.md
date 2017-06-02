---
layout: relation
title: 'acl:cleft'
shortdef: 'cleft clause modifier'
udver: '2'
---

The acl:cleft relation is used between a cleft clause and its head.

~~~ conllu
# visual-style 3 7 acl:cleft	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	na	_	PART	_	_	3	cop	_	_
2	di	_	DET	_	_	3	det	_	_
3	danger	_	NOUN	_	_	0	root	_	_
4	wen	_	SCONJ	_	_	5	mark	_	_
5	dey	_	VERB	_	_	3	advcl	_
6	alcohol	_	NOUN	_	_	5	obj	_
7	be	_	VERB	_	_	3	acl:cleft	_
8	dat	_	PRON	_	_	7	nsubj	_

1	Those	_	_	_	_	0	_	_	_
2	are	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	dangers	_	_	_	_	0	_	_	_	
5	of	_	_	_	_	0	_	_	_
6	alcohol	_	_	_	_	0	_	_	_	
~~~

The particule "na" is often a marker of clefts.
