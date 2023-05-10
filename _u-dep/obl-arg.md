---
layout: relation
title:  'obl:arg'
shortdef : 'oblique argument'
udver: '2'
---

The relation `obl:arg` is used for oblique arguments and distinguishes them from
adjuncts, which use the plain [obl]() relation. It is thus possible to preserve
the notion of _object_ as it is defined in the traditional grammar of some
languages, where it essentially follows the distinction between arguments and
adjuncts (which is otherwise not reflected in the main UD relation types — see the
discussion [here](../../u/overview/syntax.html#avoiding-an-argumentadjunct-distinction)).
A Czech example:

~~~ sdparse
Spoléhám se na jeho instinkt . \n I-rely REFL on his instinct .
obl:arg(Spoléhám, instinkt)
obl:arg(I-rely, instinct)
case(instinkt, na)
case(instinct, on)
~~~

Arguments are selected by the predicate. Their coding (preposition and
morphological case) is determined by the predicate; within the set of
arguments of this predicate, the coding maps the argument to a particular
semantic role.
In contrast, the semantics of an adjunct is relatively independent of the
predicate, and typical adjuncts (such as specifications of time, location,
manner or instrument) can combine with a large number of different predicates.

Hence in the above example, the preposition _na_ “on” and the accusative case of
the noun _instinkt_ “instinct” are selected by the verb _spoléhat_ “to rely”.
Other verbs may also select the same preposition and case but the meaning will
be different: for instance, _myslet na někoho_ “to think of someone.”
Finally, the preposition _na_ itself has an adessive or allative meaning
(see the corresponding values of the [Case](../../u/feat/Case.html) feature).
This meaning is suppressed when the preposition is selected by a predicate but
it is more recognizable in adjuncts. In the following example, the preposition
combines with a noun phrase in the locative case and marks a locational modifier:

~~~ sdparse
Konference se koná na Slovensku . \n Conference REFL takes-place in Slovakia .
obl(koná, Slovensku)
obl(takes-place, Slovakia)
case(Slovensku, na)
case(Slovakia, in)
~~~
<!-- Interlanguage links updated Út 9. května 2023, 20:04:28 CEST -->
