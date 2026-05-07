---
layout: relation
title: 'compound:redup'
shortdef: 'reduplicated compounds'
udver: '2'
---

This subtype of [compound]() covers a range of reduplicated forms in Middle Armenian.
Reduplication is a common process especially for [adverbs](ADV) and [adjectives](ADJ), but it is also used for reduplicated [noun](NOUN) and [verb](VERB) forms. They can have additional feature of [Echo]().

~~~ conllu
# visual-style 5 4 compound:redup color:blue
1	Ով	ով	PRON	_	Case=Nom|Number=Sing|PronType=Rel	5	nsubj	_	_
2-3	զմեզ	_	_	_	_	_	_	_	_
2	զ	զ	ADP	_	AdpType=Prep	3	case	_	_
3	մեզ	մենք	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	5	obj	_	_
4	աժնեց	աժնել	VERB	_	Aspect=Perf|Echo=Ech|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	5	compound:redup	_	_
5	բաժնեց	բաժնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	կամ	կամ	CCONJ	_	_	10	cc	_	_
7	ի	ի	ADP	_	AdpType=Prep|ExtPos=ADV	8	case	_	_
8	մեր	մենք	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	10	obl	_	_
9	մէջն	մէջ|մէջն	ADP	_	AdpType=Post	7	fixed	_	_
10	զրուցեց	զրուցել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
11	։	։	PUNCT	_	_	5	punct	_	_
~~~

~~~ sdparse
Բուռն բուռն ձգէ, որ ուտէ ։ \n Throw it handful by-handful, so that he/she/it may eat.
compound:redup(Բուռն, բուռն)
compound:redup(handful, by-handful)
~~~

~~~ sdparse
Մէջ ընդ մէջ և ժամ ժամ դեղին դառնայ ։ \n From-time to time and hour by-hour it turns yellow .
compound:redup(Մէջ, մէջ)
compound:redup(From-time, time)
compound:redup(ժամ, ժամ)
compound:redup(hour, by-hour)
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:46:06 CEST -->
