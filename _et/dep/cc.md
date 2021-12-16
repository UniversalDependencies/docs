---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

A `cc` is the relation between the first conjunct and the coordinating conjunction delimiting another conjunct.

~~~ sdparse 
Tantsud ja laulud kestsid hommikuni . \n The dances and songs lasted until morning.
conj(Tantsud, laulud)
cc(laulud,ja)
~~~

Coordinating conjunctions that consist of parts separated by coordinated elements are annotated so that the first part is marked with
the type [cc:preconj]() and the second part with `cc` in the regular fashion.

~~~ sdparse 
Töö võib olla nii õnne allikaks kui ka orjastamise abinõuks . \n Work can be a source of happiness or a means of enslavement.
cc:preconj(allikaks, nii)
cc(abinõuks,kui)
advmod(abinõuks,ka)
conj(allikaks,abinõuks)
~~~

Coordinating conjunctions are a closed class of words, and the main conjunctions are as follows:
* _ja_ "and"
* _ning_ "and"
* _kui_ "and", only in _nii ... kui (ka) ... constructions
* _või_ "or"
* _ega_ "or"
* _aga_ "but"
* _kuid_ "but"
* _vaid_ "but"
* (continued ...)

<!-- Interlanguage links updated St lis 3 20:58:43 CET 2021 -->
