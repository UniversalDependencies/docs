---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object is the third core argument of a verb, after the subject and the direct object. If no direct object is present or the direct object is [dislocated](), then what we ordinarily call “indirect object” will be labeled with the [obj]() relation instead (see (2)).  

~~~ conllu
# visual-style 1 5 iobj	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	畀	_	VERB	_	_	0	root	_	give
2	兩	_	NUM	_	_	4	nummod	_	two
3	本	_	NOUN	_	_	2	clf	_	CL:book
4	書	_	NOUN	_	_	1	obj	_	books
5	佢	_	PRON	_	_	1	iobj	_	3SG

1	"Give	_	_	_	_	0	_	_	_
2	him	_	_	_	_	0	_	_	_
3	two	_	_	_	_	0	_	_	_
4	books."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
1	今年	_	NOUN	_	_	2	obl:tmod	_	this-year
2	畀	_	VERB	_	_	0	root	_	give
3	他	_	PRON	_	_	2	obj	_	3SG.M
4	啦	_	PART	_	_	2	discourse:sp	_	SP

1	"This	_	_	_	_	0	_	_	_
2	year	_	_	_	_	0	_	_	_
3	let's	_	_	_	_	0	_	_	_
4	give	_	_	_	_	0	_	_	_
5	(it	_	_	_	_	0	_	_	_
6	to)	_	_	_	_	0	_	_	_
7	him."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:43:20 CEST 2020 -->
