---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

In copular clauses, the predicative acts as the head word of the clause, and the copular verb depends on it using a cop (copula) dependency. The only copular verb used in the Modern Greek treebank GUD is *είμαι* (*be*).

~~~ sdparse
Η ρευστότητα ήταν φλέγον ζήτημα .
root(-ROOT-,ζήτημα)
nsubj(ζήτημα, ρευστότητα)
cop(ζήτημα, ήταν)
~~~

~~~ sdparse
Η ρευστότητα ήταν χαμηλή .
root(-ROOT-, χαμηλή)
nsubj(χαμηλή, ρευστότητα)
cop(χαμηλή, ήταν)
~~~

~~~ sdparse
Ήταν από την Κρήτη .
root(-ROOT-,Κρήτη)
cop(Κρήτη, Ήταν)
~~~

~~~ sdparse
Ο Νίκος είναι πάνω .
root(-ROOT-,πάνω)
nsubj(πάνω, Νίκος)
cop(πάνω, είναι)
~~~

Ιn Modern Greek copular sentences, often in informal discourse or headlines, where deletion of *είμαι*  may occur.

~~~ sdparse
Φοβερό το γλυκό .
terrific the cake
`The cake is excellent.'
root(-ROOT-,φοβερό)
nsubj(Φοβερό, γλυκό)
~~~

~~~ sdparse
Αμφίβολη η συμμετοχή της Γαλλίας .
disputable the partcipation of.the France
`The participation of France is disputable.'
root(-ROOT-,Αμφίβολη)
nsubj(Αμφίβολη, συμμετοχή)
~~~

Whenever the copula has a clausal argument, [ccomp]() is used, with the copula being the head.

~~~ sdparse
Αυτό που μας ενδιαφέρει είναι να μην κινδυνέψουν
ccomp(είναι, κινδυνέψουν)
nsubj(είναι, Αυτό)
~~~

Finally, the cop may mark a predicate clause, i.e., a full clause serving as the predicate within an outer copular clause. In such cases, [nsubj:outer]() or [csubj:outer]() can be used to distinguish the outer subject:

~~~ sdparse
η πρώτη μου αντίδραση είναι να τους πω « καληνύχτα » και να πάω για ύπνο.
root(-ROOT-, πω)
nsubj:outer(πω, αντίδραση)
cop(πω, είναι)
mark(πω, να)
ccomp(πω, καληνύχτα)
conj(πω, πάω)
~~~





<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:41 CET -->
