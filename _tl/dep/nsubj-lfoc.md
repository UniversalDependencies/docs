---
layout: relation
title: 'nsubj:lfoc'
shortdef: 'nominal subject of a locative-focused verb'
udver: '2'
---

In an analogy to [nsubj:pass](), `nsubj:lfoc` signals that the mapping between syntactic functions
and semantic roles is non-standard. Specifically, the verb is in the location-focused [Voice](),
hence the subject specifies a location or goal rather than the agent.

~~~ sdparse
Binigyan ng titser ng premyo ang istudyante . \n Given the teacher a prize the student .
nsubj:lfoc(Binigyan, istudyante)
nsubj:lfoc(Given, student)
~~~

“The teacher gave the student a prize.”

<!-- Interlanguage links updated Pá kvě 14 11:09:13 CEST 2021 -->
