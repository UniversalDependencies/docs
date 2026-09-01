---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A copula is the relation between the nominal predicate and the copular verbs _<b>եմ</b>/_em_, “to be”.
We normally take a copula as a dependent of its complement, i.e. the nominal predicate.
The nominal predicate is usually a [noun](NOUN), a [pronoun](PRON), an [adjective](ADJ), an [adverb](ADV), or a [numeral](NUM).

~~~ conllu
# visual-style 5 3 cop color:blue
1	Քո	քո	DET	_	Case=Nom|Number=Sing|Person=2|PronType=Poss	2	det:poss	_	_
2	շունչդ	շունչ	NOUN	_	Animacy=Nhum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	5	nsubj	_	_
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	խնկան	խունկ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	5	nmod:poss	_	_
5	փոշի	փոշ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	0	root	_	_
~~~

~~~ conllu
# visual-style 2 3 cop color:blue
1	նեղերն	նեղ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	2	nsubj	_	_
2	այս	այս	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	0	root	_	_
3	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	cop	_	_
~~~

~~~ conllu
# visual-style 2 3 cop color:blue
1	ես	ես	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	պզտիկ	պզտիկ	ADJ	_	Degree=Pos	0	root	_	_
3	էի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Imp|VerbForm=Fin	2	cop	_	_
~~~

~~~ conllu
# visual-style 2 3 cop color:blue
1	ան	ան	DET	_	Deixis=Remt|PronType=Dem	2	det	_	_
2	ատենն	ատեն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	obl	_	_
3	ժողվեն	ժողվել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	աղէկ	աղէկ	ADV	_	_	0	root	_	_
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	_

The nominal predicate may also be expressed using a prepositional phrase, in which the nominal part is the head of the clause.


<!-- Interlanguage links updated Út 30. června 2026, 10:59:55 CEST -->
