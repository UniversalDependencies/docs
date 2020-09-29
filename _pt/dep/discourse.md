---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
---

This is used for [interjections](u-pos/INTJ) and other discourse [particles](u-pos/PART) and
elements (which are not clearly linked to the structure of the
sentence, except in an expressive way). We generally follow the
guidelines of what the Penn Treebanks count as an INTJ.  They define
this to include: interjections (*claro*, *não*, *pronto*), fillers
(*hum*, *hahaha*), and discourse markers (*bem*, *na verdade*, but
not *você sabe*).

~~~ sdparse
ROOT Não , não e não
root(ROOT, Não-2)
discourse(Não-2, não-4)
discourse(Não-2, não-6)
cc(Não-2, e)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:17 CEST 2020 -->
