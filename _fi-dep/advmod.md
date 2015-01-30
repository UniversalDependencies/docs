---
layout: relation
title:  'advmod'
shortdef : 'adverb modifier'
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
dobj(otin-2, vasaran-5)
advmod(vasaran-5, myös-4)
punct(otin-2, .-6)
~~~


Also quantification modifiers are annotated as *adverb modifiers* in UD Finnish (correspond to quantmod in the original Stanford Dependencies and the Turku Dependency Treebank). Quantification modifiers are quantifiers that modify a numerical expression. Typically quantifiers are adverbs, but also few adjectives are allowed as quantifiers.
