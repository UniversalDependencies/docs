---
layout: relation
title: 'orphan'
shortdef: 'orphan in ellipsis'
udver: '2'
---

The `orphan` relation is used to provide a satisfactory treatment of certain instances of
[ellipsis](http://universaldependencies.org/u/overview/specific-syntax.html#ellipsis) where simple promotion would result in unnatural and misleading dependency relation (in the case of gapping and stripping, where a predicational or verbal
head gets elided).

~~~ sdparse
1	իւր	իւր	DET	_	Case=Nom|Number=Sing|Person=3|PronType=Poss|Style=Arch	2	det:poss	_	_
2	բնակութիւնն	բնակութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	_
3	հանապազ	հանապազ	ADV	_	_	6	advmod	_	_
4	ի	ի	ADP	_	AdpType=Prep	6	case	_	_
5	կաղնի	կաղնի	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	6	nmod	_	_
6	ծառն	ծառ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	_
7	լինի	լինիլ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Tense=Pres|VerbForm=Fin	6	cop	_	SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	եւ	եւ	CCONJ	_	_	11	cc	_	_
10	իւր	իւր	DET	_	Case=Nom|Number=Sing|Person=3|PronType=Poss|Style=Arch	11	det:poss	_	_
11	հոտն	հոտ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	conj	_	SpaceAfter=No
12	՝	՝	PUNCT	_	_	14	punct	_	_
13	հոտած	հոտել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	14	acl	_	_
14	դժնիկ	դժնիկ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	11	orphan	_	_
~~~

In this example, the subject _հոտն_ “odor” is promoted to the head position in the second conjunct. Attaching the predicate (without copula) _դժնիկ_ “buckthorn” to the
subject is necessary to preserve the integrity of the clause, but using the standard relation [nsubj]() would be misleading because _դժնիկ_ “buckthorn” can't be the 
predicate of _հոտն_ “odor” without the copula. Therefore, the `orphan` relation is used to indicate that this is a non-standard attachment. By contrast, the coordinating 
conjunction _եւ_ “and” performs essentially the same function as in the non-elliptical case and therefore retains its normal relation [cc]().
<!-- Interlanguage links updated St 6. května 2026, 20:48:23 CEST -->
