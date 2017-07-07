---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

Note that currenlty expletives are not annotated consistently in the French treebank.

In FrenchSpoken we don't use the `expl`relation. The current definition sates that the `expl`relation should be used for "nominals that appear in an argument position of a predicate but which do not themselves satisfy any of the semantic roles of the predicate" (see the universal dependency page ([u-dep/expl]()). This definition seems to give more value to the semantic relations than to the syntactic relations.
That is why we will only use _expl_ as a subrelation for impersonal constructions. All other arguments (whether they satisfy a semantic role of the predicate or not) will be annotated with the usual syntactic dependency relations (nsubj, obj etc.). For further information see the following discussion: https://github.com/UniversalDependencies/docs/issues/461

In FrenchSpoken we will thus use the [nsubj:expl]() relation for impersonal constructions such as:

~~~ sdparse
il est arrivé un malheur \n something bad happened
nsubj:expl(arrivé, il)
nsubj:quasi(arrivé, malheur)
~~~

N.B.: we also introduce another type a subrelation [nsubj:quasi]() and [csubj:quasi]() for the other dependent of the predicate that has a _nsubj:expl_

For pronominal verbs, we use the usual relations for core arguments. 

~~~ sdparse
se douter \n to suspect
obj(douter, se)
~~~

~~~ sdparse
il se souvient \n he remembers
obj(souvient, se)
~~~

N.B.: Here the pronoun is not an expletive but a part of a fixed verbal expression that is syntactically regular.


For euphonic elements, we consider them as allomorphs. For example in _a-t-elle bien dormi ?_ we consider that _-t-elle_ is an allomorph of the pronoun _elle_.
We decided to do a strictly formal tokenization where the hyphens are considered as tokens. This means that, for example, in _a-t-elle_ we have 5 tokens _a_, _-_, _t_, _-_ and _elle_.
The first hyphen is the head (i.e. he receives the link `nsubj`) and the other tokens are linked with a goeswith:

~~~ sdparse
a - t - elle bien dormi ? \n did she sleep well?
nsubj(a,-)
goeswith(-,t)
goeswith(-,-)
goeswith(-,elle)
~~~

As for the POS, we suggest tagging the hyphens with PUNCT and the _t_ with PART (and of course _elle_ with PRON).
This way of tokanizing and segmentating seems easier for the parsing and doesn't require an external source since we keep everything separated.	We also don't have to wonder where to attach the hyphens as they constitute separated tokens.
Thus it becomes easier to automatically analyze together cases like _là-dessus_ and _là-bas_ where the hyphen belongs to the left part (_là-_ and _dessus_ or _bas_) and cases like _est-elle_ where we can choose to attach the hyphen to the right part (_-elle_).

N.B.: The choice of segmentation and tokenization we made are arbitrary and other French treebanks could choose to do otherwise (for example they could consider _a-t-_ or _-t-elle_ as a token, or annotate the _-t-_ with `expl`).


In some French treebanks, doubled subjects in interrogativ sentences are annotated with `expl` :

~~~ sdparse
Marie est -elle là ? \n Is Marie here?
nsubj(est, Marie)
expl(est, -elle)
~~~

In FrenchSpoken we will annotate the two subjects with `nsubj` (and we use the tokenization rules from above):

~~~ sdparse
Marie est - elle là ? \n Is Marie here?
nsubj(est, Marie)
goeswith(-,elle)
nsubj(est, -)
~~~
