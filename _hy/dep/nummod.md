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
nummod(֏-3, 50-4)
nummod(֏-9, 50-10)
~~~

Note that indefinite quantifiers such as _քանի, մի քանի_ “many, several” are tagged [DET]() rather than [NUM](). Therefore their relation to the quantified noun is not `nummod` but [det]():

~~~ sdparse
Արամը մի քանի խնձոր կերավ ։ \n Aram ate some many apples .
det(խնձոր, մի)
fixed(մի, քանի)
det(some, apples)
fixed(some, many)
~~~

## Additional remarks

~~~ sdparse
50 միլիոն դրամ \n 50 million dram
nummod(դրամ, 50-1)
flat(50-1, միլիոն)
nummod(dram, 50-5)
flat(50-5, million)
~~~

~~~ sdparse
ևս 50 հազար դրամ \n another 50 thousand drams
nummod(դրամ, 50-2)
flat(50-2, հազար)
advmod:emph(դրամ, ևս)
nummod(drams, 50-7)
flat(50-7, thousand)
advmod:emph(drams, another)
~~~

~~~ sdparse
առավելագույնը 50 հազար դրամ \n at-most 50 thousand drams
nummod(դրամ, 50-2)
flat(50-2, հազար)
advmod:emph(դրամ, առավելագույնը)
nummod(drams, 50-7)
flat(50-7, thousand)
advmod:emph(drams, at-most)
~~~

Note that the two numeral words in the above example are joined using the [flat]() relation.
Also note that the [intensifier](advmod:emph) _ևս_ is attached to the head of the phrase _(դրամ)_ and not to the number.
This is in accord with the UD guidelines.

Similarly there may be other nodes (such as punctuation) that are attached to the head of the phrase
and they are related to the whole phrase rather than directly to the head noun:

~~~ sdparse
( 9 օր ) \n ( 9 days )
punct(օր, (-1)
nummod(օր, 9-2)
punct(օր, )-4)
punct(days, (-6)
nummod(days, 9-7)
punct(days, )-9)
~~~

~~~ sdparse
քվեարկության վերջին 3 ժամվա ընթացքում \n during last 3 houres of-voting
nummod(ժամվա, 3-3)
case(ժամվա, ընթացքում)
amod(ժամվա, վերջին)
nmod:poss(ժամվա, քվեարկության)
nummod(houres, 3-9)
case(houres, during)
amod(houres, last)
nmod:poss(houres, of-voting)
~~~

## Dates

Dates are annotated as follows: if present the day is the head, the months are _nmod:poss_ and the year are _nummod_:

~~~ sdparse
Նա ծնվել է 1955 թվականի մայիսի 4-ին ։ \n He was born on-4th of-May of-year 1955 .
obl(ծնվել, 4-ին)
nmod:poss(4-ին, մայիսի)
nmod:poss(մայիսի, թվականի)
nummod(թվականի, 1955-4)
obl(born, on-4th)
nmod:poss(on-4th, of-May)
nmod:poss(of-May, of-year)
nummod(of-year, 1955-16)
~~~

## Numbered objects

House number in address is attached as `nummod` to the name of the street:

~~~ sdparse
Դրոյի 48 հասցեում \n in-Address Dro 48
nummod(Դրոյի, 48-2)
nmod(հասցեում, Դրոյի)
nummod(Dro, 48-7)
nmod(in-Address, Dro)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:24 CEST 2020 -->
