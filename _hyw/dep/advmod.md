---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modifier of a word is a (non-clausal) [adverb](ADV) or adverbial phrase that serves to modify predicate or a modifier word.

Note that in the Armenian grammatical tradition, the term _adverbial modifier_ covers constituents that function like adverbs regardless whether they are realized by adverbs, adpositional phrases, or nouns in particular morphological [cases](Case). We differentiate adverbials realized as adverbs (`advmod`) and adverbials realized by noun phrases or adpositional phrases ([obl]()).

A limited set of adverbs can also modify nominals. The [advmod:emph]() relation has to be used in such cases.

~~~ conllu
# visual-style 5 3 advmod color:blue
1	Չեղաւ	ըլլալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	5	ccomp	_	Translit=Čeġaw|LTranslit=ëllal|SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
3	շարունակ	շարունակ	ADV	_	_	5	advmod	_	Translit=šarownak|LTranslit=šarownak
4	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	5	aux	_	Translit=kë|LTranslit=kë
5	կրկնէր	կրկնել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	Translit=krknēr|LTranslit=krknel|SpaceAfter=No
~~~

~~~ conllu
# visual-style 1 3 advmod color:blue
1	Մէյ	մէկ	NUM	_	Echo=Ech|NumForm=Word|NumType=Card	6	obl	_	Translit=Mēy|LTranslit=mēk
2	մըն	մը	DET	_	PronType=Art	1	det	_	Translit=mën|LTranslit=më
3	ալ	ալ	ADV	_	_	1	advmod	_	Translit=al|LTranslit=al
4	առտուն	առտու	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	obl	_	Translit=aṙtown|LTranslit=aṙtow
5	կանուխ	կանուխ	ADV	_	_	4	advmod:emph	_	Translit=kanowx|LTranslit=kanowx
6	եկաւ	գալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=ekaw|LTranslit=gal
7	տղան	տղայ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	Translit=tġan|LTranslit=tġay|SpaceAfter=No
8	։	։	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

<!-- Interlanguage links updated Út 30. června 2026, 10:59:33 CEST -->
