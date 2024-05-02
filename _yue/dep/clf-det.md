---
layout: relation
title: 'clf:det'
shortdef: 'classifier used as determiner'
udver: '2'
---

Normally, classifiers accompany numerals or determiners and are attached to them via the [clf]() relation.

However, in Cantonese a classifier may also be considered to function as a determiner when a noun phrase starts with a bare classifier, as in the following examples.
As classifiers are tagged [NOUN]() (accompanied with the feature `NounType=Clf`), they cannot be attached via a [det]() relation. They are attached as `clf:det` instead.

~~~ conllu
1	切	_	VERB	_	_	0	root	_	cut
2	個	_	NOUN	_	_	3	clf:det	_	CL:generic
3	梨	_	NOUN	_	_	1	obj	_	pear

1	"cut	_	_	_	_	0	_	_	_
2	a	_	_	_	_	0	_	_	_
3	pear"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
1	隻	_	NOUN	_	_	2	clf:det	_	CL
2	貓	_	NOUN	_	_	3	nsubj	_	cat
3	跌	_	VERB	_	_	0	root	_	fall
4	低	_	VERB	_	_	3	compound:dir	_	lower
5	咗	_	AUX	_	_	3	aux	_	PERF

1	"the	_	_	_	_	0	_	_	_
2	cat	_	_	_	_	0	_	_	_
3	fell	_	_	_	_	0	_	_	_
4	down"	_	_	_	_	0	_	_	_

~~~

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:36 CET -->
