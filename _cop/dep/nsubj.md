---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

Designates the subject of a verb. The relation is from the lexical verb to the subject pronoun or noun, not from the auxiliary, as shown below. The annotation guidelines do not distinguish passive subjects, since the two forms of passive-like expressions in Coptic may be seen as syntactically indistinct from active:

**Actional passive:** formed by a third person plural with non-plural reference, but if there is no singular ‘by’ phrase, it is formally indistinguishable from the active equivalent:

~~~ sdparse
Ⲁ/AUX ⲩ/PRON ⲥⲟⲧⲡ/VERB ⲥ/PRON  \n she was chosen (or: they chose her)

aux(ⲥⲟⲧⲡ, ⲁ)
nsubj(ⲥⲟⲧⲡ, ⲩ)
obj(ⲥⲟⲧⲡ, ⲥ)
~~~

**Stative passive:** formed by the morphological stative form (pos=VSTAT) with a transitive verb, however syntactically same as statal reading with intransitive verb:

~~~ sdparse
ϥ/PRON ⲕⲏⲧ/VERB \n it is built (transitive ⲕⲱⲧ “build”)

nsubj(ⲕⲏⲧ, ϥ)
~~~

~~~ sdparse
ϥ/PRON ϩⲟⲗϭ/VERB \n it is sweet (intransitive ϩⲗⲟϭ)

nsubj(ϩⲟⲗϭ, ϥ)
~~~

Note also that the existential predicates (Scriptorium pos=EXIST) take `nsubj` for the existing entity, even when they are used in the possessive construction:

~~~ sdparse
ⲙⲛ/VERB ⲙⲛⲧⲗⲏⲥⲧⲏⲥ/NOUN ϣⲟⲟⲡ/VERB \n there is no robbery

aux(ϣⲟⲟⲡ, ⲙⲛ)
nsubj(ϣⲟⲟⲡ, ⲙⲛⲧⲗⲏⲥⲧⲏⲥ)
~~~

If the possessor is indicated in the EXIST construction, the possessed is still annotated as `nsubj`, and the possessor is annotated as the indirect object, see `iobj` (i.e. the construction is interpreted as ‘there exists X to Y’).

~~~ sdparse
ⲟⲩⲛⲧⲁ/VERB ⲩ/PRON ⲓⲏⲥⲟⲩⲥ/PROPN \n they have Jesus (literally: “exists to them Jesus”)

iobj(ⲟⲩⲛⲧⲁ, ⲩ)
nsubj(ⲟⲩⲛⲧⲁ, ⲓⲏⲥⲟⲩⲥ)
~~~

In pure existence predication, the existing entity is the subject, and the EXIST predicate is the local root:

~~~ sdparse
ⲙⲛ/VERB ϭⲉ/PART ⲛⲟⲩⲧⲉ/NOUN ⲛⲃⲗⲁ/ADP ⲕ/PRON \n There is no God but you (“not existing” is the main predicate, “God” is the subject)

nsubj(ⲙⲛ, ⲛⲟⲩⲧⲉ) 
det(ⲛⲟⲩⲧⲉ, ϭⲉ)
obl(ⲙⲛ, ⲕ)
case(ⲕ, ⲛⲃⲗⲁ)
~~~

The analysis of the presentative particle ⲉⲓⲥ ('behold', 'voila') is different (see [Specific Constructions](https://universaldependencies.org/cop/specific-syntax.html)):

~~~ sdparse
ⲉⲓⲥ/PART ⲟⲩ/DET ⲥⲃⲱ/N ⲛ/ADP ⲃⲣⲣⲉ/N \n Behold, a new teaching

advmod(ⲥⲃⲱ,ⲉⲓⲥ)
det(ⲥⲃⲱ, ⲟⲩ)
nmod(ⲥⲃⲱ, ⲃⲣⲣⲉ)
case(ⲃⲣⲣⲉ, ⲛ)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:12 CEST 2021 -->
