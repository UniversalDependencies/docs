---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---

An adjectival modifier of a noun is any adjectival phrase that serves
to modify the meaning of the noun. If the modifying adjectival word is pronominal (i.e. tagged [DET]()),
the relation is [det]() instead of `amod`.

~~~ conllu
# visual-style 2 1 amod color:blue
1	էգ	էգ	ADJ	_	Degree=Pos	2	amod	_	_
2	իժ	իժ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	nsubj	_	_
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	խայթել	խայթել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
~~~

~~~ conllu
# visual-style 5 4 amod color:blue
1	լվա	լվանալ	VERB	_	Aspect=Prosp|Mood=Imp|Number=Sing|Person=2|Style=Var|Subcat=Tran|VerbForm=Fin|Voice=Act	0	root	_	_
2-3	զերեսդ	_	_	_	_	_	_	_	_
2	զ	զ	ADP	_	AdpType=Prep	3	case	_	_
3	երեսդ	երես	NOUN	_	Animacy=Nhum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	1	obj	_	_
4	հով	հով	ADJ	_	Degree=Pos	5	amod	_	_
5	ջրով	ջուր	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	1	obl	_	_
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:34:10 CEST -->
