---
layout: relation
title: 'dislocated:vo'
shortdef: 'dislocated object of verb-object compound'
udver: '2'
---

The `dislocated:vo` relation is used when the object of a verb-object compound (see [compound:vo]()) is fronted to topic position.

~~~ conllu
# visual-style 5 3 dislocated:vo	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	你	_	PRON	_	_	3	nmod	_	2SG
2	的	_	PART	_	_	1	case	_	GEN
3	電話	_	NOUN	_	_	5	dislocated:vo	_	phone
4	怎麼	_	ADV	_	_	5	advmod	_	how
5	打	_	VERB	_	_	7	advcl	_	hit
6	都	_	ADV	_	_	7	advmod	_	still
7	沒	_	VERB	_	_	0	root	_	not-exist
8	人	_	NOUN	_	_	7	obj	_	people
9	接	_	VERB	_	_	8	acl	_	receive

1	"Your	_	_	_	_	0	_	_	_
2	phone,	_	_	_	_	0	_	_	_
3	no	_	_	_	_	0	_	_	_
4	matter	_	_	_	_	0	_	_	_
5	how	_	_	_	_	0	_	_	_
6	one	_	_	_	_	0	_	_	_
7	calls	_	_	_	_	0	_	_	_
8	it,	_	_	_	_	0	_	_	_
9	nobody	_	_	_	_	0	_	_	_
10	picks	_	_	_	_	0	_	_	_
11	it	_	_	_	_	0	_	_	_
12	up."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:23:30 CEST 2020 -->
