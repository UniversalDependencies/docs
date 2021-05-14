---
layout: relation
title: 'obl:freq'
shortdef: 'oblique with frequentative modality'
udver: '2'
---

The _obl:freq_ relation is used for frequentative adverbial clauses.
See also `advmod:freq`.

~~~ sdparse
Колма шит трудясь Макарня , апак ваймак эрь шиня . \n Makarnya worked hard for three days, without resting, every day.
nummod(шит-2, Колма-1)
obl:tmod(трудясь-3, шит-2)
nsubj(трудясь-3, Макарня-4)
advcl:mcl(трудясь-3, ваймак-7)
obl:freq(трудясь-3, шиня-9)
obl:freq(worked_hard-3, day-9)
det(шиня-9, эрь-10)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:17 CEST 2021 -->
