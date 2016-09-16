---
layout: relation
title: 'auxpass'
shortdef: 'passive auxiliary'
---

A passive auxiliary (essere / venire) of a clause is a non-main verb of the clause which contains the passive information.

~~~ sdparse
L' escursione era guidata da Castiglioni
auxpass(guidata, era)
~~~

Note that periphrastic tenses in passive constructions are marked as follows, by distinguishing between the passive auxiliary (i.e. that immediately preceding the verbal head) which is marked as auxpass and the tense auxiliaries (the preceding ones) which are marked as aux.

~~~ sdparse
è stato trovato
auxpass(trovato, stato)
aux(trovato, è)
~~~
~~~ sdparse
potrebbe essere stato trovato
auxpass(trovato, stato)
aux(trovato, essere)
aux(trovato, potrebbe)
~~~
