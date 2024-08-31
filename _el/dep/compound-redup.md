---
layout: relation
title: 'compound:redup'
shortdef: 'reduplicated compounds'
udver: '2'
---

Reduplication of adverbs is productive in Modern Greek and is a way of intensification of the meaning of the adverb. 
Each adverb is assigned the tag [ADV]() and first one is assigned the feature [Degree=Aug](). The second adverb 
depends on the first one with the [compound:redup]() dependency. 
- *πάνω πάνω* Lit. *up up* "on the very top"
- *πίσω πίσω* Lit. *back back* "at the very back", *σιγά σιγά* Lit. *slowly slowly* "very very slowly"
- *πονηρά πονηρά* Lit. *cuningly cuningly* "very very cunningly". 


~~~ sdparse
πάνω πάνω
compound:redup(πάνω-2, πάνω-1)
~~~

For lexicalized multi-word items with repetition, e.g. *τσίμα τσίμα* we use [fixed]().
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:57 CEST -->
