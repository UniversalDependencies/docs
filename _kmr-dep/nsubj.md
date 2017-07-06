---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

`nsubj` relations are used for noun phrases that are the subject of a clause. In most cases these subjects are in the nominative (or construct, which can supersede nominative) case, however in past tenses subjects of transitive verbs are inflected in the oblique.

~~~ sdparse
Ez Şerlok Holmes im, ev jî hevalê min ê ezîz Wetsin e . \n I am Sherlock Holmes  , and this is my dear friend Watson .
nsubj(Şerlok, ez)
nsubj(Sherlock, I)
~~~
~~~ sdparse
Ez kenîm û min got : ... \n I laughed and I said : ...
nsubj(kenîn, ez)
nsubj(laugh, I)
nsubj(gotin, min)
nsubj(say, me)
~~~
