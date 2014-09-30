---
layout: base
title: 'mwe'
shortdef: 'multi-word expression'
---

## mwe: multi-word expression

The multi-word expression (modifier) relation is one of the three relations ([compound](), *mwe*, [name]()) for compounding. 
It used for certain fixed grammaticized expressions with function words that behave like a single function word.

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

Multiword expressions are annotated in a flat, head-initial structure, in which all words in the expression modify the first one using the *mwe* label.
