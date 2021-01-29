---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
udver: '2'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "no/dep/aux.html"
---
An auxiliary of a clause is a non-main verb of the clause, e.g., a modal auxiliary, or a form of *ha* "have" or *være* "be" in a periphrastic tense.
Exception: Auxiliary verb used to construct the passive voice is not labeled aux but [aux:pass]().

~~~ sdparse
Dette har vi i Norge merket \n This we have in Norway noticed
aux(merket,har)
~~~

~~~ sdparse
deres siste øyeblikk er kommet \n Their last moment has is come
aux(kommet,er)
~~~

~~~ sdparse
Helseadvarslene må være tydelige \n The health warnings must be clear
aux(tydelige, må)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:14 CET 2020 -->
