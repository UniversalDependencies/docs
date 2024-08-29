---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

The conjunct relation holds between coordinated elements. We treat coordination asymmetrically: The head of the relation is the first conjunct and other conjuncts depend on it via the conj relation. Repeated elements within a clause are listed as [compound:redup] or [compound:vsc]

~~~ conllu
# sent_id = VV-FRE#036
# text = SERPIENTE TOCAR G:¡ah! cl.m(Xc):golpear+con-palo
# gloss_en = SNAKE TOUCH G cl
# text_es = Toqué la serpiente, me asusté y la apaleé.
# text_en = I touched the snake, got scared and beat it.
1	SERPIENTE	_	NOUN	N	_	2	_	_	Gloss=SNAKE
2	TOCAR	_	VERB	V	_	0	root	_	Gloss=TOUCH
3	G:¡ah!	_	ADV	xxx	_	2	advmod	_	Gloss=G
4	cl.m(Xc):golpear+con-palo	_	VERB	V.D	_	2	conj	_	Gloss=cl
~~~
