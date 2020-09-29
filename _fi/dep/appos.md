---
layout: relation
title:  'appos'
shortdef : 'apposition'
---

An *apposition* (`appos`) is a grammaticalized, paradigmatic addition
(usually a noun phrase), which has the same referent as its head word,
and the same grammatical function 
(see ISK [§1059](http://scripta.kotus.fi/visk/sisallys.php?p=1059)). 
Also structures with a _supporting noun_ 
(see ISK [§567](http://scripta.kotus.fi/visk/sisallys.php?p=567)) are
considered appositional. Appositional structures and the closely
related _appellation modifiers_ are discussed in detail in
the document on
[specific syntactic constructions in Finnish](http://universaldependencies.org/fi/overview/specific-syntax.html).

<!-- fname:appos1.pdf -->
~~~ sdparse
Professori , Matti Tamminen , luennoi tänään . \n The_professor , Matti Tamminen , lectures today .
appos(Professori-1, Tamminen-4)
punct(Tamminen-4, ,-2)
punct(Tamminen-4, ,-5)
name(Tamminen-4, Matti-3)
nsubj(luennoi-6, Professori-1)
advmod(luennoi-6, tänään-7)
punct(luennoi-6, .-8)
~~~

<!-- fname:appos2.pdf -->
~~~ sdparse
Kirjassa Putkinotko on mielenkiintoinen juoni . \n In_the_book Putkinotko is interesting plot .
appos(Kirjassa-1, Putkinotko-2)
nmod(on-3, Kirjassa-1)
nsubj(on-3, juoni-5)
amod(juoni-5, mielenkiintoinen-4)
punct(on-3, .-6)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:09 CEST 2020 -->
