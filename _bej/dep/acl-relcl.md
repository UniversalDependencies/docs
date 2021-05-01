---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause modifier'
udver: '2'
---

The `acl:relcl` relation is used for relative clauses modifying nominal elements.
The relation points from the head of the nominal to the head of the relative clause.

~~~ sdparse
uː= dhaj kass =aː i- ktiːn -n =i kaːm =u =it / ʔajaːj tak =uːn hoːj am- mar~ri -ja eːn eː= nda /
en "Because it was a camel that everybody knew; one of our relatives (told) to these men"
acl:relcl(kaːm, ktiːn) ("camel", "knew")
nsubj(ktiːn, dhaj) ("know", "people")
=i "relativizer"
~~~
