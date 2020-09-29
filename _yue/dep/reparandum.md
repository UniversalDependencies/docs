---
layout: relation
title: 'reparandum'
shortdef: 'overridden disfluency'
udver: '2'
---

The `reparandum` relation is used for disfluencies that are subsequently repaired. The disfluency is a dependent of the repair. Examples include false starts due to stuttering or a change in lexical choice. Hesitation sounds (“fillers”), however, are generally considered interjections and therefore should be given the relation [discourse]() instead.

~~~ conllu
# visual-style 3 1 reparandum	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	就	_	ADV	_	_	3	reparandum	_	then
2	-	_	PUNCT	_	_	1	punct	_	_
3	就	_	ADV	_	_	4	advmod	_	then
4	聽	_	ADP	_	_	0	root	_	listen-to
5	你	_	PRON	_	_	4	obj	_	2SG
6	喇	_	PART	_	_	4	discourse:sp	_	SP

1	"Then-	_	_	_	_	0	_	_	_
2	then	_	_	_	_	0	_	_	_
3	I'll	_	_	_	_	0	_	_	_
4	listen	_	_	_	_	0	_	_	_
5	to	_	_	_	_	0	_	_	_
6	you."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 7 4 reparandum	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	噉	_	ADV	_	_	7	discourse	_	then
2	我	_	PRON	_	_	7	nsubj	_	1SG
3	就	_	ADV	_	_	7	discourse	_	then
4	行	_	VERB	_	_	7	reparandum	_	walk
5	呢度	_	PRON	_	_	4	obj	_	here
6	...	_	punct	_	_	4	punct	_	_
7	行	_	VERB	_	_	0	root	_	walk
8	嗰度	_	PRON	_	_	7	obj	_	there
9	喇	_	PART	_	_	7	discourse:sp	_	SP

1	"Then	_	_	_	_	0	_	_	_
2	I'll	_	_	_	_	0	_	_	_
3	walk	_	_	_	_	0	_	_	_
4	here...	_	_	_	_	0	_	_	_
5	walk	_	_	_	_	0	_	_	_
6	there	_	_	_	_	0	_	_	_
7	then."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:43:27 CEST 2020 -->
