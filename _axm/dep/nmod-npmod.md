---
layout: relation
title:  'nmod:npmod'
shortdef: 'noun phrase as nominal modifier'
udver: '2'
---

This relation is a subtype of the [nmod]() relation, which captures the cases where something syntactically a noun phrase is used as a nominal modifier in a sentence.

~~~ sdparse

nmod:npmod()
nmod:npmod()
~~~

~~~ sdparse

nmod:npmod()
nmod:npmod()
~~~

In conjunction with the [case]() relation, `nmod:npmod` provides a uniform analysis:

~~~ sdparse
թշնամու դեմ պատերազմը \n the-war against the-enemy
nmod:npmod(պատերազմը, թշնամու)
case(թշնամու, դեմ)
nmod:npmod(the-war, the-enemy)
case(the-enemy, against)
~~~
<!-- Interlanguage links updated St 12. listopadu 2025, 09:22:09 CET -->
