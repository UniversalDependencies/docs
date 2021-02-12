---
layout: relation
title:  'advmod'
shortdef : 'adverb modifier'
udver: '2'
---

The dependency type `advmod` is used for *adverb modifiers* of verbs,
nominals and adverbs alike.

<!-- fname:advmod_verb.pdf -->
~~~ sdparse
Hän käveli kotiin hitaasti . \n He walked home slowly .
nsubj(käveli-2, Hän-1)
nmod(käveli-2, kotiin-3)
advmod(käveli-2, hitaasti-4)
punct(käveli-2, .-5)
~~~

<!-- fname:advmod_noun.pdf -->
~~~ sdparse
Minä otin kaapista myös vasaran . \n I took from_closet also hammer .
nsubj(otin-2, Minä-1)
nmod(otin-2, kaapista-3)
obj(otin-2, vasaran-5)
advmod(vasaran-5, myös-4)
punct(otin-2, .-6)
~~~

Also quantification modifiers are annotated as *adverb modifiers* in UD Finnish (correspond to quantmod in the original Stanford Dependencies and the Turku Dependency Treebank). Quantification modifiers are quantifiers that modify a numerical expression. Typically quantifiers are adverbs, but also few adjectives are allowed as quantifiers.

<!-- fname:quantmod.pdf -->
~~~ sdparse
Alue oli suuruudeltaan noin kymmenen neliökilometriä . \n The_area was of_its_size about ten square_kilometres .
nsubj:cop(neliökilometriä-6, Alue-1)
cop(neliökilometriä-6, oli-2)
nmod(neliökilometriä-6, suuruudeltaan-3)
advmod(kymmenen-5, noin-4)
nummod(neliökilometriä-6, kymmenen-5)
punct(neliökilometriä-6, .-7)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:11 CET 2020 -->
