---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

An appositional modifier of a noun is a nominal immediately following the first noun that serves to define or modify that noun.
It includes parenthesized examples, as well as defining abbreviations in one of these structures.

~~~ sdparse
Sam , mon frère , est arrivé \n Sam , my brother , arrived
appos(Sam, frère)
~~~

~~~ sdparse
Appelation d'origine contrôlée  ( AOC )
appos(Appelation, AOC)
~~~

In **UD_French-Spoken**, two relations are used: `appos` and [nmod:appos]().

~~~ sdparse
la place Voltaire
nmod:appos(place, Voltaire)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:13 CET 2020 -->
