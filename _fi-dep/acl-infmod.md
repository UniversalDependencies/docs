---
layout: base
title:  'acl:infmod'
shortdef : 'infinitive modifier'
---

## `{{ page.title }}`: {{ page.shortdef }}

The dependency type `acl:infmod` is used for infinitives that modify a nominal or a noun phrase.


<!-- fname:infmod.pdf -->
~~~ sdparse
Minulla oli lupa mennä ulos . \n I had permission to_go out .
nmod(oli-2, Minulla-1)
nsubj(oli-2, lupa-3)
acl:infmod(lupa-3, mennä-4)
advmod(mennä-4, ulos-5)
punct(oli-2, .-6)
~~~


