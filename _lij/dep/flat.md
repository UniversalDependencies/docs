---
layout: relation
title: 'flat'
shortdef: 'flat multiword expression'
udver: '2'
---

The `flat` relation is used for words in an expression with no clear syntactic head. Each word after the first attaches directly to the first word.

Personal names are a common use of `flat`, as in _o scrittô Poulo Foggetta_ “the writer Poulo Foggetta”:

~~~ conllu
1	o	o	DET	_	_	2	det	_	Gloss=the
2	scrittô	scrittô	NOUN	_	_	0	root	_	Gloss=writer
3	Poulo	Poulo	PROPN	_	_	2	appos	_	Gloss=Poulo
4	Foggetta	Foggetta	PROPN	_	_	3	flat	_	Gloss=Foggetta

~~~

Names and foreign expressions whose internal syntactic structure is clear are analysed using their ordinary dependency relations.
