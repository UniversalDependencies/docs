---
layout: relation
title: 'obl'
shortdef: 'oblique adjunct'
udver: '2'
---

The `obl` relation is used for oblique nominal arguments and adjuncts of verbs, adjectives or adverbs. We use also the [obl:arg]() for the oblique arguments (i.e., prepositional objects) and [obl:agent]() for the agent of a passive verbs.

In Eastern Armenian `obl` is a [noun](NOUN) (or noun phrase) functioning as a
non-core (oblique) adjunct.
This means that it functionally corresponds to an adverbial when it attaches to a verb, adjective or other adverb.

~~~ sdparse
Նա նստած էր քարին/NOUN[Case=Dat] ։ \n He was sitting on-a-stone .
obl(նստած, քարին)
obl(sitting, sitting on-a-stone)
~~~

The `obl` relation can be further specified by the [case]():

~~~ sdparse
Նա նստած էր քարի/NOUN[Case=Dat] վրա/ADP[Case=Nom] ։ \n He was sitting on the-stone .
obl(նստած, քարի)
case:loc(ծառի, վրա)
obl(sitting, the-stone)
case:loc(the-tree, on)
~~~

`obl` is also used for temporal and locational nominal modifiers:

~~~ sdparse
Ամռանը/NOUN[Case=Dat] հանդիպեցի/VERB նրան/PRON[Case=Dat] սրճարանում/NOUN[Case=Loc] ։ \n I-met him in-summer in-the-cafe .
obl(հանդիպեցի, Ամռանը)
obl(հանդիպեցի, սրճարանում)
obl(I-met, in-summer)
obl(I-met, in-the-cafe)
~~~
