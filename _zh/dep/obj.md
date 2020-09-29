---
layout: relation
title: 'obj'
shortdef: 'object'
udver: '2'
---

The object of a transitive verb is its second core argument after its subject. If a third argument, an indirect object without a preposition\*, is present, that object is marked as [iobj]() (2), but if the only object present is an indirect object, it is still marked as `obj` (3). 

\* Note that indirect objects preceded by a preposition are treated as [obl]() (oblique).

~~~ conllu
# visual-style 1 3 obj	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	開	_	VERB	_	_	0	root	_	open
2	瓶	_	NOUN	_	_	3	det	_	CL:bottle
3	酒	_	NOUN	_	_	1	obj	_	wine

1	"open	_	_	_	_	0	_	_	_
2	a	_	_	_	_	0	_	_	_
3	bottle	_	_	_	_	0	_	_	_
4	of	_	_	_	_	0	_	_	_
5	wine"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 5 obj	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	給	_	VERB	_	_	0	root	_	give
2	他	_	PRON	_	_	1	iobj	_	3SG.M
3	兩	_	NUM	_	_	5	nummod	_	two
4	本	_	NOUN	_	_	3	clf	_	CL:book
5	書	_	NOUN	_	_	1	obj	_	book

1	"Give	_	_	_	_	0	_	_	_
2	him	_	_	_	_	0	_	_	_
3	two	_	_	_	_	0	_	_	_
4	books."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 3 obj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	今年	_	NOUN	_	_	2	obl:tmod	_	this-year
2	給	_	VERB	_	_	0	root	_	give
3	他	_	PRON	_	_	2	obj	_	3SG.M
4	吧	_	PART	_	_	2	discourse:sp	_	SP

1	"This	_	_	_	_	0	_	_	_
2	year	_	_	_	_	0	_	_	_
3	let's	_	_	_	_	0	_	_	_
4	give	_	_	_	_	0	_	_	_
5	it	_	_	_	_	0	_	_	_
6	to	_	_	_	_	0	_	_	_
7	him."	_	_	_	_	0	_	_	_

~~~

`obj` is also used to link the direct object of a movement verb. This verb can be single (4) or compounded (5).

~~~ conllu
# visual-style 5 6 obj	color:blue
# visual-style 7 8 obj	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	那	_	DET	_	_	3	det	_	that
2	傻	_	ADJ	_	_	3	amod	_	stupid
3	丫頭	_	NOUN	_	_	4	nsubj	_	girl
4	説	_	VERB	_	_	0	root	_	say
5	去	_	VERB	_	_	4	ccomp	_	go
6	福岡	_	PROPN	_	_	5	obj	_	Fukuoka
7	看	_	VERB	_	_	5	advcl	_	see
8	別人	_	PRON	_	_	7	obj	_	others
9	耕作	_	VERB	_	_	7	xcomp	_	farm

1	"That	_	_	_	_	0	_	_	_
2	stupid	_	_	_	_	0	_	_	_
3	girl	_	_	_	_	0	_	_	_
4	says	_	_	_	_	0	_	_	_
5	she	_	_	_	_	0	_	_	_
6	wants	_	_	_	_	0	_	_	_
7	to	_	_	_	_	0	_	_	_
8	go	_	_	_	_	0	_	_	_
9	to	_	_	_	_	0	_	_	_
10	Fukuoka	_	_	_	_	0	_	_	_
11	to	_	_	_	_	0	_	_	_
12	see	_	_	_	_	0	_	_	_
13	people	_	_	_	_	0	_	_	_
14	farming."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 3 obj	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	來	_	VERB	_	_	0	root	_	come
2	到	_	VERB	_	_	1	compound:vv	_	arrive
3	這裡	_	PRON	_	_	1	obj	_	here

1	"arrived	_	_	_	_	0	_	_	_
2	here"	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:23:40 CEST 2020 -->
