---
layout: relation
title: 'compound:vv'
shortdef: 'verb-verb compound'
udver: '2'
---

This relation is used for verb-verb and verb-adjective compounds where the second verb/adjective covers what are known as "resultative complements" and "phase complements" in Chinese linguistics. Here we will call them resultative and phase _compounds_ to avoid confusion between the different definitions of "complement" between Chinese-specific terminology and general linguistics terminology. 

A special feature of these compounds (as well as directional compounds; see [compound:dir]()) is that the affirmative potential 得 _dak1_ and negative potential 唔 _m4_ can intervene between the compound (see examples (2) and (5)). However, unlike directional compounds, this is the only situation in which the resultative and phase compounds can be separated.

### Resultative compounds

This compound structure consists of two verbs in which the second verb describes the resulting activity or state of either the subject or the object from the action carried out in the first verb.

~~~ conllu
# visual-style 2 3 compound:vv	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	屈	_	VERB	_	_	0	root	_	bend
3	斷	_	VERB	_	_	2	compound:vv	_	break
4	咗	_	PART	_	_	2	aux	_	PERF
5	支	_	NOUN	_	_	6	det	_	CL
6	筆	_	NOUN	_	_	2	obj	_	pen

1	"I	_	_	_	_	0	_	_	_
2	bent	_	_	_	_	0	_	_	_
3	and	_	_	_	_	0	_	_	_
4	broke	_	_	_	_	0	_	_	_
5	the	_	_	_	_	0	_	_	_
6	pen."	_	_	_	_	0	_	_	_

~~~

Sometimes the compound may be idiomatic as well (2).

~~~ conllu
# visual-style 1 3 compound:vv	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	諗	_	VERB	_	_	0	root	_	think
2	唔	_	ADV	_	_	3	advmod	_	NEG
3	通	_	VERB	_	_	1	compound:vv	_	go-through

1	"can't	_	_	_	_	0	_	_	_
2	figure	_	_	_	_	0	_	_	_
3	out	_	_	_	_	0	_	_	_
4	/	_	_	_	_	0	_	_	_
5	take	_	_	_	_	0	_	_	_
6	things	_	_	_	_	0	_	_	_
7	to	_	_	_	_	0	_	_	_
8	heart	_	_	_	_	0	_	_	_
9	(lit.	_	_	_	_	0	_	_	_
10	can't	_	_	_	_	0	_	_	_
11	think	_	_	_	_	0	_	_	_
12	through)."	_	_	_	_	0	_	_	_

~~~

Note that in resultative compounds the second verb can be an adjective, in which case `compound:vv` is still the appropriate relation to link the two:

~~~ conllu
# visual-style 2 3 compound:vv	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	他	_	PRON	_	_	2	nsubj	_	3SG.M
2	喊	_	VERB	_	_	0	root	_	cry
3	濕	_	ADJ	_	_	2	compound:vv	_	wet
4	咗	_	AUX	_	_	2	aux	_	PERF
5	件	_	NOUN	_	_	6	det	_	CL:piece
6	恤衫	_	AUX	_	_	2	obj	_	shirt

1	"He	_	_	_	_	0	_	_	_
2	cried	_	_	_	_	0	_	_	_
3	his	_	_	_	_	0	_	_	_
4	shirt	_	_	_	_	0	_	_	_
5	wet."	_	_	_	_	0	_	_	_

~~~

### Phase compounds

Phase compounds involve a second verb that adds aspect or telicity to the first verb. However, these second verbs have not fully grammaticalized and syntactically behave like the second verb in resultative compounds, and therefore are not considered the same as the postverbal aspect markers tagged as AUX.

These verbs include 着 / _zeok6_ "touched, got at, successful after an attempt", 到 _dou3_ "arrive, reach", 完 _jyun4_ "be complete, be finished", etc.

~~~ conllu
# visual-style 2 3 compound:vv	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	你	_	PRON	_	_	2	nsubj	_	2SG
2	搵	_	VERB	_	_	0	root	_	look-for
3	到	_	VERB	_	_	2	compound:vv	_	arrive
4	工	_	NOUN	_	_	2	obj	_	job
5	嗱	_	PART	_	_	2	discourse:sp	_	SP
6	？	_	PUNCT	_	_	2	punct	_	_

1	"Have	_	_	_	_	0	_	_	_
2	you	_	_	_	_	0	_	_	_
3	found	_	_	_	_	0	_	_	_
4	a	_	_	_	_	0	_	_	_
5	job?"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 3 compound:vv	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	寫	_	VERB	_	_	6	advcl	_	write
2	唔	_	ADV	_	_	3	advmod	_	NEG
3	完	_	VERB	_	_	1	compound:vv	_	finish
4	唔	_	ADV	_	_	5	advmod	_	NEG
5	准	_	AUX	_	_	6	aux	_	allow
6	走	_	VERB	_	_	0	root	_	go

1	"If	_	_	_	_	0	_	_	_
2	you	_	_	_	_	0	_	_	_
3	can't	_	_	_	_	0	_	_	_
4	finish	_	_	_	_	0	_	_	_
5	writing,	_	_	_	_	0	_	_	_
6	you're	_	_	_	_	0	_	_	_
7	not	_	_	_	_	0	_	_	_
8	allowed	_	_	_	_	0	_	_	_
9	to	_	_	_	_	0	_	_	_
10	leave."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:23:24 CEST 2020 -->
