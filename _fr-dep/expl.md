---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

This relation captures expletive or pleonastic nominals. These are nominals that appear in an argument position of a predicate but which do not themselves satisfy any of the semantic roles of the predicate. There is further discussion and examples on the universal dependency page ([u-dep/expl]()).

~~~ sdparse
C' est la seule manière de réussir \n It' s the only way to succeed
expl(manière, C')
~~~

In Romance languages, pronouns in prominal verbs which do not have a semantic role are marked as `expl` such as _se_ in _se douter_. In French the `expl` relation is also used for euphonic elements, such as _l'_ in e.g. _et que l'on retrouve_ or _t_ in _a-t-il reçu mon email?_

Note that currenlty expletives are not annotated consistently in the French treebank.

In FrenchSpoken we don't use the `expl`relation. The current definition sates that the `expl`relation should be used for "nominals that appear in an argument position of a predicate but which do not themselves satisfy any of the semantic roles of the predicate" (see above and the universal dependency page ([u-dep/expl]()). This definition seems to give more value to the semantic relations than to the syntactic relations.
That is why we will only use _expl_ as a subrelation for impersonal constructions. All other arguments (whether they satisfy a semantic role of the predicate or not) will be annotated with the usual syntactic dependency relations (nsubj, obj etc.). For further information see the following discussion: https://github.com/UniversalDependencies/docs/issues/461

In FrenchSpoken we will thus use the [nsubj:expl]() relation for impersonal constructions such as:

~~~ sdparse
il est arrivé un malheur \n something bad happened
nsubj:expl(arrivé, il)
nsubj:quasi(arrivé, malheur)
~~~

N.B.: we also introduce another type a subrelation [nsubj:quasi]() for the other dependent of the predicate that has a _nsubj:expl_

For pronominal verbs, we use the usual relations for core arguments:

~~~ sdparse
se douter \n to suspect
obj(douter, se)
~~~

~~~ sdparse
il se souvient \n he remembers
obj(souvient, se)
~~~

For euphonic elements, we consider them as allomorphs. For example in _a-t-elle bien dormi ?_ we consider that _-t-elle_ is an allomorph of the pronoun _elle_:

~~~ sdparse
a -t - elle bien dormi ? \n did she sleep well?
nsubj(a,-t)
goeswith(-t,-)
goeswith(-,elle)
~~~

N.B.: In some French treebanks, doubled subjects in interrogativ sentences are annotated with `expl` :

~~~ sdparse
Marie est -elle là ? \n Is Marie here?
nsubj(est, Marie)
expl(est, -elle)
~~~

In FrenchSpoken we will annotate the two subjects with `nsubj`:

~~~ sdparse
Marie est -elle là ? \n Is Marie here?
nsubj(est, Marie)
nsubj(est, -elle)
~~~
