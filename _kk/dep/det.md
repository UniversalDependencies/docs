---
layout: relation
title:  'det'
shortdef : 'determiner'
udver: '2'
---

A determiner is the relation between the head of a nominal and its determiner.

~~~ sdparse
Тойға көп кісі жиналыпты . \n Feast-to a_lot people gathered .
nsubj(жиналыпты-4, кісі-3)
det(кісі-3, көп-2)
obl(жиналыпты-4, Тойға-1)
punct(жиналыпты-4, .-5)
~~~

~~~ sdparse
Қайсы кітапты жақсы_көресің ? \n Which book prefer-you ?
det(кітапты-2, Қайсы-1)
obj(жақсы_көресің-3, кітапты-2)
punct(жақсы_көресің-3, ?-4)
~~~

Another example:

~~~ sdparse
Барлық шығыстарды бұл одақ көтереді . \n All expenses this union lifts .
det(шығыстарды-2, Барлық-1)
~~~

<!-- Interlanguage links updated St lis 3 20:58:50 CET 2021 -->
