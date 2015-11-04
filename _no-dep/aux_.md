---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "no/dep/aux.html"
---
An auxiliary of a clause is a non-main verb of the clause, e.g., a modal auxiliary, or a form of *ha* "have" or *være* "be" in a periphrastic tense.
Exception: Auxiliary verb used to construct the passive voice is not labeled aux but [auxpass]().

~~~ sdparse
Kan jeg ha lest feil bøker av henne? \n Might I have read the wrong books by her?
aux(lest,kan)
aux(lest,ha)
~~~

~~~ sdparse
deres siste øyeblikk er kommet \n Their last moment has is come
aux(kommet,er)
~~~

