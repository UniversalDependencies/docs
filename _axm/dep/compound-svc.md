---
layout: relation
title: 'compound:svc'
shortdef: 'serial compound verb'
udver: '2'
---

`compound:svc` marks compound verb constructs, in non-nominal complex predicates. In Middle Armenian the both verbs typically are finite, the finite verb that controls the argument structure is the head. These verbs are also often the semantic heads of the clause.

~~~ conllu
# visual-style 1 2 compound:svc color:blue
1	Ելայ	ելնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
2	ժողուեցի	ժողուել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	1	compound:svc	_	_
3-4	զիմ	_	_	_	_	_	_	_	_
3	զ	զ	ADP	_	AdpType=Prep	5	case	_	_
4	իմ	իմ	DET	_	Case=Acc|Number=Sing|Person=1|PronType=Poss	5	det:poss	_	_
5	մեղքն	մեղք	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	2	obj	_	_
6	ու	ու	CCONJ	_	_	7	cc	_	_
7	դրի	դնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	_	_
8	առջևս	առջև	ADP	_	AdpType=Post|Case=Nom|Number[psor]=Sing|Person[psor]=1	7	obl	_	_
9	ու	ու	CCONJ	_	_	10	cc	_	_
10	լացի	լալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	1	conj	_	SpaceAfter=No
11	։	։	PUNCT	_	_	1	punct	_	_
~~~

~~~ conllu
# visual-style 1 2 compound:svc color:blue
1	Գնացի	գնալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	անկայ	անկանել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin||Voice=Mid	1	compound:svc	_	_
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:52 CEST -->
