---
udver: '2'
layout: relation
title: 'fixed'
shortdef: 'fixed'
---

The `fixed` relation is used to connect tokens of a fixed expression. It is annotated in a flat structure, where all subsequent words in the expression are attached to the first one using the `fixed` label.

~~~ sdparse
nach wie vor
fixed(nach, wie)
fixed(nach, vor)
~~~

~~~ sdparse
um so besser
fixed(um, so)
~~~

~~~ sdparse
darüber hinaus
fixed(darüber, hinaus)
~~~

~~~ sdparse
so gut wie neu
fixed(so, gut)
fixed(so, wie)
~~~

~~~ sdparse
ab und zu
fixed(ab, und)
fixed(ab, zu)
~~~

However, the flat annotation is broken when a fixed expression is interrupted by another word not be4longing to the expression. This is done to avoid non-projective structures.

~~~ sdparse
von mir aus
case(mir, von)
fixed(mir, aus)
~~~

~~~ sdparse
von heute an
case(heute, von)
fixed(heute, an)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:05 CEST 2021 -->
