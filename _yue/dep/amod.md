---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---

An adjectival modifier is an adjectival word or phrase that modifies a nominal. (However, when an adjectival word functions as a predicate, it is considered the head of its clause; see [root]().)

~~~ conllu
# visual-style 2 1 amod	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	新	_	ADJ	_	_	2	amod	_	new
2	產品	_	NOUN	_	_	0	root	_	product

1	"new	_	_	_	_	0	_	_	_
2	product"	_	_	_	_	0	_	_	_

~~~

When paired with 嘅 _ge3_, the adjective acts as head of the particle in a [mark:rel]() relation.

~~~ conllu
# visual-style 3 1 amod	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	嚴重	_	ADJ	_	_	3	amod	_	serious
2	嘅	_	PART	_	_	1	mark:rel	_	_
3	問題	_	NOUN	_	_	0	root	_	problem

1	"serious	_	_	_	_	0	_	_	_
2	problem"	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated St lis 3 20:58:39 CET 2021 -->
