---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
---

A coordinating conjunction relation holds between the head conjunct of a coordinate structure and any of the coordinating conjunction involved in the structure. This also includes the first element in paired conjunctions like _ni ... ni_ "nor ... nor". Note that we never treat punctuation as coordinating conjunctions. For more on coordination, see the French [conj]() relation as well as the universal dependency page ([u-dep/conj]()). 

~~~ sdparse
1500 euros par an et par enfant \n 1500 euros per child and per year
cc(an, et)
conj(an, enfant)
~~~

~~~ sdparse
Et ce n'est pas la peine d'insister \n And it is not worth insisting
cc(peine, Et)
~~~
