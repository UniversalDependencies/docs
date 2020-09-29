---
udver: '2'
layout: relation
title:  'compound'
shortdef: 'compound'
---

In German, examples of this type of multiword expression are either written
as one composite word or as multiple individual words linked by hyphens.
The `compound` relation is used in the latter case. German compounds are head final.

~~~ sdparse
Telefonbuch \n Telefon-Buch \n phone book
compound(book, phone)
~~~

~~~ sdparse
U - Bahn \n underground metro
compound(Bahn, U)
~~~

~~~ sdparse
eine Indie - Band \n an indie band
compound(Band, Indie)
~~~

~~~ sdparse
ein sechs - stimmiges Geläut \n a six - voice chime
compound(stimmiges, sechs)
~~~

If Komposita that should be written as one word were to be wrongly split up into syntactic words,
the individual words would be linked by the `compound` relation.

~~~ sdparse
*Telefon Buch
compound(Buch, *Telefon)
~~~

The subtype relation [compound:prt]() is used for particle verbs when
particle and verb are separated.
<!-- Interlanguage links updated Út zář 29 20:23:23 CEST 2020 -->
