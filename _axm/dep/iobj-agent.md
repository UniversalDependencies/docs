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

~~~ conllu
# visual-style 4 6 iobj:agent color:blue
1	տան	տալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	իր	ինք	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	1	iobj	_	_
3	ու	ու	CCONJ	_	_	4	cc	_	_
4	հաճեցնեն	հաճեցնել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Cau	1	conj	_	_
5-6	զինք	_	_	_	_	_	_	_	_
5	զ	զ	ADP	_	AdpType=Prep	6	case	_	_
6	ինք	ինք	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	4	iobj:agent	_	_
7-8	յիր	_	_	_	_	_	_	_	_
7	յ	ի	ADP	_	AdpType=Prep	9	case	_	_
8	իր	իր	DET	_	Case=Nom|Number=Sing|Person=3|PronType=Poss	9	det:poss	_	_
9	գործ	գործ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	obl	_	_
~~~

The true agent of the verb _հաճեցնել_ “satisfy (lit: cause to be pleased)” in the sentence is still _ինք_ “him”, i.e. “he is satisfied”

The causative verb governs the syntactical subject of the sentence (i.e. the causer) with a [nsubj:caus]() relation. For the
causative auxiliary see the [aux:caus]() relation.
<!-- Interlanguage links updated St 6. května 2026, 20:47:07 CEST -->
