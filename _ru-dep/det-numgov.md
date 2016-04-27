---
layout: relation
title: 'det:numgov'
shortdef: 'pronominal quantifier governing the case of the noun'
---

Pronominal quantifiers are labeled `det:numgov` instead of [det]()
because they normally do not agree with the quantified noun in case
(unlike non-quantifying determiners).

The quantifier requires the counted noun to be in its genitive form.
The whole phrase (quantifier + noun) is treated as a singular neuter noun phrase
and it can fill roles where nominative, accusative or vocative noun phrases are expected.

In UD the quantifier depends on the quantified noun and the `det:numgov` label is used to preserve
the information about case conditions.

~~~ sdparse
Сколько мужчин играло в карты ? \n How-many men played cards ?
det:numgov(мужчин, Сколько)
nsubj(играло, мужчин)
dobj(играло, карты)
case(карты, в)
punct(играло, ?-6)
det:numgov(men, How-many)
nsubj(played, men)
dobj(played, cards)
punct(played, ?-12)
~~~

See [nummod]() for a broader discussion of the various situations with quantifiers.
