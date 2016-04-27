---
layout: relation
title: 'nummod:gov'
shortdef: 'numeric modifier governing the case of the noun'
---

`nummod:gov` differs from [nummod]()
in that the numeral requires the counted noun to be in its genitive form.
The whole phrase (numeral + noun) is treated as a singular neuter noun phrase
and it can fill roles where nominative, accusative or vocative noun phrases are expected.

In UD the numeral is annotated as dependent of the noun and the `nummod:gov` label is used to preserve
the information about case conditions.

~~~ sdparse
Пять мужчин играло в карты . \n Five men played cards .
nummod:gov(мужчин, Пять)
nsubj(играло, мужчин)
dobj(играло, карты)
case(карты, в)
punct(играло, .-6)
nummod:gov(men, Five)
nsubj(played, men)
dobj(played, cards)
punct(played, .-12)
~~~

See [nummod]() for a broader discussion of the various situations with quantifiers.
