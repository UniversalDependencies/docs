---
layout: relation
title: 'neg'
shortdef: 'negation modifier'
---

The label for negations such as ⲁⲛ, ⲛ, ⲧⲙ etc. which receive the POS tag NEG. The attachment is to the negated element, often the predicate or verb. Copula sentence negation is attached to the predicate, not to the copula. In circum-negation (ⲛ...ⲁⲛ), both elements are attached to the same element with the `neg` label.

~~~ sdparse
ⲟⲩ ϩⲱⲃ ⲉ ⲛⲁⲛⲟⲩ ϥ ⲁⲛ ⲡⲉ \n it is not a good deed

det(ϩⲱⲃ, ⲟⲩ)
acl(ϩⲱⲃ, ⲛⲁⲛⲟⲩ)
cop(ϩⲱⲃ, ⲡⲉ)
neg(ϩⲱⲃ, ⲁⲛ)
mark(ⲛⲁⲛⲟⲩ, ⲉ)
nsubj(ⲛⲁⲛⲟⲩ, ϥ)
~~~

<!-- Interlanguage links updated Út zář 29 20:31:55 CEST 2020 -->
