---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
---

This document is a placeholder for the language-specific documentation
for `dep`.


~~~ sdparse
ROOT Jos mafia  ! \n Down with_the_mafia ! 
root(ROOT-1, Jos-2)
nsubj(Jos-2, mafia-3)
punct(Jos-2, !-4)
~~~

~~~ sdparse
ROOT Poate că întârzie . \n He may be late .
root(ROOT-1, Poate-2)
csubj(Poate-2, întârzie-4)
mark(întârzie-4, că-3)
punct(Poate-2, .-5)
~~~
