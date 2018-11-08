---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

Note that currently expletives are not annotated consistently in the French treebank.

**UD_French-Spoken** does not use the `expl` relation.
The current definition sates that the `expl`relation should be used for "nominals that appear in an argument position of a predicate but which do not themselves satisfy any of the semantic roles of the predicate" (see the universal dependency page [u-dep/expl]()).
This definition seems to give more value to the semantic relations than to the syntactic relations.
That is why **UD_French-Spoken** only uses `expl` as a subrelation for impersonal constructions.
All other arguments (whether they satisfy a semantic role of the predicate or not) will be annotated with the usual syntactic dependency relations (nsubj, obj etc.).
For further information see [this discussion](https://github.com/UniversalDependencies/docs/issues/46).

**UD_French-Spoken** thus uses the [nsubj:expl]() relation for impersonal constructions such as:

~~~ sdparse
il est arrivé un malheur \n something bad happened
nsubj:expl(arrivé, il)
nsubj:quasi(arrivé, malheur)
~~~

For pronominal verbs, the usual relations for core arguments are used.

~~~ sdparse
se douter \n to suspect
obj(douter, se)
~~~

~~~ sdparse
il se souvient \n he remembers
obj(souvient, se)
~~~

N.B.: Here the pronoun is not an expletive but a part of a fixed verbal expression that is syntactically regular.


In _a-t-elle bien dormi ?_, we consider the euphony marker _t_ in _a-t-elle_ as part as of the pronoun _elle_. This gives us an allomorphic form _-t-elle_  of the pronoun _elle_.
Due to the tokenizing choices we made (see the [tokenization](http://universaldependencies.org/fr/tokenization.html) page), _a-t-elle_ is split in five tokens: _a_, _-_, _t_, _-_ and _elle_.
The first hyphen is the head (i.e. it receives the link `nsubj`) and the other tokens are linked with a [goeswith]():

~~~ sdparse
a - t - elle bien dormi ? \n did she sleep well?
nsubj(a,-)
goeswith(-,t)
goeswith(--2,--4)
goeswith(-,elle)
~~~

N.B.: This segmentating and tokenizing choice is arbitrary and other French treebanks could choose to do otherwise (for example they could consider _a-t-_ or _-t-elle_ as a token, or annotate the _-t-_ with `expl`).


In some corpora of the French treebank, doubled subjects in interrogativ sentences are annotated with `expl` :

~~~ sdparse
Marie est -elle là ? \n Is Marie here?
nsubj(est, Marie)
expl(est, -elle)
~~~

**UD_French-Spoken** annotates the two subjects with `nsubj` (and follows [these tokenizing rules](http://universaldependencies.org/fr/tokenization.html)):

~~~ sdparse
Marie est - elle là ? \n Is Marie here?
nsubj(est, Marie)
goeswith(-,elle)
nsubj(est, -)
~~~
