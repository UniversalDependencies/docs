---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependants of another noun or noun phrase.

~~~ conllu
# visual-style 7 6 nmod	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	im	he	PRON	PRON	_	2	nmod:poss	_	_
2	daughter	daughter	NOUN	NOUN	_	3	nsubj	_	_
3	fall	fall	VERB	VERB	_	0	root	_	_
4	from	from	ADP	ADP	_	7	case	_	_
5	three	three	NUM	NUM	_	6	nummod	_	_
6	storey	story	NOUN	NOUN	_	7	nmod	_	_
7	build	building	NOUN	NOUN	_	3	obl	_	_


1	he	_	_	_	_	0	_	_	_
2	daughter	_	_	_	_	0	_	_	_
3	fall	_	_	_	_	0	_	_	_
4	from	_	_	_	_	0	_	_	_
5	three	_	_	_	_	0	_	_	_
6	storey	_	_	_	_	0	_	_	_
7	building	_	_	_	_	0	_	_	_

1	his	_	_	_	_	0	_	_	_
2	daughter	_	_	_	_	0	_	_	_
3	fell	_	_	_	_	0	_	_	_
4	from	_	_	_	_	0	_	_	_
5	a	_	_	_	_	0	_	_	_
6	three	_	_	_	_	0	_	_	_
7	storey	_	_	_	_	0	_	_	_
8	building	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Čt lis 12 09:43:31 CET 2020 -->
