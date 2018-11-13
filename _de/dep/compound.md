---
layout: relation
title:  'compound'
shortdef : 'compound'
---

In German, examples of this type of multiword expression are either written as one composite word or as multiple individual words linked by hyphens. Since these so-called Komposita are/should be annotated as single tokens, the `compound` relation is not used here. 

~~~ sdparse
Telefonbuch \n Telefon-Buch \n phone book
compound(Phone, book)
~~~

However, if these Komposita were to be split up into syntactic words, the individual words should be linked by the `compound` relation.

~~~ sdparse
*telefon buch
compound(telefon, buch)
~~~

The subtype relation [compound:prt]() is used for particle verbs when particle and verb are separated.
