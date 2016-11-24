---
layout: relation
title: 'expl:impers'
shortdef: 'expletive impersonal'
---

The relation <code>expl:impers</code> is a sub-class of <code>expl</code>, specific for the impersonal use of the clitic pronoun. Here the role of subject of the verb is played by the clitic itself, as an undefined subject.

~~~ sdparse
Si prevede che viaggerà .
expl:impers(prevede, Si)
~~~

If there's a clitic in a construction with a modal or an auxiliary verb, than generally it is an impersonal construction. 

~~~ sdparse
Si può procedere a sequestro .
expl:impers(procedere, Si)
~~~

In the construction with both *ci* and *si* (construction of the impersonal *ci*), the first clitic is marked as <code>expl</code>, while *si* as <code>expl:impers</code>, as follows.  

~~~ sdparse
E' stata quello che ci si attendeva .
expl:impers(attendeva, si)
expl(attendeva, ci)
~~~
