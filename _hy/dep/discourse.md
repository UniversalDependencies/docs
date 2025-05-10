---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

This is used for [interjections](INTJ) and other discourse [particles](PART) and elements, which are not clearly linked to the structure of the sentence, except in an expressive way.

These discourse elements are attached to the head of the most relevant nearby unit, often a clause.

~~~ sdparse
Աստված ՜ իմ , դու վերադարձար ։ \n Oհ my God , you came-back !
discourse(վերադարձար, Աստված)
discourse(came-back, God)
~~~

~~~ sdparse
Դե ՛ , շտապիր ՛ ։ \n Well , hurry-up ! 
discourse(շտապիր, Դե)
discourse(hurry-up, Well)
~~~

~~~ sdparse
Իհարկե , դու ճիշտ ես ։ \n Sure , you are wright .
discourse(ճիշտ, Իհարկե)
discourse(wright, Sure)
~~~

We use the `discourse` relation also for redundant or emotional items, redundant coreferential pronoun.

~~~ sdparse
Չէ ՞ որ խոստացար ։ \n You still promised !
discourse(խոստացար, Չէ)
fixed(Չէ, որ)
~~~
(meaning “… but you promised”)

~~~ sdparse
Այո , ծիծաղելի է ։Ճ \n Yes , it's funny ։)
discourse(ծիծաղելի, ։Ճ)
discourse(ծիծաղելի, Այո)
discourse(funny, ։))
discourse(funny, Yes)
~~~

We also use `discourse` for list enumerators (e.g. 1., (ա) marking an item in a sequence). (Bullets, by contrast, are considered [punctuation](hy-pos/PUNCT) and attach as [punct]().)

~~~ sdparse
1/NUM . Վճռաբեկ բողոքը բավարարել մասնակիորեն : \n 1/NUM . Partially grant the cassation appeal .
discourse(բավարարել, 1-1)
punct(1-1, .-2)
discourse(grant, 1-9)
punct(1-9, .-10)
~~~

<!-- Interlanguage links updated So 10. května 2025, 18:15:27 CEST -->
