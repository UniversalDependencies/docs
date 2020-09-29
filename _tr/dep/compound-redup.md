---
layout: relation
title: 'compound:redup'
shortdef: 'reduplicated compounds'
udver: '2'
---

This subtype of [compound]() covers a range of reduplicated forms in Turkish.
Reduplication is a common process especially for [adverbs](tr-pos/ADV) and [adjectives](tr-pos/ADJ).
Except for m-reduplication (see below),
the head is the last word.

The reduplication typically involves two identical words,
but some morpho-phonological alternations (as in m-reduplication in example 3 below) are possible.

~~~ sdparse
Koca koca adamlar oyun oynuyorlar . \n _Big (+emph)_ men are playing games .
compound:redup(koca-2, Koca-1)
~~~

~~~ sdparse
Açık açık söylüyorum . \n I am telling it _clearly_
compound:redup(açık-2, Açık-1)
~~~

~~~ sdparse
Araba maraba almışlar . \n They bought (a) car (and things like that)
compound:redup(Araba, maraba)
~~~

For lexicalized multi-word items with repetition where one or more of the words are not free lexemes, (e.g. _paldır küldür_, _ufak tefek_), we use [fixed]().
<!-- Interlanguage links updated Út zář 29 20:23:24 CEST 2020 -->
