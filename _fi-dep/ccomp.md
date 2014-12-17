---
layout: relation
title:  'ccomp'
shortdef : 'clausal complement'
---

*Clausal complement* is an object like clausal dependent. The governor is most
commonly, although not always, the main verb or predicative of the
main clause, and the dependent is the main verb or predicative of the
dependent clause. The clausal complement can also modify a word other
than a verb, most often a noun or pronoun. Most commonly clausal
complements are _että_-clauses.

If the subject of the clausal complement is controlled (that is, must be the same as the higher subject or object, with no other possible interpretation) the appropriate relation is either **xcomp** or **xcomp:ds**.


<!--Distinguishing different verbal dependents, including different
clausal complements, is discussed more closely in Section
[verbal](#sec-verbal).-->

<!-- fname:ccomp1.pdf -->
~~~ sdparse
Sanoin hänelle , että vesi kiehuu . \n I_said to_him , that water boils .
nmod(Sanoin-1, hänelle-2)
ccomp(Sanoin-1, kiehuu-6)
punct(kiehuu-6, ,-3)
mark(kiehuu-6, että-4)
nsubj(kiehuu-6, vesi-5)
punct(Sanoin-1, .-7)
~~~

<!-- fname:ccomp2.pdf -->
~~~ sdparse
Se , että naapurin koira haukkui kovasti , suututti äitiä . \n It , that neighbor's dog barked loudly , made_angry mother .
ccomp(Se-1, haukkui-6)
punct(haukkui-6, ,-2)
punct(haukkui-6, ,-8)
mark(haukkui-6, että-3)
poss(koira-5, naapurin-4)
nsubj(haukkui-6, koira-5)
advmod(haukkui-6, kovasti-7)
nsubj(suututti-9, Se-1)
dobj(suututti-9, äitiä-10)
punct(suututti-9, .-11)
~~~
