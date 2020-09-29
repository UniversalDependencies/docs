---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
---

The `nmod` relation is used for nominal modifiers. They depend either
on another noun (group “noun dependents”) or on a predicate (group
“non-core dependents of clausal predicates”).

`nmod` is a [noun](u-pos/NOUN) (or noun phrase) functioning as a
non-core (oblique) argument or adjunct.
This means that it functionally corresponds to an adverbial when it attaches to a verb, adjective or other adverb.
But when attaching to a noun, it corresponds to an attribute, or genitive complement (the terms are less standardized here).

We differentiate adverbials realized by noun phrases or adpositional phrases (`nmod` as in "Na noite passada, eu nadei") from adverbials realized as adverbs (`advmod` as in "Ontem, eu nadei").

~~~ sdparse
"PT no governo"
nmod(PT, governo)
~~~

~~~ sdparse
"«Confissões» chega a Portugal"
nmod(chega, Portugal)
~~~

<!-- Interlanguage links updated Út zář 29 20:23:36 CEST 2020 -->
