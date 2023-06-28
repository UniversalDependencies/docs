---
layout: relation
title:  'nmod:desc'
shortdef : 'descriptor modifier in nominal'
udver: '2'
---

A descriptor is a nominal modifier that is less than a full nominal phrase (as would be required for [appos]()),
and is not forming a complex concept warranting [compound]().

Descriptors are mainly titles and similar phrases modifying a proper name, and generally lack [case]() or [det]() dependents.

~~~ sdparse
Rev. Dr. Martin Luther King
nmod:desc(Martin, Rev.)
nmod:desc(Martin, Dr.)
flat(Martin, Luther)
flat(Martin, King)
~~~

In journalistic style we see determinerless modifiers like:

~~~ sdparse
prominent journalist Bill Moyers
amod(journalist, prominent)
nmod:desc(Bill, journalist)
flat(Bill, Moyers)
~~~

Contrast the version with a determiner, in which the two parts are reversible, warranting [appos]():

~~~ sdparse
the prominent journalist Bill Moyers
det(journalist, the)
amod(journalist, prominent)
appos(journalist, Bill)
flat(Bill, Moyers)
~~~
