---
layout: relation
title:  'nsubj:cop'
shortdef : 'nominal copular subject'
udver: '2'
---

The dependency type `nsubj:cop` is used for the nominal subject of a copular clause. The predicative is the head of the copular
clause, and also the governor of the `nsubj:cop` dependency.

~~~ sdparse
Maja on suur. \n The house is big .
nsubj:cop(suur, Maja)
cop(suur, on)
nsubj:cop(big,house)
cop(big,is)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:13 CEST 2021 -->
