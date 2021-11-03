---
layout: relation
title: 'obj:periph'
shortdef: 'preposed object'
udver: '2'
---

The default word order in Cantonese is SVO, that is, the subject normally precedes and the object
follows the verb. Other word orders, like OSV, are communicatively marked.
We use the `obj:periph` subtype of the [obj]() relation for objects that precede their verb.

~~~ sdparse
呢 首 你 咪 錄 咗 囖 。 \n this one you just record completed .
det(首, 呢)
obj:periph(錄, 首)
nsubj(錄, 你)
advmod(錄, 咪)
aux(錄, 咗)
discourse:sp(錄, 囖)
punct(錄, 。)
~~~

“You just recorded this song.”

<!-- Interlanguage links updated St lis 3 20:59:04 CET 2021 -->
