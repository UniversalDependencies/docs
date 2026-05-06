---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.),
as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose
clause, etc. The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause.

~~~ conllu
# visual-style 8 4 advcl color:blue
1	Եւ	եւ	CCONJ	_	_	8	cc	_	_
2	յորժամ	յորժամ	ADV	_	ExtPos=ADV	4	advmod	_	_
3	որ	որ	PART	_	_	2	fixed	_	_
4	օթիս	օթել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=2|Polarity=Pos|Style=Var|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	8	advcl	_	_
5	ի	ի	ADP	_	AdpType=Prep	6	case	_	_
6	ճանապարհն	ճանապարհ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	4	obl	_	SpaceAfter=No
7	՝	՝	PUNCT	_	_	8	punct	_	_
8	լվա	լվանալ	VERB	_	Aspect=Prosp|Mood=Imp|Number=Sing|Person=2|Style=Var|Subcat=Tran|VerbForm=Fin|Voice=Act	0	root	_	_
9-10	զերեսդ	_	_	_	_	_	_	_	_
9	զ	զ	ADP	_	AdpType=Prep	10	case	_	_
10	երեսդ	երես	NOUN	_	Animacy=Nhum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	8	obj	_	_
11	հով	հով	ADJ	_	Degree=Pos	12	amod	_	_
12	ջրով	ջուր	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	8	obl	_	SpaceAfter=No
13	։	։	PUNCT	_	_	8	punct	_	_  
~~~
