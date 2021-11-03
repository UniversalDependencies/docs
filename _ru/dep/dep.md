---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
udver: '2'
---

A dependency is labeled as `dep` when a system or an expert is unable to
determine a more precise dependency relation between two words.  This
may be because of a weird grammatical construction, a limitation in
software, a parser error, or
because of an unresolved long distance dependency.

~~~ sdparse
Зарплату обещанную не платят , с пьяницами . \n The promised salary is not paid , with drunkards .
dep(платят, пьяницами)
dep(paid, drunkards)
~~~
<!-- Interlanguage links updated St lis 3 20:58:49 CET 2021 -->
