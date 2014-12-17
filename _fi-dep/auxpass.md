---
layout: relation
title:  'auxpass'
shortdef : 'passive auxiliary'
---

The only *passive auxiliary* (`auxpass`) in Finnish is *olla* (*to
be*). An auxiliary is only considered a passive auxiliary if the main
verb is in passive, not if only the auxiliary is in passive. In the
latter case the auxiliary is marked as a non-passive auxiliary,
[aux]().

<!-- TODO The distinction between the passive voice and the zeroth person is discussed in Section \ref{pass-vs-0th}. -->

<!-- fname:auxpass1.pdf -->
~~~ sdparse
Suunnitelmaan on tehty muutoksia . \n Into_the_plan have_been made changes .
nmod(tehty-3, Suunnitelmaan-1)
auxpass(tehty-3, on-2)
dobj(tehty-3, muutoksia-4)
punct(tehty-3, .-5)
~~~

<!-- fname:auxpass2.pdf -->
~~~ sdparse
Suunnitelmaan voidaan tehdä muutoksia . \n Into_the_plan can_be made(1st_inf.) changes .
nmod(tehdä-3, Suunnitelmaan-1)
aux(tehdä-3, voidaan-2)
dobj(tehdä-3, muutoksia-4)
punct(tehdä-3, .-5)
~~~
