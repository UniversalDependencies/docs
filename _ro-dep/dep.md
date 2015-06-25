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

~~~ sdparse
ROOT Marș afară ! \n Shoo out !
root(ROOT-1, Marș-2)
advmod(Marș-2, afară-3)
punct(Marș-2, !-4)
~~~

~~~ sdparse
ROOT Maria este sora mea . \n Mary is sister-the my.
root(ROOT-1, sora-4)
cop(sora-4, este-3)
nsubj(sora-4, Maria-2)
amod(sora-4, mea-5)
punct(sora-4, .-6)
~~~


