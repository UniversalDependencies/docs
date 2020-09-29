---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
udver: '2'
---

The `dislocated` relation is used for fronted or postposed elements that do not fulfill the usual core grammatical relations of a sentence.
These elements often appear to be in the periphery of the sentence,
and may be separated off with a comma intonation.

Following [UD general guidelines](u-dep/dislocated),
the dislocated element attaches to the head of the clause to which it belongs
(although this does not allow recovering what is dislocated).

~~~ sdparse
Ali ki hızlı okur, o bile kitabı bitiremedi . \n Ali, who is a fast reader, even he could not finish the book .
dislocated(bitiremedi, Ali)
nsubj(bitiremedi, o)
~~~

~~~ sdparse
Bir öğrenci ki yazım kurallarına dikkat etmez, ben onu dersten geçirmem . \n A student who does not pay attention to the spelling, I do not allow him/her to pass the course .
obj(geçirmem, onu)
dislocated(geçirmem, öğrenci)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:17 CEST 2020 -->
