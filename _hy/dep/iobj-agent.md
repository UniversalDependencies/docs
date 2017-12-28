---
layout: relation
title: 'iobj:agent'
shortdef: 'agentive indirect object'
udver: '2'
---

In a causative construction, the `iobj:agent` relation attaches the causative (infinitive) verb to his agent, when the latter is the syntactical indirect object of the sentence (this initial agent has been demoted and became an indirect object in the causative construction).

~~~ sdparse
Մի ՛ հիշեցրու ինձ այդ անունը ։ \n Don't remind me of-that name !
iobj:agent(հիշեցրու, ինձ)
iobj:agent(remind, me)
~~~

~~~ sdparse
Քեզ հիշեցնել մի ՛ տուր այդ անունը ։ \n
~~~

~~~ sdparse
Ինձ հիշեցնել մի ՛ տուր այդ անունը ։ \n
~~~

The causative (infinitive) verb governs the syntactical subject of the sentence (i.e. the causer) with a [nsubj:caus]() relation. The infinitive verb governs the causative auxiliary with an [aux:caus](aux-caus) relation.

N.B.: For more details about the analysis of causatives see [this page](http://universaldependencies.org/hy/overview/specific-syntax.html#causative).
