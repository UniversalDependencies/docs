layout: relation
title: 'aux:caus'
shortdef: 'causative auxiliary'
udver: '2'
---

The `aux:caus` relation links the infinitive verb (i.e. the governor) and the finite causative [auxiliary](AUX) _տալ_ “to make” in a causative construction.
The syntactical subject of the sentence (i.e. the causer) receives a [nsubj:caus]() link.
The initial agent of the action described by the sentence is demoted and will be anotated with an [iobj:agent]() relation.

~~~ conllu
# visual-style 7 6 aux:caus color:blue
1-2	զամէնն	_	_	_	_	_	_	_	_
1	զ	զ	ADP	_	AdpType=Prep	2	case	_	_
2	ամէնն	ամէն	PRON	_	Case=Acc|PronType=Tot	4	obj	_	_
3	հնազանդութեամբ	հնազանդութիւն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Coll	4	obl	_	_
4	բերէ	բերել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	եւ	եւ	CCONJ	_	_	7	cc	_	_
6	չտայ	տալ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Cau	7	aux:caus	_	_
7	սպաննել	սպաննել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	conj	_	_
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:45:29 CEST -->
