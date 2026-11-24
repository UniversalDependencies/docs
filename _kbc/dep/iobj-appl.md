---
layout: relation
title: 'iobj:appl'
shortdef: 'applied indirect object'
udver: '2'
---

Use `iobj:appl` for an applied argument when the applicative verb also governs an object or a clausal complement. The applicative morphology is represented by `Voice=Appl`.

~~~ sdparse
Pedro aGeeta Ecode me daGa dinojeteta domoojia . \n Pedro NEG:say:APPL Ecode C NEG INV:buy:APPL car .
nsubj(aGeeta, Pedro)
iobj:appl(aGeeta, Ecode)
ccomp(aGeeta, dinojeteta)
mark(dinojeteta, me)
advmod(dinojeteta, daGa)
obj(dinojeteta, domoojia)
~~~

‘Pedro did not tell Ecode not to buy a car.’ Adapted from Sandalo and Galves (2025, p. 4, ex. 8; data from Sandalo 1997). Here `Ecode` is the applied recipient of ‘say’, and the infinitival clause is its clausal complement. The applicative object in example 31 of Sandalo and Galves (2023, p. 17) is a different configuration: the possessive NP `exate lamodi` is a single object headed by `lamodi` ‘leaf’, with `obj:appl(aGeeta, lamodi)` and `nmod:poss(lamodi, exate)`, not `iobj:appl`.
