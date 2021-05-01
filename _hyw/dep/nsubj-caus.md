---
layout: relation
title: 'nsubj:caus'
shortdef: 'causative nominal subject'
udver: '2'
---

`nsubj:caus` relation links the causative verb to the syntactical subject of the sentence (i.e. the causer) in a causative construction.
The infinitive verb governs the causative auxiliary with an [aux:caus]() relation. The true agent of the action described by the sentence is annotated with an [iobj:agent]().

~~~ conllu
# visual-style 6 4 nsubj:caus color:blue
1	—	—	PUNCT	_	_	6	punct	_	Translit=—|LTranslit=—
2	Հանրային	հանրային	ADJ	_	Degree=Pos	3	amod	_	Translit=Hanrayin|LTranslit=hanrayin
3	պարտքի	պարտք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	nmod:poss	_	Translit=partk’i|LTranslit=partk’
4	վարչութիւնը	վարչութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	nsubj:caus	_	Translit=varčowt’iwnë|LTranslit=varčowt’iwn
5	սնտուկներ	սնտուկ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	6	obj	_	Translit=sntowkner|LTranslit=sntowk
6	պատրաստել	պատրաստել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	0	root	_	Translit=patrastel|LTranslit=patrastel
7	կու	կը	AUX	_	Aspect=Imp|Mood=Ind	6	aux	_	Translit=kow|LTranslit=kë
8	տայ	տալ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Cau	6	aux	_	Translit=tay|LTranslit=tal
9	կոր	կոր	AUX	_	Aspect=Prog|Mood=Ind|Style=Coll	6	aux	_	Translit=kor|LTranslit=kor|SpaceAfter=No
10	։	։	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~

For more details see [specific-syntax](http://universaldependencies.org/hyw/overview/specific-syntax.html).
<!-- Interlanguage links updated Čt lis 12 09:43:32 CET 2020 -->
