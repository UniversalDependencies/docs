---
layout: relation
title:  'obl:own'
shortdef : 'owner in possessive existential clauses'
udver: '2'
---

Possessive existential clauses  correspond to the English verb “to have”.
In Erzya, the concept of “X has Y” is expressed as “of X there is Y”.
The adjective _арась_ / _araś_ “non-existent” and the verbs _улемс ~ ульнемс_
/ _uĺems ~ uĺńems_ “exist” are used as the head predicates in existential
clauses, whether or not an owner is also expressed. The owner (possessor)
can be expressed as an oblique nominal in the genitive case and it is
attached to the predicate as `obl:own`. Both the adjective and the verbs
are conjugated for Tense, Person[subj] and Number[subj]

“Do you have empty rooms?”

~~~ sdparse
Тонь чаво нупалеть улить ? \n Your empty rooms exist ?
obl:own(улить, Тонь)
amod(нупалеть, чаво)
nsubj(улить, нупалеть)
punct(улить, ?-5)
~~~

“We have no empty rooms.”

~~~ sdparse
Монь чаво нупалень арасть . \n My empty rooms non-existent .
obl:own(арасть, Монь)
amod(нупалень, чаво)
nsubj(арасть, нупалень)
punct(арасть, .-5)
~~~

<!-- Interlanguage links updated Út 9. května 2023, 20:04:29 CEST -->
