---
layout: relation
title:  'nmod'
shortdef : 'nominal modifier'
---

*Nominal modifiers* are inflected nominals which modify most commonly a verb or a noun phrase. They can occur alone or 
together with an postposition in an postpositional phrase. Both cases are analysed similarly, as semantically 
nominal modifiers and postpositional phrases are similar.

`nmod` is by far the most used relation in UD Kazakh.

*Postpositional phrases:*

~~~ sdparse
Азамат ағашқа қарай жүгірді . \n Azamat tree-to towards ran .
nsubj(жүгірді-4, Азамат-1)
case(ағашқа-2, қарай-3)
punct(жүгірді-4, .-5)
nmod(жүгірді-4, ағашқа-2)
~~~

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

<!-- Interlanguage links updated Út zář 29 20:43:21 CEST 2020 -->
