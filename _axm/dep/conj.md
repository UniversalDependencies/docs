---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a coordinating conjunction, such as _և_/_ev_, _ու_/_ow_ (and), _կամ_/_kam_ (or), or a comma or other punctuation.
We treat coordination asymmetrically. The head of the relation is the first conjunct and all the other conjuncts depend on it via the `conj` relation.

~~~ conllu
# visual-style 2 5 conj color:blue
1	Առ	առնել	VERB	_	Aspect=Prosp|Mood=Imp|Number=Sing|Person=2|Subcat=Tran|VerbForm=Fin|Voice=Act	0	root	_	_
2	գխտոր	գխտոր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	obj	_	_
3	եւ	եւ	CCONJ	_	_	5	cc	_	_
4	նռան	նուռ|նուռն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	5	nmod:poss	_	_
5	ծաղիկ	ծաղիկ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	conj	_	_
~~~

~~~ conllu
# visual-style 15 17 conj color:blue
# visual-style 15 19 conj color:blue
# visual-style 15 21 conj color:blue
1	Եւ	եւ	CCONJ	_	_	4	cc	_	_
2-3	զդստերսն	_	_	_	_	_	_	_	_
2	զ	զ	ADP	_	AdpType=Prep	3	case	_	_
3	դստերսն		դուստր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	4	obl	_	_
4	իրաւունք	իրաւունք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	_
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	_
6	՝	՝	PUNCT	_	_	11	punct	_	_
7	որ	որ	SCONJ	_	_	11	mark	_	_
8	ի	ի	ADP	_	AdpType=Prep	10	case	_	_
9	նահապետութեան	նահապետութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	10	nmod:poss	_	_
10	տուն	տուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	11	obl	_	_
11	կարգեն	կարգել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj	_	SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	_	_
13	որ	որ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Rel	15	nsubj	_	_
14	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	15	cop	_	_
15	թագաւոր	թագաւոր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	10	acl:relcl	_	_
16	կամ	կամ	CCONJ	_	_	17	cc	_	_
17	բրինձ	բրինձ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	15	conj	_	_
18	կամ	կամ	CCONJ	_	_	19	cc	_	_
19	մարգիզ	մարգիզ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	15	conj	_	_
20	կամ	կամ	CCONJ	_	_	20	cc	_	_
21	այսպիսիքն	այսպիսի	PRON	_	Case=Nom|Definite=Def|Deixis=Prox|PronType=Dem	15	conj	_	SpaceAfter=No
22	։	։	PUNCT	_	_	4	punct	_	_
~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ conllu
# visual-style 3 7 conj color:blue
# visual-style 3 10 conj color:blue
# visual-style 1 14 conj color:blue
1	ծախեն	ծախել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2-3	զինքն	_	_	_	_	_	_	_	_
2	զ	զ	ADP	_	AdpType=Prep	3	case	_	_
3	ինքն	ինք	PRON	_	Case=Acc|Deixis[psor]=Remt|Number=Sing|Person=3|PronType=Prs	1	obj	_	_
4	ու	ու	CCONJ	_	_	7	cc	_	_
5-6	զիր	_	_	_	_	_	_	_	_
5	զ	զ	ADP	_	AdpType=Prep	7	case	_	_
6	իր	իր	DET	_	Case=Acc|Number=Sing|Person=3|PronType=Poss	7	det:poss	_	_
7	տունն	տուն	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	3	conj	_	_
8	ու	ու	CCONJ	_	_	10	cc	_	_
9	զինչ	զինչ	PRON	_	PronType=Ind	10	obj	_	_
10	ուննայ	ուննալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
11	ու	ու	CCONJ	_	_	14	cc	_	_
12	ի	ի	ADP	_	AdpType=Prep	13	case	_	_
13	գինն	գին	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	14	obl	_	_
14	տան	տալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	SpaceAfter=No
~~~

See [universal/conj](u-dep/conj) for more details on various coordination-related issues.
<!-- Interlanguage links updated Po 29. června 2026, 18:12:05 CEST -->
