---
layout: relation
title:  'obj'
shortdef : 'direct object'
udver: '2'
---

The [obj]() dependency (object) is used to relate the second core argument of a transitive verb (the first core argument of the verb is the subject). Usually, it is a noun phrase that either denotes the entity acted upon or undergoes a change state of motion (the proto-patient). In nominative-accusative languages, the object is mainly in the accusative case:

~~~ sdparse
žíne ímot isók zejtíne 
"those who have this oil"
obj(ímot, zejtíne)   note:  “zejtíne” is in accusative case
~~~

In Pomak the object is predominantly in the accusative case. Certain verbs select objects in the genitive/dative case:

~~~ sdparse
sélana zǿli da pamógnat mómajne i kópeløtune 
"the villagers started to help the girl and the boy"
obj(pamógnat, mómajne)                note:   *mómajne* is in genetive/dative case
obj(pamógnat, kópeløune)              note:   *kópeløtune* is in genetive/dative case
conj(mómajne, kópeløtune)
cc(mómajne, i)
~~~

Do note that indirect objects are marked with the [iobj]() dependency and are always marked with the genetive/dative case: 
~~~ sdparse
daj mómajne parý 
"give the girl money"  
obj(daj, parý)     note:   *parý* is in accusative case
iobj(daj, mómajne) note:   *mómajne* is in genetive/dative case 
~~~
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:14 CET -->
