---
layout: relation
title: 'nummod:gov'
shortdef: 'numeric modifier governing the case of the noun'
udver: '2'
---

`nummod:gov` differs from [nummod]()
in that the numeral requires the counted noun to be in its genitive form.
The whole phrase (numeral + noun) is treated as a singular neuter noun phrase
and it can fill roles where nominative, accusative or vocative noun phrases are expected.

Such situations are analyzed in PDT so that the numeral is the head and the noun depends on it.
In UD the dependency direction is reversed and the `nummod:gov` label is used to preserve
the information about case conditions.

~~~ conllu
# This is not UD, it is Prague Dependency Treebank, and we want to clearly distinguish it from the UD examples.
# visual-style nodes yellow
# visual-style arcs blue
1   Pět     pět     NUM     _   Case=Nom                           3   Sb     _   Five
2   mužů    muž     NOUN    _   Case=Gen|Gender=Masc|Number=Plur   1   Atr    _   men
3   hrálo   hrát    VERB    _   Gender=Neut|Number=Sing            0   Pred   _   played
4   karty   karta   NOUN    _   Case=Acc|Gender=Fem|Number=Plur    3   Obj    _   cards
5   .       .       PUNCT   _   _                                  0   AuxK   _   .
~~~

~~~ sdparse
Pět mužů hrálo karty . \n Five men played cards .
nummod:gov(mužů, Pět)
nsubj(hrálo, mužů)
obj(hrálo, karty)
punct(hrálo, .-5)
nummod:gov(men, Five)
nsubj(played, men)
obj(played, cards)
punct(played, .-11)
~~~

See [nummod]() for a broader discussion of the various situations with quantifiers.
<!-- Interlanguage links updated Út zář 29 20:23:39 CEST 2020 -->
