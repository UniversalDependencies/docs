---
layout: relation
title: 'conj'
shortdef: 'conjunct'
---

This document is a placeholder for the language-specific documentation
for `conj`.

A conjunct is the relation between two elements connected by a coordinating conjunction, such as "y", "o", etc. We treat conjunctions asymmetrically: The head of the relation is the first conjunct and other conjunctions depend on it via the conj relation.

~~~ sdparse
María es guapa y simpática . \n Maria is pretty and friendly .
conj(guapa, simpática)
~~~
