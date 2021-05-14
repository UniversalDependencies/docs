---
layout: relation
title: 'nsubj:ifoc'
shortdef: 'nominal subject of an instrumental-focused verb'
udver: '2'
---

In an analogy to [nsubj:pass](), `nsubj:ifoc` signals that the mapping between syntactic functions
and semantic roles is non-standard. Specifically, the verb is in the instrumental-focused [Voice](),
hence the subject specifies an instrument rather than the agent.

~~~ sdparse
Ipinansulat ni John ng liham kay Mary ang makinilya . \n wrote.with AG John OBJ letter IO Mary TOP typewriter .
nsubj:ifoc(Ipinansulat, makinilya)
nsubj:ifoc(wrote.with, typewriter)
~~~

“John wrote Mary a letter on the typewriter.”

<!-- Interlanguage links updated Pá kvě 14 11:09:13 CEST 2021 -->
