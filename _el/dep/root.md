---
layout: relation
title: 'root'
shortdef: 'root'
---

The `root` grammatical relation points to the root of the sentence. A
fake node `ROOT` is used as the governor. The `ROOT` node is indexed
with 0, since the indexing of real words in the sentence starts at 1.

~~~ sdparse
ROOT Θα αποσυρθούν τρεις υπογραφές .
root(ROOT, αποσυρθούν)
~~~

~~~ sdparse
ROOT Το αίσιον τέλος .
root(ROOT, τέλος)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:39 CET 2020 -->
