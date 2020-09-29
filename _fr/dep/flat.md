---
layout: relation
title: 'flat'
redirect_from: "fr/dep/name.html"
shortdef: 'name'
udver: '2'
---

The `flat` relation is one of the three relations for MWE in UD (together with [compound]() and [fixed]()).
It is used for proper nouns constituted of multiple nominal elements.
For example, `flat` would be used between the words of _Hillary Rodham Clinton, New York,_ or _Carl XVI Gustaf_ but not to replace the usual relations in a phrasal or clausal name like _The king of Belgium_ or the novels _The Lord of the Rings_ and _Captured By Aliens_.

Words joined by `flat` should all be part of a minimal noun phrase;
otherwise regular syntactic relations should be used.
This is basically similar to the treatment of noun compounds with [compound](), except that in many cases parts of the name may be another nominal element such as an adjective _(United Airlines)_.

In general, names are annotated in a flat, head-initial structure, in which all words in the name modify the head using the `flat` label.

~~~ sdparse
Cervélo Test Team
name(Team, Cervélo)
name(Team, Test)
~~~

For names with a clear syntactic modification structure, the dependencies should instead reflect the syntactic modification structure using regular syntactic relations, as in:

~~~ sdparse
<< La Belle et la Bête >> \n The Beauty and the Beast
conj(Belle, Bête)
cc(Belle, et)
det(Belle, La)
det(Bête, la)
~~~

<!-- Interlanguage links updated Út zář 29 20:31:53 CEST 2020 -->
