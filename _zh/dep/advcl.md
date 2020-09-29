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
3	胸口	_	NOUN	_	_	2	obj	_	chest
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
3	不	_	ADV	_	_	4	advmod	_	NEG
4	入味	_	ADJ	_	_	6	advcl	_	flavorful
5	別	_	AUX	_	_	6	aux	_	don't
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
1	她	_	PRON	_	_	2	nsubj	_	3SG.F
2	去	_	VERB	_	_	7	advcl	_	go
3	東京	_	PROPN	_	_	2	obj	_	Tokyo
4	後	_	ADP	_	_	2	mark	_	after
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

Purpose clauses typically come after the main clause and may be introduced by function words such as 來 _lái_ (4), 去 _qù_, 以 _yǐ_.

~~~ conllu
# visual-style 1 7 advcl	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	伸	_	VERB	_	_	0	root	_	extend
2	出	_	VERB	_	_	1	compound:vv	_	out
3	你	_	PRON	_	_	5	nmod	_	2SG
4	的	_	PART	_	_	3	case	_	GEN
5	手	_	NOUN	_	_	1	obj	_	hand
6	來	_	SCONJ	_	_	7	mark	_	to
7	讓	_	VERB	_	_	1	advcl	_	let
8	他	_	PRON	_	_	7	obj	_	3SG.M
9	量	_	VERB	_	_	7	xcomp	_	measure
10	尺寸	_	NOUN	_	_	9	obj	_	length

1	"Take	_	_	_	_	0	_	_	_
2	out	_	_	_	_	0	_	_	_
3	your	_	_	_	_	0	_	_	_
4	hand	_	_	_	_	0	_	_	_
5	in	_	_	_	_	0	_	_	_
6	order	_	_	_	_	0	_	_	_
7	to	_	_	_	_	0	_	_	_
8	let	_	_	_	_	0	_	_	_
9	him	_	_	_	_	0	_	_	_
10	measure	_	_	_	_	0	_	_	_
11	it."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:43:07 CEST 2020 -->
