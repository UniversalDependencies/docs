---
layout: relation
title: 'flat:name'
shortdef: 'flat:name'
udver: '2'
---

The _flat:name_ relation is used for complex names without a clear head.
Non-first elements are always attached to the first element.

~~~ sdparse
Carl XVI Gustaf
flat:name(Carl-1, Gustaf-3)
flat:name(Carl-1, XVI-2)
~~~

For names with a clear syntactic modification structure, the dependencies should instead reflect the syntactic modification structure using regular syntactic relations, as in:

~~~ sdparse
Statens veterinärmedicinska anstalt \n The government institute for veterinary medicine
nmod:poss(anstalt, Statens)
amod(anstalt, veterinärmedicinska)
~~~

<!-- Interlanguage links updated St lis 3 20:58:55 CET 2021 -->
