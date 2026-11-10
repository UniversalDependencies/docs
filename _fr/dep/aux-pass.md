---
layout: relation
title: 'aux:pass'
shortdef: 'passive auxiliary'
udver: '2'
---

A passive auxiliary of a clause is a non-main verb of the clause which contains the passive information.
In French, only the verb _être_ can be a passive auxiliary.

~~~ sdparse
Kennedy fut assassiné \n Kennedy was murdered
aux:pass(assassiné, fut)
~~~

Other auxiliaries associated with the same main verb are not labeled `aux:pass` but `aux` or `aux:tense` since they do not themselves indicate passive voice.

~~~ sdparse
Kennedy a été assassiné \n Kennedy has been murdered
aux:pass(assassiné, été)
aux(assassiné, a)
~~~
<!-- Interlanguage links updated Út 10. listopadu 2026, 22:38:23 CET -->
