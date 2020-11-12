---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
---

The nmod relation is used for nominal modifiers. They depend either on another noun (group “noun dependents”) or on a predicate (group “non-core dependents of clausal predicates”).

`nmod` is a noun (or noun phrase) functioning as a non-core (oblique) argument or adjunct. This means that it functionally corresponds to an adverbial when it attaches to a verb, adjective or other adverb. But when attaching to a noun, it corresponds to an attribute.

`nmod` is used for nouns modified by a preposition.

~~~ sdparse
Og bak prosesjonen kom dagens hovedpersoner \n And behind the procession came the main people
case(prosesjonen,bak)
nmod(kom,prosesjonen)
~~~

~~~ sdparse
Arbeiderpartiet får ledervervet i utenrikskomiteen \n Labour gets the leading role in the foreign committee
case(utenrikskomiteen,i)
nmod(ledervervet,utenrikskomiteen)
~~~

The `nmod` relation is also used for temporal modifiers expressed as nominals:

~~~ sdparse
Stortinget ble mandag kveld enige \n Government agreed Monday evening
nmod(ble-2,mandag-3)
nmod(mandag-3,kveld-4)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:31 CET 2020 -->
