---
layout: relation
title: 'csubj:outer'
shortdef: 'outer clause clausal subject'
udver: '2'
---

This relation specifies a clausal subject of a copular clause whose predicate is itself a clause, to signal that it is not the subject of the nested clause.
See discussion of [Predicate Clauses](../overview/complex-syntax.html#predicate-clauses).

~~~ conllu
~~~

The nominal counterpart of this relation is [nsubj:outer]().

The `:outer` subtype is *not* intended for most clausal subjects of copular clauses—only those where the predicate is itself a clause. 
Plain [csubj]() (or another subtype) will be appropriate if the copular clause predicate is a nominal, adjective, etc.:

~~~ conllu
# Visual-style 1 3 csubj coclor:blue
1	Նպատակն	նպատակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	Translit=Npatakn|LTranslit=npatak
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	Translit=ē|LTranslit=em
3	տապալել	տապալել	VERB	_	Case=Nom|Definite=Ind|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	1	csubj	_	Translit=tapalel|LTranslit=tapalel
4	կուսակցութիւնը	կուսակցութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	obj	_	Translit=kowsakc’owt’iwnë|LTranslit=kowsakc’owt’iwn
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:59:57 CEST -->
