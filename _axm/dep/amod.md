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
4	խայթել	խայթել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No|TokenRange=8:14
~~~

~~~ sdparse
լվա զերեսդ հով ջրով \n lva zeresd hov ǰrov \n "wash your face with cool water"
amod(ջրով, հով)  
amod(water, cool)  
~~~
