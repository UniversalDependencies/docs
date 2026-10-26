---
layout: relation
title: 'discourse:filler'
shortdef: 'filler'
udver: '2'
---

The specialization is used in KIParla, a corpus of spoken Italian, for fillers: filled pauses (*eh*, *ehm*) and function words (typically *e*) that fill a pause while the speaker plans the continuation and do not contribute to the syntax of the clause. The filler is attached to the word it precedes.

It differs from [discourse](), which covers discourse particles and markers with a pragmatic function (*allora*, *appunto*, *diciamo*), and from [reparandum](), which marks material that is repaired.

~~~ conllu
# text = eh sì
1	eh	eh	INTJ	_	_	2	discourse:filler	_	_
2	sì	sì	ADV	_	_	0	root	_	_
~~~

~~~ conllu
# text = e no questo è suo
1	e	e	CCONJ	_	_	2	discourse:filler	_	_
2	no	no	ADV	_	_	0	root	_	_
3	questo	questo	PRON	_	_	5	nsubj	_	_
4	è	essere	AUX	_	_	5	cop	_	_
5	suo	suo	DET	_	_	2	conj	_	_
~~~
