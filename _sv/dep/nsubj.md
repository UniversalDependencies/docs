---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

The dependency type `nsubj` marks nominal subjects of a clause. Subjects are direct dependents
of the main predicate of the clause, which may be a verb, noun or adjective.

~~~ sdparse
Pappa hjälper till med tvätten . \n Dad helps with the laundry .
nsubj(hjälper, Pappa)
~~~

~~~ sdparse
Pappa är sjuk . \n Dad is sick .
nsubj(sjuk, Pappa)
~~~

~~~ sdparse
Pappa är en bra kock . \n Dad is a good cook .
nsubj(kock, Pappa)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:32 CET 2020 -->
