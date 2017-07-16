---
layout: relation
title: 'dislocated:cleft'
shortdef: 'clefted dislocated element'
udver: '2'
---

FrenchSpoken uses the `dislocated:cleft` relation in pseudo-cleft structures to link the clefted element to the left part of the pseudo-cleft construction.

~~~ sdparse
Ce que Thérèse aime par-dessus tout, c' est la randonnée. \n What Thérèse likes more than anything is hiking.
dislocated:cleft(randonnée.,Ce)
acl:relcl(Ce,aime)
~~~

~~~ sdparse
Ce qui m' embête , c'est que tu ne m'as pas appelée. \n What bothers me is that you didn't call.
dislocated:cleft(appelée.,Ce)
acl:relcl(Ce,embête)
~~~

N.B.: For more informations on pseudo-cleft sentences see the [specific-syntax](fr/overview/specific-syntax.html) page.
