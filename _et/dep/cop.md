---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---
A copula is the relation between the complement of a copular verb and the copular verb. 'olema' is the only copular verb in Estonian UD.
The predicative is the head of the copular clause, and also the governor of the cop dependency. As it is hard to distinguish copular clauses from existential clauses almost all clauses with _olema_ ("be") are copular clauses. _olema_ has POS tag AUX and it can not have dependents.

~~~ sdparse
Maja on suur \n The house is big 
cop(suur,on)
cop(big,is)
~~~

~~~ sdparse
Maja ei ole suur \n The house is not big 
cop(suur,ole)
cop(big,is)
aux(suur,ei)
aux(big,not)
~~~

~~~ sdparse
Suhted on olnud teravad \n Relations have been sharp
cop(teravad,olnud)
cop(sharp,been)
aux(teravad,on)
aux(sharp,have)
~~~

~~~ sdparse
Ta oli sel õhtul kodus \n He was home that night
cop(kodus,oli)
cop(home,was)
~~~

<!-- Interlanguage links updated St lis 3 20:58:47 CET 2021 -->
