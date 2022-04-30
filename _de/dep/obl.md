---
udver: '2'
layout: relation
title: 'obl'
shortdef: 'oblique'
---

The relation `obl` is used for nominals that constitute an adjunct as in the first example or a non-core (oblique) argument as in the second example.

~~~ sdparse
Das Paket liegt vor der Tür . \n The package is in front of the door .
obl(liegt, Tür)
~~~

~~~ sdparse
Was hältst du von dieser Rede ? \n What do you think of that speech ?
obl(hältst, Rede)
~~~

Note that adjuncts and oblique arguments can also introduce relative clauses. In such cases, the relative pronoun itself is marked `obl`.

~~~ sdparse
Das Haus , in dem ich wohne \n The house , in which I live
obl(wohne, dem)
~~~
<!-- Interlanguage links updated St lis 3 20:59:04 CET 2021 -->
