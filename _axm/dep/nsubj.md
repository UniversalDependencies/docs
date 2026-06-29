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

~~~ conllu
# visual-style 2 1 nsubj color:blue
1	ստամոքն	ստամոք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	_
2	ցաւէ	ցաւել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
~~~

~~~ conllu
# visual-style 3 1 nsubj color:blue
1	այսոր	այս	PRON	_	Case=Dat|Deixis=Prox|Number=Sing|PronType=Dem	3	nsubj	_	_
2	ուժ	ուժ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	obj	_	_
3	չուննայ	ուննալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Neg|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
~~~

~~~ conllu
# visual-style 3 2 nsubj color:blue
1	իւր	իւր	DET	_	Case=Nom|Number=Sing|Person=3|PronType=Poss|Style=Arch	2	det:poss	_	_
2	թոյնքն	թոյն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	3	nsubj	_	_
3	տաք	տաք	ADJ	_	Degree=Pos	0	root	_	_
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	_
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:01:09 CEST -->
