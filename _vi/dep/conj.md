---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a coordinating conjunction, such as
"và", "hoặc", etc. The head of the relation is the first conjunct
and other conjuncts depend on it via the `conj` relation.

~~~ sdparse
Lan cao và xinh_xắn 。
nsubj(cao, Lan)
conj(cao, xinh_xắn)
cc(xinh_xắn, và)
punct(cao, 。)
~~~

~~~ sdparse
Họ đang bơi hoặc đá bóng 。
nsubj(bơi, Họ)
advmod(bơi, đang)
conj(bơi, đá)
cc(đá, hoặc)
obj(đá, bóng)
punct(bơi, 。)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:58 CEST 2021 -->
