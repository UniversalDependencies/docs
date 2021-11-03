---
layout: relation
title: 'goeswith'
shortdef: 'goes with'
udver: '2'
---

This relation links two parts of a word that are separated in text
that is not well edited.
The head is always the first part, the other parts are attached to it with the `goeswith` relation
(for consistency, similarly as in [flat](), [fixed]() and [conj]()).
Note that only the last part may be annotated with `SpaceAfter=No`.

~~~ sdparse
Zastavil a z těžka oddychoval .
goeswith(z, těžka)
~~~
<!-- Interlanguage links updated St lis 3 20:58:55 CET 2021 -->
