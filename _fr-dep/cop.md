---
layout: relation
title: 'cop'
shortdef: 'copula'
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

In the current French treebank, the following verbs are treated as copular ones: _être_, _devenir_, _rester_, _demeurer_, as well as in some constructions _appeler_, _intituler_, _nommer_, _réputer_, _élir_

