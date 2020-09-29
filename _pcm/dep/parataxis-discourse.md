---
layout: relation
title: 'parataxis:discourse'
shortdef: 'parataxis:discourse'
udver: '2'
---

The `parataxis:discourse` relation is used for associated illocutionary units which are clausal. For other discourse elements such as interjections we use the standard relation [discourse]().


~~~ conllu
# visual-style 3 8 parataxis:discourse	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8 fgColor:white
1	life	life	NOUN	NOUN	_	3	nsubj	_	_
2	fit	can	AUX	AUX	_	3	aux	_	_
3	follow	follow	VERB	VERB	_	0	root	_	_
4	am	he	PRON	PRON	_	3	obj	_	_
5	at	at	ADP	ADP	_	6	case	_	_
6	time	time	NOUN	NOUN	_	3	obl:ad	_	_
7	God	God	PROPN	PROPN	_	8	nsubj	_	_
8	forbid	forbid	VERB	VERB	_	3	parataxis:discourse	_	
~~~

Unlike [parentheticals](parataxis-parenth.html) associated units do not allow for expansions.
<!-- Interlanguage links updated Út zář 29 20:23:42 CEST 2020 -->
