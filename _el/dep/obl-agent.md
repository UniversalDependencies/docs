---
layout: relation
title:  'obl:agent'
shortdef : 'agent modifier'
udver: '2'
---

The relation `obl:agent` is used for agents of passive verbs.
In Greek, the agent is a nominal with the preposition _από_.
(Note however that this preposition can be also used in other functions.)

~~~ sdparse
Το μοναστήρι καταστράφηκε από σουηδικά στρατεύματα. \n The monastery was by Swedish troops destroyed .
obl:agent(καταστράφηκε, στρατεύματα)
case(στρατεύματα, από)
~~~
