---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a predicative or clausal complement without its own subject.
The reference of the subject is necessarily determined by an argument external to the `xcomp` (normally by the object of the next higher clause, if there is one, or else by the subject of the next higher clause).
These complements are always non-finite, and they are complements (arguments of the higher verb or adjective) rather than adjuncts/modifiers.
The name `xcomp` is borrowed from Lexical-Functional Grammar.

~~~ sdparse
Il dit que tu aimes nager \n He says that you like to swim
xcomp(aimes, nager)
~~~

~~~ sdparse
Je compte y retourner \n I am planning to go back there
xcomp(compte, retourner)
~~~

~~~ sdparse
Je le considère comme un ami \n I consider him as a friend
xcomp(considère, ami)
~~~

Here are examples from **UD_French-Spoken**:

~~~ sdparse
j' aimerais enseigner dans un établissement public \n I'd like to teach in a public school
xcomp(aimerais, enseigner)
~~~

~~~ sdparse
on pourrait imaginer des mélanges \n we could imagine some mixes
xcomp(pourrait, imaginer)
~~~

N.B.: For causative constructions (_Marie fait repeindre les murs à Jean-Pierre._ etc.) see the [specific syntax](http://universaldependencies.org/fr/specific-syntax.html) page.
<!-- Interlanguage links updated Pá kvě 14 11:09:23 CEST 2021 -->
