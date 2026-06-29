---
layout: relation
title:  'discourse'
shortdef : 'discourse element'
udver: '2'
---

This is used for interjections and other discourse particles and elements (which are not clearly linked to the structure of the sentence, except in an expressive way). We generally define this to include: interjections (*ωχ*, *αχά*) and fillers (*εε*, *α*).

~~~ sdparse
Ουφ , έχασα στο φεύγα :(
discourse(έχασα, :()
discourse(έχασα, Ουφ)
~~~

The particle “να” is also used in an elliptical structure of “είναι” (to be), serving to point out or draw attention to something. This structure allows for two possibilities: expression with either the nominative or the accusative case. In both cases, the particle “να” is morphologically classified as [PART]() and syntactically as discourse, e.g., Να τον φίλο στο παλάτι “There’s the friend in the palace.”

~~~ sdparse
Να τον φίλο στο παλάτι
root(ROOT, παλάτι)
discourse(παλάτι, να)
nsubj(παλάτι, φίλο)
~~~




<!-- Interlanguage links updated Po 29. června 2026, 18:12:19 CEST -->
