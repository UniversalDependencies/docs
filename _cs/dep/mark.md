---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

A marker is the subordinating conjunction introducing a finite clause subordinate to another clause.
The mark is a dependent of the subordinate clause head.

~~~ sdparse
Nevěděl jsem , že umíš německy . \n Not-know I-did , that you-can-speak German .
mark(umíš, že)
mark(you-can-speak, that)
~~~

~~~ sdparse
Zboží odešleme , jakmile peníze dorazí na náš účet . \n Goods we-will-dispatch , as-soon-as money arrive at our account .
mark(dorazí, jakmile)
mark(arrive, as-soon-as)
~~~

Note that the subordinating conjunction should not be confused with relative pronouns and adverbs.
These fill a valency slot in the frame of the subordinate predicate,
and are labeled according to their role in the frame, they are not `mark`:

~~~ sdparse
Rád bych věděl , kdy peníze dorazí na náš účet . \n Like-to I-would know , when money arrive at our account .
advmod(dorazí, kdy)
advmod(arrive, when)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:20 CEST 2020 -->
