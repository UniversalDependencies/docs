---
layout: relation
title: 'dislocated:csubj'
shortdef: 'dislocated clausal subject'
udver: '2'
---

Through different subtypes of [`dislocated`](u-dep/dislocated) we more precisely identify which argument has been dislocated in the sentence and how it is realized in this position (nominally or clausally). This information is not directly retrievable otherwise from "basic" dependencies, since the `dislocated` relation always depends on the local head. It is also kept distinct from the use of `dislocated` for topicalisations and similar phenomena, which are not directly related to an argument expressed in the matrix clause.

In the translation of the example, the bold passage corresponds to the dislocated element, and the underlined passage to the dislocating one.

~~~ sdparse
contenebatur qualiter ipse Racchisi presbitero , pro anime sue remedium , offeruerat Deo et ipsius ecclesie sancte GAP Marie portione sua de res illa qui fuit de iura parentorum suorum , omnia et ex omnibus terris , vineis , silvis , virgareis , pratis , pascuis , cultum vel incultum , suam portionem in integrum offeruerat Deo et eidem ecclesie sancte Marie in prefinito .
dislocated:csubj(contenebatur,offeruerat-56)
csubj(contenebatur,offeruerat-12)
~~~

'There it was defined <u>how *presbyter* Ratchis himself, for the cure of his soul, offered to God and His holy church of Saint Mary his own portion of that property</u> which belonged to his relatives by law, everything and every piece of land, wineyards, woods, osiers, lawns, meadows, tended and untended - **his portion he offered integrally to God and His church of Saint Mary as determined before**.' (LLCT)


<u>Note:</u> in general, the dislocated element does not need to be of the same form as the corresponding argument appearing in the matrix clause, and there can be alternation between clausal and nominal realisations. The subtype of `dislocated` depends on the type of the dislocated element, not on that of the argument in the matrix clause.  


<!-- Interlanguage links updated Út 9. května 2023, 20:04:14 CEST -->
