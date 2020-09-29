---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

A coordinating conjunction relation holds between the head conjunct of a coordinate structure and any of the coordinating conjunction involved in the structure. This also includes the first element in paired conjunctions like _både ... och_ "both ... and" and _antingen ... eller_ "either ... or". From v2, coordinating conjunctions are attached to the immediately following conjunct. Note that we never treat punctuation as coordinating conjunctions.
For more on coordination, see the [conj]() relation. 

~~~ sdparse
1500 kr per barn och år \n 1500 kr per child and year
cc(år, och)
conj(barn, år)
~~~

~~~ sdparse
både äpplen och päron \n both apples and pears
cc(äpplen, både)
cc(päron, och)
conj(äpplen, päron)
~~~

~~~ sdparse
äpplen , apelsiner och päron \n apples , oranges and pears
punct(apelsiner, ,)
cc(päron, och)
conj(äpplen, päron)
conj(äpplen, apelsiner)
~~~

~~~ sdparse
Och du har inte bara en chans \n And you don't have just one chance
cc(har, Och)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:45 CEST 2020 -->
