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

However, some verbs admit objects in the genitive case:

~~~ sdparse
Η Αντιγόνη μοιάζει της Αρετής.Gen
obj(μοιάζει, Αρετής.Gen)
~~~

~~~ sdparse
Οι συνεδριάσεις προηγούνται των αποφάσεων.Gen
obj(προηγούνται, αποφάσεων.Gen)
~~~

If there is  one direct nominal dependent and  no clausal complement of the verb, the nominal dependent is assigned the dependency [obj](), regardless of the morphological case or semantic role that it bears. Otherwise, the nominal dependent is assigned the dependency [iobj](). 

There is a small set of verbs, such as the verbs denoting "training", that admit two nominal dependents in the accusative case; when two such dependents exist, one of them is assigned the dependency [obj]() and the other the [iobj]() one on the basis of a set of syntactic tests. 


See the [expl]()  relation for cases of clitic doubling.

<!-- Interlanguage links updated Út 30. června 2026, 11:00:27 CEST -->
