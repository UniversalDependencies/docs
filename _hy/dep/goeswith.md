---
layout: relation
title: 'goeswith'
shortdef: 'goes with'
udver: '2'
---

This relation links two or more parts of a word that are separated in text that is not well edited.
These parts should be written together as one word according to the ortographic rules of Armenian.
The head is the first or in some sense the _main_ part, the other parts are attached to it with the `goeswith` relation (for consistency, similarly as in [flat](), [fixed]() and [conj]()).
Note that only the last part may be annotated with `SpaceAfter=No`.

~~~ sdparse
նա ի զուր էր այդքան անհանգստանում
goeswith(ի, զուր)
~~~

~~~ sdparse
կարգ ու կանոն հաստատել
goeswith(կարգ, ու)
goeswith(կարգ, կանոն)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:28 CET 2020 -->
