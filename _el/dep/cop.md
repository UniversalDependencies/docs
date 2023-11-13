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

Ιn Modern Greek  informal discourse or headlines copular sentences may occur without (the proper form of) *είμαι*.

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

[cop]() may mark a predicate clause, i.e., a full clause serving as the predicate within an outer copular clause. In such cases, [nsubj:outer]() or [csubj:outer]() can be used to distinguish the outer subject:

~~~ conllu
η πρώτη μου αντίδραση είναι να τους πω « καληνύχτα » και να πάω για ύπνο.
root(-ROOT-, πω)
nsubj:outer(πω, αντίδραση)
cop(πω, είναι)
mark(πω, να)
ccomp(πω, καληνύχτα)
conj(πω, πάω)
~~~

In equational structures it is sometimes unclear which member of the pair should be assigned the [root]() dependency. As a rule of thumb, the following hierachcy is proposed: ADJ > NOUN > PROPN.

~~~ sdparse
To μόνο που θέλω είναι η ώρα: 
root(-ROOT-, μόνο)
nsubj(μόνο, ώρα)
~~~


~~~ sdparse
Το παιδί που αγαπάω είναι ο Γιώργος.
root(-ROOT-, παιδί)
nsubj(παιδί, Γιώργος)
~~~



  


<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:41 CET -->
