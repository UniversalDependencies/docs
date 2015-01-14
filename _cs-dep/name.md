---
layout: relation
title: 'name'
shortdef: 'personal name'
---

`name` is one of the relations for compounding in UD.
In Czech it is used to join the first (or middle) and the last name of a person.

~~~ sdparse
Prezident Václav Havel včera navštívil Český Krumlov . \n President Václav Havel yesterday visited Český Krumlov .
name(Havel-3, Václav-2)
nmod(Havel-3, Prezident)
amod(Krumlov-7, Český-6)
name(Havel-12, Václav-11)
nmod(Havel-12, President)
amod(Krumlov-16, Český-15)
~~~
