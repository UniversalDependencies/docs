---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

The relation determiner (`det`) holds between a nominal head and its [determiner](DET).
This relation is used for pronominal adjectival modifiers of noun phrases; the `det` modifier has the POS tag `DET` and vice versa.
Non-pronominal adjectives are tagged [ADJ]() and the relation is labeled [amod]().

Note, that possessive determiners like _իր_ “his” is currently given the POS tag `DET` and the relation [det:poss]().

~~~ sdparse
իր տունն \n his house
det(տունն, իր)
det(house, իր)
~~~

~~~ sdparse
այլ դատաւորքն \n the other judges
det(դատաւորքն, այլ)
det(judges, other)
~~~

See [nummod]() for a broader discussion of the various situations with quantifiers.
<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:45 CET -->
