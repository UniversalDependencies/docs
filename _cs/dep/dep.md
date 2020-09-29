---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
udver: '2'
---

A dependency is labeled as `dep` when a system is unable to
determine a more precise dependency relation between two words.  This
may be because of a weird grammatical construction, a limitation in
software, a parser error, or
because of an unresolved long distance dependency.

Most `dep` instances in the current conversion of the PDT 3.0 data
correspond to the PDT label `ExD`, which marks ellipsis.
The current conversion software cannot produce the annotation fully conforming
to the UD standard and using the [orphan]() relation.

~~~ sdparse
K čemu ovšem , to nebylo jasné . \n For what however , that was-not clear .
dep(jasné, čemu)
dep(clear, what)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:15 CEST 2020 -->
