---
layout: relation
title: 'xcomp'
shortdef : 'open clausal complement'
udver: '2'
---

The dependency type `xcomp` is reserved for clausal complements which have an external
subject, that is, whose subject is shared with the complemented verb (a phenomenon also
known as subject control). Note that the subject of the complementing clause must be
the *subject* of the complemented verb, not any other sentence element.

~~~ sdparse
Ол Азаматты табуға әрекет етіп жүр . \n She Azamat finding activity doing is .
xcomp(етіп-5, табуға-3)
nsubj(етіп-5, Ол-1)
obj(табуға-3, Азаматты-2)
~~~

*Note:* The existence of `xcomp` is uncertain in Kazakh, the vast majority of clausal
complements are not controlled and should get `ccomp` instead.

<!-- Interlanguage links updated St lis 3 20:59:11 CET 2021 -->
