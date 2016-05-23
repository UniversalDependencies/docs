---
layout: relation
title: 'cop'
shortdef: 'copula'
---

The `cop` relation is used with copulative verbs. The main difference between the general UD schema and the Basque annotation follows form the fact that English *to be* corresponds to several  in Basque verbs. More precisely, *izan* (to be), *egon* (to be), *ukan* (to have), *geratu* (to stay keep), *ibili* (to be).

*Beti ito beldur **nabil** .*

*I **am** always scared to drown .* 

~~~ sdparse
Beti ito beldur nabil . \n always to_drown scared I_am. 

advmod(nabil-4, Beti-1)
advcl(nabil-4, ito-2)
cop(beldur-3, nabil-4)
punct(beldur-3, .-5)
~~~
