---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---

This is used for any piece of punctuation in a clause, regardless of its function. The punctuation mark is attached to the head of the phrase or clause to which it belongs unless this introduces a non-projective dependency. More discussion on punctuation can be found on the universal dependency page ([u-dep/punct]()).

~~~ sdparse
Och alla vinsterna och skattefria ! \n And all profits are tax-free !
punct(skattefria, !)
~~~

~~~ sdparse
Om det regnar , blir man blöt . \n If it rains , one gets wet .
punct(regnar, ,)
punct(blir, .)
~~~
<!-- Interlanguage links updated St lis 3 20:59:09 CET 2021 -->
