---
udver: '2'
layout: relation
title: 'nmod'
shortdef: 'noun modifier'
---

The main use of `nmod` is for nouns that modify other nouns. This is usually the case when the noun is a genitive modifier or when it is part of a prepositional phrase that modifies that noun.

~~~ sdparse
Die Anzahl der Teilnehmer \n The number of participants
nmod(Anzahl, Teilnehmer)
~~~

~~~ sdparse
Das Haus mit dem großen Garten wurde schon verkauft . \n The house with the big garden has already been sold .
nmod(Haus, Garten)
~~~

Another use of `nmod` is when a noun modifies an adjective in constructions similar to the following:

~~~ sdparse
Die mit dem Thunfisch verwandten Arten \n The species related to the tuna
nmod(verwandten, Thunfisch) 
~~~

Finally, `nmod` can also be used when a noun directly modifies an adverb.

~~~ sdparse
drei Monate später \n three months later
nmod(später, Monate)
~~~
<!-- Interlanguage links updated St lis 3 20:58:57 CET 2021 -->
