---
layout: relation
title: 'mark'
shortdef: 'marker'
---

A marker is the word introducing a clause subordinate to another clause. The marker is a dependent of the subordinate clause head. 

~~~ sdparse
Il dit que tu aimes nager \n He says that you like to swim
mark(aimes, que)
~~~

~~~ sdparse
S' il pleut, on sera mouillé \n If it rains, we will get wet
mark(pleut, S')
~~~

Prepositions introducing infinitives are also analyzed as `mark`.

~~~ sdparse
Il faut arriver tôt pour avoir de la place \n One needs to get there early to have a seat
mark(avoir, pour)
~~~
