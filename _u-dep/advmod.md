---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modifier of a word is a (non-clausal) [adverb](u-pos/ADV)
or adverbial phrase that serves to modify a predicate or a modifier word.

In some situations in some languages, a limited set of adverbs can also
modify nominals (e.g., _<b>only</b> on Monday_). The `advmod` relation or
its subtype has to be used in such cases, too (see also [advmod:emph]()).
<!-- Issue https://github.com/UniversalDependencies/docs/issues/779 -->

Note that in some grammatical traditions, the term _adverbial modifier_ covers
constituents that function like adverbs regardless whether they are realized
by adverbs, adpositional phrases, or nouns in particular morphological
[cases](u-feat/Case).
We differentiate adverbials realized as adverbs _(advmod)_ and
adverbials realized by noun phrases or adpositional phrases
([obl]()). However, we do not differentiate between modifiers of predicates
(adverbials in a narrow sense) and modifiers of other modifier words like
adjectives or adverbs (sometime called qualifiers). These functions are all
subsumed under `advmod`.

~~~ sdparse
Genetically modified food
advmod(modified, Genetically)
~~~

~~~ sdparse
less often
advmod(often, less)
~~~

~~~ sdparse
Where/ADV do/AUX you/PRON want/VERB to/ADP go/VERB later/ADV ?/PUNCT
advmod(go, Where)
advmod(go, later)
~~~

~~~ sdparse
About 200 people came to the party
advmod(200, About)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:11 CET 2020 -->
