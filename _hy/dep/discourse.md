---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

This is used for [interjections](INTJ) and other discourse [particles](PART) and elements, which are not clearly linked to the structure of the sentence, except in an expressive way.
We also use `discourse` for list enumerators (e.g. *1.*, *1)*, *[1]*, *1.4*, *ա.*, *II*, marking an item in a sequence).
(Bullets, by contrast, are considered [punctuation](u-pos/PUNCT) and attach as [punct]().)

These discourse elements are attached to the head of the most relevant nearby unit, often a clause.

~~~ sdparse
Աստված ՜ իմ , որտեղ ՞ դնեմ գլուխս։ \n Oհ my God , where shall I put my head?
discourse(դնեմ, Աստված)
discourse(put, God)
~~~

~~~ sdparse
Դե , հուպ տուր, կուլ տուր ։ \n Well , clutch , swallow ! 
discourse(տուր, Դե)
discourse(clutch, Well)
~~~

~~~ sdparse
Հիմա , իհարկե , շատ ավելին գիտենք ։ \n Now, of-course , we know much more .
discourse(գիտենք, իհարկե)
discourse(know, of-course)
~~~

We use the `discourse` relation also for redundant or emotional items, redundant coreferential pronoun.

~~~ sdparse
Չէ ՞ որ մենք հիմա մեկ ընդհանուր բանտ ունենք ։ \n Don't we have one common prison now?
discourse(ունենք, Չէ)
fixed(Չէ, որ)
~~~

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

<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:48 CET -->
