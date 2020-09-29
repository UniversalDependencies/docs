---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

A numeric modifier of a noun is any number phrase that serves to
modify the meaning of the noun with a quantity.

~~~ sdparse
Sam mangea 3 bonbons \n Sam ate 3 candies
nummod(bonbons, 3)
~~~

~~~ sdparse
Il perdit presque 13 pourcent  \n He lost almost 13 percent
nummod(pourcent, 13)
~~~

Dates are annotated as follows:

~~~ sdparse
Elle est née le 12 décembre 2011  \n She was born on December 12 2011
nmod(née, 12)
nmod(12,décembre)
nmod(décembre, 2011)
det(12, le)
~~~

Here are some examples from **UD_French-Spoken**:

~~~ sdparse
et j'ai dit je gagne trois cents francs par mois /n and I said I earn three hundreds francs a month
nummod(francs,trois)
nummod(trois,cents)
~~~

~~~ sdparse
je suis né à Alger en 1943 \n I was born in Algiers in 1943
nummod(né,1943)
case(1943,en)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:38 CEST 2020 -->
