---
layout: relation
title: 'advmod:cop'
shortdef: 'adverbial acting as copula'
udver: '2'
---

In Ruuli, the item *ti* (negative copular element in non-verbal predication) functions as a negative copula.

It is not analyzed using [cop](), as it contributes semantic content (negation) and thus does not behave as a semantically empty copula. Instead, it is treated as an adverbial modifier, and the `advmod:cop` relation is used to capture its copular-like function.

Syntactically, *ti* modifies the predicate and attaches to the non-verbal head.

~~~ sdparse
Omukali ti musomesya . \n The_woman NEG.COP teacher .
advmod:cop(musomesya, ti)
advmod:cop(teacher, NEG.COP)
nsubj(musomesya, Omukali)
nsubj(teacher, The_woman)
~~~
