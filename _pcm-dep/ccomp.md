---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

The `ccomp` link is used for clausal dependents which are core arguments, when the subject is not controlled. However, when the subject is controlled, we use the [xcomp]() link.

~~~ conllu
# visual-style 3 8 ccomp	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
1	dem	they	PRON	PRON	_	3	nsubj	_	_
2	just	just	ADV	ADV	_	3	advmod	_	_
3	tell	tell	VERB	VERB	_	0	root	_	_
4	am	he	PRON	PRON	_	3	iobj	_	_
5	sey	that	SCONJ	SCONJ	_	8	mark	_	_
6	im	he	PRON	PRON	_	7	nmod:poss	_	_
7	daughter	daughter	NOUN	NOUN	_	8	nsubj	_	_
8	fall	fall	VERB	VERB	_	3	ccomp	_	_


1	they	_	_	_	_	0	_	_	_
2	just	_	_	_	_	0	_	_	_
3	tell	_	_	_	_	0	_	_	_
4	he	_	_	_	_	0	_	_	_
5	that	_	_	_	_	0	_	_	_
6	he	_	_	_	_	0	_	_	_
7	daughter	_	_	_	_	0	_	_	_
8	fall	_	_	_	_	0	_	_	_

1	they	_	_	_	_	0	_	_	_
2	just	_	_	_	_	0	_	_	_
3	told	_	_	_	_	0	_	_	_
4	him	_	_	_	_	0	_	_	_
5	that	_	_	_	_	0	_	_	_
6	his	_	_	_	_	0	_	_	_
7	daughter	_	_	_	_	0	_	_	_
8	fell	_	_	_	_	0	_	_	_

~~~
