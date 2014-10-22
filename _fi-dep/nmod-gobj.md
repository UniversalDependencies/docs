---
layout: entry
title:  'nmod:gobj'
shortdef : 'genitive object'
---

Certain nouns, those which have been directly derived from a verb or
otherwise have a verb counterpart, can take an object in
Finnish. These objects closely resemble more general genitive
modifiers [nmod:poss]().

<!-- fname:gobj.pdf -->
~~~ sdparse
Perunan viljely oli tuolloin harvinaista . \n Potato growing(N) was then rare .
nmod:gobj(viljely-2, Perunan-1)
nsubj:cop(harvinaista-5, viljely-2)
cop(harvinaista-5, oli-3)
advmod(harvinaista-5, tuolloin-4)
punct(harvinaista-5, .-6)
~~~
