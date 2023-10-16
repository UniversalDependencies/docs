---
layout: relation
title: 'aux:caus'
shortdef: 'causative auxiliary'
udver: '2'
---

The `aux:caus` relation links the infinitive verb (i.e. the governor) and the finite causative [auxiliary](AUX) _տալ_ “to give” in a causative construction.
The syntactical subject of the sentence, which corresponds to the causer (external agent) participant of the causative predicate, receives a [nsubj:caus]() or [csubj:caus]() relation.

~~~ sdparse
Ետ տանել զնա առ Հերովդէս։ \n He made take him to Herod (Luke 23:7)
aux:caus(տանել, Ետ)
obj(տանել, զնա)
~~~ 
