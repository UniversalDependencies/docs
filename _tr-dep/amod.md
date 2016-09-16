---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
---

An adjectival modifier of a noun is any adjectival phrase that serves to modify the meaning of the noun.

`amod` is not used for all modifiers of nouns.
We use [det]() for determiners (tagged tr[-pos/DET]()),
and for so-called "bare noun compounds" we use [compound]().

~~~ sdparse
Ali kırmızı şarap sever . \n Ali likes red wine
amod(şarap, kırmızı)
~~~

~~~ sdparse
Kıza kırmızı bir gül verdi . \n He gave the girl a red rose .
amod(gül, kırmızı)
det(gül, bir)
~~~

~~~ sdparse
Büyük tahta kapının önünde bekliyordu . \n He\/she was waiting in front of the big wooden door
amod(kapının, büyük)
compound(kapının, tahta)
~~~
