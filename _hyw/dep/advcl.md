---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.), as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose clause, etc. The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause.

~~~ conllu
# visual-style 6 12 advcl color:blue
1	իր	իր	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	4	det:poss	_	Translit=ir|LTranslit=ir
2	չորս	չորս	NUM	_	NumForm=Word|NumType=Card	4	nummod	_	Translit=čors|LTranslit=čors
3	հազար	հազար	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	flat	_	Translit=hazar|LTranslit=hazar
4	ղրուշը	ղրուշ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	obj	_	Translit=ġrowšë|LTranslit=ġrowš
5	կու	կը	AUX	_	Aspect=Imp|Mood=Ind	6	aux	_	Translit=kow|LTranslit=kë
6	տար	տալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	Translit=tar|LTranslit=tal
7	իրեն	ինք	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Emp	6	iobj	_	Translit=iren|LTranslit=ink’|SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	Translit=,|LTranslit=,
9	եթէ	եթէ	SCONJ	_	_	12	mark	_	Translit=et’ē|LTranslit=et’ē
10	զինքը	ինք	PRON	_	Case=Acc|Number=Sing|Person[psor]=3|PronType=Emp	12	obj	_	Translit=zink’ë|LTranslit=ink’
11	կնութեան	կնութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	12	compound:lvc	_	Translit=knowt’ean|LTranslit=knowt’iwn
12	առնէր	առնել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	6	advcl	_	Translit=aṙnēr|LTranslit=aṙnel|SpaceAfter=No
~~~

~~~ conllu
# visual-style 4 12 advcl color:blue
1	—	—	PUNCT	_	_	6	punct	_	Translit=—|LTranslit=—
2	Խնդրեմ	խնդրել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=1|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	6	parataxis	_	Translit=Xndrem|LTranslit=xndrel|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	Translit=,|LTranslit=,
4	ըսաւ	ըսել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	6	parataxis	_	Translit=ësaw|LTranslit=ësel|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
6	նստեցէք	նստիլ	VERB	_	Aspect=Prosp|Mood=Imp|Number=Sing|Person=2|Polite=Form|Subcat=Tran|VerbForm=Fin|Voice=Act	0	root	_	Translit=nstec’ēk’|LTranslit=nstil|SpaceAfter=No
7	,	,	PUNCT	_	_	12	punct	_	Translit=,|LTranslit=,
8	կաշիէ	կաշի	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	9	nmod	_	Translit=kašiē|LTranslit=kaši
9	բազկաթոռ	բազկաթոռ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	12	obj	_	Translit=bazkat’oṙ|LTranslit=bazkat’oṙ
10	մը	մը	DET	_	PronType=Art	9	det	_	Translit=më|LTranslit=më
11	ցոյց	ցոյց	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	12	compound:lvc	_	Translit=c’oyc’|LTranslit=c’oyc’
12	տալով	տալ	VERB	_	Case=Ins|Definite=Ind|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	advcl	_	Translit=talov|LTranslit=tal|SpaceAfter=No
13	։	։	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:59:28 CEST -->
