---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
---

A dependency is labeled as `dep` when a system is unable to
determine a more precise dependency relation between two words.  This
may be because of a weird grammatical construction, a limitation in
software (e.g. the Stanford Dependency conversion), a parser error, or
because of an unresolved long distance dependency.

~~~ sdparse
Fica assim totalmente sinalizado o percurso
dep(Fica, sinalizado)
~~~

In this example `dep` is used due the ambiguity of _sinalizado_  between adjective and verb participle.
<!-- Interlanguage links updated Út zář 29 20:43:16 CEST 2020 -->
