---
layout: relation
title: 'auxpass'
shortdef: 'passive auxiliary'
---

A passive auxiliary of a clause is a non-main verb of the clause which
contains the passive information.

~~~ sdparse
Kennedy blev mördad \n Kennedy was murdered
auxpass(mördad, blev)
~~~


Other auxiliaries associated with the same main verb are not labeled `auxpass` since they do not themselves indicate passive voice.

~~~ sdparse
Kennedy har blivit mördad \n Kennedy has been murdered
auxpass(mördad, blivit)
aux(mördad, har)
~~~

<!-- Interlanguage links updated Út zář 29 20:31:44 CEST 2020 -->
