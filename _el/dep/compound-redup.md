---
layout: relation
title: 'compound:redup'
shortdef: 'reduplicated compounds'
udver: '2'
---

This subtype of [compound]() covers a range of reduplicated forms in Modern Greek.
Reduplication is a common process especially for [adverbs](el-pos/ADV) some of which are also used as  [adjectives](el-pos/ADJ).

In the case of adverbs, Each adverb is assigned the tag [ADV]() and first one is assigned the feature [Degree=Mag](). The second adverb 
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
