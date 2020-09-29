---
layout: relation
title: 'fixed'
redirect_from: "tr/dep/mwe.html"
shortdef: 'multi-word expression'
udver: '2'
---

The multi-word expression (modifier) relation is one of the three relations ([compound](), `fixed`, [flat]()) for compounding.
It is used for certain fixed grammaticalized expressions that behave like function words or short adverbials.

We use ``fixed`` for some non-productive MWEs such as _eski pusku_, _paldır küldür_.
For productive reduplication, including m-reduplication [compound:redup](compound-redup) should be used.

~~~ sdparse
Ufak tefek bir çocuk  \n A little child
fixed(Ufak, tefek)
amod(çocuk, Ufak)
~~~

A few fixed-like MWEs are analyzed as usual.

~~~ sdparse
Ali ya da Ahmet  \n Ali or Ahmet
advmod:emph(ya, da)
~~~

~~~ sdparse
Bir tek Ali okumamış . \n Only Ali did not read
det(Ali, bir)
det(Ali, tek)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:31 CEST 2020 -->
