---
layout: relation
title: 'advmod:cop'
shortdef: 'adverbial acting as copula'
udver: '2'
---

In Ruuli, the items *ti* (negative copular element in non-verbal predication) and *ndoo* (negative existential) function as negative copulas.

They are not analyzed using [cop](), as they contribute semantic content (negation) and thus do not behave as semantically empty copulas. Instead, they are treated as adverbial modifiers, and the `advmod:cop` relation is used to capture their copular-like function.

Syntactically, *ti* modifies the predicate and attaches to the non-verbal head, while *ndoo* serves as the head of the clause, as an overt form used specifically in existential constructions.

~~~ sdparse
Omukali ti musomesya . \n The_woman NEG.COP teacher .
advmod:cop(musomesya, ti)
advmod:cop(teacher, NEG.COP)
nsubj(musomesya, Omukali)
nsubj(teacher, The_woman)
~~~

~~~ sdparse
Naye ndoo wo omugaso . \n But NEG.EX there importance .
cc(ndoo, Naye)
cc(NEG.EX, But)
advmod:loc(ndoo, wo)
advmod:loc(NEG.EX, there)
nsubj(ndoo, omugaso)
nsubj(NEG.EX, importance)
~~~