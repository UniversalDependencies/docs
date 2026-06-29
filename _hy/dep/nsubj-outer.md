---
layout: relation
title: 'nsubj:outer'
shortdef: 'outer clause nominal subject'
udver: '2'
---

This relation specifies a nominal subject of a copular clause whose predicate is itself a clause, 
to signal that it is not the subject of the nested clause.
See discussion of [Predicate Clauses](../overview/complex-syntax.html#predicate-clauses).

~~~ conllu
# visual-style 10 1 nsubj:outer color:blue
# visual-style 10 7 nsubj color:blue
1	Այն	այն	PRON	_	Deixis=Remt|PronType=Dem	10	nsubj:outer	_	Translit=Ayn|LTranslit=ayn|SpaceAfter=No
2	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
3	ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Rel	7	nsubj	_	Translit=inč|LTranslit=inč
4	ոգու	ոգի	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	7	obl	_	Translit=ogow|LTranslit=ogi
5	հետ	հետ	ADP	_	AdpType=Post	4	case	_	Translit=het|LTranslit=het
6	կապ	կապ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	compound:lvc	_	Translit=kap|LTranslit=kap
7	ունի	ունեմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	Translit=owni|LTranslit=ownem|SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
9	նա	նա	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	Translit=na|LTranslit=na
10	չունի	ունեմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=čowni|LTranslit=ownem
11	սկիզբ	սկիզբ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	10	obj	_	Translit=skizb|LTranslit=skizb
12	ու	ու	CCONJ	_	_	13	cc	_	Translit=ow|LTranslit=ow
13	վերջ	վերջ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	11	conj	_	Translit=verǰ|LTranslit=verǰ|SpaceAfter=No
14	։	։	PUNCT	_	_	10	punct	_	Translit=.|LTranslit=.

~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:01:12 CEST -->
