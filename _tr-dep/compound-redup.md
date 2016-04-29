---
layout: relation
title: 'compound:redup'
shortdef: 'reduplicated compounds'
---

This subtype of [compound]() covers a range of reduplicated forms in Turkish.
Reduplication is a common process especially for [adverbs](tr-pos/ADV) and [adjectives](tr-pos/ADJ),
but it is also used for reduplicated [noun](tr-pos/NOUN) and [verb](tr-pos/VERB) forms.

The reduplication typically involves two identical words,
but some morpho-phonological alternations (as in m-reduplication in example 3 below) are possible.
In some cases one of the words in reduplicated forms may also be modified individually by other words (see example 4 below).

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

~~~ sdparse
Güzel mi güzel bir kız . \n A pretty (emphasized) girl .
compound:redup(güzel-3, Güzel)
advmod:emph(Güzel-1, mi)
~~~

~~~ sdparse
Herşeyi kendi kendilerine planlamışlar . \n They planed it all by themselves .
compound:redup(kendilerine, kendi)
~~~

~~~ sdparse
Ayağını sürükleye sürükleye yürüyordu . \n He\/she was walking by dragging his\/her feet.
compound:redup(sürükleye-3, sürükleye-2)
~~~

~~~ sdparse
Bu kadar zamanda okusa okusa birkaç sayfa okumuştur . \n In that time he\/she could have read _at most_ half of it .
compound:redup(okusa-5, okusa-4)
~~~

~~~ sdparse
Mektubu aldı alalı odasından çıkmadı . \n He\/she has not left his\/her room since he\/she got the letter
compound:redup(aldı, alalı)
~~~

~~~ sdparse
Mektubu alır almaz yanıt verdi . \n He\/she responded as soon as he\/she received the letter .
compound:redup(almaz, alır)
~~~

For lexicalized multi-word items with repetition where one or more of the words are not free lexemes, (e.g. _paldır küldür_, _ufak tefek_), we use [mwe]().
