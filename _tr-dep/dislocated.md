---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
---

The `dislocated` relation is used for fronted or postposed elements that do not fulfill the usual core grammatical relations of a sentence.
These elements often appear to be in the periphery of the sentence,
and may be separated off with a comma intonation.

~~~ sdparse
Ali ki hızlı okur, o bile kitabı bitiremedi . \n Ali, who is a fast reader, even he could not finish the book .
dislocated(o, Ali)
~~~

~~~ sdparse
Bir öğrenci ki yazım kurallarına dikkat etmez, ben onu dersten geçirmem . \n A student who does not pay attention to the spelling, I do not allow him/her to pass the course .
dislocated(onu, öğrenci)
~~~
