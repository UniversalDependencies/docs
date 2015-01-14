---
layout: relation
title:  'case'
shortdef : 'case marking'
---

The `case` relation is used for any preposition in English. Prepositions are treated as dependents of the noun they attach to or introduce in an "extended nominal projection". Thus, contrary to SD, UD abandons treating a preposition as a mediator between a modified word and its object. The `case` relation aims at providing a uniform analysis of prepositions and case in morphologically rich languages. In English, subordinating conjunctions introducing clauses are often in the form of prepositions. However, they are given a different dependency: The relation [mark]() is used for markers in an "extended clausal projection".

The `case` relation is also used for the possessive clitic _'s_ in English, which we separate from what it modifies, because it acts as a phrasal clitic.

~~~ sdparse
I saw a cat in a hat
case(hat, in)
~~~

~~~ sdparse
I saw a cat with a telescope
case(telescope, with)
~~~

~~~ sdparse
He is responsible for meals
case(meals, for)
~~~

~~~ sdparse
The school 's grounds
case(school, 's)
~~~

~~~ sdparse
The head of school 's speech
case(head, 's)
case(school, of)
nmod(speech, head)
~~~
