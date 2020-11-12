---
layout: relation
title:  'vocative'
shortdef : 'vocative modifier'
---

The dependency type `vocative` is used for *vocatives*, that is,
expressions where someone is being addressed. The governor of the
dependency is the main predicate of the clause where the addressing
occurs.

<!-- fname:voc.pdf -->
~~~ sdparse
Pekka , tulisitko tänne ? \n Pekka , would_you_come here ?
vocative(tulisitko-3, Pekka-1)
punct(Pekka-1, ,-2)
advmod(tulisitko-3, tänne-4)
punct(tulisitko-3, ?-5)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:39 CET 2020 -->
