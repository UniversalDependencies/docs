---
layout: relation
title: 'orphan'
shortdef: 'orphan in ellipsis'
udver: '2'
---

The `orphan` relation is used to provide a satisfactory treatment of certain instances of
[ellipsis](http://universaldependencies.org/u/overview/specific-syntax.html#ellipsis) where simple promotion would result in an unnatural and misleading dependency relation (in the case of gapping and stripping, where a predicational or verbal head is elided).

~~~ conllu
# visual-style 7 8 orphan color:blue
1	ես	ես	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Translit=es|LTranslit=es
2	հաւաքեցի	հաւաքել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=hawak’ec’i|LTranslit=hawak’el
3	մէկ	մէկ	NUM	_	NumForm=Word|NumType=Card	4	nummod	_	Translit=mēk|LTranslit=mēk
4	ձայն	ձայն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	obj	_	Translit=jayn|LTranslit=jayn|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
6	կինս	կին	NOUN	_	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	2	conj	_	Translit=kins|LTranslit=kin
7	երեք	երեք	NUM	_	NumForm=Word|NumType=Card	8	nummod	_	Translit=erek’|LTranslit=erek’
8	ձայն	ձայն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	6	orphan	_	Translit=jayn|LTranslit=jayn
~~~

In this example, the subject _կինս_/_kins_ “my wife” is promoted to the head position in the second conjunct. Attaching the object _ձայն_/_jayn_ “vote” to the subject is necessary to preserve the integrity of the clause, but using the standard relation [obj]() would be misleading because _ձայն_ “vote” is not the object of _կինս_ “my wife”. Therefore, the `orphan` relation is used to indicate that this is a non-standard attachment.

<!-- Interlanguage links updated Út 30. června 2026, 11:00:38 CEST -->
