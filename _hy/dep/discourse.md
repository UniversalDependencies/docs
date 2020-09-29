---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

This is used for [interjections](INTJ) and other discourse [particles](PART) and elements, which are not clearly linked to the structure of the sentence, except in an expressive way. 

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
<!-- Interlanguage links updated Út zář 29 18:41:19 CEST 2020 -->
