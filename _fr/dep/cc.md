---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

A coordinating conjunction relation holds between the head conjunct of a coordinate structure and any of the coordinating conjunction involved in the structure. This also includes the first element in paired conjunctions like _ni ... ni_ "nor ... nor". Note that we never treat punctuation as coordinating conjunctions. For more on coordination, see the French [conj]() relation as well as the universal dependency page ([u-dep/conj]()). 

~~~ sdparse
1500 euros par an et par enfant \n 1500 euros per child and per year
cc(enfant, et)
conj(an, enfant)
~~~

~~~ sdparse
Et ce n'est pas la peine d'insister \n And it is not worth insisting
cc(peine, Et)
~~~

FrenchSpoken also uses the `cc` relation. However the standard `conj` relation is not used anymore and has been replaced by a few subrelations (see [conj]() for more details). 
 
~~~ sdparse
et j'ai vraiment mal vécu ça \n and I really didn't live this well
cc(vécu, et)
~~~
 
~~~ sdparse
nous avons attendu sept ou huit heures dans la gare \n we waited for seven or eight hours at the station
conj:coord(sept, huit)
cc(huit, ou)
~~~ 

In the following example, _c'est-à-dire_ is the coordinating conjunction in a [conj:appos]() relation :

~~~ sdparse
La fille du cousin du père de Zoé, c'est-à-dire la cousine de Zoé, est astronaute. \n The daughter of Zoe's dad's cousin, in other words Zoe's cousin, is an astronaut.
conj:appos(fille,cousine)
cc(cousine,c'est-à-dire)
~~~ 

