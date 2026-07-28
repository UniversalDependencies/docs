---
layout: relation
title: 'iobj:agent'
shortdef: 'agentive indirect object'
udver: '2'
---

In a causative construction, the `iobj:agent` relation attaches the causative (infinitive) verb to his agent, when the latter is the syntactical indirect object of the
sentence (this initial agent has been demoted and became an indirect object in the causative construction).

~~~ conllu
# visual-style 6 8 iobj:agent color:blue
1	հաճին	հաճենալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Style=Arch|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
2	ի	ի	ADP	_	AdpType=Prep	1	case	_	_
3	լաւն	լաւ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Coll	1	obl	_	_
4	,	,	PUNCT	_	_	6	punct	_	_
5	եւ	եւ	CCONJ	_	_	6	cc	_	_
6	կրթեցնեն	կրթեցնել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Cau	1	conj	_	_
7-8	յարքունիքն	_	_	_	_	_	_	_	_
7	յ	ի	ADP	_	AdpType=Prep	8	case	_	_
8	արքունիքն	արքունիք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	6	iobj:agent	_	_
~~~

The true agent of the verb _կրթեցնել_ “educate” in the sentence is _արքունիքն_ “royal court”, i.e. “the royal court will learn”

The causative verb governs the syntactical subject of the sentence (i.e. the causer) with a [nsubj:caus]() relation. For the
causative auxiliary see the [aux:caus]() relation.
<!-- Interlanguage links updated Út 30. června 2026, 11:00:12 CEST -->
