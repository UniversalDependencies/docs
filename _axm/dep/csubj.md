---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

A clausal subject is a clausal syntactic subject of a clause, i.e., the subject is itself a clause. The governor of this relation might
not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb. The dependent is
the main lexical verb or other predicate of the subject clause.

For the clausal subject of a passive verb or verb group the subtype [csubj:pass]() is used.

~~~ conllu
# visual-style 2 5 csubj color:blue
1	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	պատեհ	պատեհ	ADJ	_	Degree=Pos	0	root	_	_
3	այլ	այլ	DET	_	PronType=Ind	4	det	_	_
4	մարդ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	5	obj	_	_
5	սպաննել	սպաննել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	2	csubj	_	_
~~~

~~~ conllu
# visual-style 5 1 csubj color:blue
1	Զընդանելն	զընդանել	VERB	_	Case=Nom|Definite=Def|Polarity=Pos|Style=Var|Subcat=Tran|VerbForm=Inf|Voice=Act	5	csubj	_	_
2	ըստ	ըստ	ADP	_	AdpType=Prep	4	case	_	_
3	թագաւորին	թագաւոր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	4	nmod:poss	_	_
4	կամացն	կամ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	5	obl	_	_
5	լինի	լինիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
~~~


We also analyze the nominal predicates with clausal subjects formed by subordinating conjunction _որ_ similarly.

~~~ conllu
# visual-style 1 4 csubj color:blue
1	պատեհ	պատեհ	ADJ	_	Degree=Pos	0	root	_	_
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	որ	որ	SCONJ	_	_	4	mark	_	_
4	ձենել	ձենել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	1	csubj	_	_
5	տայ	տալ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Cau	4	aux:caus	_	SpaceAfter=No
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:43:50 CEST -->
