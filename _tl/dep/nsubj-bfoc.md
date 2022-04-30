---
layout: relation
title: 'nsubj:bfoc'
shortdef: 'nominal subject of a beneficiary-focused verb'
udver: '2'
---

In an analogy to [nsubj:pass](), `nsubj:bfoc` signals that the mapping between syntactic functions
and semantic roles is non-standard. Specifically, the verb is in the beneficiary-focused [Voice](),
hence the subject specifies a beneficiary rather than the agent.

~~~ sdparse
Ipagaalis ng babae ng bigas sa sako ang bata . \n BP-FUT-take.out ACT woman OBJ rice DIR sack PIV child .
nsubj:bfoc(Ipagaalis, bata)
nsubj:bfoc(BP-FUT-take.out, child)
~~~

“A/the woman will take some rice out of a/the sack for the child.”

<!-- Interlanguage links updated St lis 3 20:59:00 CET 2021 -->
