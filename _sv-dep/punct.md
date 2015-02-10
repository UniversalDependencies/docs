---
layout: relation
title: 'punct'
shortdef: 'punctuation'
---

This is used for any piece of punctuation in a clause, if punctuation is being retained in the typed dependencies. By default, punctuation is not retained in the output. More discussion on punctuation can be found on the universal dependency page ([u-dep/punct]()).

~~~ sdparse
Och alla vinsterna och skattefria ! \n And all profits are tax-free !
punct(skattefria, !)
~~~
