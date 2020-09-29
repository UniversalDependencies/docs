---
layout: relation
title: 'compound:vv'
shortdef: 'verb-verb compound'
udver: '2'
---

This relation is used for verb-verb and verb-adjective compounds where the second verb/adjective covers what are known as "resultative complements" and "phase complements" in Chinese linguistics. Here we will call them resultative and phase _compounds_ to avoid confusion between the different definitions of "complement" between Chinese-specific terminology and general linguistics terminology. 

A special feature of these compounds (as well as directional compounds; see [compound:dir]()) is that the affirmative potential 得 _de_ and negative potential 不 _bù_ can intervene between the compound (see examples (2) and (5)). However, unlike directional compounds, this is the only situation in which the resultative and phase compounds can be separated.

### Resultative compounds

This compound structure consists of two verbs in which the second verb describes the resulting activity or state of either the subject or the object from the action carried out in the first verb.

~~~ conllu
# visual-style 2 3 compound:vv	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	摔	_	VERB	_	_	0	root	_	fall
3	破	_	VERB	_	_	2	compound:vv	_	break
4	了	_	PART	_	_	2	aux	_	PERF
5	腿	_	NOUN	_	_	2	obj	_	leg

1	"I	_	_	_	_	0	_	_	_
2	fell	_	_	_	_	0	_	_	_
3	breaking	_	_	_	_	0	_	_	_
4	my	_	_	_	_	0	_	_	_
5	leg."	_	_	_	_	0	_	_	_

~~~

Sometimes the compound may be idiomatic as well (2).

~~~ conllu
# visual-style 1 3 compound:vv	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	行	_	VERB	_	_	0	root	_	do
2	不	_	ADV	_	_	3	advmod	_	NEG
3	通	_	VERB	_	_	1	compound:vv	_	go-through
4	的	_	PART	_	_	1	discourse:sp	_	SP

1	"It	_	_	_	_	0	_	_	_
2	won't	_	_	_	_	0	_	_	_
3	work."	_	_	_	_	0	_	_	_
4	(lit.	_	_	_	_	0	_	_	_
5	can't	_	_	_	_	0	_	_	_
6	go	_	_	_	_	0	_	_	_
7	through	_	_	_	_	0	_	_	_
8	by	_	_	_	_	0	_	_	_
9	doing)	_	_	_	_	0	_	_	_

~~~

Note that in Chinese resultative compounds the second verb can be an adjective, in which case `compound:vv` is still the appropriate relation to link the two:

~~~ conllu
# visual-style 2 3 compound:vv	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	他	_	PRON	_	_	2	nsubj	_	3SG.M
2	哭	_	VERB	_	_	0	root	_	cry
3	累	_	ADJ	_	_	2	compound:vv	_	tired
4	了	_	AUX	_	_	2	aux	_	PERF

1	"He	_	_	_	_	0	_	_	_
2	cried	_	_	_	_	0	_	_	_
3	himself	_	_	_	_	0	_	_	_
4	tired."	_	_	_	_	0	_	_	_

~~~

### Phase compounds

Phase compounds involve a second verb that adds aspect or telicity to the first verb. However, these second verbs have not fully grammaticalized and syntactically behave like the second verb in resultative compounds, and therefore are not considered the same as the postverbal aspect markers tagged as [AUX]().

These verbs include (non-neutral-tone versions of): 着 / _zháo_ "touched, got at, successful after an attempt", 到 _dào_ "arrive, reach", 見 _jiàn_ "see", 完 _wán_ "be complete, be finished", 過 _guò_ "pass, cross" (see Chao 1968:446-450 for details). 

~~~ conllu
# visual-style 2 3 compound:vv	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	你	_	PRON	_	_	2	nsubj	_	2SG
2	找	_	VERB	_	_	0	root	_	look-for
3	到	_	VERB	_	_	2	compound:vv	_	arrive
4	工作	_	NOUN	_	_	2	obj	_	job
5	了	_	PART	_	_	2	discourse:sp	_	SP
6	嗎	_	PART	_	_	2	discourse:sp	_	SP:Q
7	？	_	PUNCT	_	_	2	punct	_	_

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
2	不	_	ADV	_	_	3	advmod	_	NEG
3	完	_	VERB	_	_	1	compound:vv	_	finish
4	不	_	ADV	_	_	5	advmod	_	NEG
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

### References

- Chao, Yuan Ren. 1968. A Grammar of Spoken Chinese. University of California Press.
<!-- Interlanguage links updated Út zář 29 20:23:24 CEST 2020 -->
