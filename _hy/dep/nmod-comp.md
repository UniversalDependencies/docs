---
layout: relation
title: 'nmod:comp'
shortdef: 'comparative modifier of an adjective or adverb'
udver: '2'
---

This subtype of [nmod]() is used for marking comparative modifier of an [adjective](ADJ) or [adverb](ADV). See also [specific-syntax]() for more detailed discussion.

~~~ sdparse
Արամը եղբորից ավելի խելացի է ։ \n Aram is more smart than-his-brother .
nmod:comp(խելացի, եղբորից)
nmod:comp(smart, than-his-brother)
advmod(խելացի, ավելի)
advmod(smart, more)
~~~

~~~ sdparse
Նա ինձնից շատ է կարդում ։ \n He reads more than-me .
advmod(կարդում, շատ)
nmod:comp(կարդում, ինձնից)
advmod(reads, more)
nmod:comp(reads, than-me)
~~~
