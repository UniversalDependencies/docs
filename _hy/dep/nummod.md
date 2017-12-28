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

Dates are annotated as follows: if present the day is the head, the months are _nmod:poss_ and the year are _nummod_:

~~~ sdparse
Նա ծնվել է 1955 թվականի մայիսի 4-ին ։ \n She was born on-4th of-May of-year 1955 .
nummod(ծնվել, 4-ին)
nummod(born, on-4th)
nmod:poss(4-ին, մայիսի)
nmod:poss(մայիսի, թվականի)
nummod(թվականի, 1955-4)
nmod:poss(on-4th, of-May)
nmod:poss(of-May of-year)
nummod(of-year, 1955-16)
~~~

House number in address is attached as `nummod` to the name of the street:

~~~
Դրոյի 48 հասցեում \n in-Address Dro 48
nummod(Դրոյի, 48-2)
nmod(հասցեում, Դրոյի)
nummod(Dro. 48-6)
nmod(in-Address, Dro)
~~~
