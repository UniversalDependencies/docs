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
det()
det()
~~~

~~~ sdparse
det()
det()
~~~

~~~ sdparse
det()
det()
~~~

Pronominal quantifiers are also tagged `DET` and their relation to their head is a `det` relation.

~~~ sdparse
det()
det()
~~~

See [nummod]() for a broader discussion of the various situations with quantifiers.
<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:45 CET -->
