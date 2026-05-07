---
layout: relation
title: 'flat:redup'
shortdef: 'reduplication'
udver: '2'
---

This relation is used generally for reduplicating constructions in Middle Armenian. We consider the case of a reduplication only when the same word is repeated in a sequence, all of the repetitions having the same function and head in the clause, often with no other words belonging to other phrases intervening. This allows for intermediate elements like conjunctions, adpositions, punctuation or the reduplicated elements' own dependents.
Reduplication is a common process especially for [adverbs](ADV) and [adjectives](ADJ), but it is also used for reduplicated [noun](NOUN) and [verb](VERB) forms. They can have additional feature of [Echo]().

~~~ conllu
# visual-style 5 4 flat:redup color:blue
1	Ով	ով	PRON	_	Case=Nom|Number=Sing|PronType=Rel	5	nsubj	_	_
2-3	զմեզ	_	_	_	_	_	_	_	_
2	զ	զ	ADP	_	AdpType=Prep	3	case	_	_
3	մեզ	մենք	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	5	obj	_	_
4	աժնեց	աժնել	VERB	_	Aspect=Perf|Echo=Ech|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	5	flat:redup	_	_
5	բաժնեց	բաժնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	կամ	կամ	CCONJ	_	_	10	cc	_	_
7	ի	ի	ADP	_	AdpType=Prep|ExtPos=ADV	8	case	_	_
8	մեր	մենք	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	10	obl	_	_
9	մէջն	մէջ|մէջն	ADP	_	AdpType=Post	7	fixed	_	_
10	զրուցեց	զրուցել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
11	։	։	PUNCT	_	_	5	punct	_	_
~~~

~~~ conllu
# visual-style 1 2 flat:redup color:blue
1	Բուռն	բուռ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	obl	_	_
2	բուռն	բուռն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	flat:redup	_	_
3	ձգէ	ձգել	VERB	_	Aspect=Prosp|Mood=Imp|Number=Sing|Person=2|Subcat=Tran|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	որ	որ	SCONJ	_	_	6	mark	_	_
6	ուտէ	ուտել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	SpaceAfter=No
7	։	։	PUNCT	_	_	3	punct	_	_
~~~

~~~ conllu
# visual-style 1 3 flat:redup color:blue
# visual-style 5 6 flat:redup color:blue
1	Մէջ	մէջ	ADP	_	AdpType=Post|ExtPos=ADV	8	advmod	_	_
2	ընդ	ընդ	ADP	_	AdpType=Prep	1	flat	_	_
3	մէջ	մէջ	ADP	_	AdpType=Post	1	flat:redup	_	_
4	և	և	NUM	_	NumForm=Digit|NumType=Card	5	cc	_	
5	ժամ	ժամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	conj	_	_
6	ժամ	ժամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	flat:redup	_	_
7	դեղին	դեղին	ADJ	_	Degree=Pos	8	xcomp	_	_
8	դառնայ	դառնալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
9	։	։	PUNCT	_	_	8	punct	_	_
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:46:06 CEST -->
