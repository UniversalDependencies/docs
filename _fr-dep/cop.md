---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A copula is the relation between the complement of a copular verb and
the copular verb. Copular heads are avoided when possible. For more on the `cop` relation, see the universal dependency description ([u-dep/cop]())

~~~ sdparse
Bill est un homme honnête \n Bill is an honest man
cop(homme, est)
nsubj(homme, Bill)
amod(homme, honnête)
det(homme, un)
~~~

In the some corpora of the current French treebank, the following verbs are treated as copular ones: _être_, _devenir_, _rester_, _demeurer_, as well as in some constructions _appeler_, _intituler_, _nommer_, _réputer_, _élir_

The `cop` relation can be found in FrenchSpoken:

~~~ sdparse
c' est une jeune fille pauvre \n it's a poor girl
cop(fill,est)
nsubj(fille,c')
~~~ 

However note that the not all corpora of the French treebank treat the same verbs as copulas. For example, FrenchSpoken annotates _devenir_ like a regular verb.

~~~ sdparse
il devient le sherpa du président \n he becomes the president's sherpa
nsubj(devient,il)
obj(devient,sherpa)
~~~
