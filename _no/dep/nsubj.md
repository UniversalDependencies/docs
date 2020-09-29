---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

A nominal subject is a nominal phrase which is the subject of a clause. The governor of the `nsubj` relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb, which can be an adjective or noun.

~~~ sdparse
Jeg har ingenting mer å si om det nå \n I have nothing more to say about that now
nsubj(har,Jeg)
~~~

~~~ sdparse
Dette svaret er viktig for Frp \n This answer is important for Frp
nsubj(viktig,svaret)
~~~

Note that in cases where there is an expletive subject ([expl](expl)), the `nsubj` relation is used to express the potential/postposed subject:

~~~ sdparse
Det eksisterer allerede en debatt \n There already exists a debate
expl(eksisterer-2,Det-1)
nsubj(eksisterer-2,debatt-5)
~~~




<!-- Interlanguage links updated Út zář 29 20:43:23 CEST 2020 -->
