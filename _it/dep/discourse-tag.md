---
layout: relation
title: 'discourse:tag'
shortdef: 'tag'
udver: '2'
---

The specialization is used in KIParlaForest for tag questions: short elements added at the end of a clause that ask the interlocutor for confirmation or agreement (*no*, *giusto*). The tag is attached to the head of the clause it refers to. It does not contribute to the syntax of the clause and does not have an answer function of its own, unlike a [discourse]() particle used as an answer.

~~~ conllu
# text = perché eri piccolina e in famiglia no
1	perché	perché	SCONJ	_	_	3	mark	_	_
2	eri	essere	AUX	_	_	3	cop	_	_
3	piccolina	piccolo	ADJ	_	_	0	root	_	_
4	e	e	CCONJ	_	_	3	discourse:filler	_	_
5	in	in	ADP	_	_	6	case	_	_
6	famiglia	famiglia	NOUN	_	_	3	obl	_	_
7	no	no	ADV	_	_	3	discourse:tag	_	_
~~~

~~~ conllu
# text = poi dopo credo che sia chiuso anche quello adesso giusto
1	poi	poi	ADV	_	_	3	cc	_	_
2	dopo	dopo	ADV	_	_	3	advmod	_	_
3	credo	credere	VERB	_	_	0	root	_	_
4	che	che	SCONJ	_	_	6	mark	_	_
5	sia	essere	AUX	_	_	6	aux	_	_
6	chiuso	chiudere	VERB	_	_	3	ccomp	_	_
7	anche	anche	ADV	_	_	8	advmod	_	_
8	quello	quello	PRON	_	_	6	nsubj	_	_
9	adesso	adesso	ADV	_	_	6	advmod	_	_
10	giusto	giusto	ADJ	_	_	6	discourse:tag	_	_
~~~
