---
layout: relation
title:  'det'
shortdef : 'determiner'
---

A determiner is the relation between the head of an NP and its determiner. 

~~~ sdparse
Тойға көп кісі жиналыпты . \n Feast-to a_lot people gathered .
subj(жиналыпты-4, кісі-3)
nmod(жиналыпты-4, Тойға-1)
det(кісі-3, көп-2)
punct(жиналыпты-4, .-5)
~~~

~~~ sdparse
Қайсы кітапты жақсы_көресің ? \n Which book prefer-you ?
det(кітапты-2, Қайсы-1)
punct(жақсы_көресің-3, ?-4)
obj(жақсы_көресің-3, кітапты-2)
~~~

Another example:

~~~ sdparse
Барлық шығыстарды бұл одақ көтереді . \n All expenses this union lifts .
det(шығыстарды-2, Барлық-1)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:16 CEST 2020 -->
