---
layout: relation
title: 'nsubj:expl'
shortdef: 'expletive nominal subject'
udver: '2'
---

In FrenchSpoken we decided not to use the [expl]() relation. Instead we only use a subrelation for impersonal constructions:

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

N.B.: we decided to use the [nsubj:quasi]() relation to annotate the other dependent of the predicate when it is a nominal and the [csubj:quasi]() when it is a clause.


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

N.B.: Note that we use two different subrelations for relative clauses ([acl:relcl]()) and for cleft sentences ([acl:cleft]()).
