---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
udver: '2'
---

An aux (auxiliary) of a clause is a function word associated with a verbal predicate that expresses categories such as tense, mood, aspect, voice or evidentiality. It is often a verb (which may have non-auxiliary uses as well) 

~~~ conllu
# sent_id = PS-JRV#111
# text = cl.e(3):PERSONAS3-desplazarse CONTINUAR
# gloss_en = cl CONTINUE
# text_es = Seguían caminando.
# text_en = They continued walking.
# timestamp = 1718008286917.125
1	cl.e(3):PERSONAS3-desplazarse	_	VERB	V.D	_	0	root	_	Gloss=cl
2	CONTINUAR	_	VERB	V	_	1	aux	_	Gloss=CONTINUE
~~~
