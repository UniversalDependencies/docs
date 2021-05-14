---
layout: relation
title: 'list'
shortdef: 'list'
udver: '2'
---

The `list` relation is used for chains of comparable items. In lists with more than two items, all items of the list should modify the first one. Informal and web text often contains passages which are meant to be interpreted as lists but are parsed as single sentences. Email signatures often contain these structures, in the form of contact information: the different contact information items are labeled as `list`; the key-value pair relations are labeled as [appos]().

~~~ sdparse
Γιώργος Παπαδόπουλος Τηλέφωνο 2100447000 E-mail gpapadopoulos@paradeigma.com
name(Γιώργος, Παπαδόπουλος)
list(Γιώργος, Τηλέφωνο )
list(Γιώργος, E-mail)
appos(Τηλέφωνο, 2100447000)
appos(E-mail, gpapadopoulos@paradeigma.com)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:08 CEST 2021 -->
