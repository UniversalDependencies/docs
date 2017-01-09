---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
---

This label is used to mark dependent clauses that do not contain their own subject, most often infinitive object clauses. 

~~~ sdparse
ⲧⲉⲧⲛ/PRON ⲕⲱ/VERB ⲙⲙⲟ/ADP ⲟⲩ/PRON ⲁⲛ/ADV ⲉ/ADP ⲥⲣϥⲉ/VERB ⲉ/ADP ⲁⲁ/VERB ϥ/PRON \n you do not let them engage in making it

nsubj(ⲕⲱ, ⲧⲉⲧⲛ)
dobj(ⲕⲱ, ⲟⲩ)
case(ⲟⲩ, ⲙⲙⲟ)
neg(ⲕⲱ, ⲁⲛ)
xcomp(ⲕⲱ, ⲥⲣϥⲉ)
mark(ⲥⲣϥⲉ, ⲉ-6)
xcomp(ⲥⲣϥⲉ, ⲁⲁ)
mark(ⲁⲁ, ⲉ-8)
det(ⲁⲁ, ϥ)
~~~

Note how in the example above, the subject of both infinitives marked by ⲉ is the object of the main verb ⲕⲱ, which is external to the infinitive clauses. The infinitive clauses marked by xcomp are inheriting their subject argument from the main clause argument.

Additionally, the subordinate infinitive of the causative construction with ⲧⲣⲉ is also analyzed as xcomp, although the etymological subject of the auxiliary ⲧⲣⲉ is attached to the lexical infinitive as a subject. This facilitates syntactic recognition of the construction next to semantic argument structure extraction:

~~~ sdparse

ⲙⲡⲉ/AUX ⲕ/PRON ⲟⲩⲱϣ/VERB ⲁⲛ/ADV ⲡⲉ/AUX ⲉ/ADP ⲧⲣⲉ/VERB ⲛ/DET ϣⲏⲣⲉ/NOUN ⲙ/ADP ⲡ/DET ⲛⲟⲩⲧⲉ/NOUN ϫⲓ/VERB ⲟⲩ/DET ⲡⲣⲟⲥⲫⲟⲣⲁ/NOUN \n you did not wish to make the sons of God carry an offering

aux(ⲟⲩⲱϣ, ⲙⲡⲉ)
nsubj(ⲟⲩⲱϣ, ⲕ)
neg(ⲟⲩⲱϣ, ⲁⲛ)
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
dobj(ϫⲓ, ⲡⲣⲟⲥⲫⲟⲣⲁ)

~~~

Note that in the example above, the first xcomp is the normal infinitive case, with no explicit subject, but the second xcomp illustrates the causative construction: ‘sons’ are both the object of ‘making’ and subject of ‘carrying’.

