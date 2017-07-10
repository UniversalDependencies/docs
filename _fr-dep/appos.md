---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

An appositional modifier of a noun is a nominal immediately following
the first noun that serves to define or modify that noun. It includes
parenthesized examples, as well as defining abbreviations in one of
these structures.

~~~ sdparse
Sam , mon frère , est arrivé \n Sam , my brother , arrived
appos(Sam, frère)
~~~

~~~ sdparse
Appelation d'origine contrôlée  ( AOC )
appos(Appelation, AOC)
~~~

In FrenchSpoken we don't use the `appos` relation anymore. Instead we have two subrelations [nmod:appos]() and [conj:appos]().
The `nmod:appos` relation is used for appositions which modify nominal elements.

~~~ sdparse
la place Voltaire 
nmod:appos(place, Voltaire)
~~~

The `conj:appos` relation is used for appositions that respect the prosody of list (the elements of such an appositions are in the same paradigm):

~~~ sdparse
Sam , mon frère , est arrivé . \n Sam, my brother, arrived.
conj:appos(Same, frère)
~~~
