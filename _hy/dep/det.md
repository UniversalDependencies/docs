---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

The relation determiner (`det`) holds between a nominal head and its [determiner](DET).
This relation is used for pronominal adjectival modifiers of noun phrases; the `det` modifier has the POS tag `DET` and vice versa.
Non-pronominal adjectives are tagged [ADJ]() and the relation is labeled [amod]().

Note, that possessive determiners like _իմ&nbsp;_ “my” is currently given the POS tag `DET` and the relation [det:poss]().

~~~ sdparse
Մի արահետ գտանք ։ \n A path we-found . 
det(արահետ, Մի)
det(path, A)
~~~

~~~ sdparse
Նա այդպիսի մարդ է ։ \n He is this-kind-of man .
det(մարդ, այդպիսի)
det(man, this-kind-of)
~~~

~~~ sdparse
Որ ՞ գիրքն ես նախընտրում ։ \n Which book do-you prefer ?
det(գիրքն, Որ)
det(book, Which)
~~~

Pronominal quantifiers are also tagged `DET` and their relation to their head is a `det` relation.

~~~ sdparse
Քանի ՞ հոգի է ֆուտբոլ խաղացել ։ \n How-many men played football ?
det(հոգի, Քանի)
det(men, How-many)
~~~

See [nummod]() for a broader discussion of the various situations with quantifiers.
<!-- Interlanguage links updated Út zář 29 20:23:28 CEST 2020 -->
