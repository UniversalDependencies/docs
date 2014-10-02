---
layout: base
title: 'expl'
shortdef: 'expletive'
---

## `{{ page.title }}`: {{ page.shortdef }}

This relation captures pleonastic nominals. In English, this is some uses of *it* and *there*: the existential *there*, and *it* when used in extraposition constructions.  (Note that both *it* and *there* also have non-expletive uses.) An expletive or pleonastic nominal is one where the nominal does not satisfy a semantic role of the predicate. The main predicate of the clause (the verb or predicate adjective or noun) is the governor.

~~~ sdparse
There is a ghost in the room
expl(is, There)
~~~

~~~ sdparse
It is clear that we should decline .
expl(clear, It)
~~~

Some languages do not have expletives. In languages with expletives, they can be positioned where normally a core argument appears: the subject and direct object slots, as in the examples below. Note that in the analysis of these examples, we treat the postposed subject or clausal argument as a regular core argument, and mark the expletive with `expl`.

~~~ sdparse
There is a ghost in the room
expl(is, There)
nsubj(is, ghost)
nmod(is, room)
~~~

~~~ sdparse
I believe there to be a ghost in the room
nsubj(believe, I)
expl(believe, there)
xcomp(believe, be)
nsubj(be, ghost)
nmod(be, room)
~~~

~~~ sdparse
It is clear that we should decline .
expl(clear, It)
csubj(clear, decline)
~~~

~~~ sdparse
That we should decline is clear .
csubj(clear, decline)
~~~

~~~ sdparse
I mentioned it to Mary that Sue is leaving
nsubj(mentioned, I)
expl(mentioned, it)
nmod(mentioned, Mary)
ccomp(mentioned, leaving)
~~~

Further discussion of expletives can be found in Postal, P. M., and G. K. Pullum (1988) “Expletive Noun Phrases in Subcategorized Positions,” _Linguistic Inquiry_ 19(4): 635–670.
