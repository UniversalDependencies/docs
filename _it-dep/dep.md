---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
---

A dependency is labeled as <code>dep</code> when a system is unable to determine a more precise dependency relation between two words. This may be because of a weird grammatical construction, a limitation in software, a parser error, or because of an unresolved long distance dependency. This is also the case of "broken" sentences like the one below.

~~~ sdparse
è opportuno estendere tale programma vista la necessità di :
dep(necessità, di)
~~~
