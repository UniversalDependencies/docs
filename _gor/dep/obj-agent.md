---
layout: relation
title: 'obj:agent'
shortdef: 'agent object of a non-actor-voice verb'
udver: '2'
---

A nominal argument of a clause that is in the non-pivot role, but is semantically the 
agent of the clause. This occurs when a clause is in a voice other than actor voice.
Unlike in Indo-European languages, the agent is still a core argument, hence it is labeled
`obj:agent` rather than [obl:agent]().

When there are multiple arguments in the post-verbal non-pivot position, agent arguments have
topmost priority to take the `obj` label, while patients and instruments will take the `iobj` label.

~~~ sdparse
Oile healipo li Dewi lo pito \n mango peeling NPIV Dewi NPIV knife
obj:agent(healipo, Dewi)
obj:agent(peeling, Dewi)
iobj:instrument(healipo, pito)
iobj:instrument(peeling, knife)
~~~

“Dewi is peeling the knife with a knife.”

<!-- Interlanguage links updated Po 29. června 2026, 18:00:20 CEST -->
