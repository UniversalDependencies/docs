---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---

The `fixed` relation is one of the three relations for multiword expressions (MWEs) (the other two being [flat]() and [compound]()). It is used for certain fixed grammaticized expressions that behave like function words or short adverbials.

Note that these expressions do not have any internal syntactic structure (except from a historical perspective) and that the structural annotation is in principle arbitrary. The leftmost word is the head and all the other words are attached as its `fixed` modifiers.

~~~ conllu
# visual-style 1 2 fixed color:blue
# visual-style 1 3 fixed color:blue
1	ո	ո	DET	_	ExtPos=DET|PronType=Ind	0	root	_	Translit=o|LTranslit=o
2	եւ	եւ	CCONJ	_	_	1	fixed	_	Translit=ew|LTranslit=ew
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	fixed	_	Translit=ē|LTranslit=em
~~~

~~~ conllu
# visual-style 1 2 fixed color:blue
1	Երբ	երբ	ADV	_	ExtPos=ADV|PronType=Rel	0	root	_	Translit=Erb|LTranslit=erb
2	եւ	եւ	CCONJ	_	_	1	fixed	_	Translit=ew|LTranslit=ew
3	իցէ	լինել	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	1	fixed	_	Translit=ic’ē|LTranslit=linel
~~~

~~~ conllu
# visual-style 1 2 fixed color:blue
1	ի	ի	ADP	_	AdpType=Prep|ExtPos=ADP	0	root	_	Translit=i|LTranslit=i
2	վեր	վեր	ADV	_	_	1	fixed	_	Translit=ver|LTranslit=ver
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:08 CEST -->
