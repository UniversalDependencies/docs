---
layout: relation
title: 'iobj:agent'
shortdef: 'agentive indirect object'
udver: '2'
---

In a causative construction, the `iobj:agent` relation attaches the causative (infinitive) verb to his agent, when the latter is the syntactical indirect object of the
sentence (this initial agent has been demoted and became an indirect object in the causative construction).

~~~ sdparse
iobj:agent()
iobj:agent()
obj()
obj()
~~~

The true agent of the verb _ _ “” in the sentence is _ _ “”, i.e. “”

~~~ sdparse
iobj:agent()
iobj:agent()
~~~

The true agent of the verb _հիշեցնել տալ_ “make remember (lit: make remind of)” in the sentence is still _ինձ_ “me”, i.e. “I will remind of that name.”

~~~ sdparse
iobj:agent()
iobj:agent()
~~~

The true agent of the verb _հիշեցնել տալ_ “make remember (lit: make remind of)” is _քեզ_ “you”, i.e. “You will remember that name.”

The causative (infinitive) verb governs the syntactical subject of the sentence (i.e. the causer) with a [nsubj:caus]() relation. The infinitive verb governs the
causative auxiliary with an [aux:caus]() relation.

For more details see [specific-syntax](http://universaldependencies.org/hy/overview/specific-syntax.html).
<!-- Interlanguage links updated St 6. května 2026, 20:47:07 CEST -->
