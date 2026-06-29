---
layout: relation
title: 'det:poss'
shortdef: 'possessive determiner'
udver: '2'
---

All possessive determiners have the feature <code>Possessive</code> defined as <code>Yes</code>. Elements that can assume the role of <code>det:poss</code> are POS tagged as <code>PRON</code> so called possessive pronouns.  

~~~ sdparse
მოჴსენებად ცხორებაჲ მათი კეთილ არს. /n 'The remembrance of their life is good.'
det:poss(ცხორებაჲ, მათი)
nsubj(კეთილ, ცხორებაჲ)
cop(კეთილ, არს)
xcomp(კეთილ, მოჴსენებად)
~~~

**NB** Note that other pronouns are treated as `nmod`. For more on nominal modifiers, see the [nmod](_oge/dep/nmod) relation.
<!-- Interlanguage links updated Po 29. června 2026, 17:43:59 CEST -->
