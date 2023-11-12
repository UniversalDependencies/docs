---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

In copular clauses, the predicative acts as the head word of the clause, and the copular verb depends on it using a cop (copula) dependency. The only copular verb used in the Modern Greek treebank GUD is *είμαι* (*be*).

~~~ sdparse
Η ρευστότητα ήταν φλέγον ζήτημα .
root(ζήτημα)
nsubj(ζήτημα, ρευστότητα)
cop(ζήτημα, ήταν)
~~~

~~~ sdparse
Η ρευστότητα ήταν χαμηλή .
root(χαμηλή)
nsubj(χαμηλή, ρευστότητα)
cop(χαμηλή, ήταν)
~~~

~~~ sdparse
Ήταν από την Κρήτη .
root(Κρήτη)
cop(Κρήτη, Ήταν)
~~~

~~~ sdparse
Ο Νίκος είναι πάνω .
root(πάνω)
nsubj(πάνω, Νίκος)
cop(πάνω, είναι)
~~~

Ιn Modern Greek copular sentences, often in informal discourse or headlines, where deletion of *είμαι*  may occur.

~~~ sdparse
Φοβερό το γλυκό .
terrific the cake
`The cake is excellent.'
root(φοβερό)
nsubj(Φοβερό, γλυκό)
~~~

~~~ sdparse
Αμφίβολη η συμμετοχή της Γαλλίας .
disputable the partcipation of.the France
`The participation of France is disputable.'
root(Αμφίβολη)
nsubj(Αμφίβολη, συμμετοχή)
~~~

Whenever the copula has a clausal argument, [ccomp]() is used, with the copula being the head.

~~~ sdparse
Αυτό που μας ενδιαφέρει είναι να μην κινδυνέψουν
ccomp(είναι, κινδυνέψουν)
nsubj(είναι, Αυτό)
~~~

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:41 CET -->
