---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.), as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose clause, etc. The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause.

~~~ sdparse
Դեպքը պատահեց , երբ մթնում էր ։ \n The-accident happened , when it-was getting-dark .
advcl(պատահեց, մթնում)
advcl(happened, getting-dark)
~~~

~~~ sdparse
Եթե գիտեք ով է արել , պետք է ասեք ուսուցչին ։ \n If you-know who has-done , you must tell the-teacher .
advcl(ասեք, գիտեք)
advcl(must, you-know)
~~~

~~~ sdparse
Նա շտապում էր , որ ժամանակին տեղ հասնի ։ \n He rushed , in-order-to arrive in-time .
advcl(շտապում, հասնի)
advcl(rushed, arrive)
~~~

## Optional Depictives

This relation is also used for optional depictive adjectives, where the adjective is introduced in clause structure independently of the nominal it describes (contrast: [acl]() if the adjective is an adnominal predicate). The depictive adjective is treated as an adverbial clause modifier of the higher clause. The adjective also provides a secondary predication, where the nominal predicand may or may not be overt; if it is overt, the secondary predication can be represented with an enhanced dependency. See [xcomp]() for further discussion of resultatives and depictives.

~~~ conllu
# visual-style 8 7 advcl color:blue
1	Երկօրյա	երկօրյա	ADJ	_	_	5	amod	_	Translit=Erkòrya|LTranslit=erkòrya
2	ակտիվ	ակտիվ	ADJ	_	Degree=Pos	5	amod	_	Translit=aktiv|LTranslit=aktiv|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	Translit=,|LTranslit=,
4	հաճելի	հաճելի	ADJ	_	Degree=Pos	2	conj	_	Translit=hač̣eli|LTranslit=hač̣eli
5	հանգստից	հանգիստ	NOUN	_	Animacy=Hum|Case=Abl|Definite=Ind|Number=Coll	8	obl	_	Translit=hangstic’|LTranslit=hangist
6	հետո	հետո	ADP	_	AdpType=Post	5	case	_	Translit=heto|LTranslit=heto
7	գոհ	գոհ	ADJ	_	Degree=Pos	8	advcl	_	Translit=goh|LTranslit=goh
8	վերադարձանք	վերադառնալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=veradarjank’|LTranslit=veradaṙnal
~~~

_գոհ_/_goh_ “pleased” describes the subject of _վերադարձանք_/_veradarjankʼ_ “we came back”, not the manner of the action—but is still taken to modify the verb.
<!-- Interlanguage links updated Út 30. června 2026, 10:59:28 CEST -->
