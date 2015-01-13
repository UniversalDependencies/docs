---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
---

The `nmod` relation is used for nominal modifiers. They depend either
on another noun (group “noun dependents”) or on a predicate (group
“non-core dependents of clausal predicates”).

`nmod` is a [noun](cs-pos/NOUN) (or noun phrase) functioning as a
non-core (oblique) argument or adjunct.
This means that it functionally corresponds to an adverbial when it attaches to a verb, adjective or other adverb.
But when attaching to a noun, it corresponds to a non-agreeing attribute _(přívlastek neshodný)_
in genitive.

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

`nmod` is also used for temporal nominal modifiers:

~~~ sdparse
Potkal jsem ho minulý čtvrtek . \n Met I-have him last Thursday .
nmod(Potkal, čtvrtek)
nmod(Met, Thursday)
~~~
