---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

The`discourse` relation is used for interjections and particles.

~~~ conllu
# visual-style 7 3 discourse	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 discourse	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	a	à	PRON	_	_	2	nsubj	_	_
2	ko	kó	VERB	_	_	0	root	_	_
3	ayiwa	áyiwa	INTJ	_	_	7	discourse	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	ko	kó	PART	_	_	7	discourse	_	_
6	baasi	báasi	NOUN	_	_	7	nsubj	_	_
7	tè	tɛ́	VERB	_	_	2	parataxis:obj	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~
'He said: "So, there is no problem"'.

Particles can modify whole clauses (as _kó_ does in the example above) or noun phrases. In this case, a modified noun phrase is its head.

~~~ conllu
# visual-style 3 4 discourse	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	a	à	PRON	_	_	5	nsubj	_	_
2	ye	yé	AUX	_	_	5	aux	_	_
3	o	ò	PRON	_	_	5	obj	_	_
4	fana	fána	PART	_	_	3	discourse	_	_
5	ta	tà	VERB	_	_	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~
'He took it as well'.


<!-- Interlanguage links updated Út zář 29 20:31:51 CEST 2020 -->
