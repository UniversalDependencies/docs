---
layout: relation
title: 'det'
shortdef: 'determiner'
---

The relation determiner (`det`) holds between a nominal head and its
[determiner](u-pos/DET). Most commonly, a word of POS `DET` will have the relation `det` and vice versa. The known exceptions at present are:

* A possessive pronoun like [en] _my_ is given the POS tag `DET` but the relation [nmod](), so that it is parallel with other possessive constructions.

~~~ sdparse
The man is here
det(man, The)
~~~

~~~ sdparse
Which book do you prefer ?
det(book, Which)
~~~
