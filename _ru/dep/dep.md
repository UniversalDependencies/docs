---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
---

A dependency is labeled as `dep` when a system is unable to
determine a more precise dependency relation between two words.  This
may be because of a weird grammatical construction, a limitation in
software, a parser error, or
because of an unresolved long distance dependency.

~~~ sdparse
А к чему – было не понятно . \n And for what – it-was not clear .
dep(понятно, чему)
dep(clear, what)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:28 CEST 2020 -->
