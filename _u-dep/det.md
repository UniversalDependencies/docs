---
layout: relation
title: 'det'
shortdef: 'determiner'
---

The relation determiner (`det`) holds between a nominal head and its
[determiner](u-pos/DET). Most commonly, a word of POS `DET` will have the relation `det` and vice versa. The known exceptions at present are:

* In some of the datasets, a possessive determiner like [en] _my_ is currently given the POS tag `DET` but the relation [nmod](), so that it is parallel with other possessive constructions. This is not yet completely parallel across languages; in some languages, it is much more clear than in English how possessive determiners relate to adjectives, and the `nmod` relation is out of question.

~~~ sdparse
The man is here
det(man, The)
~~~

~~~ sdparse
Which book do you prefer ?
det(book, Which)
~~~
