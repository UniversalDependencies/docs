---
layout: relation
title:  'obj'
shortdef : 'direct object'
udver: '2'
---

An object `obj`  of a verb is the second core argument of a verb after the subject. Usually, it is a noun phrase that either denotes the entity acted upon or undergoes a change state of motion (the proto-patient). In languages that distinguishing morphological cases, the object is mainly in the accusative case:
~~~ sdparse
žíne ímot isók zejtíne 
those who have this oil
obj (ímot, zejtíne)   note:  “zejtíne” is in accusative case
~~~

In Pomak the object is predominantly in the accusative case, but in seldom occasions in genteive/dative case, too:
~~~ sdparse
sélana zǿli da pamógnat mómajne i kópeløtune 
the villagers started to help the girl and the boy
obj (pamógnat, mómajne)                note:   “mómajne” is in genetive/dative case
obj (pamógnat, kópeløune)              note:   “kópeløtune” is in genetive/dative case
conj (mómajne, kópeløtune)
cc (mómajne, i)
~~~

Do note that a second object, which is not linked by a coordinating conjunction to the first, is labeled as an indirect object iobj and is always in genetive/dative case: 
~~~ sdparse
daj mómajne parý 
give to the girl money  
obj (daj, parý)  note:   “parý” is in accusative case
iobj (daj, mómajne) note:   “mómajne” is in genetive/dative case 
~~~
