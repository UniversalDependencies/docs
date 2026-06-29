---
layout: relation
title: 'flat'
shortdef: 'flat multiword expression'
udver: '2'
---

The `flat` relation is one of three relations for multiword expressions multiword expressions (MWEs) (the other two being [fixed](_oge/dep/fixed) and [compound](_oge/dep/compound)). It used for names and dates and foreign phrases which cannot be given a compositional analysis. 

The following specialisations of `flat` are used in Georgian:
* [flat:name](_oge/dep/flat-name) for names.

~~~ sdparse
წმიდა მოწამე აბო ტფილელის ცხოვრება და მოწამეობა. \n 'The Life and Martyrdom of the Holy Martyr Abo of Tbilisi.'
flat:name(აბო, ტფილელის)
~~~

* [flat:foreign](_oge/dep/flat-foreign) for foreign phrases.

~~~ sdparse
μέγαελεων δός μίν
flat:foreign(μέγαελεων, δός)
flat:foreign(μέγαελεων, μίν)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:59:53 CEST -->
