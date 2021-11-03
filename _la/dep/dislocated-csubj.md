---
layout: relation
title: 'dislocated:csubj'
shortdef: 'dislocated clausal subject'
udver: '2'
---

Through different subtypes of [`dislocated`](u-dep/dislocated) we more precisely identify which element has been dislocated in the sentence. This information is not directly retrievable otherwise from "basic" dependencies, since the `dislocated` relation always depends on the local head.

In the translation of the example, the bold passage corresponds to the dislocated element, and the underlined passage to the dislocating one.

~~~ sdparse
contenebatur qualiter ipse Racchisi presbitero , pro anime sue remedium , offeruerat Deo et ipsius ecclesie sancte GAP Marie portione sua de res illa qui fuit de iura parentorum suorum , omnia et ex omnibus terris , vineis , silvis , virgareis , pratis , pascuis , cultum vel incultum , suam portionem in integrum offeruerat Deo et eidem ecclesie sancte Marie in prefinito .
dislocated:csubj(contenebatur,offeruerat-56)
csubj(contenebatur,offeruerat-12)
~~~

'There it was defined <u>how *presbyter* Ratchis himself, for the cure of his soul, offered to God and His holy church of Saint Mary his own portion of that property</u> which belonged to his relatives by law, everything and every piece of land, wineyards, woods, osiers, lawns, meadows, tended and untended - **his portion he offered integrally to God and His church of Saint Mary as determined before**.' (LLCT)
<!-- Interlanguage links updated St lis 3 20:58:52 CET 2021 -->
