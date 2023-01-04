---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a dependent clause 
which is a core argument. That is, it functions like an object of the verb, or
adjective.

~~~ sdparse
മഴ പെയ്യുകയാണ് എന്ന് ഞാൻ കരുതുന്നു . \n Rain showering that I think .
nsubj(പെയ്യുകയാണ്, മഴ)
ccomp(കരുതുന്നു, പെയ്യുകയാണ്)
ccomp(think, showering)
mark(പെയ്യുകയാണ്, എന്ന്)
nsubj(കരുതുന്നു, ഞാൻ)
punct(കരുതുന്നു, .)
~~~
