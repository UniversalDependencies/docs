---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

A `cc` (coordinating conjunction relation) holds between the head conjunct of a coordinate structure (which is taken to be the first conjunct) and the preceding coordinating conjunction. Elements that can assume the role of <code>cc</code> are POS tagged as <code>CCONJ</code> and <code>SCONJ</code>. E.g. 

~~~ sdparse

ზრახვა-ყვეს და თქუეს. \n 'They made a plan and spoke.'
cc(თქუეს, და)
~~~

**NB** Note that punctuation is never treated as coordinating conjunction. 

For more on coordination, see the [conj](_oge/dep/conj) relation.
<!-- Interlanguage links updated So 10. května 2025, 18:15:06 CEST -->
