---
layout: relation
title: 'flat'
shortdef: 'flat'
---

`flat` is one of the relations for compounding in UD.
In Russian it is used to join the first name of a person with the patronymic and the last name.

The leftmost name is always the head and the other name(s) are attached to it.

The relation is not used to attach adjectives to nouns within multi-word names of places, organizations etc.

~~~ sdparse
Президент Владимир Владимирович Путин вчера посетил Минеральные Воды . \n President Vladimir Vladimirovich Putin yesterday visited Mineralnye Vody .
flat(Владимир, Владимирович)
flat(Vladimir, Vladimirovich)
flat(Владимир, Путин)
flat(Vladimir, Putin)
nmod(Владимир, Президент)
nmod(Vladimir, President)
amod(Воды, Минеральные)
amod(Vody, Mineralnye)
~~~

~~~ sdparse
Нью - Йорк \n New York
flat(Нью, Йорк)
flat(New, York)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:53 CEST 2020 -->
