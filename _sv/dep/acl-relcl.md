---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
udver: '2'
---

The `acl:relcl` relation is used for relative clauses modifying
a nominal. The relation points from the head of the nominal to the
head of the relative clause. Relative clauses are always finite in Swedish
and the relative pronoun can be omitted when it does not have the subject function.

~~~ sdparse
Jag såg den man som älskar dig \n I saw the man who loves you
acl:relcl(man-4, älskar)
nsubj(älskar, som)
obj(älskar, dig)
~~~
~~~ sdparse
Jag såg den man som du älskar \n I saw the man who you love
acl:relcl(man-4, älskar)
nsubj(älskar, du)
obj(älskar, som)
~~~

~~~ sdparse
Jag såg den man du älskar \n I saw the man you love
acl:relcl(man-4, älskar)
nsubj(älskar, du)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:45 CEST 2021 -->
