---
layout: relation
title: 'vocative'
shortdef: 'vocative'
udver: '2'
---

The `vocative` relation is used to mark dialogue participant addressed in text (common in conversations, emails and newsgroup postings). The relation links the addressee's name to its host sentence.

***Ganix**, etorri !*

***Ganix**, come !*

~~~ sdparse
Ganix, etorri! \n Ganix, come!

vocative(etorri-3, Ganix-1)
punct(etorri-3, ,-2)
punct(etorri-3, !-4)
~~~


*Nora zoaz, **Kurt** ?*

*Where are you going, **Kurt** ?*

~~~ sdparse
Nora zoaz, Kurt ? \n Where you_are_going, Kurt ?

vocative(zoaz-2, Kurt-4)
punct(zoaz-2, ,-3)
advmod(zoaz-2, Nora-1)
punct(zoaz-2, ?-5)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:22 CEST 2021 -->
