---
layout: relation
title:  'obl:arg'
shortdef : 'oblique argument'
udver: '2'
---

The relation `obl:arg` is used for oblique arguments and distinguishes them from
adjuncts, which use the plain [obl]() relation. It is thus possible to preserve
the notion of _object_ as it is defined in the Czech grammar and annotated in
the Prague family of treebanks.

Objects in Czech can be bare noun phrases in accusative, dative, genitive or
instrumental cases, and prepositional phrases in accusative, dative, genitive,
instrumental or locative. Most of these coding strategies are also used for
adjuncts (called _adverbial modifiers_ in the Czech grammar).
However, Universal Dependencies reserve the relation [obj]() (object) for the
core object, and exclude oblique arguments. In Czech UD, we treat bare nominals
(including non-accusatives) as core arguments and prepositional phrases as
obliques. Within obliques, the `obl:arg` subtype is used for oblique arguments
(i.e., prepositional objects), and the plain [obl]() is used for adjuncts.

~~~ sdparse
Spoléhám se na jeho instinkt . \n I-rely REFL on his instinct .
obl:arg(Spoléhám, instinkt)
obl:arg(I-rely, instinct)
case(instinkt, na)
case(instinct, on)
~~~

The relation `obl:arg` is a language-specific subtype (as opposed to universal type)
because the argument-adjunct distinction is not made at the universal level
(some discussion is [here](../../u/overview/syntax.html#avoiding-an-argumentadjunct-distinction)).
However, it is available in Czech treebanks and `obl:arg` ensures that it is
not lost. Users that require reliable comparison across languages can easily
reduce it to `obl`.

Arguments are selected by the predicate. Their coding (preposition and
morphological case) is determined by the predicate; within the set of
arguments of this predicate, the coding maps the argument to a particular
semantic role.
In contrast, the semantics of an adjunct is relatively independent of the
predicate, and typical adjuncts (such as specifications of time, location,
manner or instrument) can combine with a large number of different predicates.

Hence in the above example, the preposition _na_ and the accusative case of
the noun _instinkt_ are selected by the verb _spoléhat._ Other verbs may
also select the same preposition and case but the meaning will be different:
for instance, _myslet na někoho_ “to think of someone.”
Finally, the preposition _na_ itself has an adessive or allative meaning
(see the corresponding values of the [Case](../../u/feat/Case.html) feature). This meaning is suppressed
when the preposition is selected by a predicate but it is more recognizable
in adjuncts. In the following example, the preposition combines with a noun
phrase in the locative case and marks a locational modifier:

~~~ sdparse
Konference se koná na Slovensku . \n Conference REFL takes-place in Slovakia .
obl(koná, Slovensku)
obl(takes-place, Slovakia)
case(Slovensku, na)
case(Slovakia, in)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:17 CEST 2021 -->
