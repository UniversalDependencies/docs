---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal modifiers of nominals.

It usually corresponds to a non-agreeing attribute _(přívlastek neshodný)_
in genitive. (See below for an example of an agreeing attribute, _přívlastek shodný_.)

In Czech the `nmod` relation covers only those possessives that are expressed using the genitive [cs-feat/Case]().
If a possessive adjective is used, the relation is labeled [amod]().

~~~ sdparse
kancelář ředitele \n office of-the-director
nmod(kancelář, ředitele)
nmod(office, of-the-director)
~~~

~~~ sdparse
ředitelova kancelář \n director's office
amod(kancelář, ředitelova)
amod(office, director's)
~~~

~~~ sdparse
jeho kancelář \n his office
det(kancelář, jeho)
det(office, his)
~~~

## Agreeing attribute of a noun

`nmod` noun phrases attached to nouns are usually in the genitive [cs-feat/Case]() and follow the modified noun.
However, there is also a different kind of `nmod` that precedes the modified noun and agrees with it in case and number.
A typical example is a title attached to a name of a person. The relation is similar to the [flat]() relation
that links the first and the last name, but it is not labeled `flat` because the title is not part of the name:

~~~ sdparse
český prezident Václav Havel
amod(prezident, český)
nmod(Václav, prezident)
flat(Václav, Havel)
~~~

Note that the same thing can be also expressed using an [apposition](appos).
In the case of apposition, the title follows the modified name and is separated by a punctuation symbol:

~~~ sdparse
Václav Havel , český prezident
flat(Václav, Havel)
punct(prezident, ,-3)
amod(prezident, český)
appos(Václav, prezident)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:21 CEST 2020 -->
