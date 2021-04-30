---
layout: relation
title: 'parataxis:restart'
shortdef: 'loosely connected clause because of restart'
udver: '2'
---

The `parataxis:restart` subtype of the [parataxis]() relation is used in spoken data for clauses
or clausal fragments that are not syntactically well connected to the previous clause because
the speaker has changed their mind and started talking about something else.

The new (restarted) clause is attached as a dependent of the earlier clause.

~~~ sdparse
poglejte mi smo re [gap] mmm mmm narobe me interpretirate \n look we are re [gap] mmm mmm wrong me you-interpret
parataxis:restart(poglejte, interpretirate)
parataxis:restart(look, you-interpret)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:24 CET 2020 -->
