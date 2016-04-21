---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

~~~ sdparse
Eeva tuli töistä . \n Eeva came from_work .

nsubj(tuli-2, Eeva-1)
nmod(tuli-2, töistä-3)
punct(tuli-2, .-4)
~~~


The `nsubj` marks nominal subjects of the non-copular clause. Being Basque a morphologically ergative language, subjects of transitive verbs are marked with the ergative case, while subjects of intransitive verbs are marked with the absolutive case.




 
Example of a subject in an intransitive sentence:

~~~ sdparse
Bi zati hauek markaturik dauden tokietatik tolesten dira . \n These two parts fold by the places that are marked .

det(zati-2, Bi-1)
nsubj(tolesten-7, zati-2)
det(zati-2, hauek-3)
acl(tokietatik-6, markaturik-4)
cop(markaturik-4, dauden-5)
nmod(tolesten-7, tokietatik-6)
aux(tolesten-7, dira-8)
~~~



* English (example of an intransitive):

These two parts fold by the places that are marked .

* Basque:

Bi zati hauek markaturik dauden tokietatik tolesten dira .

*Two parts these-abs marked are-that places  aux-intrans-present .*

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


Example of a subject in a transitive sentence:

~~~ sdparse
Eztabaida handiak sortu ditu aldaketak . \n The change has caused huge discussions . 
amod(Eztabaida-1, handiak-2)
nobj(sortu-3, Eztabaida-1)
aux(sortu-3, ditu-4)
nsubj(sortu-3, aldaketak-5)
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

Being Basque a free word order language, arguments of the verb can appear in different orders with respect to the verb.

~~~ sdparse
Aldaketak eztabaida handiak sortu ditu . \n The change has caused huge discussions . 
nsubj(sortu-4, Aldaketak-1)
amod(eztabaida-2, handiak-3)
nobj(sortu-4, eztabaida-2)
aux(sortu-4, ditu-5)
~~~



* English (example of a transitive):

The change has caused huge discussions . 

* Basque:

Aldaketak eztabaida handiak sortu ditu .

*Change-erg discussion huge-pl cause aux-trans-present.*

~~~ sdparse
Aldaketak eztabaida handiak sortu ditu .

nsubj(sortu-4, Aldaketak-1)
amod(eztabaida-2, handiak-3)
nobj(sortu-4, eztabaida-2)
aux(sortu-4, ditu-5)
~~~
