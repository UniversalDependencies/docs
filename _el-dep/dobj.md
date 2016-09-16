---
layout: relation
title: 'dobj'
shortdef: 'direct object'
---

The direct object of a verb is the noun phrase that denotes the entity acted upon. The direct object is typically marked by the accusative case in Greek. 

~~~ sdparse
Ο υπουργός ενημέρωσε το σώμα
dobj(ενημέρωσε, σώμα)
~~~

However, some verbs take objects in genitive:

~~~ sdparse
Η Αντιγόνη μοιάζει της Αρετής.Gen
dobj(μοιάζει, Αρετής.Gen)
~~~

~~~ sdparse
Οι συνεδριάσεις προηγούνται των αποφάσεων.Gen
dobj(προηγούνται, αποφάσεων.Gen)
~~~

In general, if there is just one object, it should be labeled `dobj`,
regardless of the morphological case or semantic role that it bears.

When two objects are present, one of them is labeled as `dobj` and the other as [iobj](). Generally, the most directly affected object _(patient)_ is marked as `dobj`. The one exception is when there is a clausal complement. Then the clausal complement is regarded as [iobj]() “clausal direct object” and an object nominal will be an iobj. See [iobj]() for more details.

See the [expl]()  relation for cases of clitic doubling.


