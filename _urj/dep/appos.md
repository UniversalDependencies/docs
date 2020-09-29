---
layout: relation
title: 'appos'
shortdef : 'apposition'
udver: '2'
---

Appositional modifiers are used in Uralic languages typically for a couple of
constructions where nominals are followed immediately by nouns, e.g. addresses,
titles and so forth. In many Uralic languages, especially in computational
systems, appositional structure is utilised to carry morphosyntactic information
when another nominal phrase (esp. Proper nouns) cannot easily be inflected.

#### Examples

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
<!-- Interlanguage links updated Út zář 29 20:23:19 CEST 2020 -->
