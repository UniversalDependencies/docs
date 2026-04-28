---
layout: relation
title: 'advmod:cop'
shortdef: 'adverbial acting as copula'
udver: '2'
---

In Ruuli, the item *ti* (negative copular element in non-verbal predication) functions as negative copulas.

It is not analyzed using [cop](), as they contribute semantic content (negation) and thus do not behave as semantically empty copulas. Instead, it is treated as adverbial modifiers, and the `advmod:cop` relation is used to capture its copular-like function.

Syntactically, *ti* modifies the predicate and attaches to the non-verbal head.

~~~ sdparse
Omukali ti musomesya . \n The_woman NEG.COP teacher .
advmod:cop(musomesya, ti)
advmod:cop(teacher, NEG.COP)
nsubj(musomesya, Omukali)
nsubj(teacher, The_woman)
~~~
