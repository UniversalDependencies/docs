---
layout: relation
title: 'compound:redup'
shortdef: 'reduplicated compounds'
udver: '2'
---

Reduplication of adverbs, adjectives and nouns is productive in Modern Greek and is a way of intensification of the meaning. 
Each word in a reduplication pair is assigned its corresponding POS. The first word in the pair is assigned the feature [Degree=Aug](). The second word depends on the first one with the [compound:redup]() dependency.
 
- *πάνω πάνω* Lit. *up up* "on the very top"
- *πίσω πίσω* Lit. *back back* "at the very back", *σιγά σιγά* Lit. *slowly slowly* "very very slowly"
- *πονηρά πονηρά* Lit. *cuningly cuningly* "very very cunningly". 


~~~ sdparse
πάνω πάνω
compound:redup(πάνω-2, πάνω-1)
~~~

For lexicalized multi-word items with repetition, e.g. *τσίμα τσίμα* we use [fixed]().

----------------
**Cretan**

Μια όρθα είχανε ούλη κι ούλη “They had just one chicken, and that was all.”

~~~ sdparse~~~
Μια όρθα είχανε ούλη κι ούλη
advcl(είχανε, ούλη)
compound:redup(ούλη, ούλη)
~~~

Πατούλιες πατούλιες κινήσαμε την παραμονή “In groups, we set out on the eve.”
~~~ sdparse~~~
Πατούλιες πατούλιες κινήσαμε την παραμονή 
advcl(κινήσαμε, πατούλιες)
compound:redup(πατούλιες, πατούλιες)
~~~

--------------------

<!-- Interlanguage links updated Po 29. června 2026, 17:59:30 CEST -->
