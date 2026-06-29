---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal modifiers that depend on another noun or noun phrase and functionally corresponds to an attribute, or genitive complement. E.g.

~~~ sdparse
ცხორებაჲ კაცისა კეთილ არს. \n 'The life of a man is good.'.
nmod(ცხორებაჲ, კაცისა)
nsubj(კეთილ, ცხორებაჲ)
cop(კეთილ, არს)
~~~

**NB** Note that nominal modifiers used with postpositions and functioning as a non-core (oblique) argument or adjunct are covered by the [obl](_oge/dep/obl) relation. 
<!-- Interlanguage links updated Po 29. června 2026, 18:12:37 CEST -->
