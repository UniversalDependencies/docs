---
layout: relation
title: 'det:nummod'
shortdef: 'pronominal quantifier agreeing in case with the noun'
---

Pronominal quantifiers are labeled `det:nummod` or [det:numgov]() instead of [det]()
because they normally do not agree with the quantified noun in case
(unlike non-quantifying determiners).
They do agree only if the whole phrase (quantifier + noun) fills a role where
genitive, dative, locative or instrumental noun phrases are expected.
In these situations they are labeled `det:nummod`.

~~~ sdparse
Не помню , со сколькими мужчинами я играл в карты . \n Not I-remember , with how-many men I played cards .
neg(помню, Не)
ccomp(помню, играл)
punct(играл, ,-3)
nsubj(играл, я)
dobj(играл, карты)
case(карты, в)
iobj(играл, мужчинами)
case(мужчинами, со)
det:nummod(мужчинами, сколькими)
punct(помню, .-11)
neg(I-remember, Not)
ccomp(I-remember, played)
punct(played, ,-15)
nsubj(played, I)
dobj(played, cards)
iobj(played, men)
case(men, with)
det:nummod(men, how-many)
punct(I-remember, .-22)
~~~

See [nummod]() for a broader discussion of the various situations with quantifiers.
