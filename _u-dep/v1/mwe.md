---
layout: relation
title: 'mwe'
shortdef: 'multi-word expression'
---

The multi-word expression (modifier) relation is one of the three
relations ([compound](), `mwe`, [name]()) for compounding.
It is used for certain fixed grammaticized expressions that behave
like function words or short adverbials.

The scope of `mwe` annotation corresponds roughly to the *fixed
expressions* category of
[Sag et al.](http://lingo.stanford.edu/pubs/WP-2001-03.pdf), but
excludes any relations in scope of [name]() or [compound]().
Additionally, limited morphosyntactic variation may be allowed
for MWEs in exceptional cases.

~~~ sdparse
I like dogs as well as cats
mwe(as-4, well-5)
mwe(as-4, as-6)
~~~

~~~ sdparse
He cried because of you
mwe(because, of)
~~~

~~~ sdparse
Je préfère prendre un dessert plutôt qu' une entrée \n I prefer getting a dessert rather than an appetizer
mwe(plutôt, qu')
~~~

Multiword expressions are annotated in a flat, head-initial structure,
in which all words in the expression modify the first one using the
`mwe` label.
