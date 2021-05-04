---
layout: relation
title:  'obl:own'
shortdef : 'owner in possessive existential clauses'
udver: '2'
---

Possessive existential clauses  correspond to the English verb “to have”.
In Kazakh, the concept of “X has Y” is expressed as “there is Y at X”.
The adjectives _бар_ / _bar_ “existent” and _жоқ_ / _žoq_ “non-existent” are used as the
head predicates in existential clauses, whether or not an owner is also
expressed. The owner (possessor) can be expressed as an oblique nominal
in the locative case and it is attached to the predicate as `obl:own`.

“Do you have empty rooms?”

~~~ sdparse
Сізде бос бөлмелер бар ма ? \n You-at empty rooms existent whether ?
obl:own(бар, Сізде)
amod(бөлмелер, бос)
nsubj(бар, бөлмелер)
discourse(бар, ма)
punct(бар, ?-6)
~~~

“We have no empty rooms.”

~~~ sdparse
Бізде бос бөлмелер жоқ . \n We-at empty rooms non-existent .
obl:own(жоқ, Бізде)
amod(бөлмелер, бос)
nsubj(жоқ, бөлмелер)
punct(жоқ, .-5)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:34 CET 2020 -->
