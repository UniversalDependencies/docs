---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
---
advcl: adverbial clause modifier

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.), as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose clause, etc. Also comparative constructions are annotated using dependency relation advcl.

~~~ sdparse
Ta jooksis karjudes .
nsubj(jooksis-2, Ta-1)
advcl(jooksis-2, karjudes-3)
punct(jooksis-2, .-4)
~~~

He ran shouting.

~~~ sdparse
Mulle pakuti süüa , kui õhtul koolist saabusin .
nmod(pakuti-2, Mulle-1)
xcomp(pakuti-2, süüa-3)
punct(saabusin-8,-4)
sconj(saabusin-8, kui-5)
advmod(saabusin-8, õhtul-6)
nmod(saabusin-8, koolist-7)
advcl(pakuti-2, saabusin-8)
punct(saabusin-8, .-9)
~~~

I was offered something to eat, when I arrived from school in the evening

<!-- Interlanguage links updated Čt lis 12 09:43:10 CET 2020 -->
