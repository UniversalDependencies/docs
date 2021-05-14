---
layout: relation
title: 'fixed'
shortdef: 'fixed multi-word expression'
udver: '2'
---

The multi-word expression (modifier) relation is one of the three
relations ([compound](), `fixed`, [flat]()) for compounding.
It is used for certain fixed grammaticized expressions that behave
like function words or short adverbials.

The scope of `fixed` annotation corresponds roughly to the *fixed
expressions* category of
[Sag et al.](http://lingo.stanford.edu/pubs/WP-2001-03.pdf), but
excludes any relations in scope of [flat]() or [compound]().
Additionally, limited morphosyntactic variation may be allowed
for MWEs in exceptional cases.

~~~ sdparse
fluido está para vítreo assim como viscoso está para translúcido
fixed(assim, como)
~~~

~~~ sdparse
o que é mais 48,31 por cento
fixed(o, que)
fixed(por, cento)
~~~

~~~ sdparse
todos os candidatos recebem os dois pontos
fixed(todos, os)
det(candidatos, todos)
~~~

Multiword expressions are annotated in a flat, head-initial structure,
in which all words in the expression modify the first one using the
`fixed` label.
<!-- Interlanguage links updated Pá kvě 14 11:09:05 CEST 2021 -->
