---
udver: '2'
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
---

`nsubj` marks noun phrases that are the subject of a finite clause. The head of `nsubj` is typically a verb, but can be another noun phrase or adjective, for example in copula constructions.

~~~ sdparse
Die Frau schläft . \n The woman sleeps .
nsubj(schläft, Frau)
~~~

~~~ sdparse
Die Frau ist Ärztin . \n The woman is a doctor .
nsubj(Ärztin, Frau)
~~~

~~~ sdparse
Die Frau ist müde . \n The woman is tired .
nsubj(müde, Frau)
~~~

~~~ sdparse
Er wurde schnell krank . \n He became sick quickly .
nsubj(krank, Er)
~~~

Note that the verbs sein and werden are not considered part of copular constructions when they denote a happening, in which case they are full verbs.

~~~ sdparse
Der Vortrag ist in dem großen Saal . \n The lecture is in the great hall .
nsubj(ist, Vortrag)
~~~

~~~ sdparse
Das wird schon . \n It will be okay .
nsubj(wird, Das)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:32 CET 2020 -->
