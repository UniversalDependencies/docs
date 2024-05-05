---
layout: relation
title:  'obl:agent'
shortdef : 'agent modifier'
udver: '2'
---

The relation `obl:agent` is used for agents of passive verbs. They are mainly expressed by a noun in genitive/dative with the following postposition կողմից. Note that in Armenian agents of passive verbs may also stand in ablative, rarely in instrumental and dative cases.

~~~ sdparse
Որոշումն/NOUN ընդունվել/VERB է/AUX իմ/DET հոր/NOUN կողմից/ADP ։ \n The-decision was made by my father .
obl:agent(ընդունվել, հոր)
obl:agent(made, father)
case(հոր, կողմից)
case(father, by)
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:21:35 CEST -->
