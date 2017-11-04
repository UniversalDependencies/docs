---
layout: relation
title: 'det'
shortdef: 'determiner'
---

`det` marks the relation between a noun and its determiner. Attributively used indefinite, demonstrative, or interrogative pronouns are also marked with `det`.

~~~ sdparse
Der Mann betrat eine Küche . \n The man entered a kitchen .
det(Mann, Der)
det(Küche, eine)
~~~

~~~ sdparse
Dieses Mädchen erfuhr wenige Sekunden später, welche Note sie bekommen hatte . \n This girl found out only few seconds later which grade she had gotten.
det(Mädchen, Dieses)
det(Sekunden, wenige)
det(Note, welche)
~~~
