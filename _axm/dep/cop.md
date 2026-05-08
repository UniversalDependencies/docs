---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A copula is the relation between the nominal predicate and the copular verbs _<b>եմ</b>/_em_, “to be”. The verbs _դառնալ, թվալ, երևալ, ձևանալ, մնալ, հաշվել_ etc. “to become”, despite being counted among copular verbs by some authors (_վերադրառու բայեր, ստորոգելիական վերադիր_),
are not analyzed as `cop`.

We normally take a copula as a dependent of its complement (the nominal predicate).
The nominal predicate is usually a [noun](NOUN), a [pronoun](PRON), an [adjective](ADJ), an [adverb](ADV),
or a [numeral](NUM).

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
1	ես	ես	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	պզտիկ	պզտիկ	ADJ	_	Degree=Pos	0	root	_	_
3	էի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Imp|VerbForm=Fin	2	cop	_	_
~~~

~~~ conllu
# visual-style 2 3 cop color:blue
1	նեղերն	նեղ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	2	nsubj	_	_
2	այս	այս	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	0	root	_	_
3	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	cop	_	_
~~~

~~~ conllu
# visual-style 3 1 cop color:blue
1	լինի	լինիլ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	ցաւն	ցաւ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	_
3	շատ	շատ	ADV	_	_	0	root	_	_


The nominal predicate may also be expressed using a prepositional phrase, in which the nominal part is the head of the clause.

~~~ conllu
# visual-style 6 7 cop color:blue
1	իւր	իւր	DET	_	Case=Nom|Number=Sing|Person=3|PronType=Poss|Style=Arch	2	det:poss	_	_
2	բնակութիւնն	բնակութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	_
3	հանապազ	հանապազ	ADV	_	_	6	advmod	_	_
4	ի	ի	ADP	_	AdpType=Prep	6	case	_	_
5	կաղնի	կաղնի	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	6	nmod	_	_
6	ծառն	ծառ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	_
7	լինի	լինիլ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Tense=Pres|VerbForm=Fin	6	cop	_	SpaceAfter=No
~~~

Phrases expressing the state of the subject are clear predicates. Under the v2 guidelines, (prepositional) phrases expressing locations are also considered predicates, to increase parallelism across languages.

~~~ conllu
# visual-style 3 4 cop color:blue
1	ամէնն	ամէն	PRON	_	Case=Nom|PronType=Tot	3	nsubj	_	_
2	ի	ի	ADP	_	AdpType=Prep	3	case	_	_
3	տեղն	տեղ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	_
4	լինի	լինիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	3	cop	_	_
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:46:13 CEST -->
