---
layout: relation
title: 'cop'
shortdef: 'copula'
---

A copula is the relation between the complement of a copular verb and
the copular verb. Copular heads are avoided when possible.

~~~ sdparse
Bill är en ärlig man \n Bill is an honest man
cop(man-5, är)
nsubj(man-5, Bill-1)
amod(man-5, ärlig)
det(man-5, en)
~~~

Prepositional phrases are annotated similarly, the only difference being that
the nominal predicate has an additional case marker.

~~~ sdparse
Bill är från Kalifornien \n Bill is from California
case(Kalifornien, från)
cop(Kalifornien, är)
nsubj(Kalifornien, Bill-1)
~~~

When an adjective or adverb is being predicated of a nominal phrase, the
adjective/adverb is the root, the nominal phrase is the nsubj, and the
copula is the cop.

~~~ sdparse
Bill är ärlig \n Bill is honest
nsubj(ärlig, Bill-1)
cop(ärlig, är)
~~~

~~~ sdparse
Det var igår \n It was yesterday
nsubj(igår, Det)
cop(igår, var)
~~~

Prepositions may also project a cop dependent.

~~~ sdparse
Ljuset är på \n The light is on
cop(på, är)
nsubj(på, ljuset)
~~~

In predicative wh-constructions, the fronted wh-word is the head, and the copula is 
another cop.

~~~ sdparse
Vad är det ? \n What is that ?
cop(Vad, är)
nsubj(Vad, det)
~~~

However, whenever the copula has a clausal argument/adjunct, the copula becomes the root, so the cop relation is not used.

~~~ sdparse
Det var eftersom Bill är ärlig \n It was because Bill is honest
nsubj(var, Det)
mark(ärlig, eftersom)
ccomp(var, ärlig)
nsubj(ärlig, Bill-4)
cop(ärlig, är)
~~~

~~~ sdparse
Min fråga är : var detta riktigt sant ? \n My question is : was that really true ?
nsubj(är, fråga)
ccomp(är, sant)
cop(sant, var)
nsubj(sant, detta)
advmod(sant, riktigt)
~~~
