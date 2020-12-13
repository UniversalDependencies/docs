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
flat(31-1, декабря)
flat(31-4, December)
~~~

### Street addresses

The street addresses written informally such as _Гагарина 35_ “Gagarin (st.) 35“ have a flat structure as well. The numeral (the number of the building) is attached to the noun (street name) using the `flat` relation.

~~~ sdparse
Гагарина 35 \n Gagarin 35
flat(Гагарина, 35-2)
flat(Gagarin, 35-5)
~~~

In more formal writings, the address is annotated using the [list]() and [appos]() relations.

~~~ sdparse
ул. Гагарина , д. 35 \n st. of-Gagarin , build. 35
list(ул., д.)
list(st., build.)
nmod(ул., Гагарина)
nmod(st., of-Gagarin)
nmod(д., 35-2)
nmod(build., 35-5)
~~~

### Grades with minus, plus and asterisks

Grades written as _5 -_, _A +_, _B `***`_ are annotated using the `flat` relations. However, when the words _минус_, _плюс, or symbols are used before the nominal they are attached using the [compound]() relation.

<!-- Interlanguage links updated Čt lis 12 09:43:27 CET 2020 -->
