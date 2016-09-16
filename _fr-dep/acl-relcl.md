---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
---

The `acl:relcl` relation is used for relative clauses modifying
a nominal. The relation points from the head of the nominal to the
head of the relative clause.

~~~ sdparse
J'ai vu l' homme qui t' aime \n I saw the man who loves you
acl:relcl(homme, aime)
nsubj(aime, qui)
dobj(aime, t')
~~~
