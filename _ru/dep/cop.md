---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A copula is the relation between the nominal predicate and
the copular verb _<b>быть</b>_ “to be”. Note that in present tense copula is often omitted. 
The verbs _являться_ “to be”, _становиться_ “to become”, despite being counted among copular verbs by some authors,
is not analyzed as `cop`.

We normally take a copula as a dependent of its complement (the nominal predicate).
The nominal predicate is usually a [noun](ru-pos/NOUN), an [adjective](ru-pos/ADJ)
or a <a href="../feat/VerbForm.html#part-participle">participle</a>.

~~~ sdparse
Андрей был честным человеком . \n Andrew was an honest man .
cop(человеком, был)
cop(man, was)
~~~

The nominal predicate may also be expressed using a prepositional phrase.
Phrases expressing the state of the subject are clear predicates, e.g. _Я была не в форме_ “I was out of shape”.
Under the v2 guidelines, prepositional phrases expressing locations are also considered predicates, to increase parallelism across languages.

Thus the following sentences receive parallel analyses:

- _Я была редактором._ “I was an editor.”
- _Я была не в форме._ “I was out of shape”.
- _Я была на кухне._ “I was in the kitchen.”

In contrast, the following two sentences are no longer parallel:

- _Я была на кухне._ “I was in the kitchen.”
- _Я осталась на кухне._ “I stayed in the kitchen.”

~~~ sdparse
Я была не в форме . \n I was out of shape .
cop(форме, была)
cop(shape, was)
case(форме, в)
case(shape, of)
nsubj(форме, Я)
nsubj(shape, I)
~~~

~~~ sdparse
Я была на кухне . \n I was in the-kitchen .
cop(кухне, была)
cop(kitchen, was)
case(кухне, на)
case(kitchen, in)
nsubj(кухне, Я)
nsubj(kitchen, I)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:58 CEST 2021 -->
