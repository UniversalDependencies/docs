---
layout: relation
title: 'compound:redup'
shortdef: 'reduplicated compounds'
udver: '2'
---

This subtype of [compound]() covers a range of reduplicated forms in Turkish.
Reduplication is a common process especially for [adverbs](tr-pos/ADV) and [adjectives](tr-pos/ADJ).
The first word in reduplication is marked as the head of the construction.

The reduplication typically involves two identical words,
but some morpho-phonological alternations (as in m-reduplication in example 3 below) are possible.


~~~ sdparse
Koca koca adamlar oyun oynuyorlar . \n _Big (+emph)_ men are playing games .
compound:redup(Koca-1, koca-2)
~~~

~~~ sdparse
Açık açık söylüyorum . \n I am telling it _clearly_
compound:redup(Açık-1, açık-2)
~~~

~~~ sdparse
Araba maraba almışlar . \n They bought (a) car (and things like that)
compound:redup(Araba, maraba)
~~~

For lexicalized multi-word items with repetition where one or more of the words are not free lexemes, (e.g. _paldır küldür_, _ufak tefek_), we use [fixed]().
