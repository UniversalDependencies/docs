---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

The adverbial clause modifier is a clause which modifies a predicate; in other words, it is a clausal adjunct. This includes subordinate clauses such as conditional clauses (2), temporal clauses (3), as well as purpose clauses (4), among others. The head is the main predicate of the main clause, while the dependent is the main predicate of the modifying clause.

If the adverbial is non-clausal, use [advmod]() instead.

~~~ conllu
# visual-style 4 2 advcl	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	我	_	PRON	_	_	4	nsubj	_	1SG
2	拍	_	VERB	_	_	4	advcl	_	pat
3	心口	_	NOUN	_	_	2	obj	_	chest
4	保證	_	VERB	_	_	0	root	_	guarantee

1	"I	_	_	_	_	0	_	_	_
2	guarantee	_	_	_	_	0	_	_	_
3	(by)	_	_	_	_	0	_	_	_
4	patting	_	_	_	_	0	_	_	_
5	my	_	_	_	_	0	_	_	_
6	chest."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 6 4 advcl	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	如果	_	SCONJ	_	_	4	mark	_	if
2	排骨	_	NOUN	_	_	4	nsubj	_	ribs
3	唔	_	ADV	_	_	4	advmod	_	NEG
4	入味	_	ADJ	_	_	6	advcl	_	flavorful
5	咪	_	AUX	_	_	6	aux	_	don't
6	賴	_	VERB	_	_	0	root	_	blame
7	我	_	PRON	_	_	6	obj	_	1SG

1	"If	_	_	_	_	0	_	_	_
2	the	_	_	_	_	0	_	_	_
3	ribs	_	_	_	_	0	_	_	_
4	aren't	_	_	_	_	0	_	_	_
5	flavorful,	_	_	_	_	0	_	_	_
6	don't	_	_	_	_	0	_	_	_
7	blame	_	_	_	_	0	_	_	_
8	me."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 7 2 advcl	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	佢	_	PRON	_	_	2	nsubj	_	3SG
2	去	_	VERB	_	_	7	advcl	_	go
3	東京	_	PROPN	_	_	2	obj	_	Tokyo
4	之後	_	ADP	_	_	2	mark	_	after
5	我	_	PRON	_	_	7	nsubj	_	1SG
6	再	_	ADV	_	_	7	advmod	_	again
7	加入	_	VERB	_	_	0	root	_	join

1	"I'll	_	_	_	_	0	_	_	_
2	join	_	_	_	_	0	_	_	_
3	again	_	_	_	_	0	_	_	_
4	after	_	_	_	_	0	_	_	_
5	she	_	_	_	_	0	_	_	_
6	goes	_	_	_	_	0	_	_	_
7	to	_	_	_	_	0	_	_	_
8	Tokyo."	_	_	_	_	0	_	_	_

~~~

Purpose clauses typically come after the main clause and may be introduced by function words such as 嚟 _lei4_ (4), 去 _heoi3_.

~~~ conllu
# visual-style 2 4 advcl	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	你	_	PRON	_	_	2	nsubj	_	2SG
2	慳	_	VERB	_	_	0	root	_	save/be-thrifty
3	嚟	_	SCONJ	_	_	4	mark	_	in-order-to
4	做	_	VERB	_	_	2	advcl	_	do
5	乜	_	PRON	_	_	4	obj	_	what
6	？	_	PUNCT	_	_	2	punct	_	_

1	"What	_	_	_	_	0	_	_	_
2	are	_	_	_	_	0	_	_	_
3	you	_	_	_	_	0	_	_	_
4	being	_	_	_	_	0	_	_	_
5	thrifty	_	_	_	_	0	_	_	_
6	for?	_	_	_	_	0	_	_	_
7	(lit.	_	_	_	_	0	_	_	_
8	You	_	_	_	_	0	_	_	_
9	save	_	_	_	_	0	_	_	_
10	to	_	_	_	_	0	_	_	_
11	do	_	_	_	_	0	_	_	_
12	what?)"	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 18:41:05 CEST 2020 -->
