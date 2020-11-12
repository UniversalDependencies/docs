---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
---

The nmod relation is used for nominal modifiers. They depend either on another noun (group “noun dependents”) or on a predicate (group “non-core dependents of clausal predicates”). They can occur alone or together with an adposition in an adpositional phrase.

~~~ sdparse
Rüütel läks lossi .
nsubj(läks-2, Rüütel-1)
nmod(läks-2, lossi-3)
punct(läks-2, .-4)
~~~

Knight went into the castle.

~~~ sdparse
Rüütel läks lossi juurde .
nsubj(läks-2, Rüütel-1)
nmod(läks-2, lossi-3)
case(lossi-3, juurde-4)
punct(läks-2, .-5)
~~~

Knight went near the castle.
<!-- Interlanguage links updated Čt lis 12 09:43:30 CET 2020 -->
