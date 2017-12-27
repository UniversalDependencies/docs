---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

A numeric modifier of a noun is any [number](NUM) phrase
that serves to modify the meaning of the noun with a quantity.

~~~ sdparse
Արամը երեք խնձոր կերավ ։ \n Aram ate three apples .
nummod(խնձոր, երեք)
nummod(apples, three)
~~~

~~~ sdparse
Արամը հիսուն դրամ ծախսեց ։ \n Aram spent fifty drams .
nummod(դրամ, հիսուն)
nummod(drams, fifty)
~~~

~~~ sdparse
Արան ծախսեց ֏ 50 ։ \n Aram spent ֏ 50 .
nummod(֏, 50-4)
nummod(֏, 50-9)
~~~

Note that indefinite quantifiers such as _քանի, մի քանի_ “many, several” are tagged [DET]() rather than [NUM](). Therefore their relation to the quantified noun is not `nummod` but [det]():

~~~ sdparse
Արամը մի քանի խնձոր կերավ ։ \n Aram ate some many apples .
det(խնձոր, մի)
fixed(մի, քանի)
det(some, apples)
fixed(some, many)
~~~
