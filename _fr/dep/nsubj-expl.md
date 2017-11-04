---
layout: relation
title: 'nsubj:expl'
shortdef: 'expletive nominal subject'
udver: '2'
---

FrenchSpoken does not use the [expl]() relation. Instead there is subrelation used only for impersonal constructions:

~~~ sdparse
il est arrivé un malheur \n something bad happened
nsubj:expl(arrivé, il)
nsubj:quasi(arrivé, malheur)
~~~

~~~ sdparse
il faudra acheter un porte-bonheur \n we will have to buy a lucky charm
nsubj:expl(faudra, il)
csubj:quasi(faudra, acheter)
~~~

N.B.: The [nsubj:quasi]() relation is used for the other dependent of the predicate when it is a nominal and the [csubj:quasi]() when it is a clause.

`nsubj:expl` also enables us to differenciate between cleft and presentative constructions, in the case where they both use  _c'est_ (or _c'était_, _ce sont_ etc.):

In the following example, _c'_ has an obvious antecedent (_Pierre_) so the second sentence (_C'est un ami qui habite ici._) is a presentative construction (and not a cleft sentence).
In this case, we use the usual `nsubj` relation.

~~~ sdparse
Je te présente Pierre. C' est un ami qui habite ici. \n This is Pierre. He is a friend who lives here.
nsubj(ami, C')
acl:relcl(ami, habite)
~~~

In the second example, _c'_ doesn't have an obvious antecedent. The second sentence (_C'est un ami qui habite ici_) is a cleft sentence, that is why we use the `nsubj:expl`relation.

~~~ sdparse
Je connais cette maison. C' est un ami qui habite ici. \n I know this house. It's a friend who lives there.
nsubj:expl(ami, C')
acl:cleft(ami, habite)
~~~

N.B.: Note that two different subrelations are used for relative clauses ([acl:relcl]()) and for cleft sentences ([acl:cleft]()) in FrenchSpoken. Also see the [specific-syntax](http://universaldependencies.org/fr/overview/specific-syntax.html) page.

