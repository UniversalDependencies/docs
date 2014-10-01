---
layout: base
title:  'nmod:tmod'
shortdef : 'temporal modifier'
---

## {{ page.title }} : {{ page.shortdef }}

A temporal modifier is a subtype of the [nmod:npmod]() relation: it is
a bare noun phrase constituent that serves to modify the meaning of
the constituent by specifying a time.  (Other temporal modifiers are
prepositional phrases introduced as [nmod]() or adverbs introduced as
[advmod]()).

~~~ sdparse
Last night , I swam in the pool
nmod:tmod(swam, night)
~~~
