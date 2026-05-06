---
layout: relation
title: 'flat:foreign'
shortdef: 'foreign phrases'
udver: '2'
---

The `flat:foreign` relation is a specialization of `flat` used for foreign phrases, which cannot be given a compositional analysis.

Phrases are annotated in a flat, head-initial structure, in which all words in the phrase modify the first one using the <code>flat:foreign</code> label.

~~~ sdparse
μέγαελεων δός μίν
flat:foreign(μέγαελεων, δός)
flat:foreign(μέγαελεων, μίν)
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:46:57 CEST -->
