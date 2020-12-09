---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

The `cop` relation is used with copulative verbs. The main difference between the general UD schema and the Basque annotation follows form the fact that English *to be* corresponds to several  in Basque verbs. More precisely, *izan* (to be), *egon* (to be), *ukan* (to have), *geratu* (to stay keep), *ibili* (to be).

*Eizagirre **izan** zen onena Galarretan .*

*Eizagirre **was** the best one in Galarreta .*

~~~ sdparse
Eizagirre izan zen onena Galarretan . \n Eizagirre was one_best_the Galarreta_in .

nsubj(onena-4, Eizagirre-1)
cop(onena-4, izan-2)
aux(onena-4, zen-3)
nmod(onena-4, Galarretan-5)
punct(onena-4, .-6)
~~~

*Beti ito beldur **nabil** .*

*I **am** always scared to drown .*

~~~ sdparse
Beti ito beldur nabil . \n always to_drown scared I_am.

advmod(nabil-4, Beti-1)
advcl(nabil-4, ito-2)
cop(beldur-3, nabil-4)
punct(beldur-3, .-5)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:20 CET 2020 -->
