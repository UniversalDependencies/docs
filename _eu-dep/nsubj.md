---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

The `nsubj` marks nominal subjects of the non-copular clause. Being Basque a morphologically ergative language, subjects of transitive verbs are marked with the ergative case, while subjects of intransitive verbs are marked with the absolutive case.

Example of a subject in an intransitive sentence (ABS case):

*Bi **zati** hauek markaturik dauden tokietatik tolesten dira .*

*These two **parts** are folded by the places that are marked .*

~~~ sdparse
Bi zati hauek markaturik dauden tokietatik tolesten dira .\n two parts these marked that_are by_the_places are_folded .

det(zati-2, Bi-1)
nsubj(tolesten-7, zati-2)
det(zati-2, hauek-3)
acl(tokietatik-6, markaturik-4)
cop(markaturik-4, dauden-5)
nmod(tolesten-7, tokietatik-6)
aux(tolesten-7, dira-8)
punct(tolesten-7, .-9)
~~~



Example of a subject in a transitive sentence (ERG case):

*Eztabaida handiak sortu ditu **aldaketak** .*

*The **change** has caused huge discussions .* 

~~~ sdparse
Eztabaida handiak sortu ditu aldaketak .\n Discussions huge has_caused the_change .  

amod(Eztabaida-1, handiak-2)
nobj(sortu-3, Eztabaida-1)
aux(sortu-3, ditu-4)
nsubj(sortu-3, aldaketak-5)
punct(sortu-3, .-6)
~~~



Being Basque a free word order language, arguments of the verb can appear in different orders with respect to the verb.

***Aldaketak** eztabaida handiak sortu ditu .*

*The **change** has caused huge discussions .*

~~~ sdparse
Aldaketak eztabaida handiak sortu ditu .\n The_change has caused discussions huge .

nsubj(sortu-4, Aldaketak-1)
amod(eztabaida-2, handiak-3)
nobj(sortu-4, eztabaida-2)
aux(sortu-4, ditu-5)
punct(sortu-4, .-6)
~~~



