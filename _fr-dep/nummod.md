---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
---

A numeric modifier of a noun is any number phrase that serves to
modify the meaning of the noun with a quantity.

~~~ sdparse
Sam mangea 3 bonbons \n Sam ate 3 candies
nummod(bonbons, 3)
~~~

~~~ sdparse
Il perdit presque 13 pourcent  \n He lost almost 14 percent
nummod(pourcent, 13)
~~~

Dates are annotated as follows: if present the month is the head, the day is _nummod_, and the year is _nmod_

~~~ sdparse
Elle est née le 12 décembre 2011  \n She was born on December 12 2011
nmod(née, décembre)
nummod(décembre, 12)
nmod(décembre, 2011)
det(27, le)
~~~
