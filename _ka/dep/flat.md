---
layout: relation
title: 'flat'
shortdef: 'flat multiword expression'
udver: '2'
---

The `flat` relation is one of three relations for multiword expressions multiword expressions (MWEs) (the other two being [fixed](_ka/dep/fixed) and [compound](_ka/dep/compound)). It used for names and dates and foreign phrases which cannot be given a compositional analysis. 

The following specialisations of `flat` are used in Georgian:
* [flat:name](_ka/dep/flat-name) for names.

~~~ sdparse
ნოდარ ერგაძე მეგობრებს ნიჭით ჩამოუვარდებოდა. \n 'Nodar Ergadze was inferior to his friends in talent.'
flat:name(ნოდარ, ერგაძე)
~~~

* [flat:foreign](_ka/dep/flat-foreign) for foreign phrases.

~~~ sdparse
avocat défenseur
flat:foreign(avocat, défenseur)
~~~
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:55 CET -->
