---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

A coordinating conjunction relation holds between the head conjunct of a coordinate structure and any of the coordinating conjunction involved in the structure.
This also includes the first element in paired conjunctions like _ni_…_ni_ (_neither_…_nor_).
Note that we never treat punctuation as coordinating conjunctions.
For more on coordination, see the French [conj]() relation as well as the universal dependency page ([u-dep/conj]()).

~~~ sdparse
1500 euros par an et par enfant \n 1500 euros per child and per year
cc(enfant, et)
conj(an, enfant)
~~~

~~~ sdparse
Et ce n'est pas la peine d'insister \n And it is not worth insisting
cc(peine, Et)
~~~

~~~ sdparse
et j'ai vraiment mal vécu ça \n and I really didn't live this well
cc(vécu, et)
~~~

~~~ sdparse
nous avons attendu sept ou huit heures dans la gare \n we waited for seven or eight hours at the station
conj(sept, huit)
cc(huit, ou)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:16 CET 2020 -->
