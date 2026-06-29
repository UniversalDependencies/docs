---
layout: relation
title: 'dislocated'
shortdef: 'dislocated'
udver: '2'
---

## Description

In Ruuli, the `dislocated` relation is used for fronted (topicalized) elements that introduce the topic of a clause. These elements are typically separated by a pause from the rest of the clause. 

Topicalized subjects are often resumed by personal pronouns. 

Fronted objects are marked on the verb by a pronominal object prefix.

~~~ sdparse
Ontale , yee na ni yaabire okuyiiga . \n Lion , he also when went to_hunt .
dislocated(yaabire, Ontale)
dislocated(went, Lion)
nsubj(yaabire, yee)
nsubj(went, he)
~~~

~~~ sdparse
Omukaire wamwe , yee na mmwendya . \n Elderly_person his , him also I_like .
dislocated(mmwendya, Omukaire)
dislocated(I_like, Elderly_person)
obj(mmwendya, yee)
obj(I_like, he)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:00:46 CEST -->
