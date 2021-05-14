---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause modifier'
udver: '2'
---

A relative clause modifier of an noun is a relative clause modifying
the noun. The relation points from the noun that is modified to the
head of the relative clause. Relative clauses are finite.

~~~ sdparse
Viděl jsem muže , kterého miluješ . \n seen I-have man , whom you-love .
acl:relcl(muže, miluješ)
acl:relcl(man, you-love)
~~~

~~~ sdparse
Viděl jsem knihu , kterou jsi koupila . \n seen I-have book , which you-have bought .
acl:relcl(knihu, koupila)
acl:relcl(book, bought)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:45 CEST 2021 -->
