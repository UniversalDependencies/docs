---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

`nsubj` marks noun phrases that are the subject of a finite clause. In non-copular constructions, the head of an `nsubj` relation is typically a verb. Subjects need not necessarily be in the nominative case: other cases are often used to mark subjects, such as the ergative with the perfective aspect, or the dative for certain constructions.

~~~ sdparse
मुलगा झोपतो . \n The boy sleeps .
nsubj(झोपतो, मुलगा)
nsubj(sleeps, boy)
~~~

~~~ sdparse
मुलाने पुस्तक वाचले . \n The boy read the book .
nsubj(वाचले, मुलाने)
nsubj(read, boy)
~~~

~~~ sdparse
मुलाला कंटाळ आला . \n The boy-to boredom came .
nsubj(आला, मुलाला)
nsubj(came, boy-to)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:28 CEST 2020 -->
