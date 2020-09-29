---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause modifier'
udver: '2'
---

The `acl:relcl` relation is used in all French corpora for relative clauses modifying
a nominal. The relation points from the head of the nominal to the
head of the relative clause.

~~~ sdparse
J'ai vu l' homme qui t' aime \n I saw the man who loves you
acl:relcl(homme, aime)
nsubj(aime, qui)
obj(aime, t')
~~~

Some examples from **UD_French-Spoken**:

~~~ sdparse
j'ai eu envie d' être un intellectuel qui marque son temps \n I wanted to be an intellectual who marks his time
acl:relcl(intellectuel, marque)
nsubj(marque, qui)
~~~

~~~ sdparse
est-ce que vous avez des enseignants dont vous vous souvenez particulièrement \n do you have teachers of whom you have a strong memory
acl:relcl(enseignants,souvenez)
obl:comp(souvenez,dont)
~~~

N.B.: For cleft sentences, the [advcl:cleft]() subrelation is used in most French corpora.
<!-- Interlanguage links updated Út zář 29 20:23:15 CEST 2020 -->
