---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
---

An adjectival modifier of a noun is any adjectival phrase that serves
to modify the meaning of the noun.

Exception: if the modifying adjectival word is pronominal (i.e. tagged [cs-pos/DET]()),
the relation is [det]() instead of `amod`.

~~~ sdparse
Василий ест свиное мясо . \n Vasily eats pork meat .
amod(мясо, свиное)
amod(meat, pork)
~~~

~~~ sdparse
Первый гонщик был быстрым . \n First racer was fast .
amod(гонщик, Первый)
amod(racer, First)
nsubj(быстрым, гонщик)
nsubj(fast, racer)
~~~

~~~ sdparse
Быстрый гонщик был первым . \n Fast racer was first .
amod(гонщик, Быстрый)
amod(racer, Fast)
nsubj(первым, гонщик)
nsubj(first, racer)
~~~

