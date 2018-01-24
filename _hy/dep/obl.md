---
layout: relation
title: 'obl'
shortdef: 'oblique adjunct'
udver: '2'
---

The `obl` relation is used for oblique nominal arguments and adjuncts of verbs, adjectives or adverbs. We use also the [obl:arg]() for the oblique arguments (i.e., prepositional objects) and [obl:agent]() for the agent of a passive verb.

In Eastern Armenian `obl` is a [noun](NOUN) (or noun phrase) functioning as a
non-core (oblique) adjunct.
This means that it functionally corresponds to an adverbial when it attaches to a verb, adjective or other adverb.

~~~ sdparse
Ես հանդիպեցի նրան անցյալ չորեքշաբթի/NOUN[Case=Nom] ։ \n I met him last Thursday .
obl(հանդիպեցի, չորեքշաբթի)
obl(met, Thursday)
~~~

~~~ sdparse
Դուրս եկավ տնից/NOUN[Case=Abl] ։ \n He-went out from-the-house .
obl(եկավ, տնից)
obl(He-went, from-the-house)
~~~

The `obl` relation can be further specified by the [case](). In conjunction with the case relation, it provides a uniform analysis for:

*	variant forms with case, a preposition or a postposition:

~~~ sdparse
Նա նստած էր ծառի/NOUN[Case=Dat] տակ/ADP[Case=Nom] ։ \n He was sitting under the-tree .
obl(նստած, ծառի)
case:loc(ծառի, տակ)
obl(sitting, the-tree)
case:loc(the-tree, under)
~~~

*	`obl` is also used for temporal and locational nominal modifiers:

~~~ sdparse
Ամռանը/NOUN[Case=Dat] հանդիպեցի/VERB նրան/PRON[Case=Dat] սրճարանում/NOUN[Case=Loc] ։ \n I-met him in-summer in-the-cafe .
obl(հանդիպեցի, Ամռանը)
obl(հանդիպեցի, սրճարանում)
obl(I-met, in-summer)
obl(I-met, in-the-cafe)
~~~
