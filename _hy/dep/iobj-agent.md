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
obj(հիշեցրու, անունը)
obj(remind, name)
~~~

The true agent of the verb _հիշեցնել_ “remind of” in the sentence is _ինձ_ “me”, i.e. “I will remember that name.”

~~~ sdparse
Ինձ հիշեցնել մի ՛ տուր այդ անունը ։ \n Don't make me remember that name .
iobj:agent(հիշեցնել, Ինձ)
iobj:agent(remember, me)
aux:caus(հիշեցնել, տուր)
aux:caus(remember, make)
obj(հիշեցնել, անունը)
obj(remember, name)
~~~

The true agent of the verb _հիշեցնել տալ_ “make remember (lit: make remind of)” in the sentence is still _ինձ_ “me”, i.e. “I will remind of that name.”

~~~ sdparse
Քեզ հիշեցնել մի ՛ տուր այդ անունը ։ \n Don't make (someone) remind you of-that name .
iobj:agent(հիշեցնել, Քեզ)
iobj:agent(remind, you)
aux:caus(հիշեցնել, տուր)
aux:caus(remind, make)
obj(հիշեցնել, անունը)
obj(remind, name)
~~~

The true agent of the verb _հիշեցնել տալ_ “make remember (lit: make remind of)” is _քեզ_ “you”, i.e. “You will remember that name.”

The causative (infinitive) verb governs the syntactical subject of the sentence (i.e. the causer) with a [nsubj:caus]() relation. The infinitive verb governs the causative auxiliary with an [aux:caus]() relation.

For more details see [specific-syntax](http://universaldependencies.org/hy/overview/specific-syntax.html).
<!-- Interlanguage links updated Út zář 29 20:43:20 CEST 2020 -->
