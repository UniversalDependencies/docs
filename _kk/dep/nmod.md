---
layout: relation
title:  'nmod'
shortdef : 'nominal modifier'
udver: '2'
---

*Nominal modifiers* are inflected nominals which modify another nominal.
If they modify a clause/predicate, they are labeled [obl]() instead.
They can occur alone or
together with an postposition in an postpositional phrase. Both cases are analysed similarly, as semantically
nominal modifiers and postpositional phrases are similar.

*Izafet construction:*

Genitive nouns in the izafet construction get a special relation, `nmod:poss`, be they indefinite:

~~~ sdparse
Дүниежүзілік экономикалық дағдарыс Иран экономикасын тұралатып тастады . \n Global economic depression Iran-of economy declining threw .
nmod:poss(экономикасын-5, Иран-4)
obj(тастады-7, экономикасын-5)
~~~

or definite:

*Object of comparison:*

Nouns in ablative case which depend on adjectives as object of comparison get `nmod:comp`:

<!-- Interlanguage links updated Čt lis 12 09:43:31 CET 2020 -->
