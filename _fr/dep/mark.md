---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

A marker is the word introducing a clause subordinate to another clause.
The marker is a dependent of the subordinate clause head.

~~~ sdparse
Il dit que tu aimes nager \n He says that you like to swim
mark(aimes, que)
~~~

~~~ sdparse
S' il pleut , on sera mouillé \n If it rains, we will get wet
mark(pleut, S')
~~~

Prepositions introducing infinitives are also analyzed as `mark`.

~~~ sdparse
Il faut arriver tôt pour avoir de la place \n One needs to get there early to have a seat
mark(avoir, pour)
~~~

Here are some examples from **UD_French-Spoken**:

~~~ sdparse
il faudra que les parents l' acceptent \n the parents will have to accept it
mark(acceptent,que)
~~~

~~~ sdparse
on n' arrive plus à maintenir des clientèles \n we can't manage to keep the customers anymore
mark(maintenir,à)
~~~

Note that in the phrase _dès que_, _que_ is considered as a marker by **UD_French-Spoken** (and not analyzed with [fixed]() as it may be done in other corpora of the French treebank).
_dès_ is thus analyzed as a preposition, dependent of the finite verb of the clause.
The fact that the clause following the _dès_ can commute with a simple nominal phrase justifies this analysis.
For instance, in the following example, _que son mari est arrivé_ (in _dès que son mari est arrivé_) can commute with _son arrivée_ (_dès son arrivée_).

~~~ sdparse
Muriel a quitté la pièce dès que son mari est arrivé . \n Muriel left the room as soon as her husband arrived.
mark(arrivé,que)
mark(arrivé,dès)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:20 CEST 2020 -->
