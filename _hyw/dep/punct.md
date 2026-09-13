---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---

This relation is used for any piece of punctuation in a clause.
See

~~~ sdparse
Տուն գնա ՛ ։ \n Go home !
punct(գնա, ՛)
punct(Go, !)
punct(գնա, ։)
~~~

Tokens with the relation `punct` always attach to content words (except in cases of ellipsis) and can never have dependents.
Since `punct` is not a normal dependency relation, the usual criteria for determining the head word do not apply.
Instead, we use the following principles:

1. A punctuation mark separating coordinated units is attached to the following conjunct.
2. A punctuation mark preceding or following a subordinated unit is attached to this unit.
3. Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity.
4. Paired punctuation marks (quotes and brackets) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

<!-- Interlanguage links updated Út 30. června 2026, 11:00:43 CEST -->
