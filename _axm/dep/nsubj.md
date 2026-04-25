---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject is a nominal phrase which is the syntactic subject of a clause; in Middle Armenian, the phrase is generally in the nominative [Case](). 
However, there are notable instances of subjects appearing in oblique cases. With the emergence of the passive suffix -v- (Voice=Pass) in Middle Armenian, which allows for the differentiation between active and passive forms of the verb, the use of the genitive / dative for subjects disappears. Nevertheless, occasional examples of subjects in the oblique cases (dative, accusative) can still be found.
See [nsubj:pass](), [csubj:pass](), and [nsubj:caus]() for when the subject is not the proto-agent argument due to valency-changing operations.)
(See [csubj]() for when the subject is clausal.
The governor of the `nsubj` relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement
of the copular verb, which can be an adjective or noun (including a noun marked by a preposition).

~~~ sdparse
ստամոքն ցաւէ \n stamok’n c’awē \n he stomach aches
nsubj(ցաւէ, ստամոքն)
nsubj(aches, stomach)
~~~

~~~ sdparse
# visual-style 5 3 nsubj color:blue
1	Եւ	եւ	CCONJ	_	_	11	cc	_	_
2	որ	որ	SCONJ	_	_	5	mark	_	_
3	այսոր	այս	PRON	_	Case=Dat|Deixis=Prox|Number=Sing|PronType=Dem	5	nsubj	_	_
4	ուժ	ուժ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	obj	_	_
5	չուննայ	ուննալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Neg|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	11	advcl	_	SpaceAfter=No
6	՝	՝	PUNCT	_	_	8	punct	_	_
7	որ	որ	SCONJ	_	_	8	mark	_	_
8	վճարէ	վճարել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	SpaceAfter=No
9	՝	՝	PUNCT	_	_	11	punct	_	_
10	նա	նա	SCONJ	_	_	11	mark	_	_
11	ծախեն	ծախել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
12-13	զինքն	_	_	_	_	_	_	_	_
12	զ	զ	ADP	_	AdpType=Prep	13	case	_	_
13	ինքն	ինք	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	11	obj	_	_
~~~

~~~ sdparse
իւր թոյնքն տաք է \n iwr t’oynk’n tak’ ē \n its venom is hot
nsubj(տաք, թոյնքն)
nsubj(hot, venom)
~~~
<!-- Interlanguage links updated St 12. listopadu 2025, 09:22:12 CET -->
