---
layout: relation
title:  'amod'
shortdef : 'adjectival modifier'
---

Nouns may take adjectival modifiers, which are marked with the
dependency type `amod`. It is also possible for an adjective to take
another adjective as a modifier. (These adjectival modifiers are
generally expressed with _-ly_ adverbs in English.)

<!-- fname:amod_noun.pdf -->
~~~ sdparse
Tien vieressä on suuri kivi . \n Road next_to is large rock .
nmod(on-3, Tien-1)
adpos(Tien-1, vieressä-2)
nsubj(on-3, kivi-5)
amod(kivi-5, suuri-4)
punct(on-3, .-6)
~~~

<!-- fname:amod_adjective.pdf -->
~~~ sdparse
poikkeuksellisen suuri kivi \n exceptional(ly) large rock
amod(suuri-2, poikkeuksellisen-1)
amod(kivi-3, suuri-2)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:42 CEST 2020 -->
