---
layout: relation
title: 'acl:relcl'
shortdef : 'relative clause modifier'
udver: '2'
---

### Description

The relative clause subtype of [acl]() should be used systematically in Uralic
languages: A *relative clause modifier* (`acl:relcl`) marks relative clauses.
The governor is the phrase or clause modified. Usually, it is a noun, but in
Uralic it can also be a verb, when the dependent refers to the entire action
described.  The dependent is the main predicate of the relative clause.


#### Examples

<!-- fname:relcl_NP.pdf -->
~~~ sdparse
Mies , jonka hän oli nähnyt eilen , oli taas ovella . \n The_man , whom he had seen yesterday , was again at_the_door .
acl:relcl(Mies-1, nähnyt-6)
punct(nähnyt-6, ,-2)
dobj(nähnyt-6, jonka-3)
nsubj(nähnyt-6, hän-4)
aux(nähnyt-6, oli-5)
advmod(nähnyt-6, eilen-7)
punct(nähnyt-6, ,-8)
nsubj(oli-9, Mies-1)
advmod(oli-9, taas-10)
nmod(oli-9, ovella-11)
punct(oli-9, .-12)
~~~

<!-- fname:relcl_clause.pdf -->
~~~ sdparse
Ovi kolahti auki , mikä säikäytti lapsen . \n The_door clanked open , which scared the_child .
nsubj(kolahti-2, Ovi-1)
advmod(kolahti-2, auki-3)
acl:relcl(kolahti-2, säikäytti-6)
punct(säikäytti-6, ,-4)
nsubj(säikäytti-6, mikä-5)
dobj(säikäytti-6, lapsen-7)
punct(kolahti-2, .-8)
~~~

<!-- -->
~~~ sdparse
Sinul on läinud korda see , mida keegi teine pole suutnud ! \n You have succeeded _ it , that no-one else has_not been_able_to !
acl:relcl(see-5, suutnud-11)
aux(suutnud-11, pole-10)
~~~

<!-- Interlanguage links updated St lis 3 20:58:34 CET 2021 -->
