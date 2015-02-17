---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
---

A dependency is labeled as `dep` when a system is unable to
determine a more precise dependency relation between two words. This
may be because of a weird grammatical construction, a limitation in
software, a parser error, or because of an unresolved long distance 
dependency.

~~~ sdparse
Svårast är att bestämma vilka förändringar som har skett \n The hardest part is to decide which changes have taken place
dep(skett, som)
~~~
