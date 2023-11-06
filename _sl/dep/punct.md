---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---

The `punct` relation is used for punctuation within clauses, as is shown in the examples below. The dependent is always the punctuation mark, while the following principles help us in determining the head of the relation: 
1. A punctuation mark separating coordinated units is attached to the following conjunct.
2. A punctuation mark preceding or following a dependent unit is attached to that unit.
3. Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity. 
4. Paired punctuation marks (e.g., quotes and brackets, sometimes also dashes, commas and other) should be attached to the same word unless that would create non-projectivity.
~~~ sdparse
noben analgetik ne bo odpravil vozličkov , zaprtja in blokade tega območja \n no analgesic not will get-rid-of nodules , closure and blockage of-this area
conj(vozličkov,zaprtja)
punct(zaprtja,,-7)
~~~
~~~ sdparse
Da , to je fundacija , ki je bila ustanovljena v Ameriki . \n Yes , this is the-foundation , that aux-PAST was established in America .
punct(Da,,-2)
discourse(fundacija,Da)
acl(fundacija,ustanovljena)
punct(ustanovljena,,-6)
cop(ustanovljena,bila)
punct(fundacija,.)
~~~
~~~ sdparse
so ugotovili še citotoksičnost ( toksičnost za zdrave celice ) in protitumorno delovanje \n they discovered also cytotoxicity ( toxicity for healthy cells )and anti-tumor effects
appos(citotoksičnost,toksičnost)
punct(toksičnost,(-5)
punct(toksičnost,)-10)
~~~

The `punct` relation is only used for tokens which have been tagged as punctuation (PUNCT), and not for tokens tagged as symbols (SYM). Since such tokens perform the function of actual words (for instance, % performs the same role as percent), they are analyzed according to their usual syntactic role or meaning.
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:27 CET -->
