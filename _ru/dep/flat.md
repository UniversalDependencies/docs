---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

`flat` is one of the relations for compounding in UD.
In Russian it is used to join the first name of a person with the patronymic and the last name and in the date and month construction (_31 декабря_ “31 December“).


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

(Places in electronic communication are offen written as a multitoken expression, eg. _Нью - Йорк_, _Нью Йорк_ “New York“).

### Dates

Dates such as _31 декабря_ “31 December“, _на первое мая_ “on the 1st of May“ have a flat structure since the ordinal numeral does no agree with the name of month (cf. _на первое_ “on 1st“, accusative neuter, and _мая_ “of May“, genitive masculine) and historically can be considered as the result of grammatisized ellipsis (cf. _на первое число мая_ “on the 1st date of May“).

~~~ sdparse
31 декабря \n 31 December
flat(31, декабря)
flat(31, December)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:27 CET 2020 -->
