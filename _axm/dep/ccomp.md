---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a dependent clause 
which is a core argument. That is, it functions like an object of the verb, or
adjective.

~~~ conllu
# visual-style 1 8 ccomp color:blue
1	Հարցնեն	հարցնել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2-3	յօրէնքս
2	յ	ի	ADP	_	AdpType=Prep	3	case	_	_
3	օրէնքս	օրէնք	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Plur	1	obl	_	_
4	վասն	վասն	ADP	_	AdpType=Prep	5	case	_	_
5	անընկմահու	անընկմահ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	1	obl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	թէ	թէ	SCONJ	_	_	8	mark	_	_
8	լինի	լինիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	1	ccomp	_	_
9	իրենց	իրենք	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	8	obl	_	_
10	թաղումն	թաղում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	_
11	կամ	կամ	CCONJ	_	_	12	cc	_	_
12	պատարագ	պատարագ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	10	conj	_	SpaceAfter=No
13	։	։	PUNCT	_	_	1	punct	_	_
~~~

Such clausal complements may be finite or nonfinite. However, if the subject of the clausal complement is controlled (that is, must be the same as the higher subject or object, with no other possible interpretation)
the appropriate relation is [xcomp]().

~~~ conllu
# visual-style 13 3 ccomp color:blue
1	Եւ	եւ	CCONJ	_	_	11	cc	_	_
2	ջուր	ջուր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	obj	_	_
3	հանել	հանել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	13	ccomp	_	_
4	ի	ի	ADP	_	AdpType=Prep	5	case	_	_
5	գետոց	գետ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Plur	3	obl	_	_
6	ջրելոյ	ջրել	VERB	_	Case=Dat|Definite=Ind|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	3	obl	_	_
7	կամ	կամ	CCONJ	_	_	8	cc	_	_
8	ջաղցնոյ	ջաղաց	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	6	conj	_	SpaceAfter=No
9	՝	՝	PUNCT	_	_	11	punct	_	_
10-11	չկարէ	_	_	_	_	_	_	_	_
10	չ	չի	PART	_	Polarity=Neg	11	advmod	_	_
11	կարէ	կարել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
12	ոք	ոք	PRON	_	Case=Nom|Number=Sing|PronType=Ind	13	nsubj	_	_
13	արգելուլ	արգելուլ	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	11	xcomp	_	_
~~~

~~~ sdparse
պարտի թագաւորն զիր իրաւունքն տանել ըղորդ \n The King is obligated to administer his justice with integrity 
xcomp(պարտի, տանել)
xcomp(obligated, to-administer)
~~~

The key difference here is that, while it is possible to interpret the first sentence as meaning that the one who forbids is not the one who will draw, in the second sentence it is clear that the 
subject of __administer__ can only be __King__. This is what distinguishes `ccomp` and `xcomp`.
<!-- Interlanguage links updated St 6. května 2026, 20:45:47 CEST -->
