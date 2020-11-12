---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The `iobj` relation is used for dative objects of the verb when the verb already has an object or a complement. If there is only one object, it should be labeled [obj]() regardless of its morphological case. 

~~~ conllu
# visual-style 3 4 iobj	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	make	let	AUX	AUX	_	3	aux	_	_
2	una	you	PRON	PRON	_	3	nsubj	_	_
3	ask	ask	VERB	VERB	_	0	root	_	_
4	me	I	PRON	PRON	_	3	iobj	_	_
5	question	question	NOUN	NOUN	_	3	obj	_	_


1	let	_	_	_	_	0	_	_	_
2	you	_	_	_	_	0	_	_	_
3	ask	_	_	_	_	0	_	_	_
4	I	_	_	_	_	0	_	_	_
5	question	_	_	_	_	0	_	_	_

1	ask	_	_	_	_	0	_	_	_
2	me	_	_	_	_	0	_	_	_
3	questions	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 3 4 iobj	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
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
<!-- Interlanguage links updated Čt lis 12 09:43:28 CET 2020 -->
