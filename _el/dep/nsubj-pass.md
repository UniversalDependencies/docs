---
layout: relation
title: 'nsubj:pass'
shortdef: 'passive nominal subject'
udver: '2'
---

A passive nominal subject is a noun phrase which is the syntactic
subject of a passive clause (or more generally, any voice where the proto-agent argument does not become the subject of the clause).

~~~ sdparse
Περιορίστηκε η μετάδοση του ιού
nsubjpass(Περιορίστηκε, μετάδοση)
~~~

Notice that the `nsubj` relation is used for the subjects of

- reflexive and reciprocal passive constructions

~~~ sdparse
η Νίκη ετοιμάστηκε για το πάρτι
nsubj(ετοιμάστηκε, Νίκη)
~~~

~~~ sdparse
Το ζευγάρι αγκαλιάστηκε
nsubj(αγκαλιάστηκε, ζευγάρι)
~~~

- deponent verbs (verbs that are active in meaning but have only passive voice forms)

~~~ sdparse
το παιδί κοιμάται στην κούνια του
nsubj(κοιμάται, παιδί)
~~~

~~~ sdparse
Έρχεται παγετός
nsubj(Έρχεται, παγετός)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:13 CEST 2021 -->
