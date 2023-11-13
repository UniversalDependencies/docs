---
layout: relation
title: 'nsubj:pass'
shortdef: 'passive nominal subject'
udver: '2'
---

A passive nominal subject is a noun phrase which is the syntactic
subject of a passive clause. In such clauses, the subject of the active form of the verb is  or can be expressed with a prepositional phrase introduced with the adposition *από*.

~~~ sdparse
Περιορίστηκε η μετάδοση του ιού
nsubjpass(Περιορίστηκε, μετάδοση)
~~~

Notice that the `nsubj` relation is used for the subjects of

- reflexive and reciprocal constructions which use the mediopassive form of the verb; no prepositional phrase introduced with the adposition *από* can depend on this form of the verb expressing a proto-agent.

~~~ sdparse
η Νίκη ετοιμάστηκε για το πάρτι
nsubj(ετοιμάστηκε, Νίκη)
~~~

~~~ sdparse
Το ζευγάρι αγκαλιάστηκε
nsubj(αγκαλιάστηκε, ζευγάρι)
~~~

- deponent verbs (verbs that are active in meaning/mood but have  the mediopassive form only); no prepositional phrase introduced with the adposition *από* can depend on this form of the verb expressing a proto-agent.

~~~ sdparse
το παιδί κοιμάται στην κούνια του
nsubj(κοιμάται, παιδί)
~~~

~~~ sdparse
Έρχεται o Γιάννης
nsubj(Έρχεται, Γιάννης)
~~~

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:11 CET -->
