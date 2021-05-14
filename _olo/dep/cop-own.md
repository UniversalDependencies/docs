---
layout: relation
title:  'cop:own'
shortdef : 'copula for posessive clauses'
udver: '2'
---

In Finnish, there is no equivalent for the verb _have_.
Rather, having is expressed using the verb _olla_ (_to be_).
For instance, the meaning of the sentence _I have a pen_ would be
expressed in Finnish by _Minulla on kynä_, literally _"At me is a pen"_.
These possessive clauses are analyzed as a subtype to copula clauses,
making the owner (_minulla_, _at me_ in the previous example) the head,
while the copula verb is marked with relation **cop:own** distinguising
possessive clauses from typical copula clauses (_Minä olen ihminen_, _I am a human_)
as well as existential clauses (_Pihalla on auto_, _There is a car in the yard_). 

<!-- fname:cop-own.pdf -->
~~~ sdparse
Minulla on kynä . \n At_me is a_pen .
cop:own(Minulla-1, on-2)
nsubj:cop(Minulla-1, kynä-3)
punct(Minulla-1, .-4)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:59 CEST 2021 -->
