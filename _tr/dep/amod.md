---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---

An adjectival modifier of a noun is
any adjectival phrase that serves to modify the meaning of the noun.

`amod` is not used for adjectival modifiers of nouns.
We use [det]() for determiners (tagged [tr-pos/DET]()),
and for so-called "bare noun compounds",
where the modifier is a noun, we use [nmod]().

~~~ sdparse
Ali kırmızı şarap sever . \n Ali likes red wine
amod(şarap, kırmızı)
~~~

~~~ sdparse
Kıza kırmızı bir gül verdi . \n He gave the girl a red rose .
amod(gül, kırmızı)
det(gül, bir)
~~~

<!-- Interlanguage links updated Út zář 29 20:23:18 CEST 2020 -->
