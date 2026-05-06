---
layout: relation
title: 'list'
shortdef: 'list'
udver: '2'
---

The `list` relation is used for chains of comparable items. In lists with more than two items, all items of the `list` should modify the first one. For example, email signatures often contain these structures, in the form of contact information: the different contact information items are labeled as list.
~~~ sdparse
Vardenis Pavardenis , tel . 86661111 , el . paštas vardenis@pavardenis.lt \n Name Surname , phone : 86661111 , email vardenis@pavardenis.lt
list(Vardenis, tel)
list(Vardenis, paštas)
list(Name, phone)
list(Surname, email)
~~~

However, `list` should not be over-used. If a construction can easily be analyzed using the grammatical relations of standard sentences, typically as a coordinated structure, then it should be analyzed with these more standard relations, even if it is laid out as a list typographically.
<!-- Interlanguage links updated St 6. května 2026, 20:47:12 CEST -->
