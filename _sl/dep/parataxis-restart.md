---
layout: relation
title: 'parataxis:restart'
shortdef: 'loosely connected clause because of restart'
udver: '2'
---

The `parataxis:restart` subtype of the [parataxis]() relation is used in spoken data for clauses
or clausal fragments that are not syntactically well connected to the previous clause because
the speaker has changed their intended verbalization and started talking about something else.

The new (restarted) clause is attached as a dependent of the earlier, abandoned clause. Given that the first sentence can be abandoned at any point, the head of the `parataxis:restart` relation is often a syntactically incomplete clause.

~~~ sdparse
slika kaže kako so ... ta človek sedi \n image shows how they-have ... this man is-sitting
parataxis:restart(kaže, sedi)
parataxis:restart(shows, is-sitting)
~~~

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:26 CET -->
