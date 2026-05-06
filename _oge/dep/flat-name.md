---
layout: relation
title: 'flat:name'
shortdef: 'names'
udver: '2'
---

The `flat:name` relation is a specialization of `flat` used for names. Names are annotated in a flat, head-initial structure, in which all words in the name modify the first one using the <code>flat:name</code> label. Words joined by <code>flat:name</code> should all be part of a minimal noun phrase; otherwise regular syntactic relations should be used. For organization names with clear syntactic modification structure, the dependencies should reflect the syntactic modification structure using regular syntactic relation. 


~~~ sdparse
გრიგოლ ხანძთელის ცხოვრება. \n 'The Life of Grigol of Khandzta.'
flat:name(გრიგოლ, ხანძთელის)
nmod(ცხოვრება, გრიგოლ)
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:46:59 CEST -->
