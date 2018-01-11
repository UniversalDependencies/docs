---
layout: relation
title: 'obl'
shortdef: 'oblique argument or adjunct'
udver: '2'
---

The `obl` relation is used for oblique nominal arguments and adjuncts of verbs, adjectives or adverbs.

`obl` is a [noun](NOUN) (or noun phrase) functioning as a
non-core (oblique) argument or adjunct.
This means that it functionally corresponds to an adverbial when it attaches to a verb, adjective or other adverb.

~~~ sdparse
Ես հանդիպեցի նրան անցյալ չորեքշաբթի ։ \n I met him last Thursday .
obl(հանդիպեցի, չորեքշաբթի)
obl(met, Thursday)
~~~

The `obl` relation can be further specified by the [case](). In conjunction with the case relation, it provides a uniform analysis for:

*	variant forms with case, a preposition or a postposition:

~~~ sdparse
Դուրս եկավ տնից ։ \n He-went out from-the-house.Abl .
obl(եկավ, տնից)
obl(He-went, from-the-house.Abl)
~~~

~~~ sdparse
Նա նստած էր ծառի տակ ։ \n He was sitting under the-tree.Dat .
obl(նստած, ծառի)
case(ծառի, տակ)
obl(sitting, the-tree.Dat)
case(the-tree.Dat, under)
~~~

*	`obl` is also used for temporal and locational nominal modifiers:

~~~ sdparse
Ամռանը հանդիպեցի նրան սրճարանում ։ \n I-met him in-the-summer.Dat in-the-cafe.Loc .
obl(հանդիպեցի, Ամռանը)
obl(հանդիպեցի, սրճարանում)
obl(I-met, in-the-summer.Dat)
obl(I-met, in-the-cafe.Loc)
~~~
