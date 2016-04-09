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

Most `dep` instances in the current conversion of the PDT 3.0 data
correspond to the PDT label `ExD`, which marks ellipsis.
The current conversion software cannot produce the annotation conforming
to the UD standard and using the [remnant]() relation.

~~~ sdparse
А к чему - было не понятно . \n And for what, it was-not clear .
dep(понятно, чему)
dep(clear, what)
~~~
