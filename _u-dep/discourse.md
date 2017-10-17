---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

This is used for [interjections](u-pos/INTJ) and other discourse [particles](u-pos/PART) and
elements (which are not clearly linked to the structure of the
sentence, except in an expressive way). We generally follow the
guidelines of what the Penn Treebanks count as an INTJ.  They define
this to include: interjections (*oh*, *uh-huh*, *Welcome*), fillers
(*um*, *ah*), and discourse markers (*well*, *like*, *actually*, but
not *you know*).

These discourse elements are attached to the head of the most relevant nearby clause, 
which is why they are grouped with non-core clausal dependents even though they are normally
not dependents of the predicates as such.

~~~ sdparse
Iguazu is in Argentina :)
discourse(is-2, :)-5)
~~~
