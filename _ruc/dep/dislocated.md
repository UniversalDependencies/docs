---
layout: relation
title: 'dislocated'
shortdef: 'dislocated'
udver: '2'
---

## Description

In Ruuli, the `dislocated` relation is used for fronted elements that introduce the topic of a clause. These elements are typically separated by a pause and are often translated as "as for ...".

The fronted element is often marked on the verb as the pronominal object prefix.

~~~ sdparse
Ontale , yee na ni yaabire okuyiiga . \n Lion , he also when went to_hunt .
dislocated(yaabire, Ontale)
dislocated(went, Lion)
nsubj(yaabire, yee)
nsubj(went, he)
~~~

~~~ sdparse
Omukaire wamwe , yee na mmwendya . \n Elderly_person his , he also I_like .
dislocated(mmwendya, Omukaire)
dislocated(I_like, Elderly_person)
obj(mmwendya, yee)
obj(I_like, he)
~~~