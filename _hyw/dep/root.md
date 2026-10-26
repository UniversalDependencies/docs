---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence. A fake node `ROOT` is used as the governor. The `ROOT` node is indexed with 0, since the indexing of real words in the sentence starts at 1.

~~~ conllu
# visual-style 0 4 root color:blue
1	Չորս	չորս	NUM	_	NumForm=Word|NumType=Card	2	nummod	_	Translit=Čors|LTranslit=čors
2	հաստատութիւններ	հաստատութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	4	nsubj	_	Translit=hastatowt’iwnner|LTranslit=hastatowt’iwn
3	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	4	aux	_	Translit=kë|LTranslit=kë
4	յամառին	յամառիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=yamaṙin|LTranslit=yamaṙil
5	ընտրութեան	ընտրութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	obl	_	Translit=ëntrowt’ean|LTranslit=ëntrowt’iwn
6	համար	համար	ADP	_	AdpType=Post	5	case	_	Translit=hamar|LTranslit=hamar
~~~

There is just one node with the `root` dependency relation in every tree. If the main predicate is not present (due to [ellipsis](http://universaldependencies.org/hy/overview/specific-syntax.html))
and there are multiple orphaned dependents, the dependent that is highest in the obliqueness hierarchy is promoted to the head (root) position and the other orphans are attached to it.

~~~ conllu
# visual-style 8 10 orphan color:blue
1	Միւսներունը	միւսներու	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing|Poss=Yes	3	nsubj	_	Translit=Miwsnerownë|LTranslit=miwsnerow|SpaceAfter=No
2	՝	՝	PUNCT	_	_	3	punct	_	Translit=,|LTranslit=,
3	շահն	շահ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	Translit=šahn|LTranslit=šah
4	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	3	cop	_	Translit=ēr|LTranslit=em|SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	Translit=,|LTranslit=,
6	շահին	շահ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	8	nmod:poss	_	Translit=šahin|LTranslit=šah
7	մէկ	մէկ	NUM	_	NumForm=Word|NumType=Card	8	nummod	_	Translit=mēk|LTranslit=mēk
8	երանգը	երանգ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	conj	_	Translit=erangë|LTranslit=erang|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
10	էնթէրէն	էնթէրէ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing|Style=Coll	8	orphan	_	Translit=ēnt’ērēn|LTranslit=ēnt’ērē|SpaceAfter=No
11	...	...	PUNCT	_	_	3	punct	_	Translit=...|LTranslit=...
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:43 CEST -->
