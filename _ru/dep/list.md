---
layout: relation
title: 'list'
shortdef: 'list'
udver: '2'
---

The `list` relation is used for chains of comparable items.
In lists with more than two items, all items of the list should modify the first one.
Informal and web text often contains passages which are meant to be interpreted as lists but are parsed as single sentences.
Email signatures often contain these structures, in the form of contact information:
the different contact information items are labeled as `list`; the key-value pair relations are labeled as [appos]().

~~~ sdparse
Стив Джонс тел. : +7 495 555 9814 email : jones@mail.ru \n Steve Jones tel. : +7 495 555 9814 email : jones@mail.ru
flat:name(Стив, Джонс)
flat:name (Steve, Jones)
list(Стив, тел.)
list(Steve, tel.)
list(Стив, email-9)
list(Steve, email-21)
appos(тел., +7-5)
appos(tel., +7-17)
appos(email-9, jones@mail.ru-11)
appos(email-21, jones@mail.ru-23)
~~~

In Russian treebanks, this relation is also used to attach numerals written as several digit tokens (eg. telephone numbers) and syllables written separately in poetry.

~~~ sdparse
хоро -- ший пе -- реход \n go -- od tra -- nsition
list(хоро, ший)
list(go, od)
list(пе, реход)
list(tra, nsition)
~~~

However, `list` should not be over-used. If a construction can be easily analyzed
using the grammatical relations of standard sentences, such as when there is overt coordination,
then it should be analyzed with these more standard relations, even if it is laid out as a list typographically.

<!-- Interlanguage links updated Čt lis 12 09:43:29 CET 2020 -->
