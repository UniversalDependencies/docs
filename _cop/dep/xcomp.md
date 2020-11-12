---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

This label is used to mark dependent clauses that do not contain their own subject, most often infinitive object clauses. 

## Use with infinitives

~~~ sdparse
ⲧⲉⲧⲛ/PRON ⲕⲱ/VERB ⲙⲙⲟ/ADP ⲟⲩ/PRON ⲁⲛ/ADV ⲉ/ADP ⲥⲣϥⲉ/VERB ⲉ/ADP ⲁⲁ/VERB ϥ/PRON \n you do not let them engage in making it

nsubj(ⲕⲱ, ⲧⲉⲧⲛ)
obj(ⲕⲱ, ⲟⲩ)
case(ⲟⲩ, ⲙⲙⲟ)
advmod(ⲕⲱ, ⲁⲛ)
xcomp(ⲕⲱ, ⲥⲣϥⲉ)
mark(ⲥⲣϥⲉ, ⲉ-6)
xcomp(ⲥⲣϥⲉ, ⲁⲁ)
mark(ⲁⲁ, ⲉ-8)
obj(ⲁⲁ, ϥ)
~~~

Note how in the example above, the subject of both infinitives marked by ⲉ is the object of the main verb ⲕⲱ, which is external to the infinitive clauses. The infinitive clauses marked by xcomp are inheriting their subject argument from the main clause argument.

## Use with causative ⲧⲣⲉ

Additionally, the subordinate infinitive of the causative construction with ⲧⲣⲉ is also analyzed as xcomp, although the etymological subject of the auxiliary ⲧⲣⲉ is attached to the lexical infinitive as a subject. This facilitates syntactic recognition of the construction next to semantic argument structure extraction:

~~~ sdparse

ⲙⲡⲉ/AUX ⲕ/PRON ⲟⲩⲱϣ/VERB ⲁⲛ/ADV ⲡⲉ/AUX ⲉ/ADP ⲧⲣⲉ/VERB ⲛ/DET ϣⲏⲣⲉ/NOUN ⲙ/ADP ⲡ/DET ⲛⲟⲩⲧⲉ/NOUN ϫⲓ/VERB ⲟⲩ/DET ⲡⲣⲟⲥⲫⲟⲣⲁ/NOUN \n you did not wish to make the sons of God carry an offering

aux(ⲟⲩⲱϣ, ⲙⲡⲉ)
nsubj(ⲟⲩⲱϣ, ⲕ)
advmod(ⲟⲩⲱϣ, ⲁⲛ)
cop(ⲟⲩϣⲱ, ⲡⲉ)
xcomp(ⲟⲩⲱϣ, ⲧⲣⲉ)
aux(ⲧⲣⲉ, ⲉ)
det(ϣⲏⲣⲉ, ⲛ)
xcomp(ⲧⲣⲉ, ϫⲓ)
nsubj(ϫⲓ, ϣⲏⲣⲉ)
nmod(ϣⲏⲣⲉ, ⲛⲟⲩⲧⲉ)
case(ⲛⲟⲩⲧⲉ, ⲙ)
det(ⲛⲟⲩⲧⲉ, ⲡ)
det(ⲡⲣⲟⲥⲫⲟⲣⲁ, ⲟⲩ)
obj(ϫⲓ, ⲡⲣⲟⲥⲫⲟⲣⲁ)

~~~

Note that in the example above, the first xcomp is the normal infinitive case, with no explicit subject, but the second xcomp illustrates the causative construction: ‘sons’ are both the object of ‘making’ and subject of ‘carrying’.

## Predicate of ϣⲱⲡⲉ 'become'

Predicates of ϣⲱⲡⲉ 'become' (and stative ϣⲟⲟⲡ) are not considered objects, but are linked as `xcomp` to the verb. The preposition ⲛ is still marked as `case` in this construction. 

~~~ sdparse

ⲧⲉⲧⲛ ϣⲱⲡⲉ ⲛ ϫⲣⲟⲡ \n you become an obstacle

xcomp(ϣⲱⲡⲉ, ϫⲣⲟⲡ)
case(ϫⲣⲟⲡ, ⲛ)

~~~

This analysis effectively treats predicates of verbs of 'becoming' as a small clause: become(x,be(y)), with x serving as the overt subject of become, but also the external subject of the 'be' predication, much like a governed infinitive.

## Naming constructions

Verbs of naming take the name argument as `xcomp`, and if the complementizer ϫⲉ is present, it is labeled as `mark`:

~~~ sdparse

ⲥⲉ/PRON ⲙⲟⲩⲧⲉ/V ⲙⲉⲛ/PART ⲉⲣⲟ/PRON ϩⲙ/ADP ⲡⲟⲩ/DET ⲣⲁⲛ/N ϫⲉ/SCONJ ⲁⲫⲑⲟⲛⲓⲁ/PROPN \n They call you by your name 'Aphthonia'

nsubj(ⲙⲟⲩⲧⲉ,ⲥⲉ)
obl(ⲙⲟⲩⲧⲉ,ⲣⲁⲛ)
obl(ⲙⲟⲩⲧⲉ,ⲉⲣⲟ)
case(ⲣⲁⲛ,ϩⲙ)
det(ⲣⲁⲛ,ⲡⲟⲩ)
xcomp(ⲙⲟⲩⲧⲉ,ⲁⲫⲑⲟⲛⲓⲁ)
mark(ⲁⲫⲑⲟⲛⲓⲁ,ϫⲉ)

~~~
<!-- Interlanguage links updated Čt lis 12 09:43:40 CET 2020 -->
