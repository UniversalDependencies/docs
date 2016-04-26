---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

The `nsubj` marks nominal subjects of the non-copular clause. Being Basque a morphologically ergative language, subjects of transitive verbs are marked with the ergative case, while subjects of intransitive verbs are marked with the absolutive case.

Example of a subject in an intransitive sentence:

***Bi zati hauek** markaturik dauden tokietatik tolesten dira*

***Two parts these-abs** marked are-that places  aux-intrans-present .*

***These two parts** fold by the places that are marked*


~~~ sdparse
Bi zati hauek markaturik dauden tokietatik tolesten dira \n two parts these marked that_are by_the_places fold

det(zati-2, Bi-1)
nsubj(tolesten-7, zati-2)
det(zati-2, hauek-3)
acl(tokietatik-6, markaturik-4)
cop(markaturik-4, dauden-5)
nmod(tolesten-7, tokietatik-6)
aux(tolesten-7, dira-8)
~~~


~~~ sdparse
Bi zati hauek markaturik dauden tokietatik tolesten dira \n two parts these marked that_are by_the_places fold

det(zati, Bi)
nsubj(tolesten, zati)
det(zati, hauek)
acl(tokietatik, markaturik)
cop(markaturik, dauden)
nmod(tolesten, tokietatik)
aux(tolesten, dira)
~~~



Example of a subject in a transitive sentence:

*Eztabaida handiak sortu ditu **aldaketak***

*Discussion huge-pl cause aux-trans-present **change-erg***

***The change** has caused huge discussions* 


~~~ sdparse
Eztabaida handiak sortu ditu aldaketak \n The change has caused huge discussions 

amod(Eztabaida-1, handiak-2)
nobj(sortu-3, Eztabaida-1)
aux(sortu-3, ditu-4)
nsubj(sortu-3, aldaketak-5)
~~~


~~~ sdparse
Eztabaida handiak sortu ditu aldaketak \n The change has caused huge discussions 

amod(Eztabaida, handiak)
nobj(sortu, Eztabaida)
aux(sortu, ditu)
nsubj(sortu, aldaketak)
~~~


Being Basque a free word order language, arguments of the verb can appear in different orders with respect to the verb.

***Aldaketak** eztabaida handiak sortu ditu*

***Change-erg** discussion huge-pl cause aux-trans-present*

***The change** has caused huge discussions*

~~~ sdparse
Aldaketak eztabaida handiak sortu ditu \n The change has caused huge discussions

nsubj(sortu-4, Aldaketak-1)
amod(eztabaida-2, handiak-3)
nobj(sortu-4, eztabaida-2)
aux(sortu-4, ditu-5)
~~~

~~~ sdparse
Aldaketak eztabaida handiak sortu ditu \n The change has caused huge discussions

nsubj(sortu, Aldaketak)
amod(eztabaida, handiak)
nobj(sortu, eztabaida)
aux(sortu, ditu)
~~~

