---
layout: relation
title: 'amod'
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
case(Tien-1, vieressä-2)
nsubj(on-3, kivi-5)
amod(kivi-5, suuri-4)
punct(on-3, .-6)
~~~

~~~ conllu
1       See     see     PRON    P       Case=Nom|Number=Sing|PronType=Dem       4       nsubj:cop       _       _
2       oli     olema   VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 4       cop     _       _
3       suur    suur    ADJ     A       Case=Nom|Degree=Pos|Number=Sing 4       amod    _       _
4       muutus  muutus  NOUN    S       Case=Nom|Number=Sing    0       root    _       _
5       .       .       PUNCT   Z       _       4       punct   _       _
~~~

<!-- TODO: HUNGARIAN -->

<!-- fname:amod_adjective.pdf -->
~~~ sdparse
poikkeuksellisen suuri kivi \n exceptional(ly) large rock
amod(suuri-2, poikkeuksellisen-1)
amod(kivi-3, suuri-2)
~~~

<!-- TODO: ESTONIAN AND HUNGARIAN -->

## Open questions

* Should ordinal numerals also receive `amod` ?
<!-- Interlanguage links updated Út zář 29 20:23:18 CEST 2020 -->
