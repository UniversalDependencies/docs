---
layout: relation
title: 'cop'
shortdef: 'copula'
---

In copular clauses, the predicative acts as the head word of the clause, and the copular verb depends on it using a cop (copula) dependency. The only copular verb in the scheme for Greek is *είμαι* (*be*).

~~~ sdparse
Η ρευστότητα ήταν φλέγον ζήτημα .
nsubj(ζήτημα, ρευστότητα)
cop(ζήτημα, ήταν)
~~~

~~~ sdparse
Η ρευστότητα ήταν χαμηλή .
nsubj(χαμηλή, ρευστότητα)
cop(χαμηλή, ήταν)
~~~

~~~ sdparse
Ήταν από την Κρήτη .
cop(Κρήτη, Ήταν)
~~~

~~~ sdparse
Ο Νίκος είναι πάνω .
nsubj(πάνω, Νίκος)
cop(πάνω, είναι)
~~~

The same label is used in Greek sentences (often in informal discourse or headlines), where deletion of *είμαι*  may occur. 

~~~ sdparse
Φοβερό το γλυκό .
nsubj(Φοβερό, γλυκό)
~~~

~~~ sdparse
Αμφίβολη η συμμετοχή της Γαλλίας .
nsubj(συμμετοχή, Αμφίβολη)
~~~

Whenever the copula has a clausal argument, [ccomp]() is used, with the copula being the head.

~~~ sdparse
Αυτό που μας ενδιαφέρει είναι να μην κινδυνέψουν
ccomp(είναι, κινδυνέψουν)
nsubj(είναι, Αυτό)
~~~

<!-- Interlanguage links updated Út zář 29 20:23:25 CEST 2020 -->
