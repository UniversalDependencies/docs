---
layout: relation
title: 'flat'
shortdef: 'flat multiword expression'
udver: '2'
---

The `flat` relation is one of three relations for multiword expressions multiword expressions (MWEs) in UD 
(the other two being [fixed]() and [compound]()). It used for names and dates.

 It is not used to replace the usual relations in a phrasal or clausal name, like titles of books, where the actual dependencies should be preserved. 
 An exception is for foreign phrases which cannot be given a compositional analysis. 
 
 ~~~ sdparse
1 dicembre 2016
flat(1, dicembre)
flat(1, 2016)
~~~

The following specialisations of `flat` are used in Italian:
* [flat:name](flat-name) for names.
* [flat:foreign](flat-foreign) for foreign phrases.
<!-- Interlanguage links updated Út zář 29 20:43:19 CEST 2020 -->
