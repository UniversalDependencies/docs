---
layout: relation
title: 'obj'
shortdef: 'object'
udver: '2'
---

The object of a verb is the the second most core argument of a verb after the subject.
Most often it is a direct object is in the [accusative case](ru-feat/Case), a noun phrase that denotes the entity acted upon.

~~~ sdparse
Я купил машину . \n I have-bought car .
obj(купил, машину)
obj(have-bought, car)
~~~

Many Russian verbs license arguments in other cases (genitive, dative, instrumental)
or even with prepositions. As these arguments use an oblique coding, they are not core
arguments and thus do not qualify as objects in the UD terminology (despite being called
objects in the traditional grammar). They have to be attached as [obl]().

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:14 CET -->
