---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

`nsubj` relations are used for noun phrases that are the subject of a clause. In most cases these subjects are in the nominative (or construct, which can supersede nominative) case, however in past tenses subjects of transitive verbs are inflected in the oblique.

~~~ sdparse
Ez Şerlok Holmes im, ev jî hevalê min ê ezîz Wetsin e . \n I am Sherlock Holmes  , and this is my dear friend Watson .
nsubj(Şerlok, Ez)
nsubj(Sherlock, I)
~~~
~~~ sdparse
Ez kenîm û min got : ... \n I laughed and I‌ said : ...
nsubj(kenîm, Ez)
nsubj(laughed, I)
nsubj(got, min)
nsubj(said, I‌)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:37 CEST 2020 -->
