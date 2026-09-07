---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

The `det` relation holds between a nominal head and its [determiner](DET).
This relation is used for pronominal adjectival modifiers of noun phrases; such modifiers have the POS tag`DET`.
Non-pronominal adjectives are tagged [ADJ]() and the relation is labeled [amod]().

Note that possessive determiners like _իմ_/_im_ “my” are tagged `DET` and attached with the [det:poss]() relation.

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

Pronominal quantifiers are also tagged `DET` and attached to their nominal head with the `det` relation.

~~~ sdparse
Քանի ՞ հոգի է ֆուտբոլ խաղացել ։ \n How-many men played football ?
det(հոգի, Քանի)
det(men, How-many)
~~~

See [nummod]() for a broader discussion of the various situations with quantifiers.
<!-- Interlanguage links updated Út 30. června 2026, 11:00:01 CEST -->
