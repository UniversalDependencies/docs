---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object of a verb is any nominal phrase that is a core argument of the verb but is not its subject or direct object. The `iobj` relation presupposes a `obj` argument of the same word and is only used for nominal arguments. Note that nominals with a preposition such as *til* "to" which are semantically similar to indirect object in the expression of a recipient role are not analyzed as `iobj`.

~~~ sdparse
gi den ubehøvlede unge mannen en sjanse \n give the rude young man a chance
iobj(gi-1,mannen-5)
dobj(gi-1,sjanse-7)
~~~
<!-- Interlanguage links updated St lis 3 20:58:56 CET 2021 -->
