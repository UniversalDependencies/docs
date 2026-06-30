---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal modifiers. They depend either
on another noun (group “noun dependents”) or on a predicate (group
“non-core dependents of clausal predicates”).

`nmod` is a [noun](u-pos/NOUN) (or noun phrase) functioning as a
non-core (oblique) argument or adjunct.
This means that it functionally corresponds to an adverbial when it attaches to a verb, adjective or other adverb.
But when attaching to a noun, it corresponds to an attribute, or genitive complement.

~~~ sdparse
οι άθλοι του Ηρακλή.Gen
nmod(άθλοι, Ηρακλή.Gen)
~~~

~~~ sdparse
γεμάτη λαχτάρα κρεμιέται
nmod(γεμάτη, λαχτάρα)
advcl(κρεμιέται, γεμάτη)
~~~
The `nmod` relation can be further specified by the [case]() label assigned to prepositions.



~~~ sdparse
είδα τις ανταποκρίσεις για το συμβάν
nmod(ανταποκρίσεις, συμβάν)
case(συμβάν, για)
~~~

In SMG the following elliptical structure is common, where the head of the prepositional phrase is omitted, e.g., Ο φτωχός μια φουρνιά κουτσούβελα “The poor man with a bunch of chicks”

~~~ sdparse
Ο φτωχός μια φουρνιά κουτσούβελα
root(ROOT, φτωχός)
nmod(φτωχός, φουρνιά)
nmod(φουρνιά, κουτσούβελα)
~~~




<!-- Interlanguage links updated Út 30. června 2026, 11:00:16 CEST -->
