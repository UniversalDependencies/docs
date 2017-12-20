---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---

An adjectival modifier of a noun is any adjectival phrase that serves
to modify the meaning of the noun.

Exception: if the modifying adjectival word is pronominal (i.e. tagged [DET]()),
the relation is [det]() instead of `amod`.

~~~ sdparse
Արամը կարմիր միս է ուտում ։ \n Aram eats red meat .
amod(միս, կարմիր)
amod(meat, red)
~~~

~~~ sdparse
Առաջին տպավորությունը դրական էր։ \n The-first impression was positive ․
amod(տպավորությունը, Առաջին)
amod(impression, The-first)
~~~

~~~ sdparse
Դանդաղ երաժշտություն էր լսվում ։ \n Slow music was heard .
amod(երաժշտություն, Դանդաղ)
amod(music, Slow)
~~~
