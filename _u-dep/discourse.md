---
layout: base
title: 'discourse'
shortdef: 'discourse element'
---

## discourse: discourse element

This is used for [interjections](u-pos/INTJ) and other discourse [particles](u-pos/PART) and
elements (which are not clearly linked to the structure of the
sentence, except in an expressive way). We generally follow the
guidelines of what the Penn Treebanks count as an INTJ.  They define
this to include: interjections (*oh*, *uh-huh*, *Welcome*), fillers
(*um*, *ah*), and discourse markers (*well*, *like*, *actually*, but
not *you know*).

~~~ sdparse
Iguazu is in Argentina :)
discourse(is-2, :)-5)
~~~
