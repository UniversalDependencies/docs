---
layout: relation
title: 'advmod:emph'
shortdef: 'emphasizing word, intensifier'
udver: '2'
---

The `advmod:emph` relation is used attach emphasizing particles to the words they emphasize.

~~~ sdparse
It visi kļūst par filozofiem . \n Everybody becomes a philosopher .
advmod:emph(visi, It)
nsubj(kļūst, visi)
case(filozofiem, par)
xcomp(kļūst, filozofiem)
punct(kļūst,.)
~~~
