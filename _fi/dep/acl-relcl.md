---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
---

A *relative clause modifier* (`acl:relcl`) marks relative clauses. The
governor is the phrase or clause modified. Usually, it is a noun, but in Finnish it can also be a verb, when the dependent refers to the entire action described. The dependent is the main
predicate of the relative clause. 

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

##Diffs

###Turku Dependency Treebank

The governor can also be a verb, when the dependent refers to the entire action described in the main sentence.

###FinnTreeBank

FI_FTB applies the universal relation [`acl`](http://universaldependencies.org/u/dep/all.html#al-u-dep/acl) instead
of the language-specific relation `acl:relcl`.
<!-- Interlanguage links updated Út zář 29 18:41:03 CEST 2020 -->
