---
layout: relation
title: 'list'
shortdef: 'list'
udver: '2'
---

The `list` relation is used for chains of comparable items. In lists with more than two items, all items of the list should modify the first one. Informal and web text often contains passages which are meant to be interpreted as lists but are parsed as single sentences. Email signatures often contain these structures, in the form of contact information: the different contact information items are labeled as `list`; the key-value pair relations are labeled as [appos]().


~~~ sdparse
Ali Yılmaz ,  tel : 555-55-55 , email : ali@example.com
name(Ali, Yılmaz)
list(Ali, tel)
list(Ali, email)
appos(tel, 555-55-55)
appos(email, ali@example.com)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:29 CET 2020 -->
