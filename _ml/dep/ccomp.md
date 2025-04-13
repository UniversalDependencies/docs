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

~~~ sdparse
ആര് ആണ് എഴുതിയത് എന്ന് അവർക്ക് അറിയില്ല . \n Who is wrote that they know-not .
nsubj(എഴുതിയത്, ആര്)
cop:emph(എഴുതിയത്, ആണ്)
ccomp(അറിയില്ല, എഴുതിയത്)
ccomp(know-not,wrote)
mark(എഴുതിയത്, എന്ന്)
nsubj(അറിയില്ല, അവർക്ക്)
punct(അറിയില്ല, .)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:33 CET -->
