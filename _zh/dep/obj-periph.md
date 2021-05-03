---
layout: relation
title: 'obj:periph'
shortdef: 'preposed object'
udver: '2'
---

The default word order in Chinese is SVO, that is, the subject normally precedes and the object
follows the verb. Other word orders, like OSV, are communicatively marked (Tremblay, 2005).
We use the `obj:periph` subtype of the [obj]() relation for objects that precede their verb.

~~~ sdparse
這 首 你 剛剛 才 錄 了 。 \n this one you just only record completed .
det(首, 這)
obj:periph(錄, 首)
nsubj(錄, 你)
advmod(錄, 剛剛)
advmod(錄, 才)
aux(錄, 了)
punct(錄, 。)
~~~

“You just recorded this song.”

## References

* Tremblay, A. (2005). Word Order in Mandarin Chinese and Grammatical Relations.
  In: Proceedings of the 19th Pacific Asia Conference on Language, Information and Computation: 333–340.

<!-- Interlanguage links updated Čt lis 12 09:43:35 CET 2020 -->
