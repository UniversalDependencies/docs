---
layout: relation
title: 'det'
shortdef: 'determiner'
---

The relation determiner (`det`) holds between a nominal head and its
[determiner](cs-pos/DET).
This relation is used for pronominal adjectival modifiers of noun phrases; the `det` modifier has the POS tag [cs-pos/DET]() and vice versa.
Non-pronominal adjectives are tagged [cs-pos/ADJ]() and the relation is labeled [amod]().

Pronominal quantifiers are tagged `DET` but their relation to their head is a subtype of the `det` relation:
either [cs-dep/det:numgov]() or [cs-dep/det:nummod]().

~~~ sdparse
Тот человек уже здесь . \n The man already is here .
det(человек, Тот)
det(man, The)
~~~


~~~ sdparse
Это моя ошибка . \n This is my mistake .
det(ошибка, моя)
det(mistake, my)
~~~

~~~ sdparse
Какая книга тебе нравится больше всего ? \n Which book is to-you nice the-most ?
det(книга, Какая)
det(book, Which)
~~~
