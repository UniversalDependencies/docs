---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` stands for finite and non-finite clauses that modify a nominal.  The `acl` relation contrasts with the [advcl]() relation, which is used for adverbial clauses that modify a predicate. The head of the `acl` relation is the noun
that is modified, and the dependent is the head of the clause that
modifies the noun.

Note that in Middle Armenian relative clauses get assigned a specific relation [acl:relcl](), a subtype of `acl`.

~~~ conllu
# visual-style 2 8 acl color:blue
1	Եւ	եւ	CCONJ	_	_	2	cc	_	_
2	կայ	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
3	այլ	այլ	DET	_	PronType=Ind	4	det	_	_
4	օձ	օձ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	nsubj	_	_
5	եղջիւրաւոր	եղջիւրաւոր	ADJ	_	_	4	amod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	որ	որ	SCONJ	_	_	8	mark	_	_
8	անուանի	անուանիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	4	acl	_	_
9	պասդիլուս	պասդիլուս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	8	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_
~~~

~~~ conllu
# visual-style 6 5 goeswith color:blue
1	լինի	լինիլ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	ցաւն	ցաւ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	_
3	շատ	շատ	ADV	_	_	0	root	_	_
4	ի	ի	ADP	_	AdpType=Prep	6	case	_	_
5	խայթած	խայթել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	6	acl	_	_
6	տեղն	տեղ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	obl	_	_
~~~

This relation is not used for optional depictives.
See [xcomp]() for further discussion.

<!-- Interlanguage links updated St 6. května 2026, 20:44:37 CEST -->
