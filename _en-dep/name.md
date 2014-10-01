---
layout: base
title: 'name'
shortdef: 'name'
---

## `{{ page.title }}`: {{ page.shortdef }}

`name` is used for proper nouns constituted of multiple nominal elements. For example, `name` would be used between the words of *Hillary Rodham Clinton*, *New York*, or *Carl XVI Gustaf* but not to replace the usual relations in a phrasal or clausal name like *The king of Sweden* or the novels *The Lord of the Rings* and *Captured By Aliens*. Words joined by `name` should all be part of a minimal noun phrase; otherwise regular syntactic relations should be used.  This is basically similar to the treatment of noun compounds with *compound*, except that in many cases parts of the name may be another nominal elelment such as an adjective (*United Airlines*).

In general, names are annotated in a flat, head-initial structure, in
which all words in the name modify the first one using the `name`
label.

~~~ sdparse
Carl XVI Gustaf
name(Carl-1, Gustaf-3)
name(Carl-1, XVI-2)
~~~

This is certainly the case for person names and foreign person or
place names. For organization names with clear syntactic modification
structure, the dependencies should reflect the semantics, as for noun
compounding in `compound`.

~~~ sdparse
Natural Resources Conservation Service
name(Resources-2, Natural-1)
name(Conservation-3, Resources-2)
name(Service-4, Conservation-3)
~~~
