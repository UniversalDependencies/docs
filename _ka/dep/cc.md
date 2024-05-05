---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

A `cc` (coordinating conjunction relation) holds between the head conjunct of a coordinate structure (which is taken to be the first conjunct) and the preceding coordinating conjunction. Elements that can assume the role of <code>cc</code> are POS tagged as <code>CCONJ</code> and <code>SCONJ</code>. E.g. 

~~~ sdparse
დაიბადა და შემდეგ იძახის. \n 'Who were born and then say.'
cc(იძახის, და)
~~~

**NB** Note that punctuation is never treated as coordinating conjunction. 

For more on coordination, see the [conj](_ka/dep/conj) relation.
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:50 CEST -->
