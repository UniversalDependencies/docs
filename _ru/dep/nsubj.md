---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject is a nominal which is the syntactic subject of a clause. It is a first argument of the predicate with highest syntactic status. That is, it is in the position that passes typical grammatical test for subjecthood, and this argument is the more agentive, the do-er, or the proto-agent of the clause. In a typical case, the subject relation connects a personal verb in the active voice with a nominal dependent (proto-agent of a clause) in the Nominative [Case]().

~~~ sdparse
Ленинградскую симфонию написал Шостакович . \n Leningrad Symphony wrote Shostakovich .
nsubj(написал, Шостакович)
nsubj(wrote, Shostakovich)
~~~

In Russian, the dependent can also be expressed by the nominal in the Genitive case, includings contexts under negation or quantifier constructions:

~~~ sdparse
Денег хватает . \n (We) have (enough) money  .
nsubj(хватает, Денег)
nsubj(have, money)
~~~

~~~ sdparse
Мест почти не осталось . \n (There are) almost no places left  .
nsubj(осталось, Мест)
nsubj(left, places)
~~~

~~~ sdparse
Все больше людей берут кредиты . \n More and more people are taking loans .
nsubj(берут, людей)
nsubj(taking, people)
~~~

In rare cases, the nominal subject is marked by the Vocative case or is a head the prepositional distributive or approximative construction: 

~~~ sdparse
Спаси вас Господи ! \n God save you !
nsubj(Спаси, Господи)
nsubj(save, God)
~~~

~~~ sdparse
Каждому полагается по бублику . \n For each person, a bagel is-supposed-to-be-given .
nsubj(полагается, бублику)
nsubj(is-supposed-to-be-given, bagel)
~~~

~~~ sdparse
В деревне проживает около 70 семей . \n About 70 families live in the village .
nsubj(проживает, семей)
nsubj(live, families)
~~~

The governor of the `nsubj` relation might not always be a verb, see the following examples with praedicatives, adjectives, numerals, nouns (including a noun marked by a preposition) as a head of the copula construction. [Copula](cop) can be expressed or omitted in Russian in such constructions. 

~~~ sdparse
Машины нет . \n There-is-no car .
nsubj(нет, Машины)
nsubj(There-is-no, car)
~~~

~~~ sdparse
Вы вправе уйти . \n You have-the-right to leave .
nsubj(вправе, Вы)
nsubj(have-the-right, You)
~~~

~~~ sdparse
Закон должен работать . \n The law must work .
nsubj(должен, Закон)
nsubj(must, law)
~~~

~~~ sdparse
Как она хороша ! \n How beautiful she is !
nsubj(хороша, она)
nsubj(beautiful, she)
~~~

~~~ sdparse
Мальчиков трое . \n There-are three boys .
nsubj(трое, Мальчиков)
nsubj(three, boys)
~~~

~~~ sdparse
Магазин был в двух шагах от дома . \n The store was two steps from our house .
nsubj(шагах, Магазин)
nsubj(steps, store)
~~~

(See [csubj]() for cases when the subject is clausal. See [nsubj:pass]() and [csubj:pass]() for when the subject is not the proto-agent argument due to valence changing operations. If the subject is a copular clause whose predicate is itself a clause, [nsubj:outer]() is used.)

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:08 CET -->
