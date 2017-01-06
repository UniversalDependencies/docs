---
layout: relation
title: 'dobj'
shortdef: 'direct object'
---

Designates the direct object of the verb. This can be one of the following:

A nominal object standing directly after a verb, OR 

A pronominal object directly after a verb:

~~~ sdparse
Ⲁ/AUX ⲕ/PRON ⲡⲁϩ/VERB ⲟⲩ/PRON \n You have torn them. 

aux(ⲡⲁϩ, Ⲁ)
nsubj(ⲡⲁϩ, ⲕ)
dobj(ⲡⲁϩ, ⲟⲩ)
~~~
A nominal or pronominal object mediated by the accusative marker (ⲛ/ⲙ/ⲙⲙⲟ⸗), usually in the durative patterns according to Jernstedt’s Law. The marker itself is linked to the noun with the `case` function.

~~~ sdparse
Ⲁ/AUX ⲓ/PRON ϥⲓ/VERB ⲛ/ADP ⲛⲉⲕ/DET ⲛⲟⲩⲧⲉ/NOUN \n I have carried your gods.

aux(ϥⲓ, ⲁ)
nsubj(ϥⲓ, ⲓ)
dobj(ϥⲓ, ⲛⲟⲩⲧⲉ)
case(ⲛⲟⲩⲧⲉ, ⲛ)
det(ⲛⲟⲩⲛⲧⲉ, ⲛⲉⲕ)
~~~
