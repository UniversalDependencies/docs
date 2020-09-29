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
3	就	_	ADV	_	_	7	advmod	_	then
4	照	_	ADP	_	_	6	case	_	according-to
5	你	_	PRON	_	_	6	nmod	_	2SG
6	意思	_	NOUN	_	_	7	obl	_	wishes
7	處罰	_	VERB	_	_	0	root	_	punish

1	"Then-	_	_	_	_	0	_	_	_
2	then	_	_	_	_	0	_	_	_
3	let's	_	_	_	_	0	_	_	_
4	punish	_	_	_	_	0	_	_	_
5	according	_	_	_	_	0	_	_	_
6	to	_	_	_	_	0	_	_	_
7	your	_	_	_	_	0	_	_	_
8	wishes."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 8 5 reparandum	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
1	那	_	ADV	_	_	9	discourse	_	then
2	我	_	PRON	_	_	9	nsubj	_	1SG
3	就	_	ADV	_	_	9	discourse	_	then
4	往	_	ADP	_	_	5	case	_	toward
5	西	_	NOUN	_	_	8	reparandum	_	west
6	⋯⋯	_	PUNCT	_	_	5	punct	_	_
7	往	_	ADP	_	_	8	case	_	toward
8	東	_	NOUN	_	_	9	obl	_	east
9	走	_	VERB	_	_	0	root	_	go
10	吧	_	PART	_	_	9	discourse:sp	_	SP

1	"Then	_	_	_	_	0	_	_	_
2	I'll	_	_	_	_	0	_	_	_
3	go	_	_	_	_	0	_	_	_
4	west...	_	_	_	_	0	_	_	_
5	east	_	_	_	_	0	_	_	_
6	then."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:23:44 CEST 2020 -->
