---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
---

This document is a placeholder for the language-specific documentation
for `csubj`.

A clausal subject is a clausal syntactic subject of a clause, i.e., the subject is itself a clause. The governor of this relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb.

~~~ sdparse
Le gusta comer tarde . \n He\/she likes to eat late .
csubj(gusta, comer)
~~~
