---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
---

A relative clause modifier of an noun is a relative clause modifying
the noun. The relation points from the noun that is modified to the
head of the relative clause. Relative clauses are finite.

~~~ sdparse
Jag såg den man som du älskar \n I saw the man you love
acl:relcl(man, älskar)
~~~

~~~ sdparse
Jag såg den bok som du köpte \n I saw the book you bought
acl:relcl(bok, köpte)
~~~
