---
layout: relation
title: 'list'
shortdef: 'list'
udver: '2'
---

The `list` relation is used for chains of comparable items, for instance **items in a list**, when the list appears within a single sentence. The head of this structure is always the first element in the sequence, and all the other elements are its dependents. In practice, this relation is rarely used, only in cases in which the structure cannot be analyzed using other relations like, for example, coordination (conj). 

~~~ sdparse
Branko Tomažič , telefon : 041 707 534 , e-pošta : kz.vipava@siol.net . \n Branko Tomažič, phone : 041 707 534 , email : kz.vipava@siol.net .
list(Branko-1,telefon)
list(Branko-1,e-pošta)
list(Branko-15,phone)
list(Branko-15,email)
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:21:18 CEST -->
