---
layout: relation
title:  'nsubj:cop'
shortdef : 'nominal copular subject'
udver: '2'
---

The dependency type `nsubj:cop` is used for the nominal subject
of a copular clause. The predicative is the head of the copular
clause, and also the governor of the `nsubj:cop` dependency.


~~~ sdparse
Muzejas om koume honust. \n There are three rooms in the museum .
nsubj:cop(muzejas, honust)
cop(muzejas, om)
nsubj:cop(museum,room)
cop(museum,are)
~~~
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:09 CET -->
