---
layout: relation
title: 'case'
shortdef: 'case marking'
---

In Italian, the case relation is used for any preposition introducing a noun, pronoun, adjective, adverb. Prepositions are treated as dependents of the noun they attach to or introduce in an “extended nominal projection”. Thus, contrary to previous versions of the Italian Treebank, UD does not treat a preposition as a mediator between a modified word and its object. The case relation aims at providing a more uniform analysis of prepositions and case in morphologically rich languages.

~~~ sdparse
Sono d' accordo su il principio
case(principio, su)
det(principio, il)
nmod(Sono, accordo)
nmod(accordo, principio)
~~~
~~~ sdparse
il ministro di l' Interno
case(Interno, di)
det(Interno, l')
nmod(ministro, Interno)
~~~
