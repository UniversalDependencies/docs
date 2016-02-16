---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "eu/dep/aux.html"
---

The `aux` relation occurs between a verb and and auxiliary. In general, Basque verbs encode only aspect, while temporal and agreement features show up in the auxiliary, as well as transitivity.
 
 There are mainly two auxiliary lemmas *izan* corresponding to intransitives and *ukan* corresponding to transitives.

Even if Basque word order is quite free, the auxiliary can only appear right after the verb in non-negative sentences, and right after the negation in negative sentences.

* English (example of an intransitive):

These two parts fold by the places that are marked .

* Basque:

Bi zati hauek markaturik dauden tokietatik tolesten dira .

*Two parts these marked are-that places  aux-intrans-present .*

~~~ sdparse
Bi zati hauek markaturik dauden tokietatik tolesten dira .

det(zati-2, Bi-1)
nsubj(tolesten-7, zati-2)
det(zati-2, hauek-3)
acl(tokietatik-6, markaturik-4)
cop(markaturik-4, dauden-5)
nmod(tolesten-7, tokietatik-6)
aux(tolesten-7, dira-8)
~~~

* English (example of a transitive):

The change has caused huge discussions . 

* Basque:

Eztabaida handiak sortu ditu aldaketak .

*Discussion huge-pl cause aux-trans-present change-erg.*

~~~ sdparse
Eztabaida handiak sortu ditu aldaketak .

amod(Eztabaida-1, handiak-2)
nobj(sortu-3, Eztabaida-1)
aux(sortu-3, ditu-4)
nsubj(sortu-3, aldaketak-5)
~~~
