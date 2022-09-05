---
layout: relation
title: 'aux:part'
shortdef: 'auxiliary particle'
udver: '2'
---

An auxiliary that is a particle rather than a verb.

In Gheg, this includes the voice-modulating particle *u* and the progressive particle *po*.


~~~ sdparse
u kry aj filmi \n the film finished
aux:part(kry, u)
nsubj(kry, filmi)
det(filmi, aj)
~~~

~~~ sdparse
ni njeri që po vilte dardha  \n the man who was picking pears
det(njeri, ni)
acl(njeri, vilte)
aux:part(vilte, po)
obj(vilte, dardha)
nsubj(vilte, që)
~~~

