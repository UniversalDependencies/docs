---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

The `nsubj` marks nominal subjects of the non-copular clause. Being Basque a morphologically ergative language, subjects of transitive verbs are marked with the ergative case, while subjects of intransitive verbs are marked with the absolutive case.

Example of a subject in an intransitive sentence (ABS case):

*Bi **zati** hauek markaturik dauden tokietatik tolesten dira .*

*These two **parts** fold by the sites that are marked .*

~~~ sdparse
Bi zati hauek markaturik dauden tokietatik tolesten dira .\n Two parts these marked are_that sites_the_by fold .

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

*Eztabaida handia sortu du **aldaketak** .*

*The **change** has caused a huge discussion .* 

~~~ sdparse
Eztabaida handia sortu du aldaketak .\n Discussion huge_a caused has change_the .  

amod(Eztabaida-1, handia-2)
dobj(sortu-3, Eztabaida-1)
aux(sortu-3, du-4)
nsubj(sortu-3, aldaketak-5)
punct(sortu-3, .-6)
~~~



Being Basque a free word order language, arguments of the verb can appear in different orders with respect to the verb.

***Aldaketak** eztabaida handia sortu du .*

*The **change** has caused a huge discussion .*

~~~ sdparse
Aldaketak eztabaida handia sortu du .\n Change_the discussion huge_a caused has .

nsubj(sortu-4, Aldaketak-1)
amod(eztabaida-2, handia-3)
dobj(sortu-4, eztabaida-2)
aux(sortu-4, du-5)
punct(sortu-4, .-6)
~~~


<!-- Interlanguage links updated Čt lis 12 09:43:32 CET 2020 -->
