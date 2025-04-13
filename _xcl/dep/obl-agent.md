---
layout: relation
title:  'obl:agent'
shortdef : 'agent modifier'
udver: '2'
---

The relation `obl:agent` is used for agents of passive verbs. They are mainly expressed by a noun in the ablative, rarely in the instrumental cases.

~~~ sdparse
մկրտեին ի նմանէ [Abl] ի Յորդանան գետ \n they were baptized by him in the river of Jordan
obl:agent(մկրտեին, նմանէ)
case(նմանէ, ի)
~~~

Typical agents are animate, but it is not a rule. Inanimate agents may be sometimes difficult to distinguish from instruments, which are also coded by the instrumental case and are attached using the simple relation `obl`.

~~~ sdparse
վարէր հոգւով [Ins] ն յ անապատ \n was led by the Spirit into the wilderness
obl:agent(վարէր, հոգւով)
obl:agent(led, Spirit)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:16 CET -->
