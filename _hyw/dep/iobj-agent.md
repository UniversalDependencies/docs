---
layout: relation
title: 'iobj:agent'
shortdef: 'agentive indirect object'
udver: '2'
---

In a causative construction, the `iobj:agent` relation attaches the causative (infinitive) verb to his agent, 
when the latter is the syntactical indirect object of the sentence (this initial agent has been demoted and became an indirect object in the causative construction).

~~~ conllu
# visual-style 10 8 iobj:agent color:blue
1	Ես	ես	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Translit=Es|LTranslit=es
2	դագաղ	դագաղ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	obj	_	Translit=dagaġ|LTranslit=dagaġ
3	չեմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	aux	_	Translit=čem|LTranslit=em
4	շիներ	շինել	VERB	_	Aspect=Imp|Connegative=Yes|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=šiner|LTranslit=šinel|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
6	պոռացի	պոռալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	4	parataxis	_	Translit=poṙac’i|LTranslit=poṙal|SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
8	ինծի	ես	PRON	_	Animacy=Hum|Case=Dat|Number=Sing|Person=1|PronType=Prs	10	iobj:agent	_	Translit=inçi|LTranslit=es
9	դագաղ	դագաղ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	10	obj	_	Translit=dagaġ|LTranslit=dagaġ
10	շինել	շինել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	conj	_	Translit=šinel|LTranslit=šinel
11	մի	մի	PART	_	Mood=Imp|Polarity=Neg	12	advmod	_	Translit=mi|LTranslit=mi
12	տաք	տալ	AUX	_	Aspect=Prosp|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Cau	10	aux:caus	_	Translit=tak’|LTranslit=tal|SpaceAfter=No
13	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~

The true agent of the verb _շինել տալ_ “make to build” in the sentence is _ինծի_ “me”.

The causative (infinitive) verb governs the syntactical subject of the sentence (i.e. the causer) with a [nsubj:caus]() relation.
The infinitive verb governs the causative auxiliary with an [aux:caus]() relation.

For more details see [specific-syntax](http://universaldependencies.org/hyw/overview/specific-syntax.html).
<!-- Interlanguage links updated Pá kvě 14 11:09:08 CEST 2021 -->
