---
layout: relation
title: 'obj'
shortdef: 'direct object'
udver: '2'
---

The direct object of a verb is the noun phrase that denotes the entity acted upon. The direct object is typically marked by the accusative case in Greek.

~~~ sdparse
Ο υπουργός ενημέρωσε το σώμα
obj(ενημέρωσε, σώμα)
~~~

However, some verbs take objects in genitive:

~~~ sdparse
Η Αντιγόνη μοιάζει της Αρετής.Gen
obj(μοιάζει, Αρετής.Gen)
~~~

~~~ sdparse
Οι συνεδριάσεις προηγούνται των αποφάσεων.Gen
obj(προηγούνται, αποφάσεων.Gen)
~~~

IF there is just one object, it should be labeled `obj`,
regardless of the morphological case or semantic role that it bears.

When two objects are present, one of them is labeled as `obj` and the other as [iobj](). Generally, the most directly affected object _(patient)_ is marked as `obj`. The one exception is when there is a clausal complement. Then the clausal complement is regarded as [iobj]() “clausal direct object” and an object nominal will be an iobj. See [iobj]() for more details.


See the [expl]()  relation for cases of clitic doubling.

<!-- Interlanguage links updated Ne 5. května 2024, 18:21:31 CEST -->
