---
layout: relation
title: 'expl'
shortdef: 'expletive'
---

This relation captures expletive or pleonastic nominals. These are nominals that appear in an argument position of a predicate but which do not themselves satisfy any of the semantic roles of the predicate. There is further discussion and examples on the universal dependency page ([u-dep/expl]()).

~~~ sdparse
C' est la seule manière de réussir \n It' s the only way to succeed
expl(manière, C')
~~~

In Romance languages, pronouns in prominal verbs which do not have a semantic role are marked as `expl` such as _se_ in _se douter_. In French the `expl` relation is also used for euphonic elements, such as _l'_ in e.g. _et que l'on retrouve_ or _t_ in _a-t-il reçu mon email?_

Note that currenlty expletives are not annotated consistently in the French treebank.
