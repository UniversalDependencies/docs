---
udver: '2'
layout: relation
title: 'aux'
shortdef: 'auxiliary'
---

An `aux` (auxiliary) of a clause is a function word associated (a verb) with a verbal predicate that expresses categories such as tense, mood, aspect, voice or evidentiality. In German this includes verbs sein and haben when they indicate past tense, verb werden when it indicates future tense or a poosibility, as well as modal verbs. 

~~~ sdparse
Ich habe es geschafft . \n I made it .
aux(geschafft, habe)
nsubj(geschafft, Ich)
obj(geschafft, es)
~~~

~~~ sdparse
Sie ist gegangen . \n She has gone .
aux(gegangen, ist)
~~~

~~~ sdparse
Er wird kommen . \n He will come .
aux(kommen, wird)
~~~

~~~ sdparse
Das Kind kann sehr gut singen . \n The child can sing very well .
aux(singen, kann)
~~~

Note that modal verbs can also be full verbs, in which case they are not associated with another infinitive verb.

~~~ sdparse
ROOT Ich kann nicht mehr . \n I can't any more .
root(ROOT, kann)
nsubj(kann, ich)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:19 CEST 2020 -->
