---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modifier of a word is a (non-clausal) [adverb](tr-pos/ADV)
or adverbial phrase that serves to modify the meaning of the word.

Note that nouns in particular morphological [cases](tr-feat/Case),
or followed by an [adposition](tr-pos/ADP) are marked
using [obl]() even if they function as adverbial modifiers.

~~~ sdparse
Çok iyi bir kitap \n A very good book
advmod(iyi, Çok)
~~~

~~~ sdparse
Sürekli konuşuyorlar \n They are talking continuously
advmod(konuşuyorlar, Sürekli)
~~~

We use a special label, [tr-dep/advmod:emph]() for adverbial modifiers that are used for emphasis.

## Negation

In UD v1, there was a special relation `neg`. In UD v2, `advmod` is used in its place.
The negation modifier is the relation between a negation word and the word it modifies.

In Turkish, negation is typically done through suffixation.
We use `advmod` only if the non-predicative use of  the word _değil_.

~~~ sdparse
Elma değil , armut al demiştim . \n I asked for pears, not for apples.
advmod(Elma, değil)
~~~

~~~ sdparse
En büyüğünü al dedim, küçük değil . \n I told you to get the biggest
not small(est)
advmod(küçük, değil)
~~~

~~~ sdparse
Değil üniversite , orta okulu bile bitirmemiş . \n Let alone the university, he did not even finish the secondary school
advmod(üniversite, Değil)
~~~

<!-- Interlanguage links updated So kvě 14 19:02:54 CEST 2022 -->
