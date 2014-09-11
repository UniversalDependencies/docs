---
layout: base
title: 'mwe'
shortdef: 'multi-word expression'
---

## mwe: multi-word expression


The multi-word expression (modifier) relation is one of the three relations for compounding. 
It used for certain fixed grammaticized expressions with function words that behave like a single function word.

~~~ sdparse
I like dogs as well as cats
mwe(well-5, as-4)
mwe(well-5, as-6)
~~~

~~~ sdparse
He cried because of you
mwe(of, because)
~~~

~~~ sdparse
Je préfère prendre un dessert plutôt qu' une entrée. \n I prefer getting a dessert rather than an appetizer
mwe(plutôt, qu')
~~~

We are still developing conventions for headship in an mwe. At the moment, practice is a combination of choosing the main word that would be the head on an attempted analytical analysis, such as for <i>as well as</i> and simply choosing the leftmost word as head.
