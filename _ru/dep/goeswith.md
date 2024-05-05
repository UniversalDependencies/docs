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
Он остановился чтобы о тдышаться .
goeswith(тдышаться, о)
~~~

<!-- Interlanguage links updated Ne 5. května 2024, 18:21:16 CEST -->
