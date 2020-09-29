---
layout: relation
title: 'vocative'
shortdef: 'vocative'
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
<!-- Interlanguage links updated Út zář 29 20:23:44 CEST 2020 -->
