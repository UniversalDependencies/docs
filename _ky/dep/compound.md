---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The ``compound`` relation is one of three relations
for multi-word expressions (MWEs) (the other two being [fixed]() and [flat]()).

In Kyrgyz ``compound`` relation is used mainly noun-verb compounds, and numbers.


``compound`` is also used for numbers, where head is the right-most number.

~~~ sdparse
500 миллион \n 500 million.
compound(миллион, 500 )
~~~

~~~ sdparse
35 млн сом  \n 35 million soms.
compound(млн , 35 )
nummod(сом,млн  )
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:11 CEST -->
