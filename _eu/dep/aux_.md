---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "eu/dep/aux.html"
udver: '2'
---

The `aux` relation occurs between a verb and and auxiliary. In general, Basque verbs encode only aspect, while temporal and agreement features show up in the auxiliary, as well as transitivity.

 There are mainly two auxiliary lemmas *izan* (*to be*) corresponding to intransitives and *ukan* (*to have*) corresponding to transitives.

Even if Basque word order is quite free, the auxiliary can only appear right after the verb in non-negative sentences, and right after the negation in negative sentences.


* Example of an auxiliary in an intransitive sentence (auxiliary lemma *izan*/*to be*):

*Bi zati hauek markaturik dauden tokietatik tolesten **dira** .*

*These two parts fold by the places that **are** marked .*

~~~ sdparse
Bi zati hauek markaturik dauden tokietatik tolesten dira . \n Two parts these marked are_that sites_the_by fold .

det(zati-2, Bi-1)
nsubj(tolesten-7, zati-2)
det(zati-2, hauek-3)
acl(tokietatik-6, markaturik-4)
cop(markaturik-4, dauden-5)
nmod(tolesten-7, tokietatik-6)
aux(tolesten-7, dira-8)
punct(tolesten-7, .-9)
~~~


* Example of an auxiliary in a transitive sentence (auxiliary lemma *ukan*/*to have*):

*Eztabaida handia sortu **du** aldaketak .*

*The change **has** caused a huge discussion .*

~~~ sdparse
Eztabaida handia sortu du aldaketak . \n Discussion huge_a caused has change_the .

amod(Eztabaida-1, handia-2)
nobj(sortu-3, Eztabaida-1)
aux(sortu-3, du-4)
nsubj(sortu-3, aldaketak-5)
punct(sortu-3, .-6)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:51 CEST 2021 -->
