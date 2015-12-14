---
layout: relation
title:  'advcl'
shortdef : 'adverbial clause modifier'
---

*Adverbial clause modifiers* (`advcl`) are subordinate clauses that
are not complements. 

Note that unless there is a separate subject for the "subordinate" clause, 
the subject will be the same as for the main clause, but is not directly connected. 

~~~ sdparse
Айгүл санап біткеннен кейін айналасына қарады . \n Aygül counting finishing-from after around looks . 
advcl(қарады-6, санап-2)
aux(санап-2, біткеннен-3)
case(біткеннен-3, кейін-4)
subj(қарады-6, Айгүл-1)
obj(қарады-6, айналасына-5)
~~~

Comparison:

We also use `advcl` for the comparator in comparison constructions like "X is bigger 
than Y", in Turkic, the "than Y" is in the ablative case and this depends on the adjective X. 


