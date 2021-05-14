---
layout: relation
title: 'aux:pot'
shortdef: 'potential auxiliary'
udver: '2'
---

Potential auxiliaries are annotated with the `aux:pot` relation.

In Komi-Zyrian, _вермыны_ and _позьны_ can be used as tense auxiliaries.

~~~ sdparse
... оз вермы лоны вунӧдӧма некодӧн ... \n ,
aux:neg(вунӧдӧма, оз)
aux:pot(вунӧдӧма, вермы)
aux:tense(вунӧдӧма, лоны)
obl(вунӧдӧма, некодӧн)
~~~

~~~ sdparse
Гымалігад пу улын сулавны оз позь . \n When there is thunder, you shouldn't stand under a tree.
advcl:tcl(сулавны, Гымалігад)
case(пу, улын)
obl:lmod(сулавны, пу)
aux:pot(сулавны, позь)
aux:neg(сулавны, оз)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:53 CEST 2021 -->
