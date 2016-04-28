---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
---

An adverbial modifier of a word is a (non-clausal) [adverb](tr-pos/ADV) or adverbial phrase that serves to modify the meaning of the word.

Note that nouns in particular morphological [cases](tr-feat/Case),
or followed by and [adposition](tr-pos/ADP) are marked using [nmod]() even if they function as adverbial modifiers.

~~~ sdparse
Çok iyi bir kitap \n A very good book
advmod(iyi, Çok)
~~~

~~~ sdparse
Sürekli konuşuyorlar \n They are talking continuously
advmod(konuşuyorlar, Sürekli)
~~~

We use a special label, [tr-dep/advmod:emph]() for adverbial modifiers that are used for emphasis.
