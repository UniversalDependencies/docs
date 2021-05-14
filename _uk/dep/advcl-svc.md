---
layout: relation
title: 'advcl:svc'
shortdef: 'adverbial infinitive'
udver: '2'
---

Ukrainian uses the `advcl:svc` relation (svc standing for serial verb construction, in an analogy to
[compound:svc]() that is used in other languages) for adverbial infinitives attached to the main verb.
Typically the main verb is a motion verb and the infinitive describes a purpose, that is, the intended
activity at the destination.

~~~ conllu
# sent_id = 14ay
# text = Так і тягне робити виписки.
# translit = Tak i ťаhne robyty vypysky.
# visual-style 3 4 advcl:svc color:green
1	Так	так	PART	Q	_	3	discourse	_	Id=14az|LTranslit=tak|Translit=Tak
2	і	і	PART	Q	_	1	fixed	_	Id=14b0|LTranslit=i|Translit=i
3	тягне	тягнути	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Id=14b1|LTranslit=ťаhnuty|Translit=ťаhne
4	робити	робити	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	3	advcl:svc	_	Id=14b2|LTranslit=robyty|Translit=robyty
5	виписки	виписка	NOUN	Ncfpan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	4	obj	_	Id=14b3|LTranslit=vypyska|SpaceAfter=No|Translit=vypysky
6	.	.	PUNCT	U	_	3	punct	_	Id=14b4|LTranslit=.|Translit=.

~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:46 CEST 2021 -->
