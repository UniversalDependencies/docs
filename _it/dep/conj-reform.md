---
layout: relation
title: 'conj:reform'
shortdef: 'reformulation'
udver: '2'
---

The specialization is used in KIParla, a corpus of spoken Italian, for reformulations: the speaker repeats or rephrases an expression, usually to specify or correct it, and the second expression is attached to the first. No coordinating conjunction is involved and the two expressions refer to the same thing. Unlike [reparandum](), the first expression is not abandoned: it remains part of the utterance.

~~~ conllu
# text = le mando una mail oggi quindi oggi stesso e
1	le	le	PRON	_	_	2	iobj	_	_
2	mando	mandare	VERB	_	_	0	root	_	_
3	una	uno	DET	_	_	4	det	_	_
4	mail	mail	NOUN	_	_	2	obj	_	_
5	oggi	oggi	ADV	_	_	2	advmod	_	_
6	quindi	quindi	ADV	_	_	2	advmod	_	_
7	oggi	oggi	ADV	_	_	5	conj:reform	_	_
8	stesso	stesso	ADJ	_	_	7	amod	_	_
9	e	e	CCONJ	_	_	2	cc	_	_
~~~
