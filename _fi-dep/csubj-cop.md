---
layout: entry
title:  'csubj:cop'
shortdef : 'clausal copular subject'
---

A *clausal copular subject* (`csubj:cop`) is a clause that acts as the
subject of another, copular clause. As in all copular clauses, the
predicative acts as the head of the clause and hence it is also the
governor of the copular subject. 

<!--The distinction between clauses acting as the copular subject of
another clause and so called necessive structures is discussed in
Section [necessives](#sec-necessives).-->

<!-- fname:csubj-cop.pdf -->
~~~ sdparse
Oli hauskaa käydä teatterissa . \n Was fun to_go to_theatre .
cop(hauskaa-2, Oli-1)
csubj:cop(hauskaa-2, käydä-3)
nmod(käydä-3, teatterissa-4)
punct(hauskaa-2, .-5)
~~~
