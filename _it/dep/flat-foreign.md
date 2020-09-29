---
layout: relation
title: 'flat:foreign'
shortdef: 'foreign phrases'
udver: '2'
---

The `flat:foreign` relation is a specialization of `flat` used for foreign phrases, which cannot be given a compositional analysis.

Phrases are annotated in a flat, head-initial structure, in which all words in the phrase modify the first one using the <code>flat:foreign</code> label.

~~~ sdparse
pro capite
flat:foreign(pro, capite)
~~~

~~~ sdparse
vertical work station
flat:foreign(vertical, work)
flat:foreign(vertical, station)
~~~

~~~ sdparse
c' est très facile
flat:foreign(c', est)
flat:foreign(c', très)
flat:foreign(c', facile)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:23 CEST 2020 -->
