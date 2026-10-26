---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

The relation determiner (`det`) holds between a nominal head and its [determiner](DET).
This relation is used for pronominal adjectival modifiers of noun phrases; such modifiers have the POS tag`DET`.
Non-pronominal adjectives are tagged [ADJ]() and the relation is labeled [amod]().

~~~ conllu
# visual-style 2 1 det color:blue
1	Նոյն	նոյն	DET	_	PronType=Dem	2	det	_	Translit=Noyn|LTranslit=noyn
2	ուժերը	ուժ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	0	root	_	Translit=owžerë|LTranslit=owž
3-4	չէի՞ն	_	_	_	_	_	_	_	Translit=čēi?n|SpaceAfter=No
3	չէին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	2	cop	_	Translit=čēin|LTranslit=em
4	՞	՞	PUNCT	_	_	3	punct	_	Translit=?|LTranslit=?
~~~

~~~ conllu
# visual-style 6 7 det color:blue
1	Կայ	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=Kay|LTranslit=kam
2	նաեւ	նաեւ	CCONJ	_	_	1	cc	_	Translit=naew|LTranslit=naew
3	յաւելեալ	յաւելեալ	ADJ	_	_	6	amod	_	Translit=yaweleal|LTranslit=yaweleal|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
5	հետաքրքրական	հետաքրքրական	ADJ	_	Degree=Pos	3	conj	_	Translit=hetak’rk’rakan|LTranslit=hetak’rk’rakan
6	երեւոյթ	երեւոյթ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	nsubj	_	Translit=erewoyt’|LTranslit=erewoyt’
7	մը	մը	DET	_	PronType=Art	6	det	_	Translit=më|LTranslit=më|SpaceAfter=No
8	։	։	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 2 1 det color:blue
# visual-style 5 4 det color:blue
1	Այդ	այդ	DET	_	Deixis=Med|PronType=Dem	2	det	_	Translit=Ayd|LTranslit=ayd
2	բանը	բան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	Translit=banë|LTranslit=ban
3	չպատահեցաւ	պատահիլ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=čpatahec’aw|LTranslit=patahil
4	այդ	այդ	DET	_	Deixis=Med|PronType=Dem	5	det	_	Translit=ayd|LTranslit=ayd
5	ժամանակ	ժամանակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	obl	_	Translit=žamanak|LTranslit=žamanak
~~~

Note that possessive determiners like _իմ_/_im_ “my” are tagged `DET` and attached with the [det:poss]() relation.

Pronominal quantifiers are also tagged `DET` and attached to their nominal head with the `det` relation.

~~~ conllu
# visual-style 4 2 det color:blue
1	Այսպէս	այսպէս	ADV	_	Deixis=Prox|PronType=Dem	5	advmod	_	Translit=Ayspēs|LTranslit=ayspēs
2-3	քանի՞	_	_	_	_	_	_	_	Translit=k’ani?
2	քանի	քանի	DET	_	PronType=Int	4	det	_	Translit=k’ani|LTranslit=k’ani
3	՞	՞	PUNCT	_	_	2	punct	_	Translit=?|LTranslit=?
4	պատմութիւն	պատմութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	6	obj	_	Translit=patmowt’iwn|LTranslit=patmowt’iwn
5	կրցաք	կրնալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Plural|Person=2|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=krc’ak’|LTranslit=krnal
6	գտնել	գտնել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	5	xcomp	_	Translit=gtnel|LTranslit=gtnel|SpaceAfter=No
7	։	։	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:01 CEST -->
