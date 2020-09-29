---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---

An adjectival modifier of a noun is any adjectival phrase that serves
to modify the meaning of the noun.

Exception: if the modifying adjectival word is pronominal (i.e. tagged [cs-pos/DET]()),
the relation is [det]() instead of `amod`.

~~~ sdparse
Václav jí vepřové maso . \n Václav eats pork meat .
amod(maso, vepřové)
amod(meat, pork)
~~~

~~~ sdparse
Václav si vzal třímiliónovou půjčku . \n Václav himself took-out three-million loan .
amod(půjčku, třímiliónovou)
amod(loan, three-million)
~~~

~~~ sdparse
První závodník byl rychlý . \n First racer was fast .
amod(závodník, První)
amod(racer, First)
nsubj(rychlý, závodník)
nsubj(fast, racer)
~~~

~~~ sdparse
Rychlý závodník byl první . \n Fast racer was first .
amod(závodník, Rychlý)
amod(racer, Fast)
nsubj(první, závodník)
nsubj(first, racer)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:08 CEST 2020 -->
