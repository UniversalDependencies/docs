---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
udver: '2'
---

A dependency is labeled as `dep` when a system is unable to
determine a more precise dependency relation between two words. This may be because of a weird grammatical construction, a non-codified gesture (G) is at play or that certain sign glosses are unsure.

~~~ conllu
# sent_id = PS-JRV#030
# text = HABER HOMBRE INDX G:efectivamente
# gloss_en = HAVE MAN INDX G
# text_es = (y vio que) allí había un hombre.
# text_en = and saw a man.
1	HABER	_	VERB	V	_	0	root	_	Gloss=HAVE
2	HOMBRE	_	NOUN	N	_	1	nsubj	_	Gloss=MAN
3	INDX	_	ADV	Loc	_	1	advmod	_	Gloss=INDX
4	G:efectivamente	_	X	G	_	1	dep	_	Gloss=G
~~~
