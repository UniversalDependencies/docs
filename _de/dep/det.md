---
udver: '2'
layout: relation
title: 'det'
shortdef: 'determiner'
---

`det` marks the relation between a noun and its determiner. Attributively used indefinite, demonstrative, or interrogative pronouns are also marked with `det`. But note that the determiner "kein" does not receive the relation `det`, but rather the relation `advmod`.

~~~ sdparse
Der Mann betrat eine Küche . \n The man entered a kitchen .
det(Mann, Der)
det(Küche, eine)
~~~

~~~ sdparse
Der Mann , dessen Wohnung leer steht . \n The man , whose appartment stands empty .
det(Wohnung, dessen)
~~~

~~~ sdparse
Dieses Mädchen erfuhr wenige Sekunden später , welche Note sie bekommen hatte . \n This girl found out only few seconds later which grade she had gotten .
det(Mädchen, Dieses)
det(Sekunden, wenige)
det(Note, welche)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:01 CEST 2021 -->
