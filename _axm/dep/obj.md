---
layout: relation
title: 'obj'
shortdef: 'direct object'
udver: '2'
---

The direct object of a verb is the noun that denotes the entity acted upon. In Middle Armenian the direct object most often is in the [accusative case](Case) that usually
has the proclitic particle _զ_/_z_, but also shares the form of nominative.

~~~ conllu
# visual-style 6 4 obj color:blue
1	Եթէ	եթէ	SCONJ	_	_	4	mark	_	_
2	իժ	իժ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	nmod	_	_
3	օձն	օձ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	_
4	խայթէ	խայթել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	_	_
5-6	զմարդն	_	_	_	_	_	_	_	SpaceAfter=No
5	զ	զ	ADP	_	AdpType=Prep	6	case	_	_
6	մարդն	մարդ	NOUN	_	Animacy=Hum|Case=Acc|Definite=Def|Number=Sing	4	obj	_	_
7	՝	՝	PUNCT	_	_	9	punct	_	_
8	նշանն	նշան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	9	nsubj	_	_
9	այս	այս	PRON	_	Deixis=Prox|PronType=Dem	0	root	_	_
10	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	_
~~~

~~~ conllu
# visual-style 6 5 obj color:blue
# visual-style 23 22 obj color:blue
1	Եւ	եւ	CCONJ	_	_	7	cc	_	_
2	թէ	թէ	SCONJ	_	_	5	mark	_	_
3	այլազգի	այլազգի	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	5	nsubj	_	_
4	քրիստոնէ	քրիստոնէ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	5	obj	_	_
5	սպաննէ	սպաննել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	SpaceAfter=No
6	՝	՝	PUNCT	_	_	7	punct	_	_
7	մեռնի	մեռնիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	18	punct	_	_
9	եւ	եւ	CCONJ	_	_	18	cc	_	_
10	թէ	թէ	SCONJ	_	_	14	mark	_	_
11-12	յոչ	_	_	_	_	_	_	_	_
11	յ	ի	ADP	_	AdpType=Prep	13	case	_	_
12	ոչ	ոչ	PART	_	Polarity=Neg	13	advmod:emph	_	_
13	կամայ	կամ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing|Style=Rare	14	obl	_	_
14	սպաննէ	սպաննել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	18	advcl	_	SpaceAfter=No
15	՝	՝	PUNCT	_	_	18	punct	_	_
16	երկու	երկու	NUM	_	NumForm=Word|NumType=Card	17	nummod	_	_
17	ձեռսն	ձեռք	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Plur	18	nsubj:pass	_	_
18	կտրվի	կտրել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Pass	7	parataxis	_	_
19	եւ	եւ	CCONJ	_	_	23	cc	_	_
20-21	զարեան	_	_	_	_	_	_	_	_
20	զ	զ	ADP	_	AdpType=Prep	22	case	_	_
21	արեան	արիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	22	nmod:poss	_	_
22	գինն	գին	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	23	obj	_	_
23	վճարէ	վճարել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	18	conj	_	SpaceAfter=No
24	.	.	PUNCT	_	_	34	punct	_	_
~~~

##
If there is just one object, it should likely be [obj]() unless it is morphosyntactically more similar to clear cases of [iobj](). This is an amended policy as described [on the changes page](https://universaldependencies.org/changes.html#sole-iobj).
If there are two or more objects, one of them should be `obj` and the others should be [iobj](). In such cases it is necessary to decide what is the most
directly affected object _(patient)._ When there is a [clausal complement](ccomp), then it is regarded as a “clausal direct object” and an object nominal will be an `iobj`.

There is more discussion of constructions with multiple objects on the page for [iobj]().
<!-- Interlanguage links updated Po 29. června 2026, 18:12:52 CEST -->
