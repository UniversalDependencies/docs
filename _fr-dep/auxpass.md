---
layout: relation
title: 'auxpass'
shortdef: 'passive auxiliary'
---

A passive auxiliary of a clause is a non-main verb of the clause which
contains the passive information.

~~~ sdparse
Kennedy fut assassiné \n Kennedy was murdered
auxpass(assassiné, fut)
~~~


Other auxiliaries associated with the same main verb are not labeled `auxpass` but `aux` since they do not themselves indicate passive voice.

~~~ sdparse
Kennedy a été assassiné \n Kennedy has been murdered
auxpass(assassiné, été)
aux(assassiné, a)
~~~
