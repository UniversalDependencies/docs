---
layout: relation
title: 'obj:agent'
shortdef: 'agentive object'
udver: '2'
---

In a causative construction the `obj:agent` relation attaches the content verb to his agent, when the latter is the syntactical object of the sentence
(this initial agent has been demoted and became the object of the causative construction).

~~~ conllu
# visual-style 4 6 obj:agent color:blue
1	տան	տալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	իր	ինք	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	1	iobj	_	_
3	ու	ու	CCONJ	_	_	4	cc	_	_
4	հաճեցնեն	հաճեցնել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Cau	1	conj	_	_
5-6	զինք	_	_	_	_	_	_	_	_
5	զ	զ	ADP	_	AdpType=Prep	6	case	_	_
6	ինք	ինք	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	4	obj:agent	_	_
7-8	յիր	_	_	_	_	_	_	_	_
7	յ	ի	ADP	_	AdpType=Prep	9	case	_	_
8	իր	իր	DET	_	Case=Nom|Number=Sing|Person=3|PronType=Poss	9	det:poss	_	_
9	գործ	գործ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	obl	_	_
~~~

The true agent of the verb _հաճեցնել_ “satisfy (lit: cause to be pleased)” in the sentence is still _ինք_ “him”, i.e. “he is satisfied”~~~

The infinitive verb governs the syntactical subject of the sentence (i.e. the causer) with a [nsubj:caus]() relation.
<!-- Interlanguage links updated St 6. května 2026, 20:47:55 CEST -->
