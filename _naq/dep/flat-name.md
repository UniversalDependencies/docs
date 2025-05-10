---
layout: relation
title: 'flat:name'
shortdef: 'names'
udver: '2'
---

The `flat:name` relation is a specialization of `flat` used for names.

~~~ sdparse
Goerge Fennemanni
flat:name(Goerge, Fennemanni)
~~~

Names are annotated in a flat, head-initial structure, in which all words in the name modify the first one using the `flat:name` label. This also works for prepositions or determiners and numerals that are part of the names.

~~~ sdparse
Formula 1
flat:name(Formula, 1)
~~~

Words joined by `flat:name` should all be part of a minimal noun phrase; otherwise regular syntactic relations should be used. For names with clear syntactic modification structure, the dependencies should reflect the syntactic modification structure using regular syntactic relation.

~~~ sdparse
Soviet Union
adj(Union, Soviet)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:34 CEST -->
