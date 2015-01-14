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

Such situations are analyzed in PDT so that the quantifier (numeral) is the head and the noun depends on it.
In UD the dependency direction is reversed and the `det:numgov` label is used to preserve
the information about case conditions.

~~~ conllu
# This is not UD, it is Prague Dependency Treebank, and we want to clearly distinguish it from the UD examples.
# visual-style nodes yellow
# visual-style arcs blue
1   Kolik   kolik   NUM     _   Case=Nom                           3   Sb     _   How-many
2   mužů    muž     NOUN    _   Case=Gen|Gender=Masc|Number=Plur   1   Atr    _   men
3   hrálo   hrát    VERB    _   Gender=Neut|Number=Sing            0   Pred   _   played
4   karty   karta   NOUN    _   Case=Acc|Gender=Fem|Number=Plur    3   Obj    _   cards
5   ?       ?       PUNCT   _   _                                  0   AuxK   _   ?
~~~

~~~ sdparse
Kolik mužů hrálo karty ? \n How-many men played cards ?
det:numgov(mužů, Kolik)
nsubj(hrálo, mužů)
dobj(hrálo, karty)
punct(hrálo, ?-5)
det:numgov(men, How-many)
nsubj(played, men)
dobj(played, cards)
punct(played, ?-11)
~~~

See [nummod]() for a broader discussion of the various situations with quantifiers.
