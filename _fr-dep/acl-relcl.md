---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause modifier'
udver: '2'
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

FrenchSpoken also uses the `acl` relation, here is an example:

~~~ sdparse
j'ai eu envie d' être un intellectuel qui marque son temps \n I wanted to be an intellectual who marks his time 
acl:relcl(intellectuel, marque)
nsubj(marque, qui)
~~~

N.B.: For cleft sentences, FrenchSpoken uses the [acl:cleft]() subrelation.
